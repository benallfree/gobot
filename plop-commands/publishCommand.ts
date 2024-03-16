import { boolean } from 'boolean'
import Bottleneck from 'bottleneck'
import { globSync } from 'glob'
import { basename } from 'path'
import { NodePlopAPI } from 'plop'
import { runShellCommand } from '../runShellCommand'
import { cleanVerdaccioPackages } from './util/cleanVerdaccioPackages'
import { localAction } from './util/localAction'
import { mkSubcommander } from './util/mkSubcommander'

export const publishCommand = (plop: NodePlopAPI) => {
  const dryRun = !boolean(process.env.CONFIRM)
  const registry = process.env.REGISTRY || 'verdaccio'
  console.log({ dryRun, registry })
  const r =
    registry === 'npm'
      ? `--registry=https://registry.npmjs.org/`
      : `--registry=http://localhost:4873/`
  const d = dryRun ? '--dry-run' : ''
  const s = ``
  const p = `${s} ${d} ${r}`
  const limiter = new Bottleneck({ maxConcurrent: 50 })

  const PUBLISH = localAction(plop, async (answers, config, plop) => {
    const { path, tag } = config
    console.log({ path, tag }, globSync(path))
    await Promise.all(
      globSync(path).map((tgz) =>
        limiter.schedule(async () => {
          const _tag =
            tag || `archive-${tgz.match(/(\d+\.\d+\.\d+(?:-.*?))\.tgz/)?.[1]!}`
          console.log(`Publishing ${tgz} to tag ${_tag}`)
          await runShellCommand(`npm publish --tag ${_tag} ${p} ${tgz}`).catch(
            console.warn,
          )
        }),
      ),
    )
    return `Published ${path}`
  })

  const CLEAN = localAction(plop, async (answers, config, plop) => {
    const { path, name } = config
    const packageNames = name
      ? [name]
      : globSync(path).map((packagePath) => `gobot-${basename(packagePath)}`)

    await cleanVerdaccioPackages(packageNames)

    return `Cleaned ${packageNames.join(', ')}`
  })

  mkSubcommander(
    `publish`,
    `Publish to registry (CONFIRM=1 REGISTRY=npm, otherwise dry run to verdaccio)`,
    `Choose artifacts to publish (CONFIRM=${dryRun ? '0 [dry run]' : '1 [live publish]'}, REGISTRY=${registry})`,
    {
      gobot: {
        gen: async () => [
          {
            type: PUBLISH,
            path: 'gobot-*.tgz',
            tag: `latest`,
          },
        ],
        clean: [
          {
            type: CLEAN,
            name: `gobot`,
          },
        ],
      },
      'helpers:latest': {
        gen: [
          {
            type: PUBLISH,
            path: `src/apps/**/gobot-*.tgz`,
            tag: `latest`,
          },
        ],
        clean: [
          {
            type: CLEAN,
            path: `src/apps/*/`,
          },
        ],
      },
      'helpers:archived': {
        gen: async () => [
          {
            type: PUBLISH,
            path: `build/apps/**/gobot-*.tgz`,
          },
        ],
        clean: [
          {
            type: CLEAN,
            path: `build/apps/*/`,
          },
        ],
      },
    },
    'gen',
    plop,
  )
}
