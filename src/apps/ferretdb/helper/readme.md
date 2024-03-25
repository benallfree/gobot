![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.32/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-ferretdb) ![](https://img.shields.io/npm/dt/gobot-ferretdb) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## FerretDB via npm

This package allows you to use [FerretDB](https://www.ferretdb.com) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot ferretdb --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`ferretdb`)
bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-ferretdb
```

With `gobot-ferretdb` present, Gobot will default to the `ferretdb` version corresponding to the `gobot-ferretdb` version you installed. Now you can use `ferretdb` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`ferretdb`)
bot..run([`--version`])
```

**Locking to a specific version**

The `gobot-ferretdb` package version always mirrors the underlying `ferretdb` [version](#known-versions):

```bash
npm i gobot-ferretdb@1.21.0
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `ferretdb` even though `gobot-ferretdb` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`ferretdb`, { version: `1.21.0` })
bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`ferretdb`, { version: `*` })
bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`ferretdb`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
bot.run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-ferretdb` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-ferretdb
ferretdb --help

# Upgrade to  @latest or any version
npm i -g gobot-ferretdb@latest
```

For more information, see Gobot's [main docs](https://www.npmjs.com/package/gobot) and [API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/docs/readme.md).

## Sample project

View the [FerretDB sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.32/src/apps/ferretdb/sample-project) on github.

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

`gobot-ferretdb` versions mirror `ferretdb` versions. Gobot knows about 54 releases of `ferretdb`:

| Version | linux         |
| ------- | ------------- |
| 1.21.0  | arm64/x64/arm |
| 1.20.1  | arm64/x64/arm |
| 1.20.0  | arm64/x64/arm |
| 1.19.0  | arm64/x64/arm |
| 1.18.0  | arm64/x64/arm |
| 1.17.0  | arm64/x64/arm |
| 1.16.0  | arm64/x64/arm |
| 1.15.0  | arm64/x64/arm |
| 1.14.0  | arm64/x64/arm |
| 1.13.0  | arm64/x64/arm |
| 1.12.1  | arm64/x64     |
| 1.11.0  |               |
| 1.10.1  |               |
| 1.9.0   |               |
| 1.8.0   |               |
| 1.7.0   |               |
| 1.6.1   |               |
| 1.6.0   |               |
| 1.5.0   |               |
| 1.4.0   |               |
| 1.3.0   |               |
| 1.2.1   |               |
| 1.2.0   |               |
| 1.1.0   |               |
| 1.0.0   |               |
| 0.9.4   |               |
| 0.9.3   |               |
| 0.9.2   |               |
| 0.9.1   |               |
| 0.9.0   |               |
| 0.8.1   |               |
| 0.8.0   |               |
| 0.7.1   |               |
| 0.7.0   |               |
| 0.6.2   |               |
| 0.6.1   |               |
| 0.6.0   |               |
| 0.5.4   |               |
| 0.5.3   |               |
| 0.5.2   |               |
| 0.5.1   |               |
| 0.5.0   |               |
| 0.4.0   |               |
| 0.3.0   |               |
| 0.2.1   |               |
| 0.2.0   |               |
| 0.1.1   |               |
| 0.1.0   |               |
| 0.0.6   |               |
| 0.0.5   |               |
| 0.0.4   |               |
| 0.0.3   |               |
| 0.0.2   |               |
| 0.0.1   |               |