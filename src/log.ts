import { config } from './settings/index.js'

export const dbg = (...args: any[]) => config().debug && console.log(...args)
export const log = (...args: any[]) => console.log(...args)