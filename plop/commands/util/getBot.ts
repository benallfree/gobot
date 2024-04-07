import { isFunction } from '@s-libs/micro-dash'
import { basename, join } from 'path'
import { GithubReleaseProvider, Gobot, type AppInfo } from '../../../src/api'

export async function getBot(appPath: string) {
  const appSlug = basename(appPath)
  const module = await import(join(appPath)).catch(console.error)
  const appInfo = module[appSlug] as AppInfo
  const { factory } = appInfo
  const cachePath = join(appPath, `test-data`)
  const bot = (() => {
    if (isFunction(factory)) {
      return factory({ cachePath, env: process.env })
    }
    return new Gobot(
      factory,
      (repo, cacheRoot) => new GithubReleaseProvider(repo, cacheRoot),
      { cachePath, env: process.env },
    )
  })()
  return { cachePath, bot }
}
