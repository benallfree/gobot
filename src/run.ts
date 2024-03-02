import { spawn } from 'child_process'
import { join } from 'path'
import { getPocketBasePath } from './getPocketBasePath'
import { dbg } from './log'
import { mergeConfig } from './mergeConfig'
import { config } from './settings'
import { ArchValue, arch as _arch } from './settings/arch'
import { PlatformValue, os as _os } from './settings/os'
import { version as _version } from './settings/version'
import { pwd } from './util'

export type RunOptions = {
  os: PlatformValue
  arch: ArchValue
  version: string
}

export const run = async (
  args: string[],
  options: Partial<RunOptions> = {},
) => {
  const { os, arch, version } = mergeConfig<RunOptions>(
    {
      os: _os(),
      arch: _arch(),
      version: _version(),
    },
    options,
  )

  const fname = await getPocketBasePath()

  // Check if "--dir" is already specified
  if (!args.find((arg) => arg.startsWith('--dir'))) {
    args.push(`--dir=${join(pwd(), `pb_data`)}`)
  }

  dbg(`Running ${fname}`, args)

  const proc = spawn(fname, args, {
    env: config().env,
    stdio: 'inherit',
    cwd: pwd(),
  })

  proc.on('error', (err) => {
    console.error(`Failed to start pocketbase: ${err.message}`)
  })

  proc.on('exit', (code) => {
    console.log(`pocketbase exited with code ${code}`)
  })

  return proc
}
