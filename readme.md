![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.28/assets/gobot-banner.png)

![](https://img.shields.io/npm/v/gobot) ![](https://img.shields.io/npm/dt/gobot) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

# The binary package manager for Node

_Manage and run binaries as `package.json` npm dependencies. CLI and API interfaces._

## Table of Contents

- [Introduction](#introduction)
- [Quickstart](#quickstart)
- [CLI](#cli)
  - [gobot [gobotOptions] <app> [appOptions]](#gobot-gobotoptions-app-appoptions)
- [API](#api)
- [Official Gobot Apps](#official-gobot-apps)
- [Why?](#why)
- [Technical Notes](#technical-notes)
  - [Repository API Rate Limits](#repository-api-rate-limits)
    - [Github API](#github-api)
- [Adding your app to the Gobot registry](#adding-your-app-to-the-gobot-registry)
- [Contributing](#contributing)

## Introduction

Gobot installs binary apps anywhere `npm` is available. It transparently downloads, installs, and runs binary apps (including semver ranges) for the current operating system and architecture.

Works on Windows, Linux, OS X.

**Features**

- Run any version of [official apps](#official-gobot-apps) and many [unofficial apps](#running-unofficial-apps) from github.
- Binaries are intelligently downloaded and cached
- New binary versions are automatically detected and downloaded
- Efficient - downloads only what is needed

Inspired by [esbuild](https://esbuild.github.io/) and other packages that install binary dependencies

## Quickstart

**Run an [official app](#official-gobot-apps) from anywhere**

```bash
npx gobot <app>
```

[List of official apps](#official-gobot-apps)

**Try running an [unofficial app](#running-unofficial-apps) using github user/repo**

Gobot will examine releases from Github and attempt to decipher versions, platforms, and architectures.

```bash
gobot <user>/<repo> --help
```

**Install gobot globally**

```bash
npm i -g gobot
```

```bash
gobot pocketbase --help
gobot caddy --help
gobot act --help
```

**Use a Gobot app programmatically**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
gobot(`pocketbase`).run([`--help`])
```

**Pass environment variables**

In API mode, Gobot does not forward environment variables by default.

```js
import { gobot } from 'gobot'
gobot(`pocketbase`, {
  env: process.env,
}).run([`--help`])
```

**Use a specific version of a Gobot app**

```js
gobot(`pocketbase`, {
  version: `0.19.3`,
}).run([`--help`])
```

**Add an [official app](#official-gobot-apps) as a project dependency**

```bash
npm i gobot-<app>[@version]
```

Gobot will automatically select the specific version of `<app>` you installed and it will stay locked according to your `package.json` constraints.

```bash
npm i gobot-pocketbase@0.19.3
```

```js
import { gobot } from 'gobot'
gobot(`pocketbase`).run([`--help`])
```

## CLI

### `gobot [gobotOptions] <app> [appOptions]`

All Gobot options begin with `--g-` so as not to conflict with app option switches. Every unrecognized option is passed through to the app binary.

| Option                    | Default       | Discussion                                                                                                                                                                                           |
| ------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--g-help`                | Show help     | Display help and options for Gobot                                                                                                                                                                   |
| `--g-os <os>`             | host OS       | `aix`, `darwin`, `freebsd`,`linux`, `openbsd`, `sunos`, and `win32`                                                                                                                                  |
| `--g-arch <arch>`         | host arch     | `arm`, `arm64`, `ia32`, `loong64`, `mips`, `mipsel`, `ppc`, `ppc64`, `riscv64`, `s390`, `s390x`, and `x64`                                                                                           |
| `--g-v[vv]`               |               | Adjust output verbosity                                                                                                                                                                              |
| `--g-download`            | `false`       | Download all matching versions and exit                                                                                                                                                              |
| `--g-refresh`             | `false`       | Clear the gobot cache                                                                                                                                                                                |
| `--g-use-version`         | latest        | Run a specific binary version, in [semver](https://semver.org/) format `x.y.z`. Also supports [semver ranges](https://www.npmjs.com/package/semver) `0.20.*`                                         |
| `--g-show-versions <fmt>` | `md`          | Show available versions of `<app>`. Possible `<fmt>` values are: {{codecsv bot.VERSION_FORMATS}}. When choosing `md`, it will display a table of versions, platforms, and architecture availability. |
| `--g-cache-path <path>`   | host specific | Use the specified directory for cache files.                                                                                                                                                         |


**Examples**

```bash
# Run `pocketbase serve`
npx gobot pocketbase serve

# Run in gobot debugging mode`
npx gobot --g-debug

# Run a specific PocketBase version
npx gobot pocketbase --g-use-version="0.21.0" # Run this exact version
npx gobot pocketbase --g-use-version="~0.21.0" # Run highest 0.21.z version
npx gobot pocketbase --g-use-version="0.*" # Run highest 0.y.z

# Force gobot to dump cache and refresh PocketBase tags and binaries
npx gobot pocketbase --g-refresh
```

## API

[Full API Docs](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.28/docs/readme.md)

## Official Gobot Apps

These apps have single-token names and dedicated helper packages to assist with version locking.

| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                                                                                                                          | `<app>`       | What is it?                                                                                                                                                                                                                                                                              |                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.28/src/apps/act/logo-50x.webp">](https://nektosact.com/)                                                                                                   | `act`         | Run your GitHub Actions locally 🚀                                                                                                                                                                                                                                                       | [readme](https://www.npmjs.com/package/gobot-act)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.28/src/apps/AdGuardHome/logo-50x.webp">](https://adguard.com/adguard-home.html)                                                                            | `AdGuardHome` | Network-wide ads & trackers blocking DNS server                                                                                                                                                                                                                                          | [readme](https://www.npmjs.com/package/gobot-adguardhome) |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.28/src/apps/age/logo-50x.webp">](https://age-encryption.org/)                                                                                              | `age`         | A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability.                                                                                                                                                  | [readme](https://www.npmjs.com/package/gobot-age)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.28/src/apps/backrest/logo-50x.webp">](https://github.com/garethgeorge/backrest)                                                                            | `backrest`    | Backrest is a web UI and orchestrator for restic backup.                                                                                                                                                                                                                                 | [readme](https://www.npmjs.com/package/gobot-backrest)    |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.28/src/apps/caddy/logo-50x.webp">](https://caddyserver.com/)                                                                                               | `caddy`       | Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS                                                                                                                                                                                                            | [readme](https://www.npmjs.com/package/gobot-caddy)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.28/src/apps/fzf/logo-50x.webp">](https://github.com/junegunn/fzf)                                                                                          | `fzf`         | 🌸 A command-line fuzzy finder                                                                                                                                                                                                                                                           | [readme](https://www.npmjs.com/package/gobot-fzf)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.28/src/apps/gptscript/logo-50x.webp">](https://gptscript.ai/)                                                                                              | `gptscript`   | Natural Language Programming.                                                                                                                                                                                                                                                            | [readme](https://www.npmjs.com/package/gobot-gptscript)   |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.28/src/apps/hugo/logo-50x.webp">](https://gohugo.io/)                                                                                                      | `hugo`        | The world’s fastest framework for building websites.                                                                                                                                                                                                                                     | [readme](https://www.npmjs.com/package/gobot-hugo)        |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.28/src/apps/lazygit/logo-50x.webp">](https://github.com/jesseduffield/lazygit)                                                                             | `lazygit`     | simple terminal UI for git commands                                                                                                                                                                                                                                                      | [readme](https://www.npmjs.com/package/gobot-lazygit)     |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.28/src/apps/loki/logo-50x.webp">](https://grafana.com/loki)                                                                                                | `loki`        | Like Prometheus, but for logs.                                                                                                                                                                                                                                                           | [readme](https://www.npmjs.com/package/gobot-loki)        |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.28/src/apps/mc/logo-50x.webp">](https://min.io)                                                                                                            | `mc`          | The Object Store for AI Data Infrastructure (client)                                                                                                                                                                                                                                     | [readme](https://www.npmjs.com/package/gobot-mc)          |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.28/src/apps/minio/logo-50x.webp">](https://min.io)                                                                                                         | `minio`       | The Object Store for AI Data Infrastructure (server)                                                                                                                                                                                                                                     | [readme](https://www.npmjs.com/package/gobot-minio)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.28/src/apps/ollama/logo-50x.webp">](https://ollama.com/)                                                                                                   | `ollama`      | Get up and running with Llama 2, Mistral, Gemma, and other large language models.                                                                                                                                                                                                        | [readme](https://www.npmjs.com/package/gobot-ollama)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.28/src/apps/pocketbase/logo-50x.webp">](https://pocketbase.io)                                                                                             | `pocketbase`  | Open Source realtime backend in 1 file                                                                                                                                                                                                                                                   | [readme](https://www.npmjs.com/package/gobot-pocketbase)  |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.28/src/apps/pulumi/logo-50x.webp">](https://www.pulumi.com)                                                                                                | `pulumi`      | Pulumi - Infrastructure as Code in any programming language. Build infrastructure intuitively on any cloud using familiar languages 🚀                                                                                                                                                   | [readme](https://www.npmjs.com/package/gobot-pulumi)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.28/src/apps/rclone/logo-50x.webp">](https://rclone.org/)                                                                                                   | `rclone`      | rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Yandex Files                                                                                                                                                  | [readme](https://www.npmjs.com/package/gobot-rclone)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.28/src/apps/restic/logo-50x.webp">](https://restic.net/)                                                                                                   | `restic`      | Fast, secure, efficient backup program.                                                                                                                                                                                                                                                  | [readme](https://www.npmjs.com/package/gobot-restic)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.28/src/apps/reviewdog/logo-50x.webp">](https://medium.com/@haya14busa/reviewdog-a-code-review-dog-who-keeps-your-codebase-healthy-d957c471938b#.8xctbaw5u) | `reviewdog`   | 🐶 Automated code review tool integrated with any code analysis tools regardless of programming language                                                                                                                                                                                 | [readme](https://www.npmjs.com/package/gobot-reviewdog)   |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.28/src/apps/weaviate/logo-50x.webp">](https://weaviate.io)                                                                                                 | `weaviate`    | Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering with the fault-tolerance and scalability of a cloud-native database, all accessible through GraphQL, REST, and various language clients. | [readme](https://www.npmjs.com/package/gobot-weaviate)    |

### Running unofficial apps

Gobot can run many apps hosted on github. Gobot will examine the releases and attempt to decipher binaries based on version, platform, and architecture.

```bash
gobot <user>/<repo>
```

**Example**

```bash
# Run PocketBase as a direct repo name
# rather than the `pocketbase` alias
gobot pocketbase/pocketbase --help
```

or API:

```ts
gobot(`pocketbase/pocketbase`).run([`--help`])
```

The above command format **_may_** run the app you have in mind. For example, `gobot caddy --help` runs the Caddy by the official name, but `gobot caddyserver/caddy --help` will also run it.

As long as the project uses the github [Releases](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) feature and includes statically linked binaries with zero dependencies, Gobot can probably run it.

Go apps work flawlessly, if the releases are named well. Gobot was originally named and conceived to support Go apps.

## Getting Help

Join [our Discord community](https://discord.gg/977kMmFnXc).

## Why?

If you are writing a nodejs application that depends upon binaries being present (like [PocketHost](https://github.com/pockethost/pockethost) does), you can add this package as a dependency and execute the binary via CLI or programmatically. This package will make sure your desired external binaries are always available.

If you just want to grab a binary quickly for your own use, `npx gobot@latest <app>` is quite a bit easier than manually downloading zips and installing binaries in shell paths. Gobot handles it all for you effortlessly.

## Adding your app to the Gobot registry

We want to add native support for lots of binary apps!

If you use publish statically linked binary releases on github, you are already 98% compatible with Gobot. In fact, Gobot may already know how to work with it.

To see what initial support looks like:

```bash
npx gobot <user>/<repo> --g-show-versions md --g-refresh
```

This will index all the releases from your repo and show you exactly what Gobot sees.

If you see everything you expect, you're golden. If things are missing, it may mean some custom programming. Either way, jump on [Discord](https://discord.gg/977kMmFnXc) and let us know your results.

If you have the flexibility or are starting a new project, make sure your release names follows these rules:

- Ends in `.zip`, `.tgz`, `.tar.gz`, `.bz2`
- Include the version ([semver](https://semver.org) recommended)
- Include the platform (`freebsd`, `darwin`, `linux`, `win32`)
- Include the architecture (`arm64`, `x64`, `ia32`, `arm`)

Note: [GoReleaser](https://goreleaser.com/) is a great option if you're publish a Go-based project.

## Contributing

We could use help testing and making sure this works across lots of platforms.

To test a build locally:

```bash
pnpm test
```

