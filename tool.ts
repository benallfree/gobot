#!/usr/bin/env tsx

import { boolean } from 'boolean'

import Bottleneck from 'bottleneck'
import { spawn } from 'child_process'
import { Command, program } from 'commander'
import copyfiles from 'copyfiles'
import { globSync } from 'glob'
import { basename, dirname, join } from 'path'
import { rimraf } from 'rimraf'
import sharp from 'sharp'

import { createRequire } from 'module'
import { rcompare } from 'semver'
const require = createRequire(import.meta.url)

program
  .addCommand(
    new Command(`clean`).action(async () => {
      await clean()
    }),
  )
  .addCommand(
    new Command(`gen`).action(async () => {
      await gen()
    }),
  )
  .addCommand(
    new Command(`build`).action(async () => {
      await build()
    }),
  )
  .addCommand(
    new Command(`bump`).action(async () => {
      await bump()
    }),
  )
  .addCommand(
    new Command(`pack`)
      .option(`--flush`, `Flush cache`, boolean, false)
      .action(async ({ flush }) => {
        if (flush) {
          await clean(`pack`)
        }
        await pack()
      }),
  )
  .addCommand(
    new Command(`publish`)
      .option(`--dry-run <value>`, `Dry run`, boolean, true)
      .action(async ({ dryRun }) => {
        await publish(dryRun)
      }),
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

async function clean(
  only?: 'pack' | `templates` | `plugins` | `build` | `dist`,
) {
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
      only: [`dist`],
    },
    {
      fn: async () => {
        await rimraf(`**/gobot-*.tgz`, { glob: true })
        console.log(
          join(process.env.HOME!, `.local/share/verdaccio/storage`, `gobot`),
        )
        await rimraf(
          join(process.env.HOME!, `.local/share/verdaccio/storage`, `gobot*`),
          {
            glob: true,
          },
        )
      },
      only: [`pack`],
    },
  ]

  for (const taskIdx in tasks) {
    const task = tasks[taskIdx]!
    if (only && !task.only.includes(only)) continue
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

async function publish(dryRun = true) {
  console.log({ dryRun })
  const d = dryRun ? '--dry-run' : ''
  const s = `--silent`
  const p = `${s} ${d}`
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
      const max = tags[0]!
      try {
        await limiter.schedule(() => {
          console.log(`Publishing latest ${pluginName}:${max}`)
          return runShellCommand(`npm publish ${p}`, join(pluginDir, max))
        })
        for (const i in tags) {
          const tag = tags[i]!
          await limiter.schedule(() => {
            console.log(`Publishing ${pluginName}:${tag}`)
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
}
