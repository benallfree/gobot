![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.36/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-AdGuardHome) ![](https://img.shields.io/npm/dt/gobot-AdGuardHome) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## AdGuardHome via npm

This package allows you to use [AdGuardHome](https://adguard.com/adguard-home.html) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot AdGuardHome --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`AdGuardHome`)
const exitCode = await bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-adguardhome
```

With `gobot-adguardhome` present, Gobot will default to the `AdGuardHome` version corresponding to the `gobot-adguardhome` version you installed. Now you can use `AdGuardHome` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`AdGuardHome`)
const exitCode = await bot.run([`--version`])
```

**Locking to a specific version**

The `gobot-adguardhome` package version always mirrors the underlying `AdGuardHome` [version](#all-known-releases):

```bash
npm i gobot-adguardhome@0.108.0-b.54
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `AdGuardHome` even though `gobot-adguardhome` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`AdGuardHome`, { version: `0.108.0-b.54` })
const exitCode = await bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`AdGuardHome`, { version: `*` })
const exitCode = await bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`AdGuardHome`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
const exitCode = await bot.run([`--version`])
```

**Access the child process**

```js
import { gobot } from 'gobot'
const bot = await gobot(`AdGuardHome`, {
  env: process.env,
})
const exitCode = await bot.run(
  [`--help`],
  { cwd: `./foo` }, // SpawnOptions
  (proc) => {
    // ChildProcess
    proc.stdout.on('exit', (code) => {
      console.log(`process has exited`)
    })
  },
)
```

**Install globally for CLI access**

Exactly one `gobot-adguardhome` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-adguardhome
AdGuardHome --help

# Upgrade to  @latest or any version
npm i -g gobot-adguardhome@latest
```

## CLI

`gobot-adguardhome` comes with a [bin](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#bin) shortcut for CLI usage.

### `AdGuardHome  [options]`

AdGuardHome (https://adguard.com/adguard-home.html) runner for Gobot (https://github.com/benallfree/gobot)

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

[Full API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.36/docs/readme.md)

## Sample project

View the [AdGuardHome sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.36/src/apps/AdGuardHome/sample-project) on github.

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

`gobot-adguardhome` versions mirror `AdGuardHome` versions. Gobot knows about 177 releases of `AdGuardHome`:

| Version        | freebsd            | darwin    | linux              | win32          |
| -------------- | ------------------ | --------- | ------------------ | -------------- |
| 0.108.0-b.54   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.53   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.52   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.51   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.50   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.49   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.48   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.47   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.46   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.45   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.44   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.43   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.42   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.41   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.40   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.39   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.38   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.37   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.36   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.35   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.34   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.33   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.32   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.31   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.30   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.29   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.28   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.27   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.26   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.25   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.24   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.23   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.22   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.21   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.20   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.19   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.18   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.17   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.16   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.15   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.14   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.13   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.12   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.11   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.10   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.9    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.8    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.7    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.6    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.5    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.4    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.3    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.108.0-b.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.48       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.47       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.46       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.45       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.44       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.43       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.42       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.41       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.40       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.39       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.38       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.37       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.36       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.35       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.34       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.33       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.32       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.31       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.30       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.29       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.28       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.27       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.26       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.25       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.24       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.23       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.22       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.21       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.20       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.19       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.18       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.17       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.16       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.15       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.14       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.13       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.12       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.11       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.10       | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.9        | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.107.8        | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.107.7        | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.107.6        | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.107.5        | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.107.4        | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.107.3        | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.107.2        | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.107.1        | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.107.0        | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.107.0-b.17   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.107.0-b.16   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.107.0-b.15   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.107.0-b.14   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.107.0-b.13   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.107.0-b.12   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.107.0-b.11   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.107.0-b.10   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.107.0-b.9    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.107.0-b.8    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.107.0-b.7    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.107.0-b.6    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.107.0-b.5    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.107.0-b.4    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.107.0-b.3    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.107.0-b.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.107.0-b.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.106.3        | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.106.2        | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.106.1        | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.106.0        | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.106.0-b.4    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.106.0-b.3    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.106.0-b.2    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.106.0-b.1    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.105.2        | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.105.1        | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.105.0        | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.105.0-beta.4 | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.105.0-beta.3 | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.105.0-beta.2 | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.105.0-beta.1 | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.104.3        | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.104.1        | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.104.0        | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.104.0-beta3  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.104.0-beta2  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.104.0-beta1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.103.3        | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.103.2        | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.103.1        | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.103.0-beta3  |                    |           |                    |                |
| 0.103.0-beta2  |                    |           |                    |                |
| 0.103.0-beta1  |                    |           |                    |                |
| 0.102.0        | x64                |           | arm64/x64/ia32/arm | x64/ia32       |
| 0.101.0        | x64                |           | arm64/x64/ia32/arm | x64/ia32       |
| 0.100.9        | x64                |           | arm64/x64/ia32/arm | x64/ia32       |
| 0.100.8        | x64                |           | arm64/x64/ia32/arm | x64/ia32       |
| 0.100.7        | x64                |           | arm64/x64/ia32/arm | x64/ia32       |
| 0.100.6        | x64                |           | arm64/x64/ia32/arm | x64/ia32       |
| 0.100.5        | x64                |           | arm64/x64/ia32/arm | x64/ia32       |
| 0.100.4        | x64                |           | arm64/x64/ia32/arm | x64/ia32       |
| 0.100.2        | x64                |           | arm64/x64/ia32/arm | x64/ia32       |
| 0.99.3         | x64                |           | arm64/x64/ia32/arm | x64/ia32       |
| 0.99.2         | x64                |           | arm64/x64/ia32/arm | x64/ia32       |
| 0.99.1         | x64                |           | arm64/x64/ia32/arm | x64/ia32       |
| 0.99.0         | x64                |           | arm64/x64/ia32/arm | x64/ia32       |
| 0.98.1         | x64                |           | arm64/x64/ia32/arm | x64/ia32       |
| 0.98.0         | x64                |           | arm64/x64/ia32/arm | x64/ia32       |
| 0.97.1         | x64                |           | arm64/x64/ia32/arm | x64/ia32       |
| 0.97.0         | x64                |           | arm64/x64/ia32/arm | x64/ia32       |
| 0.96.0         |                    |           | arm64/x64/ia32/arm | x64/ia32       |
| 0.96.0-hotfix  |                    |           | arm64/x64/ia32/arm | x64/ia32       |
| 0.95.0         |                    |           | arm64/x64/ia32/arm | x64/ia32       |
| 0.95.0-hotfix  |                    |           | arm64/x64/ia32/arm | x64/ia32       |
| 0.94.0         |                    |           | arm64/x64/ia32/arm | x64/ia32       |
| 0.93.0         |                    |           | arm64/x64/ia32/arm |                |
| 0.92.0         |                    |           | arm64/x64/ia32/arm |                |
| 0.92.0-hotfix2 |                    |           | arm64/x64/ia32/arm |                |
| 0.92.0-hotfix1 |                    |           | arm64/x64/ia32/arm |                |
| 0.91.0         |                    |           | arm64/x64/ia32/arm |                |
| 0.9.0          |                    |           | x64/ia32/arm       |                |
| 0.9.0-hotfix1  |                    |           | arm64/x64/ia32/arm |                |
| 0.1.0          |                    |           | arm64/x64/ia32/arm |                |
