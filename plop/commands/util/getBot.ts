import { isFunction } from '@s-libs/micro-dash'
import { existsSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import {
  GithubReleaseProvider,
  Gobot,
  type AppInfo,
  type GobotOptions,
} from '../../../src/api'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const APPS_SRC_ROOT = join(__dirname, '..', 'src', 'apps')
if (!existsSync(APPS_SRC_ROOT)) {
  throw new Error(`Can't find ${APPS_SRC_ROOT}`)
}

console.log({ APPS_SRC_ROOT })

export async function getBot(appSlug: string, options?: Partial<GobotOptions>) {
  const appPath = join(APPS_SRC_ROOT, appSlug)
  const module = await import(join(appPath)).catch(console.error)
  const appInfo = module[appSlug] as AppInfo
  const { factory } = appInfo
  const cachePath = join(appPath, `test-data`)
  const bot = (() => {
    if (isFunction(factory)) {
      return factory({ ...options, cachePath, env: process.env })
    }
    return new Gobot(
      factory,
      (repo, cacheRoot) => new GithubReleaseProvider(repo, cacheRoot),
      { ...options, cachePath, env: process.env },
    )
  })()
  return { cachePath, bot }
}
