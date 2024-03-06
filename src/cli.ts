#!/usr/bin/env node

import { Command } from 'commander'
import { exit } from 'process'
import json from '../package.json'
import { DEFAULT_GOBOT_CACHE_ROOT } from './GobotBase'
import { gobot } from './gobot'
import { arch, archValueGuard, debug, os, platformValueGuard } from './settings'
import { dbg } from './util/log'

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
    .command(`run`, { isDefault: true })
    .argument(`pluginName <pluginName>`, `The name of the plugin to run`)
    .description(`Run binaries`)
    .allowUnknownOption()
    .allowExcessArguments()
    .option(
      `--g-version <version>`,
      `Use a specific binary version (format: x.y.z semver or x.y.* semver range)`,
      `*`,
    )
    .option(
      `--g-download`,
      `Download all matching versions (semver range)`,
      false,
    )
    .option(
      `--g-show-versions <fmt>`,
      `Output in JSON format`,
      (v) => (['txt', 'json', 'cjs', 'esm'].includes(v) ? v : 'txt'),
      ``,
    )
    .option(`--g-debug`, `Show debugging output`, false)
    .option(`--g-os <os>`, `Specify OS/Platform`, platformValueGuard, os())
    .option(`--g-arch <items>`, `Specify OS/Platform`, archValueGuard, arch())
    .option(`--g-refresh`, `Clear cache`, false)
    .option(
      `--g-cache-path <path>`,
      `The cache path to use (default root: ${DEFAULT_GOBOT_CACHE_ROOT})`,
      undefined,
    )
    .action(async (pluginName, options, command) => {
      const {
        gDebug,
        gVersion: version,
        gOs: os,
        gArch: arch,
        gRefresh: refresh,
        gCachePath: cachePath,
        gDownload: download,
        gShowVersions: showVersions,
      } = options
      debug(gDebug)
      dbg(`Plugin name:`, pluginName)
      dbg(`CLI:`, pluginName, options)
      const bot = gobot(pluginName, {
        os,
        arch,
        version,
        cachePath,
        env: process.env,
      })
      if (refresh) {
        bot.clearCache()
      }
      if (download) {
        await bot.download()
        exit(0)
      }
      if (showVersions) {
        const fmt = await bot.versions(showVersions)
        console.log(fmt)
        exit(0)
      }
      const args = command.args.slice(1)
      dbg(`Forwarding args: `, args)
      await bot.run(args)
    })

  program.parseAsync(process.argv)
}

main().catch(console.error)
