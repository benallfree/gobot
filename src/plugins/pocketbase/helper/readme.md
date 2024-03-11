![Gobot](https://raw.githubusercontent.com/benallfree/gobot/main/assets/gobot-banner-300x.png)

# `gobot-pocketbase`

**PocketBase for Gobot**

_Install, run, and manage `pocketbase` as an npm package with CLI and API interfaces._

## Table of Contents

- [What is PocketBase?](#what-is-PocketBase)
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

## What is PocketBase?

![PocketBase](https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/pocketbase/logo-50x.png)
[https://pocketbase.io](https://pocketbase.io)

Open Source realtime backend in 1 file

## What is Gobot?

![Gobot](https://raw.githubusercontent.com/benallfree/gobot/main/assets/gobot-50x50.png)
[https://github.com/benallfree/gobot](https://github.com/benallfree/gobot)

Gobot downloads, installs, and runs statically-linked binaries while managing versions, OS's, and architectures. It has a CLI and a programmatic API.

With Gobot, external binaries become project dependencies just like other npm packages.

## Quickstart

This package provides [PocketBase](https://pocketbase.io) helpers to [Gobot](https://github.com/benallfree/gobot).

Install globally to run from the CLI:

```bash
npm i -g gobot-pocketbase
pocketbase --help
```

When installed as a dependency, you get a `pocketbase()` helper that returns a Gobot instance pre-configured for `pocketbase` using the version npm resolved and installed.

```bash
npm i gobot-pocketbase@0.22.3
```

```js
// index.mjs
import { pocketbase } from 'gobot-pocketbase'

const bot = pocketbase()
bot.run([`--help`])
```

## CLI

> ### `pocketbase [gobotOptions] [appOptions]`

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
# Show help for pocketbase
pocketbase --help

# Run in pocketbase debugging mode
 --g-debug pocketbase --help

# Run a specific version of pocketbase
# Note: this technically works, even though this helper package
# defaults to a specific version.
pocketbase --g-version="0.22.3" --help

# Force Gobot to dump cache and refresh tags and binaries
pocketbase --g-refresh
```

## API

[Full API Docs](https://github.com/benallfree/gobot/tree/main/docs/readme.md)

The real power of Gobot is that your favorite external binaries can be treated as project dependencies with version locking.

Inside your project:

```bash
# Any of these will work
npm i gobot-pocketbase
npm i gobot-pocketbase@latest
npm i gobot-pocketbase@0.22.3
```

Now you have made `pocketbase` a dependency of your package, and you've locked it at a specific version. When you run the app via the Gobot API, Gobot will use a version matching your criteria.

Gobot dynamically selects the correct build for the user's OS and architecture, in the version you specified, and stores it.

```js
// index.mjs
import { pocketbase } from 'gobot-pocketbase'

pocketbase({ env: process.env }).run(['--help'])
```

Reminder: the `pocketbase` executable alias can also be called from your npm scripts, and it will always use the version in the lockfile.

### Where is `data.db`?

By default, `pocketbase` places `data.db` where the executable resides. However, this is [inconsistent across platforms](https://github.com/pocketbase/pocketbase/issues/4361). `bash`/`zsh` will alias `pocketbase` so it appears that the executable launched from the current directory. Windows shell uses the physical path to the executable.

To create consistency, `pb_data/data.db` will be created in the current directory.

If you want to specify your own `data.db` location, use `--dir=path/to/pb_data` to ensure `data.db` is created where you desire.

```bash
gobot pocketbase --dir=/path/to/pb_data
```

### Upgrading PocketBase

The `--upgrade` switch is intentionally blocked. Since Gobot always grabs the latest version of PocketBase by default, or the version you specify, the `--upgrade` switch would overwrite Gobot's cached binary and create cache inconsistency.

Use `gobot --g-use-version=x.y.z` from the CLI or `{ version: 'x.y.z' }` from the API to use a specific PocketBase version or semver range.


### OS X Users

If a Gobot app does not run it's likely you need to authorize it first. Go to `Security & Privacy` and scroll down to allow the exception.

### Known Versions

Gobot knows about 126 releases of `pocketbase`:

0.22.3, 0.22.2, 0.22.1, 0.22.0, 0.21.3, 0.21.2, 0.21.1, 0.21.0, 0.20.7, 0.20.6, 0.20.5, 0.20.4, 0.20.3, 0.20.2, 0.20.1, 0.20.0, 0.20.0-rc3, 0.20.0-rc2, 0.20.0-rc, 0.19.4, 0.19.3, 0.19.2, 0.19.1, 0.19.0, 0.18.10, 0.18.9, 0.18.8, 0.18.7, 0.18.6, 0.18.5, 0.18.4, 0.18.3, 0.18.2, 0.18.1, 0.18.0, 0.17.7, 0.17.6, 0.17.5, 0.17.4, 0.17.3, 0.17.2, 0.17.1, 0.17.0, 0.16.10, 0.16.9, 0.16.8, 0.16.7, 0.16.6, 0.16.5, 0.16.4, 0.16.3, 0.16.2, 0.16.1, 0.16.0, 0.15.3, 0.15.2, 0.15.1, 0.15.0, 0.14.5, 0.14.4, 0.14.3, 0.14.2, 0.14.1, 0.14.0, 0.13.4, 0.13.3, 0.13.2, 0.13.1, 0.13.0, 0.12.3, 0.12.2, 0.12.1, 0.12.0, 0.11.4, 0.11.3, 0.11.2, 0.11.1, 0.11.0, 0.10.4, 0.10.3, 0.10.2, 0.10.1, 0.10.0, 0.9.2, 0.9.1, 0.9.0, 0.8.0, 0.8.0-rc4, 0.8.0-rc3, 0.8.0-rc2, 0.8.0-rc1, 0.7.10, 0.7.9, 0.7.8, 0.7.7, 0.7.6, 0.7.5, 0.7.4, 0.7.3, 0.7.2, 0.7.1, 0.7.0, 0.6.0, 0.5.2, 0.5.1, 0.5.0, 0.4.2, 0.4.1, 0.4.0, 0.3.4, 0.3.3, 0.3.2, 0.3.1, 0.3.0, 0.2.8, 0.2.7, 0.2.6, 0.2.5, 0.2.4, 0.2.3, 0.2.2, 0.2.1, 0.2.0, 0.1.2, 0.1.1, 0.1.0

## Sample project

View the [PocketBase sample project](https://github.com/benallfree/gobot/tree/main/src/plugins/pocketbase/sample-project) on github.

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

