# gobot - the binary package manager for Node

> Specify external binaries as `package.json` dependencies. Run and execute binaries via CLI or code with `npx`/`npm`

gobot installs binary apps anywhere `npm` is available. It transparently downloads, installs, and runs binary apps (including semver ranges) for the current operating system and architecture.

Works on Windows, Linux, OS X.

## Quickstart

```bash
npm i -g gobot
gobot pocketbase --help
gobot caddy --help
gobot act --help

# Run unofficial binaries from gitub
gobot <user>/<repo> --help
```

or

```bash
npx gobot <app>
```

## Features

- Run any version of supported apps and many unsupported apps from github.
- Binaries are intelligently downloaded and cached
- New binary versions are automatically detected and downloaded
- Efficient - downloads only what is needed

Inspired by [esbuild](https://esbuild.github.io/) and other packages that install binary dependencies

## Why?

If you are writing a nodejs application that depends upon binaries being present (like [PocketHost](https://github.com/pockethost/pockethost) does), you can add this package as a dependency and execute the binary via CLI or programmatically . This package will make sure your desired external binaries are always available.

`npx gobot@latest <app>` is quite a bit easier than manually downloading zips and installing binaries in shell paths. gobot handles it all for you effortlessly.

## Official Gobot Apps

These projects are officially supported by gobot in the sense that they have a single word command to run them.

|                                                                                              |                                      |                               |                                                                               |                                                                                               |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ----------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| ![Act](https://raw.githubusercontent.com/benallfree/gobot/main/assets/act.png)               | [Act](https://github.com/nektos/act) | `npx gobot act --help`        | Run your GitHub Actions locally 🚀                                            | [plugin docs](https://github.com/benallfree/gobot/blob/main/src/plugins/act/readme.md)        |
| ![Caddy](https://raw.githubusercontent.com/benallfree/gobot/main/assets/caddy.png)           | [Caddy](https://caddyserver.com/)    | `npx gobot caddy --help`      | Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS | [plugin docs](https://github.com/benallfree/gobot/blob/main/src/plugins/caddy/readme.md)      |
| ![PocketBase](https://raw.githubusercontent.com/benallfree/gobot/main/assets/pocketbase.png) | [PocketBase](https://pocketbase.io)  | `npx gobot pocketbase --help` | Open Source realtime backend in 1 file                                        | [plugin docs](https://github.com/benallfree/gobot/blob/main/src/plugins/pocketbase/readme.md) |

### Running unofficial apps

gobot can run many apps hosted on github, without official support.

```bash
gobot <user>/<repo>
```

The above command format may run the app you have in mind. For example, `gobot caddy --help` runs the Caddy by the official name, but `gobot caddyserver/caddy --help` will also run it.

As long as the project uses the github [Releases](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) feature and includes statically linked binaries with zero dependencies, gobot can probably run it.

Go apps work flawlessly. gobot was originally named and conceived to support Go apps.

## CLI

### `gobot [gobotOptions] <app> [appOptions]`

All Gobot options begin with `--g-` soas not to conflict with app option switches. Every unrecognized option is passed through to the app binary.

**Switches**

| Option         | Default       | Discussion                                                                                                                                                   |
| -------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| --g-os         | host OS       | `aix`, `darwin`, `freebsd`,`linux`, `openbsd`, `sunos`, and `win32`                                                                                          |
| --g-arch       | host arch     | `arm`, `arm64`, `ia32`, `loong64`, `mips`, `mipsel`, `ppc`, `ppc64`, `riscv64`, `s390`, `s390x`, and `x64`                                                   |
| --g-v[vv]      |               | Adjust output verbosity                                                                                                                                      |
| --g-refresh    | `false`       | Clear the gobot cache                                                                                                                                        |
| --g-version    | latest        | Run a specific binary version, in [semver](https://semver.org/) format `x.y.z`. Also supports [semver ranges](https://www.npmjs.com/package/semver) `0.20.*` |
| --g-cache-path | host specific | Use the specified directory for cache files.                                                                                                                 |

**Examples**

```bash
# Run `pocketbase serve`
npx gobot pocketbase serve

# Run in gobot debugging mode`
npx gobot --g-debug

# Run a specific PocketBase version
npx gobot pocketbase --g-version="0.21.0" # Run this exact version
npx gobot pocketbase --g-version="~0.21.0" # Run highest 0.21.z version
npx gobot pocketbase --g-version="0.*" # Run highest 0.y.z

# Force gobot to dump cache and refresh PocketBase tags and binaries
npx gobot pocketbase --g-refresh
```

## API

gobot can be used programmatically. You can add `gobot` as a dependency of your nodejs package and benefit from the seamless management of binary dependencies.

```ts
import { gobot } from 'gobot'

const bot = gobot(`pocketbase`)
const childProcess = bot.run([`serve`])
```

[Full API Docs](https://github.com/pockethost/gobot/blob/main/docs/modules.md)

## OS X Users

If a gobot does not run, or one of its apps does not run, it's likely you need to authorize it first. Go to `Security & Privacy` and scroll down to allow the exception.

## Adding your app to the Gobot registry

We want to add native support for lots of binary apps!

If you use publish statically linked binary releases on github, you are already compatible with gobot. Send us a PR.

Note: [GoReleaser](https://goreleaser.com/) is a great option if you're publish a Go-based project.

## Contributing

We could use help testing and making sure this works across lots of platforms.

To test a build locally:

```bash
pnpm test
```
