![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-gotifyc) ![](https://img.shields.io/npm/dt/gobot-gotifyc) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## Gotify CLI via npm

This package allows you to use [Gotify CLI](https://github.com/gotify/cli) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot gotifyc --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`gotifyc`)
const exitCode = await bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-gotifyc
```

With `gobot-gotifyc` present, Gobot will default to the `gotifyc` version corresponding to the `gobot-gotifyc` version you installed. Now you can use `gotifyc` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`gotifyc`)
const exitCode = await bot.run([`--version`])
```

**Locking to a specific version**

The `gobot-gotifyc` package version always mirrors the underlying `gotifyc` [version](#all-known-releases):

```bash
npm i gobot-gotifyc@2.2.3
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `gotifyc` even though `gobot-gotifyc` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`gotifyc`, { version: `2.2.3` })
const exitCode = await bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`gotifyc`, { version: `*` })
const exitCode = await bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`gotifyc`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
const exitCode = await bot.run([`--version`])
```

**Access the child process**

```js
import { gobot } from 'gobot'
const bot = await gobot(`gotifyc`, {
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

Exactly one `gobot-gotifyc` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-gotifyc
gotifyc --help

# Upgrade to  @latest or any version
npm i -g gobot-gotifyc@latest
```

## CLI

`gobot-gotifyc` comes with a [bin](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#bin) shortcut for CLI usage.

### `gotifyc  [options]`

Gotify CLI (https://github.com/gotify/cli) runner for Gobot (https://github.com/benallfree/gobot)

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

## Quirks

Because Gotify has both client and server binaries, this one is named `gotifyc` to signify that it is the CLI, while the server is named `gotify`.

## Sample project

View the [Gotify CLI sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.37/src/apps/gotifyc/sample-project) on github.

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

`gobot-gotifyc` versions mirror `gotifyc` versions. Gobot knows about 10 releases of `gotifyc`:

| Version | darwin    | linux              | win32    |
| ------- | --------- | ------------------ | -------- |
| 2.2.3   | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 2.2.2   | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 2.2.1   | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 2.2.0   | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 2.1.1   | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 2.1.0   |           | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0   |           | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.2   |           | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.1   |           | arm64/x64/arm      | x64      |
| 1.2.0   |           | arm64/x64/arm      | x64      |
