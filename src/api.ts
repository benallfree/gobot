import { Config, config } from './config'
import { getLatestReleaseVersion } from './getLatestRelease'
import { getPath as _getPath } from './getPath'
export { run } from './run.js'

export const getPath = async (cfg?: Partial<Config>) => {
  if (cfg) {
    config({
      ...cfg,
      version: cfg.version || (await getLatestReleaseVersion()),
    })
  }
  return _getPath()
}
