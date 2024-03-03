import envPaths from 'env-paths'
import { resolve } from 'path'
import { rimrafSync } from 'rimraf'
import { dbg } from '../log'
import { mkSetting } from '../mkSetting'
import { mkdir, pwd } from '../util'

export const clearCache = () => {
  dbg(`Clearing cache:`, cachePath())
  rimrafSync(cachePath())
}

export const cachePath = mkSetting(envPaths('pbgo').cache, (v) => {
  const path = resolve(pwd(), v)
  mkdir('-p', path)
  return path
})
