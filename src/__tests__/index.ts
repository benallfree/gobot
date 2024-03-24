import { isFunction } from '@s-libs/micro-dash'
import console from 'console'
import { globSync } from 'glob'
import { basename, dirname, join, resolve } from 'path'
import { Gobot } from '../Gobot'
import { GithubReleaseProvider } from '../api'
import { AppInfo } from '../apps'
import { verbosity } from '../settings'

global.console = console

verbosity(!!process.env.DEBUG ? 3 : 0)

const __dirname = dirname(resolve(new URL(import.meta.url).pathname))

describe(`bot`, () => {
  test('stored releases', async () => {
    const appPaths = globSync(`src/apps/*/`, { absolute: true })
    for (let i = 0; i < appPaths.length; i++) {
      const appPath = appPaths[i]!
      if (process.env.ONLY && process.env.ONLY !== appSlug) continue
      const module = await import(appPath).catch(console.error)
      const appInfo = module[appName] as AppInfo
      const { factory } = appInfo
      const cachePath = join(__dirname, `data`, appName)
      const bot = (() => {
        if (isFunction(factory)) {
          return factory({ cachePath })
        }
        return new Gobot(
          factory,
          (repo, cacheRoot) => new GithubReleaseProvider(repo, cacheRoot),
          { cachePath },
        )
      })()
      const releases = await bot.releases({ recalc: true })
      expect(releases).toMatchSnapshot(appName)
    }
  })
})
