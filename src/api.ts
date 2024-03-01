import { resolve } from 'path'
import { Config, config } from './config'
import { getLatestReleaseVersion } from './getLatestRelease'
import { getPocketBasePath as _getPocketBasePath } from './getPocketBasePath'
import { getReleaseTags } from './getReleaseTags'
export { run } from './run.js'

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
  return resolve(config().cachePath, `versions.json`)
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
