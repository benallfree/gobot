import { Argument, Command, Option } from 'commander'
import { globSync } from 'glob'
import { arch, platform } from 'os'
import { basename, join } from 'path'
import { table } from 'table'
import json from '../package.json'
import { Gobot, gobot, type AppInfo } from './api'
import { verbosity } from './settings'
import { __root } from './util/__root'
import { dbg, info } from './util/log'

export class Arg extends Argument {
  toJSON() {
    return {
      description: this.description,
      variadic: this.variadic,
      required: this.required,
      name: this.name(),
    }
  }
}
export class Cmd extends Command {
  toJSON() {
    return {
      name: this.name(),
      description: this.description(),
      commands: this.commands,
      arguments: this.registeredArguments,
      options: this.options,
      // @ts-ignore
      default: program._defaultCommandName === this.name(),
    }
  }
}

export class Opt extends Option {
  toJSON() {
    return {
      name: this.name(),
      description: this.description,
      short: this.short,
      long: this.long,
      defaultValue: this.defaultValue,
      defaultValueDescription: this.defaultValueDescription,
    }
  }
}

export const program = new Cmd()

program
  .name('gobot')
  .description('A npm-based Go binary runner')
  .version(json.version, `--g-version`)
  .helpOption(`--g-help`)
  .configureHelp({ showGlobalOptions: true })
  .addOption(
    new Opt(`--g-v`, `Show informational output`).default(true, `true`),
  )
  .addOption(new Opt(`--g-vv`, `Show even more output`).default(false, `false`))
  .addOption(
    new Opt(`--g-vvv`, `Show even more output`).default(false, `false`),
  )
  .addOption(
    new Opt(`--g-cache-path <path>`, `The cache path to use`).default(
      undefined,
      `host specific`,
    ),
  )

program.addCommand(
  new Cmd(`run`)
    .addArgument(new Arg(`<appName>`, `The name of the app to run`))
    .helpOption(`--g-help`)
    .description(
      `Run a binary app. The app will be downloaded if it has not been downloaded yet. After that, you must run 'gobot update <appName>' to make Gobot look for new versions.`,
    )
    .allowUnknownOption()
    .allowExcessArguments()
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
    }),
  { isDefault: true },
)

program.addCommand(
  new Cmd(`inspect`)
    .addArgument(
      new Arg(
        `[appName]`,
        `The name of the app to inspect, either as a single slug or as <user>/<repo>`,
      ),
    )
    .helpOption(`--g-help`)
    .description(
      `Display Gobot registry information. If [appName] is specified, Gobot will display release information. Otherwise, Gobot will display an overview of current registry information`,
    )
    .helpOption(`--g-help`)
    .action(async (appName, options, command) => {
      const { gV, gVv, gVvv, gCachePath: cachePath } = command.optsWithGlobals()
      verbosity(gVvv ? 3 : gVv ? 2 : gV ? 1 : 1)
      dbg(`CLI:`, appName, command.optsWithGlobals())

      try {
        if (appName) {
          const bot = await gobot(appName, {
            cachePath,
            env: process.env,
          })
          await bot.clearAllReleases()
          const fmt = await bot.versions('md')
          info(fmt)
        } else {
          info(`Host platform: ${platform()}`)
          info(`Host architecture: ${arch()}`)
          info(`Cache root:`, cachePath || Gobot.DEFAULT_GOBOT_CACHE_ROOT())
          const appPaths = globSync(join(__root, `apps`, `*`, ''))
          const apps = (
            await Promise.all(
              appPaths.map(async (appPath) => {
                const appSlug = basename(appPath)
                return {
                  ...(await import(join(appPath, `index.js`)))[appSlug],
                  name: appSlug,
                } as AppInfo
              }),
            )
          ).sort((a, b) => a.name.localeCompare(b.name))
          info(`Available apps: `)
          const rows = apps.map((app) => [
            app.name,
            app.homepage,
            app.description,
          ])
          info(
            table(rows, {
              columnDefault: { width: 50, wrapWord: true },
              columns: [{ width: 20 }, { width: 50 }, { width: 50 }],
            }),
          )
        }
      } catch (e) {
        console.error(`${e}`)
      }
    }),
)

program.addCommand(
  new Cmd(`download`)
    .addArgument(new Arg(`<appName>`, `The name of the app to run`))
    .helpOption(`--g-help`)
    .description(
      `Download versions of <appName>. Gobot will download and cache the specific platform, architecture, and versions you request, defaulting to downloading the latest version for the host platform and architecture.`,
    )
    .addOption(
      new Opt(
        `--g-use-version <version>`,
        `Download a specific binary version (format: x.y.z semver or x.y.* semver range)`,
      ).default(``, `*`),
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
        gRefresh: refresh,
        gCachePath: cachePath,
      } = command.optsWithGlobals()
      verbosity(gVvv ? 3 : gVv ? 2 : gV ? 1 : 0)
      dbg(`CLI:`, appName, command.optsWithGlobals())

      try {
        const bot = await gobot(appName, {
          os,
          arch,
          version: gUseVersion || `*`,
          cachePath,
          env: process.env,
        })
        await bot.download()
      } catch (e) {
        console.error(`${e}`)
      }
    }),
)

program.addCommand(
  new Cmd(`export`)
    .addArgument(new Arg(`<appName>`, `The name of the app to export`))
    .addArgument(
      new Arg(`<format>`, `One of: 'txt', 'md', 'cjs', 'esm', 'json'`),
    )
    .description(`Export app version information`)
    .helpOption(`--g-help`)
    .action(async (appName, format, options, command) => {
      const { gV, gVv, gVvv, gCachePath: cachePath } = command.optsWithGlobals()
      verbosity(gVvv ? 3 : gVv ? 2 : gV ? 1 : 0)
      dbg(`CLI:`, appName, command.optsWithGlobals())

      try {
        const bot = await gobot(appName, {
          cachePath,
        })
        console.log(await bot.versions(format))
      } catch (e) {
        console.error(`${e}`)
      }
    }),
)

program.addCommand(
  new Cmd(`update`)
    .addArgument(new Arg(`<appName>`, `The name of the app to run`))
    .description(`Pull the latest release history for <appName>, optionally.`)
    .helpOption(`--g-help`)
    .action(async (appName, options, command) => {
      const { gV, gVv, gVvv, gCachePath: cachePath } = command.optsWithGlobals()
      verbosity(gVvv ? 3 : gVv ? 2 : gV ? 1 : 0)
      dbg(`CLI:`, appName, command.optsWithGlobals())

      try {
        const bot = await gobot(appName, {
          cachePath,
        })
        await bot.update()
      } catch (e) {
        console.error(`${e}`)
      }
    }),
)

program.addCommand(
  new Cmd(`reset`)
    .addArgument(new Arg(`[appName]`, `The name of the app to reset`))
    .description(
      `Reset caches. If [appName] is specified, only that app's cache is reset. Otherwise, all caches are reset. Caches include release history and binary downloads. Use 'gobot inspect' to learn more about host-specific cache locations and contents.`,
    )
    .helpOption(`--g-help`)
    .action(async (appName, options, command) => {
      const { gV, gVv, gVvv, gCachePath: cachePath } = command.optsWithGlobals()
      verbosity(gVvv ? 3 : gVv ? 2 : gV ? 1 : 1)
      dbg(`CLI:`, appName, command.optsWithGlobals())

      try {
        if (!appName) {
          await Gobot.reset(cachePath)
          info(`Removed ${cachePath}`)
        } else {
          const bot = await gobot(appName, {
            cachePath,
          })
          await bot.reset()
          info(`Removed ${bot.cachePath()()}`)
        }
      } catch (e) {
        console.error(`${e}`)
      }
    }),
)
