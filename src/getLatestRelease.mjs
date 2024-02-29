import { promises as fs } from 'fs'
import fetch from 'node-fetch'
import { join } from 'path'
import { config } from './config.mjs'
import { dbg } from './dbg.mjs'

export async function getLatestReleaseVersion(refresh = false) {
  const cacheFilePath = join(config.cachePath, 'version-cache')

  const owner = 'pocketbase'
  const repo = 'pocketbase'
  const url = `https://api.github.com/repos/${owner}/${repo}/releases/latest`

  // Attempt to read from the cache
  let cacheData
  try {
    if (refresh) {
      dbg(`Refreshing cache`)
      throw new Error(`Refreshing`)
    }
    const cacheContent = await fs.readFile(cacheFilePath, 'utf8')
    cacheData = JSON.parse(cacheContent)

    // Check if the cache is newer than 24 hours
    if (new Date() - new Date(cacheData.timestamp) < 24 * 60 * 60 * 1000) {
      dbg('Using cached version')
      return cacheData.tag_name
    }
  } catch (error) {
    // If reading the cache fails, proceed to fetch online
    dbg('Cache not found or is outdated. Fetching online...')
  }

  // Fetch the latest release version from GitHub
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`GitHub API responded with status code ${response.status}`)
  }

  const data = await response.json()
  const tag_name = data.tag_name

  // Update the cache with the new version and current timestamp
  await fs.writeFile(
    cacheFilePath,
    JSON.stringify({ tag_name, timestamp: new Date() }),
    'utf8',
  )
  dbg(`Cache updated with the latest version: ${tag_name}`)
  return tag_name
}
