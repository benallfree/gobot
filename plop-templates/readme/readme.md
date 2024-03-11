![Gobot](https://raw.githubusercontent.com/benallfree/gobot/{{{branch}}}/assets/gobot-banner.png)

# The binary package manager for Node

_Manage and run popular binaries as `package.json` dependencies. CLI and API interfaces._

## Table of Contents

- [Introduction](#introduction)
- [Quickstart](#quickstart)
- [CLI](#cli)
  - [gobot [gobotOptions] <app> [appOptions]](#gobot-gobotoptions-app-appoptions)
- [API](#api)
- [Official Gobot Apps](#official-gobot-apps)
  - [Running unofficial apps](#running-unofficial-apps)
- [Why?](#why)
- [Technical Notes](#technical-notes)
  - [Repository API Rate Limits](#repository-api-rate-limits)
    - [Github API](#github-api)
- [Adding your app to the Gobot registry](#adding-your-app-to-the-gobot-registry)
- [Contributing](#contributing)

## Introduction

Gobot installs popular binary apps anywhere `npm` is available. It transparently downloads, installs, and runs binary apps (including semver ranges) for the current operating system and architecture.

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

Gobot can be used programmatically. You can add `gobot` as a dependency of your nodejs package and benefit from the seamless management of binary dependencies.

```ts
import { gobot } from 'gobot'

const bot = gobot(`pocketbase`)
const childProcess = bot.run([`serve`])
```

[Full API Docs](https://github.com/benallfree/gobot/tree/{{{branch}}}/docs/readme.md)

## Official Gobot Apps

These apps have their own helper packages to assist with locking the dependency to a specific version of the app.

{{{apps}}}

### Running unofficial apps

Gobot can run many apps hosted on github, without official support.

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

As long as the project uses the github [Releases](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) feature and includes statically linked binaries with zero dependencies, Gobot can probably run it.

Go apps work flawlessly. Gobot was originally named and conceived to support Go apps.

{{{postamble}}}
