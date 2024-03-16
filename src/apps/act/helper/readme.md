![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.18/assets/gobot-banner-300x.png)

## `act` for npm

This package allows you to use [Act](https://github.com/nektos/act) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Basic version locking**

Install `gobot-act`:

```bash
npm i gobot-act
```

With `gobot-act` present, Gobot will default to the `act` version corresponding to the `gobot-act` version you installed.

```js
import { gobot } from 'gobot'
gobot(`act`).run([`--version`])
```

**Locking to a specific version**

The `gobot-act` package version always mirrors the underlying `act` [version](#known-versions):

```bash
npm i gobot-act@0.2.60
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `act` even though `gobot-act` is installed.

```js
// Run a specific version (override)
gobot(`act`, { version: `0.19.4` }).run([`--version`])

// Or the latest version (override)
gobot(`act`, { version: `*` }).run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
gobot(`act`, {
  env: process.env, // This is not always necessary, but some apps do need it
}).run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-act` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-act
act --help

# Upgrade to  @latest or any version
npm i -g gobot-act@latest
```

For more information, see [Gobot's full documentation](https://github.com/benallfree/gobot).

## How package versioning works

`gobot-act` is designed to work with any future version of Gobot.

The published versions of this package mirror the underlying versions of `act`. That means it is not possible to release updates to this package until/unless the underlying `act` project also releases a new version.

## Quirks

### `$HOME` required

`act` needs the `HOME` environment variable defined. Gobot does NOT automatically forward environment variables, so use this:

```js
gobot(`act`, {
  env: process.env,
}).run([`--help`])
```


## Known Versions

Gobot knows about 68 releases of `act`:

0.2.60, 0.2.59, 0.2.58, 0.2.57, 0.2.56, 0.2.55, 0.2.54, 0.2.53, 0.2.52, 0.2.51, 0.2.50, 0.2.49, 0.2.48, 0.2.46, 0.2.45, 0.2.44, 0.2.43, 0.2.42, 0.2.41, 0.2.40, 0.2.39, 0.2.38, 0.2.37, 0.2.36, 0.2.35, 0.2.34, 0.2.33, 0.2.32, 0.2.31, 0.2.30, 0.2.29, 0.2.28, 0.2.27, 0.2.26, 0.2.25, 0.2.24, 0.2.23, 0.2.22, 0.2.21, 0.2.20, 0.2.19, 0.2.18, 0.2.17, 0.2.16, 0.2.15, 0.2.14, 0.2.13, 0.2.12, 0.2.10, 0.2.9, 0.2.8, 0.2.7, 0.2.6, 0.2.5, 0.2.4, 0.2.3, 0.2.2, 0.2.1, 0.2.0, 0.1.3, 0.1.2, 0.1.1, 0.1.0, 0.0.5, 0.0.4, 0.0.3, 0.0.2, 0.0.1

## Sample project

View the [Act sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.18/src/apps/act/sample-project) on github.

## Try Gobot's other apps

Gobot has a growing list of apps. Have you tried them all?

| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                                              | `<app>`       | What is it?                                                                                                                                                                                                                                                                              |                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.18/src/apps/act/logo-50x.png">](https://github.com/nektos/act)                 | `act`         | Run your GitHub Actions locally 🚀                                                                                                                                                                                                                                                       | [readme](https://www.npmjs.com/package/gobot-act)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.18/src/apps/AdGuardHome/logo-50x.png">](https://adguard.com/adguard-home.html) | `AdGuardHome` | Network-wide ads & trackers blocking DNS server                                                                                                                                                                                                                                          | [readme](https://www.npmjs.com/package/gobot-adguardhome) |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.18/src/apps/caddy/logo-50x.png">](https://caddyserver.com/)                    | `caddy`       | Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS                                                                                                                                                                                                            | [readme](https://www.npmjs.com/package/gobot-caddy)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.18/src/apps/mc/logo-50x.png">](https://min.io)                                 | `mc`          | The Object Store for AI Data Infrastructure (client)                                                                                                                                                                                                                                     | [readme](https://www.npmjs.com/package/gobot-mc)          |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.18/src/apps/minio/logo-50x.png">](https://min.io)                              | `minio`       | The Object Store for AI Data Infrastructure (server)                                                                                                                                                                                                                                     | [readme](https://www.npmjs.com/package/gobot-minio)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.18/src/apps/pocketbase/logo-50x.png">](https://pocketbase.io)                  | `pocketbase`  | Open Source realtime backend in 1 file                                                                                                                                                                                                                                                   | [readme](https://www.npmjs.com/package/gobot-pocketbase)  |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.18/src/apps/pulumi/logo-50x.png">](https://www.pulumi.com)                     | `pulumi`      | Pulumi - Infrastructure as Code in any programming language. Build infrastructure intuitively on any cloud using familiar languages 🚀                                                                                                                                                   | [readme](https://www.npmjs.com/package/gobot-pulumi)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.18/src/apps/rclone/logo-50x.png">](https://rclone.org/)                        | `rclone`      | rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Yandex Files                                                                                                                                                  | [readme](https://www.npmjs.com/package/gobot-rclone)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.18/src/apps/weaviate/logo-50x.png">](https://weaviate.io)                      | `weaviate`    | Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering with the fault-tolerance and scalability of a cloud-native database, all accessible through GraphQL, REST, and various language clients. | [readme](https://www.npmjs.com/package/gobot-weaviate)    |

## Why?

If you are writing a nodejs application that depends upon binaries being present (like [PocketHost](https://github.com/pockethost/pockethost) does), you can add this package as a dependency and execute the binary via CLI or programmatically. This package will make sure your desired external binaries are always available.

If you just want to grab a binary quickly for your own use, `npx gobot@latest <app>` is quite a bit easier than manually downloading zips and installing binaries in shell paths. Gobot handles it all for you effortlessly.

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

