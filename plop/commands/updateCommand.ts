import type { NodePlopAPI } from 'plop'
import { getBot } from './util/getBot'
import { getSlugsFromFileSystem } from './util/getSlugsFromFileSystem'
import { mkSubcommander, type Subcommands } from './util/mkSubcommander'

export const updateCommand = (plop: NodePlopAPI) => {
  const subcommands: Subcommands = {}

  getSlugsFromFileSystem().forEach((slug) => {
    subcommands[`app:${slug}`] = {
      gen: [
        async (answers, cfg, plop) => {
          const { onProgress } = cfg
          onProgress(`initializing ${slug} bot`)
          const { bot } = await getBot(slug)
          onProgress(`updating ${slug}`)
          await bot.update()
          return `updated ${slug}`
        },
      ],
      clean: [],
    }
  })

  mkSubcommander(
    `update`,
    `Update gobot apps`,
    `Choose apps to update`,
    subcommands,
    'gen',
    plop,
  )
}
