![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-kubo) ![](https://img.shields.io/npm/dt/gobot-kubo) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## kubo via npm

This package allows you to use [kubo](https://docs.ipfs.tech/how-to/command-line-quick-start/) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot kubo --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`kubo`)
const exitCode = await bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-kubo
```

With `gobot-kubo` present, Gobot will default to the `kubo` version corresponding to the `gobot-kubo` version you installed. Now you can use `kubo` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`kubo`)
const exitCode = await bot.run([`--version`])
```

**Locking to a specific version**

The `gobot-kubo` package version always mirrors the underlying `kubo` [version](#all-known-releases):

```bash
npm i gobot-kubo@0.28.0
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `kubo` even though `gobot-kubo` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`kubo`, { version: `0.28.0` })
const exitCode = await bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`kubo`, { version: `*` })
const exitCode = await bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`kubo`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
const exitCode = await bot.run([`--version`])
```

**Access the child process**

```js
import { gobot } from 'gobot'
const bot = await gobot(`kubo`, {
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

Exactly one `gobot-kubo` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-kubo
kubo --help

# Upgrade to  @latest or any version
npm i -g gobot-kubo@latest
```

## CLI

`gobot-kubo` comes with a [bin](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#bin) shortcut for CLI usage.

### `kubo  [options]`

kubo (https://docs.ipfs.tech/how-to/command-line-quick-start/) runner for Gobot (https://github.com/benallfree/gobot)

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

View the [kubo sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.37/src/apps/kubo/sample-project) on github.

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

`gobot-kubo` versions mirror `kubo` versions. Gobot knows about 83 releases of `kubo`:

| Version    | freebsd      | darwin    | linux              | win32          |
| ---------- | ------------ | --------- | ------------------ | -------------- |
| 0.28.0     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.28.0-rc1 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.27.0     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.27.0-rc2 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.27.0-rc1 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.26.0     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.26.0-rc1 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.25.0     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.25.0-rc1 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.24.0     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.24.0-rc2 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.24.0-rc1 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.23.0     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.23.0-rc1 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.22.0     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.22.0-rc1 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.21.1     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.21.0     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.21.0-rc3 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.21.0-rc2 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.21.0-rc1 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.20.0     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.20.0-rc2 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.20.0-rc1 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.19.2     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.19.1     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.19.0     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.19.0-rc1 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.18.1     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.18.0     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.18.0-rc2 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.18.0-rc1 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.17.0     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.17.0-rc2 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.17.0-rc1 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.16.0     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.16.0-rc1 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.15.0     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.15.0-rc1 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.14.0     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.14.0-rc1 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.13.1     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.13.0     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.13.0-rc1 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.12.2     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.12.1     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.12.0     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.12.0-rc1 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.11.1     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.11.0     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.11.0-rc2 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.11.0-rc1 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.10.0     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.10.0-rc2 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.10.0-rc1 | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.9.1      | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.9.0      | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.9.0-rc2  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.9.0-rc1  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.8.0      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.8.0-rc2  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.8.0-rc1  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.7.0      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.7.0-rc2  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.7.0-rc1  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.6.0      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.6.0-rc7  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.6.0-rc6  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.6.0-rc1  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.5.1      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.5.0      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.5.0-rc4  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.5.0-rc3  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.5.0-rc2  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.5.0-rc1  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.4.23     | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.4.22     | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.4.22-rc1 | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.4.21     | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.4.20     | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.4.19     | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.4.18     | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.4.17     | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
