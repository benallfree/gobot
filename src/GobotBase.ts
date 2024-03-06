import decompressTargz from '@xhmikosr/decompress-targz'
import decompressUnzip from '@xhmikosr/decompress-unzip'
import Bottleneck from 'bottleneck'
import { spawn } from 'child_process'
import decompress from 'decompress'
import envPaths from 'env-paths'
import { chmodSync, existsSync } from 'fs'
import { arch as _arch, platform } from 'os'
import { basename, join, resolve } from 'path'
import { rimrafSync } from 'rimraf'
import { maxSatisfying, satisfies } from 'semver'
import { StoredRelease } from './ReleaseProviders/AbstractReleaseProvider'
import { GithubReleaseProvider } from './ReleaseProviders/GithubReleaseProvider'
import { ARCH_MAP, ArchKey, PLATFORM_MAP, PlatformKey } from './settings'
import { downloadFile } from './util/downloadFile'
import { dbg, info } from './util/log'
import { mergeConfig } from './util/mergeConfig'
import { mkdir, pwd } from './util/shell'

/**
 * Options for Gobot
 */
export interface GobotOptions {
  os: PlatformKey
  arch: ArchKey
  version: string
  env: NodeJS.ProcessEnv
  cachePath: string
  releaseProvider: typeof GithubReleaseProvider
}

/**
 * The default Gobot cache root. This is platform specific.
 */
export const DEFAULT_GOBOT_CACHE_ROOT = envPaths('gobot').cache

/**
 * Generic Gobot plugin. Subclass this for specific functionality.
 */
export class GobotBase {
  private repo: string
  private os: PlatformKey
  private arch: ArchKey
  private version: string
  private env: NodeJS.ProcessEnv
  private _cacheRoot = ''
  private releaseProvider: typeof GithubReleaseProvider

  /**
   * Create a new Gobot
   *
   * @param repo The repo name, in `<user>/<repo>` format.
   * @param optionsIn Option overrides
   */
  constructor(repo: string, optionsIn: Partial<GobotOptions> = {}) {
    this.repo = repo
    const defaultCachePath = DEFAULT_GOBOT_CACHE_ROOT
    dbg(`optionsIn`, optionsIn)
    const options = mergeConfig<GobotOptions>(
      {
        os: platform(),
        arch: _arch() as ArchKey,
        version: `*`,
        env: {},
        cachePath: defaultCachePath,
        releaseProvider: GithubReleaseProvider,
      },
      optionsIn,
    )
    dbg(`Gobot options:`, options)
    const { os, arch, version, env, cachePath, releaseProvider } = options
    this.os = os
    this.arch = arch
    this.version = version
    this.env = env
    this.cacheRoot = resolve(pwd(), cachePath, releaseProvider.slug, repo)
    dbg(`Final cache root`, this.cacheRoot)
    this.releaseProvider = releaseProvider
  }

  private get name() {
    return this.repo.split(`/`)[1]!
  }

  private get cacheRoot() {
    return this._cacheRoot
  }
  private set cacheRoot(path: string) {
    dbg(`Setting cache path`, path)
    this._cacheRoot = resolve(pwd(), path)
    mkdir('-p', path)
  }

  cachePath(...paths: string[]) {
    const path = resolve(this.cacheRoot, ...paths)
    mkdir('-p', path)
    return path
  }

  /**
   * Clear all items from cache (flush cache).
   */
  clearCache() {
    dbg(`Clearing cache:`, this.cacheRoot)
    rimrafSync(this.cacheRoot)
  }

  async download() {
    const tags = await this.versions()

    info(`Downloading versions`, tags)
    const limiter = new Bottleneck({ maxConcurrent: 10 })
    await Promise.all(
      tags.map((version) => {
        return limiter.schedule(() => {
          return this.getBinaryPath()
        })
      }),
    )
  }

  async getMatchingVersion(semver: string) {
    dbg(`Requested version:`, semver)
    const versions = await this.versions()
    const version = maxSatisfying(versions, semver)
    if (!version) {
      throw new Error(`No version satisfies ${semver} (${versions.join(', ')})`)
    }
    dbg(`Matched version:`, version)
    return version
  }

  private async getMatchingRelease(semver: string) {
    const version = await this.getMatchingVersion(semver)
    const releases = await this.releases()
    const release = releases.find((release) => release.version === version)
    if (!release) {
      throw new Error(`No release satisfies ${semver}`)
    }
    dbg(`Matched release:`, release)
    return release
  }

  async getMatchingVersions(semver: string) {
    const tags = await this.versions()
    return tags.filter((version) => satisfies(version, semver))
  }

  async getLatestVersion() {
    const tags = await this.versions()
    return tags[0] as string
  }

  async releases() {
    const provider = new this.releaseProvider(
      this.repo,
      this.cachePath(`releases`),
    )
    const releases = await provider.fetch()
    return releases
  }

  async versions(type?: 'js'): Promise<string[]>
  async versions(type: 'json'): Promise<string>
  async versions(type: 'cjs'): Promise<string>
  async versions(type: 'esm'): Promise<string>
  async versions(
    type: 'js' | 'json' | 'cjs' | 'esm' = 'js',
  ): Promise<string | string[]> {
    const releases = await this.releases()
    const js = releases.map((release) => release.version)
    const json = JSON.stringify(js, null, 2)
    switch (type) {
      case 'js':
        return js
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

  private unpackedBinPath(path: string) {
    const binName = this.os === 'win32' ? `${this.name}.exe` : `${this.name}`
    return resolve(path, binName)
  }

  private getArchiveUrl(release: StoredRelease) {
    const osAliases = PLATFORM_MAP[this.os]
    const archAliases = ARCH_MAP[this.arch]
    dbg({ osAliases, archAliases })

    for (let i = 0; i < release.archives.length; i++) {
      const archive = release.archives[i]!
      dbg(`Examining`, archive)

      const archiveName = basename(archive).toLocaleLowerCase()
      dbg(`Archive name`, archiveName)

      const osMatch = osAliases.some((osAlias) =>
        archiveName.includes(`_${osAlias}`),
      )
      const archMatch = archAliases.some((archAlias) =>
        archiveName.includes(`_${archAlias}`),
      )

      if (osMatch && archMatch) return archive
    }

    throw new Error(`No matching archive found for ${this.os} and ${this.arch}`)
  }

  async getBinaryPath() {
    const storedRelease = await this.getMatchingRelease(this.version)
    const { version, archives } = storedRelease
    const downloadRoot = this.cachePath(`archives`, version, this.arch, this.os)
    dbg(`Download root`, downloadRoot)
    const unpackedBinPath = this.unpackedBinPath(downloadRoot)
    dbg(`Unpacked bin path`, unpackedBinPath)
    const link = this.getArchiveUrl(storedRelease)
    dbg(`Download link`, link)
    const downloadPath = join(downloadRoot, basename(link))
    dbg(`Download path`, downloadPath)

    if (!existsSync(unpackedBinPath)) {
      info(`Downloading ${link}`)
      const res = await downloadFile(link, downloadPath)

      info(`Unpacking ${downloadPath}`)
      await decompress(downloadPath, downloadRoot, {
        plugins: [decompressTargz(), decompressUnzip()],
      })

      // Ensure the binary is executable
      if (this.os !== 'win32') {
        chmodSync(unpackedBinPath, '755')
      }
    }
    return unpackedBinPath
  }

  /**
   * Run a Go binary.
   * @param args The arguments to pass to `spawn()`
   * @param options Globals will be used for `os`, `version`, `arch`, and `env` unless specified
   * @returns
   */
  async run(args: string[]) {
    const fname = await this.getBinaryPath()

    dbg(`Running ${fname}`, args)

    const proc = spawn(fname, args, {
      env: this.env,
      stdio: 'inherit',
      cwd: pwd(),
    })

    proc.on('error', (err) => {
      console.error(`Failed to start ${this.name}: ${err.message}`)
    })

    proc.on('exit', (code) => {
      console.log(`${this.name} exited with code ${code}`)
    })

    return proc
  }
}
