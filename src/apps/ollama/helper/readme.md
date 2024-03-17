![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/assets/gobot-banner-300x.png)

## `ollama` for npm

This package allows you to use [Ollama](https://ollama.com/) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot ollama --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
gobot(`ollama`).run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-ollama
```

With `gobot-ollama` present, Gobot will default to the `ollama` version corresponding to the `gobot-ollama` version you installed. Now you can use `ollama` as a real dependency.

```js
import { gobot } from 'gobot'
gobot(`ollama`).run([`--version`])
```

**Locking to a specific version**

The `gobot-ollama` package version always mirrors the underlying `ollama` [version](#known-versions):

```bash
npm i gobot-ollama@0.1.29
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `ollama` even though `gobot-ollama` is installed.

```js
// Run a specific version (override)
gobot(`ollama`, { version: `0.19.4` }).run([`--version`])

// Or the latest version (override)
gobot(`ollama`, { version: `*` }).run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
gobot(`ollama`, {
  env: process.env, // This is not always necessary, but some apps do need it
}).run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-ollama` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-ollama
ollama --help

# Upgrade to  @latest or any version
npm i -g gobot-ollama@latest
```

For more information, see [Gobot's full documentation](https://github.com/benallfree/gobot).



## Sample project

View the [Ollama sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.22/src/apps/ollama/sample-project) on github.

## Try Gobot's other apps

Gobot has a growing list of apps. Have you tried them all?

| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                                              | `<app>`       | What is it?                                                                                                                                                                                                                                                                              |                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/src/apps/act/logo-50x.png">](https://nektosact.com/)                        | `act`         | Run your GitHub Actions locally 🚀                                                                                                                                                                                                                                                       | [readme](https://www.npmjs.com/package/gobot-act)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/src/apps/AdGuardHome/logo-50x.png">](https://adguard.com/adguard-home.html) | `AdGuardHome` | Network-wide ads & trackers blocking DNS server                                                                                                                                                                                                                                          | [readme](https://www.npmjs.com/package/gobot-adguardhome) |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/src/apps/backrest/logo-50x.png">](https://github.com/garethgeorge/backrest) | `backrest`    | Backrest is a web UI and orchestrator for restic backup.                                                                                                                                                                                                                                 | [readme](https://www.npmjs.com/package/gobot-backrest)    |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/src/apps/caddy/logo-50x.png">](https://caddyserver.com/)                    | `caddy`       | Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS                                                                                                                                                                                                            | [readme](https://www.npmjs.com/package/gobot-caddy)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/src/apps/gptscript/logo-50x.png">](https://gptscript.ai/)                   | `gptscript`   | Natural Language Programming.                                                                                                                                                                                                                                                            | [readme](https://www.npmjs.com/package/gobot-gptscript)   |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/src/apps/mc/logo-50x.png">](https://min.io)                                 | `mc`          | The Object Store for AI Data Infrastructure (client)                                                                                                                                                                                                                                     | [readme](https://www.npmjs.com/package/gobot-mc)          |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/src/apps/minio/logo-50x.png">](https://min.io)                              | `minio`       | The Object Store for AI Data Infrastructure (server)                                                                                                                                                                                                                                     | [readme](https://www.npmjs.com/package/gobot-minio)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/src/apps/ollama/logo-50x.png">](https://ollama.com/)                        | `ollama`      | Get up and running with Llama 2, Mistral, Gemma, and other large language models.                                                                                                                                                                                                        | [readme](https://www.npmjs.com/package/gobot-ollama)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/src/apps/pocketbase/logo-50x.png">](https://pocketbase.io)                  | `pocketbase`  | Open Source realtime backend in 1 file                                                                                                                                                                                                                                                   | [readme](https://www.npmjs.com/package/gobot-pocketbase)  |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/src/apps/pulumi/logo-50x.png">](https://www.pulumi.com)                     | `pulumi`      | Pulumi - Infrastructure as Code in any programming language. Build infrastructure intuitively on any cloud using familiar languages 🚀                                                                                                                                                   | [readme](https://www.npmjs.com/package/gobot-pulumi)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/src/apps/rclone/logo-50x.png">](https://rclone.org/)                        | `rclone`      | rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Yandex Files                                                                                                                                                  | [readme](https://www.npmjs.com/package/gobot-rclone)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/src/apps/restic/logo-50x.png">](https://restic.net/)                        | `restic`      | Fast, secure, efficient backup program.                                                                                                                                                                                                                                                  | [readme](https://www.npmjs.com/package/gobot-restic)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.22/src/apps/weaviate/logo-50x.png">](https://weaviate.io)                      | `weaviate`    | Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering with the fault-tolerance and scalability of a cloud-native database, all accessible through GraphQL, REST, and various language clients. | [readme](https://www.npmjs.com/package/gobot-weaviate)    |

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

`gobot-ollama` versions mirror `ollama` versions. Gobot knows about 51 releases of `ollama`:

| Version    | darwin    | linux     |
| ---------- | --------- | --------- |
| **0.1.29** | arm64/x64 | arm64/x64 |
| **0.1.28** | arm64/x64 | arm64/x64 |
| **0.1.27** | arm64/x64 | arm64/x64 |
| **0.1.26** | arm64/x64 | arm64/x64 |
| **0.1.25** | arm64/x64 | arm64/x64 |
| **0.1.24** | arm64/x64 | arm64/x64 |
| **0.1.23** | arm64/x64 | arm64/x64 |
| **0.1.22** | arm64/x64 | arm64/x64 |
| **0.1.21** | arm64/x64 | arm64/x64 |
| **0.1.20** | arm64/x64 | arm64/x64 |
| **0.1.19** | arm64/x64 | arm64/x64 |
| **0.1.18** | arm64/x64 | arm64/x64 |
| **0.1.17** | arm64/x64 | arm64/x64 |
| **0.1.16** | arm64/x64 | arm64/x64 |
| **0.1.15** | arm64/x64 | arm64/x64 |
| **0.1.14** | arm64/x64 | arm64/x64 |
| **0.1.13** | arm64/x64 | arm64/x64 |
| **0.1.12** | arm64/x64 | arm64/x64 |
| **0.1.11** | arm64/x64 | arm64/x64 |
| **0.1.10** | arm64/x64 | arm64/x64 |
| **0.1.9**  | arm64/x64 | arm64/x64 |
| **0.1.8**  | arm64/x64 | arm64/x64 |
| **0.1.7**  | arm64/x64 | arm64/x64 |
| **0.1.6**  | arm64/x64 | arm64/x64 |
| **0.1.5**  | arm64/x64 | arm64/x64 |
| **0.1.4**  | arm64/x64 | arm64/x64 |
| **0.1.3**  | arm64/x64 | arm64/x64 |
| **0.1.2**  | arm64/x64 | arm64/x64 |
| **0.1.1**  | arm64/x64 | arm64/x64 |
| **0.1.0**  | arm64/x64 | arm64/x64 |
| **0.0.21** | arm64/x64 |           |
| **0.0.20** | arm64/x64 |           |
| **0.0.19** | arm64/x64 |           |
| **0.0.18** | arm64/x64 |           |
| **0.0.17** | arm64/x64 |           |
| **0.0.16** | arm64/x64 |           |
| **0.0.15** | arm64/x64 |           |
| **0.0.14** | arm64/x64 |           |
| **0.0.13** | arm64/x64 |           |
| **0.0.12** | arm64/x64 |           |
| **0.0.11** | arm64/x64 |           |
| **0.0.10** | arm64/x64 |           |
| **0.0.9**  | arm64/x64 |           |
| **0.0.8**  | arm64/x64 |           |
| **0.0.7**  | arm64/x64 |           |
| **0.0.6**  | arm64/x64 |           |
| **0.0.5**  | arm64/x64 |           |
| **0.0.4**  | arm64/x64 |           |
| **0.0.3**  | arm64/x64 |           |
| **0.0.2**  | arm64/x64 |           |
| **0.0.1**  | arm64/x64 |           |
