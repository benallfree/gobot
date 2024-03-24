import { isFunction } from '@s-libs/micro-dash'
import console from 'console'
import { globSync } from 'glob'
import 'jest-specific-snapshot'
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
      const appSlug = basename(appPath)
      if (process.env.ONLY && process.env.ONLY !== appSlug) continue
      const module = await import(appPath).catch(console.error)
      const appInfo = module[appSlug] as AppInfo
      const { factory } = appInfo
      const cachePath = join(__dirname, `data`, appSlug)
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
      const releases = await bot.releases({ recalc: true })
      expect(releases).toMatchSpecificSnapshot(
        join(__dirname, `__snapshots__`, `${appSlug}.shot`),
      )

      const code = await new Promise<number>((resolve, reject) => {
        bot.run([`--help`]).then((proc) => {
          if (!proc) {
            reject()
            return
          }
          proc.on('exit', resolve)
        })
      })
      const overrides: any = {
        weed: 2,
        reviewdog: 2,
      }
      expect(code).toBe(overrides[appSlug] || 0)
    }
  })
})
