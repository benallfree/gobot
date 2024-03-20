import { AppInfo } from '../'
import { mkDasel } from './overrides'

export const dasel: AppInfo = {
  name: 'dasel',
  description: `Select, put and delete data from JSON, TOML, YAML, XML and CSV files with a single tool. Supports conversion between formats and can be used as a Go package.`,
  homepage: `https://daseldocs.tomwright.me`,
  isAlpha: true,
  factory: mkDasel,
}
