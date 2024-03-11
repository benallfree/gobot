![Gobot](https://raw.githubusercontent.com/benallfree/gobot/main/assets/gobot-banner-300x.png)

# `gobot-AdGuardHome`

**AdGuardHome for Gobot**

_Install, run, and manage `AdGuardHome` as an npm package with CLI and API interfaces._

## Table of Contents

- [What is AdGuardHome?](#what-is-AdGuardHome)
- [What is Gobot?](#what-is-gobot)
- [Quickstart](#quickstart)
- [CLI](#cli)
  - [Options](#options)
  - [Examples](#examples)
- [API](#api)
- [Notes](#notes)
  - [OS X Users](#os-x-users)
  - [Known Versions](#known-versions)
- [Sample project](#sample-project)
- [Try Gobot's other apps](#try-gobots-other-apps)
- [Why?](#why)
- [Technical Notes](#technical-notes)
  - [Repository API Rate Limits](#repository-api-rate-limits)
    - [Github API](#github-api)
- [Adding your app to the Gobot registry](#adding-your-app-to-the-gobot-registry)
- [Contributing](#contributing)

## What is AdGuardHome?

![AdGuardHome](https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/AdGuardHome/logo-50x.png)
[https://adguard.com/adguard-home.html](https://adguard.com/adguard-home.html)

Network-wide ads &amp; trackers blocking DNS server

## What is Gobot?

![Gobot](https://raw.githubusercontent.com/benallfree/gobot/main/assets/gobot-50x50.png)
[https://github.com/benallfree/gobot](https://github.com/benallfree/gobot)

Gobot downloads, installs, and runs statically-linked binaries while managing versions, OS's, and architectures. It has a CLI and a programmatic API.

With Gobot, external binaries become project dependencies just like other npm packages.

## Quickstart

This package provides [AdGuardHome](https://adguard.com/adguard-home.html) helpers to [Gobot](https://github.com/benallfree/gobot).

Install globally to run from the CLI:

```bash
npm i -g gobot-AdGuardHome
AdGuardHome --help
```

When installed as a dependency, you get a `AdGuardHome()` helper that returns a Gobot instance pre-configured for `AdGuardHome` using the version npm resolved and installed.

```bash
npm i gobot-AdGuardHome@0.108.0-b.53
```

```js
// index.mjs
import { AdGuardHome } from 'gobot-AdGuardHome'

const bot = AdGuardHome()
bot.run([`--help`])
```

## CLI

> ### `AdGuardHome [gobotOptions] [appOptions]`

### Options

All Gobot options begin with `--g-` so as not to conflict with app option switches. Every unrecognized option is passed through to the app binary.

| Option            | Default       | Discussion                                                                                                                                                   |
| ----------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--g-help`        | Show help     | Display help and options for Gobot                                                                                                                           |
| `--g-os`          | host OS       | `aix`, `darwin`, `freebsd`,`linux`, `openbsd`, `sunos`, and `win32`                                                                                          |
| `--g-arch`        | host arch     | `arm`, `arm64`, `ia32`, `loong64`, `mips`, `mipsel`, `ppc`, `ppc64`, `riscv64`, `s390`, `s390x`, and `x64`                                                   |
| `--g-v[vv]`       |               | Adjust output verbosity                                                                                                                                      |
| `--g-download`    | `false`       | Download all matching versions and exit                                                                                                                      |
| `--g-refresh`     | `false`       | Clear the gobot cache                                                                                                                                        |
| `--g-use-version` | latest        | Run a specific binary version, in [semver](https://semver.org/) format `x.y.z`. Also supports [semver ranges](https://www.npmjs.com/package/semver) `0.20.*` |
| `--g-cache-path`  | host specific | Use the specified directory for cache files.                                                                                                                 |

### Examples

```bash
# Show help for AdGuardHome
AdGuardHome --help

# Run in AdGuardHome debugging mode
 --g-debug AdGuardHome --help

# Run a specific version of AdGuardHome
# Note: this technically works, even though this helper package
# defaults to a specific version.
AdGuardHome --g-version="0.22.3" --help

# Force Gobot to dump cache and refresh tags and binaries
AdGuardHome --g-refresh
```

## API

[Full API Docs](https://github.com/benallfree/gobot/tree/main/docs/readme.md)

The real power of Gobot is that your favorite external binaries can be treated as project dependencies with version locking.

Inside your project:

```bash
# Any of these will work
npm i gobot-AdGuardHome
npm i gobot-AdGuardHome@latest
npm i gobot-AdGuardHome@0.108.0-b.53
```

Now you have made `AdGuardHome` a dependency of your package, and you've locked it at a specific version. When you run the app via the Gobot API, Gobot will use a version matching your criteria.

Gobot dynamically selects the correct build for the user's OS and architecture, in the version you specified, and stores it.

```js
// index.mjs
import { AdGuardHome } from 'gobot-AdGuardHome'

AdGuardHome({ env: process.env }).run(['--help'])
```

Reminder: the `AdGuardHome` executable alias can also be called from your npm scripts, and it will always use the version in the lockfile.



### OS X Users

If a Gobot app does not run it's likely you need to authorize it first. Go to `Security & Privacy` and scroll down to allow the exception.

### Known Versions

Gobot knows about 160 releases of `AdGuardHome`:

0.108.0-b.53, 0.108.0-b.52, 0.108.0-b.51, 0.108.0-b.50, 0.108.0-b.49, 0.108.0-b.48, 0.108.0-b.47, 0.108.0-b.46, 0.108.0-b.45, 0.108.0-b.44, 0.108.0-b.43, 0.108.0-b.42, 0.108.0-b.41, 0.108.0-b.40, 0.108.0-b.39, 0.108.0-b.38, 0.108.0-b.37, 0.108.0-b.36, 0.108.0-b.35, 0.108.0-b.34, 0.108.0-b.33, 0.108.0-b.32, 0.108.0-b.31, 0.108.0-b.30, 0.108.0-b.29, 0.108.0-b.28, 0.108.0-b.27, 0.108.0-b.26, 0.108.0-b.25, 0.108.0-b.24, 0.108.0-b.23, 0.108.0-b.22, 0.108.0-b.21, 0.108.0-b.20, 0.108.0-b.19, 0.108.0-b.18, 0.108.0-b.17, 0.108.0-b.16, 0.108.0-b.15, 0.108.0-b.14, 0.108.0-b.13, 0.108.0-b.12, 0.108.0-b.11, 0.108.0-b.10, 0.108.0-b.9, 0.108.0-b.8, 0.108.0-b.7, 0.108.0-b.6, 0.108.0-b.5, 0.108.0-b.4, 0.108.0-b.3, 0.108.0-b.2, 0.108.0-b.1, 0.107.45, 0.107.44, 0.107.43, 0.107.42, 0.107.41, 0.107.40, 0.107.39, 0.107.38, 0.107.37, 0.107.36, 0.107.35, 0.107.34, 0.107.33, 0.107.32, 0.107.31, 0.107.30, 0.107.29, 0.107.28, 0.107.27, 0.107.26, 0.107.25, 0.107.24, 0.107.23, 0.107.22, 0.107.21, 0.107.20, 0.107.19, 0.107.18, 0.107.17, 0.107.16, 0.107.15, 0.107.14, 0.107.13, 0.107.12, 0.107.11, 0.107.10, 0.107.9, 0.107.8, 0.107.7, 0.107.6, 0.107.5, 0.107.4, 0.107.3, 0.107.2, 0.107.1, 0.107.0, 0.107.0-b.17, 0.107.0-b.16, 0.107.0-b.15, 0.107.0-b.14, 0.107.0-b.13, 0.107.0-b.12, 0.107.0-b.11, 0.107.0-b.10, 0.107.0-b.9, 0.107.0-b.8, 0.107.0-b.7, 0.107.0-b.6, 0.107.0-b.5, 0.107.0-b.4, 0.107.0-b.3, 0.107.0-b.2, 0.107.0-b.1, 0.106.3, 0.106.2, 0.106.1, 0.106.0, 0.106.0-b.4, 0.106.0-b.3, 0.106.0-b.2, 0.106.0-b.1, 0.105.2, 0.105.1, 0.105.0, 0.105.0-beta.4, 0.105.0-beta.3, 0.105.0-beta.2, 0.105.0-beta.1, 0.104.3, 0.104.1, 0.104.0, 0.104.0-beta3, 0.104.0-beta2, 0.104.0-beta1, 0.103.3, 0.103.2, 0.103.1, 0.103.0-beta3, 0.103.0-beta2, 0.103.0-beta1, 0.102.0, 0.101.0, 0.100.9, 0.100.8, 0.100.7, 0.100.6, 0.100.5, 0.100.4, 0.100.2, 0.99.3, 0.99.2, 0.99.1, 0.99.0, 0.98.1, 0.98.0, 0.97.1, 0.97.0

## Sample project

View the [AdGuardHome sample project](https://github.com/benallfree/gobot/tree/main/src/plugins/AdGuardHome/sample-project) on github.

## Try Gobot's other apps

Gobot has a growing list of apps. Have you tried them all?

| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                                      | `<app>`       | What is it?                                                                                                                                                                                                                                                                              |                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/act/logo-50x.png">](https://github.com/nektos/act)                 | `act`         | Run your GitHub Actions locally 🚀                                                                                                                                                                                                                                                       | [readme](https://github.com/benallfree/gobot/tree/main/src/plugins/act/helper/readme.md)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/AdGuardHome/logo-50x.png">](https://adguard.com/adguard-home.html) | `AdGuardHome` | Network-wide ads & trackers blocking DNS server                                                                                                                                                                                                                                          | [readme](https://github.com/benallfree/gobot/tree/main/src/plugins/AdGuardHome/helper/readme.md) |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/caddy/logo-50x.png">](https://caddyserver.com/)                    | `caddy`       | Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS                                                                                                                                                                                                            | [readme](https://github.com/benallfree/gobot/tree/main/src/plugins/caddy/helper/readme.md)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/mc/logo-50x.png">](https://min.io)                                 | `mc`          | The Object Store for AI Data Infrastructure (client)                                                                                                                                                                                                                                     | [readme](https://github.com/benallfree/gobot/tree/main/src/plugins/mc/helper/readme.md)          |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/minio/logo-50x.png">](https://min.io)                              | `minio`       | The Object Store for AI Data Infrastructure (server)                                                                                                                                                                                                                                     | [readme](https://github.com/benallfree/gobot/tree/main/src/plugins/minio/helper/readme.md)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/pocketbase/logo-50x.png">](https://pocketbase.io)                  | `pocketbase`  | Open Source realtime backend in 1 file                                                                                                                                                                                                                                                   | [readme](https://github.com/benallfree/gobot/tree/main/src/plugins/pocketbase/helper/readme.md)  |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/pulumi/logo-50x.png">](https://www.pulumi.com)                     | `pulumi`      | Pulumi - Infrastructure as Code in any programming language. Build infrastructure intuitively on any cloud using familiar languages 🚀                                                                                                                                                   | [readme](https://github.com/benallfree/gobot/tree/main/src/plugins/pulumi/helper/readme.md)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/rclone/logo-50x.png">](https://rclone.org/)                        | `rclone`      | rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Yandex Files                                                                                                                                                  | [readme](https://github.com/benallfree/gobot/tree/main/src/plugins/rclone/helper/readme.md)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/weaviate/logo-50x.png">](https://weaviate.io)                      | `weaviate`    | Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering with the fault-tolerance and scalability of a cloud-native database, all accessible through GraphQL, REST, and various language clients. | [readme](https://github.com/benallfree/gobot/tree/main/src/plugins/weaviate/helper/readme.md)    |

## Why?

If you are writing a nodejs application that depends upon binaries being present (like [PocketHost](https://github.com/pockethost/pockethost) does), you can add this package as a dependency and execute the binary via CLI or programmatically. This package will make sure your desired external binaries are always available.

If you just want to grab a binary quickly for your own use, `npx gobot@latest <app>` is quite a bit easier than manually downloading zips and installing binaries in shell paths. Gobot handles it all for you effortlessly.

## Technical Notes

### Repository API Rate Limits

When you run an app, Gobot may periodically hits repository REST APIs to query for new releases. This may, at times, lead to hitting API rate limits.

#### Github API

If you are hitting Github API rate limits, you may supply a `GITHUB_TOKEN` environment variable. More information in the [manual](https://cli.github.com/manual/gh_help_environment)

## Adding your app to the Gobot registry

We want to add native support for lots of binary apps!

If you use publish statically linked binary releases on github, you are already 98% compatible with Gobot. In fact, Gobot may already know how to work with it.

Test it out by running `npx gobot <user>/<repo> --help` (example: `gobot pocketbase/pocketbase --help` for the [https://github.com/pocketbase/pocketbase](https://github.com/pocketbase/pocketbase) project).

Make sure your release name follows these rules:

- Ends in `.zip`, `.tgz`, or `.tar.gz`
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

