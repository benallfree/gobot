import { debug } from './settings/debug'

export const dbg = (...args: any[]) => debug() && console.log(...args)
export const log = (...args: any[]) => console.log(...args)
