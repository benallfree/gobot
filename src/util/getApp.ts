import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import type { AppInfo } from '../apps/'
import { dbge } from './log'
import { mkSetting } from './mkSetting'

const __dirname = dirname(fileURLToPath(import.meta.url))

export const appsRoot = mkSetting(join(__dirname, `..`, `apps`))

export const getApp = async (slug: string) => {
  try {
    console.log({ appsRoot: appsRoot() })
    const path = join(appsRoot(), slug, 'index.js')
    const module = await import(path)
    return module[slug] as AppInfo
  } catch (e) {
    dbge(e)
  }
}
