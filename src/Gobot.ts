import { find, flatMap, keys, uniq } from '@s-libs/micro-dash'
import Bottleneck from 'bottleneck'
import {
  type ChildProcessByStdio,
  type SpawnOptionsWithStdioTuple,
  type StdioNull,
  type StdioPipe,
} from 'child_process'
import decompress from 'decompress'
import decompressUnzip from 'decompress-unzip'
import envPaths from 'env-paths'
import { chmodSync, existsSync, renameSync, statSync, writeFileSync } from 'fs'
import { globSync } from 'glob'
import { markdownTable } from 'markdown-table'
import { arch as _arch, platform } from 'os'
import { basename, join, resolve } from 'path'
import { compare, satisfies } from 'semver'
import type { Readable } from 'stream'
import tmp from 'tmp'
import decompressTarZ from '../packages/decompress-tar-z'
import { GithubReleaseProvider } from './GithubReleaseProvider'
import { verbosity } from './settings'
import { downloadFile } from './util/downloadFile'
import { dbg, info, infoe } from './util/log'
import { mergeConfig } from './util/mergeConfig'
import { safeRimraf } from './util/safeRimraf'
import { sanitizeOptions } from './util/sanitize'
import { expandAndSortSemVers } from './util/semver'
import { mkdir, pwd } from './util/shell'
import { spawn } from './util/spawn'
import { stringify } from './util/stringify'

export type PlatformKey = NodeJS.Platform
export type ArchKey = NodeJS.Architecture

export type Release = {
  version: string
  archives: {
    [osName in PlatformKey]?: {
      [archName in ArchKey]?: string
    }
  }
  allUrls: string[]
  allowedUrls: string[]
}

const RELEASES_NAME = `releases.json`

/**
 * Options for Gobot
 */
export interface GobotOptions {
  os: PlatformKey
  arch: ArchKey
  version: string
  env: NodeJS.ProcessEnv
  cachePath: string
}

export type VersionFormat = (typeof Gobot.VERSION_FORMATS)[number]

export const COMPRESSED_ARCHIVE_EXTS = [`.zip`, `.tgz`, `.bz2`, `.gz`, `.xz`]

/**
 * Generic Gobot app. Subclass this for specific functionality.
 */
export class Gobot {
  /**
   * The default Gobot cache root. This is platform specific.
   */

  static DEFAULT_GOBOT_CACHE_ROOT = (...paths: string[]) =>
    resolve(envPaths('gobot').cache, ...paths)

  static VERSION_FORMATS = ['js', 'txt', 'json', 'cjs', 'esm', 'md'] as const

  protected repo: string
  protected os: PlatformKey
  protected arch: ArchKey
  protected version: string
  protected env: NodeJS.ProcessEnv
  protected cacheRoot: string
  protected storedReleases: undefined | Release[] = undefined
  protected releaseProvider: GithubReleaseProvider

  /**
   * Create a new Gobot
   *
   * @param repo The repo name, in `<user>/<repo>` format.
   * @param optionsIn Option overrides. `env` is passed to the spawned process.
   */
  constructor(
    repo: string,
    releaseProviderFactory: (
      repo: string,
      cacheRoot: string,
    ) => GithubReleaseProvider,
    optionsIn: Partial<GobotOptions> = {},
  ) {
    this.repo = repo
    const defaultCachePath = Gobot.DEFAULT_GOBOT_CACHE_ROOT(
      this.className,
      this.repo,
    )
    dbg(`optionsIn`, sanitizeOptions(optionsIn))
    const options = mergeConfig<GobotOptions>(
      {
        os: platform(),
        arch: _arch() as ArchKey,
        version: ``,
        env: {},
        cachePath: defaultCachePath,
      },
      optionsIn,
    )
    dbg(`Gobot options:`, sanitizeOptions(options))
    const { os, arch, version, env, cachePath } = options
    this.os = os
    this.arch = arch
    this.version = version
    this.env = env
    this.cacheRoot = resolve(pwd(), cachePath)
    mkdir(this.cacheRoot)
    dbg(`Final cache root`, this.cacheRoot)
    this.releaseProvider = releaseProviderFactory(
      this.repo,
      join(this.cacheRoot, `release-provider`),
    )
    dbg(`Release provider is`, this.releaseProvider.className)
  }

  get className() {
    return `Gobot`
  }

  get name() {
    return this.repo.split(`/`)[1]!
  }

  cachePath(...paths: string[]) {
    const path = resolve(this.cacheRoot, ...paths)
    mkdir(path)
    return (...paths: string[]) => join(path, ...paths)
  }

  async update() {
    await this.clearAllReleases()
    await this.releases()
  }

  /**
   * Clear all items from cache (flush cache).
   */
  async reset() {
    dbg(`Clearing cache:`, this.cacheRoot)
    await safeRimraf(this.cacheRoot, [this.cacheRoot])
  }

  static async reset(cachePath = Gobot.DEFAULT_GOBOT_CACHE_ROOT()) {
    dbg(`Clearing cache:`, cachePath)
    await safeRimraf(cachePath)
  }

  /**
   * Download the binary for the specified semver.
   */
  async download() {
    const exactVersions = await this.getSatisfyingVersions(this.version)

    info(`Downloading versions`, exactVersions)
    const limiter = new Bottleneck({ maxConcurrent: 10 })
    await Promise.all(
      exactVersions.map((exactVersion) => {
        return limiter.schedule(() => {
          return this.getBinaryPath(exactVersion)
        })
      }),
    )
  }

  /**
   * Clear releases index and underlying release provider cache.
   */
  async clearAllReleases() {
    await this.releaseProvider.reset()
    await this.clearStoredReleases()
  }

  /**
   * Clear stored releases only.
   */
  async clearStoredReleases() {
    return safeRimraf(this.cachePath()(RELEASES_NAME), [this.cacheRoot])
  }

  async versions(type?: 'js', includeWildcards?: boolean): Promise<string[]>
  async versions(type: 'md', includeWildcards?: boolean): Promise<string>
  async versions(type: 'json', includeWildcards?: boolean): Promise<string>
  async versions(type: 'txt', includeWildcards?: boolean): Promise<string>
  async versions(type: 'cjs', includeWildcards?: boolean): Promise<string>
  async versions(type: 'esm', includeWildcards?: boolean): Promise<string>
  async versions(
    type: VersionFormat = 'js',
    includeWildcards = false,
  ): Promise<string | string[]> {
    const versions = await (async () => {
      const versions = (await this.releases()).map((release) => release.version)
      if (!includeWildcards) return versions
      return expandAndSortSemVers(versions)
    })()
    const js = versions
    if (type === `js`) return js
    if (type === `txt`) return js.join(`\n`)
    if (type === 'md') {
      const allPlatforms = await this.allPlatforms()
      const releases = await this.releases()
      const md = markdownTable([
        [`Version`, ...allPlatforms],
        ...(await releases).map((release) => {
          return [
            release.version,
            ...allPlatforms.map((os) => keys(release.archives[os]).join(`/`)),
          ]
        }),
      ])
      return md
    }
    const json = stringify(js, undefined, 2)
    switch (type) {
      case 'json':
        return json
      case 'cjs':
        return `module.exports = ${json}`
      case 'esm':
        return `export const versions = ${json}`
      default:
        throw new Error(`Unknown version format ${type}`)
    }
  }

  get binName() {
    const binName = this.os === 'win32' ? `${this.name}.exe` : `${this.name}`
    dbg(`Binary name`, binName)
    return binName
  }

  findArchiveBinPath(version: string) {
    const path = this.archiveRoot(version)
    const fname = (() => {
      const fname = globSync(join(path, `**`, this.binName), { nodir: true })[0]
      if (fname) return fname
      return globSync(join(path, `**`), { nodir: true }).find((path) => {
        const stats = statSync(path)
        const isExecutable =
          (this.os === 'win32' && path.endsWith(`.exe`)) ||
          !!(stats.mode & parseInt('0100', 8))
        if (isExecutable) return path
      })
    })()
    if (!fname) {
      throw new Error(`Could not find ${this.binName} anywhere in path ${path}`)
    }
    return fname
  }

  archiveRoot(version: string) {
    const archiveRoot = this.cachePath(
      `archives`,
      version,
      this.arch,
      this.os,
    )()
    dbg(`Archive root`, archiveRoot)
    return archiveRoot
  }

  archivePath(version: string, url: string) {
    const archivePath = join(this.archiveRoot(version), basename(url))
    dbg(`Archive path`, archivePath)
    return archivePath
  }

  async unpack(downloadPath: string, version: string) {
    info(`Unpacking ${downloadPath}`)
    if (downloadPath.endsWith(`.exe`)) return
    if (COMPRESSED_ARCHIVE_EXTS.find((ext) => downloadPath.endsWith(ext))) {
      await decompress(downloadPath, this.archiveRoot(version), {
        plugins: [decompressTarZ({ outfile: this.name }), decompressUnzip()],
      })
      return
    }
    if (this.os !== 'win32') {
      chmodSync(downloadPath, '755')
    }
  }

  async getBinaryPath(versionRange = this.version || `*`) {
    const storedRelease = await this.maxSatisfyingRelease(versionRange)
    if (!storedRelease) {
      throw new Error(
        `No release satisfying version ${versionRange} for ${this.os}/${this.arch}`,
      )
    }
    const url = storedRelease.archives[this.os]?.[this.arch]
    if (!url) {
      throw new Error(
        `No archive URL satisfying ${this.repo} version ${versionRange} for ${this.os}/${this.arch}`,
      )
    }
    dbg(`Download link`, url)

    const { version: exactVersion, archives } = storedRelease

    const archivePath = this.archivePath(exactVersion, url)

    if (!existsSync(archivePath)) {
      const { name, removeCallback } = tmp.dirSync()
      const downloadPath = join(name, basename(archivePath))
      try {
        info(`Downloading ${url} to ${downloadPath}`)
        const res = await downloadFile(url, downloadPath)

        await this.unpack(downloadPath, exactVersion)

        // Ensure the binary is executable
        if (this.os !== 'win32') {
          chmodSync(downloadPath, '755')
        }

        info(`Renamed ${downloadPath} to ${archivePath}`)
        renameSync(downloadPath, archivePath)
      } catch (e) {
        infoe(e)
        removeCallback()
      }
    }

    const unpackedBinPath = this.findArchiveBinPath(exactVersion)
    dbg(`Unpacked bin path`, unpackedBinPath)

    return unpackedBinPath
  }

  compare(a: string, b: string) {
    return compare(a, b)
  }

  satisfies(version: string, range: string) {
    return satisfies(version, range)
  }

  async getSatisfyingVersions(range: string) {
    const tags = await this.versions()
    return tags.filter((version) => this.satisfies(version, range))
  }

  async getLatestVersion() {
    const tags = await this.versions()
    return tags[0] as string
  }

  async maxSatisfyingVersion(range: string) {
    const satisfiedVersions = (await this.versions()).filter((version) =>
      this.satisfies(version, range),
    )
    dbg(`Matched version:`, satisfiedVersions)
    return satisfiedVersions[0]
  }

  async maxSatisfyingRelease(range: string) {
    dbg(`Searching for max release`, range)
    const possibleReleases = (await this.releases()).filter(
      (release) => !!release.archives[this.os]?.[this.arch],
    ) // Select only releases valid for this os/arch
    dbg(`Possible releases`, possibleReleases)
    const release = possibleReleases.find((release) =>
      this.satisfies(release.version, range),
    )
    dbg(`Matched release:`, release)
    return release
  }

  async releases() {
    const cachedReleasesFilePath = this.cachePath()(RELEASES_NAME)
    dbg(`Releases cache: ${cachedReleasesFilePath}`)

    if (this.storedReleases) return this.storedReleases

    this.storedReleases = (await this.releaseProvider.reduceReleases()).sort(
      (a, b) => this.compare(b.version, a.version),
    )

    const json = stringify(this.storedReleases, undefined, 2)
    writeFileSync(cachedReleasesFilePath, json)
    dbg(`Stored releases from fetch`, cachedReleasesFilePath)

    return this.storedReleases
  }

  filterArgs(args: string[]) {
    return args
  }

  async hasAnyBuildForVersion(version: string) {
    const releases = await this.releases()
    const release = releases.find(
      (release) => compare(release.version, version) === 0,
    )
    if (!release) return false
    return !!find(
      release.archives,
      (platformInfo, platformKey) => keys(platformInfo).length > 0,
    )
  }

  async allPlatforms() {
    return uniq(
      flatMap(await this.releases(), (release) => keys(release.archives)),
    )
  }

  /**
   * Run a binary
   * @param args Array of arguments to pass to the binary
   * @param options Spawn options specific to this run. `env` from these options is merged with `env` from Gobot constructor options, if any.
   * @param onProc Callback with child process after spawn() launches
   * @returns Exit code from spawned process
   */
  async run(
    args: string[],
    options: Partial<
      SpawnOptionsWithStdioTuple<StdioNull, StdioPipe, StdioPipe>
    > = {},
    onProc: (proc: ChildProcessByStdio<null, Readable, Readable>) => void = (
      proc,
    ) => {
      if (verbosity() >= 3) return
      proc.stdout.on('data', (buf) => process.stdout.write(buf))
      proc.stderr.on('data', (buf) => process.stderr.write(buf))
    },
  ) {
    const fname = await this.getBinaryPath()

    // Ensure the binary is executable
    if (this.os !== 'win32') {
      chmodSync(fname, '755')
    }

    dbg(`Running${fname}`)
    dbg(`Original args`, args)
    const _filteredArgs = this.filterArgs(args)
    dbg(`Filtered args`, _filteredArgs)

    return spawn(
      [fname, ..._filteredArgs].join(' '),
      { ...options, env: { ...this.env, ...options.env } },
      onProc,
    )
  }
}

export const mkGobot = (repo: string, config?: GobotOptions) =>
  new Gobot(
    repo,
    (repo, cacheRoot) => new GithubReleaseProvider(repo, cacheRoot),
    config,
  )
