![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.15/assets/gobot-banner-300x.png)

# `gobot-caddy`

## `caddy` as an npm package

This is an optional [Gobot](https://github.com/benallfree/gobot) helper used when you want [Caddy](https://caddyserver.com/) to be a dependency in your project.

With it, you can ensure that `caddy` is always installed and available to your application, in the specific version (or range) you require.

`caddy` can also be surfaced as a CLI alias by installing this package globally.

## Usage

**Basic version locking**

Install `gobot` and `gobot-caddy`:

```bash
npm i gobot gobot-caddy
```

Then, use Gobot normally:

```js
import { gobot } from 'gobot'

/**
 * With `gobot-caddy present, Gobot will default
 * to the `caddy` version corresponding to
 * `package.version`
 */
gobot(`caddy`).run([`--version])
```

**Locking to a specific version**

The `gobot-caddy` package version always mirrors the underlying `caddy` version:

```bash
npm i gobot-caddy@2.7.6
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `caddy` even though `gobot-caddy` is installed.

```js
// Run a specific version (override)
gobot(`caddy`, { version: `0.19.4` }).run([`--version`])

// Or the latest version (override)
gobot(`caddy`, { version: `*` }).run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-caddy` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-caddy
caddy --help

# Upgrade to  @latest or any version
npm i -g gobot-caddy@latest
```

For more information, see [Gobot's full documentation](https://github.com/benallfree/gobot).

## How package versioning works

`gobot-caddy` is designed to work with any future version of `gobot`.

The published versions of this package mirror the underlying versions of `caddy`. That means it is not possible to release updates to this package until/unless the underlying `caddy` project also releases a new version.



## Known Versions

Gobot knows about 112 releases of `caddy`:

2.7.6, 2.7.5, 2.7.4, 2.7.3, 2.7.2, 2.7.1, 2.7.0, 2.7.0-beta.2, 2.7.0-beta.1, 2.6.4, 2.6.3, 2.6.2, 2.6.1, 2.6.0, 2.6.0-beta.5, 2.6.0-beta.3, 2.5.2, 2.5.1, 2.5.0, 2.5.0-rc.1, 2.5.0-beta.1, 2.4.6, 2.4.5, 2.4.4, 2.4.3, 2.4.2, 2.4.1, 2.4.0, 2.4.0-rc.1, 2.4.0-beta.2, 2.4.0-beta.1, 2.3.0, 2.3.0-rc.1, 2.3.0-beta.1, 2.2.1, 2.2.0, 2.2.0-rc.3, 2.2.0-rc.2, 2.2.0-rc.1, 2.1.1, 2.1.0, 2.1.0-beta.1, 2.0.0, 2.0.0-rc.3, 2.0.0-rc.2, 2.0.0-rc.1, 2.0.0-beta9, 2.0.0-beta8, 2.0.0-beta7, 2.0.0-beta6, 2.0.0-beta4, 2.0.0-beta3, 2.0.0-beta2, 2.0.0-beta12, 2.0.0-beta11, 2.0.0-beta10, 2.0.0-beta1, 2.0.0-beta.20, 2.0.0-beta.19, 2.0.0-beta.18, 2.0.0-beta.17, 2.0.0-beta.15, 2.0.0-beta.14, 2.0.0-beta.13, 1.0.4, 1.0.3, 1.0.2, 1.0.1, 1.0.0, 1.0.0-beta2, 1.0.0-beta1, 0.11.5, 0.11.4, 0.11.3, 0.11.2, 0.11.1, 0.11.0, 0.10.14, 0.10.13, 0.10.12, 0.10.11, 0.10.10, 0.10.9, 0.10.8, 0.10.7, 0.10.6, 0.10.5, 0.10.4, 0.10.3, 0.10.2, 0.10.1, 0.10.0, 0.9.5, 0.9.4, 0.9.3, 0.9.2, 0.9.1, 0.9.0, 0.8.3, 0.8.2, 0.8.1, 0.8.0, 0.7.6, 0.7.5, 0.7.4, 0.7.3, 0.7.2, 0.7.1, 0.7.0, 0.6.0, 0.5.1, 0.5.0

## Sample project

View the [Caddy sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.15/src/apps/caddy/sample-project) on github.

## Try Gobot's other apps

Gobot has a growing list of apps. Have you tried them all?

| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                                              | `<app>`       | What is it?                                                                                                                                                                                                                                                                              |                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.15/src/apps/act/logo-50x.png">](https://github.com/nektos/act)                 | `act`         | Run your GitHub Actions locally 🚀                                                                                                                                                                                                                                                       | [readme](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.15/src/apps/act/helper/readme.md)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.15/src/apps/AdGuardHome/logo-50x.png">](https://adguard.com/adguard-home.html) | `AdGuardHome` | Network-wide ads & trackers blocking DNS server                                                                                                                                                                                                                                          | [readme](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.15/src/apps/AdGuardHome/helper/readme.md) |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.15/src/apps/caddy/logo-50x.png">](https://caddyserver.com/)                    | `caddy`       | Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS                                                                                                                                                                                                            | [readme](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.15/src/apps/caddy/helper/readme.md)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.15/src/apps/mc/logo-50x.png">](https://min.io)                                 | `mc`          | The Object Store for AI Data Infrastructure (client)                                                                                                                                                                                                                                     | [readme](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.15/src/apps/mc/helper/readme.md)          |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.15/src/apps/minio/logo-50x.png">](https://min.io)                              | `minio`       | The Object Store for AI Data Infrastructure (server)                                                                                                                                                                                                                                     | [readme](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.15/src/apps/minio/helper/readme.md)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.15/src/apps/pocketbase/logo-50x.png">](https://pocketbase.io)                  | `pocketbase`  | Open Source realtime backend in 1 file                                                                                                                                                                                                                                                   | [readme](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.15/src/apps/pocketbase/helper/readme.md)  |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.15/src/apps/pulumi/logo-50x.png">](https://www.pulumi.com)                     | `pulumi`      | Pulumi - Infrastructure as Code in any programming language. Build infrastructure intuitively on any cloud using familiar languages 🚀                                                                                                                                                   | [readme](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.15/src/apps/pulumi/helper/readme.md)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.15/src/apps/rclone/logo-50x.png">](https://rclone.org/)                        | `rclone`      | rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Yandex Files                                                                                                                                                  | [readme](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.15/src/apps/rclone/helper/readme.md)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.15/src/apps/weaviate/logo-50x.png">](https://weaviate.io)                      | `weaviate`    | Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering with the fault-tolerance and scalability of a cloud-native database, all accessible through GraphQL, REST, and various language clients. | [readme](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.15/src/apps/weaviate/helper/readme.md)    |

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

