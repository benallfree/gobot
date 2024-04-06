![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.35/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-age) ![](https://img.shields.io/npm/dt/gobot-age) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## Age via npm

This package allows you to use [Age](https://age-encryption.org/) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot age --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`age`)
bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-age
```

With `gobot-age` present, Gobot will default to the `age` version corresponding to the `gobot-age` version you installed. Now you can use `age` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`age`)
bot..run([`--version`])
```

**Locking to a specific version**

The `gobot-age` package version always mirrors the underlying `age` [version](#all-known-releases):

```bash
npm i gobot-age@1.1.1
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `age` even though `gobot-age` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`age`, { version: `1.1.1` })
bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`age`, { version: `*` })
bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`age`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
bot.run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-age` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-age
age --help

# Upgrade to  @latest or any version
npm i -g gobot-age@latest
```

## CLI

`gobot-age` comes with a [bin](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#bin) shortcut for CLI usage.

### `age  [options]`

Age (https://age-encryption.org/) runner for Gobot (https://github.com/benallfree/gobot)

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

[Full API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.35/docs/readme.md)

## Sample project

View the [Age sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.35/src/apps/age/sample-project) on github.

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

`gobot-age` versions mirror `age` versions. Gobot knows about 14 releases of `age`:

| Version     | freebsd | darwin    | linux         | win32 |
| ----------- | ------- | --------- | ------------- | ----- |
| 1.1.1       | x64     | arm64/x64 | arm64/x64/arm | x64   |
| 1.1.0       | x64     | arm64/x64 | arm64/x64/arm | x64   |
| 1.1.0-rc.1  | x64     | arm64/x64 | arm64/x64/arm | x64   |
| 1.0.0       | x64     | arm64/x64 | arm64/x64/arm | x64   |
| 1.0.0-rc.3  | x64     | arm64/x64 | arm64/x64/arm | x64   |
| 1.0.0-rc.2  | x64     | arm64/x64 | arm64/x64/arm | x64   |
| 1.0.0-rc.1  |         | x64       | arm64/x64/arm | x64   |
| 1.0.0-beta7 |         | x64       | arm64/x64/arm | x64   |
| 1.0.0-beta6 |         | x64       | arm64/x64/arm | x64   |
| 1.0.0-beta5 |         |           |               |       |
| 1.0.0-beta4 |         |           |               |       |
| 1.0.0-beta3 |         |           |               |       |
| 1.0.0-beta2 |         | x64       | arm64/x64/arm | x64   |
| 1.0.0-beta1 |         |           |               |       |
