![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.34/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-temporal) ![](https://img.shields.io/npm/dt/gobot-temporal) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## Temporal via npm

This package allows you to use [Temporal](https://docs.temporal.io) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot temporal --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`temporal`)
bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-temporal
```

With `gobot-temporal` present, Gobot will default to the `temporal` version corresponding to the `gobot-temporal` version you installed. Now you can use `temporal` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`temporal`)
bot..run([`--version`])
```

**Locking to a specific version**

The `gobot-temporal` package version always mirrors the underlying `temporal` [version](#all-known-releases):

```bash
npm i gobot-temporal@1.23.0
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `temporal` even though `gobot-temporal` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`temporal`, { version: `1.23.0` })
bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`temporal`, { version: `*` })
bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`temporal`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
bot.run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-temporal` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-temporal
temporal --help

# Upgrade to  @latest or any version
npm i -g gobot-temporal@latest
```

For more information, see Gobot's [main docs](https://www.npmjs.com/package/gobot) and [API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/docs/readme.md).

## Sample project

View the [Temporal sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.34/src/apps/temporal/sample-project) on github.

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

`gobot-temporal` versions mirror `temporal` versions. Gobot knows about 126 releases of `temporal`:

| Version   | darwin    | linux     | win32     |
| --------- | --------- | --------- | --------- |
| 1.23.0    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.22.6    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.22.5    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.22.4    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.22.3    |           |           |           |
| 1.22.2    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.22.1    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.22.0    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.21.5    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.21.4    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.21.3    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.21.2    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.21.1    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.21.0    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.20.4    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.20.3    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.20.2    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.20.1    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.20.0    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.19.1    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.19.0    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.18.5    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.18.4    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.18.3    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.18.2    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.18.1    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.18.0    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.17.6    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.17.5    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.17.4    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.17.2    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.17.1    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.17.0    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.16.3    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.16.2    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.16.1    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.16.0    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.15.2    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.15.1    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.15.0    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.14.6    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.14.5    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.14.4    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.14.3    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.14.2    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.14.1    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.14.0    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.13.4    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.13.3    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.13.2    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.13.1    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.13.0    | arm64/x64 | arm64/x64 | x64/arm64 |
| 1.12.4    | arm64/x64 | arm64/x64 | x64       |
| 1.12.3    | arm64/x64 | arm64/x64 | x64       |
| 1.12.2    | arm64/x64 | arm64/x64 | x64       |
| 1.12.1    | arm64/x64 | arm64/x64 | x64       |
| 1.12.0    | arm64/x64 | arm64/x64 | x64       |
| 1.11.4    | arm64/x64 | arm64/x64 | x64       |
| 1.11.3    | arm64/x64 | arm64/x64 | x64       |
| 1.11.2    | arm64/x64 | arm64/x64 | x64       |
| 1.11.1    | arm64/x64 | arm64/x64 | x64       |
| 1.11.0    | arm64/x64 | arm64/x64 | x64       |
| 1.10.5    | arm64/x64 | arm64/x64 | x64       |
| 1.10.4    | arm64/x64 | arm64/x64 | x64       |
| 1.10.3    | arm64/x64 | arm64/x64 | x64       |
| 1.10.2    | arm64/x64 | arm64/x64 | x64       |
| 1.10.1    | arm64/x64 | arm64/x64 | x64       |
| 1.10.0    | arm64/x64 | arm64/x64 | x64       |
| 1.9.3     | arm64/x64 | arm64/x64 | x64       |
| 1.9.2     | arm64/x64 | arm64/x64 | x64       |
| 1.9.1     | arm64/x64 | arm64/x64 | x64       |
| 1.9.0     | arm64/x64 | arm64/x64 | x64       |
| 1.8.2     | x64       | x64       | x64       |
| 1.8.1     | x64       | x64       | x64       |
| 1.8.0     | x64       | x64       | x64       |
| 1.7.3     |           |           |           |
| 1.7.2     |           |           |           |
| 1.7.1     |           |           |           |
| 1.7.0     |           |           |           |
| 1.6.7     |           |           |           |
| 1.6.6     |           |           |           |
| 1.6.5     |           |           |           |
| 1.6.4     |           |           |           |
| 1.6.3     |           |           |           |
| 1.6.2     |           |           |           |
| 1.6.1     |           |           |           |
| 1.6.0     |           |           |           |
| 1.5.8     |           |           |           |
| 1.5.7     |           |           |           |
| 1.5.6     |           |           |           |
| 1.5.5     |           |           |           |
| 1.5.4     |           |           |           |
| 1.5.3     |           |           |           |
| 1.5.2     |           |           |           |
| 1.5.1     |           |           |           |
| 1.5.0     |           |           |           |
| 1.4.4     |           |           |           |
| 1.4.3     |           |           |           |
| 1.4.2     |           |           |           |
| 1.4.1     |           |           |           |
| 1.4.0     |           |           |           |
| 1.3.3     |           |           |           |
| 1.3.2     |           |           |           |
| 1.3.1     |           |           |           |
| 1.3.0     |           |           |           |
| 1.2.3     |           |           |           |
| 1.2.2     |           |           |           |
| 1.2.1     |           |           |           |
| 1.1.2     |           |           |           |
| 1.1.1     |           |           |           |
| 1.1.0     |           |           |           |
| 1.0.1     |           |           |           |
| 1.0.0     |           |           |           |
| 1.0.0-rc1 |           |           |           |
| 0.31.0    |           |           |           |
| 0.30.0    |           |           |           |
| 0.28.0    |           |           |           |
| 0.27.0    |           |           |           |
| 0.26.0    |           |           |           |
| 0.25.0    |           |           |           |
| 0.23.1    |           |           |           |
| 0.23.0    |           |           |           |
| 0.21.1    |           |           |           |
| 0.21.0    |           |           |           |
| 0.20.0    |           |           |           |
| 0.10.0    |           |           |           |
