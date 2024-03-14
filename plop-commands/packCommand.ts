import Bottleneck from 'bottleneck'
import { globSync } from 'glob'
import { join } from 'path'
import { NodePlopAPI } from 'plop'
import { runShellCommand } from '../runShellCommand'
import { localAction } from './util/localAction'
import { mkSubcommander } from './util/mkSubcommander'

export const packCommand = (plop: NodePlopAPI) => {
  const PACK_GOBOT = localAction(plop, async (answers, config, plop) => {
    await runShellCommand(`npm pack`)
    return 'Gobot packed'
  })

  const PACK_HELPERS = localAction(plop, async (answers, config, plop) => {
    const limiter = new Bottleneck({ maxConcurrent: 50 })

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
    return 'Helpers packed'
  })

  mkSubcommander(
    `pack`,
    `Pack for npm`,
    `Choose build artifacts to pack`,
    {
      gobot: {
        gen: async () => [
          {
            type: PACK_GOBOT,
          },
        ],
        clean: [
          {
            type: `rimraf`,
            path: `gobot-*.tgz`,
          },
        ],
      },
      helpers: {
        gen: async () => [
          {
            type: PACK_HELPERS,
          },
        ],
        clean: [
          {
            type: `rimraf`,
            path: `src/plugins/*/helpers/gobot-*.tgz`,
          },
        ],
      },
    },
    'gen',
    plop,
  )
}
