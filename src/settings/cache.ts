import envPaths from 'env-paths'
import { resolve } from 'path'
import { rimrafSync } from 'rimraf'
import { dbg } from '../log'
import { mkSetting } from '../mkSetting'
import { mkdir, pwd } from '../util'

/**
 * Clear all items from cache (flush cache).
 */
export const clearCache = () => {
  dbg(`Clearing cache:`, cachePath())
  rimrafSync(cachePath())
}

/**
 * Get or set the cache path used to store all assets. The path will be created if it does not exist.
 */
export const cachePath = mkSetting(envPaths('gobot').cache, (v) => {
  const path = resolve(pwd(), v)
  dbg(`Setting cache path`, path)
  mkdir('-p', path)
  return path
})
