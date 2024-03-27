import { arch, platform } from 'os'
import { gobot, type AppInfo } from '../api'
import { Cmd, Opt } from '../cliCommands'
import { verbosity } from '../settings'
import { dbg } from './log'

export const cliForApp = (appInfo: AppInfo) => {
  const program = new Cmd()

  const { name, homepage, version } = appInfo

  program
    .name(name)
    .description(
      `${name} (${homepage}) runner for Gobot (https://github.com/benallfree/gobot)`,
    )
    .helpOption(`--g-help`)
    .allowUnknownOption()
    .allowExcessArguments()
    .addOption(
      new Opt(`--g-v`, `Show informational output`).default(true, `true`),
    )
    .addOption(
      new Opt(`--g-vv`, `Show even more output`).default(false, `false`),
    )
    .addOption(
      new Opt(`--g-vvv`, `Show even more output`).default(false, `false`),
    )
    .addOption(
      new Opt(`--g-cache-path <path>`, `The cache path to use`).default(
        undefined,
        `host specific`,
      ),
    )
    .addOption(
      new Opt(
        `--g-use-version <version>`,
        `Run a specific binary version (format: x.y.z semver or x.y.* semver range)`,
      ).default(`*`, `*`),
    )
    .addOption(
      new Opt(`--g-os <os>`, `Specify OS/Platform`).default(
        platform(),
        `host specific`,
      ),
    )
    .addOption(
      new Opt(`--g-arch <items>`, `Specify OS/Platform`).default(
        arch(),
        `host specific`,
      ),
    )
    .action(async (appName, options, command) => {
      const {
        gV,
        gVv,
        gVvv,
        gUseVersion,
        gOs: os,
        gArch: arch,
        gCachePath: cachePath,
        gDownload: download,
      } = command.optsWithGlobals()
      verbosity(gVvv ? 3 : gVv ? 2 : gV ? 1 : 0)
      dbg(`CLI:`, appName, command.optsWithGlobals())

      try {
        const bot = await gobot(appName, {
          os,
          arch,
          version: gUseVersion,
          cachePath,
          env: process.env,
        })
        const args = command.args.slice(1)
        dbg(`Forwarding args: `, args)
        await bot.run(args)
      } catch (e) {
        console.error(`${e}`)
      }
    })
  return program
}