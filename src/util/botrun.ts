import { Command } from 'commander'
import { arch, platform } from 'os'
import { exit } from 'process'
import { Gobot } from '../Gobot'
import { gobot } from '../api'
import { verbosity } from '../settings/verbosity'
import { dbg } from './log'

export type AppInfo = {
  name: string
  homepage: string
  slug: string
  version: string
}

export const botRun = async (appInfo: AppInfo) => {
  const program = new Command()

  const { name, slug, homepage, version } = appInfo

  program
    .name(name)
    .description(
      `${slug} (${homepage}) runner for Gobot (https://github.com/benallfree/gobot)`,
    )
    .version(version, `--g-version`)
    .helpOption(`--g-help`)
    .allowUnknownOption()
    .allowExcessArguments()
    .option(
      `--g-use-version <version>`,
      `Use a specific binary version (format: x.y.z semver or x.y.* semver range)`,
      version,
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
    .option(`--g-v`, `Show informational output`, true)
    .option(`--g-vv`, `Show even more output`, false)
    .option(`--g-vvv`, `Show even more output`, false)
    .option(`--g-os <os>`, `Specify OS/Platform`, platform())
    .option(`--g-arch <items>`, `Specify OS/Platform`, arch())
    .option(`--g-refresh`, `Clear cache`, false)
    .option(
      `--g-cache-path <path>`,
      `The cache path to use (default root: ${Gobot.DEFAULT_GOBOT_CACHE_ROOT})`,
      undefined,
    )
    .action(async (options, command) => {
      const {
        gV,
        gVv,
        gVvv,
        gUseVersion: version,
        gOs: os,
        gArch: arch,
        gRefresh: refresh,
        gCachePath: cachePath,
        gDownload: download,
        gShowVersions: showVersions,
      } = options
      verbosity(gVvv ? 3 : gVv ? 2 : gV ? 1 : 0)
      dbg(`CLI:`, options, process.argv)

      try {
        const bot = await gobot(name, {
          os,
          arch,
          version,
          cachePath,
          env: process.env,
        })
        if (refresh) {
          await bot.clearCache()
        }
        if (download) {
          await bot.download()
          exit(0)
        }
        if (showVersions) {
          const fmt = await bot.versions(showVersions)
          exit(0)
        }
        const args = command.args
        dbg(`Forwarding args: `, args)
        await bot.run(args)
      } catch (e) {
        console.error(`${e}`)
      }
    })

  program.parseAsync(process.argv)
}
