import { join } from 'path'
import { pathToFileURL } from 'url'
import type { AppInfo } from '../apps/'
import { DIST_APPS_ROOT } from '../constants'
import { dbge } from './log'

export const getApp = async (slug: string) => {
  try {
    const loaderPath = join(DIST_APPS_ROOT, slug, 'index.js')
    const loaderUrl = pathToFileURL(loaderPath).href
    const module = await import(loaderUrl)
    return module[slug] as AppInfo
  } catch (e) {
    dbge(e)
  }
}
