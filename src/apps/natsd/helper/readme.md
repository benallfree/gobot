![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.34/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-natsd) ![](https://img.shields.io/npm/dt/gobot-natsd) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## nats-server via npm

This package allows you to use [nats-server](https://nats.io) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot natsd --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`natsd`)
bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-natsd
```

With `gobot-natsd` present, Gobot will default to the `natsd` version corresponding to the `gobot-natsd` version you installed. Now you can use `natsd` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`natsd`)
bot..run([`--version`])
```

**Locking to a specific version**

The `gobot-natsd` package version always mirrors the underlying `natsd` [version](#known-versions):

```bash
npm i gobot-natsd@2.11.0-preview.1
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `natsd` even though `gobot-natsd` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`natsd`, { version: `2.11.0-preview.1` })
bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`natsd`, { version: `*` })
bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`natsd`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
bot.run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-natsd` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-natsd
natsd --help

# Upgrade to  @latest or any version
npm i -g gobot-natsd@latest
```

For more information, see Gobot's [main docs](https://www.npmjs.com/package/gobot) and [API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/docs/readme.md).

## Quirks

`nats-server` has been renamed `natsd` in Gobot because Gobot requires app names to be alphanumeric for maximum compatibility across systems.

## Sample project

View the [nats-server sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.34/src/apps/natsd/sample-project) on github.

## Try Gobot's other apps

Gobot has a growing list of [official apps](https://www.npmjs.com/package/gobot#official-gobot-apps). Have you tried them all?

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

`gobot-natsd` versions mirror `natsd` versions. Gobot knows about 106 releases of `natsd`:

| Version          | freebsd | darwin    | linux          | win32          |
| ---------------- | ------- | --------- | -------------- | -------------- |
| 2.11.0-preview.1 | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.10.12          | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.10.11          | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.10.10          | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.10.9           | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.10.8           | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.10.7           | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.10.6           | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.10.5           | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.10.4           | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.10.3           | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.10.2           | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.10.1           | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.10.0           | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.9.25           | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.9.24           | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.9.23           | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.9.22           | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.9.21           | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.9.20           | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.9.19           | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.9.18           | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.9.17           | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.9.16           | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.9.15           | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.9.14           | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.9.12           | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.9.11           | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.9.10           | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.9.9            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.9.8            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.9.7            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.9.6            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.9.5            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.9.4            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.9.3            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.9.2            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.9.1            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.9.0            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.8.4            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.8.3            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.8.2            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.8.1            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.8.0            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.7.4            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.7.3            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.7.2            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.7.1            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.7.0            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32/arm64 |
| 2.6.6            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32       |
| 2.6.5            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32       |
| 2.6.4            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32       |
| 2.6.3            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32       |
| 2.6.2            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32       |
| 2.6.1            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32       |
| 2.6.0            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32       |
| 2.5.0            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32       |
| 2.4.0            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32       |
| 2.3.4            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32       |
| 2.3.3            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32       |
| 2.3.2            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32       |
| 2.3.1            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32       |
| 2.3.0            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32       |
| 2.2.6            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32       |
| 2.2.5            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32       |
| 2.2.4            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32       |
| 2.2.3            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32       |
| 2.2.2            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32       |
| 2.2.1            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32       |
| 2.2.0            | x64     | arm64/x64 | arm64/x64/ia32 | x64/ia32       |
| 2.1.9            |         | x64       | arm64/x64/ia32 | x64/ia32       |
| 2.1.8            |         | x64       | arm64/x64/ia32 | x64/ia32       |
| 2.1.7            |         | x64       | arm64/x64/ia32 | x64/ia32       |
| 2.1.6            |         | x64       | arm64/x64/ia32 | x64/ia32       |
| 2.1.4            |         | x64       | arm64/x64/ia32 | x64/ia32       |
| 2.1.2            |         | x64       | arm64/x64/ia32 | x64/ia32       |
| 2.1.0            |         | x64       | arm64/x64/ia32 | x64/ia32       |
| 2.0.4            |         | x64       | arm64/x64/ia32 | x64/ia32       |
| 2.0.2            |         | x64       | arm64/x64/ia32 | x64/ia32       |
| 2.0.0            |         | x64       | arm64/x64/ia32 | x64/ia32       |
| 2.0.0-RC14       |         | x64       | arm64/x64/ia32 | x64/ia32       |
| 1.4.1            |         | x64       | arm64/x64/ia32 | x64/ia32       |
| 1.4.0            |         | x64       | arm64/x64/ia32 | x64/ia32       |
| 1.3.0            |         | x64       | arm64/x64/ia32 | x64/ia32       |
| 1.2.0            |         | x64       | arm64/x64/ia32 | x64/ia32       |
| 1.1.0            |         | x64       | arm64/x64/ia32 | x64/ia32       |
| 1.0.6            |         | x64       | arm64/x64/ia32 | x64/ia32       |
| 1.0.4            |         | x64       | arm64/x64/ia32 | x64/ia32       |
| 1.0.2            |         | x64       | x64/ia32       | x64/ia32       |
| 1.0.0            |         | x64       | x64/ia32       | x64/ia32       |
| 0.9.6            |         | x64       | x64/ia32/arm   | x64/ia32       |
| 0.9.4            |         | x64       | x64/ia32/arm   | x64/ia32       |
| 0.9.2            |         | x64       | x64/ia32/arm   | x64/ia32       |
| 0.8.1            |         | x64       | x64/ia32/arm   | x64/ia32       |
| 0.8.0            |         | x64       | x64/ia32/arm   | x64/ia32       |
| 0.7.2            |         | x64       | x64/arm        |                |
| 0.7.0            |         | x64       | x64            |                |
| 0.6.8            |         | x64       | x64            |                |
| 0.6.6            |         | x64       | x64/arm        |                |
| 0.6.4            |         | x64       | x64            |                |
| 0.6.2            |         | x64       | x64            |                |
| 0.6.0            |         | x64       | x64            |                |
| 0.5.6            |         | x64       | x64            |                |
| 0.5.4            |         | x64       | x64            |                |
| 0.5.2            |         | x64       | x64            |                |
| 0.5.1            |         | x64       | x64            |                |
