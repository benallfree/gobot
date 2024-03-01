import { config } from './config.js'

export const dbg = (...args: any[]) => config().debug && console.log(...args)
