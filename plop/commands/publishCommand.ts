import { boolean } from 'boolean'
import Bottleneck from 'bottleneck'
import { globSync } from 'glob'
import type { NodePlopAPI } from 'plop'
import { Flags } from '../../src/util/flags'
import { cleanVerdaccioPackages } from './helpers/cleanVerdaccioPackages'
import { exec } from './util/exec'
import { getSlugsFromFileSystem } from './util/getSlugsFromFileSystem'
import { localAction } from './util/localAction'
import { mkSubcommander, type Subcommands } from './util/mkSubcommander'
import { plopFilter } from './util/plopFilter'

export const publishCommand = (plop: NodePlopAPI) => {
  const dryRun = !boolean(process.env[Flags.ReallyPublish])
  const d = dryRun ? '--dry-run' : ''
  const s = ``
  const p = `${s} ${d}`
  const limiter = new Bottleneck({ maxConcurrent: 50 })

  const PUBLISH = localAction(
    `publish`,
    plop,
    async (answers, config, plop) => {
      const { path, tag } = config
      await Promise.all(
        globSync(path).map((tgz) =>
          limiter.schedule(async () => {
            const _tag =
              tag ||
              `archive-${tgz.match(/(\d+\.\d+\.\d+(?:-.*?))\.tgz/)?.[1]!}`
            console.log(`Publishing ${tgz} to tag ${_tag} ${p}`)
            await exec(`npm publish --tag ${_tag} ${p} ${tgz}`).catch(
              console.warn,
            )
          }),
        ),
      )
      return `Published ${path}`
    },
  )

  const subcommands: Subcommands = {
    gobot: {
      gen: async () => [
        {
          type: PUBLISH,
          path: 'gobot-*.tgz',
          tag: `latest`,
        },
      ],
      clean: [cleanVerdaccioPackages([`gobot`])],
    },

    // 'helpers:archived': {
    //   gen: async () => {
    //     return [
    //       {
    //         type: PUBLISH,
    //         path: `build/apps/**/gobot-*.tgz`,
    //       },
    //     ]
    //   },
    //   clean: [
    //     {
    //       type: CLEAN,
    //       path: `build/apps/*/`,
    //     },
    //   ],
    // },
  }

  subcommands[`apps:helpers:latest`] = {
    gen: () => [
      {
        type: PUBLISH,
        path: `src/apps/${plopFilter()}/helper/gobot-*.tgz`,
        tag: `latest`,
      },
    ],
    clean: [
      cleanVerdaccioPackages(
        getSlugsFromFileSystem().map((slug) => `gobot-${slug}`),
      ),
    ],
  }

  const flags = `${Flags.ReallyPublish}=${process.env[Flags.ReallyPublish] || 0} ${Flags.NpmRegistryEndpoint}=${process.env[Flags.NpmRegistryEndpoint] || 'npm'}`
  mkSubcommander(
    `publish`,
    `Publish to registry (${flags})`,
    `Choose artifacts to publish (${flags})`,
    subcommands,
    'gen',
    plop,
  )
}
