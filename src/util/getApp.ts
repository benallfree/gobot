import { findUpSync } from 'find-up'
import { existsSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import type { AppInfo } from '../apps/'
import { dbge } from './log'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const PACKAGE_ROOT = findUpSync(`package.json`, {
  cwd: __dirname,
})
if (!PACKAGE_ROOT) {
  throw new Error(`Can't find package.json in any parent path`)
}

export const APPS_ROOT = join(dirname(PACKAGE_ROOT), 'dist', 'apps')
if (!existsSync(APPS_ROOT)) {
  console.warn(`Warning: can't find ${APPS_ROOT}`)
}

export const getApp = async (slug: string) => {
  try {
    const path = join(APPS_ROOT, slug, 'index.js')
    const module = await import(path)
    return module[slug] as AppInfo
  } catch (e) {
    dbge(e)
  }
}
