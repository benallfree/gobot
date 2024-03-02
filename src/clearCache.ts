import { rimraf } from 'rimraf'
import { config } from './config'
import { dbg } from './log'

export const clearCache = () => {
  const { cachePath } = config()
  dbg(`Clearing cache:`, cachePath)
  rimraf(cachePath, { preserveRoot: true })
}
