![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.14/assets/gobot-banner-300x.png)

# `gobot-pulumi`

## `pulumi` as an npm package

This is an optional [Gobot](https://github.com/benallfree/gobot) helper used when you want [Pulumi](https://www.pulumi.com) to be a dependency in your project.

With it, you can ensure that `pulumi` is always installed and available to your application, in the specific version (or range) you require.

`pulumi` can also be surfaced as a CLI alias by installing this package globally.

## Usage

**Basic version locking**

Install `gobot` and `gobot-pulumi`:

```bash
npm i gobot gobot-pulumi
```

Then, use Gobot normally:

```js
import { gobot } from 'gobot'

/**
 * With `gobot-pulumi present, Gobot will default
 * to the `pulumi` version corresponding to
 * `package.version`
 */
gobot(`pulumi`).run([`--version])
```

**Locking to a specific version**

The `gobot-pulumi` package version always mirrors the underlying `pulumi` version:

```bash
npm i gobot-pulumi@3.109.0
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `pulumi` even though `gobot-pulumi` is installed.

```js
// Run a specific version (override)
gobot(`pulumi`, { version: `0.19.4` }).run([`--version`])

// Or the latest version (override)
gobot(`pulumi`, { version: `*` }).run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-pulumi` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-pulumi
pulumi --help

# Upgrade to  @latest or any version
npm i -g gobot-pulumi@latest
```

For more information, see [Gobot's full documentation](https://github.com/benallfree/gobot).

## How package versioning works

`gobot-pulumi` is designed to work with any future version of `gobot`.

The published versions of this package mirror the underlying versions of `pulumi`. That means it is not possible to release updates to this package until/unless the underlying `pulumi` project also releases a new version.



## Known Versions

Gobot knows about 229 releases of `pulumi`:

3.109.0, 3.108.1, 3.108.0, 3.107.0, 3.106.0, 3.105.0, 3.104.2, 3.104.1, 3.104.0, 3.103.1, 3.103.0, 3.102.0, 3.101.1, 3.101.0, 3.100.0, 3.99.0, 3.98.0, 3.97.0, 3.96.2, 3.96.1, 3.96.0, 3.95.0, 3.94.2, 3.94.1, 3.94.0, 3.93.0, 3.92.0, 3.91.1, 3.91.0, 3.90.1, 3.90.0, 3.89.0, 3.88.1, 3.88.0, 3.87.0, 3.86.0, 3.85.0, 3.84.0, 3.83.0, 3.82.1, 3.82.0, 3.81.0, 3.80.0, 3.79.0, 3.78.1, 3.78.0, 3.77.1, 3.77.0, 3.76.1, 3.76.0, 3.75.0, 3.74.0, 3.73.0, 3.72.2, 3.72.1, 3.72.0, 3.71.0, 3.70.0, 3.69.0, 3.68.0, 3.67.1, 3.67.0, 3.66.0, 3.65.1, 3.65.0, 3.64.0, 3.63.0, 3.62.0, 3.61.1, 3.61.0, 3.60.1, 3.60.0, 3.59.1, 3.59.0, 3.58.0, 3.57.1, 3.57.0, 3.56.0, 3.55.0, 3.54.0, 3.53.1, 3.53.0, 3.52.1, 3.52.0, 3.51.1, 3.51.0, 3.50.2, 3.50.1, 3.50.0, 3.49.0, 3.48.0, 3.47.2, 3.47.1, 3.46.1, 3.46.0, 3.45.0, 3.44.3, 3.44.2, 3.44.1, 3.44.0, 3.43.1, 3.43.0, 3.42.0, 3.41.1, 3.40.2, 3.40.1, 3.40.0, 3.39.4, 3.39.3, 3.39.2, 3.39.1, 3.39.0, 3.38.0, 3.37.2, 3.37.1, 3.37.0, 3.36.0, 3.35.3, 3.35.2, 3.35.1, 3.35.0, 3.34.1, 3.34.0, 3.33.2, 3.33.1, 3.33.0, 3.32.1, 3.32.0, 3.31.1, 3.31.0, 3.30.0, 3.29.1, 3.28.0, 3.27.0, 3.26.1, 3.26.0, 3.25.1, 3.25.0, 3.24.1, 3.23.2, 3.23.1, 3.23.0, 3.22.1, 3.22.0, 3.21.1, 3.21.0, 3.20.0, 3.19.0, 3.18.1, 3.18.0, 3.17.1, 3.17.0, 3.16.0, 3.15.0, 3.14.0, 3.13.2, 3.13.1, 3.13.0, 3.12.0, 3.11.0, 3.10.3, 3.10.2, 3.10.1, 3.10.0, 3.9.1, 3.9.0, 3.8.0, 3.7.1, 3.7.0, 3.6.1, 3.6.0, 3.5.1, 3.4.0, 3.3.1, 3.3.0, 3.2.1, 3.2.0, 3.1.0, 3.0.0, 3.0.0-rc.1, 3.0.0-beta.2, 3.0.0-beta.1, 2.25.2, 2.25.1, 2.25.0, 2.24.1, 2.24.0, 2.23.2, 2.23.1, 2.23.0, 2.22.0, 2.21.2, 2.21.1, 2.21.0, 2.20.0, 2.19.0, 2.18.2, 2.18.1, 2.18.0, 2.17.2, 2.17.1, 2.17.0, 2.16.2, 2.16.1, 2.16.0, 2.15.6, 2.15.5, 2.15.4, 2.15.3, 2.15.2, 2.15.1, 2.15.0, 2.14.0, 2.13.2, 2.13.1, 2.13.0, 2.12.1, 2.12.0, 2.11.0, 2.10.1, 2.9.2, 2.8.2, 2.8.0, 2.7.1, 2.7.0, 2.5.0, 0.8.3, 0.8.2, 0.8.1

## Sample project

View the [Pulumi sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.14/src/apps/pulumi/sample-project) on github.

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

