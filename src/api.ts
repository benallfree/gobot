import { resolve } from 'path'
import { Config, config } from './config'
import { getLatestReleaseVersion } from './getLatestRelease'
import { getPocketBasePath as _getPocketBasePath } from './getPocketBasePath'
import { getReleaseTags } from './getReleaseTags'
import { cachePath } from './settings/cache'
export { run } from './run.js'
export { clearCache } from './settings/cache'

export const getPocketBasePath = async (cfg?: Partial<Config>) => {
  if (cfg) {
    config({
      ...cfg,
      version: cfg?.version || (await getLatestReleaseVersion()),
    })
  }
  return _getPocketBasePath()
}

export const getAvailableVersionsPath = async (cfg?: Partial<Config>) => {
  if (cfg) {
    config({
      ...cfg,
      version: cfg?.version || (await getLatestReleaseVersion()),
    })
  }
  return resolve(cachePath(), `versions.json`)
}

export const getAvailableVersions = async (cfg?: Partial<Config>) => {
  if (cfg) {
    config({
      ...cfg,
      version: cfg?.version || (await getLatestReleaseVersion()),
    })
  }
  return getReleaseTags()
}
