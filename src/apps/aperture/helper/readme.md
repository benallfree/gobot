![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.34/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-aperture) ![](https://img.shields.io/npm/dt/gobot-aperture) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## aperture via npm

This package allows you to use [aperture](https://docs.fluxninja.com) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot aperture --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`aperture`)
bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-aperture
```

With `gobot-aperture` present, Gobot will default to the `aperture` version corresponding to the `gobot-aperture` version you installed. Now you can use `aperture` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`aperture`)
bot..run([`--version`])
```

**Locking to a specific version**

The `gobot-aperture` package version always mirrors the underlying `aperture` [version](#all-known-releases):

```bash
npm i gobot-aperture@2.34.0
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `aperture` even though `gobot-aperture` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`aperture`, { version: `2.34.0` })
bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`aperture`, { version: `*` })
bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`aperture`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
bot.run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-aperture` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-aperture
aperture --help

# Upgrade to  @latest or any version
npm i -g gobot-aperture@latest
```

For more information, see Gobot's [main docs](https://www.npmjs.com/package/gobot) and [API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/docs/readme.md).

## Sample project

View the [aperture sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.34/src/apps/aperture/sample-project) on github.

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

`gobot-aperture` versions mirror `aperture` versions. Gobot knows about 316 releases of `aperture`:

| Version     | darwin    | linux     |
| ----------- | --------- | --------- |
| 2.34.0      | arm64/x64 | arm64/x64 |
| 2.34.0-rc.2 | arm64/x64 | arm64/x64 |
| 2.34.0-rc.1 | arm64/x64 | arm64/x64 |
| 2.33.1      | arm64/x64 | arm64/x64 |
| 2.33.1-rc.1 | arm64/x64 | arm64/x64 |
| 2.32.2      | arm64/x64 | arm64/x64 |
| 2.32.2-rc.1 | arm64/x64 | arm64/x64 |
| 2.32.1-rc.1 | arm64/x64 | arm64/x64 |
| 2.32.0      | arm64/x64 | arm64/x64 |
| 2.32.0-rc.1 | arm64/x64 | arm64/x64 |
| 2.31.1      | arm64/x64 | arm64/x64 |
| 2.31.1-rc.1 | arm64/x64 | arm64/x64 |
| 2.31.0      | arm64/x64 | arm64/x64 |
| 2.31.0-rc.1 | arm64/x64 | arm64/x64 |
| 2.30.1      | arm64/x64 | arm64/x64 |
| 2.30.1-rc.1 | arm64/x64 | arm64/x64 |
| 2.30.0      | arm64/x64 | arm64/x64 |
| 2.30.0-rc.1 | arm64/x64 | arm64/x64 |
| 2.29.4      | arm64/x64 | arm64/x64 |
| 2.29.4-rc.1 | arm64/x64 | arm64/x64 |
| 2.29.3      | arm64/x64 | arm64/x64 |
| 2.29.3-rc.1 | arm64/x64 | arm64/x64 |
| 2.29.2      | arm64/x64 | arm64/x64 |
| 2.29.2-rc.2 | arm64/x64 | arm64/x64 |
| 2.29.2-rc.1 | arm64/x64 | arm64/x64 |
| 2.29.1      | arm64/x64 | arm64/x64 |
| 2.29.1-rc.1 | arm64/x64 | arm64/x64 |
| 2.29.0      | arm64/x64 | arm64/x64 |
| 2.29.0-rc.1 | arm64/x64 | arm64/x64 |
| 2.28.0      | arm64/x64 | arm64/x64 |
| 2.28.0-rc.1 | arm64/x64 | arm64/x64 |
| 2.27.1      | arm64/x64 | arm64/x64 |
| 2.27.1-rc.1 | arm64/x64 | arm64/x64 |
| 2.27.0      | arm64/x64 | arm64/x64 |
| 2.27.0-rc.1 | arm64/x64 | arm64/x64 |
| 2.26.0      | arm64/x64 | arm64/x64 |
| 2.26.0-rc.3 | arm64/x64 | arm64/x64 |
| 2.26.0-rc.2 | arm64/x64 | arm64/x64 |
| 2.26.0-rc.1 | arm64/x64 | arm64/x64 |
| 2.25.2      | arm64/x64 | arm64/x64 |
| 2.25.2-rc.1 | arm64/x64 | arm64/x64 |
| 2.25.1      | arm64/x64 | arm64/x64 |
| 2.25.1-rc.1 | arm64/x64 | arm64/x64 |
| 2.25.0      | arm64/x64 | arm64/x64 |
| 2.25.0-rc.1 | arm64/x64 | arm64/x64 |
| 2.24.1      | arm64/x64 | arm64/x64 |
| 2.24.1-rc.1 | arm64/x64 | arm64/x64 |
| 2.24.0      | arm64/x64 | arm64/x64 |
| 2.24.0-rc.1 | arm64/x64 | arm64/x64 |
| 2.23.3      | arm64/x64 | arm64/x64 |
| 2.23.3-rc.1 | arm64/x64 | arm64/x64 |
| 2.23.2      | arm64/x64 | arm64/x64 |
| 2.23.2-rc.1 | arm64/x64 | arm64/x64 |
| 2.23.1      | arm64/x64 | arm64/x64 |
| 2.23.1-rc.1 | arm64/x64 | arm64/x64 |
| 2.23.0      | arm64/x64 | arm64/x64 |
| 2.23.0-rc.2 | arm64/x64 | arm64/x64 |
| 2.23.0-rc.1 | arm64/x64 | arm64/x64 |
| 2.22.1      | arm64/x64 | arm64/x64 |
| 2.22.1-rc.1 | arm64/x64 | arm64/x64 |
| 2.22.0      | arm64/x64 | arm64/x64 |
| 2.22.0-rc.1 | arm64/x64 | arm64/x64 |
| 2.21.0      | arm64/x64 | arm64/x64 |
| 2.21.0-rc.1 | arm64/x64 | arm64/x64 |
| 2.20.2      | arm64/x64 | arm64/x64 |
| 2.20.2-rc.1 | arm64/x64 | arm64/x64 |
| 2.20.1      | arm64/x64 | arm64/x64 |
| 2.20.1-rc.1 | arm64/x64 | arm64/x64 |
| 2.20.0      | arm64/x64 | arm64/x64 |
| 2.20.0-rc.1 | arm64/x64 | arm64/x64 |
| 2.19.4      | arm64/x64 | arm64/x64 |
| 2.19.4-rc.1 | arm64/x64 | arm64/x64 |
| 2.19.3      | arm64/x64 | arm64/x64 |
| 2.19.3-rc.1 | arm64/x64 | arm64/x64 |
| 2.19.2      | arm64/x64 | arm64/x64 |
| 2.19.2-rc.1 | arm64/x64 | arm64/x64 |
| 2.19.1      | arm64/x64 | arm64/x64 |
| 2.19.1-rc.1 | arm64/x64 | arm64/x64 |
| 2.19.0      | arm64/x64 | arm64/x64 |
| 2.19.0-rc.4 | arm64/x64 | arm64/x64 |
| 2.19.0-rc.3 | arm64/x64 | arm64/x64 |
| 2.19.0-rc.2 | arm64/x64 | arm64/x64 |
| 2.19.0-rc.1 | arm64/x64 | arm64/x64 |
| 2.18.2      | arm64/x64 | arm64/x64 |
| 2.18.2-rc.1 | arm64/x64 | arm64/x64 |
| 2.18.1      | arm64/x64 | arm64/x64 |
| 2.18.1-rc.1 | arm64/x64 | arm64/x64 |
| 2.18.0      | arm64/x64 | arm64/x64 |
| 2.18.0-rc.2 | arm64/x64 | arm64/x64 |
| 2.18.0-rc.1 | arm64/x64 | arm64/x64 |
| 2.17.0      | arm64/x64 | arm64/x64 |
| 2.17.0-rc.2 | arm64/x64 | arm64/x64 |
| 2.17.0-rc.1 | arm64/x64 | arm64/x64 |
| 2.16.0      | arm64/x64 | arm64/x64 |
| 2.16.0-rc.1 | arm64/x64 | arm64/x64 |
| 2.15.1      | arm64/x64 | arm64/x64 |
| 2.15.1-rc.1 | arm64/x64 | arm64/x64 |
| 2.15.0      | arm64/x64 | arm64/x64 |
| 2.15.0-rc.1 | arm64/x64 | arm64/x64 |
| 2.14.1      | arm64/x64 | arm64/x64 |
| 2.14.1-rc.1 | arm64/x64 | arm64/x64 |
| 2.14.0      | arm64/x64 | arm64/x64 |
| 2.14.0-rc.2 | arm64/x64 | arm64/x64 |
| 2.14.0-rc.1 | arm64/x64 | arm64/x64 |
| 2.13.0      | arm64/x64 | arm64/x64 |
| 2.13.0-rc.1 | arm64/x64 | arm64/x64 |
| 2.12.3-rc.1 | arm64/x64 | arm64/x64 |
| 2.12.2      | arm64/x64 | arm64/x64 |
| 2.12.2-rc.1 | arm64/x64 | arm64/x64 |
| 2.12.1      | arm64/x64 | arm64/x64 |
| 2.12.1-rc.2 | arm64/x64 | arm64/x64 |
| 2.12.1-rc.1 | arm64/x64 | arm64/x64 |
| 2.12.0      | arm64/x64 | arm64/x64 |
| 2.12.0-rc.2 | arm64/x64 | arm64/x64 |
| 2.12.0-rc.1 | arm64/x64 | arm64/x64 |
| 2.11.1      | arm64/x64 | arm64/x64 |
| 2.11.1-rc.1 | arm64/x64 | arm64/x64 |
| 2.11.0      | arm64/x64 | arm64/x64 |
| 2.11.0-rc.2 | arm64/x64 | arm64/x64 |
| 2.11.0-rc.1 | arm64/x64 | arm64/x64 |
| 2.10.1      | arm64/x64 | arm64/x64 |
| 2.10.1-rc.1 | arm64/x64 | arm64/x64 |
| 2.10.0      | arm64/x64 | arm64/x64 |
| 2.10.0-rc.3 | arm64/x64 | arm64/x64 |
| 2.10.0-rc.2 | arm64/x64 | arm64/x64 |
| 2.10.0-rc.1 | arm64/x64 | arm64/x64 |
| 2.9.0       | arm64/x64 | arm64/x64 |
| 2.9.0-rc.1  | arm64/x64 | arm64/x64 |
| 2.8.2       | arm64/x64 | arm64/x64 |
| 2.8.2-rc.1  | arm64/x64 | arm64/x64 |
| 2.8.1       | arm64/x64 | arm64/x64 |
| 2.8.1-rc.2  | arm64/x64 | arm64/x64 |
| 2.8.1-rc.1  | arm64/x64 | arm64/x64 |
| 2.8.0       | arm64/x64 | arm64/x64 |
| 2.8.0-rc.2  | arm64/x64 | arm64/x64 |
| 2.8.0-rc.1  | arm64/x64 | arm64/x64 |
| 2.7.0       | arm64/x64 | arm64/x64 |
| 2.7.0-rc.2  | arm64/x64 | arm64/x64 |
| 2.7.0-rc.1  | arm64/x64 | arm64/x64 |
| 2.6.0       | arm64/x64 | arm64/x64 |
| 2.6.0-rc.4  | arm64/x64 | arm64/x64 |
| 2.6.0-rc.3  | arm64/x64 | arm64/x64 |
| 2.6.0-rc.2  | arm64/x64 | arm64/x64 |
| 2.6.0-rc.1  | arm64/x64 | arm64/x64 |
| 2.5.0       | arm64/x64 | arm64/x64 |
| 2.5.0-rc.2  | arm64/x64 | arm64/x64 |
| 2.5.0-rc.1  | arm64/x64 | arm64/x64 |
| 2.4.0       | arm64/x64 | arm64/x64 |
| 2.4.0-rc.2  | arm64/x64 | arm64/x64 |
| 2.4.0-rc.1  | arm64/x64 | arm64/x64 |
| 2.3.3       | arm64/x64 | arm64/x64 |
| 2.3.3-rc.1  | arm64/x64 | arm64/x64 |
| 2.3.2       | arm64/x64 | arm64/x64 |
| 2.3.2-rc.3  | arm64/x64 | arm64/x64 |
| 2.3.2-rc.2  | arm64/x64 | arm64/x64 |
| 2.3.1       | arm64/x64 | arm64/x64 |
| 2.3.1-rc.1  | arm64/x64 | arm64/x64 |
| 2.3.0       | arm64/x64 | arm64/x64 |
| 2.3.0-rc.2  | arm64/x64 | arm64/x64 |
| 2.3.0-rc.1  | arm64/x64 | arm64/x64 |
| 2.2.0       | arm64/x64 | arm64/x64 |
| 2.2.0-rc.3  | arm64/x64 | arm64/x64 |
| 2.2.0-rc.2  | arm64/x64 | arm64/x64 |
| 2.2.0-rc.1  | arm64/x64 | arm64/x64 |
| 2.1.1       | arm64/x64 | arm64/x64 |
| 2.1.1-rc.2  | arm64/x64 | arm64/x64 |
| 2.1.1-rc.1  | arm64/x64 | arm64/x64 |
| 2.1.0       | arm64/x64 | arm64/x64 |
| 2.1.0-rc.2  | arm64/x64 | arm64/x64 |
| 2.1.0-rc.1  | arm64/x64 | arm64/x64 |
| 2.0.0       | arm64/x64 | arm64/x64 |
| 2.0.0-rc.2  | arm64/x64 | arm64/x64 |
| 2.0.0-rc.1  | arm64/x64 | arm64/x64 |
| 1.6.0       | arm64/x64 | arm64/x64 |
| 1.6.0-rc.2  | arm64/x64 | arm64/x64 |
| 1.6.0-rc.1  | arm64/x64 | arm64/x64 |
| 1.5.2       | arm64/x64 | arm64/x64 |
| 1.5.2-rc.1  | arm64/x64 | arm64/x64 |
| 1.5.1       | arm64/x64 | arm64/x64 |
| 1.5.1-rc.1  | arm64/x64 | arm64/x64 |
| 1.5.0       | arm64/x64 | arm64/x64 |
| 1.5.0-rc.3  | arm64/x64 | arm64/x64 |
| 1.5.0-rc.2  | arm64/x64 | arm64/x64 |
| 1.4.0       | arm64/x64 | arm64/x64 |
| 1.4.0-rc.2  | arm64/x64 | arm64/x64 |
| 1.4.0-rc.1  | arm64/x64 | arm64/x64 |
| 1.3.0       | arm64/x64 | arm64/x64 |
| 1.3.0-rc.2  | arm64/x64 | arm64/x64 |
| 1.3.0-rc.1  | arm64/x64 | arm64/x64 |
| 1.2.0       |           |           |
| 1.2.0-rc.2  |           |           |
| 1.2.0-rc.1  |           |           |
| 1.1.0       |           |           |
| 1.1.0-rc.3  |           |           |
| 1.1.0-rc.2  |           |           |
| 1.1.0-rc.1  |           |           |
| 1.0.0       |           |           |
| 1.0.0-rc.4  |           |           |
| 1.0.0-rc.3  |           |           |
| 1.0.0-rc.2  |           |           |
| 1.0.0-rc.1  |           |           |
| 0.27.0      |           |           |
| 0.27.0-rc.2 |           |           |
| 0.27.0-rc.1 |           |           |
| 0.26.1      |           |           |
| 0.26.1-rc.1 |           |           |
| 0.26.0      |           |           |
| 0.26.0-rc.2 |           |           |
| 0.26.0-rc.1 |           |           |
| 0.25.2      |           |           |
| 0.25.2-rc.3 |           |           |
| 0.25.1      |           |           |
| 0.25.1-rc.1 |           |           |
| 0.25.0      |           |           |
| 0.25.0-rc.2 |           |           |
| 0.25.0-rc.1 |           |           |
| 0.24.0      |           |           |
| 0.24.0-rc.4 |           |           |
| 0.24.0-rc.3 |           |           |
| 0.24.0-rc.2 |           |           |
| 0.24.0-rc.1 |           |           |
| 0.23.0      |           |           |
| 0.23.0-rc.2 |           |           |
| 0.23.0-rc.1 |           |           |
| 0.22.0      |           |           |
| 0.22.0-rc.2 |           |           |
| 0.22.0-rc.1 |           |           |
| 0.21.0      |           |           |
| 0.21.0-rc.1 |           |           |
| 0.20.0      |           |           |
| 0.20.0-rc.2 |           |           |
| 0.20.0-rc.1 |           |           |
| 0.19.0      |           |           |
| 0.19.0-rc.2 |           |           |
| 0.19.0-rc.1 |           |           |
| 0.18.0      |           |           |
| 0.18.0-rc.2 |           |           |
| 0.18.0-rc.1 |           |           |
| 0.17.0      |           |           |
| 0.17.0-rc.5 |           |           |
| 0.17.0-rc.4 |           |           |
| 0.17.0-rc.3 |           |           |
| 0.17.0-rc.2 |           |           |
| 0.17.0-rc.1 |           |           |
| 0.16.0      |           |           |
| 0.16.0-rc.1 |           |           |
| 0.15.0      |           |           |
| 0.15.0-rc.2 |           |           |
| 0.15.0-rc.1 |           |           |
| 0.14.0      |           |           |
| 0.14.0-rc.2 |           |           |
| 0.14.0-rc.1 |           |           |
| 0.13.1      |           |           |
| 0.13.1-rc.1 |           |           |
| 0.13.0      |           |           |
| 0.13.0-rc.2 |           |           |
| 0.13.0-rc.1 |           |           |
| 0.12.1      |           |           |
| 0.12.1-rc.1 |           |           |
| 0.12.0      |           |           |
| 0.12.0-rc.2 |           |           |
| 0.12.0-rc.1 |           |           |
| 0.11.2      |           |           |
| 0.11.2-rc.1 |           |           |
| 0.11.1      |           |           |
| 0.11.1-rc.1 |           |           |
| 0.11.0      |           |           |
| 0.11.0-rc.2 |           |           |
| 0.11.0-rc.1 |           |           |
| 0.10.0      |           |           |
| 0.10.0-rc.2 |           |           |
| 0.10.0-rc.1 |           |           |
| 0.9.0       |           |           |
| 0.9.0-rc.3  |           |           |
| 0.9.0-rc.2  |           |           |
| 0.9.0-rc.1  |           |           |
| 0.8.0       |           |           |
| 0.8.0-rc.4  |           |           |
| 0.8.0-rc.3  |           |           |
| 0.8.0-rc.2  |           |           |
| 0.8.0-rc.1  |           |           |
| 0.7.0       |           |           |
| 0.7.0-rc.2  |           |           |
| 0.7.0-rc.1  |           |           |
| 0.6.1       |           |           |
| 0.6.1-rc.1  |           |           |
| 0.6.0       |           |           |
| 0.6.0-rc.1  |           |           |
| 0.5.1       |           |           |
| 0.5.1-rc.1  |           |           |
| 0.5.0       |           |           |
| 0.5.0-rc.2  |           |           |
| 0.5.0-rc.1  |           |           |
| 0.4.0       |           |           |
| 0.4.0-rc.3  |           |           |
| 0.4.0-rc.2  |           |           |
| 0.4.0-rc.1  |           |           |
| 0.3.0       |           |           |
| 0.3.0-rc.3  |           |           |
| 0.3.0-rc.2  |           |           |
| 0.3.0-rc.1  |           |           |
| 0.2.2       |           |           |
| 0.2.2-rc.1  |           |           |
| 0.2.1       |           |           |
| 0.2.1-rc.1  |           |           |
| 0.2.0       |           |           |
| 0.2.0-rc.2  |           |           |
| 0.2.0-rc.1  |           |           |
| 0.1.3       |           |           |
| 0.1.3-rc.2  |           |           |
| 0.1.3-rc.1  |           |           |
| 0.1.2       |           |           |
| 0.1.2-rc.3  |           |           |
| 0.1.2-rc.2  |           |           |
| 0.1.2-rc.1  |           |           |
| 0.1.1-rc.2  |           |           |
