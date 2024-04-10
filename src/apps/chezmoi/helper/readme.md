![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-chezmoi) ![](https://img.shields.io/npm/dt/gobot-chezmoi) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## chezmoi via npm

This package allows you to use [chezmoi](https://www.chezmoi.io/) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot chezmoi --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`chezmoi`)
const exitCode = await bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-chezmoi
```

With `gobot-chezmoi` present, Gobot will default to the `chezmoi` version corresponding to the `gobot-chezmoi` version you installed. Now you can use `chezmoi` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`chezmoi`)
const exitCode = await bot.run([`--version`])
```

**Locking to a specific version**

The `gobot-chezmoi` package version always mirrors the underlying `chezmoi` [version](#all-known-releases):

```bash
npm i gobot-chezmoi@2.47.3
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `chezmoi` even though `gobot-chezmoi` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`chezmoi`, { version: `2.47.3` })
const exitCode = await bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`chezmoi`, { version: `*` })
const exitCode = await bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`chezmoi`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
const exitCode = await bot.run([`--version`])
```

**Access the child process**

```js
import { gobot } from 'gobot'
const bot = await gobot(`chezmoi`, {
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

Exactly one `gobot-chezmoi` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-chezmoi
chezmoi --help

# Upgrade to  @latest or any version
npm i -g gobot-chezmoi@latest
```

## CLI

`gobot-chezmoi` comes with a [bin](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#bin) shortcut for CLI usage.

### `chezmoi  [options]`

chezmoi (https://www.chezmoi.io/) runner for Gobot (https://github.com/benallfree/gobot)

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

[Full API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.37/docs/readme.md)

## Sample project

View the [chezmoi sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.37/src/apps/chezmoi/sample-project) on github.

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

`gobot-chezmoi` versions mirror `chezmoi` versions. Gobot knows about 197 releases of `chezmoi`:

| Version | freebsd            | darwin    | linux              | win32          |
| ------- | ------------------ | --------- | ------------------ | -------------- |
| 2.47.3  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.47.2  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.47.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.47.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.46.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.46.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.45.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.44.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.43.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.42.3  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.42.2  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.42.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.42.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.41.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.40.4  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.40.3  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.40.2  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.40.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.40.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.39.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.39.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.38.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.37.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.36.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.36.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.35.2  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.35.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.35.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.34.3  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.34.2  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.34.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.34.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.33.6  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.33.5  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.33.4  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.33.3  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.33.2  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.33.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.33.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.32.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.31.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.31.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.30.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.30.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.29.4  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.29.3  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.29.2  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.29.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.29.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.28.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.27.3  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.27.2  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.27.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.27.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.26.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.25.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.24.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.23.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.22.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.22.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.21.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.21.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.20.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.19.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.18.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.18.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.17.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.17.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.16.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.15.4  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.15.3  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.15.2  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.15.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.15.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.14.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.13.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.13.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.12.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.12.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.11.2  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.11.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.11.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.10.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.10.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.9.5   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.9.4   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.9.3   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.9.2   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.9.1   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.9.0   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.8.0   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.7.5   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.7.4   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.7.3   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.7.2   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.7.1   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.7.0   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.6.1   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.6.0   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.5.1   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.5.0   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.4.0   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.3.1   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.3.0   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.2.0   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.1.6   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.1.5   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.1.4   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.1.3   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.1.2   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.1.1   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.1.0   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.16  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.15  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.13  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.12  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.11  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.10  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.9   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.8   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.7   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.6   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.5   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.4   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.3   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.2   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.1   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.0   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 1.8.11  | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.8.10  | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.8.9   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.8.8   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.8.7   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.8.6   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.8.5   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.8.4   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.8.3   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.8.2   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.8.1   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.8.0   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.7.19  | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.7.18  | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.7.17  | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.7.16  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.7.15  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.7.14  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.7.13  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.7.12  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.7.11  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.7.10  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.7.9   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.7.8   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.7.7   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.7.6   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.7.5   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.7.4   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.7.3   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.7.2   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.7.1   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.7.0   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.6.5   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.6.4   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.6.3   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.6.2   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.6.1   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.6.0   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.5.10  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 1.5.9   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 1.5.8   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 1.5.7   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 1.5.6   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 1.5.5   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 1.5.4   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 1.5.3   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 1.5.2   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 1.5.1   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 1.5.0   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 1.4.2   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 1.4.1   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 1.4.0   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 1.3.0   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 1.2.0   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 1.1.0   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 1.0.0   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 0.0.15  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 0.0.14  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 0.0.13  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 0.0.12  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 0.0.11  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 0.0.10  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 0.0.9   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 0.0.8   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 0.0.7   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 0.0.6   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm |                |
| 0.0.5   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64            |
| 0.0.4   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64            |
| 0.0.3   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64            |
