import { verbosity } from '../settings'

export const dbg = (...args: any[]) => verbosity() > 1 && console.log(...args)
export const info = (...args: any[]) => verbosity() > 0 && console.log(...args)
