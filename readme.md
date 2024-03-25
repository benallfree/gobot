![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/assets/gobot-banner.png)

![](https://img.shields.io/npm/v/gobot) ![](https://img.shields.io/npm/dt/gobot) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

# The binary package manager for Node

_Manage and run binaries as `package.json` npm dependencies. CLI and API interfaces._

## Table of Contents

- [Introduction](#introduction)
- [Quickstart](#quickstart)
- [CLI](#cli)
  - [gobot \<app> [gobotOptions] [appOptions]](#gobot-gobotoptions-app-appoptions)
  - [gobot inspect \<app> [gobotOptions]](#gobot-inspect-app-gobotoptions)
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
const bot = await gobot(`pocketbase`)
bot.run([`--help`])
```

**Pass environment variables**

In API mode, Gobot does not forward environment variables by default.

```js
import { gobot } from 'gobot'
const bot = await gobot(`pocketbase`, {
  env: process.env,
})
bot.run([`--help`])
```

**Use a specific version of a Gobot app**

```js
const bot = await gobot(`pocketbase`, {
  version: `0.19.3`,
})
bot.run([`--help`])
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
const bot = await gobot(`pocketbase`)
bot.run([`--help`])
```

## CLI

Note: All Gobot options begin with `--g-` so as not to conflict with app option switches. Every unrecognized option is passed through to the app binary.

**Global Options**

| Option                                  | Default       | Discussion                                   |
| --------------------------------------- | ------------- | -------------------------------------------- |
| &#x60;--g-help&#x60;                    | Show help     | Display help and options for Gobot           |
| &#x60;--g-v[vv]&#x60;                   |               | Adjust output verbosity                      |
| &#x60;--g-cache-path &lt;path&gt;&#x60; | host specific | Use the specified directory for cache files. |

### `gobot <app> [gobotOptions] [appOptions]`

Run `<app>`. Gobot will download and cache the specific platform, architecture, and version you request and defaults to the latest version for the host platform and architecture.

| Option            | Default   | Discussion                                                                                                                                                   |
| ----------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--g-os <os>`     | host OS   | `aix`, `darwin`, `freebsd`,`linux`, `openbsd`, `sunos`, and `win32`                                                                                          |
| `--g-arch <arch>` | host arch | `arm`, `arm64`, `ia32`, `loong64`, `mips`, `mipsel`, `ppc`, `ppc64`, `riscv64`, `s390`, `s390x`, and `x64`                                                   |
| `--g-download`    | `false`   | Download all matching versions and exit                                                                                                                      |
| `--g-refresh`     | `false`   | Clear the gobot cache                                                                                                                                        |
| `--g-use-version` | latest    | Run a specific binary version, in [semver](https://semver.org/) format `x.y.z`. Also supports [semver ranges](https://www.npmjs.com/package/semver) `0.20.*` |

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

### `gobot inspect <app> [gobotOptions]`

Output metadata info about `<app>`, including unofficial apps. This command is helpful for exploring support for new apps.

| Option                  | Default       | Discussion                                   |
| ----------------------- | ------------- | -------------------------------------------- |
| `--g-help`              | Show help     | Display help and options for Gobot           |
| `--g-v[vv]`             |               | Adjust output verbosity                      |
| `--g-cache-path <path>` | host specific | Use the specified directory for cache files. |

## API

[Full API Docs](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.33/docs/readme.md)

## Official Gobot Apps

These apps have single-token names and dedicated helper packages to assist with version locking.

| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                                                                                                                          | `<app>`         | What is it?                                                                                                                                                                                                                                                                                                                 |                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/act/logo-50x.webp">](https://nektosact.com/)                                                                                                   | `act`           | Run your GitHub Actions locally 🚀                                                                                                                                                                                                                                                                                          | [readme](https://www.npmjs.com/package/gobot-act)           |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/AdGuardHome/logo-50x.webp">](https://adguard.com/adguard-home.html)                                                                            | `AdGuardHome`   | Network-wide ads & trackers blocking DNS server                                                                                                                                                                                                                                                                             | [readme](https://www.npmjs.com/package/gobot-adguardhome)   |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/age/logo-50x.webp">](https://age-encryption.org/)                                                                                              | `age`           | A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability.                                                                                                                                                                                     | [readme](https://www.npmjs.com/package/gobot-age)           |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/backrest/logo-50x.webp">](https://github.com/garethgeorge/backrest)                                                                            | `backrest`      | Backrest is a web UI and orchestrator for restic backup.                                                                                                                                                                                                                                                                    | [readme](https://www.npmjs.com/package/gobot-backrest)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/caddy/logo-50x.webp">](https://caddyserver.com/)                                                                                               | `caddy`         | Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS                                                                                                                                                                                                                                               | [readme](https://www.npmjs.com/package/gobot-caddy)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/chezmoi/logo-50x.webp">](https://www.chezmoi.io/)                                                                                              | `chezmoi`       | Manage your dotfiles across multiple diverse machines, securely.                                                                                                                                                                                                                                                            | [readme](https://www.npmjs.com/package/gobot-chezmoi)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/croc/logo-50x.webp">](https://schollz.com/software/croc6)                                                                                      | `croc`          | Easily and securely send things from one computer to another :crocodile: :package:                                                                                                                                                                                                                                          | [readme](https://www.npmjs.com/package/gobot-croc)          |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/cue/logo-50x.webp">](https://cuelang.org)                                                                                                      | `cue`           | The home of the CUE language! Validate and define text-based and dynamic configuration                                                                                                                                                                                                                                      | [readme](https://www.npmjs.com/package/gobot-cue)           |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/dasel/logo-50x.webp">](https://daseldocs.tomwright.me)                                                                                         | `dasel`         | Select, put and delete data from JSON, TOML, YAML, XML and CSV files with a single tool. Supports conversion between formats and can be used as a Go package.                                                                                                                                                               | [readme](https://www.npmjs.com/package/gobot-dasel)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/dnscryptproxy/logo-50x.webp">](https://dnscrypt.info)                                                                                          | `dnscryptproxy` | dnscrypt-proxy 2 - A flexible DNS proxy, with support for encrypted DNS protocols.                                                                                                                                                                                                                                          | [readme](https://www.npmjs.com/package/gobot-dnscryptproxy) |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/duf/logo-50x.webp">](https://github.com/muesli/duf)                                                                                            | `duf`           | Disk Usage/Free Utility - a better &#x27;df&#x27; alternative                                                                                                                                                                                                                                                               | [readme](https://www.npmjs.com/package/gobot-duf)           |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/etcd/logo-50x.webp">](https://etcd.io)                                                                                                         | `etcd`          | Distributed reliable key-value store for the most critical data of a distributed system                                                                                                                                                                                                                                     | [readme](https://www.npmjs.com/package/gobot-etcd)          |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/ferretdb/logo-50x.webp">](https://www.ferretdb.com)                                                                                            | `ferretdb`      | A truly Open Source MongoDB alternative                                                                                                                                                                                                                                                                                     | [readme](https://www.npmjs.com/package/gobot-ferretdb)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/filebrowser/logo-50x.webp">](https://filebrowser.org)                                                                                          | `filebrowser`   | 📂 Web File Browser                                                                                                                                                                                                                                                                                                         | [readme](https://www.npmjs.com/package/gobot-filebrowser)   |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/fzf/logo-50x.webp">](https://github.com/junegunn/fzf)                                                                                          | `fzf`           | 🌸 A command-line fuzzy finder                                                                                                                                                                                                                                                                                              | [readme](https://www.npmjs.com/package/gobot-fzf)           |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/gitea/logo-50x.webp">](https://about.gitea.com)                                                                                                | `gitea`         | Git with a cup of tea! Painless self-hosted all-in-one software development service, including Git hosting, code review, team collaboration, package registry and CI/CD                                                                                                                                                     | [readme](https://www.npmjs.com/package/gobot-gitea)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/gocryptfs/logo-50x.webp">](https://nuetzlich.net/gocryptfs/)                                                                                   | `gocryptfs`     | Encrypted overlay filesystem written in Go                                                                                                                                                                                                                                                                                  | [readme](https://www.npmjs.com/package/gobot-gocryptfs)     |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/gokapi/logo-50x.webp">](https://github.com/Forceu/Gokapi)                                                                                      | `gokapi`        | Lightweight self-hosted Firefox Send alternative without public upload. AWS S3 supported.                                                                                                                                                                                                                                   | [readme](https://www.npmjs.com/package/gobot-gokapi)        |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/gotify/logo-50x.webp">](https://gotify.net)                                                                                                    | `gotify`        | A simple server for sending and receiving messages in real-time per WebSocket. (Includes a sleek web-ui)                                                                                                                                                                                                                    | [readme](https://www.npmjs.com/package/gobot-gotify)        |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/gotifyc/logo-50x.webp">](https://github.com/gotify/cli)                                                                                        | `gotifyc`       | A command line interface for pushing messages to gotify/server.                                                                                                                                                                                                                                                             | [readme](https://www.npmjs.com/package/gobot-gotifyc)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/gotop/logo-50x.webp">](https://github.com/xxxserxxx/gotop)                                                                                     | `gotop`         | A terminal based graphical activity monitor inspired by gtop and vtop                                                                                                                                                                                                                                                       | [readme](https://www.npmjs.com/package/gobot-gotop)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/gotty/logo-50x.webp">](https://github.com/sorenisanerd/gotty)                                                                                  | `gotty`         | Share your terminal as a web application                                                                                                                                                                                                                                                                                    | [readme](https://www.npmjs.com/package/gobot-gotty)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/gptscript/logo-50x.webp">](https://gptscript.ai/)                                                                                              | `gptscript`     | Natural Language Programming.                                                                                                                                                                                                                                                                                               | [readme](https://www.npmjs.com/package/gobot-gptscript)     |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/hugo/logo-50x.webp">](https://gohugo.io/)                                                                                                      | `hugo`          | The world’s fastest framework for building websites.                                                                                                                                                                                                                                                                        | [readme](https://www.npmjs.com/package/gobot-hugo)          |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/kopia/logo-50x.webp">](https://kopia.io)                                                                                                       | `kopia`         | Cross-platform backup tool for Windows, macOS & Linux with fast, incremental backups, client-side end-to-end encryption, compression and data deduplication. CLI and GUI included.                                                                                                                                          | [readme](https://www.npmjs.com/package/gobot-kopia)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/kubo/logo-50x.webp">](https://docs.ipfs.tech/how-to/command-line-quick-start/)                                                                 | `kubo`          | An IPFS implementation in Go                                                                                                                                                                                                                                                                                                | [readme](https://www.npmjs.com/package/gobot-kubo)          |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/lazygit/logo-50x.webp">](https://github.com/jesseduffield/lazygit)                                                                             | `lazygit`       | simple terminal UI for git commands                                                                                                                                                                                                                                                                                         | [readme](https://www.npmjs.com/package/gobot-lazygit)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/loki/logo-50x.webp">](https://grafana.com/loki)                                                                                                | `loki`          | Like Prometheus, but for logs.                                                                                                                                                                                                                                                                                              | [readme](https://www.npmjs.com/package/gobot-loki)          |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/mc/logo-50x.webp">](https://min.io)                                                                                                            | `mc`            | The Object Store for AI Data Infrastructure (client)                                                                                                                                                                                                                                                                        | [readme](https://www.npmjs.com/package/gobot-mc)            |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/micro/logo-50x.webp">](https://micro-editor.github.io)                                                                                         | `micro`         | A modern and intuitive terminal-based text editor                                                                                                                                                                                                                                                                           | [readme](https://www.npmjs.com/package/gobot-micro)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/minio/logo-50x.webp">](https://min.io)                                                                                                         | `minio`         | The Object Store for AI Data Infrastructure (server)                                                                                                                                                                                                                                                                        | [readme](https://www.npmjs.com/package/gobot-minio)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/ollama/logo-50x.webp">](https://ollama.com/)                                                                                                   | `ollama`        | Get up and running with Llama 2, Mistral, Gemma, and other large language models.                                                                                                                                                                                                                                           | [readme](https://www.npmjs.com/package/gobot-ollama)        |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/pocketbase/logo-50x.webp">](https://pocketbase.io)                                                                                             | `pocketbase`    | Open Source realtime backend in 1 file                                                                                                                                                                                                                                                                                      | [readme](https://www.npmjs.com/package/gobot-pocketbase)    |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/pulumi/logo-50x.webp">](https://www.pulumi.com)                                                                                                | `pulumi`        | Pulumi - Infrastructure as Code in any programming language. Build infrastructure intuitively on any cloud using familiar languages 🚀                                                                                                                                                                                      | [readme](https://www.npmjs.com/package/gobot-pulumi)        |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/rclone/logo-50x.webp">](https://rclone.org/)                                                                                                   | `rclone`        | rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Yandex Files                                                                                                                                                                                     | [readme](https://www.npmjs.com/package/gobot-rclone)        |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/restic/logo-50x.webp">](https://restic.net/)                                                                                                   | `restic`        | Fast, secure, efficient backup program.                                                                                                                                                                                                                                                                                     | [readme](https://www.npmjs.com/package/gobot-restic)        |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/reviewdog/logo-50x.webp">](https://medium.com/@haya14busa/reviewdog-a-code-review-dog-who-keeps-your-codebase-healthy-d957c471938b#.8xctbaw5u) | `reviewdog`     | 🐶 Automated code review tool integrated with any code analysis tools regardless of programming language                                                                                                                                                                                                                    | [readme](https://www.npmjs.com/package/gobot-reviewdog)     |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/sftpgo/logo-50x.webp">](https://github.com/drakkan/sftpgo)                                                                                     | `sftpgo`        | Fully featured and highly configurable SFTP server with optional HTTP/S, FTP/S and WebDAV support - S3, Google Cloud Storage, Azure Blob                                                                                                                                                                                    | [readme](https://www.npmjs.com/package/gobot-sftpgo)        |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/syncthing/logo-50x.webp">](https://forum.syncthing.net/)                                                                                       | `syncthing`     | Open Source Continuous File Synchronization                                                                                                                                                                                                                                                                                 | [readme](https://www.npmjs.com/package/gobot-syncthing)     |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/tinygo/logo-50x.webp">](https://tinygo.org)                                                                                                    | `tinygo`        | Go compiler for small places. Microcontrollers, WebAssembly (WASM/WASI), and command-line tools. Based on LLVM.                                                                                                                                                                                                             | [readme](https://www.npmjs.com/package/gobot-tinygo)        |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/transfersh/logo-50x.webp">](https://github.com/dutchcoders/transfer.sh)                                                                        | `transfersh`    | Easy and fast file sharing from the command-line.                                                                                                                                                                                                                                                                           | [readme](https://www.npmjs.com/package/gobot-transfersh)    |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/weaviate/logo-50x.webp">](https://weaviate.io)                                                                                                 | `weaviate`      | Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering with the fault-tolerance and scalability of a cloud-native database, all accessible through GraphQL, REST, and various language clients.                                    | [readme](https://www.npmjs.com/package/gobot-weaviate)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/src/apps/weed/logo-50x.webp">](https://github.com/seaweedfs/seaweedfs)                                                                                  | `weed`          | SeaweedFS is a fast distributed storage system for blobs, objects, files, and data lake, for billions of files! Blob store has O(1) disk seek, cloud tiering. Filer supports Cloud Drive, cross-DC active-active replication, Kubernetes, POSIX FUSE mount, S3 API, S3 Gateway, Hadoop, WebDAV, encryption, Erasure Coding. | [readme](https://www.npmjs.com/package/gobot-weed)          |

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
const bot = await gobot(`pocketbase/pocketbase`)
bot.run([`--help`])
```

The above command format **_may_** run the app you have in mind. If it doesn't and you want more information, use

```bash
gobot inspect <user>/<repo>
```

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
npx gobot inspect <user>/<repo>
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
