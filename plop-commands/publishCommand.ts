import { boolean } from 'boolean'
import Bottleneck from 'bottleneck'
import { globSync } from 'glob'
import { basename, join } from 'path'
import { NodePlopAPI } from 'plop'
import { rcompare } from 'semver'
import { runShellCommand } from '../runShellCommand'
import { localAction } from './util/localAction'
import { mkSubcommander } from './util/mkSubcommander'

export const publishCommand = (plop: NodePlopAPI) => {
  const dryRun = !boolean(process.env.CONFIRM)
  const registry = process.env.REGISTRY
  console.log({ dryRun, registry })
  const r =
    registry === 'npm'
      ? `--registry=https://registry.npmjs.org/`
      : `--registry=http://localhost:4873/`
  const d = dryRun ? '--dry-run' : ''
  const s = `--silent`
  const p = `${s} ${d} ${r}`

  const PUBLISH_GOBOT = localAction(plop, async (answers, config, plop) => {
    await runShellCommand(`npm publish ${p}`).catch(console.warn)
    return 'Gobot published'
  })

  const PUBLISH_HELPERS = localAction(plop, async (answers, config, plop) => {
    const limiter = new Bottleneck({ maxConcurrent: 50 })

    await Promise.all([
      ...globSync(`build/apps/*`).map(async (appDir) => {
        const appName = basename(appDir)
        const tags: string[] = []
        globSync(join(appDir, '*')).forEach(async (dir) => {
          const tag = basename(dir)
          tags.push(tag)
        })
        tags.sort(rcompare)
        const max = tags.shift()!
        try {
          await limiter.schedule(() => {
            console.log(`Publishing latest ${appName}:${max} ${p}`)
            return runShellCommand(`npm publish ${p}`, join(appDir, max))
          })
          for (const i in tags) {
            const tag = tags[i]!
            await limiter.schedule(() => {
              console.log(`Publishing ${appName}:${tag} ${p}`)
              return runShellCommand(
                `npm publish ${p} --tag="archive-${tag}"`,
                join(appDir, tag),
              )
            })
          }
        } catch (e) {
          console.warn(`${e}`)
        }
      }),
    ])
    return 'Helpers published'
  })

  mkSubcommander(
    `publish`,
    `Publish to registry (CONFIRM=1 REGISTRY=npm, otherwise dry run to verdaccio)`,
    `Choose artifacts to publish`,
    {
      gobot: {
        gen: async () => [
          {
            type: PUBLISH_GOBOT,
          },
        ],
        clean: [],
      },
      helpers: {
        gen: async () => [
          {
            type: PUBLISH_HELPERS,
          },
        ],
        clean: [],
      },
    },
    'gen',
    plop,
  )
}
