import { forEach } from '@s-libs/micro-dash'
import { join, resolve } from 'path'
import { valid } from 'semver'
import type { StoredRelease } from './Gobot'
import { dbg, info } from './util/log'
import { mergeConfig } from './util/mergeConfig'
import { mkdir } from './util/shell'
import { smartFetch } from './util/smartFetch'
import { stringify } from './util/stringify'

export interface GithubRelease {
  url: string
  tag_name: string
  prerelease: string
  assets: {
    name: string
    browser_download_url: string
  }[]
}

export type GithubReleaseCollection = GithubRelease[]

type ArchMap = {
  [_ in NodeJS.Architecture]?: {
    aliases: string[]
  }
}

type ArchAliasMap = {
  aliases: string[]
}

type SupportedArchMap = {
  arm64: ArchAliasMap
  x64: ArchAliasMap
  ia32: ArchAliasMap
  arm: ArchAliasMap
}

export const SUPPORTED_ARCH: SupportedArchMap = {
  arm64: {
    aliases: [],
  },
  x64: {
    aliases: [`x86_64`, `amd64`],
  },
  ia32: {
    aliases: [`386`],
  },
  arm: {
    aliases: ['armv7', 'armv6', 'armv5'],
  },
}

export const DEFAULT_PLATFORM_MAP = {
  freebsd: {
    aliases: [],
    architectures: SUPPORTED_ARCH,
  },
  darwin: {
    aliases: ['mac', 'osx', 'macos'],
    architectures: SUPPORTED_ARCH,
  },
  linux: {
    aliases: [],
    architectures: SUPPORTED_ARCH,
  },
  win32: {
    aliases: ['win', 'windows'],
    architectures: SUPPORTED_ARCH,
  },
} as const

export type PlatformMap = typeof DEFAULT_PLATFORM_MAP

export type GithubReleaseProviderOptions = {
  platformMap: PlatformMap
}

export class GithubReleaseProvider {
  protected repo: string
  protected cacheRoot: string
  platformMap: PlatformMap

  constructor(
    repo: string,
    cacheRoot: string,
    optionsIn: Partial<GithubReleaseProviderOptions> = {},
  ) {
    this.repo = repo
    this.cacheRoot = cacheRoot
    const options = mergeConfig<GithubReleaseProviderOptions>(
      {
        platformMap: DEFAULT_PLATFORM_MAP,
      },
      optionsIn,
    )
    dbg(`GithubReleaseProvider options`, stringify(options, null, 2))
    const { platformMap: releaseMap } = options
    this.platformMap = releaseMap
  }

  get slug() {
    return `GithubReleaseProvider`
  }

  cachePath(...paths: string[]) {
    const path = resolve(this.cacheRoot, ...paths)
    mkdir('-p', path)
    return (...paths: string[]) => join(path, ...paths)
  }

  protected isValidRelease(release: GithubRelease) {
    const version = this.extractVersionFromTag(release.tag_name)
    const isValid = !!valid(version)
    dbg(`Version ${version} is valid:`, isValid)
    return isValid
  }

  async fetch() {
    let page = 1
    const remoteReleases: GithubReleaseCollection = []
    do {
      info(`Fetching info for ${this.repo} releases page ${page}...`)
      const init = process.env.GITHUB_TOKEN
        ? {
            headers: {
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
          }
        : undefined
      const url = `https://api.github.com/repos/${this.repo}/releases?per_page=100&page=${page}`
      const chunk = await smartFetch<GithubReleaseCollection>(
        url,
        this.cachePath()(`releases_page_${page}.json`),
        init,
      )
      if (chunk.length === 0) break
      remoteReleases.push(...chunk)
      page++
    } while (true)
    dbg(
      `Remote releases`,
      remoteReleases.map((release) => release.tag_name).join(`, `),
    )

    return remoteReleases
      .filter((release) => this.isValidRelease(release))
      .map((release) => {
        dbg(`Release tag name`, release.tag_name)
        const stored: StoredRelease = {
          version: this.extractVersionFromTag(release.tag_name),
          archives: this.getArchivesForRelease(release),
        }
        dbg(`Stored asset`, stored)
        return stored
      })
  }

  getArchivesForRelease(release: GithubRelease): StoredRelease['archives'] {
    const archives: StoredRelease['archives'] = {}

    const { assets } = release
    const allowedExts = [`.zip`, `.tgz`, `.tar.gz`, `.bz2`]
    const urls = assets
      .map((asset) => asset.browser_download_url)
      .filter((url) => allowedExts.some((ext) => url.endsWith(ext)))

    dbg(`Examining ${release.tag_name}`, urls)
    if (urls.length === 0) {
      return archives
    }

    forEach(this.platformMap, (platformInfo, platformKey) => {
      forEach(platformInfo?.architectures, (archInfo, archKey) => {
        const platformAliases = [
          platformKey,
          ...(platformInfo?.aliases || []),
        ].filter((v) => !!v)
        const platformRegex = new RegExp(
          `[_-](?:${platformAliases.join(`|`)})[_\\-.]`,
          'i',
        )

        const archAliases = [archKey, ...(archInfo?.aliases || [])].filter(
          (v) => !!v,
        )
        const archRegex = new RegExp(
          `[_-](?:${archAliases.join(`|`)})[_\\-.]`,
          'i',
        )

        dbg(`Scanning for`, platformAliases, archAliases)
        urls.forEach((url) => {
          if (
            platformRegex.test(url.toLocaleLowerCase()) &&
            archRegex.test(url.toLocaleLowerCase())
          ) {
            dbg(`\tMatched ${url}`)
            archives[platformKey] = {
              ...archives[platformKey],
              [archKey]: url,
            }
          }
        })
      })
    })
    dbg(`Archives`, archives)
    return archives
  }

  protected extractVersionFromTag(tag: string) {
    return tag.slice(1)
  }
}
