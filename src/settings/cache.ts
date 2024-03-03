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
 * Get or set the path pbGo us using to save all cached items to disk. The path will be created if it does not exist.
 */
export const cachePath = mkSetting(envPaths('pbgo').cache, (v) => {
  const path = resolve(pwd(), v)
  mkdir('-p', path)
  return path
})
