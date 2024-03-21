import { mkSetting } from '../util/mkSetting'

export const verbosity = mkSetting<0 | 1 | 2 | 3>(0)
