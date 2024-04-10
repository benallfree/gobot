![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/assets/gobot-banner.png)

![](https://img.shields.io/npm/v/gobot) ![](https://img.shields.io/npm/dt/gobot) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

# The binary package manager for Node

_Manage and run binaries via npm. CLI and API interfaces._

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
const exitCode = await bot.run([`--help`])
```

**Pass environment variables**

In API mode, Gobot does not forward environment variables by default.

```js
import { gobot } from 'gobot'
const bot = await gobot(`pocketbase`, {
  env: process.env,
})
const exitCode = await bot.run([`--help`])
```

**Use a specific version of a Gobot app**

```js
const bot = await gobot(`pocketbase`, {
  version: `0.19.3`,
})
const exitCode = await bot.run([`--help`])
```

**Access the child process**

```js
import { gobot } from 'gobot'
const bot = await gobot(`pocketbase`, {
  env: process.env,
})
const exitCode = await bot.run(
  [`--help`],
  { cwd: `./foo` }, // SpawnOptions
  (proc) => {
    // ChildProcess
    proc.stdout.on('exit', (code) => {
      console.log(`process has exited`)
    })
  },
)
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
const exitCode = await bot.run([`--help`])
```

## CLI

Note: All Gobot options begin with `--g-` so as not to conflict with app option switches. Every unrecognized option is passed through to the app binary.

**Global options**

These options are available on every command:

| Name             | Default         | Discussion                |
| ---------------- | --------------- | ------------------------- |
| `--g-version`    |                 | output the version number |
| `--g-v`          | `true`          | Show informational output |
| `--g-vv`         | `false`         | Show even more output     |
| `--g-vvv`        | `false`         | Show even more output     |
| `--g-cache-path` | `host specific` | The cache path to use     |

### `gobot <appName> [options]`

Run a binary app. The app will be downloaded if it has not been downloaded yet. After that, you must run &#x27;gobot update &lt;appName&gt;&#x27; to make Gobot look for new versions.

**Options**

| Name              | Default         | Discussion                                                                  |
| ----------------- | --------------- | --------------------------------------------------------------------------- |
| `--g-use-version` | `*`             | Run a specific binary version (format: x.y.z semver or x.y.\* semver range) |
| `--g-os`          | `host specific` | Specify OS/Platform                                                         |
| `--g-arch`        | `host specific` | Specify OS/Platform                                                         |

### `gobot inspect [appName]`

Display Gobot registry information. If [appName] is specified, Gobot will fresh release information and display. Otherwise, Gobot will display an overview of current registry information

### `gobot download <appName> [options]`

Download versions of &lt;appName&gt;. Gobot will download and cache the specific platform, architecture, and versions you request, defaulting to downloading the latest version for the host platform and architecture.

**Options**

| Name              | Default         | Discussion                                                                       |
| ----------------- | --------------- | -------------------------------------------------------------------------------- |
| `--g-use-version` | `*`             | Download a specific binary version (format: x.y.z semver or x.y.\* semver range) |
| `--g-os`          | `host specific` | Specify OS/Platform                                                              |
| `--g-arch`        | `host specific` | Specify OS/Platform                                                              |

### `gobot export <appName><format>`

Export app version information

### `gobot update <appName>`

Pull the latest release history for &lt;appName&gt;, optionally.

### `gobot reset [appName]`

Reset caches. If [appName] is specified, only that app&#x27;s cache is reset. Otherwise, all caches are reset. Caches include release history and binary downloads. Use &#x27;gobot inspect&#x27; to learn more about host-specific cache locations and contents.

## API

[Full API Docs](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.37/docs/readme.md)

## Official Gobot Apps

Gobot supports 52 apps using bin names. They also have npm helper packages to assist with version locking.

| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                                                                                                                          | `<app>`         | What is it?                                                                                                                                                                                                                                                                                                                 |                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/act/logo-50x.webp">](https://nektosact.com/)                                                                                                   | `act`           | Run your GitHub Actions locally 🚀                                                                                                                                                                                                                                                                                          | [npm](https://www.npmjs.com/package/gobot-act)           |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/AdGuardHome/logo-50x.webp">](https://adguard.com/adguard-home.html)                                                                            | `AdGuardHome`   | Network-wide ads & trackers blocking DNS server                                                                                                                                                                                                                                                                             | [npm](https://www.npmjs.com/package/gobot-adguardhome)   |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/age/logo-50x.webp">](https://age-encryption.org/)                                                                                              | `age`           | A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability.                                                                                                                                                                                     | [npm](https://www.npmjs.com/package/gobot-age)           |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/aperture/logo-50x.webp">](https://docs.fluxninja.com)                                                                                          | `aperture`      | Rate limiting, caching, and request prioritization for modern workloads                                                                                                                                                                                                                                                     | [npm](https://www.npmjs.com/package/gobot-aperture)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/backrest/logo-50x.webp">](https://github.com/garethgeorge/backrest)                                                                            | `backrest`      | Backrest is a web UI and orchestrator for restic backup.                                                                                                                                                                                                                                                                    | [npm](https://www.npmjs.com/package/gobot-backrest)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/caddy/logo-50x.webp">](https://caddyserver.com/)                                                                                               | `caddy`         | Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS                                                                                                                                                                                                                                               | [npm](https://www.npmjs.com/package/gobot-caddy)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/centrifugo/logo-50x.webp">](https://centrifugal.dev)                                                                                           | `centrifugo`    | Scalable real-time messaging server in a language-agnostic way. Self-hosted alternative to Pubnub, Pusher, Ably. Set up once and forever.                                                                                                                                                                                   | [npm](https://www.npmjs.com/package/gobot-centrifugo)    |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/chezmoi/logo-50x.webp">](https://www.chezmoi.io/)                                                                                              | `chezmoi`       | Manage your dotfiles across multiple diverse machines, securely.                                                                                                                                                                                                                                                            | [npm](https://www.npmjs.com/package/gobot-chezmoi)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/constellation/logo-50x.webp">](https://github.com/edgelesssys/constellation)                                                                   | `constellation` | Constellation is the first Confidential Kubernetes. Constellation shields entire Kubernetes clusters from the (cloud) infrastructure using confidential computing.                                                                                                                                                          | [npm](https://www.npmjs.com/package/gobot-constellation) |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/croc/logo-50x.webp">](https://schollz.com/software/croc6)                                                                                      | `croc`          | Easily and securely send things from one computer to another :crocodile: :package:                                                                                                                                                                                                                                          | [npm](https://www.npmjs.com/package/gobot-croc)          |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/cue/logo-50x.webp">](https://cuelang.org)                                                                                                      | `cue`           | The home of the CUE language! Validate and define text-based and dynamic configuration                                                                                                                                                                                                                                      | [npm](https://www.npmjs.com/package/gobot-cue)           |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/dasel/logo-50x.webp">](https://daseldocs.tomwright.me)                                                                                         | `dasel`         | Select, put and delete data from JSON, TOML, YAML, XML and CSV files with a single tool. Supports conversion between formats and can be used as a Go package.                                                                                                                                                               | [npm](https://www.npmjs.com/package/gobot-dasel)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/dnscryptproxy/logo-50x.webp">](https://dnscrypt.info)                                                                                          | `dnscryptproxy` | dnscrypt-proxy 2 - A flexible DNS proxy, with support for encrypted DNS protocols.                                                                                                                                                                                                                                          | [npm](https://www.npmjs.com/package/gobot-dnscryptproxy) |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/duf/logo-50x.webp">](https://github.com/muesli/duf)                                                                                            | `duf`           | Disk Usage/Free Utility - a better &#x27;df&#x27; alternative                                                                                                                                                                                                                                                               | [npm](https://www.npmjs.com/package/gobot-duf)           |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/etcd/logo-50x.webp">](https://etcd.io)                                                                                                         | `etcd`          | Distributed reliable key-value store for the most critical data of a distributed system                                                                                                                                                                                                                                     | [npm](https://www.npmjs.com/package/gobot-etcd)          |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/ferretdb/logo-50x.webp">](https://www.ferretdb.com)                                                                                            | `ferretdb`      | A truly Open Source MongoDB alternative                                                                                                                                                                                                                                                                                     | [npm](https://www.npmjs.com/package/gobot-ferretdb)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/filebrowser/logo-50x.webp">](https://filebrowser.org)                                                                                          | `filebrowser`   | 📂 Web File Browser                                                                                                                                                                                                                                                                                                         | [npm](https://www.npmjs.com/package/gobot-filebrowser)   |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/fzf/logo-50x.webp">](https://github.com/junegunn/fzf)                                                                                          | `fzf`           | 🌸 A command-line fuzzy finder                                                                                                                                                                                                                                                                                              | [npm](https://www.npmjs.com/package/gobot-fzf)           |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/gitea/logo-50x.webp">](https://about.gitea.com)                                                                                                | `gitea`         | Git with a cup of tea! Painless self-hosted all-in-one software development service, including Git hosting, code review, team collaboration, package registry and CI/CD                                                                                                                                                     | [npm](https://www.npmjs.com/package/gobot-gitea)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/gocryptfs/logo-50x.webp">](https://nuetzlich.net/gocryptfs/)                                                                                   | `gocryptfs`     | Encrypted overlay filesystem written in Go                                                                                                                                                                                                                                                                                  | [npm](https://www.npmjs.com/package/gobot-gocryptfs)     |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/gokapi/logo-50x.webp">](https://github.com/Forceu/Gokapi)                                                                                      | `gokapi`        | Lightweight self-hosted Firefox Send alternative without public upload. AWS S3 supported.                                                                                                                                                                                                                                   | [npm](https://www.npmjs.com/package/gobot-gokapi)        |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/gotify/logo-50x.webp">](https://gotify.net)                                                                                                    | `gotify`        | A simple server for sending and receiving messages in real-time per WebSocket. (Includes a sleek web-ui)                                                                                                                                                                                                                    | [npm](https://www.npmjs.com/package/gobot-gotify)        |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/gotifyc/logo-50x.webp">](https://github.com/gotify/cli)                                                                                        | `gotifyc`       | A command line interface for pushing messages to gotify/server.                                                                                                                                                                                                                                                             | [npm](https://www.npmjs.com/package/gobot-gotifyc)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/gotop/logo-50x.webp">](https://github.com/xxxserxxx/gotop)                                                                                     | `gotop`         | A terminal based graphical activity monitor inspired by gtop and vtop                                                                                                                                                                                                                                                       | [npm](https://www.npmjs.com/package/gobot-gotop)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/gotty/logo-50x.webp">](https://github.com/sorenisanerd/gotty)                                                                                  | `gotty`         | Share your terminal as a web application                                                                                                                                                                                                                                                                                    | [npm](https://www.npmjs.com/package/gobot-gotty)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/gptscript/logo-50x.webp">](https://gptscript.ai/)                                                                                              | `gptscript`     | Natural Language Programming.                                                                                                                                                                                                                                                                                               | [npm](https://www.npmjs.com/package/gobot-gptscript)     |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/hugo/logo-50x.webp">](https://gohugo.io/)                                                                                                      | `hugo`          | The world’s fastest framework for building websites.                                                                                                                                                                                                                                                                        | [npm](https://www.npmjs.com/package/gobot-hugo)          |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/incus/logo-50x.webp">](https://linuxcontainers.org/incus)                                                                                      | `incus`         | Powerful system container and virtual machine manager                                                                                                                                                                                                                                                                       | [npm](https://www.npmjs.com/package/gobot-incus)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/kopia/logo-50x.webp">](https://kopia.io)                                                                                                       | `kopia`         | Cross-platform backup tool for Windows, macOS & Linux with fast, incremental backups, client-side end-to-end encryption, compression and data deduplication. CLI and GUI included.                                                                                                                                          | [npm](https://www.npmjs.com/package/gobot-kopia)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/kubo/logo-50x.webp">](https://docs.ipfs.tech/how-to/command-line-quick-start/)                                                                 | `kubo`          | An IPFS implementation in Go                                                                                                                                                                                                                                                                                                | [npm](https://www.npmjs.com/package/gobot-kubo)          |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/lazygit/logo-50x.webp">](https://github.com/jesseduffield/lazygit)                                                                             | `lazygit`       | simple terminal UI for git commands                                                                                                                                                                                                                                                                                         | [npm](https://www.npmjs.com/package/gobot-lazygit)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/lf/logo-50x.webp">](https://github.com/gokcehan/lf)                                                                                            | `lf`            | Terminal file manager                                                                                                                                                                                                                                                                                                       | [npm](https://www.npmjs.com/package/gobot-lf)            |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/litestream/logo-50x.webp">](https://litestream.io)                                                                                             | `litestream`    | Streaming replication for SQLite.                                                                                                                                                                                                                                                                                           | [npm](https://www.npmjs.com/package/gobot-litestream)    |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/loki/logo-50x.webp">](https://grafana.com/loki)                                                                                                | `loki`          | Like Prometheus, but for logs.                                                                                                                                                                                                                                                                                              | [npm](https://www.npmjs.com/package/gobot-loki)          |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/mc/logo-50x.webp">](https://min.io)                                                                                                            | `mc`            | The Object Store for AI Data Infrastructure (client)                                                                                                                                                                                                                                                                        | [npm](https://www.npmjs.com/package/gobot-mc)            |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/micro/logo-50x.webp">](https://micro-editor.github.io)                                                                                         | `micro`         | A modern and intuitive terminal-based text editor                                                                                                                                                                                                                                                                           | [npm](https://www.npmjs.com/package/gobot-micro)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/minio/logo-50x.webp">](https://min.io)                                                                                                         | `minio`         | The Object Store for AI Data Infrastructure (server)                                                                                                                                                                                                                                                                        | [npm](https://www.npmjs.com/package/gobot-minio)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/natsd/logo-50x.webp">](https://nats.io)                                                                                                        | `natsd`         | High-Performance server for NATS.io, the cloud and edge native messaging system.                                                                                                                                                                                                                                            | [npm](https://www.npmjs.com/package/gobot-natsd)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/ollama/logo-50x.webp">](https://ollama.com/)                                                                                                   | `ollama`        | Get up and running with Llama 2, Mistral, Gemma, and other large language models.                                                                                                                                                                                                                                           | [npm](https://www.npmjs.com/package/gobot-ollama)        |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/pocketbase/logo-50x.webp">](https://pocketbase.io)                                                                                             | `pocketbase`    | Open Source realtime backend in 1 file                                                                                                                                                                                                                                                                                      | [npm](https://www.npmjs.com/package/gobot-pocketbase)    |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/prometheus/logo-50x.webp">](https://prometheus.io/)                                                                                            | `prometheus`    | The Prometheus monitoring system and time series database.                                                                                                                                                                                                                                                                  | [npm](https://www.npmjs.com/package/gobot-prometheus)    |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/pulumi/logo-50x.webp">](https://www.pulumi.com)                                                                                                | `pulumi`        | Pulumi - Infrastructure as Code in any programming language. Build infrastructure intuitively on any cloud using familiar languages 🚀                                                                                                                                                                                      | [npm](https://www.npmjs.com/package/gobot-pulumi)        |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/rclone/logo-50x.webp">](https://rclone.org/)                                                                                                   | `rclone`        | rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Yandex Files                                                                                                                                                                                     | [npm](https://www.npmjs.com/package/gobot-rclone)        |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/restic/logo-50x.webp">](https://restic.net/)                                                                                                   | `restic`        | Fast, secure, efficient backup program.                                                                                                                                                                                                                                                                                     | [npm](https://www.npmjs.com/package/gobot-restic)        |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/reviewdog/logo-50x.webp">](https://medium.com/@haya14busa/reviewdog-a-code-review-dog-who-keeps-your-codebase-healthy-d957c471938b#.8xctbaw5u) | `reviewdog`     | 🐶 Automated code review tool integrated with any code analysis tools regardless of programming language                                                                                                                                                                                                                    | [npm](https://www.npmjs.com/package/gobot-reviewdog)     |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/sftpgo/logo-50x.webp">](https://github.com/drakkan/sftpgo)                                                                                     | `sftpgo`        | Fully featured and highly configurable SFTP server with optional HTTP/S, FTP/S and WebDAV support - S3, Google Cloud Storage, Azure Blob                                                                                                                                                                                    | [npm](https://www.npmjs.com/package/gobot-sftpgo)        |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/syncthing/logo-50x.webp">](https://forum.syncthing.net/)                                                                                       | `syncthing`     | Open Source Continuous File Synchronization                                                                                                                                                                                                                                                                                 | [npm](https://www.npmjs.com/package/gobot-syncthing)     |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/temporal/logo-50x.webp">](https://docs.temporal.io)                                                                                            | `temporal`      | Temporal service                                                                                                                                                                                                                                                                                                            | [npm](https://www.npmjs.com/package/gobot-temporal)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/tinygo/logo-50x.webp">](https://tinygo.org)                                                                                                    | `tinygo`        | Go compiler for small places. Microcontrollers, WebAssembly (WASM/WASI), and command-line tools. Based on LLVM.                                                                                                                                                                                                             | [npm](https://www.npmjs.com/package/gobot-tinygo)        |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/transfersh/logo-50x.webp">](https://github.com/dutchcoders/transfer.sh)                                                                        | `transfersh`    | Easy and fast file sharing from the command-line.                                                                                                                                                                                                                                                                           | [npm](https://www.npmjs.com/package/gobot-transfersh)    |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/weaviate/logo-50x.webp">](https://weaviate.io)                                                                                                 | `weaviate`      | Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering with the fault-tolerance and scalability of a cloud-native database, all accessible through GraphQL, REST, and various language clients.                                    | [npm](https://www.npmjs.com/package/gobot-weaviate)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/src/apps/weed/logo-50x.webp">](https://github.com/seaweedfs/seaweedfs)                                                                                  | `weed`          | SeaweedFS is a fast distributed storage system for blobs, objects, files, and data lake, for billions of files! Blob store has O(1) disk seek, cloud tiering. Filer supports Cloud Drive, cross-DC active-active replication, Kubernetes, POSIX FUSE mount, S3 API, S3 Gateway, Hadoop, WebDAV, encryption, Erasure Coding. | [npm](https://www.npmjs.com/package/gobot-weed)          |

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
const exitCode = await bot.run([`--help`])
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
