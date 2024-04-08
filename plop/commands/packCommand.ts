import Bottleneck from 'bottleneck'
import { globSync } from 'glob'
import { join } from 'path'
import type { CustomActionFunction, NodePlopAPI } from 'plop'
import { spawn } from '../../src/util/spawn'
import { rimraf } from './helpers/rimraf'
import { mkSubcommander, type Subcommands } from './util/mkSubcommander'
import { plopFilter } from './util/plopFilter'

export const packCommand = (plop: NodePlopAPI) => {
  const limiter = new Bottleneck({ maxConcurrent: 50 })
  const pack =
    (path: string): CustomActionFunction =>
    async (answers, { onProgress }, plop) => {
      const packed: string[] = []
      await Promise.all(
        globSync(path, {
          absolute: true,
        }).map(async (path) => {
          if (globSync(join(path, `gobot-*.tgz`)).length > 0) {
            throw new Error(`Pack exists, skipping ${path}`)
          }
          await limiter.schedule(() => {
            const cmd = `npm pack --silent`
            onProgress(`${path} ${cmd}`)
            return spawn(cmd, { env: process.env, cwd: path })
          })
          packed.push(path)
        }),
      )
      return `Packed ${packed.join(` `)}`
    }

  const subcommands: Subcommands = {
    gobot: {
      gen: [pack(`.`)],
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
      return [pack(`src/apps/${plopFilter()}/helper`)]
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
