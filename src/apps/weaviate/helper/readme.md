![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/assets/gobot-banner-300x.png)

## `weaviate` for npm

This package allows you to use [Weaviate](https://weaviate.io) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Basic version locking**

Install `gobot-weaviate`:

```bash
npm i gobot-weaviate
```

With `gobot-weaviate` present, Gobot will default to the `weaviate` version corresponding to the `gobot-weaviate` version you installed.

```js
import { gobot } from 'gobot'
gobot(`weaviate`).run([`--version`])
```

**Locking to a specific version**

The `gobot-weaviate` package version always mirrors the underlying `weaviate` [version](#known-versions):

```bash
npm i gobot-weaviate@1.24.4
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `weaviate` even though `gobot-weaviate` is installed.

```js
// Run a specific version (override)
gobot(`weaviate`, { version: `0.19.4` }).run([`--version`])

// Or the latest version (override)
gobot(`weaviate`, { version: `*` }).run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
gobot(`weaviate`, {
  env: process.env, // This is not always necessary, but some apps do need it
}).run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-weaviate` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-weaviate
weaviate --help

# Upgrade to  @latest or any version
npm i -g gobot-weaviate@latest
```

For more information, see [Gobot's full documentation](https://github.com/benallfree/gobot).



## Sample project

View the [Weaviate sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.22/src/apps/weaviate/sample-project) on github.

## Try Gobot's other apps

Gobot has a growing list of apps. Have you tried them all?

| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                                              | `<app>`       | What is it?                                                                                                                                                                                                                                                                              |                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/src/apps/act/logo-50x.png">](https://nektosact.com/)                        | `act`         | Run your GitHub Actions locally 🚀                                                                                                                                                                                                                                                       | [readme](https://www.npmjs.com/package/gobot-act)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/src/apps/AdGuardHome/logo-50x.png">](https://adguard.com/adguard-home.html) | `AdGuardHome` | Network-wide ads & trackers blocking DNS server                                                                                                                                                                                                                                          | [readme](https://www.npmjs.com/package/gobot-adguardhome) |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/src/apps/backrest/logo-50x.png">](https://github.com/garethgeorge/backrest) | `backrest`    | Backrest is a web UI and orchestrator for restic backup.                                                                                                                                                                                                                                 | [readme](https://www.npmjs.com/package/gobot-backrest)    |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/src/apps/caddy/logo-50x.png">](https://caddyserver.com/)                    | `caddy`       | Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS                                                                                                                                                                                                            | [readme](https://www.npmjs.com/package/gobot-caddy)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/src/apps/mc/logo-50x.png">](https://min.io)                                 | `mc`          | The Object Store for AI Data Infrastructure (client)                                                                                                                                                                                                                                     | [readme](https://www.npmjs.com/package/gobot-mc)          |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/src/apps/minio/logo-50x.png">](https://min.io)                              | `minio`       | The Object Store for AI Data Infrastructure (server)                                                                                                                                                                                                                                     | [readme](https://www.npmjs.com/package/gobot-minio)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/src/apps/ollama/logo-50x.png">](https://ollama.com/)                        | `ollama`      | Get up and running with Llama 2, Mistral, Gemma, and other large language models.                                                                                                                                                                                                        | [readme](https://www.npmjs.com/package/gobot-ollama)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/src/apps/pocketbase/logo-50x.png">](https://pocketbase.io)                  | `pocketbase`  | Open Source realtime backend in 1 file                                                                                                                                                                                                                                                   | [readme](https://www.npmjs.com/package/gobot-pocketbase)  |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/src/apps/pulumi/logo-50x.png">](https://www.pulumi.com)                     | `pulumi`      | Pulumi - Infrastructure as Code in any programming language. Build infrastructure intuitively on any cloud using familiar languages 🚀                                                                                                                                                   | [readme](https://www.npmjs.com/package/gobot-pulumi)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/src/apps/rclone/logo-50x.png">](https://rclone.org/)                        | `rclone`      | rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Yandex Files                                                                                                                                                  | [readme](https://www.npmjs.com/package/gobot-rclone)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/src/apps/restic/logo-50x.png">](https://restic.net/)                        | `restic`      | Fast, secure, efficient backup program.                                                                                                                                                                                                                                                  | [readme](https://www.npmjs.com/package/gobot-restic)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/src/apps/weaviate/logo-50x.png">](https://weaviate.io)                      | `weaviate`    | Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering with the fault-tolerance and scalability of a cloud-native database, all accessible through GraphQL, REST, and various language clients. | [readme](https://www.npmjs.com/package/gobot-weaviate)    |

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


## All known releases

`gobot-weaviate` versions mirror `weaviate` versions. Gobot knows about 151 releases of `weaviate`:

| Version           | darwin    | linux     | win32 |
| ----------------- | --------- | --------- | ----- |
| **1.24.4**        | arm64/x64 | arm64/x64 | x64   |
| **1.24.3**        | arm64/x64 | arm64/x64 | x64   |
| **1.24.2**        | arm64/x64 | arm64/x64 | x64   |
| **1.24.1**        | arm64/x64 | arm64/x64 | x64   |
| **1.24.0**        | arm64/x64 | arm64/x64 | x64   |
| **1.24.0-rc.1**   | arm64/x64 | arm64/x64 | x64   |
| **1.24.0-rc.0**   | arm64/x64 | arm64/x64 | x64   |
| **1.23.13**       | arm64/x64 | arm64/x64 | x64   |
| **1.23.12**       | arm64/x64 | arm64/x64 | x64   |
| **1.23.11**       | arm64/x64 | arm64/x64 | x64   |
| **1.23.10**       | arm64/x64 | arm64/x64 | x64   |
| **1.23.9**        | arm64/x64 | arm64/x64 | x64   |
| **1.23.8**        | arm64/x64 | arm64/x64 | x64   |
| **1.23.7**        | arm64/x64 | arm64/x64 | x64   |
| **1.23.6**        | arm64/x64 | arm64/x64 | x64   |
| **1.23.5**        | arm64/x64 | arm64/x64 | x64   |
| **1.23.4**        | arm64/x64 | arm64/x64 | x64   |
| **1.23.3**        | arm64/x64 | arm64/x64 | x64   |
| **1.23.2**        | arm64/x64 | arm64/x64 | x64   |
| **1.23.1**        | arm64/x64 | arm64/x64 | x64   |
| **1.23.0**        | arm64/x64 | arm64/x64 | x64   |
| **1.23.0-rc.1**   | arm64/x64 | arm64/x64 | x64   |
| **1.23.0-rc.0**   | arm64/x64 | arm64/x64 | x64   |
| **1.22.13**       | arm64/x64 | arm64/x64 | x64   |
| **1.22.12**       | arm64/x64 | arm64/x64 | x64   |
| **1.22.11**       | arm64/x64 | arm64/x64 | x64   |
| **1.22.10**       | arm64/x64 | arm64/x64 | x64   |
| **1.22.9**        | arm64/x64 | arm64/x64 | x64   |
| **1.22.8**        | arm64/x64 | arm64/x64 | x64   |
| **1.22.7**        | arm64/x64 | arm64/x64 | x64   |
| **1.22.6**        | arm64/x64 | arm64/x64 | x64   |
| **1.22.5**        | arm64/x64 | arm64/x64 | x64   |
| **1.22.4**        | arm64/x64 | arm64/x64 | x64   |
| **1.22.3**        | arm64/x64 | arm64/x64 | x64   |
| **1.22.2**        | arm64/x64 | arm64/x64 | x64   |
| **1.22.1**        | arm64/x64 | arm64/x64 | x64   |
| **1.22.0**        | arm64/x64 | arm64/x64 | x64   |
| **1.22.0-rc.0**   | arm64/x64 | arm64/x64 | x64   |
| **1.21.9**        | arm64/x64 | arm64/x64 | x64   |
| **1.21.8**        | arm64/x64 | arm64/x64 | x64   |
| **1.21.7**        | arm64/x64 | arm64/x64 | x64   |
| **1.21.6**        | arm64/x64 | arm64/x64 | x64   |
| **1.21.5**        | arm64/x64 | arm64/x64 | x64   |
| **1.21.4**        | arm64/x64 | arm64/x64 | x64   |
| **1.21.3**        | arm64/x64 | arm64/x64 | x64   |
| **1.21.2**        | arm64/x64 | arm64/x64 | x64   |
| **1.21.1**        | arm64/x64 | arm64/x64 | x64   |
| **1.21.0**        | arm64/x64 | arm64/x64 | x64   |
| **1.21.0-rc.1**   | arm64/x64 | arm64/x64 | x64   |
| **1.21.0-rc.0**   | arm64/x64 | arm64/x64 | x64   |
| **1.20.6**        | arm64/x64 | arm64/x64 |       |
| **1.20.5**        | arm64/x64 | arm64/x64 |       |
| **1.20.4**        | arm64/x64 | arm64/x64 |       |
| **1.20.3**        | arm64/x64 | arm64/x64 |       |
| **1.20.2**        | arm64/x64 | arm64/x64 |       |
| **1.20.1**        | arm64/x64 | arm64/x64 |       |
| **1.20.0**        | arm64/x64 | arm64/x64 |       |
| **1.19.13**       |           | arm64/x64 |       |
| **1.19.12**       | arm64/x64 | arm64/x64 |       |
| **1.19.11**       | arm64/x64 | arm64/x64 |       |
| **1.19.10**       | arm64/x64 | arm64/x64 |       |
| **1.19.9**        | arm64/x64 | arm64/x64 |       |
| **1.19.8**        | arm64/x64 | arm64/x64 |       |
| **1.19.7**        | arm64/x64 | arm64/x64 |       |
| **1.19.6**        | arm64/x64 | arm64/x64 |       |
| **1.19.5**        |           | arm64/x64 |       |
| **1.19.4**        |           | arm64/x64 |       |
| **1.19.3**        |           | arm64/x64 |       |
| **1.19.2**        |           | arm64/x64 |       |
| **1.19.1**        |           | arm64/x64 |       |
| **1.19.0**        |           | arm64/x64 |       |
| **1.19.0-beta.1** |           | arm64/x64 |       |
| **1.19.0-beta.0** |           | arm64/x64 |       |
| **1.18.6**        |           |           |       |
| **1.18.5**        |           | arm64/x64 |       |
| **1.18.4**        |           | arm64/x64 |       |
| **1.18.3**        |           | arm64/x64 |       |
| **1.18.2**        |           | arm64/x64 |       |
| **1.18.1**        |           | arm64/x64 |       |
| **1.18.0**        |           | arm64/x64 |       |
| **1.18.0-rc.0**   |           |           |       |
| **1.17.6**        |           |           |       |
| **1.17.5**        |           |           |       |
| **1.17.4**        |           |           |       |
| **1.17.3**        |           |           |       |
| **1.17.2**        |           |           |       |
| **1.17.1**        |           |           |       |
| **1.17.0**        |           |           |       |
| **1.16.9**        |           |           |       |
| **1.16.8**        |           |           |       |
| **1.16.7**        |           |           |       |
| **1.16.6**        |           |           |       |
| **1.16.5**        |           |           |       |
| **1.16.4**        |           |           |       |
| **1.16.3**        |           |           |       |
| **1.16.2**        |           |           |       |
| **1.16.1**        |           |           |       |
| **1.16.0**        |           |           |       |
| **1.15.5**        |           |           |       |
| **1.15.4**        |           |           |       |
| **1.15.3**        |           |           |       |
| **1.15.2**        |           |           |       |
| **1.15.1**        |           |           |       |
| **1.15.0**        |           |           |       |
| **1.15.0-alpha1** |           |           |       |
| **1.14.1**        |           |           |       |
| **1.14.0**        |           |           |       |
| **1.13.2**        |           |           |       |
| **1.13.1**        |           |           |       |
| **1.13.0**        |           |           |       |
| **1.12.2**        |           |           |       |
| **1.12.1**        |           |           |       |
| **1.12.0**        |           |           |       |
| **1.11.0**        |           |           |       |
| **1.10.1**        |           |           |       |
| **1.10.0**        |           |           |       |
| **1.9.1**         |           |           |       |
| **1.9.1-rc.0**    |           |           |       |
| **1.9.0**         |           |           |       |
| **1.8.0**         |           |           |       |
| **1.8.0-rc.3**    |           |           |       |
| **1.8.0-rc.2**    |           |           |       |
| **1.8.0-rc.1**    |           |           |       |
| **1.8.0-rc.0**    |           |           |       |
| **1.7.2**         |           |           |       |
| **1.7.1**         |           |           |       |
| **1.7.0**         |           |           |       |
| **1.6.0**         |           |           |       |
| **1.5.2**         |           |           |       |
| **1.5.1**         |           |           |       |
| **1.5.0**         |           |           |       |
| **1.5.0-rc.3**    |           |           |       |
| **1.5.0-rc.2**    |           |           |       |
| **1.5.0-rc.1**    |           |           |       |
| **1.5.0-rc.0**    |           |           |       |
| **1.4.1**         |           |           |       |
| **1.4.0**         |           |           |       |
| **1.4.0-rc.4**    |           |           |       |
| **1.4.0-rc.3**    |           |           |       |
| **1.4.0-rc.2**    |           |           |       |
| **1.4.0-rc.1**    |           |           |       |
| **1.4.0-rc.0**    |           |           |       |
| **1.3.0**         |           |           |       |
| **1.2.1**         |           |           |       |
| **1.2.0**         |           |           |       |
| **1.1.0**         |           |           |       |
| **1.0.4**         |           |           |       |
| **1.0.3**         |           |           |       |
| **1.0.2**         |           |           |       |
| **1.0.1**         |           |           |       |
| **1.0.0**         |           |           |       |
