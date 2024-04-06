import { Flags } from '../util/flags'
import { mkSetting } from '../util/mkSetting'

export type Verbosity = 0 | 1 | 2 | 3
export const verbosity = mkSetting<Verbosity>(
  parseInt(process.env[Flags.Verbosity] || `0`, 10) as Verbosity,
)
