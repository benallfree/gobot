![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.34/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-weed) ![](https://img.shields.io/npm/dt/gobot-weed) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## SeaweedFS via npm

This package allows you to use [SeaweedFS](https://github.com/seaweedfs/seaweedfs) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot weed --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`weed`)
bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-weed
```

With `gobot-weed` present, Gobot will default to the `weed` version corresponding to the `gobot-weed` version you installed. Now you can use `weed` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`weed`)
bot..run([`--version`])
```

**Locking to a specific version**

The `gobot-weed` package version always mirrors the underlying `weed` [version](#known-versions):

```bash
npm i gobot-weed@3.64.0
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `weed` even though `gobot-weed` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`weed`, { version: `3.64.0` })
bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`weed`, { version: `*` })
bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`weed`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
bot.run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-weed` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-weed
weed --help

# Upgrade to  @latest or any version
npm i -g gobot-weed@latest
```

For more information, see Gobot's [main docs](https://www.npmjs.com/package/gobot) and [API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/docs/readme.md).

## Quirks

### Versioning

SeaweedFS uses two-part versions, but Gobot and npm require three-part semver. A `.0` _patch_ part has been added for compatibility.

## Sample project

View the [SeaweedFS sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.34/src/apps/weed/sample-project) on github.

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

`gobot-weed` versions mirror `weed` versions. Gobot knows about 244 releases of `weed`:

| Version | freebsd       | darwin    | linux              | win32    |
| ------- | ------------- | --------- | ------------------ | -------- |
| 3.64.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      | x64      |
| 3.63.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      | x64      |
| 3.62.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      | x64      |
| 3.61.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      | x64      |
| 3.60.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      | x64      |
| 3.59.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      | x64      |
| 3.58.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      | x64      |
| 3.57.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      | x64      |
| 3.56.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      | x64      |
| 3.55.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      | x64      |
| 3.54.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      | x64      |
| 3.53.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      | x64      |
| 3.52.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      | x64      |
| 3.51.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      | x64      |
| 3.50.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      |          |
| 3.48.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      |          |
| 3.47.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      |          |
| 3.46.0  | arm64/x64/arm | x64       | arm64/x64/arm      |          |
| 3.45.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      |          |
| 3.44.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      |          |
| 3.43.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      |          |
| 3.42.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      |          |
| 3.41.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      |          |
| 3.40.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      |          |
| 3.39.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      |          |
| 3.38.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      |          |
| 3.37.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      |          |
| 3.36.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      |          |
| 3.35.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      |          |
| 3.34.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      |          |
| 3.33.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      |          |
| 3.32.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      |          |
| 3.31.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      |          |
| 3.30.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      |          |
| 3.29.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      |          |
| 3.28.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      |          |
| 3.27.0  | arm64/x64/arm |           | arm64/x64/arm      | x64      |
| 3.26.0  | arm64/x64/arm |           | arm64/x64/arm      | x64      |
| 3.25.0  | arm64/x64/arm |           | arm64/x64/arm      | x64      |
| 3.24.0  | arm64/x64/arm |           | arm64/x64/arm      | x64      |
| 3.23.0  | arm64/x64/arm |           | arm64/x64/arm      | x64      |
| 3.22.0  | arm64/x64/arm |           | arm64/x64/arm      | x64      |
| 3.20.0  | arm64/x64/arm |           | arm64/x64/arm      | x64      |
| 3.19.0  | arm64/x64/arm |           | arm64/x64/arm      | x64      |
| 3.18.0  | arm64/x64/arm |           | arm64/x64/arm      | x64      |
| 3.16.0  | arm64/x64/arm |           | arm64/x64/arm      | x64      |
| 3.15.0  | arm64/x64/arm |           | arm64/x64/arm      | x64      |
| 3.14.0  | arm64/x64/arm |           | arm64/x64/arm      | x64      |
| 3.13.0  | x64           |           | arm64/x64/arm      | x64      |
| 3.12.0  | arm64/x64/arm |           | arm64/x64/arm      | x64      |
| 3.11.0  | arm64/x64/arm |           | arm64/x64/arm      | x64      |
| 3.10.0  | arm64/x64/arm |           | arm64/x64/arm      | x64      |
| 3.9.0   | arm64/x64/arm |           | arm64/x64/arm      | x64      |
| 3.8.0   | arm64/x64/arm |           | arm64/x64/arm      | x64      |
| 3.6.0   | arm64/arm     |           | arm64/x64/arm      | x64      |
| 3.4.0   | arm64/x64/arm |           | arm64/x64/arm      | x64      |
| 3.2.0   | arm64/x64/arm |           | arm64/x64/arm      | x64      |
| 3.1.0   | arm64/x64/arm |           | arm64/x64/arm      | x64      |
| 3.0.0   |               |           |                    |          |
| 2.99.0  |               |           |                    |          |
| 2.98.0  |               |           |                    |          |
| 2.97.0  |               |           |                    |          |
| 2.96.0  |               |           |                    |          |
| 2.95.0  |               |           |                    |          |
| 2.94.0  |               |           |                    |          |
| 2.93.0  |               |           |                    |          |
| 2.92.0  |               |           |                    |          |
| 2.91.0  |               |           |                    |          |
| 2.90.0  |               |           |                    |          |
| 2.89.0  |               |           |                    |          |
| 2.88.0  |               |           |                    |          |
| 2.87.0  |               |           |                    |          |
| 2.86.0  |               |           |                    |          |
| 2.85.0  |               |           |                    |          |
| 2.84.0  |               |           |                    |          |
| 2.83.0  |               |           |                    |          |
| 2.82.0  |               |           |                    |          |
| 2.81.0  |               |           |                    |          |
| 2.80.0  |               |           |                    |          |
| 2.79.0  |               |           |                    |          |
| 2.78.0  |               |           |                    |          |
| 2.77.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      | x64      |
| 2.76.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      | x64      |
| 2.75.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      | x64      |
| 2.74.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm      | x64      |
| 2.72.0  |               |           |                    |          |
| 2.71.0  |               |           |                    |          |
| 2.70.0  |               |           |                    |          |
| 2.69.0  |               |           |                    |          |
| 2.68.0  |               |           |                    |          |
| 2.67.0  |               |           |                    |          |
| 2.66.0  |               |           |                    |          |
| 2.65.0  |               |           |                    |          |
| 2.64.0  |               |           |                    |          |
| 2.63.0  |               |           |                    |          |
| 2.62.0  |               |           |                    |          |
| 2.61.0  |               |           |                    |          |
| 2.60.0  |               |           |                    |          |
| 2.59.0  |               |           |                    |          |
| 2.58.0  |               |           |                    |          |
| 2.57.0  |               |           |                    |          |
| 2.56.0  |               |           |                    |          |
| 2.55.0  |               |           |                    |          |
| 2.54.0  |               |           |                    |          |
| 2.53.0  |               |           |                    |          |
| 2.52.0  |               |           |                    |          |
| 2.50.0  |               |           |                    |          |
| 2.49.0  |               |           |                    |          |
| 2.48.0  |               |           |                    |          |
| 2.47.0  |               |           |                    |          |
| 2.43.0  |               |           |                    |          |
| 2.41.0  |               |           |                    |          |
| 2.40.0  |               |           |                    |          |
| 2.39.0  |               |           |                    |          |
| 2.38.0  |               |           |                    |          |
| 2.37.0  |               |           |                    |          |
| 2.36.0  |               |           |                    |          |
| 2.35.0  |               |           |                    |          |
| 2.34.0  |               |           |                    |          |
| 2.32.0  |               |           |                    |          |
| 2.31.0  |               |           |                    |          |
| 2.30.0  |               |           |                    |          |
| 2.29.0  |               |           |                    |          |
| 2.28.0  |               |           |                    |          |
| 2.27.0  |               |           |                    |          |
| 2.26.0  |               |           |                    |          |
| 2.24.0  |               |           |                    |          |
| 2.23.0  |               |           |                    |          |
| 2.22.0  |               |           |                    |          |
| 2.21.0  |               |           |                    |          |
| 2.20.0  |               |           |                    |          |
| 2.19.0  |               |           |                    |          |
| 2.18.0  |               |           |                    |          |
| 2.17.0  |               |           |                    |          |
| 2.16.0  |               |           |                    |          |
| 2.15.0  |               |           |                    |          |
| 2.14.0  |               |           |                    |          |
| 2.13.0  |               |           |                    |          |
| 2.12.0  |               |           |                    |          |
| 2.11.0  |               |           |                    |          |
| 2.10.0  |               |           |                    |          |
| 2.9.0   |               |           |                    |          |
| 2.8.0   |               |           |                    |          |
| 2.7.0   |               |           |                    |          |
| 2.6.0   |               |           |                    |          |
| 2.5.0   |               |           |                    |          |
| 2.4.0   |               |           |                    |          |
| 2.3.0   |               |           |                    |          |
| 2.2.0   |               |           |                    |          |
| 2.1.0   |               |           |                    |          |
| 2.0.0   |               |           |                    |          |
| 1.99.0  |               |           |                    |          |
| 1.98.0  |               |           |                    |          |
| 1.97.0  |               |           |                    |          |
| 1.96.0  |               |           |                    |          |
| 1.95.0  |               |           |                    |          |
| 1.94.0  |               |           |                    |          |
| 1.93.0  |               |           |                    |          |
| 1.92.0  |               |           |                    |          |
| 1.91.0  |               |           |                    |          |
| 1.90.0  |               |           |                    |          |
| 1.88.0  |               |           |                    |          |
| 1.87.0  |               |           |                    |          |
| 1.86.0  |               |           |                    |          |
| 1.85.0  |               |           |                    |          |
| 1.84.0  |               |           |                    |          |
| 1.83.0  |               |           |                    |          |
| 1.82.0  |               |           |                    |          |
| 1.81.0  |               |           |                    |          |
| 1.80.0  |               |           |                    |          |
| 1.79.0  |               |           |                    |          |
| 1.78.0  |               |           |                    |          |
| 1.77.0  |               |           |                    |          |
| 1.76.0  |               |           |                    |          |
| 1.75.0  |               |           |                    |          |
| 1.74.0  |               |           |                    |          |
| 1.73.0  |               |           |                    |          |
| 1.72.0  |               |           |                    |          |
| 1.71.0  |               |           |                    |          |
| 1.70.0  |               |           |                    |          |
| 1.69.0  |               |           |                    |          |
| 1.67.0  |               |           |                    |          |
| 1.65.0  |               |           |                    |          |
| 1.64.0  |               |           |                    |          |
| 1.63.0  |               |           |                    |          |
| 1.61.0  |               |           |                    |          |
| 1.60.0  |               |           |                    |          |
| 1.59.0  |               |           |                    |          |
| 1.58.0  |               |           |                    |          |
| 1.57.0  |               |           |                    |          |
| 1.56.0  |               |           |                    |          |
| 1.55.0  |               |           |                    |          |
| 1.54.0  |               |           |                    |          |
| 1.53.0  |               |           |                    |          |
| 1.52.0  |               |           |                    |          |
| 1.51.0  |               |           |                    |          |
| 1.50.0  |               |           |                    |          |
| 1.49.0  |               |           |                    |          |
| 1.48.0  |               |           |                    |          |
| 1.47.0  | x64/ia32/arm  | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.46.0  |               |           |                    |          |
| 1.45.0  |               |           |                    |          |
| 1.44.0  |               |           |                    |          |
| 1.43.0  |               |           |                    |          |
| 1.42.0  |               |           |                    |          |
| 1.41.0  |               |           |                    |          |
| 1.40.0  |               |           |                    |          |
| 1.38.0  |               |           |                    |          |
| 1.37.0  |               |           |                    |          |
| 1.35.0  |               |           |                    |          |
| 1.34.0  |               |           |                    |          |
| 1.33.0  |               |           |                    |          |
| 1.32.0  |               |           |                    |          |
| 1.31.0  |               |           |                    |          |
| 1.30.0  |               |           |                    |          |
| 1.29.0  |               |           |                    |          |
| 1.28.0  |               |           |                    |          |
| 1.27.0  |               |           |                    |          |
| 1.26.0  |               |           |                    |          |
| 1.25.0  |               |           |                    |          |
| 1.24.0  |               |           |                    |          |
| 1.23.0  |               |           |                    |          |
| 1.18.0  |               |           |                    |          |
| 1.16.0  |               |           |                    |          |
| 1.15.0  |               |           |                    |          |
| 1.14.0  |               |           |                    |          |
| 1.11.0  |               |           |                    |          |
| 1.10.0  |               |           |                    |          |
| 1.9.0   |               |           |                    |          |
| 1.0.0   |               |           |                    |          |
| 0.99.0  |               |           |                    |          |
| 0.98.0  |               |           |                    |          |
| 0.97.0  |               |           |                    |          |
| 0.96.0  |               |           |                    |          |
| 0.95.0  |               |           |                    |          |
| 0.94.0  |               |           |                    |          |
| 0.93.0  |               |           |                    |          |
| 0.92.0  |               |           |                    |          |
| 0.91.0  |               |           |                    |          |
| 0.90.0  |               |           |                    |          |
| 0.77.0  | x64/ia32/arm  | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.76.0  | x64/ia32/arm  | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.69.0  | x64/ia32/arm  | x64       | x64/ia32/arm       | x64/ia32 |
| 0.0.0   |               | arm64/x64 | x64                | x64      |
