# gobot - the Go app installer

> Download and execute Go binaries via CLI or code with npx/npm

gobot installs Go apps anywhere `npm` is available. Inspired by [esbuild](https://esbuild.github.io/), gobot transparently downloads, installs, and runs supported Go apps for the current operating system and architecture.

Works on Windows, Linux, OS X.

Features:

- Run any version of supported Go apps
- Binaries are intelligently downloaded and cached
- New binary versions are automatically detected and downloaded
- Efficient - downloads only what is needed

## Supported Go Apps

|                                                                                              |                                      |                               |                                                                               |                                                                                               |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ----------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| ![Act](https://raw.githubusercontent.com/benallfree/gobot/main/assets/act.png)               | [Act](https://github.com/nektos/act) | `npx gobot act --help`        | Run your GitHub Actions locally 🚀                                            | [plugin docs](https://github.com/benallfree/gobot/blob/main/src/plugins/act/readme.md)        |
| ![Caddy](https://raw.githubusercontent.com/benallfree/gobot/main/assets/caddy.png)           | [Caddy](https://caddyserver.com/)    | `npx gobot caddy --help`      | Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS | [plugin docs](https://github.com/benallfree/gobot/blob/main/src/plugins/caddy/readme.md)      |
| ![PocketBase](https://raw.githubusercontent.com/benallfree/gobot/main/assets/pocketbase.png) | [PocketBase](https://pocketbase.io)  | `npx gobot pocketbase --help` | Open Source realtime backend in 1 file                                        | [plugin docs](https://github.com/benallfree/gobot/blob/main/src/plugins/pocketbase/readme.md) |

> **Add your Go app**
> If you use GoReleaser and publish releases on Gitub, you are already compatible with gobot. Send us a PR.

## Quickstart

```bash
npm i -g gobot
gobot <app>
```

or

```bash
npx gobot <app>
```

## CLI

### `gobot <app>`

**Switches**

| Option        | Default       | Discussion                                                                                                                                                       |
| ------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --os          | host OS       | `windows, linux, darwin`                                                                                                                                         |
| --arch        | host arch     | `amd64, arm64, arm7`                                                                                                                                             |
| --debug       | `false`       | Enable debugging output                                                                                                                                          |
| --refresh     | `false`       | Clear the gobot cache                                                                                                                                            |
| --use-version | latest        | Run a specific PocketBase version, in [semver](https://semver.org/) format `x.y.z`. Also supports [semver ranges](https://www.npmjs.com/package/semver) `0.20.*` |
| --cache-path  | host specific | Use the specified directory for cache files.                                                                                                                     |

All other switches and arguments are forwarded directly to the `pocketbase` binary.

**Examples**

```bash
# Run `pocketbase serve`
npx gobot pocketbase serve

# Run in gobot debugging mode`
npx gobot --debug

# See help
npx gobot --help

# Run a specific PocketBase version
npx gobot pocketbase --use-version="0.21.0" # Run this exact version
npx gobot pocketbase --use-version="~0.21.0" # Run highest 0.21.z version
npx gobot pocketbase --use-version="0.*" # Run highest 0.y.z

# Force gobot to dump cache and refresh PocketBase tags and binaries
npx gobot pocketbase --refresh

# List available PocketBase versions
npx gobot pocketbase versions
npx gobot pocketbase versions --json # Output in JSON format
```

### `gobot versions <app>`

Display and optionally download versions ahead of time.

| Option       | Default       | Discussion                                                                                                                                                                   |
| ------------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --os         | host OS       | `windows, linux, darwin`                                                                                                                                                     |
| --arch       | host arch     | `amd64, arm64, arm7`                                                                                                                                                         |
| --debug      | `false`       | Enable debugging output                                                                                                                                                      |
| --refresh    | `false`       | Clear the gobot cache                                                                                                                                                        |
| --only       | latest        | Limit the operations to only matching versions in [semver](https://semver.org/) format `x.y.z`. Also supports [semver ranges](https://www.npmjs.com/package/semver) `0.20.*` |
| --cache-path | host specific | Use the specified directory for cache files.                                                                                                                                 |
| --download   | `false`       | Download versions in addition to listing them                                                                                                                                |
| --format     | `text`        | Output versions in `json`, `cjs`, `esm`, `json`, or `text`                                                                                                                   |

**Examples**

```bash
# Download and cache all versions of PocketBase
npx gobot versions pocketbase --download

# Download and cache matching versions of PocketBase
npx gobot versions pocketbase --download --only="0.19.*"
```

## API

gobot can be used programmatically. You can add `gobot` as a dependency of your nodejs package and benefit from the seamless management of Go binary dependencies.

[API Docs](https://github.com/pockethost/gobot/blob/main/docs/modules.md)

## Why?

If you are writing a nodejs application that depends upon a Go binary being present, you can add this package as a dependency. Then, the Go binary will always be available.

`npx gobot@latest <app>` is quite a bit easier than manually downloading zips and installing binaries in shell paths. gobot handles it all for you effortlessly.

## OS X Users

If a gobot does not run, or one of its apps does not run, it's likely you need to authorize it first. Go to `Security & Privacy` and scroll down to allow the exception.

## Contributing

We could use help testing and making sure this works across lots of platforms.

We also want Go apps. Lots of Go apps.

To test a build locally:

```bash
pnpm test
```
