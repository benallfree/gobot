#!/usr/bin/env node

import { Command } from 'commander'
import { readFileSync } from 'fs'
import json from '../package.json'
import { download } from './download'
import { dbg, log } from './log'
import { run } from './run'
import { arch, archValueGuard } from './settings/arch'
import { cachePath, clearCache } from './settings/cache'
import { debug } from './settings/debug'
import { os, platformValueGuard } from './settings/os'
import { version } from './settings/version'
import { getAvailableVersionsPath } from './versions'

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
      (v) => (['txt', 'json', 'cjs', 'esm'].includes(v) ? v : 'txt'),
      `txt`,
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
      if (options.download) {
        await download({ log })
      }

      const dump = await getAvailableVersionsPath(options.format)
      log(readFileSync(dump).toString())
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
