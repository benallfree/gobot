![Gobot](https://raw.githubusercontent.com/benallfree/gobot/main/assets/gobot-banner-300x.png)

# `gobot-caddy`

**Caddy for Gobot**

_Install, run, and manage `caddy` as an npm package with CLI and API interfaces._

## Table of Contents

- [What is Caddy?](#what-is-Caddy)
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

## What is Caddy?

![Caddy](https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/caddy/logo-50x.png)
[https://caddyserver.com/](https://caddyserver.com/)

Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS

## What is Gobot?

![Gobot](https://raw.githubusercontent.com/benallfree/gobot/main/assets/gobot-50x50.png)
[https://github.com/benallfree/gobot](https://github.com/benallfree/gobot)

Gobot downloads, installs, and runs statically-linked binaries while managing versions, OS's, and architectures. It has a CLI and a programmatic API.

With Gobot, external binaries become project dependencies just like other npm packages.

## Quickstart

This package provides [Caddy](https://caddyserver.com/) helpers to [Gobot](https://github.com/benallfree/gobot).

Install globally to run from the CLI:

```bash
npm i -g gobot-caddy
caddy --help
```

When installed as a dependency, you get a `caddy()` helper that returns a Gobot instance pre-configured for `caddy` using the version npm resolved and installed.

```bash
npm i gobot-caddy@2.7.6
```

```js
// index.mjs
import { caddy } from 'gobot-caddy'

const bot = caddy()
bot.run([`--help`])
```

## CLI

> ### `caddy [gobotOptions] [appOptions]`

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
# Show help for caddy
caddy --help

# Run in caddy debugging mode
 --g-debug caddy --help

# Run a specific version of caddy
# Note: this technically works, even though this helper package
# defaults to a specific version.
caddy --g-version="0.22.3" --help

# Force Gobot to dump cache and refresh tags and binaries
caddy --g-refresh
```

## API

[Full API Docs](https://github.com/pockethost/gobot/blob/main/docs/readme.md)

The real power of Gobot is that your favorite external binaries can be treated as project dependencies with version locking.

Inside your project:

```bash
# Any of these will work
npm i gobot-caddy
npm i gobot-caddy@latest
npm i gobot-caddy@2.7.6
```

Now you have made `caddy` a dependency of your package, and you've locked it at a specific version. When you run the app via the Gobot API, Gobot will use a version matching your criteria.

Gobot dynamically selects the correct build for the user's OS and architecture, in the version you specified, and stores it.

```js
// index.mjs
import { caddy } from 'gobot-caddy'

caddy({ env: process.env }).run(['--help'])
```

Reminder: the `caddy` executable alias can also be called from your npm scripts, and it will always use the version in the lockfile.



### OS X Users

If a Gobot app does not run it's likely you need to authorize it first. Go to `Security & Privacy` and scroll down to allow the exception.

### Known Versions

Gobot knows about 112 releases of `caddy`:

2.7.6, 2.7.5, 2.7.4, 2.7.3, 2.7.2, 2.7.1, 2.7.0, 2.7.0-beta.2, 2.7.0-beta.1, 2.6.4, 2.6.3, 2.6.2, 2.6.1, 2.6.0, 2.6.0-beta.5, 2.6.0-beta.3, 2.5.2, 2.5.1, 2.5.0, 2.5.0-rc.1, 2.5.0-beta.1, 2.4.6, 2.4.5, 2.4.4, 2.4.3, 2.4.2, 2.4.1, 2.4.0, 2.4.0-rc.1, 2.4.0-beta.2, 2.4.0-beta.1, 2.3.0, 2.3.0-rc.1, 2.3.0-beta.1, 2.2.1, 2.2.0, 2.2.0-rc.3, 2.2.0-rc.2, 2.2.0-rc.1, 2.1.1, 2.1.0, 2.1.0-beta.1, 2.0.0, 2.0.0-rc.3, 2.0.0-rc.2, 2.0.0-rc.1, 2.0.0-beta9, 2.0.0-beta8, 2.0.0-beta7, 2.0.0-beta6, 2.0.0-beta4, 2.0.0-beta3, 2.0.0-beta2, 2.0.0-beta12, 2.0.0-beta11, 2.0.0-beta10, 2.0.0-beta1, 2.0.0-beta.20, 2.0.0-beta.19, 2.0.0-beta.18, 2.0.0-beta.17, 2.0.0-beta.15, 2.0.0-beta.14, 2.0.0-beta.13, 1.0.4, 1.0.3, 1.0.2, 1.0.1, 1.0.0, 1.0.0-beta2, 1.0.0-beta1, 0.11.5, 0.11.4, 0.11.3, 0.11.2, 0.11.1, 0.11.0, 0.10.14, 0.10.13, 0.10.12, 0.10.11, 0.10.10, 0.10.9, 0.10.8, 0.10.7, 0.10.6, 0.10.5, 0.10.4, 0.10.3, 0.10.2, 0.10.1, 0.10.0, 0.9.5, 0.9.4, 0.9.3, 0.9.2, 0.9.1, 0.9.0, 0.8.3, 0.8.2, 0.8.1, 0.8.0, 0.7.6, 0.7.5, 0.7.4, 0.7.3, 0.7.2, 0.7.1, 0.7.0, 0.6.0, 0.5.1, 0.5.0

## Sample project

View the [Caddy sample project](https://github.com/benallfree/gobot/tree/main/src/plugins/caddy/sample-project) on github.

## Try Gobot's other apps

Gobot has a growing list of apps. Have you tried them all?

| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                                      | `<app>`       | What is it?                                                                                                                                                                                                                                                                              |                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/act/logo-50x.png">](https://github.com/nektos/act)                 | `act`         | Run your GitHub Actions locally 🚀                                                                                                                                                                                                                                                       | [readme](https://github.com/benallfree/gobot/blob/main/src/plugins/act/helper/readme.md)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/AdGuardHome/logo-50x.png">](https://adguard.com/adguard-home.html) | `AdGuardHome` | Network-wide ads & trackers blocking DNS server                                                                                                                                                                                                                                          | [readme](https://github.com/benallfree/gobot/blob/main/src/plugins/AdGuardHome/helper/readme.md) |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/caddy/logo-50x.png">](https://caddyserver.com/)                    | `caddy`       | Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS                                                                                                                                                                                                            | [readme](https://github.com/benallfree/gobot/blob/main/src/plugins/caddy/helper/readme.md)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/mc/logo-50x.png">](https://min.io)                                 | `mc`          | The Object Store for AI Data Infrastructure (client)                                                                                                                                                                                                                                     | [readme](https://github.com/benallfree/gobot/blob/main/src/plugins/mc/helper/readme.md)          |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/minio/logo-50x.png">](https://min.io)                              | `minio`       | The Object Store for AI Data Infrastructure (server)                                                                                                                                                                                                                                     | [readme](https://github.com/benallfree/gobot/blob/main/src/plugins/minio/helper/readme.md)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/pocketbase/logo-50x.png">](https://pocketbase.io)                  | `pocketbase`  | Open Source realtime backend in 1 file                                                                                                                                                                                                                                                   | [readme](https://github.com/benallfree/gobot/blob/main/src/plugins/pocketbase/helper/readme.md)  |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/pulumi/logo-50x.png">](https://www.pulumi.com)                     | `pulumi`      | Pulumi - Infrastructure as Code in any programming language. Build infrastructure intuitively on any cloud using familiar languages 🚀                                                                                                                                                   | [readme](https://github.com/benallfree/gobot/blob/main/src/plugins/pulumi/helper/readme.md)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/rclone/logo-50x.png">](https://rclone.org/)                        | `rclone`      | rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Yandex Files                                                                                                                                                  | [readme](https://github.com/benallfree/gobot/blob/main/src/plugins/rclone/helper/readme.md)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/weaviate/logo-50x.png">](https://weaviate.io)                      | `weaviate`    | Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering with the fault-tolerance and scalability of a cloud-native database, all accessible through GraphQL, REST, and various language clients. | [readme](https://github.com/benallfree/gobot/blob/main/src/plugins/weaviate/helper/readme.md)    |

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

