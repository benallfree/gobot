import assert from 'assert'
import 'colors'
import { existsSync } from 'fs'
import { globSync } from 'glob'
import minimist from 'minimist'
import { arch, platform } from 'os'
import { join } from 'path'
import type { ActionType, NodePlopAPI } from 'plop'
import pkg from '../../package.json'
import type { ArchKey, PlatformKey } from '../../src/Gobot'
import { EnvVarNames } from '../../src/constants'
import { cleanVerdaccioPackages } from './helpers/cleanVerdaccioPackages'
import { exec } from './helpers/exec'
import { rimraf } from './helpers/rimraf'
import { SRC_APPS_ROOT } from './helpers/root'
import { getBot } from './util/getBot'
import { getSlugsFromFileSystem } from './util/getSlugsFromFileSystem'
import { loadTestModule } from './util/loadTestModule'
import { matchSnapshot } from './util/matchSnapshot'
import { mkSubcommander, type Subcommands } from './util/mkSubcommander'

const args = process.argv.slice(2)
const argv = minimist(args)

export function testCommand(plop: NodePlopAPI) {
  const subcommands: Subcommands = {
    noop: {
      gen: [],
      clean: [],
    },
    gobot: {
      gen: async () => [
        exec(`npm run plop build gobot -- --no-progress`),
        exec(`npm run plop pack gobot -- --no-progress`),
        exec(`npm run plop publish gobot -- --no-progress`, {
          env: {
            [EnvVarNames.ReallyPublish]: `1`, // Defaults to local Verdaccio
          },
        }),
        exec(`npm i -g gobot-${pkg.version}.tgz`),

        exec(`gobot --g-version`),

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
        const appPath = join(SRC_APPS_ROOT, slug)

        const appHelperPath = join(appPath, `helper`)

        const { bot } = await getBot(slug)

        const shouldRun = async () =>
          !!(await bot.releases())[0]?.archives[platform()]?.[arch() as ArchKey]

        const cachePath = join(appPath, `test-data`)

        const actions: ActionType[] = [
          exec(
            `npm run plop build gobot,template:app:helper,app:${slug} -- --no-progress`,
          ),
          exec(`npm run plop pack gobot,apps:helpers:latest -- --no-progress`, {
            env: { [EnvVarNames.PlopFilter]: slug },
          }),
          exec(
            `npm run plop publish gobot,apps:helpers:latest -- --no-progress`,
            {
              env: {
                [EnvVarNames.PlopFilter]: slug,
                [EnvVarNames.ReallyPublish]: `1`,
              },
            },
          ),
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

        const { args, code: expectedCode } = await loadTestModule(appPath)
        actions.push(
          async (answers, { onProgress }) => {
            if (argv.refresh) {
              onProgress(`Clearing ${slug} cache...`)
              await bot.reset()
            }

            onProgress(`Fetching ${slug} releases...`)
            const releases = await bot.releases()
            const jobs: string[] = []
            for (const release of releases) {
              for (const _osName in release.archives) {
                const osName = _osName as PlatformKey
                const { archives, version } = release
                if (!Object.prototype.hasOwnProperty.call(archives, osName))
                  continue
                const osInfo = archives[osName]
                for (const _archName in osInfo) {
                  const archName = _archName as ArchKey
                  if (!Object.prototype.hasOwnProperty.call(osInfo, archName))
                    continue
                  onProgress(
                    `Fetching ${slug}:${osName}:${archName}:${version} inline...`,
                  )
                  const { bot } = await getBot(slug, {
                    os: osName,
                    arch: archName,
                    version,
                  })
                  jobs.push(`${osName}:${archName}:${version}:fetch`)
                  const fname = await bot.getBinaryPath()
                  assert(existsSync(fname), `${fname} does not exist`)

                  const shouldRun = osName === platform() && archName === arch()
                  if (shouldRun) {
                    onProgress(
                      `Running ${slug}:${osName}:${archName}:${version} inline...`,
                    )
                    jobs.push(`${osName}:${archName}:${version}:run`)
                    const output = (buf: Buffer) => {
                      buf
                        .toString()
                        .split(/\n/)
                        .forEach((line) => {
                          if (line.trim()) onProgress(line)
                        })
                    }
                    const actualCode = await bot.run(args, {}, (proc) => {
                      proc.stdout.on('data', output)
                      proc.stderr.on('data', output)
                    })
                    assert(
                      expectedCode === actualCode,
                      `local run failed, expected exit code ${expectedCode} but got ${actualCode}`,
                    )
                  }
                }
              }
              break // just check latest release
            }

            return `local releases ${jobs.join(`, `)}`
          },
          exec(`npm rm -g gobot-${slug.toLocaleLowerCase()}`, {
            cwd: appHelperPath,
          }),
          async (answers, config, plop) => {
            if (!(await shouldRun()))
              return `${slug} is not available for platform. Skipping gobot exec`
            return exec(`gobot ${slug} ${args.join(',')}`)(
              answers,
              config,
              plop,
            )
          },
          async (answers, config, plop) => {
            const tgz = globSync(`gobot-*.tgz`, { cwd: appHelperPath })[0]
            return exec(`npm i -g ${tgz}`, { cwd: appHelperPath })(
              answers,
              config,
              plop,
            )
          },
          async (answers, config, plop) => {
            if (!(await shouldRun()))
              return `${slug} is not available for platform. Skipping tgz bin alias exec`
            return exec(`${slug} ${args.join(`,`)}`, {})(answers, config, plop)
          },
          exec(`npm rm -g gobot-${slug.toLocaleLowerCase()}`, {
            cwd: appHelperPath,
          }),
          exec(`npm i -g gobot`),
          exec(`npm i -g gobot-${slug.toLocaleLowerCase()}`, {
            cwd: appHelperPath,
          }),
          async (answers, config, plop) => {
            if (!(await shouldRun()))
              return `${slug} is not available for platform. Skipping registry bin alias exec`
            return exec(`${slug} ${args.join(`,`)}`, {})(answers, config, plop)
          },
        )

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
