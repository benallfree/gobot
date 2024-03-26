![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.34/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-croc) ![](https://img.shields.io/npm/dt/gobot-croc) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## croc via npm

This package allows you to use [croc](https://schollz.com/software/croc6) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot croc --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`croc`)
bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-croc
```

With `gobot-croc` present, Gobot will default to the `croc` version corresponding to the `gobot-croc` version you installed. Now you can use `croc` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`croc`)
bot..run([`--version`])
```

**Locking to a specific version**

The `gobot-croc` package version always mirrors the underlying `croc` [version](#all-known-releases):

```bash
npm i gobot-croc@9.6.14
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `croc` even though `gobot-croc` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`croc`, { version: `9.6.14` })
bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`croc`, { version: `*` })
bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`croc`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
bot.run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-croc` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-croc
croc --help

# Upgrade to  @latest or any version
npm i -g gobot-croc@latest
```

For more information, see Gobot's [main docs](https://www.npmjs.com/package/gobot) and [API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/docs/readme.md).

## Sample project

View the [croc sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.34/src/apps/croc/sample-project) on github.

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

`gobot-croc` versions mirror `croc` versions. Gobot knows about 149 releases of `croc`:

| Version | freebsd            | darwin    | linux              | win32          |
| ------- | ------------------ | --------- | ------------------ | -------------- |
| 9.6.14  | arm64/x64          | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 9.6.13  | arm64/x64          | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 9.6.12  |                    | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 9.6.11  |                    | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 9.6.10  |                    | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 9.6.9   |                    | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 9.6.8   |                    | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 9.6.7   |                    | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 9.6.6   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 9.6.5   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 9.6.4   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 9.6.3   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 9.6.2   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 9.6.1   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 9.6.0   | arm64/x64/ia32     | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 9.5.6   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 9.5.5   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 9.5.4   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 9.5.3   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 9.5.2   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 9.5.1   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 9.5.0   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 9.4.2   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 9.4.1   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 9.4.0   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 9.3.0   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 9.2.1   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 9.2.0   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 9.1.6   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 9.1.5   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 9.1.4   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 9.1.3   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 9.1.2   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 9.1.1   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 9.1.0   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 9.0.0   | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 8.6.12  | arm64/x64/ia32     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 8.6.11  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 8.6.10  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 8.6.9   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 8.6.8   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 8.6.7   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.6.6   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.6.5   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.6.4   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.6.3   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.6.2   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.6.1   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.6.0   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.5.3   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.5.2   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.5.1   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.5.0   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.4.0   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.3.2   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.3.1   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.3.0   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.2.1   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.2.0   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.1.3   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.1.2   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.1.1   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.1.0   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.0.13  | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.0.12  | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.0.11  | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.0.10  | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.0.9   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.0.8   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.0.7   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.0.6   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.0.5   | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.0.4   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.0.3   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.0.2   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.0.1   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 8.0.0   | ia32/arm           | x64       | x64/ia32/arm       | x64/ia32       |
| 6.4.11  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.4.10  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.4.9   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.4.8   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.4.7   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.4.6   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.4.5   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.4.4   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.4.3   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.4.2   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.4.1   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.4.0   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.3.0   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.2.4   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.2.3   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.2.2   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.2.1   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.2.0   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.1.5   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.1.4   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.1.3   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.1.2   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.1.1   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.1.0   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.0.12  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.0.11  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.0.10  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.0.9   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.0.8   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.0.7   | x64/ia32/arm       |           | arm64/x64/ia32     | x64/ia32       |
| 6.0.6   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.0.5   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.0.4   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.0.3   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.0.2   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.0.1   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 6.0.0   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 4.1.6   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 4.1.5   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 4.1.4   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 4.1.3   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 4.1.2   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 4.1.1   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 4.1.0   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 4.0.8   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 4.0.7   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 4.0.6   | x64/ia32           | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 4.0.5   |                    | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 4.0.4   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 4.0.3   |                    | x64       | x64/ia32/arm       | x64/ia32       |
| 4.0.2   |                    | x64       | x64/ia32/arm       | x64/ia32       |
| 4.0.1   |                    | x64       | x64/ia32/arm       | x64/ia32       |
| 4.0.0   |                    | x64       | x64/ia32/arm       | x64/ia32       |
| 3.0.7   |                    |           |                    |                |
| 3.0.6   |                    | x64       | x64/ia32/arm       | x64/ia32       |
| 3.0.5   |                    | x64       | x64/ia32/arm       | x64/ia32       |
| 3.0.4   |                    | x64       | x64/ia32/arm       | x64/ia32       |
| 3.0.3   |                    | x64       | x64/ia32/arm       | x64/ia32       |
| 3.0.2   |                    |           | ia32/arm           | ia32           |
| 3.0.1   |                    | x64       | x64/ia32/arm       | x64/ia32       |
| 3.0.0   |                    | x64       | x64/ia32/arm       | x64/ia32       |
| 2.2.0   |                    | x64       | x64/ia32/arm       | x64/ia32       |
| 1.0.0   |                    | x64       | x64/ia32/arm       | x64/ia32       |
| 0.6.0   |                    | x64       | x64/ia32/arm       | x64/ia32       |
| 0.5.0   |                    | x64       | x64/ia32/arm       | x64/ia32       |
| 0.4.1   |                    | x64       | x64/ia32/arm       | x64/ia32       |
| 0.4.0   |                    | x64       | x64/ia32/arm       | x64/ia32       |
| 0.3.2   |                    | x64       | x64/ia32/arm       | x64/ia32       |
| 0.3.1   |                    | x64       | x64/ia32/arm       | x64/ia32       |
| 0.3.0   |                    | x64       | x64/ia32/arm       | x64/ia32       |
| 0.2.0   |                    | x64       | x64/ia32/arm       | x64/ia32       |
| 0.1.0   |                    | x64       | x64/ia32/arm       | x64/ia32       |
