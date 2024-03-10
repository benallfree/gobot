#!/usr/bin/env tsx

import { spawn } from 'child_process'
import { Command, program } from 'commander'
import { globSync } from 'glob'
import { dirname, join } from 'path'
import { rimraf } from 'rimraf'
import sharp from 'sharp'

program
  .addCommand(
    new Command(`build`).action(async () => {
      await clean()
      await gen()
      await build()
      await pack()
    }),
  )
  .addCommand(
    new Command(`bump`).action(async () => {
      await clean()
      await gen()
      await build()
      await pack()
      await bump()
    }),
  )
  .addCommand(
    new Command(`publish`).action(async () => {
      await clean()
      await gen()
      await build()
      await pack()
      await publish()
    }),
  )
  .addCommand(
    new Command(`gen`).action(async () => {
      await clean()
      await gen()
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

    cmdProcess.on('close', (code) => {
      if (code === 0) {
        resolve()
      } else {
        reject(new Error(`Command "${command}" exited with code ${code}`))
      }
    })
  })
}

async function clean() {
  await rimraf(`src/plugins/*/logo-*.png`, { glob: true })
  await rimraf(`src/plugins/*/standalone`, { glob: true })
  await rimraf(`src/plugins/*/sample-project`, { glob: true })
  await rimraf(`src/plugins/*/node_modules`, { glob: true })
  await rimraf(`src/plugins/**/.DS_Store`, { glob: true })
}

async function gen() {
  await runShellCommand(`pnpm plugins`)
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
  await runShellCommand(`pnpm build`)
}

async function pack() {
  await runShellCommand(`pnpm pack`)
  await Promise.all([
    ...globSync(`src/plugins/*/standalone/`).map(async (dir) => {
      await runShellCommand(`npm pack`, dir)
    }),
  ])
}

async function bump() {
  await runShellCommand(`pnpm run bump`)
}

async function publish() {
  await runShellCommand(`npm publish`)
  await Promise.all([
    ...globSync(`src/plugins/*/standalone/`).map(async (dir) => {
      await runShellCommand(`npm publish`, dir)
    }),
  ])
}
