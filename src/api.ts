import {
  GithubRelease,
  GithubReleaseProvider,
  GithubReleaseProviderOptions,
} from './GithubReleaseProvider'
import { Gobot, GobotOptions } from './Gobot'
import { PLUGINS, isPluginFactory, isPluginName } from './apps'
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
 * @param pluginName `<app>` for officially supported apps, or `<user>/<repo>` for unofficial apps (your mileage may vary)
 * @param optionsIn Option overrides
 * @returns An instance of GobotBase
 */

export const gobot = (
  pluginName: string,
  optionsIn: Partial<GobotOptions> = {},
): Gobot => {
  dbg(`gobot() factory optionsIn`, sanitizeOptions(optionsIn))
  if (!optionsIn.cachePath) {
    optionsIn.cachePath = Gobot.DEFAULT_GOBOT_CACHE_ROOT(pluginName)
  }
  if (isPluginName(pluginName)) {
    dbg(pluginName, `is a valid plugin`)
    const repoOrFactory = PLUGINS[pluginName]
    if (isPluginFactory(repoOrFactory)) {
      dbg(pluginName, `is a factory plugin`)
      return repoOrFactory(optionsIn)
    } else {
      dbg(pluginName, `is a mapped repo plugin`)
      return new Gobot(
        repoOrFactory,
        (cacheRoot) => new GithubReleaseProvider(repoOrFactory, cacheRoot),
        optionsIn,
      )
    }
  }
  if (!pluginName.includes(`/`)) {
    throw new Error(
      `${pluginName} is not a binary known to Gobot. Try <user>/<repo>`,
    )
  }
  dbg(pluginName, `is a generic repo plugin`)
  return new Gobot(
    pluginName,
    (cacheRoot) => new GithubReleaseProvider(pluginName, cacheRoot),
    optionsIn,
  )
}

export const mkGobot =
  (pluginName: string, defaultOptionsIn: Partial<GobotOptions> = {}) =>
  (optionsIn: Partial<GobotOptions> = {}) =>
    gobot(pluginName, mergeConfig(defaultOptionsIn, optionsIn))
