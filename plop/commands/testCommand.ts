import { isFunction } from '@s-libs/micro-dash'
import assert from 'assert'
import 'colors'
import { diffLines } from 'diff'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import { globSync } from 'glob'
import { basename, join } from 'path'
import type { ActionType, NodePlopAPI } from 'plop'
import { format, resolveConfig } from 'prettier'
import {
  GithubReleaseProvider,
  Gobot,
  mergeConfig,
  type AppInfo,
} from '../../src/api'
import { __root } from '../../src/util/__root'
import { Flags } from '../../src/util/flags'
import { stringify } from '../../src/util/stringify'
import { cleanVerdaccioPackages } from './helpers/cleanVerdaccioPackages'
import { exec } from './helpers/exec'
import { fn } from './helpers/fn'
import { rimraf } from './helpers/rimraf'
import { getSlugsFromFileSystem } from './util/getSlugsFromFileSystem'
import { mkSubcommander, type Subcommands } from './util/mkSubcommander'

export type TestConfig = {
  args: string[]
  code: number
  skip: boolean
}
async function getBot(appPath: string) {
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

async function loadTestModule(appPath: string) {
  const testConfigPath = join(appPath, `test-config.ts`)
  const module = await import(testConfigPath).catch((e) => {
    //Noop, if module is not found
  })
  return mergeConfig<TestConfig>(
    { args: [`--version`], code: 0, skip: false },
    module?.default,
  )
}

const matchSnapshot = async (obj: any, path: string) => {
  const options = resolveConfig(path)
  const snap = await format(stringify(obj), {
    ...options,
    parser: 'json',
  })
  if (existsSync(path)) {
    const savedSnap = await format(readFileSync(path, 'utf-8'), {
      ...options,
      parser: 'json',
    })

    if (snap !== savedSnap) {
      const diff = diffLines(snap, savedSnap)
      diff.forEach((part) => {
        const { added, removed, value: _value } = part
        const value = _value.trimEnd()
        if (added) {
          console.log(value.green)
        }
        if (removed) {
          console.log(value.red)
        }
        if (!added && !removed) {
          // console.log(value)
        }
      })
      throw new Error(`Snapshots do not match`)
    }
  } else {
    writeFileSync(path, snap)
  }
  return true
}

export function testCommand(plop: NodePlopAPI) {
  const subcommands: Subcommands = {
    gobot: {
      gen: async () => [
        exec(`npm run plop build gobot`),
        exec(`npm run plop pack gobot`),
        exec(`npm run plop publish gobot`, {
          env: {
            [Flags.ReallyPublish]: `1`, // Defaults to local Verdaccio
          },
        }),
        exec(`npm rm -g gobot`),
        (() => {
          const tgz = globSync(`gobot-*.tgz`)[0]
          return exec(`npm i -g ${tgz}`)
        })(),
        exec(`gobot --g-version`),

        exec(`npm rm -g gobot`),

        exec(`npm i -g gobot`),

        exec(`gobot --g-version`),
      ],
      clean: [cleanVerdaccioPackages([`gobot`]), exec(`npm rm -g gobot`)],
    },
  }
  getSlugsFromFileSystem().forEach((slug) => {
    subcommands[`app:${slug}`] = {
      gen: async () => {
        const appPath = join(__root, `src/apps/${slug}`)

        const appHelperPath = join(appPath, `helper`)

        const { bot } = await getBot(appPath)

        const tgz = globSync(`gobot-*.tgz`, { cwd: appHelperPath })[0]

        const cachePath = join(appPath, `test-data`)

        const actions: ActionType[] = [
          exec(`npm run plop build app:${slug}`),
          exec(`npm run plop pack apps:helpers:latest`, {
            env: { [Flags.PlopFilter]: slug },
          }),
          exec(`npm run plop publish apps:helpers:latest`, {
            env: { [Flags.PlopFilter]: slug, [Flags.ReallyPublish]: `1` },
          }),
          rimraf(join(cachePath, `releases.json`)),
          fn(async () => {
            const releases = await bot.releases()
            assert(
              await matchSnapshot(
                releases,
                join(cachePath, `releases-snapshot`),
              ),
              `Snapshots do not match`,
            )
            return `Snapshots match`
          }),
        ]

        const {
          args,
          code: expectedCode,
          skip: skipRun,
        } = await loadTestModule(appPath)
        if (!skipRun) {
          actions.push(
            fn(async () => {
              const actualCode = await bot.run(args)
              assert(expectedCode === actualCode, `local run failed`)
              return `local run`
            }),
            exec(`npm rm -g gobot-${slug.toLocaleLowerCase()}`, {
              cwd: appHelperPath,
            }),
            exec(`gobot ${slug} ${args.join(',')}`),
            exec(`npm i -g ${tgz}`, { cwd: appHelperPath }),
            exec(`${slug} ${args.join(`,`)}`, {}),
            exec(`npm rm -g gobot-${slug.toLocaleLowerCase()}`, {
              cwd: appHelperPath,
            }),
            exec(`npm i -g gobot-${slug.toLocaleLowerCase()}`, {
              cwd: appHelperPath,
            }),
            exec(`${slug} ${args.join(`,`)}`, {}),
          )
        }

        return actions
      },
      clean: [
        exec(`npm rm -g gobot-${slug}`),
        cleanVerdaccioPackages([`gobot-${slug}`]),
      ],
    }
  })

  mkSubcommander(
    `test`,
    `Run test suite`,
    `Choose tests to run`,
    subcommands,
    'gen',
    plop,
  )
}
