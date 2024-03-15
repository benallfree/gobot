![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.14/assets/gobot-banner-300x.png)

# `gobot-AdGuardHome`

## `AdGuardHome` as an npm package

This is an optional [Gobot](https://github.com/benallfree/gobot) helper used when you want [AdGuardHome](https://adguard.com/adguard-home.html) to be a dependency in your project.

With it, you can ensure that `AdGuardHome` is always installed and available to your application, in the specific version (or range) you require.

`AdGuardHome` can also be surfaced as a CLI alias by installing this package globally.

## Usage

**Basic version locking**

Install `gobot` and `gobot-AdGuardHome`:

```bash
npm i gobot gobot-AdGuardHome
```

Then, use Gobot normally:

```js
import { gobot } from 'gobot'

/**
 * With `gobot-AdGuardHome present, Gobot will default
 * to the `AdGuardHome` version corresponding to
 * `package.version`
 */
gobot(`AdGuardHome`).run([`--version])
```

**Locking to a specific version**

The `gobot-AdGuardHome` package version always mirrors the underlying `AdGuardHome` version:

```bash
npm i gobot-AdGuardHome@0.108.0-b.53
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `AdGuardHome` even though `gobot-AdGuardHome` is installed.

```js
// Run a specific version (override)
gobot(`AdGuardHome`, { version: `0.19.4` }).run([`--version`])

// Or the latest version (override)
gobot(`AdGuardHome`, { version: `*` }).run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-AdGuardHome` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-AdGuardHome
AdGuardHome --help

# Upgrade to  @latest or any version
npm i -g gobot-AdGuardHome@latest
```

For more information, see [Gobot's full documentation](https://github.com/benallfree/gobot).

## How package versioning works

`gobot-AdGuardHome` is designed to work with any future version of `gobot`.

The published versions of this package mirror the underlying versions of `AdGuardHome`. That means it is not possible to release updates to this package until/unless the underlying `AdGuardHome` project also releases a new version.



## Known Versions

Gobot knows about 160 releases of `AdGuardHome`:

0.108.0-b.53, 0.108.0-b.52, 0.108.0-b.51, 0.108.0-b.50, 0.108.0-b.49, 0.108.0-b.48, 0.108.0-b.47, 0.108.0-b.46, 0.108.0-b.45, 0.108.0-b.44, 0.108.0-b.43, 0.108.0-b.42, 0.108.0-b.41, 0.108.0-b.40, 0.108.0-b.39, 0.108.0-b.38, 0.108.0-b.37, 0.108.0-b.36, 0.108.0-b.35, 0.108.0-b.34, 0.108.0-b.33, 0.108.0-b.32, 0.108.0-b.31, 0.108.0-b.30, 0.108.0-b.29, 0.108.0-b.28, 0.108.0-b.27, 0.108.0-b.26, 0.108.0-b.25, 0.108.0-b.24, 0.108.0-b.23, 0.108.0-b.22, 0.108.0-b.21, 0.108.0-b.20, 0.108.0-b.19, 0.108.0-b.18, 0.108.0-b.17, 0.108.0-b.16, 0.108.0-b.15, 0.108.0-b.14, 0.108.0-b.13, 0.108.0-b.12, 0.108.0-b.11, 0.108.0-b.10, 0.108.0-b.9, 0.108.0-b.8, 0.108.0-b.7, 0.108.0-b.6, 0.108.0-b.5, 0.108.0-b.4, 0.108.0-b.3, 0.108.0-b.2, 0.108.0-b.1, 0.107.45, 0.107.44, 0.107.43, 0.107.42, 0.107.41, 0.107.40, 0.107.39, 0.107.38, 0.107.37, 0.107.36, 0.107.35, 0.107.34, 0.107.33, 0.107.32, 0.107.31, 0.107.30, 0.107.29, 0.107.28, 0.107.27, 0.107.26, 0.107.25, 0.107.24, 0.107.23, 0.107.22, 0.107.21, 0.107.20, 0.107.19, 0.107.18, 0.107.17, 0.107.16, 0.107.15, 0.107.14, 0.107.13, 0.107.12, 0.107.11, 0.107.10, 0.107.9, 0.107.8, 0.107.7, 0.107.6, 0.107.5, 0.107.4, 0.107.3, 0.107.2, 0.107.1, 0.107.0, 0.107.0-b.17, 0.107.0-b.16, 0.107.0-b.15, 0.107.0-b.14, 0.107.0-b.13, 0.107.0-b.12, 0.107.0-b.11, 0.107.0-b.10, 0.107.0-b.9, 0.107.0-b.8, 0.107.0-b.7, 0.107.0-b.6, 0.107.0-b.5, 0.107.0-b.4, 0.107.0-b.3, 0.107.0-b.2, 0.107.0-b.1, 0.106.3, 0.106.2, 0.106.1, 0.106.0, 0.106.0-b.4, 0.106.0-b.3, 0.106.0-b.2, 0.106.0-b.1, 0.105.2, 0.105.1, 0.105.0, 0.105.0-beta.4, 0.105.0-beta.3, 0.105.0-beta.2, 0.105.0-beta.1, 0.104.3, 0.104.1, 0.104.0, 0.104.0-beta3, 0.104.0-beta2, 0.104.0-beta1, 0.103.3, 0.103.2, 0.103.1, 0.103.0-beta3, 0.103.0-beta2, 0.103.0-beta1, 0.102.0, 0.101.0, 0.100.9, 0.100.8, 0.100.7, 0.100.6, 0.100.5, 0.100.4, 0.100.2, 0.99.3, 0.99.2, 0.99.1, 0.99.0, 0.98.1, 0.98.0, 0.97.1, 0.97.0

## Sample project

View the [AdGuardHome sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.14/src/apps/AdGuardHome/sample-project) on github.

## Try Gobot's other apps

Gobot has a growing list of apps. Have you tried them all?

| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                                              | `<app>`       | What is it?                                                                                                                                                                                                                                                                              |                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.14/src/apps/act/logo-50x.png">](https://github.com/nektos/act)                 | `act`         | Run your GitHub Actions locally 🚀                                                                                                                                                                                                                                                       | [readme](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.14/src/apps/act/helper/readme.md)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.14/src/apps/AdGuardHome/logo-50x.png">](https://adguard.com/adguard-home.html) | `AdGuardHome` | Network-wide ads & trackers blocking DNS server                                                                                                                                                                                                                                          | [readme](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.14/src/apps/AdGuardHome/helper/readme.md) |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.14/src/apps/caddy/logo-50x.png">](https://caddyserver.com/)                    | `caddy`       | Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS                                                                                                                                                                                                            | [readme](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.14/src/apps/caddy/helper/readme.md)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.14/src/apps/mc/logo-50x.png">](https://min.io)                                 | `mc`          | The Object Store for AI Data Infrastructure (client)                                                                                                                                                                                                                                     | [readme](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.14/src/apps/mc/helper/readme.md)          |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.14/src/apps/minio/logo-50x.png">](https://min.io)                              | `minio`       | The Object Store for AI Data Infrastructure (server)                                                                                                                                                                                                                                     | [readme](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.14/src/apps/minio/helper/readme.md)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.14/src/apps/pocketbase/logo-50x.png">](https://pocketbase.io)                  | `pocketbase`  | Open Source realtime backend in 1 file                                                                                                                                                                                                                                                   | [readme](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.14/src/apps/pocketbase/helper/readme.md)  |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.14/src/apps/pulumi/logo-50x.png">](https://www.pulumi.com)                     | `pulumi`      | Pulumi - Infrastructure as Code in any programming language. Build infrastructure intuitively on any cloud using familiar languages 🚀                                                                                                                                                   | [readme](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.14/src/apps/pulumi/helper/readme.md)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.14/src/apps/rclone/logo-50x.png">](https://rclone.org/)                        | `rclone`      | rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Yandex Files                                                                                                                                                  | [readme](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.14/src/apps/rclone/helper/readme.md)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.14/src/apps/weaviate/logo-50x.png">](https://weaviate.io)                      | `weaviate`    | Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering with the fault-tolerance and scalability of a cloud-native database, all accessible through GraphQL, REST, and various language clients. | [readme](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.14/src/apps/weaviate/helper/readme.md)    |

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

