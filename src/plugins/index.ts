import { BinaryProfile } from '../run'
import { pocketbase } from './pocketbase/src'

export interface Plugin {
  name: PluginKey
  repo: string
  prepare: (args: string[]) => void
  getZip(profile: BinaryProfile): string
  getExtractionName(profile: BinaryProfile): string
}

export type PluginKey = keyof typeof PLUGINS

export const PLUGINS = {
  pocketbase,
}
