import { boolean } from 'boolean'
import Bottleneck from 'bottleneck'
import { globSync } from 'glob'
import type { CustomActionFunction, NodePlopAPI } from 'plop'
import { Flags } from '../../src/util/flags'
import { cleanVerdaccioPackages } from './helpers/cleanVerdaccioPackages'
import { exec } from './helpers/exec'
import { getSlugsFromFileSystem } from './util/getSlugsFromFileSystem'
import { mkSubcommander, type Subcommands } from './util/mkSubcommander'
import { plopFilter } from './util/plopFilter'

export const publishCommand = (plop: NodePlopAPI) => {
  const dryRun = !boolean(process.env[Flags.ReallyPublish])
  const d = dryRun ? '--dry-run' : ''
  const s = ``
  const p = `${s} ${d}`
  const limiter = new Bottleneck({ maxConcurrent: 50 })

  const publish =
    (path: string, tag = `latest`): CustomActionFunction =>
    async (answers, options, plop) => {
      const { onProgress } = options
      const published: string[] = []
      await Promise.all(
        globSync(path).map((tgz) =>
          limiter.schedule(async () => {
            const _tag =
              tag ||
              `archive-${tgz.match(/(\d+\.\d+\.\d+(?:-.*?))\.tgz/)?.[1]!}`
            onProgress(`Publishing ${tgz} to tag ${_tag} ${p}`)
            await exec(`npm publish --tag ${_tag} ${p} ${tgz}`)(
              answers,
              options,
              plop,
            )
            published.push(tgz)
          }),
        ),
      )
      return `Published ${published.join(` `)}`
    }

  const subcommands: Subcommands = {
    gobot: {
      gen: async () => [publish('gobot-*.tgz')],
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
    gen: () => [publish(`src/apps/${plopFilter()}/helper/gobot-*.tgz`)],
    clean: [
      cleanVerdaccioPackages(
        getSlugsFromFileSystem().map(
          (slug) => `gobot-${slug.toLocaleLowerCase()}`,
        ),
      ),
    ],
  }

  const flags = `${Flags.UseNpm}=${process.env[Flags.UseNpm]} ${Flags.ReallyPublish}=${process.env[Flags.ReallyPublish] || 0} ${Flags.NpmRegistryEndpoint}=${process.env[Flags.NpmRegistryEndpoint] || 'npm'}`
  mkSubcommander(
    `publish`,
    `Publish to registry (${flags})`,
    `Choose artifacts to publish (${flags})`,
    subcommands,
    'gen',
    plop,
  )
}
