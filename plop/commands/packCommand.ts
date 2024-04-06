import Bottleneck from 'bottleneck'
import { globSync } from 'glob'
import { join } from 'path'
import type { NodePlopAPI } from 'plop'
import { spawn } from '../../src/util/spawn'
import { rimraf } from './helpers/rimraf'
import { localAction } from './util/localAction'
import { mkSubcommander, type Subcommands } from './util/mkSubcommander'
import { plopFilter } from './util/plopFilter'

export const packCommand = (plop: NodePlopAPI) => {
  const limiter = new Bottleneck({ maxConcurrent: 50 })
  const PACK = localAction(`pack`, plop, async (answers, config, plop) => {
    const { path } = config

    await Promise.all(
      globSync(path, {
        absolute: true,
      }).map(async (path) => {
        if (globSync(join(path, `gobot-*.tgz`)).length > 0) {
          console.log(`Pack exists, skipping ${path}`)
          return
        }
        await limiter.schedule(() =>
          spawn(`npm pack --silent`, { env: process.env, cwd: path }),
        )
      }),
    )
    return `Packed ${path}`
  })

  const subcommands: Subcommands = {
    gobot: {
      gen: async () => [
        {
          type: PACK,
          path: ['.'],
        },
      ],
      clean: [rimraf(`gobot-*.tgz`)],
    },

    // 'helpers:archived': {
    //   gen: () => {
    //     return []
    //     return [
    //       {
    //         type: PACK,
    //         path: `build/apps/*/*`,
    //       },
    //     ]
    //   },
    //   clean: [
    //     {
    //       type: `rimraf`,
    //       path: `build/apps/**/gobot-*.tgz`,
    //     },
    //   ],
    // },
  }

  subcommands[`apps:helpers:latest`] = {
    gen: (answers) => {
      return [
        {
          type: PACK,
          path: `src/apps/${plopFilter()}/helper`,
        },
      ]
    },
    clean: [rimraf(`src/apps/${plopFilter()}/helper/gobot-*.tgz`)],
  }

  mkSubcommander(
    `pack`,
    `Pack for npm`,
    `Choose build artifacts to pack`,
    subcommands,
    'gen',
    plop,
  )
}
