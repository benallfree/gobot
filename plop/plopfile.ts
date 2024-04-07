import filenamify from 'filenamify'
import { findUpSync } from 'find-up'
import { existsSync } from 'fs'
import 'node-fetch'
import { dirname, join } from 'path'
import type { NodePlopAPI } from 'plop'
import { verbosity } from '../src/settings'
import { appsRoot } from '../src/util/getApp'
import { mkdir } from '../src/util/shell'
import { stringify } from '../src/util/stringify'
import { buildCommand } from './commands/buildCommand'
import { cleanCommand } from './commands/cleanCommand'
import { inspectCommand } from './commands/inspectCommand'
import { newAppCommand } from './commands/newAppCommand'
import { packCommand } from './commands/packCommand'
import { publishCommand } from './commands/publishCommand'
import { testCommand } from './commands/testCommand'
import { exec as _exec } from './commands/util/exec'
import { matchSnapshot } from './commands/util/matchSnapshot'

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

  plop.setActionType(`exec`, async (answers, config, plop) => {
    const { cmd, options, code: _expectedExitCode, snapshot } = config
    const expectedExitCode = _expectedExitCode || 0
    if (!cmd) throw new Error(`cmd required`)
    console.log(`Starting ${cmd}`)
    const stdout: string[] = []
    const stderr: string[] = []
    const ret = await _exec(cmd, options, (proc) => {
      if (verbosity() >= 3) return
      proc.stdout.on('data', (buf) => {
        stdout.push(buf.toString())
        process.stdout.write(buf)
      })
      proc.stderr.on('data', (buf) => {
        stderr.push(buf.toString())
        process.stderr.write(buf)
      })
    })
    if (snapshot) {
      const snapshotFname = join(`__snapshots__`, filenamify(snapshot))
      mkdir(dirname(snapshotFname))
      console.log({ snapshotFname })
      await matchSnapshot([ret, stdout, stderr], snapshotFname)
    }
    if (ret !== expectedExitCode) {
      const msg = `Expected code ${expectedExitCode} but got ${ret} for command ${cmd}`
      console.error(msg)
      throw new Error(msg)
    } else {
      console.log(`${cmd} exited with ${expectedExitCode}`)
    }
    return cmd
  })
  plop.setActionType(`fn`, async (answers, config, plop) => {
    const { fn } = config
    if (!fn) throw new Error(`fn required`)
    const res = await fn()
    return res
  })

  inspectCommand(plop)
  newAppCommand(plop)
  buildCommand(plop)
  packCommand(plop)
  publishCommand(plop)
  testCommand(plop)
  cleanCommand(plop)
}
