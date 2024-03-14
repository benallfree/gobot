![Gobot](https://raw.githubusercontent.com/benallfree/gobot/main/assets/gobot-banner-300x.png)

# `gobot-rclone`

## `rclone` as an npm package

This is an optional [Gobot](https://github.com/benallfree/gobot) helper used when you want [RClone](https://rclone.org/) to be a dependency in your project.

With it, you can ensure that `rclone` is always installed and available to your application, in the specific version (or range) you require.

`rclone` can also be surfaced as a CLI alias by installing this package globally.

## Usage

**Basic version locking**

Install `gobot` and `gobot-rclone`:

```bash
npm i gobot gobot-rclone
```

Then, use Gobot normally:

```js
import { gobot } from 'gobot'

/**
 * With `gobot-rclone present, Gobot will default
 * to the `rclone` version corresponding to
 * `package.version`
 */
gobot(`rclone`).run([`--version])
```

**Locking to a specific version**

The `gobot-rclone` package version always mirrors the underlying `rclone` version:

```bash
npm i gobot-rclone@1.66.0
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `rclone` even though `gobot-rclone` is installed.

```js
// Run a specific version (override)
gobot(`rclone`, { version: `0.19.4` }).run([`--version`])

// Or the latest version (override)
gobot(`rclone`, { version: `*` }).run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-rclone` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-rclone
rclone --help

# Upgrade to  @latest or any version
npm i -g gobot-rclone@latest
```

For more information, see [Gobot's full documentation](https://github.com/benallfree/gobot).

## How package versioning works

`gobot-rclone` is designed to work with any future version of `gobot`.

The published versions of this package mirror the underlying versions of `rclone`. That means it is not possible to release updates to this package until/unless the underlying `rclone` project also releases a new version.



## Known Versions

Gobot knows about 51 releases of `rclone`:

1.66.0, 1.65.2, 1.65.1, 1.65.0, 1.64.2, 1.64.1, 1.64.0, 1.63.1, 1.63.0, 1.62.2, 1.62.1, 1.62.0, 1.61.1, 1.61.0, 1.60.1, 1.60.0, 1.59.2, 1.59.1, 1.59.0, 1.58.1, 1.58.0, 1.57.0, 1.56.2, 1.56.1, 1.56.0, 1.55.1, 1.55.0, 1.54.1, 1.54.0, 1.53.4, 1.53.3, 1.53.2, 1.53.1, 1.53.0, 1.52.3, 1.52.2, 1.52.1, 1.52.0, 1.51.0, 1.50.2, 1.50.1, 1.50.0, 1.49.5, 1.49.4, 1.49.3, 1.49.2, 1.49.1, 1.49.0, 1.48.0, 1.47.0, 1.43.1

## Sample project

View the [RClone sample project](https://github.com/benallfree/gobot/tree/main/src/apps/rclone/sample-project) on github.

## Try Gobot's other apps

Gobot has a growing list of apps. Have you tried them all?

| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                                   | `<app>`       | What is it?                                                                                                                                                                                                                                                                              |                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/apps/act/logo-50x.png">](https://github.com/nektos/act)                 | `act`         | Run your GitHub Actions locally 🚀                                                                                                                                                                                                                                                       | [readme](https://github.com/benallfree/gobot/tree/main/src/apps/act/helper/readme.md)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/apps/AdGuardHome/logo-50x.png">](https://adguard.com/adguard-home.html) | `AdGuardHome` | Network-wide ads & trackers blocking DNS server                                                                                                                                                                                                                                          | [readme](https://github.com/benallfree/gobot/tree/main/src/apps/AdGuardHome/helper/readme.md) |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/apps/caddy/logo-50x.png">](https://caddyserver.com/)                    | `caddy`       | Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS                                                                                                                                                                                                            | [readme](https://github.com/benallfree/gobot/tree/main/src/apps/caddy/helper/readme.md)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/apps/mc/logo-50x.png">](https://min.io)                                 | `mc`          | The Object Store for AI Data Infrastructure (client)                                                                                                                                                                                                                                     | [readme](https://github.com/benallfree/gobot/tree/main/src/apps/mc/helper/readme.md)          |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/apps/minio/logo-50x.png">](https://min.io)                              | `minio`       | The Object Store for AI Data Infrastructure (server)                                                                                                                                                                                                                                     | [readme](https://github.com/benallfree/gobot/tree/main/src/apps/minio/helper/readme.md)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/apps/pocketbase/logo-50x.png">](https://pocketbase.io)                  | `pocketbase`  | Open Source realtime backend in 1 file                                                                                                                                                                                                                                                   | [readme](https://github.com/benallfree/gobot/tree/main/src/apps/pocketbase/helper/readme.md)  |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/apps/pulumi/logo-50x.png">](https://www.pulumi.com)                     | `pulumi`      | Pulumi - Infrastructure as Code in any programming language. Build infrastructure intuitively on any cloud using familiar languages 🚀                                                                                                                                                   | [readme](https://github.com/benallfree/gobot/tree/main/src/apps/pulumi/helper/readme.md)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/apps/rclone/logo-50x.png">](https://rclone.org/)                        | `rclone`      | rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Yandex Files                                                                                                                                                  | [readme](https://github.com/benallfree/gobot/tree/main/src/apps/rclone/helper/readme.md)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/apps/weaviate/logo-50x.png">](https://weaviate.io)                      | `weaviate`    | Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering with the fault-tolerance and scalability of a cloud-native database, all accessible through GraphQL, REST, and various language clients. | [readme](https://github.com/benallfree/gobot/tree/main/src/apps/weaviate/helper/readme.md)    |

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

