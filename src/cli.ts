#!/usr/bin/env node

import { Command } from 'commander'
import json from '../package.json'
import { archValueGuard, config, platformValueGuard } from './config'
import { dbg } from './dbg'
import { getLatestReleaseVersion } from './getLatestRelease'
import { archName, osName } from './getOSAndArch'
import { getReleaseTags } from './getReleaseTags'
import { run } from './run'

const main = async () => {
  const program = new Command()

  program
    .name('pbGo')
    .description('A npm-based PocketBase runner')
    .version(json.version)
    .helpOption(false)
    .allowUnknownOption()
    .allowExcessArguments()

  program
    .command('versions')
    .option(`-d,--debug`, `Show debugging output`, false)
    .option(`--json`, `Show in JSON format`, false)
    .action(async (options) => {
      config({ ...options, version: options.useVersion })
      const tags = await getReleaseTags()
      if (options.json) {
        console.log(JSON.stringify(tags, null, 2))
      } else {
        tags.forEach((v) => console.log(v))
      }
    })

  program
    .command('run', { isDefault: true })
    .allowUnknownOption()
    .allowExcessArguments()
    .option(
      `-v,--use-version`,
      `Use a specific PocketBase version`,
      await getLatestReleaseVersion(),
    )
    .option(`-d,--debug`, `Show debugging output`, false)
    .option(`-o,--os <os>`, `Specify OS/Platform`, platformValueGuard, osName())
    .option(
      `-a,--arch <items>`,
      `Specify OS/Platform`,
      archValueGuard,
      archName(),
    )
    .option(`-r,--refresh`, `Refresh PocketBase tags and binary`, false)
    .description('Run pocketbase')
    .action(async (options, command) => {
      config({ ...options, version: options.useVersion })
      dbg(`Forwarding args: `, command.args)
      await run(command.args)
    })

  program.parseAsync(process.argv)
}

main().catch(console.error)
