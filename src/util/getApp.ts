import { findUpSync } from 'find-up'
import { existsSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import type { AppInfo } from '../apps/'
import { dbge } from './log'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const PACKAGE_ROOT = dirname(
  findUpSync(`package.json`, {
    cwd: __dirname,
  }) as string,
)
if (!PACKAGE_ROOT) {
  throw new Error(`Can't find package.json in any parent path`)
}

export const APPS_DIST_ROOT = join(dirname(PACKAGE_ROOT), 'dist', 'apps')
if (!existsSync(APPS_DIST_ROOT)) {
  console.warn(`Warning: can't find ${APPS_DIST_ROOT}`)
}

export const APPS_SRC_ROOT = join(dirname(PACKAGE_ROOT), 'src', 'apps')
if (!existsSync(APPS_SRC_ROOT)) {
  throw new Error(`Can't find ${APPS_SRC_ROOT}`)
}

console.log({ PACKAGE_ROOT, APPS_DIST_ROOT, APPS_SRC_ROOT })

export const getApp = async (slug: string) => {
  try {
    const path = join(APPS_DIST_ROOT, slug, 'index.js')
    const module = await import(path)
    return module[slug] as AppInfo
  } catch (e) {
    dbge(e)
  }
}
