import Bottleneck from 'bottleneck'
import { globSync } from 'glob'
import { join } from 'path'
import { NodePlopAPI } from 'plop'
import { runShellCommand } from '../runShellCommand'
import { localAction } from './util/localAction'
import { mkSubcommander } from './util/mkSubcommander'

export const packCommand = (plop: NodePlopAPI) => {
  const limiter = new Bottleneck({ maxConcurrent: 50 })
  const PACK = localAction(plop, async (answers, config, plop) => {
    const { path } = config

    await Promise.all(
      globSync(path, {
        absolute: true,
      }).map(async (path) => {
        if (globSync(join(path, `gobot-*.tgz`)).length > 0) {
          console.log(`Pack exists, skipping ${path}`)
          return
        }
        await limiter.schedule(() => runShellCommand(`npm pack --silent`, path))
      }),
    )
    return `Packed ${path}`
  })

  mkSubcommander(
    `pack`,
    `Pack for npm`,
    `Choose build artifacts to pack`,
    {
      gobot: {
        gen: async () => [
          {
            type: PACK,
            path: ['.'],
          },
        ],
        clean: [
          {
            type: `rimraf`,
            path: `gobot-*.tgz`,
          },
        ],
      },
      'helpers:latest': {
        gen: [
          {
            type: PACK,
            path: `src/apps/*/helper`,
          },
        ],
        clean: [
          {
            type: `rimraf`,
            path: `src/apps/*/helper/gobot-*.tgz`,
          },
        ],
      },
      'helpers:archived': {
        gen: () => {
          return []
          return [
            {
              type: PACK,
              path: `build/apps/*/*`,
            },
          ]
        },
        clean: [
          {
            type: `rimraf`,
            path: `build/apps/**/gobot-*.tgz`,
          },
        ],
      },
    },
    'gen',
    plop,
  )
}
