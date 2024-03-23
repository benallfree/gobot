![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.32/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-dasel) ![](https://img.shields.io/npm/dt/gobot-dasel) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## dasel via npm

This package allows you to use [dasel](https://daseldocs.tomwright.me) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot dasel --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`dasel`)
bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-dasel
```

With `gobot-dasel` present, Gobot will default to the `dasel` version corresponding to the `gobot-dasel` version you installed. Now you can use `dasel` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`dasel`)
bot..run([`--version`])
```

**Locking to a specific version**

The `gobot-dasel` package version always mirrors the underlying `dasel` [version](#known-versions):

```bash
npm i gobot-dasel@2.7.0
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `dasel` even though `gobot-dasel` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`dasel`, { version: `2.7.0` })
bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`dasel`, { version: `*` })
bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`dasel`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
bot.run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-dasel` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-dasel
dasel --help

# Upgrade to  @latest or any version
npm i -g gobot-dasel@latest
```

For more information, see Gobot's [main docs](https://www.npmjs.com/package/gobot) and [API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/docs/readme.md).

## Sample project

View the [dasel sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.32/src/apps/dasel/sample-project) on github.

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

`gobot-dasel` versions mirror `dasel` versions. Gobot knows about 82 releases of `dasel`:

| Version | darwin    | linux          | win32    |
| ------- | --------- | -------------- | -------- |
| 2.7.0   | arm64/x64 | arm64/x64/ia32 | x64/ia32 |
| 2.6.0   | arm64/x64 | arm64/x64/ia32 | x64/ia32 |
| 2.5.0   | arm64/x64 | arm64/x64/ia32 | x64/ia32 |
| 2.4.1   | arm64/x64 | arm64/x64/ia32 | x64/ia32 |
| 2.4.0   | arm64/x64 | arm64/x64/ia32 | x64/ia32 |
| 2.3.6   | arm64/x64 | arm64/x64/ia32 | x64/ia32 |
| 2.3.5   | arm64/x64 | arm64/x64/ia32 | x64/ia32 |
| 2.3.4   | arm64/x64 | arm64/x64/ia32 | x64/ia32 |
| 2.3.3   | arm64/x64 | arm64/x64/ia32 | x64/ia32 |
| 2.3.2   | arm64/x64 | arm64/x64/ia32 | x64/ia32 |
| 2.3.1   | arm64/x64 | arm64/x64/ia32 | x64/ia32 |
| 2.3.0   | arm64/x64 | arm64/x64/ia32 | x64/ia32 |
| 2.2.0   | arm64/x64 | arm64/x64/ia32 | x64/ia32 |
| 2.1.2   | arm64/x64 | arm64/x64/ia32 | x64/ia32 |
| 2.1.1   | arm64/x64 | arm64/x64/ia32 | x64/ia32 |
| 2.1.0   | arm64/x64 | arm64/x64/ia32 | x64/ia32 |
| 2.0.2   | arm64/x64 | arm64/x64/ia32 | x64/ia32 |
| 2.0.1   | arm64/x64 | arm64/x64/ia32 | x64/ia32 |
| 2.0.0   | arm64/x64 | arm64/x64/ia32 | x64/ia32 |
| 1.27.3  | arm64/x64 | arm64/x64/ia32 | x64/ia32 |
| 1.27.2  | arm64/x64 | arm64/x64/ia32 | x64/ia32 |
| 1.27.1  | arm64/x64 | arm64/x64/ia32 | x64/ia32 |
| 1.27.0  | arm64/x64 | arm64/x64/ia32 | x64/ia32 |
| 1.26.1  | arm64/x64 | arm64/x64/ia32 | x64/ia32 |
| 1.26.0  | x64       | arm64/x64/ia32 | x64/ia32 |
| 1.25.0  | x64       | arm64/x64/ia32 | x64/ia32 |
| 1.24.3  | x64       | arm64/x64/ia32 | x64/ia32 |
| 1.24.2  | x64       | arm64/x64/ia32 | x64/ia32 |
| 1.24.1  | x64       | arm64/x64/ia32 | x64/ia32 |
| 1.24.0  | x64       | arm64/x64/ia32 | x64/ia32 |
| 1.23.0  | x64       | arm64/x64/ia32 | x64/ia32 |
| 1.22.1  | x64       | arm64/x64/ia32 | x64/ia32 |
| 1.22.0  | x64       | arm64/x64/ia32 | x64/ia32 |
| 1.21.2  | x64       | arm64/x64/ia32 | x64/ia32 |
| 1.21.1  | x64       | arm64/x64/ia32 | x64/ia32 |
| 1.21.0  | x64       | arm64/x64/ia32 | x64/ia32 |
| 1.20.1  | x64       | arm64/x64/ia32 | x64/ia32 |
| 1.20.0  | x64       | arm64/x64/ia32 | x64/ia32 |
| 1.19.0  | x64       | arm64/x64/ia32 | x64/ia32 |
| 1.18.0  | x64       | arm64/x64/ia32 | x64/ia32 |
| 1.17.0  | x64       | arm64/x64/ia32 | x64/ia32 |
| 1.16.1  | x64       | arm64/x64/ia32 | x64/ia32 |
| 1.16.0  | x64       | arm64/x64/ia32 | x64/ia32 |
| 1.15.0  | x64       | arm64/x64/ia32 | x64/ia32 |
| 1.14.1  | x64       | arm64/x64/ia32 | x64/ia32 |
| 1.14.0  | x64       | x64/ia32       | x64/ia32 |
| 1.13.6  | x64       | x64/ia32       | x64/ia32 |
| 1.13.5  | x64       | x64/ia32       | x64/ia32 |
| 1.13.4  | x64       | x64/ia32       | x64/ia32 |
| 1.13.3  | x64       | x64/ia32       | x64/ia32 |
| 1.13.2  | x64       | x64/ia32       | x64/ia32 |
| 1.13.1  | x64       | x64/ia32       | x64/ia32 |
| 1.13.0  | x64       | x64/ia32       | x64/ia32 |
| 1.12.2  | x64       | x64/ia32       | x64/ia32 |
| 1.12.1  | x64       | x64/ia32       | x64/ia32 |
| 1.12.0  | x64       | x64            | x64      |
| 1.11.0  | x64       | x64            | x64      |
| 1.10.0  | x64       | x64            | x64      |
| 1.9.1   | x64       | x64            | x64      |
| 1.9.0   | x64       | x64            | x64      |
| 1.8.0   | x64       | x64            | x64      |
| 1.7.0   | x64       | x64            | x64      |
| 1.6.2   | x64       | x64            | x64      |
| 1.6.1   | x64       | x64            | x64      |
| 1.6.0   | x64       | x64            | x64      |
| 1.5.1   | x64       | x64            | x64      |
| 1.5.0   | x64       | x64            | x64      |
| 1.4.1   | x64       | x64            | x64      |
| 1.4.0   | x64       | x64            | x64      |
| 1.3.0   | x64       | x64            | x64      |
| 1.2.0   | x64       | x64            | x64      |
| 1.1.0   | x64       | x64            | x64      |
| 1.0.4   | x64       | x64            | x64      |
| 1.0.3   | x64       | x64            | x64      |
| 1.0.2   | x64       | x64            | x64      |
| 1.0.1   | x64       | x64            | x64      |
| 1.0.0   | x64       | x64            | x64      |
| 0.0.5   | x64       | x64            | x64      |
| 0.0.4   | x64       | x64            | x64      |
| 0.0.3   | x64       | x64            | x64      |
| 0.0.2   | x64       | x64            | x64      |
| 0.0.1   | x64       | x64            | x64      |
