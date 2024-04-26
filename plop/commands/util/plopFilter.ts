import { EnvVarNames } from '../../../src/constants'

export const plopFilter = () => process.env[EnvVarNames.PlopFilter] || '*'
