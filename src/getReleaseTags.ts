import { existsSync, readFileSync, statSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { compare, rcompare, satisfies } from 'semver'
import { dbg } from './log'
import { cachePath } from './settings/cache'
import { version } from './settings/version'
import { smartFetch } from './smartFetch'

type Release = {
  url: string
  tag_name: string
  prerelease: string
  assets: {
    name: string
    browser_download_url: string
  }[]
}
type Releases = Release[]

export const getReleaseTags = async (semver = version()) => {
  const cacheFile = resolve(cachePath(), `releases.json`)
  dbg(`Semver filter:`, semver)
  dbg(`Releases cache: ${cacheFile}`)
  const cacheExists = existsSync(cacheFile)
  dbg(`Release cache exists: ${cacheExists}`)

  let cacheIsFresh = false

  if (cacheExists) {
    const stats = statSync(cacheFile)
    const now = new Date()
    const cacheAge = (now.getTime() - stats.mtime.getTime()) / 1000 / 60 / 60
    if (cacheAge < 24) {
      cacheIsFresh = true
    }
  }

  dbg(`Release cache freshness: ${cacheIsFresh}`)

  if (!cacheIsFresh) {
    let page = 1
    const releases: Releases = []
    do {
      dbg(`Fetching info for PocketBase releases page ${page}...`)
      const chunk = await smartFetch<Releases>(
        `https://api.github.com/repos/pocketbase/pocketbase/releases?per_page=100&page=${page}`,
        resolve(cachePath(), `pb_releases_page_${page}.json`), // Cache each page individually to avoid re-fetching all data for updates.
      )
      if (chunk.length === 0) break
      releases.push(...chunk)
      page++
    } while (true)

    const filteredReleases = releases
      .map((release) => release.tag_name.slice(1)) // Remove 'v' prefix from tag name for proper semver comparison
      .sort((a, b) => rcompare(a, b)) // Sort versions in descending order using semver

    writeFileSync(cacheFile, JSON.stringify(filteredReleases, null, 2))
  } else {
    dbg('Using cached release tags data.')
  }
  const cachedReleases = JSON.parse(readFileSync(cacheFile, 'utf8')) as string[]
  // Ensure the cached releases are sorted by version as they might have been manually edited or corrupted.
  const tags = cachedReleases
    .sort((a: string, b: string) => compare(b, a))
    .filter((version) => satisfies(version, semver))

  dbg(`Filtered tags:`, tags)

  return tags
}
