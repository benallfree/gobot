#!/usr/bin/env tsx

import { boolean } from 'boolean'

import Bottleneck from 'bottleneck'
import { Command, program } from 'commander'
import { globSync } from 'glob'
import { createRequire } from 'module'
import { basename, join } from 'path'
import { rcompare } from 'semver'
import { runShellCommand } from './runShellCommand'

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

  .addCommand(new Command(`bump`).action(bump))
  .addCommand(new Command(`pack`).action(pack))
  .addCommand(
    new Command(`publish`)
      .option(`--dry-run <value>`, `Dry run`, boolean, true)
      .option(`--registry <registry>`, `local or npm`, `local`)
      .action(publish),
  )
  .parseAsync(process.argv)

const limiter = new Bottleneck({ maxConcurrent: 50 })

async function pack() {
  await runShellCommand(`npm pack`)
  await Promise.all([
    ...globSync(`build/apps/*/*/`, {
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
    ...globSync(`build/apps/*`).map(async (pluginDir) => {
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
