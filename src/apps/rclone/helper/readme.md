![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.23/assets/gobot-banner-300x.png)

## `rclone` for npm

This package allows you to use [RClone](https://rclone.org/) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot rclone --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
gobot(`rclone`).run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-rclone
```

With `gobot-rclone` present, Gobot will default to the `rclone` version corresponding to the `gobot-rclone` version you installed. Now you can use `rclone` as a real dependency.

```js
import { gobot } from 'gobot'
gobot(`rclone`).run([`--version`])
```

**Locking to a specific version**

The `gobot-rclone` package version always mirrors the underlying `rclone` [version](#known-versions):

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

**Pass environment variables**

```js
import { gobot } from 'gobot'
gobot(`rclone`, {
  env: process.env, // This is not always necessary, but some apps do need it
}).run([`--version`])
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



## Sample project

View the [RClone sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.23/src/apps/rclone/sample-project) on github.

## Try Gobot's other apps

Gobot has a growing list of apps. Have you tried them all?

| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                                              | `<app>`       | What is it?                                                                                                                                                                                                                                                                              |                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.23/src/apps/act/logo-50x.png">](https://nektosact.com/)                        | `act`         | Run your GitHub Actions locally 🚀                                                                                                                                                                                                                                                       | [readme](https://www.npmjs.com/package/gobot-act)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.23/src/apps/AdGuardHome/logo-50x.png">](https://adguard.com/adguard-home.html) | `AdGuardHome` | Network-wide ads & trackers blocking DNS server                                                                                                                                                                                                                                          | [readme](https://www.npmjs.com/package/gobot-adguardhome) |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.23/src/apps/backrest/logo-50x.png">](https://github.com/garethgeorge/backrest) | `backrest`    | Backrest is a web UI and orchestrator for restic backup.                                                                                                                                                                                                                                 | [readme](https://www.npmjs.com/package/gobot-backrest)    |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.23/src/apps/caddy/logo-50x.png">](https://caddyserver.com/)                    | `caddy`       | Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS                                                                                                                                                                                                            | [readme](https://www.npmjs.com/package/gobot-caddy)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.23/src/apps/gptscript/logo-50x.png">](https://gptscript.ai/)                   | `gptscript`   | Natural Language Programming.                                                                                                                                                                                                                                                            | [readme](https://www.npmjs.com/package/gobot-gptscript)   |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.23/src/apps/mc/logo-50x.png">](https://min.io)                                 | `mc`          | The Object Store for AI Data Infrastructure (client)                                                                                                                                                                                                                                     | [readme](https://www.npmjs.com/package/gobot-mc)          |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.23/src/apps/minio/logo-50x.png">](https://min.io)                              | `minio`       | The Object Store for AI Data Infrastructure (server)                                                                                                                                                                                                                                     | [readme](https://www.npmjs.com/package/gobot-minio)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.23/src/apps/ollama/logo-50x.png">](https://ollama.com/)                        | `ollama`      | Get up and running with Llama 2, Mistral, Gemma, and other large language models.                                                                                                                                                                                                        | [readme](https://www.npmjs.com/package/gobot-ollama)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.23/src/apps/pocketbase/logo-50x.png">](https://pocketbase.io)                  | `pocketbase`  | Open Source realtime backend in 1 file                                                                                                                                                                                                                                                   | [readme](https://www.npmjs.com/package/gobot-pocketbase)  |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.23/src/apps/pulumi/logo-50x.png">](https://www.pulumi.com)                     | `pulumi`      | Pulumi - Infrastructure as Code in any programming language. Build infrastructure intuitively on any cloud using familiar languages 🚀                                                                                                                                                   | [readme](https://www.npmjs.com/package/gobot-pulumi)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.23/src/apps/rclone/logo-50x.png">](https://rclone.org/)                        | `rclone`      | rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Yandex Files                                                                                                                                                  | [readme](https://www.npmjs.com/package/gobot-rclone)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.23/src/apps/restic/logo-50x.png">](https://restic.net/)                        | `restic`      | Fast, secure, efficient backup program.                                                                                                                                                                                                                                                  | [readme](https://www.npmjs.com/package/gobot-restic)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.23/src/apps/weaviate/logo-50x.png">](https://weaviate.io)                      | `weaviate`    | Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering with the fault-tolerance and scalability of a cloud-native database, all accessible through GraphQL, REST, and various language clients. | [readme](https://www.npmjs.com/package/gobot-weaviate)    |

## Getting Help

Join [our Discord community](https://discord.gg/977kMmFnXc).

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

`gobot-rclone` versions mirror `rclone` versions. Gobot knows about 51 releases of `rclone`:

| Version    | freebsd      | darwin    | linux              | win32    |
| ---------- | ------------ | --------- | ------------------ | -------- |
| **1.66.0** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.65.2** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.65.1** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.65.0** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.64.2** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.64.1** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.64.0** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.63.1** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.63.0** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.62.2** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.62.1** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.62.0** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.61.1** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.61.0** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.60.1** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.60.0** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.59.2** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.59.1** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.59.0** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.58.1** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.58.0** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.57.0** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.56.2** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.56.1** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.56.0** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.55.1** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.55.0** | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| **1.54.1** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **1.54.0** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **1.53.4** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **1.53.3** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **1.53.2** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **1.53.1** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **1.53.0** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **1.52.3** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **1.52.2** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **1.52.1** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **1.52.0** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **1.51.0** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **1.50.2** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **1.50.1** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **1.50.0** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **1.49.5** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **1.49.4** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **1.49.3** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **1.49.2** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **1.49.1** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **1.49.0** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **1.48.0** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **1.47.0** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| **1.43.1** | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
