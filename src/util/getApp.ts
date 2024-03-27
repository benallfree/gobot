import { dirname, join } from 'path'
import type { AppInfo } from '../apps/'
import { dbge } from './log'
import { mkSetting } from './mkSetting'

export const appsRoot = mkSetting(
  join(dirname(new URL(import.meta.url).pathname), `apps`),
)

export const getApp = async (slug: string) => {
  try {
    const path = join(appsRoot(), slug, 'index.js')
    const module = await import(path)
    return module[slug] as AppInfo
  } catch (e) {
    dbge(e)
  }
}
