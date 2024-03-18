import 'node-fetch'
import { NodePlopAPI } from 'plop'
import { rimraf } from 'rimraf'
import { buildCommand } from './plop-commands/buildCommand'
import { cleanCommand } from './plop-commands/cleanCommand'
import { newAppCommand } from './plop-commands/newAppCommand'
import { packCommand } from './plop-commands/packCommand'
import { publishCommand } from './plop-commands/publishCommand'
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

  newAppCommand(plop)
  buildCommand(plop)
  packCommand(plop)
  publishCommand(plop)
  cleanCommand(plop)
}
