import { find, flatMap, keys, uniq } from '@s-libs/micro-dash'
import Bottleneck from 'bottleneck'
import { spawn, type StdioOptions } from 'child_process'
import decompress from 'decompress'
import decompressUnzip from 'decompress-unzip'
import envPaths from 'env-paths'
import { chmodSync, existsSync, statSync, writeFileSync } from 'fs'
import { globSync } from 'glob'
import { markdownTable } from 'markdown-table'
import { arch as _arch, platform } from 'os'
import { basename, join, resolve } from 'path'
import { rimraf } from 'rimraf'
import { compare, satisfies } from 'semver'
import decompressTarZ from '../packages/decompress-tar-z'
import { GithubReleaseProvider } from './GithubReleaseProvider'
import { downloadFile } from './util/downloadFile'
import { dbg, info } from './util/log'
import { mergeConfig } from './util/mergeConfig'
import { sanitizeOptions } from './util/sanitize'
import { mkdir, pwd } from './util/shell'
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
   * @param optionsIn Option overrides
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
      this.slug,
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
    dbg(`Release provider is`, this.releaseProvider.slug)
  }

  get slug() {
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
    await rimraf(this.cacheRoot)
  }

  static async reset(cachePath = Gobot.DEFAULT_GOBOT_CACHE_ROOT()) {
    dbg(`Clearing cache:`, cachePath)
    await rimraf(cachePath)
  }

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

  async clearAllReleases() {
    await this.releaseProvider.reset()
    await rimraf(this.cachePath()(RELEASES_NAME))
  }

  async clearStoredReleases() {
    await rimraf(this.cachePath()(RELEASES_NAME))
  }

  async versions(type?: 'js'): Promise<string[]>
  async versions(type?: 'md'): Promise<string>
  async versions(type: 'json'): Promise<string>
  async versions(type: 'txt'): Promise<string>
  async versions(type: 'cjs'): Promise<string>
  async versions(type: 'esm'): Promise<string>
  async versions(type: VersionFormat = 'js'): Promise<string | string[]> {
    const versions = (await this.releases()).map((release) => release.version)
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
    const json = stringify(js, null, 2)
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
    const path = this.downloadRoot(version)
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

  downloadRoot(version: string) {
    const downloadRoot = this.cachePath(
      `archives`,
      version,
      this.arch,
      this.os,
    )()
    dbg(`Download root`, downloadRoot)
    return downloadRoot
  }

  downloadPath(version: string, url: string) {
    const downloadPath = join(this.downloadRoot(version), basename(url))
    dbg(`Download path`, downloadPath)
    return downloadPath
  }

  async unpack(downloadPath: string, version: string) {
    info(`Unpacking ${downloadPath}`)
    await decompress(downloadPath, this.downloadRoot(version), {
      plugins: [decompressTarZ({ outfile: this.name }), decompressUnzip()],
    })
  }

  async getBinaryPath(versionRangeIn?: string) {
    const versionRange = versionRangeIn || this.version || `*`
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

    const downloadPath = this.downloadPath(exactVersion, url)

    if (!existsSync(downloadPath)) {
      info(`Downloading ${url}`)
      const res = await downloadFile(url, downloadPath)

      await this.unpack(downloadPath, exactVersion)

      const unpackedBinPath = this.findArchiveBinPath(exactVersion)

      // Ensure the binary is executable
      if (this.os !== 'win32') {
        chmodSync(unpackedBinPath, '755')
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

    const json = stringify(this.storedReleases, null, 2)
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
   * Run a binary.
   * @param args The arguments to pass to `spawn()`
   * @param options Globals will be used for `os`, `version`, `arch`, and `env` unless specified
   * @returns
   */
  async run(args: string[], stdio: StdioOptions = 'inherit') {
    const fname = await this.getBinaryPath()

    // Ensure the binary is executable
    if (this.os !== 'win32') {
      chmodSync(fname, '755')
    }

    dbg(`Running${fname}`)
    dbg(`Original args`, args)
    const _filteredArgs = this.filterArgs(args)
    dbg(`Filtered args`, _filteredArgs)

    const proc = spawn(fname, _filteredArgs, {
      env: this.env,
      stdio,
      cwd: pwd(),
    })

    return proc
  }
}

export const mkGobot = (repo: string, config?: GobotOptions) =>
  new Gobot(
    repo,
    (repo, cacheRoot) => new GithubReleaseProvider(repo, cacheRoot),
    config,
  )
