![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.32/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-syncthing) ![](https://img.shields.io/npm/dt/gobot-syncthing) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## syncthing via npm

This package allows you to use [syncthing](https://forum.syncthing.net/) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot syncthing --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`syncthing`)
bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-syncthing
```

With `gobot-syncthing` present, Gobot will default to the `syncthing` version corresponding to the `gobot-syncthing` version you installed. Now you can use `syncthing` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`syncthing`)
bot..run([`--version`])
```

**Locking to a specific version**

The `gobot-syncthing` package version always mirrors the underlying `syncthing` [version](#known-versions):

```bash
npm i gobot-syncthing@1.27.5-rc.1
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `syncthing` even though `gobot-syncthing` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`syncthing`, { version: `1.27.5-rc.1` })
bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`syncthing`, { version: `*` })
bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`syncthing`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
bot.run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-syncthing` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-syncthing
syncthing --help

# Upgrade to  @latest or any version
npm i -g gobot-syncthing@latest
```

For more information, see Gobot's [main docs](https://www.npmjs.com/package/gobot) and [API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/docs/readme.md).



## Sample project

View the [syncthing sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.32/src/apps/syncthing/sample-project) on github.

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

`gobot-syncthing` versions mirror `syncthing` versions. Gobot knows about 364 releases of `syncthing`:

| Version        | freebsd            | darwin    | linux              | win32    |
| -------------- | ------------------ | --------- | ------------------ | -------- |
| 1.27.5-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.27.4         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.27.4-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.27.4-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.27.3         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.27.3-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.27.3-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.27.2         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.27.2-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.27.2-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.27.1         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.27.1-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.27.0         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.27.0-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.27.0-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.26.1         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.26.0         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.26.0-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.26.0-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.25.0         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.25.0-rc.3    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.25.0-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.25.0-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.24.0         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.24.0-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.23.7         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.23.7-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.23.7-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.23.6         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.23.6-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.23.6-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.23.5         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.23.5-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.23.4         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.23.3         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.23.3-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.23.3-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.23.2         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.23.2-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.23.2-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.23.1         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.23.1-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.23.0         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.22.3-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.22.3-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.22.2         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.22.2-rc.3    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.22.2-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.22.2-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.22.1         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.22.1-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.22.1-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.22.0         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.22.0-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.22.0-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.21.0         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.21.0-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.21.0-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.20.4         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.20.4-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.20.3         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.20.3-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.20.3-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.20.2         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.20.2-rc.3    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.20.2-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.20.2-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.20.1         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.20.0         |                    |           |                    |          |
| 1.20.0-rc.3    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.20.0-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.20.0-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.19.2         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.19.2-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.19.2-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.19.1         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.19.1-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.19.1-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.19.0         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.19.0-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.19.0-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.6         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.6-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.5         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.5-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.5-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.4         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.4-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.4-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.3         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.3-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.3-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.2         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.2-rc.3    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.2-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.2-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.1         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.1-rc.3    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.1-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.1-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.0         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.0-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.0-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.17.0         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.17.0-rc.4    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.17.0-rc.3    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.17.0-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.17.0-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.16.1         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.16.0         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.16.0-rc.3    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.16.0-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.16.0-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.15.1         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.15.0         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.15.0-rc.6    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.15.0-rc.5    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.15.0-rc.3    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.15.0-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.15.0-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.14.0         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.14.0-rc.3    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.14.0-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.14.0-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.13.1         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.13.0         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.13.0-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.12.1         | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.12.1-rc.1    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.12.0         | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.12.0-rc.4    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.12.0-rc.3    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.12.0-rc.2    | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.12.0-rc.1    | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.11.1         | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.11.0         | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.11.0-rc.3    | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.11.0-rc.2    | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.11.0-rc.1    | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.10.0         | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.10.0-rc.3    | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.10.0-rc.2    | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.10.0-rc.1    | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.9.0          | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.9.0-rc.5     | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.9.0-rc.4     | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.9.0-rc.3     | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.9.0-rc.2     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.9.0-rc.1     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.8.0          | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.8.0-rc.4     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.8.0-rc.3     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.8.0-rc.2     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.8.0-rc.1     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.7.1          | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.7.0          | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.7.0-rc.1     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.6.1          | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.6.0          |                    |           |                    |          |
| 1.6.0-rc.5     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.6.0-rc.4     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.6.0-rc.3     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.6.0-rc.2     | x64/ia32/arm       |           | arm64/x64/ia32/arm | x64/ia32 |
| 1.6.0-rc.1     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.5.0          | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.5.0-rc.2     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.5.0-rc.1     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.4.2          | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.4.2-rc.1     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.4.1          | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.4.1-rc.3     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.4.1-rc.2     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.4.1-rc.1     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.4.0          | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.4.0-rc.11    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.4.0-rc.10    | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.4.0-rc.9     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.4.0-rc.8     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.4.0-rc.7     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.4.0-rc.5     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.4.0-rc.4     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.4.0-rc.3     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.4.0-rc.2     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.3.4          | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.3.4-rc.1     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.3.3          | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.3.3-rc.1     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.3.2          | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.3.2-rc.3     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.3.2-rc.2     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.3.2-rc.1     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.3.1          | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.3.1-rc.2     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.3.1-rc.1     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.3.0          | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.3.0-rc.2     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.3.0-rc.1     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.2          | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.2-rc.3     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.2-rc.2     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.1          | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.1-rc.5     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.1-rc.4     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.1-rc.3     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.1-rc.2     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.1-rc.1     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.0          | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.0-rc.4     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.0-rc.3     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.0-rc.2     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.0-rc.1     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.1.4          | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.1.4-rc.1     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.1.3          | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.1.2          | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.1.2-rc.1     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.1.1          | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.1.1-rc.2     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.1.1-rc.1     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.1.0          | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.1.0-rc.2     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.1.0-rc.1     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.0.1          | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.0.1-rc.2     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.0.1-rc.1     | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.0.0          | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.55-rc.2   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.55-rc.1   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.54        | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.53        | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.53-rc.1   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.52        | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.52-rc.3   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.52-rc.2   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.52-rc.1   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.51        | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.51-rc.4   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.51-rc.3   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.51-rc.2   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.51-rc.1   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.50        | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.50-rc.3   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.50-rc.2   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.50-rc.1   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.49        | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.49-rc.4   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.49-rc.3   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.49-rc.2   | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.49-rc.1   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.48        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.48-rc.4   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.48-rc.3   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.48-rc.2   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.47        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.47-rc.4   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.47-rc.3   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.47-rc.2   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.47-rc.1   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.46        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.46-rc.2   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.46-rc.1   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.45        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.45-rc.3   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.45-rc.2   |                    |           |                    |          |
| 0.14.45-rc.1   |                    |           |                    |          |
| 0.14.44        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.44-rc.3   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.44-rc.2   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.44-rc.1   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.43        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.43-rc.1   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.42        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.42-rc.1   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.41        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.41-rc.6   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.41-rc.5   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.41-rc.4   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.41-rc.3   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.41-rc.2   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.41-rc.1   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.40        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.40-rc.4   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.40-rc.3   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.40-rc.2   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.40-rc.1   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.39        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.39-rc.1   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.38        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.38-rc.1   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.37        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.37-rc.3   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.37-rc.2   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.37-rc.1   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.36        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.35        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.34-rc.1   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.33        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.33-rc.1   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.32        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.32-rc.2   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.32-rc.1   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.31        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.31-rc.1   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.30        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.30-rc.1   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.29        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.29-rc.1   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.28        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.28-rc.3   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.28-rc.2   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.28-rc.1   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.27        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.27-rc.4   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.27-rc.3   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.27-rc.2   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.27-rc.1   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.26        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.26-rc.1   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.25        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.25-rc.2   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.25-rc.1   |                    |           |                    |          |
| 0.14.24        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.24-rc.1   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.23        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.22        |                    |           |                    |          |
| 0.14.22-rc.1   | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.21        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.20        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.19        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.18        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.17        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.16        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.15        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.14        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.13        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.12        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.11        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.10        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.9         | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.8         | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.7         | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.6         | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.5         | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.4         | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.3         | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.2         | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.1         | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.0         | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.0-rc.1    | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.0-beta.1  | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.13.10        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.13.9         | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.13.8         | x64/ia32           |           | arm64/x64          | x64      |
| 0.13.7         | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.13.6         | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.13.5         | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.13.4         | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.13.3         |                    |           |                    |          |
| 0.13.2         |                    |           |                    |          |
| 0.13.1         |                    |           |                    |          |
| 0.13.0         |                    |           |                    |          |
| 0.12.25        | x64/ia32           |           | arm64/x64/ia32/arm | x64/ia32 |
| 0.12.24        |                    |           |                    |          |
| 0.0.0-releases |                    |           |                    |          |
