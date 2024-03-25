![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.33/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-gocryptfs) ![](https://img.shields.io/npm/dt/gobot-gocryptfs) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## gocryptfs via npm

This package allows you to use [gocryptfs](https://nuetzlich.net/gocryptfs/) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot gocryptfs --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`gocryptfs`)
bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-gocryptfs
```

With `gobot-gocryptfs` present, Gobot will default to the `gocryptfs` version corresponding to the `gobot-gocryptfs` version you installed. Now you can use `gocryptfs` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`gocryptfs`)
bot..run([`--version`])
```

**Locking to a specific version**

The `gobot-gocryptfs` package version always mirrors the underlying `gocryptfs` [version](#known-versions):

```bash
npm i gobot-gocryptfs@2.4.0
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `gocryptfs` even though `gobot-gocryptfs` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`gocryptfs`, { version: `2.4.0` })
bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`gocryptfs`, { version: `*` })
bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`gocryptfs`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
bot.run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-gocryptfs` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-gocryptfs
gocryptfs --help

# Upgrade to  @latest or any version
npm i -g gobot-gocryptfs@latest
```

For more information, see Gobot's [main docs](https://www.npmjs.com/package/gobot) and [API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.33/docs/readme.md).

## Sample project

View the [gocryptfs sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.33/src/apps/gocryptfs/sample-project) on github.

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

`gobot-gocryptfs` versions mirror `gocryptfs` versions. Gobot knows about 41 releases of `gocryptfs`:

| Version     | linux |
| ----------- | ----- |
| 2.4.0       | x64   |
| 2.3.2       | x64   |
| 2.3.1       | x64   |
| 2.3.0       | x64   |
| 2.2.1       | x64   |
| 2.2.0       | x64   |
| 2.2.0-beta2 | x64   |
| 2.1.0       | x64   |
| 2.0.1       | x64   |
| 2.0.0       | x64   |
| 2.0.0-beta4 | x64   |
| 2.0.0-beta3 | x64   |
| 2.0.0-beta2 | x64   |
| 2.0.0-beta1 | x64   |
| 1.8.0       | x64   |
| 1.7.1       | x64   |
| 1.7.0       | x64   |
| 1.6.1       | x64   |
| 1.6.0       | x64   |
| 1.5.0       | x64   |
| 1.4.4       | x64   |
| 1.4.3       | x64   |
| 1.4.2       | x64   |
| 1.4.1       | x64   |
| 1.4.0       | x64   |
| 1.3.0       |       |
| 1.2.1       |       |
| 1.2.0       |       |
| 1.1.1       |       |
| 1.1.0       |       |
| 1.1.0-rc1   |       |
| 1.0.0       |       |
| 1.0.0-rc1   |       |
| 0.12.0      |       |
| 0.11.0      |       |
| 0.10.0      |       |
| 0.10.0-rc3  |       |
| 0.9.0       |       |
| 0.8.0       |       |
| 0.7.2       |       |
| 0.7.1       |       |
