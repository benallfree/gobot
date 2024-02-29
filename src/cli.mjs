#!/usr/bin/env node

import { spawn } from 'child_process'
import { join } from 'path'
import { cwd } from 'process'
import { getPath } from './index.mjs'

export const run = async () => {
  const fname = await getPath()

  // Forward arguments and launch pocketbase
  let args = process.argv.slice(2)

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
