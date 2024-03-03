import { mkSetting } from '../mkSetting'
import { Plugin, PluginKey, PLUGINS } from '../plugins'

export const plugin = mkSetting<Plugin, PluginKey>(
  // @ts-ignore Empty plugin
  {},
  (v) => {
    const _plugin = PLUGINS[v]
    if (!_plugin) {
      throw new Error(`Plugin ${v} not found.`)
    }
    return _plugin
  },
)
