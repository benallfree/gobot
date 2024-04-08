import { findUpSync } from 'find-up'
import { existsSync } from 'fs'
import 'node-fetch'
import { dirname, join } from 'path'
import type { NodePlopAPI } from 'plop'
import { appsRoot } from '../src/util/getApp'
import { stringify } from '../src/util/stringify'
import { buildCommand } from './commands/buildCommand'
import { cleanCommand } from './commands/cleanCommand'
import { inspectCommand } from './commands/inspectCommand'
import { newAppCommand } from './commands/newAppCommand'
import { packCommand } from './commands/packCommand'
import { publishCommand } from './commands/publishCommand'
import { testCommand } from './commands/testCommand'
import { updateCommand } from './commands/updateCommand'

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

  inspectCommand(plop)
  newAppCommand(plop)
  updateCommand(plop)
  buildCommand(plop)
  packCommand(plop)
  publishCommand(plop)
  testCommand(plop)
  cleanCommand(plop)
}
