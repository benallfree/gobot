#!/usr/bin/env tsx

import { boolean } from 'boolean'

import Bottleneck from 'bottleneck'
import { spawn } from 'child_process'
import { Command, program } from 'commander'
import copyfiles from 'copyfiles'
import { readFileSync, writeFileSync } from 'fs'
import { globSync } from 'glob'
import { createRequire } from 'module'
import { basename, dirname, join } from 'path'
import { rimraf } from 'rimraf'
import { rcompare } from 'semver'
import sharp from 'sharp'
import { stringify } from './src/util/stringify'

const require = createRequire(import.meta.url)

const CLEAN_FILTERS = [`all`, `registry`, `none`, `build`] as const
type CleanFilters = (typeof CLEAN_FILTERS)[number]
function cleanFilterGuard(filter: any): CleanFilters {
  if (CLEAN_FILTERS.includes(filter)) return filter as CleanFilters
  throw new Error(
    `${filter} is not a recognized filter: ${CLEAN_FILTERS.join(`, `)}`,
  )
}

program
  .addCommand(
    new Command(`clean`)
      .argument(
        `<filter>`,
        `Filter to use when cleaning (${CLEAN_FILTERS.join(`, `)})`,
        cleanFilterGuard,
        `none`,
      )
      .action(clean),
  )
  .addCommand(new Command(`gen`).action(gen))
  .addCommand(new Command(`build`).action(build))
  .addCommand(new Command(`bump`).action(bump))
  .addCommand(new Command(`pack`).action(pack))
  .addCommand(
    new Command(`publish`)
      .option(`--dry-run <value>`, `Dry run`, boolean, true)
      .option(`--registry <registry>`, `local or npm`, `local`)
      .action(publish),
  )
  .parseAsync(process.argv)

async function executePromisesSequentially(
  promises: (() => Promise<any>)[],
): Promise<void> {
  for (const promise of promises) {
    await promise()
  }
}

const copy = (src: string, dst: string) => {
  return new Promise<void>((resolve) => {
    copyfiles(
      [src, dst],
      {
        verbose: false,
        up: true,
      },
      (err) => {
        if (err) {
          console.error(err)
          throw err
        }
        resolve()
      },
    )
  })
}

async function runShellCommand(
  command: string,
  directory?: string,
): Promise<void> {
  return new Promise((resolve, reject) => {
    const [cmd, ...args] = command.split(/\s+/)
    if (!cmd) {
      throw new Error(`cmd expected`)
    }
    const cmdProcess = spawn(cmd, args, {
      cwd: directory ? directory : process.cwd(),
      shell: true,
      stdio: ['inherit', 'pipe', 'pipe'],
    })

    cmdProcess.stdout.on('data', (data) => {
      console.log(data.toString())
    })

    cmdProcess.stderr.on('data', (data) => {
      console.error(data.toString())
    })

    cmdProcess.on(`error`, (err) => {
      console.error(`Command failed`, command, directory)
      reject(err)
    })

    cmdProcess.on('close', (code) => {
      if (code === 0) {
        resolve()
      } else {
        reject(new Error(`Command "${command}" exited with code ${code}`))
      }
    })
  })
}

async function clean(only: CleanFilters) {
  const tasks = [
    {
      fn: async () => {
        await rimraf(`plop-templates/plugin/helper/node_modules`, {
          glob: true,
        })
        await rimraf(`plop-templates/plugin/helper/pnpm-lock.yaml`, {
          glob: true,
        })
      },
      only: ['templates'],
    },
    {
      fn: async () => {
        await rimraf(`src/plugins/*/logo-*.png`, { glob: true })
        await rimraf(`src/plugins/*/helper`, { glob: true })
        await rimraf(`src/plugins/*/sample-project`, { glob: true })
      },
      only: [`plugins`],
    },
    {
      fn: async () => {
        await rimraf(`build`, { glob: true })
      },
      only: [`build`],
    },
    {
      fn: async () => {
        await rimraf(`dist`, { glob: true })
      },
      only: [`build`],
    },
    {
      fn: async () => {
        const vRoot = join(process.env.HOME!, `.local/share/verdaccio/storage`)
        const dbPath = join(vRoot, `.verdaccio-db.json`)
        const db = JSON.parse(readFileSync(dbPath).toString())
        writeFileSync(dbPath, stringify({ ...db, list: [] }))
        await rimraf(join(vRoot, `*`), {
          glob: true,
        })
      },
      only: [`registry`],
    },
    {
      fn: async () => {
        await rimraf(`**/gobot-*.tgz`, { glob: true })
      },
      only: [`pack`],
    },
  ]

  for (const taskIdx in tasks) {
    const task = tasks[taskIdx]!
    if (!(task.only.includes(only) || only === 'all')) continue
    await task.fn()
  }
  await rimraf(`**/.DS_Store`, { glob: true })
}

const limiter = new Bottleneck({ maxConcurrent: 50 })

async function gen() {
  await runShellCommand(`pnpm build`)
  await runShellCommand(`pnpm i`, `plop-templates/plugin/helper`)
  await runShellCommand(`pnpm link ../../..`, `plop-templates/plugin/helper`)
  await runShellCommand(`pnpm build`, `plop-templates/plugin/helper`)
  await runShellCommand(`pnpm run docs`)
  await runShellCommand(`pnpm plop readme`)
  await runShellCommand(`pnpm plop plugins`)
  await Promise.all([
    ...globSync(`src/plugins/*/logo.png`).map(async (logo) => {
      await sharp(logo)
        .resize({ width: 50 })
        .trim()
        .png()
        .toFile(join(dirname(logo), `logo-50x.png`))
      await sharp(logo)
        .resize({ height: 50 })
        .trim()
        .png()
        .toFile(join(dirname(logo), `logo-x50.png`))
    }),
  ])
}
async function build() {
  await runShellCommand(`pnpm run build`)
}

async function pack() {
  await runShellCommand(`npm pack`)
  await Promise.all([
    ...globSync(`build/plugins/*/*/`, {
      absolute: true,
    }).map(async (dir) => {
      await limiter.schedule(async () => {
        console.log(`packing ${dir}`)
        if (globSync(join(dir, `gobot-*.tgz`)).length > 0) {
          console.log(`Skipping ${dir}`)
          return
        }
        await runShellCommand(`npm pack --silent`, dir)
      })
    }),
  ])
}

async function bump() {
  await runShellCommand(`pnpm run bump`)
}

async function publish({
  dryRun,
  registry,
}: {
  dryRun: boolean
  registry: string
}) {
  const server = await (async () => {
    // if (registry !== `npm`) {
    //   const app = await runServer()
    //   return new Promise<void>((resolve) => {
    //     app.listen(4873, resolve)
    //     return app
    //   })
    // }
    return {
      stop() {},
    }
  })()
  console.log({ dryRun, registry })
  const r =
    registry === 'npm'
      ? `--registry=https://registry.npmjs.org/`
      : `--registry=http://localhost:4873/`
  const d = dryRun ? '--dry-run' : ''
  const s = `--silent`
  const p = `${s} ${d} ${r}`
  await runShellCommand(`npm publish ${p}`).catch(console.warn)
  await Promise.all([
    ...globSync(`build/plugins/*`).map(async (pluginDir) => {
      const pluginName = basename(pluginDir)
      const tags: string[] = []
      globSync(join(pluginDir, '*')).forEach(async (dir) => {
        const tag = basename(dir)
        tags.push(tag)
      })
      tags.sort(rcompare)
      const max = tags.shift()!
      try {
        await limiter.schedule(() => {
          console.log(`Publishing latest ${pluginName}:${max} ${p}`)
          return runShellCommand(`npm publish ${p}`, join(pluginDir, max))
        })
        for (const i in tags) {
          const tag = tags[i]!
          await limiter.schedule(() => {
            console.log(`Publishing ${pluginName}:${tag} ${p}`)
            return runShellCommand(
              `npm publish ${p} --tag="archive-${tag}"`,
              join(pluginDir, tag),
            )
          })
        }
      } catch (e) {
        console.warn(`${e}`)
      }
    }),
  ])
  server.stop()
}
