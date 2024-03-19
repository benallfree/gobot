![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.31/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-gotify) ![](https://img.shields.io/npm/dt/gobot-gotify) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## Gotify via npm

This package allows you to use [Gotify](https://gotify.net) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot gotify --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`gotify`)
bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-gotify
```

With `gobot-gotify` present, Gobot will default to the `gotify` version corresponding to the `gobot-gotify` version you installed. Now you can use `gotify` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`gotify`)
bot..run([`--version`])
```

**Locking to a specific version**

The `gobot-gotify` package version always mirrors the underlying `gotify` [version](#known-versions):

```bash
npm i gobot-gotify@2.2.3
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `gotify` even though `gobot-gotify` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`gotify`, { version: `2.2.3` })
bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`gotify`, { version: `*` })
bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`gotify`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
bot.run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-gotify` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-gotify
gotify --help

# Upgrade to  @latest or any version
npm i -g gobot-gotify@latest
```

For more information, see Gobot's [main docs](https://www.npmjs.com/package/gobot) and [API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/docs/readme.md).

## Quirks

Because Gotify has both client and server binaries, this one is named `gotify` to signify that it is the server, while the CLI client is `gotifyc`.


## Sample project

View the [Gotify sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.31/src/apps/gotify/sample-project) on github.

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

`gobot-gotify` versions mirror `gotify` versions. Gobot knows about 10 releases of `gotify`:

| Version | darwin    | linux              | win32    |
| ------- | --------- | ------------------ | -------- |
| 2.2.3   | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 2.2.2   | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 2.2.1   | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 2.2.0   | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 2.1.1   | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 2.1.0   |           | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0   |           | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.2   |           | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.1   |           | arm64/x64/arm      | x64      |
| 1.2.0   |           | arm64/x64/arm      | x64      |
