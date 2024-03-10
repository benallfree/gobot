![Gobot](https://raw.githubusercontent.com/benallfree/gobot/feat/plugin-placeholders/assets/gobot-banner-300x.png)

# Mc plugin for Gobot

_Install, run, and manage `mc` as an npm package with CLI and API interfaces._

## What is Mc?

![Gobot](https://raw.githubusercontent.com/benallfree/gobot/feat/plugin-placeholders/src/plugins/mc/logo-50x.png)

The Object Store for AI Data Infrastructure (client)

## Quickstart

This plugin provides [Mc](https://min.io) support to [Gobot](https://github.com/benallfree/gobot). It is built in to Gobot.

Straight from npx:

```bash
npx gobot mc --help
```

Or install globally:

```bash
npm i -g gobot
gobot mc --help
```

Or use the `gobot-mc` helper package to get a CLI bin alias (the main Gobot package omits specific bin aliases to avoid CLI name pollution):

```bash
npm i -g gobot-mc
mc --help

# --g- options work too
mc --g-vvv --help
```

Or programmatically:

```bash
npm i gobot-mc
npx gobot init mc
```

```js
// index.mjs
import { gobot } from 'gobot'

gobot(`mc`, { env: process.env }).run(["--help"])
```

## Introduction

Gobot downloads, installs, and runs statically-linked binaries while managing versions, OS's, and architectures. It has a CLI and a programmatic API.

With Gobot, external binaries become project dependencies just like other npm packages.

## CLI

> ### `gobot [gobotOptions] <app> [appOptions]`

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
# Show help for mc
gobot mc --help

# Run in gobot debugging mode
gobot --g-debug mc --help

# Run a specific  version
gobot --g-version="2024-03-07T00-31-49Z" mc --help

# Force gobot to dump cache and refresh  tags and binaries
gobot --g-refresh 
```

## API

[Full API Docs](https://github.com/pockethost/gobot/blob/feat/plugin-placeholders/docs/modules.md)

The real power of Gobot is that your favorite external binaries can be treated as project dependencies.

Inside your project, use the Gobot helper to add support for `mc`:

```bash
npx gobot init mc
```

The above command will find the latest version of Mc and modify your `package.json` as follows:

```json
{
  "dependencies": {
    "gobot": "latest"
  },
  "gobot": {
    "mc": {
      "version": "2024-03-07T00-31-49Z"
    }
  }
}
```

Now you have made `mc` a dependency of your package. When your package is installed, Gobot will dynamically select the correct binary build for the user's OS and architecture, in the version you specified, and store it. You can run it easily from within your code, or externally using CLI tools as shown above.

```js
// index.mjs
import { gobot } from 'gobot'

gobot(`mc`, { env: process.env }).run(["--help"])
```

Here are some helpful `package.json` scripts to consider:

```json
  "scripts": {
    "serve": "node ./index.mjs",
    "mc": "gobot mc"
  }
```

## Notes about `Mc` support

This section is empty, which means this plugin has no special notes.

## Sample project

View the [Mc sample project](https://github.com/benallfree/gobot/tree/feat/plugin-placeholders/src/plugins/mc/sample-project) on github.

## Supported Apps

Gobot has a growing list of apps. Have you tried them all?

| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                                                          | `<app>`       | What is it?                                                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/feat/plugin-placeholders/src/plugins/act/logo-50x.png">](https://github.com/nektos/act)                 | `act`         | Run your GitHub Actions locally 🚀<br/>[gobot docs](https://github.com/benallfree/gobot/blob/feat/plugin-placeholders/src/plugins/act/readme.md)                                                                                                                                                                                                                                                            | [readme](https://github.com/benallfree/gobot/blob/feat/plugin-placeholders/src/plugins/act/readme.md)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/feat/plugin-placeholders/src/plugins/AdGuardHome/logo-50x.png">](https://adguard.com/adguard-home.html) | `AdGuardHome` | Network-wide ads & trackers blocking DNS server<br/>[gobot docs](https://github.com/benallfree/gobot/blob/feat/plugin-placeholders/src/plugins/AdGuardHome/readme.md)                                                                                                                                                                                                                                       | [readme](https://github.com/benallfree/gobot/blob/feat/plugin-placeholders/src/plugins/AdGuardHome/readme.md) |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/feat/plugin-placeholders/src/plugins/caddy/logo-50x.png">](https://caddyserver.com/)                    | `caddy`       | Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS<br/>[gobot docs](https://github.com/benallfree/gobot/blob/feat/plugin-placeholders/src/plugins/caddy/readme.md)                                                                                                                                                                                                               | [readme](https://github.com/benallfree/gobot/blob/feat/plugin-placeholders/src/plugins/caddy/readme.md)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/feat/plugin-placeholders/src/plugins/mc/logo-50x.png">](https://min.io)                                 | `mc`          | The Object Store for AI Data Infrastructure (client)<br/>[gobot docs](https://github.com/benallfree/gobot/blob/feat/plugin-placeholders/src/plugins/mc/readme.md)                                                                                                                                                                                                                                           | [readme](https://github.com/benallfree/gobot/blob/feat/plugin-placeholders/src/plugins/mc/readme.md)          |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/feat/plugin-placeholders/src/plugins/minio/logo-50x.png">](https://min.io)                              | `minio`       | The Object Store for AI Data Infrastructure (server)<br/>[gobot docs](https://github.com/benallfree/gobot/blob/feat/plugin-placeholders/src/plugins/minio/readme.md)                                                                                                                                                                                                                                        | [readme](https://github.com/benallfree/gobot/blob/feat/plugin-placeholders/src/plugins/minio/readme.md)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/feat/plugin-placeholders/src/plugins/pocketbase/logo-50x.png">](https://pocketbase.io)                  | `pocketbase`  | Open Source realtime backend in 1 file<br/>[gobot docs](https://github.com/benallfree/gobot/blob/feat/plugin-placeholders/src/plugins/pocketbase/readme.md)                                                                                                                                                                                                                                                 | [readme](https://github.com/benallfree/gobot/blob/feat/plugin-placeholders/src/plugins/pocketbase/readme.md)  |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/feat/plugin-placeholders/src/plugins/pulumi/logo-50x.png">](https://www.pulumi.com)                     | `pulumi`      | Pulumi - Infrastructure as Code in any programming language. Build infrastructure intuitively on any cloud using familiar languages 🚀<br/>[gobot docs](https://github.com/benallfree/gobot/blob/feat/plugin-placeholders/src/plugins/pulumi/readme.md)                                                                                                                                                     | [readme](https://github.com/benallfree/gobot/blob/feat/plugin-placeholders/src/plugins/pulumi/readme.md)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/feat/plugin-placeholders/src/plugins/rclone/logo-50x.png">](https://rclone.org/)                        | `rclone`      | rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Yandex Files<br/>[gobot docs](https://github.com/benallfree/gobot/blob/feat/plugin-placeholders/src/plugins/rclone/readme.md)                                                                                                                                                    | [readme](https://github.com/benallfree/gobot/blob/feat/plugin-placeholders/src/plugins/rclone/readme.md)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/feat/plugin-placeholders/src/plugins/weaviate/logo-50x.png">](https://weaviate.io)                      | `weaviate`    | Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering with the fault-tolerance and scalability of a cloud-native database, all accessible through GraphQL, REST, and various language clients.<br/>[gobot docs](https://github.com/benallfree/gobot/blob/feat/plugin-placeholders/src/plugins/weaviate/readme.md) | [readme](https://github.com/benallfree/gobot/blob/feat/plugin-placeholders/src/plugins/weaviate/readme.md)    |

## Why?

If you are writing a nodejs application that depends upon binaries being present (like [PocketHost](https://github.com/pockethost/pockethost) does), you can add this package as a dependency and execute the binary via CLI or programmatically. This package will make sure your desired external binaries are always available.

If you just want to grab a binary quickly for your own use, `npx gobot@latest <app>` is quite a bit easier than manually downloading zips and installing binaries in shell paths. Gobot handles it all for you effortlessly.

## OS X Users

If a Gobot does not run, or one of its apps does not run, it's likely you need to authorize it first. Go to `Security & Privacy` and scroll down to allow the exception.

## Adding your app to the Gobot registry

We want to add native support for lots of binary apps!

If you use publish statically linked binary releases on github, you are already compatible with Gobot. Send us a PR.

Note: [GoReleaser](https://goreleaser.com/) is a great option if you're publish a Go-based project.

## Contributing

We could use help testing and making sure this works across lots of platforms.

To test a build locally:

```bash
pnpm test
```

