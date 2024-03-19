import { findUpSync } from 'find-up'
import { existsSync } from 'fs'
import 'node-fetch'
import { dirname, join } from 'path'
import { NodePlopAPI } from 'plop'
import { rimraf } from 'rimraf'
import { buildCommand } from './plop-commands/buildCommand'
import { cleanCommand } from './plop-commands/cleanCommand'
import { inspectCommand } from './plop-commands/inspectCommand'
import { newAppCommand } from './plop-commands/newAppCommand'
import { packCommand } from './plop-commands/packCommand'
import { publishCommand } from './plop-commands/publishCommand'
import { appsRoot } from './src/util/getApp'
import { stringify } from './src/util/stringify'

const ROOT = findUpSync(`package.json`, {
  cwd: dirname(new URL(import.meta.url).pathname),
})
if (!ROOT) {
  throw new Error(`Can't find package.json in any parent path`)
}
const APPS_ROOT = join(dirname(ROOT), 'dist', 'apps')
if (!existsSync(APPS_ROOT)) {
  console.warn(`Warning: can't find ${APPS_ROOT}`)
}

appsRoot(APPS_ROOT)

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

  inspectCommand(plop)
  newAppCommand(plop)
  buildCommand(plop)
  packCommand(plop)
  publishCommand(plop)
  cleanCommand(plop)
}
