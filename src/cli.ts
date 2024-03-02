#!/usr/bin/env node

import { Command } from 'commander'
import json from '../package.json'
import { download } from './download'
import { getReleaseTags } from './getReleaseTags'
import { dbg, log } from './log'
import { run } from './run'
import { arch, archValueGuard } from './settings/arch'
import { cachePath, clearCache } from './settings/cache'
import { debug } from './settings/debug'
import { os, platformValueGuard } from './settings/os'
import { version } from './settings/version'

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
    .description(`Show and optionally download available versions.`)
    .option(`--debug`, `Show debugging output`, false)
    .option(
      `--only <range>`,
      `Filter to matching versions (semver or semver range)`,
      version(),
    )
    .option(
      `--download`,
      `Download all matching versions (semver range)`,
      false,
    )
    .option(`--os <os>`, `Specify OS/Platform`, platformValueGuard, os())
    .option(`--arch <items>`, `Specify OS/Platform`, archValueGuard, arch())
    .option(
      `--format <fmt>`,
      `Output in JSON format`,
      (v) => (['text', 'json', 'cjs', 'esm'].includes(v) ? v : 'text'),
      `text`,
    )
    .option(`--refresh`, `Refresh PocketBase tags and binary`, false)
    .option(`--cache-path <path>`, `The cache path to use`, cachePath())
    .action(async (options) => {
      debug(options.debug)
      dbg(`Options:`, options)
      cachePath(options.cachePath)
      arch(options.arch)
      os(options.os)
      version(options.only)
      if (options.refresh) {
        clearCache()
      }
      const tags = await getReleaseTags()
      if (options.download) {
        await download({ log })
      }
      switch (options.format) {
        case 'text':
          tags.forEach((v) => console.log(v))
          break
        case 'json':
          console.log(JSON.stringify(tags, null, 2))
          break
        case 'cjs':
          console.log(`module.exports = ${JSON.stringify(tags, null, 2)}`)
          break
        case 'esm':
          console.log(
            `export const versions = ${JSON.stringify(tags, null, 2)}`,
          )
          break
      }
    })

  program
    .command('run', { isDefault: true })
    .description(`Run PocketBase`)
    .allowUnknownOption()
    .allowExcessArguments()
    .option(
      `--use-version <version>`,
      `Use a specific PocketBase version (format: x.y.z semver or x.y.* semver range)`,
      version(),
    )
    .option(`--debug`, `Show debugging output`, false)
    .option(`--os <os>`, `Specify OS/Platform`, platformValueGuard, os())
    .option(`--arch <items>`, `Specify OS/Platform`, archValueGuard, arch())
    .option(`--upgrade`, 'Disabled', false)
    .option(`--refresh`, `Refresh PocketBase tags and binary`, false)
    .option(`--cache-path <path>`, `The cache path to use`, cachePath())
    .description('Run pocketbase')
    .action(async (options, command) => {
      debug(options.debug)
      dbg(`CLI options:`, options)
      cachePath(options.cachePath)
      arch(options.arch)
      os(options.os)
      version(options.useVersion)
      if (options.refresh) {
        clearCache()
      }
      dbg(`Forwarding args: `, command.args)
      await run(command.args)
    })

  program.parseAsync(process.argv)
}

main().catch(console.error)
