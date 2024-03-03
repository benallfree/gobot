import { spawn } from 'child_process'
import { getBinaryPath } from './getBinaryPath'
import { dbg } from './log'
import { mergeConfig } from './mergeConfig'
import {
  ArchValue,
  PlatformValue,
  arch as _arch,
  env as _env,
  os as _os,
  version as _version,
  plugin,
} from './settings'
import { pwd } from './util'

/**
 * @interface
 */
export interface BinaryProfile {
  /** The platform value */
  os: PlatformValue
  arch: ArchValue
  version: string
}

export interface RunOptions extends BinaryProfile {
  env: NodeJS.ProcessEnv
}

/**
 * Run a Go binary.
 * @param args The arguments to pass to `spawn()`
 * @param options Globals will be used for `os`, `version`, `arch`, and `env` unless specified
 * @returns
 */
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

  const fname = await getBinaryPath({
    os,
    arch,
    version,
  })

  const { prepare, name } = plugin()
  prepare(args)

  dbg(`Running ${fname}`, args)

  const proc = spawn(fname, args, {
    env,
    stdio: 'inherit',
    cwd: pwd(),
  })

  proc.on('error', (err) => {
    console.error(`Failed to start ${name}: ${err.message}`)
  })

  proc.on('exit', (code) => {
    console.log(`${name} exited with code ${code}`)
  })

  return proc
}
