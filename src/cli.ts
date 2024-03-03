#!/usr/bin/env node

import { forEach } from '@s-libs/micro-dash'
import { Command } from 'commander'
import { readFileSync } from 'fs'
import { join } from 'path'
import json from '../package.json'
import { download } from './download'
import { dbg, log } from './log'
import { PLUGINS, PluginKey } from './plugins'
import { run } from './run'
import {
  arch,
  archValueGuard,
  cachePath,
  clearCache,
  debug,
  os,
  platformValueGuard,
  plugin,
  version,
} from './settings'
import { getAvailableVersionsPath } from './versions'

const main = async () => {
  const program = new Command()

  program
    .name('gobot')
    .description('A npm-based Go binary runner')
    .version(json.version)
    .helpOption(false)
    .allowUnknownOption()
    .allowExcessArguments()

  program
    .command('versions <plugin>')
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
    .option(`--refresh`, `Refresh cache`, false)
    .option(`--cache-path <path>`, `The cache path to use`, cachePath())
    .action(async (pluginName: PluginKey, options) => {
      debug(options.debug)
      dbg(`Options:`, options)
      plugin(pluginName)
      cachePath(join(options.cachePath, pluginName))
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

  forEach(PLUGINS, (pluginInfo, k) => {
    const { name } = pluginInfo
    program
      .command(name, { isDefault: true })
      .description(`Run ${name}`)
      .allowUnknownOption()
      .allowExcessArguments()
      .option(
        `--use-version <version>`,
        `Use a specific binary version (format: x.y.z semver or x.y.* semver range)`,
        version(),
      )
      .option(`--debug`, `Show debugging output`, false)
      .option(`--os <os>`, `Specify OS/Platform`, platformValueGuard, os())
      .option(`--arch <items>`, `Specify OS/Platform`, archValueGuard, arch())
      .option(`--upgrade`, 'Disabled', false)
      .option(`--refresh`, `Clear cache`, false)
      .option(`--cache-path <path>`, `The cache path to use`, cachePath())
      .action(async (options, command) => {
        debug(options.debug)
        dbg(`CLI:`, name, options)
        plugin(name)
        cachePath(join(options.cachePath, name))
        arch(options.arch)
        os(options.os)
        version(options.useVersion)
        if (options.refresh) {
          clearCache()
        }
        dbg(`Forwarding args: `, command.args)
        await run(command.args)
      })
  })

  program.parseAsync(process.argv)
}

main().catch(console.error)
