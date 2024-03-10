import { Command } from 'commander'
import findUp from 'find-up-json'
import { arch, platform } from 'os'
import { dirname } from 'path'
import { exit } from 'process'
import { DEFAULT_GOBOT_CACHE_ROOT } from '../Gobot'
import { gobot } from '../api'
import { verbosity } from '../settings'
import { dbg } from './log'

export type AppInfo = {
  name: string
  homepage: string
  slug: string
}

export const botRun = async (appInfo: AppInfo) => {
  const program = new Command()

  const pkg = findUp('package.json', dirname(process.argv[1]!))
  if (!pkg) {
    throw new Error(`Couldn't find package.json`)
  }

  const { version } = pkg.content

  const { name, slug, homepage } = appInfo

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
    .option(`--g-v`, `Show informational output`, true)
    .option(`--g-vv`, `Show even more output`, false)
    .option(`--g-vvv`, `Show even more output`, false)
    .option(`--g-os <os>`, `Specify OS/Platform`, platform())
    .option(`--g-arch <items>`, `Specify OS/Platform`, arch())
    .option(`--g-refresh`, `Clear cache`, false)
    .option(
      `--g-cache-path <path>`,
      `The cache path to use (default root: ${DEFAULT_GOBOT_CACHE_ROOT})`,
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
        const bot = gobot(name, {
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
        const args = command.args
        dbg(`Forwarding args: `, args)
        await bot.run(args)
      } catch (e) {
        console.error(`${e}`)
      }
    })

  program.parseAsync(process.argv)
}
