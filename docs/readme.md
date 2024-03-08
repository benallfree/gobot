![Gobot](https://raw.githubusercontent.com/benallfree/gobot/main/assets/gobot-banner.png)

# The binary package manager for Node

_Manage and run popular binaries as `package.json` dependencies. CLI and API interfaces._

## Introduction

gobot installs popular binary apps anywhere `npm` is available. It transparently downloads, installs, and runs binary apps (including semver ranges) for the current operating system and architecture.

Works on Windows, Linux, OS X.

**Features**

- Run any version of supported apps and many unsupported apps from github.
- Binaries are intelligently downloaded and cached
- New binary versions are automatically detected and downloaded
- Efficient - downloads only what is needed

Inspired by [esbuild](https://esbuild.github.io/) and other packages that install binary dependencies

## Quickstart

```bash
npm i -g gobot
gobot pocketbase --help
gobot caddy --help
gobot act --help

# Run unofficial binaries from github
gobot <user>/<repo> --help
```

or

```bash
npx gobot <app>
```

## Official Gobot Apps

| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                        | `<app>`       | What is it?                                                                                                                                                                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/assets/act.png">](https://github.com/nektos/act)                 | `act`         | Run your GitHub Actions locally 🚀                                                                                                                                                                                                                                                       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/assets/AdGuardHome.png">](https://adguard.com/adguard-home.html) | `AdGuardHome` | Network-wide ads & trackers blocking DNS server                                                                                                                                                                                                                                          |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/assets/caddy.png">](https://caddyserver.com/)                    | `caddy`       | Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS                                                                                                                                                                                                            |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/assets/minio.png">](https://min.io)                              | `minio + mc`  | The Object Store for AI Data Infrastructure<br/>[gobot docs](https://github.com/benallfree/gobot/blob/main/src/plugins/Minio/readme.md))                                                                                                                                                 |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/assets/pocketbase.png">](https://pocketbase.io)                  | `pocketbase`  | Open Source realtime backend in 1 file<br/>[gobot docs](https://github.com/benallfree/gobot/blob/main/src/plugins/PocketBase/readme.md))                                                                                                                                                 |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/assets/pulumi.png">](https://www.pulumi.com)                     | `pulumi`      | Pulumi - Infrastructure as Code in any programming language. Build infrastructure intuitively on any cloud using familiar languages 🚀                                                                                                                                                   |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/assets/rclone.png">](https://www.pulumi.com)                     | `rclone`      | rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Yandex Files                                                                                                                                                  |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/assets/weaviate.png">](https://weaviate.io)                      | `weaviate`    | Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering with the fault-tolerance and scalability of a cloud-native database, all accessible through GraphQL, REST, and various language clients. |

### Running unofficial apps

gobot can run many apps hosted on github, without official support.

```bash
gobot <user>/<repo>
```

**Example**

```bash
# Run PocketBase as a direct repo name rather than the `pocketbase` alias
gobot pocketbase/pocketbase --help
```

or API:

```ts
gobot(`pocketbase/pocketbase`).run([`--help`])
```

The above command format may run the app you have in mind. For example, `gobot caddy --help` runs the Caddy by the official name, but `gobot caddyserver/caddy --help` will also run it.

As long as the project uses the github [Releases](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) feature and includes statically linked binaries with zero dependencies, gobot can probably run it.

Go apps work flawlessly. gobot was originally named and conceived to support Go apps.

## CLI

### `gobot [gobotOptions] <app> [appOptions]`

All Gobot options begin with `--g-` so as not to conflict with app option switches. Every unrecognized option is passed through to the app binary.

**Switches**

| Option          | Default       | Discussion                                                                                                                                                   |
| --------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| --g-os          | host OS       | `aix`, `darwin`, `freebsd`,`linux`, `openbsd`, `sunos`, and `win32`                                                                                          |
| --g-arch        | host arch     | `arm`, `arm64`, `ia32`, `loong64`, `mips`, `mipsel`, `ppc`, `ppc64`, `riscv64`, `s390`, `s390x`, and `x64`                                                   |
| --g-v[vv]       |               | Adjust output verbosity                                                                                                                                      |
| --g-download    | `false`       | Download all matching versions and exit                                                                                                                      |
| --g-refresh     | `false`       | Clear the gobot cache                                                                                                                                        |
| --g-use-version | latest        | Run a specific binary version, in [semver](https://semver.org/) format `x.y.z`. Also supports [semver ranges](https://www.npmjs.com/package/semver) `0.20.*` |
| --g-cache-path  | host specific | Use the specified directory for cache files.                                                                                                                 |

**Examples**

```bash
# Run `pocketbase serve`
npx gobot pocketbase serve

# Run in gobot debugging mode`
npx gobot --g-debug

# Run a specific PocketBase version
npx gobot pocketbase --g-version="0.21.0" # Run this exact version
npx gobot pocketbase --g-version="~0.21.0" # Run highest 0.21.z version
npx gobot pocketbase --g-version="0.*" # Run highest 0.y.z

# Force gobot to dump cache and refresh PocketBase tags and binaries
npx gobot pocketbase --g-refresh
```

## API

gobot can be used programmatically. You can add `gobot` as a dependency of your nodejs package and benefit from the seamless management of binary dependencies.

```ts
import { gobot } from 'gobot'

const bot = gobot(`pocketbase`)
const childProcess = bot.run([`serve`])
```

[Full API Docs](https://github.com/pockethost/gobot/blob/main/docs/modules.md)

## Why?

If you are writing a nodejs application that depends upon binaries being present (like [PocketHost](https://github.com/pockethost/pockethost) does), you can add this package as a dependency and execute the binary via CLI or programmatically . This package will make sure your desired external binaries are always available.

`npx gobot@latest <app>` is quite a bit easier than manually downloading zips and installing binaries in shell paths. gobot handles it all for you effortlessly.

## OS X Users

If a gobot does not run, or one of its apps does not run, it's likely you need to authorize it first. Go to `Security & Privacy` and scroll down to allow the exception.

## Adding your app to the Gobot registry

We want to add native support for lots of binary apps!

If you use publish statically linked binary releases on github, you are already compatible with gobot. Send us a PR.

Note: [GoReleaser](https://goreleaser.com/) is a great option if you're publish a Go-based project.

## Contributing

We could use help testing and making sure this works across lots of platforms.

To test a build locally:

```bash
pnpm test
```
