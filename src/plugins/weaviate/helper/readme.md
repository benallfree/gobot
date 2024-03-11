![Gobot](https://raw.githubusercontent.com/benallfree/gobot/main/assets/gobot-banner-300x.png)

# `gobot-weaviate`

**Weaviate for Gobot**

_Install, run, and manage `weaviate` as an npm package with CLI and API interfaces._

## Table of Contents

- [What is Weaviate?](#what-is-Weaviate)
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

## What is Weaviate?

![Weaviate](https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/weaviate/logo-50x.png)
[https://weaviate.io](https://weaviate.io)

Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering with the fault-tolerance and scalability of a cloud-native database, all accessible through GraphQL, REST, and various language clients.

## What is Gobot?

![Gobot](https://raw.githubusercontent.com/benallfree/gobot/main/assets/gobot-50x50.png)
[https://github.com/benallfree/gobot](https://github.com/benallfree/gobot)

Gobot downloads, installs, and runs statically-linked binaries while managing versions, OS's, and architectures. It has a CLI and a programmatic API.

With Gobot, external binaries become project dependencies just like other npm packages.

## Quickstart

This package provides [Weaviate](https://weaviate.io) helpers to [Gobot](https://github.com/benallfree/gobot).

Install globally to run from the CLI:

```bash
npm i -g gobot-weaviate
weaviate --help
```

When installed as a dependency, you get a `weaviate()` helper that returns a Gobot instance pre-configured for `weaviate` using the version npm resolved and installed.

```bash
npm i gobot-weaviate@1.24.1
```

```js
// index.mjs
import { weaviate } from 'gobot-weaviate'

const bot = weaviate()
bot.run([`--help`])
```

## CLI

> ### `weaviate [gobotOptions] [appOptions]`

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
# Show help for weaviate
weaviate --help

# Run in weaviate debugging mode
 --g-debug weaviate --help

# Run a specific version of weaviate
# Note: this technically works, even though this helper package
# defaults to a specific version.
weaviate --g-version="0.22.3" --help

# Force Gobot to dump cache and refresh tags and binaries
weaviate --g-refresh
```

## API

[Full API Docs](https://github.com/benallfree/gobot/tree/main/docs/readme.md)

The real power of Gobot is that your favorite external binaries can be treated as project dependencies with version locking.

Inside your project:

```bash
# Any of these will work
npm i gobot-weaviate
npm i gobot-weaviate@latest
npm i gobot-weaviate@1.24.1
```

Now you have made `weaviate` a dependency of your package, and you've locked it at a specific version. When you run the app via the Gobot API, Gobot will use a version matching your criteria.

Gobot dynamically selects the correct build for the user's OS and architecture, in the version you specified, and stores it.

```js
// index.mjs
import { weaviate } from 'gobot-weaviate'

weaviate({ env: process.env }).run(['--help'])
```

Reminder: the `weaviate` executable alias can also be called from your npm scripts, and it will always use the version in the lockfile.



### OS X Users

If a Gobot app does not run it's likely you need to authorize it first. Go to `Security & Privacy` and scroll down to allow the exception.

### Known Versions

Gobot knows about 145 releases of `weaviate`:

1.24.1, 1.24.0, 1.24.0-rc.1, 1.24.0-rc.0, 1.23.11, 1.23.10, 1.23.9, 1.23.8, 1.23.7, 1.23.6, 1.23.5, 1.23.4, 1.23.3, 1.23.2, 1.23.1, 1.23.0, 1.23.0-rc.1, 1.23.0-rc.0, 1.22.12, 1.22.11, 1.22.10, 1.22.9, 1.22.8, 1.22.7, 1.22.6, 1.22.5, 1.22.4, 1.22.3, 1.22.2, 1.22.1, 1.22.0, 1.22.0-rc.0, 1.21.9, 1.21.8, 1.21.7, 1.21.6, 1.21.5, 1.21.4, 1.21.3, 1.21.2, 1.21.1, 1.21.0, 1.21.0-rc.1, 1.21.0-rc.0, 1.20.6, 1.20.5, 1.20.4, 1.20.3, 1.20.2, 1.20.1, 1.20.0, 1.19.13, 1.19.12, 1.19.11, 1.19.10, 1.19.9, 1.19.8, 1.19.7, 1.19.6, 1.19.5, 1.19.4, 1.19.3, 1.19.2, 1.19.1, 1.19.0, 1.19.0-beta.1, 1.19.0-beta.0, 1.18.6, 1.18.5, 1.18.4, 1.18.3, 1.18.2, 1.18.1, 1.18.0, 1.18.0-rc.0, 1.17.6, 1.17.5, 1.17.4, 1.17.3, 1.17.2, 1.17.1, 1.17.0, 1.16.9, 1.16.8, 1.16.7, 1.16.6, 1.16.5, 1.16.4, 1.16.3, 1.16.2, 1.16.1, 1.16.0, 1.15.5, 1.15.4, 1.15.3, 1.15.2, 1.15.1, 1.15.0, 1.15.0-alpha1, 1.14.1, 1.14.0, 1.13.2, 1.13.1, 1.13.0, 1.12.2, 1.12.1, 1.12.0, 1.11.0, 1.10.1, 1.10.0, 1.9.1, 1.9.1-rc.0, 1.9.0, 1.8.0, 1.8.0-rc.3, 1.8.0-rc.2, 1.8.0-rc.1, 1.8.0-rc.0, 1.7.2, 1.7.1, 1.7.0, 1.6.0, 1.5.2, 1.5.1, 1.5.0, 1.5.0-rc.3, 1.5.0-rc.2, 1.5.0-rc.1, 1.5.0-rc.0, 1.4.1, 1.4.0, 1.4.0-rc.4, 1.4.0-rc.3, 1.4.0-rc.2, 1.4.0-rc.1, 1.4.0-rc.0, 1.3.0, 1.2.1, 1.2.0, 1.1.0, 1.0.4, 1.0.3, 1.0.2, 1.0.1, 1.0.0

## Sample project

View the [Weaviate sample project](https://github.com/benallfree/gobot/tree/main/src/plugins/weaviate/sample-project) on github.

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

