import { existsSync, readFileSync, statSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { compare, maxSatisfying, rcompare, satisfies } from 'semver'
import { dbg } from './log'
import { mkPromiseSingleton } from './mkPromiseSingleton'
import { cachePath, plugin, version } from './settings'
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

const VERSIONS_FILE_NODE = `releases`

const _getAllVersionTags = mkPromiseSingleton(async () => {
  const { name, repo } = plugin()
  const cacheFile = resolve(
    cachePath(),
    `${VERSIONS_FILE_NODE}.${ReleaseType.Json}`,
  )
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
    const versions: Releases = []
    do {
      dbg(`Fetching info for ${name} releases page ${page}...`)
      const url = `https://api.github.com/repos/${repo}/releases?per_page=100&page=${page}`
      const chunk = await smartFetch<Releases>(url)(
        url,
        resolve(cachePath(), `releases_page_${page}.json`), // Cache each page individually to avoid re-fetching all data for updates.
      )
      if (chunk.length === 0) break
      versions.push(...chunk)
      page++
    } while (true)

    const sortedVersions = versions
      .map((release) => release.tag_name.slice(1)) // Remove 'v' prefix from tag name for proper semver comparison
      .sort((a, b) => rcompare(a, b)) // Sort versions in descending order using semver

    const json = JSON.stringify(sortedVersions, null, 2)
    writeFileSync(cacheFile, json)
    writeFileSync(
      resolve(cachePath(), `${VERSIONS_FILE_NODE}.${ReleaseType.Cjs}`),
      `module.exports = ${json}`,
    )
    writeFileSync(
      resolve(cachePath(), `${VERSIONS_FILE_NODE}.${ReleaseType.Esm}`),
      `export const versions = ${json}`,
    )
    writeFileSync(
      resolve(cachePath(), `${VERSIONS_FILE_NODE}.${ReleaseType.Text}`),
      sortedVersions.join(`\n`),
    )
  } else {
    dbg('Using cached release tags data.')
  }
  const cachedReleases = JSON.parse(readFileSync(cacheFile, 'utf8')) as string[]
  // Ensure the cached releases are sorted by version as they might have been manually edited or corrupted.
  const tags = cachedReleases.sort((a: string, b: string) => compare(b, a))

  return tags
})

/**
 * Query github and return all available release tags for binary.
 */
export const getAllVersionTags = () => _getAllVersionTags()()

export const getFilteredVersionTags = async (semver = version()) => {
  dbg(`Semver filter:`, semver)
  const tags = await getAllVersionTags().then((tags) =>
    tags.filter((version) => satisfies(version, semver)),
  )
  dbg(`Filtered tags:`, tags)
  return tags
}

export enum ReleaseType {
  Json = 'json',
  Cjs = 'cjs',
  Esm = 'esm',
  Text = 'txt',
}

/**
 * Return a formatted string of available versions in the requested format (`json`, `txt`, `esm`, or `cjs`)
 * @param type The format to return
 * @returns
 */
export const getAvailableVersionsPath = async (
  type: ReleaseType = ReleaseType.Json,
) => {
  await getAllVersionTags()
  return resolve(cachePath(), `${VERSIONS_FILE_NODE}.${type}`)
}

/**
 * Return the most recent version number (semver) of binary. Query github if cache is stale.
 * @returns The most recent version number (semver) of binary
 */
export async function getLatestVersion() {
  const tags = await getFilteredVersionTags()

  return tags[0] as string
}

/**
 * Return the highest matching version.
 *
 * @param semver Version or range to match
 * @returns
 */
export const getMatchingVersion = async (semver: string) => {
  dbg(`Requested version:`, semver)
  const versions = await getAllVersionTags()
  const version = maxSatisfying(versions, semver)
  if (!version) {
    throw new Error(`No version satisfies ${semver} (${versions.join(', ')})`)
  }
  dbg(`Matched version:`, version)
  return version
}

/**
 * Return all matching versions.
 *
 * @param semver Version or range to match
 * @returns
 */
export const getMatchingVersions = async (semver: string) => {
  const tags = await getFilteredVersionTags()
  return tags.filter((version) => satisfies(version, semver))
}
