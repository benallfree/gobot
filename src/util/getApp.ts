import { findUpSync } from 'find-up'
import { existsSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import type { AppInfo } from '../apps/'
import { dbge } from './log'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const DIST_PACKAGE_ROOT = dirname(
  findUpSync(`package.json`, {
    cwd: __dirname,
  }) as string,
)
if (!DIST_PACKAGE_ROOT) {
  throw new Error(`Can't find package.json in any parent path`)
}

export const DIST_APPS_ROOT = join(DIST_PACKAGE_ROOT, 'dist', 'apps')
if (!existsSync(DIST_APPS_ROOT)) {
  console.warn(`Warning: can't find ${DIST_APPS_ROOT}`)
}

console.log({ DIST_PACKAGE_ROOT, DIST_APPS_ROOT })

export const getApp = async (slug: string) => {
  try {
    const path = join(DIST_APPS_ROOT, slug, 'index.js')
    const module = await import(path)
    return module[slug] as AppInfo
  } catch (e) {
    dbge(e)
  }
}
