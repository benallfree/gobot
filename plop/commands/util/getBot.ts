import { isFunction } from '@s-libs/micro-dash'
import { existsSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import {
  GithubReleaseProvider,
  Gobot,
  type AppInfo,
  type GobotOptions,
} from '../../../src/api'
import { SRC_APPS_ROOT } from '../helpers/root'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export async function getBot(appSlug: string, options?: Partial<GobotOptions>) {
  const appFilePath = join(SRC_APPS_ROOT, appSlug)
  const appUrlPath = pathToFileURL(appFilePath).href
  console.log({ appUrlPath }, existsSync(appFilePath))
  const module = await import(appUrlPath).catch(console.error)
  const appInfo = module[appSlug] as AppInfo
  const { factory } = appInfo
  const cachePath = join(appFilePath, `test-data`)
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
