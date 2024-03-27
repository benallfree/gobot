import { isFunction } from '@s-libs/micro-dash'
import console from 'console'
import { globSync } from 'glob'
import { basename, dirname, join, resolve } from 'path'
import { rimraf } from 'rimraf'
import { describe, expect, test } from 'vitest'
import { Gobot } from './Gobot'
import { GithubReleaseProvider } from './api'
import type { AppInfo } from './apps'
import { verbosity } from './settings'

global.console = console

verbosity(!!process.env.DEBUG ? 3 : 0)

const __dirname = dirname(resolve(new URL(import.meta.url).pathname))

describe(`bot`, async () => {
  const appPaths = globSync(`src/apps/*/`, { absolute: true }).sort()
  for (let i = 0; i < appPaths.length; i++) {
    const appPath = appPaths[i]!
    const appSlug = basename(appPath)

    if (process.env.ONLY && process.env.ONLY !== appSlug) continue
    describe(appSlug, async () => {
      test(`parse`, async () => {
        const { cachePath, bot } = await getBot(appPath)

        await rimraf(join(cachePath, `releases.json`))
        const releases = await bot.releases()
        try {
          expect(releases).toMatchFileSnapshot(
            join(cachePath, `releases-snapshot`),
          )
        } catch (e) {
          throw new Error(`Expected ${appSlug} snapshot to match.`)
        }
      })

      test(`run`, async () => {
        const skipRun = [`gotify`, `gocryptfs`, `ferretdb`]
        if (skipRun.includes(appSlug)) return

        const { switchOverride, codeOverride } = await (async () => {
          const testOverridesPath = join(
            appPath,
            `..`,
            `..`,
            `apps`,
            appSlug,
            `test-overrides.ts`,
          )
          const module = await import(testOverridesPath).catch((e) => {
            //Noop, if module is not found
          })
          return module || {}
        })()

        const { cachePath, bot } = await getBot(appPath)

        const code = await new Promise<number>((resolve, reject) => {
          bot
            .run([switchOverride || `--version`], [`ignore`])
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
        const expectedCode = codeOverride || 0
        try {
          expect(code).toBe(expectedCode)
        } catch (e) {
          throw new Error(
            `Expected ${appSlug} to exit with ${expectedCode} but got ${code}`,
          )
        }
      })
    })
  }
})

async function getBot(appPath: string) {
  const appSlug = basename(appPath)
  const module = await import(appPath).catch(console.error)
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
