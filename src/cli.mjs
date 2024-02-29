#!/usr/bin/env node

import { spawn } from 'child_process'
import { join } from 'path'
import { cwd } from 'process'
import { config } from './config.mjs'
import { dbg } from './dbg.mjs'
import { getPath } from './getPath.mjs'

export const run = async () => {
  let args = process.argv.slice(2)

  config.debug = !!args.find((arg) => arg.startsWith(`--debug`))

  const version =
    args.find((arg) => arg.startsWith(`--version=`))?.split(/=/)?.[1] ||
    undefined

  dbg(`Raw args:`, args)

  const fname = await getPath({
    version,
    refresh: !!args.find((arg) => arg.startsWith(`--refresh`)),
  })

  args = args.filter(
    (arg) =>
      !(
        arg.startsWith(`--version=`) ||
        arg.startsWith(`--refresh`) ||
        arg.startsWith(`--debug`)
      ),
  )

  dbg(`Filtered args:`, args)
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
}

run()
