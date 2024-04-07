import assert from 'assert'
import 'colors'
import { globSync } from 'glob'
import { join } from 'path'
import type { ActionType, NodePlopAPI } from 'plop'
import { __root } from '../../src/util/__root'
import { Flags } from '../../src/util/flags'
import { cleanVerdaccioPackages } from './helpers/cleanVerdaccioPackages'
import { exec } from './helpers/exec'
import { fn } from './helpers/fn'
import { rimraf } from './helpers/rimraf'
import { getBot } from './util/getBot'
import { getSlugsFromFileSystem } from './util/getSlugsFromFileSystem'
import { loadTestModule } from './util/loadTestModule'
import { matchSnapshot } from './util/matchSnapshot'
import { mkSubcommander, type Subcommands } from './util/mkSubcommander'

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
