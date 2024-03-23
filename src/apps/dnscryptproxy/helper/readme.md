![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.32/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-dnscryptproxy) ![](https://img.shields.io/npm/dt/gobot-dnscryptproxy) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## dnscrypt-proxy via npm

This package allows you to use [dnscrypt-proxy](https://dnscrypt.info) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot dnscryptproxy --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`dnscryptproxy`)
bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-dnscryptproxy
```

With `gobot-dnscryptproxy` present, Gobot will default to the `dnscryptproxy` version corresponding to the `gobot-dnscryptproxy` version you installed. Now you can use `dnscryptproxy` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`dnscryptproxy`)
bot..run([`--version`])
```

**Locking to a specific version**

The `gobot-dnscryptproxy` package version always mirrors the underlying `dnscryptproxy` [version](#known-versions):

```bash
npm i gobot-dnscryptproxy@2.1.5
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `dnscryptproxy` even though `gobot-dnscryptproxy` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`dnscryptproxy`, { version: `2.1.5` })
bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`dnscryptproxy`, { version: `*` })
bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`dnscryptproxy`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
bot.run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-dnscryptproxy` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-dnscryptproxy
dnscryptproxy --help

# Upgrade to  @latest or any version
npm i -g gobot-dnscryptproxy@latest
```

For more information, see Gobot's [main docs](https://www.npmjs.com/package/gobot) and [API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/docs/readme.md).

## Sample project

View the [dnscrypt-proxy sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.32/src/apps/dnscryptproxy/sample-project) on github.

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

`gobot-dnscryptproxy` versions mirror `dnscryptproxy` versions. Gobot knows about 84 releases of `dnscryptproxy`:

| Version       | freebsd            | darwin    | linux              | win32    |
| ------------- | ------------------ | --------- | ------------------ | -------- |
| 2.1.5         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 2.1.4         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 2.1.3         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 2.1.2         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 2.1.1         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 2.1.0         | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.46-beta3  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.46-beta2  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.46-beta1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.45        | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.44        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.43        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.42        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.41        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.40        |                    |           |                    |          |
| 2.0.39        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.38        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.36        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.36-beta.1 | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.35        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.34        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.34-beta.1 | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.33        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.32        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.31        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.30        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.29        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.29-beta.3 | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.29-beta.2 | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.29-beta.1 | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.28        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.27        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.26        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.25        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.24        |                    |           |                    |          |
| 2.0.23        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.22        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.21        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.20        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.19        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.18        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.17        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.16        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.15        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.14        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.13        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.12        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.11        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.10        | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.9         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.9         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.9         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.8         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.7         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.6         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.5         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.4         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.3         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.2         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.1         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0         | arm64/x64/ia32/arm |           | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0         | arm64/x64/ia32/arm |           | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0         | arm64/x64/ia32/arm | arm64     | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0         | arm64/x64/ia32/arm |           | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0         | arm64/x64/ia32/arm |           | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0         | arm64/x64/ia32/arm |           | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0         | arm64/x64/ia32/arm |           | arm64/x64/ia32/arm | x64/ia32 |
| 2.0.0         | arm64/x64/ia32/arm |           | arm64/x64/ia32/arm | x64/ia32 |
