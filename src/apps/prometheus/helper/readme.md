![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.34/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-prometheus) ![](https://img.shields.io/npm/dt/gobot-prometheus) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## Prometheus via npm

This package allows you to use [Prometheus](https://prometheus.io/) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot prometheus --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`prometheus`)
bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-prometheus
```

With `gobot-prometheus` present, Gobot will default to the `prometheus` version corresponding to the `gobot-prometheus` version you installed. Now you can use `prometheus` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`prometheus`)
bot..run([`--version`])
```

**Locking to a specific version**

The `gobot-prometheus` package version always mirrors the underlying `prometheus` [version](#all-known-releases):

```bash
npm i gobot-prometheus@2.51.0
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `prometheus` even though `gobot-prometheus` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`prometheus`, { version: `2.51.0` })
bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`prometheus`, { version: `*` })
bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`prometheus`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
bot.run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-prometheus` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-prometheus
prometheus --help

# Upgrade to  @latest or any version
npm i -g gobot-prometheus@latest
```

For more information, see Gobot's [main docs](https://www.npmjs.com/package/gobot) and [API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/docs/readme.md).

## Sample project

View the [Prometheus sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.34/src/apps/prometheus/sample-project) on github.

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

`gobot-prometheus` versions mirror `prometheus` versions. Gobot knows about 293 releases of `prometheus`:

| Version                  | freebsd            | darwin    | linux              | win32          |
| ------------------------ | ------------------ | --------- | ------------------ | -------------- |
| 2.51.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.51.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.51.0-rc.0+dedupelabels | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.51.0-rc.0              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.50.1                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.50.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.50.0-rc.1              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.50.0-rc.0              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.49.1                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.49.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.49.0-rc.2              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.49.0-rc.1              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.49.0-rc.0              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.48.1                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.48.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.48.0-rc.2              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.48.0-rc.1              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.48.0-rc.0              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.47.2                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.47.1                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.47.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.47.0-rc.0              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.46.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.46.0-rc.0              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.45.4                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.45.3                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.45.2                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.45.1                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.45.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.45.0-rc.1              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.45.0-rc.0              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.44.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.44.0-rc.2              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.44.0-rc.1              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.44.0-rc.0              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.43.1                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.43.1                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.43.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.43.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.43.0-rc.1+stringlabels | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.43.0-rc.1              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.43.0-rc.0              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.42.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.42.0-rc.0              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.41.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.41.0-rc.0              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.40.7                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.40.6                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.40.5                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.40.4                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.40.3                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.40.2                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.40.1                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.40.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.40.0-rc.0              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.39.2                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.39.1                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.39.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.39.0-rc.0              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.38.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.38.0-rc.0              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.37.9                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.37.8                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.37.7                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.37.6                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.37.5                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.37.4                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.37.3                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.37.2                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.37.1                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.37.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.37.0-rc.1              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.37.0-rc.0              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.36.2                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.36.1                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.36.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.36.0-rc0               | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.35.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.35.0-rc1               | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.35.0-rc0               | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.34.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.34.0-rc.2              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.34.0-rc.1              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.34.0-rc.0              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.33.5                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.33.4                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.33.3                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.33.2                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.33.1                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.33.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.33.0-rc.1              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.33.0-rc.0              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.32.1                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.32.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.32.0-rc.1              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.32.0-rc.0              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.32.0-beta.0            | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.31.2                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.31.1                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.31.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.31.0-rc.1              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.31.0-rc.0              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.30.4                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.30.3                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.30.2                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.30.1                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.30.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.30.0-rc.0              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.29.2                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.29.1                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.29.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.29.0-rc.2              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.29.0-rc.1              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.29.0-rc.0              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.28.1                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.28.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.28.0-rc.0              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.27.1                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.27.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.27.0-rc.0              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.26.1                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.26.0                   | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.26.0-rc.0              | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.25.2                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.25.1                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.25.0                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.25.0-rc.0              | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.24.1                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.24.0                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.24.0-rc.0              | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.23.0                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.23.0-rc.0              | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.22.2                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.22.1                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.22.0                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.22.0-rc.0              | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.21.0                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.21.0-rc.1              | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.21.0-rc.0              | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.20.1                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.20.0                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.20.0-rc.1              | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.20.0-rc.0              | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.19.3                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.19.2                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.19.1                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.19.0                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.19.0-rc.0              | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.18.2                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.18.1                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.18.0                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.18.0-rc.1              | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.18.0-rc.0              | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.17.2                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.17.1                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.17.0                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.17.0-rc.4              | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.17.0-rc.3              | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.17.0-rc.2              | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.17.0-rc.1              | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.17.0-rc.0              | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.16.0                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.16.0-rc.1              | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.16.0-rc.0              | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.15.2                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.15.1                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.15.0                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.15.0-rc.0              | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.14.0                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.14.0-rc.0              | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.13.1                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.13.0                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.13.0-rc.0              | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.12.0                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.12.0-rc.0              | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.11.2                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.11.1                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.11.0                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.11.0-rc.0              | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.10.0                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.10.0-rc.0              | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.9.2                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.9.1                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.9.0                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.9.0-rc.0               | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.8.1                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.8.0                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.8.0-rc.0               | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.7.2                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.7.1                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.7.0                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.7.0-rc.2               | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.7.0-rc.1               | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.7.0-rc.0               | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.6.1                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.6.0                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.6.0-rc.1               | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.6.0-rc.0               | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.5.0                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.5.0-rc.2               | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.5.0-rc.1               | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.5.0-rc.0               | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.4.3                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.4.2                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.4.1                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.4.0                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.4.0-rc.0               | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.3.2                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.3.1                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.3.0                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.2.1                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.2.0                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.2.0-rc.1               | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.2.0-rc.0               | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.1.0                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.0                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.0-rc.3               | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.0-rc.2               | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.0-rc.1               | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.0-rc.0               | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.0-beta.5             | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.0-beta.4             | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.0-beta.3             | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.0-beta.2             | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.0-beta.1             | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.0-beta.0             | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.0-alpha.3            | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.0-alpha.2            | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.0-alpha.1            | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.0-alpha.0            | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.8.2                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.8.1                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.8.0                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.7.2                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.7.1                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.7.0                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.6.3                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.6.2                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.6.1                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.6.0                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.5.3                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.5.2                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.5.1                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.5.0                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.4.1                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.4.0                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.3.1                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.3.0                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.3.0-beta.0             | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.2.3                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | ia32           |
| 1.2.2                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.2.1                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.2.0                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.1.3                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.1.2                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.1.1                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.1.0                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.0.2                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.0.1                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.0.0                    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.0.0-rc.0               | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.20.0                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.19.3                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.19.2                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.19.1                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.19.0                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.18.0                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.18.0                   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 0.17.0                   | x64/ia32           | x64       | x64/ia32           | x64/ia32       |
| 0.17.0                   | x64/ia32           | x64       | x64/ia32           | x64/ia32       |
| 0.17.0                   | x64/ia32           | x64       | x64/ia32           | x64/ia32       |
| 0.16.2                   | x64/ia32           | x64       | x64/ia32           | x64/ia32       |
| 0.16.1                   | x64/ia32           | x64       | x64/ia32           |                |
| 0.16.0                   | x64/ia32           | x64       | x64/ia32           | x64/ia32       |
| 0.16.0                   | x64/ia32           | x64       | x64/ia32           | x64/ia32       |
| 0.16.0                   | x64                | x64       | x64/ia32           | x64/ia32       |
| 0.15.1                   |                    | x64       | x64/ia32           |                |
| 0.15.0                   |                    | x64       | x64/ia32           |                |
| 0.15.0                   |                    |           |                    |                |
| 0.15.0                   |                    |           |                    |                |
| 0.15.0                   |                    | x64       | x64/ia32           |                |
| 0.14.0                   |                    | x64       | x64/ia32           |                |
| 0.14.0                   |                    | x64       | x64/ia32           |                |
| 0.14.0                   |                    | x64       | x64/ia32           |                |
| 0.14.0                   |                    | x64       | x64/ia32           |                |
| 0.13.4                   |                    | x64       | x64/ia32           |                |
| 0.13.3                   |                    |           | x64                |                |
| 0.13.2                   |                    | x64       | x64/ia32           |                |
| 0.13.1                   |                    | x64       | x64                |                |
| 0.13.0                   |                    |           |                    |                |
| 0.12.0                   |                    |           |                    |                |
| 0.11.1                   |                    |           |                    |                |
| 0.11.0                   |                    |           |                    |                |
