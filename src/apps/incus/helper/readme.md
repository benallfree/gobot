![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.36/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-incus) ![](https://img.shields.io/npm/dt/gobot-incus) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## incus via npm

This package allows you to use [incus](https://linuxcontainers.org/incus) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot incus --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`incus`)
const exitCode = await bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-incus
```

With `gobot-incus` present, Gobot will default to the `incus` version corresponding to the `gobot-incus` version you installed. Now you can use `incus` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`incus`)
const exitCode = await bot.run([`--version`])
```

**Locking to a specific version**

The `gobot-incus` package version always mirrors the underlying `incus` [version](#all-known-releases):

```bash
npm i gobot-incus@6.0.0
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `incus` even though `gobot-incus` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`incus`, { version: `6.0.0` })
const exitCode = await bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`incus`, { version: `*` })
const exitCode = await bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`incus`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
const exitCode = await bot.run([`--version`])
```

**Access the child process**

```js
import { gobot } from 'gobot'
const bot = await gobot(`incus`, {
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

Exactly one `gobot-incus` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-incus
incus --help

# Upgrade to  @latest or any version
npm i -g gobot-incus@latest
```

## CLI

`gobot-incus` comes with a [bin](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#bin) shortcut for CLI usage.

### `incus  [options]`

incus (https://linuxcontainers.org/incus) runner for Gobot (https://github.com/benallfree/gobot)

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

View the [incus sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.36/src/apps/incus/sample-project) on github.

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

`gobot-incus` versions mirror `incus` versions. Gobot knows about 9 releases of `incus`:

| Version | darwin    | linux     | win32     |
| ------- | --------- | --------- | --------- |
| 6.0.0   | arm64/x64 | arm64/x64 | x64/arm64 |
| 0.7.0   | arm64/x64 | arm64/x64 | x64/arm64 |
| 0.6.0   | arm64/x64 | arm64/x64 | x64/arm64 |
| 0.5.1   | arm64/x64 | arm64/x64 | x64/arm64 |
| 0.5.0   | arm64/x64 | arm64/x64 | x64/arm64 |
| 0.4.0   | arm64/x64 | arm64/x64 | x64/arm64 |
| 0.3.0   | arm64/x64 | arm64/x64 | x64/arm64 |
| 0.2.0   | arm64/x64 | arm64/x64 | x64/arm64 |
| 0.1.0   |           |           |           |
