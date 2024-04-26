import { EnvVarNames } from '../constants'
import { mkSetting } from '../util/mkSetting'

export type Verbosity = 0 | 1 | 2 | 3
export const verbosity = mkSetting<Verbosity>(
  parseInt(process.env[EnvVarNames.Verbosity] || `0`, 10) as Verbosity,
)
