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
      try {
        expect(releases).toMatchSpecificSnapshot(
          join(__dirname, `data`, appSlug, `releases-snapshot`),
        )
      } catch (e) {
        throw new Error(`Expected ${appSlug} snapshot to match.`)
      }

      const skipRun = [`gotify`, `gocryptfs`, `ferretdb`]

      if (skipRun.includes(appSlug)) continue

      const switchOverrides: any = {
        pulumi: `--help`,
        weed: `--help`,
        filebrowser: `--help`,
        backrest: `--help`,
      }
      const code = await new Promise<number>((resolve, reject) => {
        bot
          .run([switchOverrides[appSlug] || `--version`])
          .then((proc) => {
            if (!proc) {
              reject()
              return
            }
            proc.stdout?.on('data', () => {})
            proc.stderr?.on('data', () => {})
            proc.on('exit', resolve)
          })
          .catch(reject)
      })
      const codeOverrides: any = {
        weed: 2,
        weaviate: 1,
        restic: 1,
        hugo: 1,
        cue: 1,
        tinygo: 1,
      }
      const expectedCode = codeOverrides[appSlug] || 0
      try {
        expect(code).toBe(expectedCode)
      } catch (e) {
        throw new Error(
          `Expected ${appSlug} to exit with ${expectedCode} but got ${code}`,
        )
      }
    }
  })
})
