import { GobotBase, GobotOptions } from './GobotBase'
import { PLUGINS, PluginKey } from './plugins'

/**
 * Instantiate a gobot for a specific app.
 *
 * @param pluginName `<app>` for officially supported apps, or `<user>/<repo>` for unofficial apps (your mileage may vary)
 * @param optionsIn Option overrides
 * @returns An instance of GobotBase
 */
export const gobot = (
  pluginName: PluginKey,
  optionsIn: Partial<GobotOptions> = {},
): GobotBase => {
  const plugin = new GobotBase(PLUGINS[pluginName] || pluginName, optionsIn)
  return plugin
}
