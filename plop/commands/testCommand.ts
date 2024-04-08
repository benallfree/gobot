import assert from 'assert'
import 'colors'
import { globSync } from 'glob'
import { join } from 'path'
import type { ActionType, NodePlopAPI } from 'plop'
import pkg from '../../package.json'
import { __root } from '../../src/util/__root'
import { Flags } from '../../src/util/flags'
import { cleanVerdaccioPackages } from './helpers/cleanVerdaccioPackages'
import { exec } from './helpers/exec'
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
        exec(`npm run plop build gobot -- --no-progress`),
        exec(`npm run plop pack gobot -- --no-progress`),
        exec(`npm run plop publish gobot -- --no-progress`, {
          env: {
            [Flags.ReallyPublish]: `1`, // Defaults to local Verdaccio
          },
        }),
        exec(`npm rm -g gobot`),

        exec(`npm i -g gobot-${pkg.version}.tgz`),

        exec(`npm rm -g gobot`),

        exec(`npm i -g gobot`),

        exec(`gobot --g-version`),
      ],
      clean: [
        cleanVerdaccioPackages([`gobot`]),
        exec(`npm rm -g gobot`),
        rimraf(`gobot-*.tgz`),
      ],
    },
  }
  getSlugsFromFileSystem().forEach((slug) => {
    subcommands[`app:${slug}`] = {
      gen: async () => {
        const appPath = join(__root, `src`, `apps`, slug)

        const appHelperPath = join(appPath, `helper`)

        const { bot } = await getBot(appPath)

        const tgz = globSync(`gobot-*.tgz`, { cwd: appHelperPath })[0]

        const cachePath = join(appPath, `test-data`)

        const actions: ActionType[] = [
          exec(`npm run plop build app:${slug} -- --no-progress`),
          exec(`npm run plop pack apps:helpers:latest -- --no-progress`, {
            env: { [Flags.PlopFilter]: slug },
          }),
          exec(`npm run plop publish apps:helpers:latest -- --no-progress`, {
            env: { [Flags.PlopFilter]: slug, [Flags.ReallyPublish]: `1` },
          }),
          rimraf(join(cachePath, `releases.json`)),
          async (answers, { onProgress }) => {
            onProgress(`Fetching releases for snapshot comparison`)
            const releases = await bot.releases()
            assert(
              await matchSnapshot(
                releases,
                join(cachePath, `releases-snapshot`),
              ),
              `Snapshots do not match`,
            )
            return `Snapshots match`
          },
        ]

        const {
          args,
          code: expectedCode,
          skip: skipRun,
        } = await loadTestModule(appPath)
        if (!skipRun) {
          actions.push(
            async (answers, { onProgress }) => {
              onProgress(`Running ${slug} inline...`)
              const actualCode = await bot.run(args)
              assert(expectedCode === actualCode, `local run failed`)
              return `local run`
            },
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
        rimraf(`src/apps/${slug}/**/gobot-*.tgz`),
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
