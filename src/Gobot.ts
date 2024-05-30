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
import { chmodSync, existsSync, renameSync, statSync } from 'fs'
import { globSync } from 'glob'
import { markdownTable } from 'markdown-table'
import { arch as _arch, platform } from 'os'
import { basename, dirname, join, resolve } from 'path'
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
        version: `*`,
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
    if (this.version === '') throw new Error(`Version cannot be empty`)
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
    return path
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
   *
   * @param [force=false] If true, download the binary even if it already exists.
   */
  async download(force = false) {
    const exactVersions = await this.getSatisfyingVersions(this.version)

    info(`Downloading versions`, stringify(exactVersions))
    const limiter = new Bottleneck({ maxConcurrent: 10 })
    await Promise.all(
      exactVersions.map((exactVersion) => {
        return limiter.schedule(() => {
          return this.getBinaryFilePath(exactVersion, force)
        })
      }),
    )
  }

  /**
   * Clear releases index and underlying release provider cache.
   */
  async clearAllReleases() {
    await this.releaseProvider.reset()
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

  findBinFilePathInArchiveDir(version: string) {
    const path = this.archiveDirPath(version)
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

  archiveDirPath(version: string) {
    const archiveDirPath = this.cachePath(
      `archives`,
      version,
      this.arch,
      this.os,
    )
    if (!existsSync(archiveDirPath)) mkdir(archiveDirPath)
    // dbg(`Archive root`, archiveDirPath)
    return archiveDirPath
  }

  archiveFilePathFromUrl(version: string, url: string) {
    const archiveFilePath = join(this.archiveDirPath(version), basename(url))
    // dbg(`Archive path`, archiveFilePath)
    return archiveFilePath
  }

  async unpack(archiveFilePath: string, destinationDirPath: string) {
    info(`Unpacking ${archiveFilePath}`)
    if (archiveFilePath.endsWith(`.exe`)) return
    if (COMPRESSED_ARCHIVE_EXTS.find((ext) => archiveFilePath.endsWith(ext))) {
      await decompress(archiveFilePath, destinationDirPath, {
        plugins: [decompressTarZ({ outfile: this.name }), decompressUnzip()],
      })
      return
    }
  }

  async getBinaryFilePath(
    versionRange = this.version || `*`,
    redownload = false,
  ) {
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

    const archiveFilePath = this.archiveFilePathFromUrl(exactVersion, url)

    if (!existsSync(archiveFilePath) || redownload) {
      const { name: downloadDirPath, removeCallback } = tmp.dirSync()
      const archiveDirPath = dirname(archiveFilePath)
      const downloadFilePath = join(downloadDirPath, basename(archiveFilePath))
      try {
        info(`Downloading ${url} to ${downloadFilePath}`)
        const res = await downloadFile(url, downloadFilePath)

        info(`Unpacking ${downloadFilePath}`)
        await this.unpack(downloadFilePath, downloadDirPath)

        if (existsSync(archiveDirPath)) {
          dbg(`Removing ${archiveDirPath}`)
          await safeRimraf(archiveDirPath, [this.cachePath()])
        }
        renameSync(downloadDirPath, archiveDirPath)
        info(`Renamed ${downloadDirPath} to ${archiveDirPath}`)
      } catch (e) {
        infoe(e)
        removeCallback()
      }
    }

    const binFilePath = this.findBinFilePathInArchiveDir(exactVersion)
    dbg(`Unpacked bin path`, binFilePath)

    // Ensure the binary is executable
    if (this.os !== 'win32') {
      chmodSync(binFilePath, '755')
    }
    return binFilePath
  }

  compare(a: string, b: string) {
    return compare(a, b)
  }

  satisfies(version: string, range: string) {
    return satisfies(version, range, { includePrerelease: true })
  }

  async getSatisfyingVersions(range: string) {
    if (range === `latest`) return [await this.getLatestVersion()]
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
    // dbg(`Possible releases`, possibleReleases)
    const release = possibleReleases.find((release) =>
      this.satisfies(release.version, range),
    )
    // dbg(`Matched release:`, release)
    return release
  }

  async releases() {
    const releases = await this.releaseProvider.reduceReleases()
    return releases.sort((a, b) => this.compare(b.version, a.version))
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
    const fname = await this.getBinaryFilePath()

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
