import {
  GithubRelease,
  GithubReleaseProvider,
  GithubReleaseProviderOptions,
} from './GithubReleaseProvider'
import { Gobot, GobotOptions } from './Gobot'
import { APPS, isAppFactory, isAppName } from './apps'
import { APPS_MAP, AppInfo } from './apps/APPS_MAP'
import { dbg } from './util/log'
import { mergeConfig } from './util/mergeConfig'
import { sanitizeOptions } from './util/sanitize'
export * from './util/botrun'

export { APPS_MAP, AppInfo }

export {
  GithubRelease,
  GithubReleaseProvider,
  GithubReleaseProviderOptions,
  Gobot,
  GobotOptions,
  mergeConfig,
}

/**
 * Instantiate a gobot for a specific app.
 *
 * @param appName `<app>` for officially supported apps, or `<user>/<repo>` for unofficial apps (your mileage may vary)
 * @param optionsIn Option overrides
 * @returns An instance of GobotBase
 */

export const gobot = (
  appName: string,
  optionsIn: Partial<GobotOptions> = {},
): Gobot => {
  dbg(`gobot() factory optionsIn`, sanitizeOptions(optionsIn))
  if (!optionsIn.cachePath) {
    optionsIn.cachePath = Gobot.DEFAULT_GOBOT_CACHE_ROOT(appName)
  }
  if (isAppName(appName)) {
    dbg(appName, `is a valid app`)
    const repoOrFactory = APPS[appName]
    if (isAppFactory(repoOrFactory)) {
      dbg(appName, `is a factory app`)
      return repoOrFactory(optionsIn)
    } else {
      dbg(appName, `is a mapped repo app`)
      return new Gobot(
        repoOrFactory,
        (repo, cacheRoot) => new GithubReleaseProvider(repo, cacheRoot),
        optionsIn,
      )
    }
  }
  if (!appName.includes(`/`)) {
    throw new Error(
      `${appName} is not a binary known to Gobot. Try <user>/<repo>`,
    )
  }
  dbg(appName, `is a generic repo app`)
  return new Gobot(
    appName,
    (repo, cacheRoot) => new GithubReleaseProvider(repo, cacheRoot),
    optionsIn,
  )
}

export const mkGobot =
  (appName: string, defaultOptionsIn: Partial<GobotOptions> = {}) =>
  (optionsIn: Partial<GobotOptions> = {}) =>
    gobot(appName, mergeConfig(defaultOptionsIn, optionsIn))
