import { spawn } from 'child_process'
import { join } from 'path'
import { cwd } from 'process'
import { Config, config } from './config'
import { getLatestReleaseVersion } from './getLatestRelease'
import { getPath } from './getPath'

export const run = async (args: string[], options?: Partial<Config>) => {
  config({
    ...options,
    version: options?.version || (await getLatestReleaseVersion()),
  })

  const fname = await getPath()

  // Check if "--dir" is already specified
  if (!args.find((arg) => arg.startsWith('--dir'))) {
    args.push(`--dir=${join(cwd(), `pb_data`)}`)
  }

  const proc = spawn(fname, args, { stdio: 'inherit' })

  proc.on('error', (err) => {
    console.error(`Failed to start pocketbase: ${err.message}`)
  })

  proc.on('exit', (code) => {
    console.log(`pocketbase exited with code ${code}`)
  })

  return proc
}
