import { existsSync, readFileSync, statSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { compare, rcompare, valid } from 'semver'
import { dbg, info } from '../util/log'
import { mkdir } from '../util/shell'
import { smartFetch } from '../util/smartFetch'
import {
  AbstractReleaseProvider,
  StoredRelease,
} from './AbstractReleaseProvider'

type GithubRelease = {
  url: string
  tag_name: string
  prerelease: string
  assets: {
    name: string
    browser_download_url: string
  }[]
}

type GithubReleaseCollection = GithubRelease[]
const RELEASES_NAME = `releases.json`

export class GithubReleaseProvider extends AbstractReleaseProvider {
  static get slug() {
    return `github`
  }

  async fetch(force = false) {
    const cachedReleasesFilePath = resolve(this.cachePath, RELEASES_NAME)
    mkdir(`-p`, this.cachePath)
    dbg(`Releases cache: ${cachedReleasesFilePath}`)
    const cacheExists = existsSync(cachedReleasesFilePath)
    dbg(`Release cache exists: ${cacheExists}`)

    let cacheIsFresh = false

    if (cacheExists) {
      const stats = statSync(cachedReleasesFilePath)
      const now = new Date()
      const cacheAge = (now.getTime() - stats.mtime.getTime()) / 1000 / 60 / 60
      if (cacheAge < 24) {
        cacheIsFresh = true
      }
    }

    dbg(`Release cache freshness: ${cacheIsFresh}`)

    if (!cacheIsFresh || force) {
      let page = 1
      const remoteReleases: GithubReleaseCollection = []
      do {
        info(`Fetching info for ${this.repo} releases page ${page}...`)
        const url = `https://api.github.com/repos/${this.repo}/releases?per_page=100&page=${page}`
        const chunk = await smartFetch<GithubReleaseCollection>(
          url,
          resolve(this.cachePath, `releases_page_${page}.json`),
        )
        if (chunk.length === 0) break
        remoteReleases.push(...chunk)
        page++
      } while (true)

      const sortedVersions: StoredRelease[] = remoteReleases
        .map((release) => {
          dbg(release.tag_name)
          const stored: StoredRelease = {
            version: release.tag_name.slice(1),
            archives: release.assets
              .filter(
                (asset) =>
                  asset.browser_download_url.endsWith(`.zip`) ||
                  asset.browser_download_url.endsWith(`.tar.gz`) ||
                  asset.browser_download_url.endsWith(`.tgz`),
              )
              .map((asset) => asset.browser_download_url),
          }
          return stored
        })
        .filter((release) => valid(release.version))
        .sort((a, b) => rcompare(a.version, b.version)) // Sort versions in descending order using semver

      const json = JSON.stringify(sortedVersions, null, 2)
      writeFileSync(cachedReleasesFilePath, json)
    } else {
      dbg('Using cached release tags data.')
    }
    const cachedReleases = JSON.parse(
      readFileSync(cachedReleasesFilePath, 'utf8').toString(),
    ) as StoredRelease[]

    // Ensure the cached releases are sorted by version as they might have been manually edited or corrupted.
    const tags = cachedReleases.sort((a, b) => compare(b.version, a.version))

    return tags
  }
}
