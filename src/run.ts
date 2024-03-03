import { spawn } from 'child_process'
import { join } from 'path'
import { getPocketBasePath } from './getPocketBasePath'
import { dbg } from './log'
import { mergeConfig } from './mergeConfig'
import { ArchValue, arch as _arch } from './settings/arch'
import { env as _env } from './settings/env'
import { PlatformValue, os as _os } from './settings/os'
import { version as _version } from './settings/version'
import { pwd } from './util'

export type RunOptions = {
  os: PlatformValue
  arch: ArchValue
  version: string
  env: NodeJS.ProcessEnv
}

export const run = async (
  args: string[],
  options: Partial<RunOptions> = {},
) => {
  const { os, arch, version, env } = mergeConfig<RunOptions>(
    {
      os: _os(),
      arch: _arch(),
      version: _version(),
      env: _env(),
    },
    options,
  )

  const fname = await getPocketBasePath(`${version}_${os}_${arch}`)({
    os,
    arch,
    version,
  })

  // Check if "--dir" is already specified
  if (!args.find((arg) => arg.startsWith('--dir'))) {
    args.push(`--dir=${join(pwd(), `pb_data`)}`)
  }

  dbg(`Running ${fname}`, args)

  const proc = spawn(fname, args, {
    env,
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
