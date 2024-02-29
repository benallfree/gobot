import { config } from './config.mjs'

export const dbg = (/** @type{any[]} */ ...args) =>
  config.debug && console.log(...args)
