#!/usr/bin/env node

import { config } from './config.js'
import { dbg } from './dbg.js'
import { getLatestReleaseVersion } from './getLatestRelease.js'
import { run } from './run.js'

const main = async () => {
  let args = process.argv.slice(2)

  config({
    debug: !!args.find((arg) => arg.startsWith(`--debug`)),
    version:
      args.find((arg) => arg.startsWith(`--version=`))?.split(/=/)?.[1] ||
      (await getLatestReleaseVersion()),
    refresh: !!args.find((arg) => arg.startsWith(`--refresh`)),
  })

  dbg(`Raw args:`, args)

  args = args.filter(
    (arg) =>
      !(
        arg.startsWith(`--version=`) ||
        arg.startsWith(`--refresh`) ||
        arg.startsWith(`--debug`)
      ),
  )

  dbg(`Filtered args:`, args)

  await run(args)
}

main()
