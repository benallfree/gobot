#!/usr/bin/env node

import { Command } from 'commander'
import { arch, platform } from 'os'
import { exit } from 'process'
import json from '../package.json'
import { Gobot, VersionFormat } from './Gobot'
import { gobot } from './api'
import { getAppVersion } from './util/getAppVersion'
import { dbg } from './util/log'

const main = async () => {
  const program = new Command()

  program
    .name('gobot')
    .description('A npm-based Go binary runner')
    .version(json.version, `--g-version`)
    .helpOption(`--g-help`)
    .allowUnknownOption()
    .allowExcessArguments()

  program
    .command(`run`, { isDefault: true })
    .argument(`appName <appName>`, `The name of the app to run`)
    .description(`Run binaries`)
    .allowUnknownOption()
    .allowExcessArguments()
    .option(
      `--g-use-version <version>`,
      `Use a specific binary version (format: x.y.z semver or x.y.* semver range)`,
      ``,
    )
    .option(
      `--g-download`,
      `Download all matching versions (semver range)`,
      false,
    )
    .option(
      `--g-show-versions [fmt]`,
      `Output in JSON format`,
      (v) => {
        if (!Gobot.VERSION_FORMATS.includes(v as VersionFormat)) {
          throw new Error(`${v} is not a supported type`)
        }
        return v as VersionFormat
      },
      `md`,
    )
    .option(`--g-v`, `Show informational output`, true)
    .option(`--g-vv`, `Show even more output`, false)
    .option(`--g-vvv`, `Show even more output`, false)
    .option(`--g-os <os>`, `Specify OS/Platform`, platform())
    .option(`--g-arch <items>`, `Specify OS/Platform`, arch())
    .option(`--g-refresh`, `Clear cache`, false)
    .option(
      `--g-cache-path <path>`,
      `The cache path to use (default root: ${Gobot.DEFAULT_GOBOT_CACHE_ROOT()})`,
      undefined,
    )
    .action(async (appName, options, command) => {
      const {
        gV,
        gVv,
        gVvv,
        gUseVersion,
        gOs: os,
        gArch: arch,
        gRefresh: refresh,
        gCachePath: cachePath,
        gDownload: download,
        gShowVersions: showVersions,
      } = options
      Gobot.verbosity(gVvv ? 3 : gVv ? 2 : gV ? 1 : 0)
      dbg(`App name:`, appName)
      dbg(`CLI:`, appName, options)

      try {
        const bot = gobot(appName, {
          os,
          arch,
          version: gUseVersion || (await getAppVersion(appName)),
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
      } catch (e) {
        console.error(`${e}`)
      }
    })

  program.parseAsync(process.argv)
}

main().catch(console.error)
