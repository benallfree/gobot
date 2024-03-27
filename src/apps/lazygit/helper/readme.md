![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.34/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-lazygit) ![](https://img.shields.io/npm/dt/gobot-lazygit) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## Lazygit via npm

This package allows you to use [Lazygit](https://github.com/jesseduffield/lazygit) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot lazygit --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`lazygit`)
bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-lazygit
```

With `gobot-lazygit` present, Gobot will default to the `lazygit` version corresponding to the `gobot-lazygit` version you installed. Now you can use `lazygit` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`lazygit`)
bot..run([`--version`])
```

**Locking to a specific version**

The `gobot-lazygit` package version always mirrors the underlying `lazygit` [version](#all-known-releases):

```bash
npm i gobot-lazygit@0.41.0
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `lazygit` even though `gobot-lazygit` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`lazygit`, { version: `0.41.0` })
bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`lazygit`, { version: `*` })
bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`lazygit`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
bot.run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-lazygit` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-lazygit
lazygit --help

# Upgrade to  @latest or any version
npm i -g gobot-lazygit@latest
```

## CLI

`gobot-lazygit` comes with a [bin](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#bin) shortcut for CLI usage.

### `lazygit  [options]`

lazygit (https://github.com/jesseduffield/lazygit) runner for Gobot (https://github.com/benallfree/gobot)

**Options**

| Name              | Default         | Discussion                                                                  |
| ----------------- | --------------- | --------------------------------------------------------------------------- |
| `--g-v`           | `true`          | Show informational output                                                   |
| `--g-vv`          | `false`         | Show even more output                                                       |
| `--g-vvv`         | `false`         | Show even more output                                                       |
| `--g-cache-path`  | `host specific` | The cache path to use                                                       |
| `--g-use-version` | `*`             | Run a specific binary version (format: x.y.z semver or x.y.\* semver range) |
| `--g-os`          | `host specific` | Specify OS/Platform                                                         |
| `--g-arch`        | `host specific` | Specify OS/Platform                                                         |

## API

[Full API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/docs/readme.md)

## Sample project

View the [Lazygit sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.34/src/apps/lazygit/sample-project) on github.

## Try Gobot's other apps

Gobot has a growing list (currently 52) of [official apps](https://www.npmjs.com/package/gobot#official-gobot-apps). Have you tried them all?

## Getting Help

Join [our Discord community](https://discord.gg/977kMmFnXc).

## Why?

If you are writing a nodejs application that depends upon binaries being present (like [PocketHost](https://github.com/pockethost/pockethost) does), you can add this package as a dependency and execute the binary via CLI or programmatically. This package will make sure your desired external binaries are always available.

If you just want to grab a binary quickly for your own use, `npx gobot@latest <app>` is quite a bit easier than manually downloading zips and installing binaries in shell paths. Gobot handles it all for you effortlessly.

## Adding your app to the Gobot registry

We want to add native support for lots of binary apps!

If you use publish statically linked binary releases on github, you are already 98% compatible with Gobot. In fact, Gobot may already know how to work with it.

To see what initial support looks like:

```bash
npx gobot inspect <user>/<repo>
```

This will index all the releases from your repo and show you exactly what Gobot sees.

If you see everything you expect, you're golden. If things are missing, it may mean some custom programming. Either way, jump on [Discord](https://discord.gg/977kMmFnXc) and let us know your results.

If you have the flexibility or are starting a new project, make sure your release names follows these rules:

- Ends in `.zip`, `.tgz`, `.tar.gz`, `.bz2`
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

`gobot-lazygit` versions mirror `lazygit` versions. Gobot knows about 149 releases of `lazygit`:

| Version | freebsd       | darwin    | linux         | win32     |
| ------- | ------------- | --------- | ------------- | --------- |
| 0.41.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.40.2  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.40.1  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.40.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.39.4  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.39.3  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.39.2  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.39.1  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.38.2  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.38.1  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.38.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.37.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.36.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.35.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.34.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64       |
| 0.33.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64       |
| 0.32.2  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64       |
| 0.32.1  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64       |
| 0.32.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64       |
| 0.31.4  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64       |
| 0.31.3  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64       |
| 0.31.2  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64       |
| 0.31.1  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64       |
| 0.31.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64       |
| 0.30.1  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64       |
| 0.30.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64       |
| 0.29.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64       |
| 0.28.2  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64       |
| 0.28.1  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64       |
| 0.28.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64       |
| 0.27.4  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64       |
| 0.27.3  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64       |
| 0.27.2  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64       |
| 0.27.1  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64       |
| 0.27.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64       |
| 0.26.1  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64       |
| 0.26.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64       |
| 0.25.1  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64       |
| 0.25.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64       |
| 0.24.2  | arm64/x64/arm | x64       | arm64/x64/arm | x64       |
| 0.24.1  | arm64/x64/arm | x64       | arm64/x64/arm | x64       |
| 0.24.0  | arm64/x64/arm | x64       | arm64/x64/arm | x64       |
| 0.23.7  | arm64/x64/arm | x64       | arm64/x64/arm | x64       |
| 0.23.6  | arm64/x64/arm | x64       | arm64/x64/arm | x64       |
| 0.23.5  | arm64/x64/arm | x64       | arm64/x64/arm | x64       |
| 0.23.4  | arm64/x64/arm | x64       | arm64/x64/arm | x64       |
| 0.23.3  | arm64/x64/arm | x64       | arm64/x64/arm | x64       |
| 0.23.2  | arm64/x64/arm | x64       | arm64/x64/arm | x64       |
| 0.23.1  | arm64/x64/arm | x64       | arm64/x64/arm | x64       |
| 0.22.8  | arm64/x64/arm | x64       | arm64/x64/arm | x64       |
| 0.22.6  | arm64/x64/arm | x64       | arm64/x64/arm | x64       |
| 0.22.1  | arm64/x64/arm | x64       | arm64/x64/arm | x64       |
| 0.22.0  | arm64/x64/arm | x64       | arm64/x64/arm | x64       |
| 0.20.9  | arm64/x64/arm | x64       | arm64/x64/arm | x64       |
| 0.20.8  | arm64/x64/arm | x64       | arm64/x64/arm | x64       |
| 0.20.6  | arm64/x64/arm | x64       | arm64/x64/arm | x64       |
| 0.20.5  | arm64/x64/arm | x64       | arm64/x64/arm | x64       |
| 0.20.4  | arm64/x64/arm | x64       | arm64/x64/arm | x64       |
| 0.20.3  | arm64/x64/arm | x64       | arm64/x64/arm | x64       |
| 0.20.2  | arm64/x64/arm | x64       | arm64/x64/arm | x64       |
| 0.20.1  | arm64/x64/arm | x64       | arm64/x64/arm | x64       |
| 0.20.0  | arm64/x64/arm | x64       | arm64/x64/arm | x64       |
| 0.19.0  | arm64/x64/arm | x64       | arm64/x64/arm | x64       |
| 0.18.0  | arm64/x64/arm | x64       | arm64/x64/arm | x64       |
| 0.17.4  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.17.3  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.17.2  |               |           |               |           |
| 0.17.0  |               |           |               |           |
| 0.16.2  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.16.0  | x64/arm       | x64       | arm64/x64     | x64       |
| 0.15.7  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.15.6  | x64/arm       | x64       | arm64/x64     | x64       |
| 0.15.5  | x64/arm       |           | arm64/x64/arm |           |
| 0.15.4  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.15.3  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.15.2  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.14.4  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.14.3  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.14.2  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.13.0  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.12.3  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.12.2  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.11.3  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.11.2  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.11.1  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.10.6  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.10.5  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.10.4  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.10.3  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.10.2  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.9.0   | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.8.2   | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.8.1   | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.8.0   | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.7.2   | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.7.1   | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.7.0   | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.6.0   | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.5.0   | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.4.0   | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.3.1   | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.3.0   | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.2.2   | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.2.1   | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.2.0   | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.80  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.79  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.78  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.77  |               |           |               |           |
| 0.1.76  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.75  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.73  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.72  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.66  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.64  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.61  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.59  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.58  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.57  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.55  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.52  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.51  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.49  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.48  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.46  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.45  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.44  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.43  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.42  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.30  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.29  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.26  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.25  | x64           |           | arm64/arm     | x64       |
| 0.1.24  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.23  | x64/arm       | x64       | arm64/x64/arm | x64       |
| 0.1.22  |               | x64       | x64/ia32      |           |
| 0.1.16  |               |           |               |           |
| 0.1.15  |               |           |               |           |
| 0.1.14  |               |           |               |           |
| 0.1.13  |               |           |               |           |
| 0.1.12  |               |           |               |           |
| 0.1.11  |               |           |               |           |
| 0.1.10  |               |           |               |           |
| 0.1.9   |               |           |               |           |
| 0.1.8   |               |           |               |           |
| 0.1.7   |               |           |               |           |
| 0.1.6   |               |           |               |           |
| 0.1.5   |               |           |               |           |
| 0.1.4   |               |           |               |           |
