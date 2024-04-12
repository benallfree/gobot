import { isFunction } from '@s-libs/micro-dash'
import { basename, join } from 'path'
import {
  GithubReleaseProvider,
  Gobot,
  type AppInfo,
  type GobotOptions,
} from '../../../src/api'

export async function getBot(appPath: string, options?: Partial<GobotOptions>) {
  const appSlug = basename(appPath)
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
