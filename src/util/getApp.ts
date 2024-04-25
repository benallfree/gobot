import { join } from 'path'
import type { AppInfo } from '../apps/'
import { DIST_APPS_ROOT } from '../constants'
import { dbge } from './log'

export const getApp = async (slug: string) => {
  try {
    const path = join(DIST_APPS_ROOT, slug, 'index.js')
    const module = await import(path)
    return module[slug] as AppInfo
  } catch (e) {
    dbge(e)
  }
}
