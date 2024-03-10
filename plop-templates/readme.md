![Gobot](https://raw.githubusercontent.com/benallfree/gobot/{{{branch}}}/assets/gobot-banner.png)

# The binary package manager for Node

_Manage and run popular binaries as `package.json` dependencies. CLI and API interfaces._

## Introduction

gobot installs popular binary apps anywhere `npm` is available. It transparently downloads, installs, and runs binary apps (including semver ranges) for the current operating system and architecture.

Works on Windows, Linux, OS X.

**Features**

- Run any version of supported apps and many unsupported apps from github.
- Binaries are intelligently downloaded and cached
- New binary versions are automatically detected and downloaded
- Efficient - downloads only what is needed

Inspired by [esbuild](https://esbuild.github.io/) and other packages that install binary dependencies

## Quickstart

```bash
npm i -g gobot
gobot pocketbase --help
gobot caddy --help
gobot act --help

# Run unofficial binaries from github
gobot <user>/<repo> --help
```

or

```bash
npx gobot <app>
```

## Official Gobot Apps

{{{apps}}}

### Running unofficial apps

gobot can run many apps hosted on github, without official support.

```bash
gobot <user>/<repo>
```

**Example**

```bash
# Run PocketBase as a direct repo name rather than the `pocketbase` alias
gobot pocketbase/pocketbase --help
```

or API:

```ts
gobot(`pocketbase/pocketbase`).run([`--help`])
```

The above command format may run the app you have in mind. For example, `gobot caddy --help` runs the Caddy by the official name, but `gobot caddyserver/caddy --help` will also run it.

As long as the project uses the github [Releases](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) feature and includes statically linked binaries with zero dependencies, gobot can probably run it.

Go apps work flawlessly. gobot was originally named and conceived to support Go apps.

## CLI

### `gobot [gobotOptions] <app> [appOptions]`

{{{cli_options}}}

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

[Full API Docs](https://github.com/pockethost/gobot/blob/{{{branch}}}/docs/modules.md)

{{{postamble}}}
