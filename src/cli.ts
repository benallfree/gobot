#!/usr/bin/env node

import Bottleneck from 'bottleneck'
import { Command } from 'commander'
import { satisfies } from 'semver'
import json from '../package.json'
import { getPocketBasePath } from './api'
import { getLatestReleaseVersion } from './getLatestRelease'
import { archName, osName } from './getOSAndArch'
import { getReleaseTags } from './getReleaseTags'
import { dbg, log } from './log'
import { archValueGuard, platformValueGuard } from './osArch'
import { run } from './run'
import { config } from './settings'
import { cachePath, clearCache } from './settings/cache'

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
      `--version <range>`,
      `Filter to matching versions (semver or semver range)`,
      `*`,
    )
    .option(
      `--download`,
      `Download all matching versions (semver range)`,
      false,
    )
    .option(`--os <os>`, `Specify OS/Platform`, platformValueGuard, osName())
    .option(`--arch <items>`, `Specify OS/Platform`, archValueGuard, archName())
    .option(`--json`, `Show in JSON format`, false)
    .option(`--refresh`, `Refresh PocketBase tags and binary`, false)
    .option(`--cache-path <path>`, `The cache path to use`, cachePath())
    .action(async (options) => {
      config({ ...options })
      dbg(`Options:`, options)
      cachePath(options.cachePath)
      if (options.refresh) {
        clearCache()
      }
      const tags = await (async () => {
        const tags = await getReleaseTags()
        return tags.filter((version) => satisfies(version, options.version))
      })()
      dbg(`Filtered tags:`, tags)
      if (options.json) {
        console.log(JSON.stringify(tags, null, 2))
      } else {
        tags.forEach((v) => console.log(v))
      }
      if (options.download) {
        log(`Downloading versions`, tags)
        const limiter = new Bottleneck({ maxConcurrent: 1 })
        await Promise.all(
          tags.map((version) => {
            return limiter.schedule(() => {
              log(`\t${version}`)
              return getPocketBasePath({ version })
            })
          }),
        )
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
      await getLatestReleaseVersion(),
    )
    .option(`--debug`, `Show debugging output`, false)
    .option(`--os <os>`, `Specify OS/Platform`, platformValueGuard, osName())
    .option(`--arch <items>`, `Specify OS/Platform`, archValueGuard, archName())
    .option(`--upgrade`, 'Disabled', false)
    .option(`--refresh`, `Refresh PocketBase tags and binary`, false)
    .option(`--cache-path <path>`, `The cache path to use`, cachePath())
    .description('Run pocketbase')
    .action(async (options, command) => {
      config({ ...options, version: options.useVersion })
      dbg(`CLI options:`, options)
      cachePath(options.cachePath)
      if (options.refresh) {
        clearCache()
      }
      dbg(`Forwarding args: `, command.args)
      await run(command.args)
    })

  program.parseAsync(process.argv)
}

main().catch(console.error)
