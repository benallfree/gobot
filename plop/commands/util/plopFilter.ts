import { Flags } from '../../../src/util/flags'

export const plopFilter = () => process.env[Flags.PlopFilter] || '*'
