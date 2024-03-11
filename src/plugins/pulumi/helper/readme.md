![Gobot](https://raw.githubusercontent.com/benallfree/gobot/main/assets/gobot-banner-300x.png)

# `gobot-pulumi`

**Pulumi for Gobot**

_Install, run, and manage `pulumi` as an npm package with CLI and API interfaces._

## Table of Contents

- [What is Pulumi?](#what-is-Pulumi)
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

## What is Pulumi?

![Pulumi](https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/pulumi/logo-50x.png)
[https://www.pulumi.com](https://www.pulumi.com)

Pulumi - Infrastructure as Code in any programming language. Build infrastructure intuitively on any cloud using familiar languages 🚀

## What is Gobot?

![Gobot](https://raw.githubusercontent.com/benallfree/gobot/main/assets/gobot-50x50.png)
[https://github.com/benallfree/gobot](https://github.com/benallfree/gobot)

Gobot downloads, installs, and runs statically-linked binaries while managing versions, OS's, and architectures. It has a CLI and a programmatic API.

With Gobot, external binaries become project dependencies just like other npm packages.

## Quickstart

This package provides [Pulumi](https://www.pulumi.com) helpers to [Gobot](https://github.com/benallfree/gobot).

Install globally to run from the CLI:

```bash
npm i -g gobot-pulumi
pulumi --help
```

When installed as a dependency, you get a `pulumi()` helper that returns a Gobot instance pre-configured for `pulumi` using the version npm resolved and installed.

```bash
npm i gobot-pulumi@3.109.0
```

```js
// index.mjs
import { pulumi } from 'gobot-pulumi'

const bot = pulumi()
bot.run([`--help`])
```

## CLI

> ### `pulumi [gobotOptions] [appOptions]`

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
# Show help for pulumi
pulumi --help

# Run in pulumi debugging mode
 --g-debug pulumi --help

# Run a specific version of pulumi
# Note: this technically works, even though this helper package
# defaults to a specific version.
pulumi --g-version="0.22.3" --help

# Force Gobot to dump cache and refresh tags and binaries
pulumi --g-refresh
```

## API

[Full API Docs](https://github.com/pockethost/gobot/blob/main/docs/readme.md)

The real power of Gobot is that your favorite external binaries can be treated as project dependencies with version locking.

Inside your project:

```bash
# Any of these will work
npm i gobot-pulumi
npm i gobot-pulumi@latest
npm i gobot-pulumi@3.109.0
```

Now you have made `pulumi` a dependency of your package, and you've locked it at a specific version. When you run the app via the Gobot API, Gobot will use a version matching your criteria.

Gobot dynamically selects the correct build for the user's OS and architecture, in the version you specified, and stores it.

```js
// index.mjs
import { pulumi } from 'gobot-pulumi'

pulumi({ env: process.env }).run(['--help'])
```

Reminder: the `pulumi` executable alias can also be called from your npm scripts, and it will always use the version in the lockfile.



### OS X Users

If a Gobot app does not run it's likely you need to authorize it first. Go to `Security & Privacy` and scroll down to allow the exception.

### Known Versions

Gobot knows about 229 releases of `pulumi`:

3.109.0, 3.108.1, 3.108.0, 3.107.0, 3.106.0, 3.105.0, 3.104.2, 3.104.1, 3.104.0, 3.103.1, 3.103.0, 3.102.0, 3.101.1, 3.101.0, 3.100.0, 3.99.0, 3.98.0, 3.97.0, 3.96.2, 3.96.1, 3.96.0, 3.95.0, 3.94.2, 3.94.1, 3.94.0, 3.93.0, 3.92.0, 3.91.1, 3.91.0, 3.90.1, 3.90.0, 3.89.0, 3.88.1, 3.88.0, 3.87.0, 3.86.0, 3.85.0, 3.84.0, 3.83.0, 3.82.1, 3.82.0, 3.81.0, 3.80.0, 3.79.0, 3.78.1, 3.78.0, 3.77.1, 3.77.0, 3.76.1, 3.76.0, 3.75.0, 3.74.0, 3.73.0, 3.72.2, 3.72.1, 3.72.0, 3.71.0, 3.70.0, 3.69.0, 3.68.0, 3.67.1, 3.67.0, 3.66.0, 3.65.1, 3.65.0, 3.64.0, 3.63.0, 3.62.0, 3.61.1, 3.61.0, 3.60.1, 3.60.0, 3.59.1, 3.59.0, 3.58.0, 3.57.1, 3.57.0, 3.56.0, 3.55.0, 3.54.0, 3.53.1, 3.53.0, 3.52.1, 3.52.0, 3.51.1, 3.51.0, 3.50.2, 3.50.1, 3.50.0, 3.49.0, 3.48.0, 3.47.2, 3.47.1, 3.46.1, 3.46.0, 3.45.0, 3.44.3, 3.44.2, 3.44.1, 3.44.0, 3.43.1, 3.43.0, 3.42.0, 3.41.1, 3.40.2, 3.40.1, 3.40.0, 3.39.4, 3.39.3, 3.39.2, 3.39.1, 3.39.0, 3.38.0, 3.37.2, 3.37.1, 3.37.0, 3.36.0, 3.35.3, 3.35.2, 3.35.1, 3.35.0, 3.34.1, 3.34.0, 3.33.2, 3.33.1, 3.33.0, 3.32.1, 3.32.0, 3.31.1, 3.31.0, 3.30.0, 3.29.1, 3.28.0, 3.27.0, 3.26.1, 3.26.0, 3.25.1, 3.25.0, 3.24.1, 3.23.2, 3.23.1, 3.23.0, 3.22.1, 3.22.0, 3.21.1, 3.21.0, 3.20.0, 3.19.0, 3.18.1, 3.18.0, 3.17.1, 3.17.0, 3.16.0, 3.15.0, 3.14.0, 3.13.2, 3.13.1, 3.13.0, 3.12.0, 3.11.0, 3.10.3, 3.10.2, 3.10.1, 3.10.0, 3.9.1, 3.9.0, 3.8.0, 3.7.1, 3.7.0, 3.6.1, 3.6.0, 3.5.1, 3.4.0, 3.3.1, 3.3.0, 3.2.1, 3.2.0, 3.1.0, 3.0.0, 3.0.0-rc.1, 3.0.0-beta.2, 3.0.0-beta.1, 2.25.2, 2.25.1, 2.25.0, 2.24.1, 2.24.0, 2.23.2, 2.23.1, 2.23.0, 2.22.0, 2.21.2, 2.21.1, 2.21.0, 2.20.0, 2.19.0, 2.18.2, 2.18.1, 2.18.0, 2.17.2, 2.17.1, 2.17.0, 2.16.2, 2.16.1, 2.16.0, 2.15.6, 2.15.5, 2.15.4, 2.15.3, 2.15.2, 2.15.1, 2.15.0, 2.14.0, 2.13.2, 2.13.1, 2.13.0, 2.12.1, 2.12.0, 2.11.0, 2.10.1, 2.9.2, 2.8.2, 2.8.0, 2.7.1, 2.7.0, 2.5.0, 0.8.3, 0.8.2, 0.8.1

## Sample project

View the [Pulumi sample project](https://github.com/benallfree/gobot/tree/main/src/plugins/pulumi/sample-project) on github.

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

