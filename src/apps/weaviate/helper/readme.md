![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.29/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-weaviate) ![](https://img.shields.io/npm/dt/gobot-weaviate) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## Weaviate via npm

This package allows you to use [Weaviate](https://weaviate.io) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot weaviate --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`weaviate`)
bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-weaviate
```

With `gobot-weaviate` present, Gobot will default to the `weaviate` version corresponding to the `gobot-weaviate` version you installed. Now you can use `weaviate` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`weaviate`)
bot..run([`--version`])
```

**Locking to a specific version**

The `gobot-weaviate` package version always mirrors the underlying `weaviate` [version](#known-versions):

```bash
npm i gobot-weaviate@1.24.4
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `weaviate` even though `gobot-weaviate` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`weaviate`, { version: `1.24.4` })
bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`weaviate`, { version: `*` })
bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`weaviate`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
bot.run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-weaviate` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-weaviate
weaviate --help

# Upgrade to  @latest or any version
npm i -g gobot-weaviate@latest
```

For more information, see Gobot's [main docs](https://www.npmjs.com/package/gobot) and [API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.29/docs/readme.md).



## Sample project

View the [Weaviate sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.29/src/apps/weaviate/sample-project) on github.

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

`gobot-weaviate` versions mirror `weaviate` versions. Gobot knows about 195 releases of `weaviate`:

| Version | darwin    | linux     | win32 |
| ------- | --------- | --------- | ----- |
| 1.24.4  | arm64/x64 | arm64/x64 | x64   |
| 1.24.3  | arm64/x64 | arm64/x64 | x64   |
| 1.24.2  | arm64/x64 | arm64/x64 | x64   |
| 1.24.1  | arm64/x64 | arm64/x64 | x64   |
| 1.24.0  | arm64/x64 | arm64/x64 | x64   |
| 1.23.13 | arm64/x64 | arm64/x64 | x64   |
| 1.23.12 | arm64/x64 | arm64/x64 | x64   |
| 1.23.11 | arm64/x64 | arm64/x64 | x64   |
| 1.23.10 | arm64/x64 | arm64/x64 | x64   |
| 1.23.9  | arm64/x64 | arm64/x64 | x64   |
| 1.23.8  | arm64/x64 | arm64/x64 | x64   |
| 1.23.7  | arm64/x64 | arm64/x64 | x64   |
| 1.23.6  | arm64/x64 | arm64/x64 | x64   |
| 1.23.5  | arm64/x64 | arm64/x64 | x64   |
| 1.23.4  | arm64/x64 | arm64/x64 | x64   |
| 1.23.3  | arm64/x64 | arm64/x64 | x64   |
| 1.23.2  | arm64/x64 | arm64/x64 | x64   |
| 1.23.1  | arm64/x64 | arm64/x64 | x64   |
| 1.23.0  | arm64/x64 | arm64/x64 | x64   |
| 1.22.13 | arm64/x64 | arm64/x64 | x64   |
| 1.22.12 | arm64/x64 | arm64/x64 | x64   |
| 1.22.11 | arm64/x64 | arm64/x64 | x64   |
| 1.22.10 | arm64/x64 | arm64/x64 | x64   |
| 1.22.9  | arm64/x64 | arm64/x64 | x64   |
| 1.22.8  | arm64/x64 | arm64/x64 | x64   |
| 1.22.7  | arm64/x64 | arm64/x64 | x64   |
| 1.22.6  | arm64/x64 | arm64/x64 | x64   |
| 1.22.5  | arm64/x64 | arm64/x64 | x64   |
| 1.22.4  | arm64/x64 | arm64/x64 | x64   |
| 1.22.3  | arm64/x64 | arm64/x64 | x64   |
| 1.22.2  | arm64/x64 | arm64/x64 | x64   |
| 1.22.1  | arm64/x64 | arm64/x64 | x64   |
| 1.22.0  | arm64/x64 | arm64/x64 | x64   |
| 1.21.9  | arm64/x64 | arm64/x64 | x64   |
| 1.21.8  | arm64/x64 | arm64/x64 | x64   |
| 1.21.7  | arm64/x64 | arm64/x64 | x64   |
| 1.21.6  | arm64/x64 | arm64/x64 | x64   |
| 1.21.5  | arm64/x64 | arm64/x64 | x64   |
| 1.21.4  | arm64/x64 | arm64/x64 | x64   |
| 1.21.3  | arm64/x64 | arm64/x64 | x64   |
| 1.21.2  | arm64/x64 | arm64/x64 | x64   |
| 1.21.1  | arm64/x64 | arm64/x64 | x64   |
| 1.21.0  | arm64/x64 | arm64/x64 | x64   |
| 1.20.6  | arm64/x64 | arm64/x64 |       |
| 1.20.5  | arm64/x64 | arm64/x64 |       |
| 1.20.4  | arm64/x64 | arm64/x64 |       |
| 1.20.3  | arm64/x64 | arm64/x64 |       |
| 1.20.2  | arm64/x64 | arm64/x64 |       |
| 1.20.1  | arm64/x64 | arm64/x64 |       |
| 1.20.0  | arm64/x64 | arm64/x64 |       |
| 1.19.13 |           | arm64/x64 |       |
| 1.19.12 | arm64/x64 | arm64/x64 |       |
| 1.19.11 | arm64/x64 | arm64/x64 |       |
| 1.19.10 | arm64/x64 | arm64/x64 |       |
| 1.19.9  | arm64/x64 | arm64/x64 |       |
| 1.19.8  | arm64/x64 | arm64/x64 |       |
| 1.19.7  | arm64/x64 | arm64/x64 |       |
| 1.19.6  | arm64/x64 | arm64/x64 |       |
| 1.19.5  |           | arm64/x64 |       |
| 1.19.4  |           | arm64/x64 |       |
| 1.19.3  |           | arm64/x64 |       |
| 1.19.2  |           | arm64/x64 |       |
| 1.19.1  |           | arm64/x64 |       |
| 1.19.0  |           | arm64/x64 |       |
| 1.18.6  |           |           |       |
| 1.18.5  |           | arm64/x64 |       |
| 1.18.4  |           | arm64/x64 |       |
| 1.18.3  |           | arm64/x64 |       |
| 1.18.2  |           | arm64/x64 |       |
| 1.18.1  |           | arm64/x64 |       |
| 1.18.0  |           | arm64/x64 |       |
| 1.17.6  |           |           |       |
| 1.17.5  |           |           |       |
| 1.17.4  |           |           |       |
| 1.17.3  |           |           |       |
| 1.17.2  |           |           |       |
| 1.17.1  |           |           |       |
| 1.17.0  |           |           |       |
| 1.16.9  |           |           |       |
| 1.16.8  |           |           |       |
| 1.16.7  |           |           |       |
| 1.16.6  |           |           |       |
| 1.16.5  |           |           |       |
| 1.16.4  |           |           |       |
| 1.16.3  |           |           |       |
| 1.16.2  |           |           |       |
| 1.16.1  |           |           |       |
| 1.16.0  |           |           |       |
| 1.15.5  |           |           |       |
| 1.15.4  |           |           |       |
| 1.15.3  |           |           |       |
| 1.15.2  |           |           |       |
| 1.15.1  |           |           |       |
| 1.15.0  |           |           |       |
| 1.15.0  |           |           |       |
| 1.14.1  |           |           |       |
| 1.14.0  |           |           |       |
| 1.13.2  |           |           |       |
| 1.13.1  |           |           |       |
| 1.13.0  |           |           |       |
| 1.12.2  |           |           |       |
| 1.12.1  |           |           |       |
| 1.12.0  |           |           |       |
| 1.11.0  |           |           |       |
| 1.10.1  |           |           |       |
| 1.10.0  |           |           |       |
| 1.9.1   |           |           |       |
| 1.9.0   |           |           |       |
| 1.8.0   |           |           |       |
| 1.7.2   |           |           |       |
| 1.7.1   |           |           |       |
| 1.7.0   |           |           |       |
| 1.6.0   |           |           |       |
| 1.5.2   |           |           |       |
| 1.5.1   |           |           |       |
| 1.5.0   |           |           |       |
| 1.4.1   |           |           |       |
| 1.4.0   |           |           |       |
| 1.3.0   |           |           |       |
| 1.2.1   |           |           |       |
| 1.2.0   |           |           |       |
| 1.1.0   |           |           |       |
| 1.0.4   |           |           |       |
| 1.0.3   |           |           |       |
| 1.0.2   |           |           |       |
| 1.0.1   |           |           |       |
| 1.0.0   |           |           |       |
| 0.23.2  |           |           |       |
| 0.23.1  |           |           |       |
| 0.23.0  |           |           |       |
| 0.22.20 |           |           |       |
| 0.22.19 |           |           |       |
| 0.22.18 |           |           |       |
| 0.22.17 |           |           |       |
| 0.22.16 |           |           |       |
| 0.22.15 |           |           |       |
| 0.22.14 |           |           |       |
| 0.22.13 |           |           |       |
| 0.22.12 |           |           |       |
| 0.22.11 |           |           |       |
| 0.22.10 |           |           |       |
| 0.22.9  |           |           |       |
| 0.22.8  |           |           |       |
| 0.22.7  |           |           |       |
| 0.22.6  |           |           |       |
| 0.22.5  |           |           |       |
| 0.22.4  |           |           |       |
| 0.22.3  |           |           |       |
| 0.22.2  |           |           |       |
| 0.22.1  |           |           |       |
| 0.22.0  |           |           |       |
| 0.21.12 |           |           |       |
| 0.21.11 |           |           |       |
| 0.21.10 |           |           |       |
| 0.21.9  |           |           |       |
| 0.21.8  |           |           |       |
| 0.21.7  |           |           |       |
| 0.21.6  |           |           |       |
| 0.21.5  |           |           |       |
| 0.21.4  |           |           |       |
| 0.21.3  |           |           |       |
| 0.21.2  |           |           |       |
| 0.21.1  |           |           |       |
| 0.21.0  |           |           |       |
| 0.20.4  |           |           |       |
| 0.20.3  |           |           |       |
| 0.20.2  |           |           |       |
| 0.20.1  |           |           |       |
| 0.20.0  |           |           |       |
| 0.20.0  |           |           |       |
| 0.19.4  |           |           |       |
| 0.19.3  |           |           |       |
| 0.19.2  |           |           |       |
| 0.19.1  |           |           |       |
| 0.19.0  |           |           |       |
| 0.18.2  |           |           |       |
| 0.18.1  |           |           |       |
| 0.18.0  |           |           |       |
| 0.17.2  |           |           |       |
| 0.17.1  |           |           |       |
| 0.17.0  |           |           |       |
| 0.16.3  |           |           |       |
| 0.16.2  |           |           |       |
| 0.16.1  |           |           |       |
| 0.16.0  |           |           |       |
| 0.15.0  |           |           |       |
| 0.14.6  |           |           |       |
| 0.14.5  |           |           |       |
| 0.14.4  |           |           |       |
| 0.14.3  |           |           |       |
| 0.14.2  |           |           |       |
| 0.14.1  |           |           |       |
| 0.14.0  |           |           |       |
| 0.13.1  |           |           |       |
| 0.13.0  |           |           |       |
