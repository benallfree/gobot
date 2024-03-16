![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.19/assets/gobot-banner-300x.png)

## `pocketbase` for npm

This package allows you to use [PocketBase](https://pocketbase.io) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Basic version locking**

Install `gobot-pocketbase`:

```bash
npm i gobot-pocketbase
```

With `gobot-pocketbase` present, Gobot will default to the `pocketbase` version corresponding to the `gobot-pocketbase` version you installed.

```js
import { gobot } from 'gobot'
gobot(`pocketbase`).run([`--version`])
```

**Locking to a specific version**

The `gobot-pocketbase` package version always mirrors the underlying `pocketbase` [version](#known-versions):

```bash
npm i gobot-pocketbase@0.22.4
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `pocketbase` even though `gobot-pocketbase` is installed.

```js
// Run a specific version (override)
gobot(`pocketbase`, { version: `0.19.4` }).run([`--version`])

// Or the latest version (override)
gobot(`pocketbase`, { version: `*` }).run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
gobot(`pocketbase`, {
  env: process.env, // This is not always necessary, but some apps do need it
}).run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-pocketbase` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-pocketbase
pocketbase --help

# Upgrade to  @latest or any version
npm i -g gobot-pocketbase@latest
```

For more information, see [Gobot's full documentation](https://github.com/benallfree/gobot).

## Quirks

### Where is `data.db`?

By default, `pocketbase` places `data.db` where the executable resides. However, this is [inconsistent across platforms](https://github.com/pocketbase/pocketbase/issues/4361). `bash`/`zsh` will alias `pocketbase` so it appears that the executable launched from the current directory. Windows shell uses the physical path to the executable.

To create consistency, `pb_data/data.db` will be created in the current directory.

If you want to specify your own `data.db` location, use `--dir=path/to/pb_data` to ensure `data.db` is created where you desire.

```bash
gobot pocketbase --dir=/path/to/pb_data
```

### Upgrading PocketBase

The `--upgrade` switch is intentionally blocked because using it would overwrite Gobot's cached binary and create cache inconsistency.

Instead, specify the version you wish to use either via CLI or programmatically and Gobot will fetch it when necessary.


## Versions

`gobot-pocketbase` versions mirror `pocketbase` versions. Gobot knows about 127 releases of `pocketbase`:

0.22.4, 0.22.3, 0.22.2, 0.22.1, 0.22.0, 0.21.3, 0.21.2, 0.21.1, 0.21.0, 0.20.7, 0.20.6, 0.20.5, 0.20.4, 0.20.3, 0.20.2, 0.20.1, 0.20.0, 0.20.0-rc3, 0.20.0-rc2, 0.20.0-rc, 0.19.4, 0.19.3, 0.19.2, 0.19.1, 0.19.0, 0.18.10, 0.18.9, 0.18.8, 0.18.7, 0.18.6, 0.18.5, 0.18.4, 0.18.3, 0.18.2, 0.18.1, 0.18.0, 0.17.7, 0.17.6, 0.17.5, 0.17.4, 0.17.3, 0.17.2, 0.17.1, 0.17.0, 0.16.10, 0.16.9, 0.16.8, 0.16.7, 0.16.6, 0.16.5, 0.16.4, 0.16.3, 0.16.2, 0.16.1, 0.16.0, 0.15.3, 0.15.2, 0.15.1, 0.15.0, 0.14.5, 0.14.4, 0.14.3, 0.14.2, 0.14.1, 0.14.0, 0.13.4, 0.13.3, 0.13.2, 0.13.1, 0.13.0, 0.12.3, 0.12.2, 0.12.1, 0.12.0, 0.11.4, 0.11.3, 0.11.2, 0.11.1, 0.11.0, 0.10.4, 0.10.3, 0.10.2, 0.10.1, 0.10.0, 0.9.2, 0.9.1, 0.9.0, 0.8.0, 0.8.0-rc4, 0.8.0-rc3, 0.8.0-rc2, 0.8.0-rc1, 0.7.10, 0.7.9, 0.7.8, 0.7.7, 0.7.6, 0.7.5, 0.7.4, 0.7.3, 0.7.2, 0.7.1, 0.7.0, 0.6.0, 0.5.2, 0.5.1, 0.5.0, 0.4.2, 0.4.1, 0.4.0, 0.3.4, 0.3.3, 0.3.2, 0.3.1, 0.3.0, 0.2.8, 0.2.7, 0.2.6, 0.2.5, 0.2.4, 0.2.3, 0.2.2, 0.2.1, 0.2.0, 0.1.2, 0.1.1, 0.1.0

## Sample project

View the [PocketBase sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.19/src/apps/pocketbase/sample-project) on github.

## Try Gobot's other apps

Gobot has a growing list of apps. Have you tried them all?

| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                                              | `<app>`       | What is it?                                                                                                                                                                                                                                                                              |                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.19/src/apps/act/logo-50x.png">](https://github.com/nektos/act)                 | `act`         | Run your GitHub Actions locally 🚀                                                                                                                                                                                                                                                       | [readme](https://www.npmjs.com/package/gobot-act)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.19/src/apps/AdGuardHome/logo-50x.png">](https://adguard.com/adguard-home.html) | `AdGuardHome` | Network-wide ads & trackers blocking DNS server                                                                                                                                                                                                                                          | [readme](https://www.npmjs.com/package/gobot-adguardhome) |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.19/src/apps/caddy/logo-50x.png">](https://caddyserver.com/)                    | `caddy`       | Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS                                                                                                                                                                                                            | [readme](https://www.npmjs.com/package/gobot-caddy)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.19/src/apps/mc/logo-50x.png">](https://min.io)                                 | `mc`          | The Object Store for AI Data Infrastructure (client)                                                                                                                                                                                                                                     | [readme](https://www.npmjs.com/package/gobot-mc)          |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.19/src/apps/minio/logo-50x.png">](https://min.io)                              | `minio`       | The Object Store for AI Data Infrastructure (server)                                                                                                                                                                                                                                     | [readme](https://www.npmjs.com/package/gobot-minio)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.19/src/apps/pocketbase/logo-50x.png">](https://pocketbase.io)                  | `pocketbase`  | Open Source realtime backend in 1 file                                                                                                                                                                                                                                                   | [readme](https://www.npmjs.com/package/gobot-pocketbase)  |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.19/src/apps/pulumi/logo-50x.png">](https://www.pulumi.com)                     | `pulumi`      | Pulumi - Infrastructure as Code in any programming language. Build infrastructure intuitively on any cloud using familiar languages 🚀                                                                                                                                                   | [readme](https://www.npmjs.com/package/gobot-pulumi)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.19/src/apps/rclone/logo-50x.png">](https://rclone.org/)                        | `rclone`      | rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Yandex Files                                                                                                                                                  | [readme](https://www.npmjs.com/package/gobot-rclone)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.19/src/apps/weaviate/logo-50x.png">](https://weaviate.io)                      | `weaviate`    | Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering with the fault-tolerance and scalability of a cloud-native database, all accessible through GraphQL, REST, and various language clients. | [readme](https://www.npmjs.com/package/gobot-weaviate)    |

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

