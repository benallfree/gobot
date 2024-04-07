#!/usr/bin/env tsx

import { gracefulExit } from 'exit-hook'
import minimist from 'minimist'
import path, { dirname } from 'node:path'
import { cwd } from 'node:process'
import { fileURLToPath } from 'node:url'
import { Plop, run } from 'plop'
import { startVerdaccio } from './commands/util/startVerdaccio'

const args = process.argv.slice(2)
const argv = minimist(args)

const __dirname = dirname(fileURLToPath(import.meta.url))

process.on('uncaughtException', (err, origin) => {
  console.error(origin, err)
  gracefulExit()
})

async function main() {
  await new Promise((resolve, reject) => {
    Plop.prepare(
      {
        cwd: argv.cwd || cwd(),
        configPath: path.join(__dirname, 'plopfile.ts'),
        preload: argv.preload || [],
        completion: argv.completion,
      },
      (env) => {
        Plop.execute(env, async (env, argv) => {
          try {
            const stop = await startVerdaccio()
            await run(env, undefined, false)
            await stop()
          } catch (e) {
            reject(e)
          }
        })
      },
    )
  })
}
main()
