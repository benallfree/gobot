![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/assets/gobot-banner-300x.png)

## `restic` for npm

This package allows you to use [Restic](https://restic.net/) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Basic version locking**

Install `gobot-restic`:

```bash
npm i gobot-restic
```

With `gobot-restic` present, Gobot will default to the `restic` version corresponding to the `gobot-restic` version you installed.

```js
import { gobot } from 'gobot'
gobot(`restic`).run([`--version`])
```

**Locking to a specific version**

The `gobot-restic` package version always mirrors the underlying `restic` [version](#known-versions):

```bash
npm i gobot-restic@0.16.4
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `restic` even though `gobot-restic` is installed.

```js
// Run a specific version (override)
gobot(`restic`, { version: `0.19.4` }).run([`--version`])

// Or the latest version (override)
gobot(`restic`, { version: `*` }).run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
gobot(`restic`, {
  env: process.env, // This is not always necessary, but some apps do need it
}).run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-restic` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-restic
restic --help

# Upgrade to  @latest or any version
npm i -g gobot-restic@latest
```

For more information, see [Gobot's full documentation](https://github.com/benallfree/gobot).



## Sample project

View the [Restic sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.22/src/apps/restic/sample-project) on github.

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

`gobot-restic` versions mirror `restic` versions. Gobot knows about 42 releases of `restic`:

| Version        | freebsd      | darwin    | linux              | win32    |
| -------------- | ------------ | --------- | ------------------ | -------- |
| **0.16.4**     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **0.16.3**     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **0.16.2**     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **0.16.1**     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **0.16.0**     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **0.15.2**     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **0.15.1**     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **0.15.0**     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **0.14.0**     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **0.13.1**     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **0.13.0**     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **0.12.1**     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **0.12.0**     | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **0.11.0**     | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **0.10.0**     | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **0.9.6**      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **0.9.5**      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **0.9.4**      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **0.9.3**      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **0.9.2**      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **0.9.1**      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **0.9.0**      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **0.8.3**      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **0.8.2**      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **0.8.1**      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **0.8.0**      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **0.7.3**      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **0.7.2**      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **0.7.1**      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **0.7.0**      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **0.6.1**      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **0.6.0**      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **0.6.0-rc.1** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | ia32     |
| **0.5.0**      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **0.5.0-rc.1** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **0.4.0**      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **0.3.3**      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **0.3.2**      |              |           |                    |          |
| **0.3.1**      |              |           |                    |          |
| **0.3.0**      |              |           |                    |          |
| **0.2.0**      |              |           |                    |          |
| **0.1.0**      |              |           |                    |          |
