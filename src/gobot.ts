import { GobotBase, GobotOptions } from './GobotBase'
import { PLUGINS, isPluginFactory, isPluginName } from './plugins'
import { dbg } from './util/log'

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
): GobotBase => {
  if (isPluginName(pluginName)) {
    dbg(pluginName, `is a valid plugin`)
    const _p = PLUGINS[pluginName]
    if (isPluginFactory(_p)) {
      dbg(pluginName, `is a factory plugin`)
      return _p(optionsIn)
    }
    dbg(pluginName, `is a mapped repo plugin`)
    return new GobotBase(_p, optionsIn)
  }
  dbg(pluginName, `is a generic repo plugin`)
  return new GobotBase(pluginName, optionsIn)
}
