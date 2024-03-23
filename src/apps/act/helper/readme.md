![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.32/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-act) ![](https://img.shields.io/npm/dt/gobot-act) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## Act via npm

This package allows you to use [Act](https://nektosact.com/) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot act --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`act`)
bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-act
```

With `gobot-act` present, Gobot will default to the `act` version corresponding to the `gobot-act` version you installed. Now you can use `act` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`act`)
bot..run([`--version`])
```

**Locking to a specific version**

The `gobot-act` package version always mirrors the underlying `act` [version](#known-versions):

```bash
npm i gobot-act@0.2.60
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `act` even though `gobot-act` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`act`, { version: `0.2.60` })
bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`act`, { version: `*` })
bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`act`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
bot.run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-act` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-act
act --help

# Upgrade to  @latest or any version
npm i -g gobot-act@latest
```

For more information, see Gobot's [main docs](https://www.npmjs.com/package/gobot) and [API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/docs/readme.md).

## Quirks

### `$HOME` required

`act` needs the `HOME` environment variable defined. In API mode, Gobot does NOT automatically forward environment variables, so use this:

```js
gobot(`act`, {
  env: process.env,
}).run([`--help`])
```

## Sample project

View the [Act sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.32/src/apps/act/sample-project) on github.

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

`gobot-act` versions mirror `act` versions. Gobot knows about 68 releases of `act`:

| Version | darwin    | linux              | win32          |
| ------- | --------- | ------------------ | -------------- |
| 0.2.60  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.59  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.58  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.57  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.56  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.55  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.54  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.53  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.52  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.51  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.50  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.49  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.48  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.46  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.45  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.44  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.43  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.42  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.41  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.40  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.39  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.38  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.37  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.36  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.35  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.34  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.33  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.32  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.31  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.30  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.29  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.28  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.27  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.26  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.25  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 0.2.24  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.2.23  | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 0.2.22  | x64       | x64/ia32           | x64/ia32       |
| 0.2.21  | x64       | x64/ia32           | x64/ia32       |
| 0.2.20  | x64       | x64/ia32           | x64/ia32       |
| 0.2.19  | x64       | x64/ia32           | x64/ia32       |
| 0.2.18  | x64       | x64/ia32           | x64/ia32       |
| 0.2.17  | x64       | x64/ia32           | x64/ia32       |
| 0.2.16  | x64       | x64/ia32           | x64/ia32       |
| 0.2.15  | x64       | x64/ia32           | x64/ia32       |
| 0.2.14  | x64       | x64/ia32           | x64/ia32       |
| 0.2.13  | x64       | x64/ia32           | x64/ia32       |
| 0.2.12  | x64       | x64/ia32           | x64/ia32       |
| 0.2.10  | x64       | x64/ia32           | x64/ia32       |
| 0.2.9   | x64       | x64/ia32           | x64/ia32       |
| 0.2.8   | x64       | x64/ia32           | x64/ia32       |
| 0.2.7   | x64       | x64/ia32           | x64/ia32       |
| 0.2.6   | x64       | x64/ia32           | x64/ia32       |
| 0.2.5   | x64       | x64/ia32           | x64/ia32       |
| 0.2.4   | x64       | x64/ia32           | x64/ia32       |
| 0.2.3   | x64       | x64/ia32           |                |
| 0.2.2   | x64       | x64/ia32           |                |
| 0.2.1   | x64       | x64/ia32           |                |
| 0.2.0   | x64       | x64/ia32           |                |
| 0.1.3   | x64       | x64/ia32           | x64/ia32       |
| 0.1.2   | x64       | x64/ia32           | x64/ia32       |
| 0.1.1   | x64       | x64/ia32           | x64/ia32       |
| 0.1.0   | x64       | x64/ia32           | x64/ia32       |
| 0.0.5   | x64       | x64/ia32           | x64/ia32       |
| 0.0.4   | x64       | x64/ia32           | x64/ia32       |
| 0.0.3   | x64       | x64/ia32           | x64/ia32       |
| 0.0.2   | x64       | x64/ia32           | x64/ia32       |
| 0.0.1   | x64       | x64/ia32           | x64/ia32       |
