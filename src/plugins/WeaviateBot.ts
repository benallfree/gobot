import { PluginFactory } from '.'
import { GobotBase, GobotOptions } from '../GobotBase'
import { ArchValue } from '../settings'
import { dbg } from '../util/log'

class WeaviateBot extends GobotBase {
  constructor(optionsIn: Partial<GobotOptions> = {}) {
    dbg(`WeaviateBot constructor`)
    super(`weaviate/weaviate`, optionsIn)
  }

  protected get archAliases(): ArchValue[] {
    dbg(`Selecting weaviate arch`)
    if (this.os === 'darwin') {
      return [...super.archAliases, `all`] as any
    }
    return super.archAliases
  }
}

export const mkWeaviateBot: PluginFactory = (
  optionsIn: Partial<GobotOptions> = {},
) => new WeaviateBot(optionsIn)
