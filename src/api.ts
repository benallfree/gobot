import {
  GithubRelease,
  GithubReleaseProvider,
  GithubReleaseProviderOptions,
} from './GithubReleaseProvider'
import { Gobot, GobotOptions } from './Gobot'
import { AppInfo, isAppFactory } from './apps/'
import { getApp } from './util/getApp'
import { dbg } from './util/log'
import { mergeConfig } from './util/mergeConfig'
import { sanitizeOptions } from './util/sanitize'
export * from './util/botrun'

export { AppInfo }

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
 * @param appSlugOrPath `<app>` for officially supported apps, or `<user>/<repo>` for unofficial apps (your mileage may vary)
 * @param optionsIn Option overrides
 * @returns An instance of GobotBase
 */

export const gobot = async (
  appSlugOrPath: string,
  optionsIn: Partial<GobotOptions> = {},
): Promise<Gobot> => {
  dbg(`gobot() factory optionsIn`, sanitizeOptions(optionsIn))
  if (!optionsIn.cachePath) {
    optionsIn.cachePath = Gobot.DEFAULT_GOBOT_CACHE_ROOT(appSlugOrPath)
  }
  const app = await getApp(appSlugOrPath)
  if (app) {
    dbg(appSlugOrPath, `is a valid app`)
    const pathOrFactory = app.factory
    if (isAppFactory(pathOrFactory)) {
      dbg(appSlugOrPath, `is a factory app`)
      return pathOrFactory(optionsIn)
    } else {
      dbg(appSlugOrPath, `is a mapped repo app`)
      return new Gobot(
        pathOrFactory,
        (repo, cacheRoot) => new GithubReleaseProvider(repo, cacheRoot),
        optionsIn,
      )
    }
  }
  if (!appSlugOrPath.includes(`/`)) {
    throw new Error(
      `${appSlugOrPath} is not a binary known to Gobot. Try <user>/<repo>`,
    )
  }
  dbg(appSlugOrPath, `is a generic repo app`)
  return new Gobot(
    appSlugOrPath,
    (repo, cacheRoot) => new GithubReleaseProvider(repo, cacheRoot),
    optionsIn,
  )
}

export const mkGobot =
  (appName: string, defaultOptionsIn: Partial<GobotOptions> = {}) =>
  (optionsIn: Partial<GobotOptions> = {}) =>
    gobot(appName, mergeConfig(defaultOptionsIn, optionsIn))
