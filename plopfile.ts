import { NodePlopAPI } from 'plop'
import { rimraf } from 'rimraf'
import { cleanCommand } from './plop-commands/cleanCommand'
import { inviteCommand } from './plop-commands/inviteCommand'
import { pluginCommand } from './plop-commands/pluginCommand'
import { readmeCommand } from './plop-commands/readmeCommand'
import { stringify } from './src/util/stringify'

export default async function (plop: NodePlopAPI) {
  plop.setHelper('stringify', function (context) {
    return stringify(context)
  })
  plop.setHelper('count', function (context: any[]) {
    return context.length
  })
  plop.setHelper('csv', function (context: string[]) {
    return context?.join(`, `)
  })
  plop.setHelper('codecsv', function (context: string[]) {
    return context?.map((v) => `\`${v}\``).join(`, `)
  })
  plop.setActionType(`rimraf`, async (answers, config, plop) => {
    const { path, options } = config
    await rimraf(path, { glob: true, ...options })
    return `Removed ${path}`
  })

  readmeCommand(plop)
  inviteCommand(plop)
  pluginCommand(plop)
  cleanCommand(plop)
}
