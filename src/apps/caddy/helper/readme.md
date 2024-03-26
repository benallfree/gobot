![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.34/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-caddy) ![](https://img.shields.io/npm/dt/gobot-caddy) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## Caddy via npm

This package allows you to use [Caddy](https://caddyserver.com/) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot caddy --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`caddy`)
bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-caddy
```

With `gobot-caddy` present, Gobot will default to the `caddy` version corresponding to the `gobot-caddy` version you installed. Now you can use `caddy` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`caddy`)
bot..run([`--version`])
```

**Locking to a specific version**

The `gobot-caddy` package version always mirrors the underlying `caddy` [version](#known-versions):

```bash
npm i gobot-caddy@2.7.6
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `caddy` even though `gobot-caddy` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`caddy`, { version: `2.7.6` })
bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`caddy`, { version: `*` })
bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`caddy`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
bot.run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-caddy` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-caddy
caddy --help

# Upgrade to  @latest or any version
npm i -g gobot-caddy@latest
```

For more information, see Gobot's [main docs](https://www.npmjs.com/package/gobot) and [API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/docs/readme.md).

## Sample project

View the [Caddy sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.34/src/apps/caddy/sample-project) on github.

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

`gobot-caddy` versions mirror `caddy` versions. Gobot knows about 112 releases of `caddy`:

| Version       | freebsd            | darwin    | linux              | win32     |
| ------------- | ------------------ | --------- | ------------------ | --------- |
| 2.7.6         | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64/arm64 |
| 2.7.5         | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64/arm64 |
| 2.7.4         | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64/arm64 |
| 2.7.3         | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64/arm64 |
| 2.7.2         | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64/arm64 |
| 2.7.1         | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64/arm64 |
| 2.7.0         | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64/arm64 |
| 2.7.0-beta.2  | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64/arm64 |
| 2.7.0-beta.1  | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64/arm64 |
| 2.6.4         | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64/arm64 |
| 2.6.3         | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64/arm64 |
| 2.6.2         | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64/arm64 |
| 2.6.1         | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64/arm64 |
| 2.6.0         | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64/arm64 |
| 2.6.0-beta.5  | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64/arm64 |
| 2.6.0-beta.3  | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64/arm64 |
| 2.5.2         | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64/arm64 |
| 2.5.1         | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64/arm64 |
| 2.5.0         | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64/arm64 |
| 2.5.0-rc.1    | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64/arm64 |
| 2.5.0-beta.1  | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64/arm64 |
| 2.4.6         | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64/arm64 |
| 2.4.5         | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64/arm64 |
| 2.4.4         | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64/arm64 |
| 2.4.3         | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64       |
| 2.4.2         | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64       |
| 2.4.1         | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64       |
| 2.4.0         | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64       |
| 2.4.0-rc.1    | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64       |
| 2.4.0-beta.2  | arm64/x64/arm      | arm64/x64 | arm64/x64/arm      | x64       |
| 2.4.0-beta.1  | arm64/x64/arm      | x64       | arm64/x64/arm      | x64       |
| 2.3.0         | arm64/x64/arm      | x64       | arm64/x64/arm      | x64       |
| 2.3.0-rc.1    | arm64/x64/arm      | x64       | arm64/x64/arm      | x64       |
| 2.3.0-beta.1  | arm64/x64/arm      | x64       | arm64/x64/arm      | x64       |
| 2.2.1         | arm64/x64/arm      | x64       | arm64/x64/arm      | x64       |
| 2.2.0         | arm64/x64/arm      | x64       | arm64/x64/arm      | x64       |
| 2.2.0-rc.3    | arm64/x64/arm      | x64       | arm64/x64/arm      | x64       |
| 2.2.0-rc.2    | arm64/x64/arm      | x64       | arm64/x64/arm      | x64       |
| 2.2.0-rc.1    | arm64/x64/arm      | x64       | arm64/x64/arm      | x64       |
| 2.1.1         | arm64/x64/arm      | x64       | arm64/x64/arm      | x64       |
| 2.1.0         | arm64/x64/arm      | x64       | arm64/x64/arm      | x64       |
| 2.1.0-beta.1  | arm64/x64/arm      | x64       | arm64/x64/arm      | x64       |
| 2.0.0         | arm64/x64/arm      | x64       | arm64/x64/arm      | x64       |
| 2.0.0-rc.3    | arm64/x64/arm      | x64       | arm64/x64/arm      | x64       |
| 2.0.0-rc.2    | arm64/x64/arm      | x64       | arm64/x64/arm      | x64       |
| 2.0.0-rc.1    | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32  |
| 2.0.0-beta9   |                    |           |                    |           |
| 2.0.0-beta8   |                    |           |                    |           |
| 2.0.0-beta7   |                    |           |                    |           |
| 2.0.0-beta6   |                    |           |                    |           |
| 2.0.0-beta4   |                    |           |                    |           |
| 2.0.0-beta3   |                    |           |                    |           |
| 2.0.0-beta2   |                    |           |                    |           |
| 2.0.0-beta12  |                    |           |                    |           |
| 2.0.0-beta11  |                    |           |                    |           |
| 2.0.0-beta10  |                    |           |                    |           |
| 2.0.0-beta1   |                    |           |                    |           |
| 2.0.0-beta.20 |                    |           |                    |           |
| 2.0.0-beta.19 |                    |           |                    |           |
| 2.0.0-beta.18 |                    |           |                    |           |
| 2.0.0-beta.17 |                    |           |                    |           |
| 2.0.0-beta.15 |                    |           |                    |           |
| 2.0.0-beta.14 |                    |           |                    |           |
| 2.0.0-beta.13 |                    |           |                    |           |
| 1.0.4         | x64                | x64       | arm64/x64/ia32     | x64       |
| 1.0.3         | x64                | x64       | arm64/x64/ia32     | x64       |
| 1.0.2         | x64                | x64       | arm64/x64/ia32     | x64       |
| 1.0.1         | x64                | x64       | arm64/x64/ia32     | x64       |
| 1.0.0         | x64                | x64       | arm64/x64/ia32     | x64       |
| 1.0.0-beta2   | x64                | x64       | arm64/x64/ia32     | x64/ia32  |
| 1.0.0-beta1   | x64                | x64       | arm64/x64/ia32     | x64/ia32  |
| 0.11.5        | x64                | x64       | arm64/x64/ia32     | x64/ia32  |
| 0.11.4        | x64                | x64       | arm64/x64/ia32     | x64/ia32  |
| 0.11.3        |                    | x64       | arm64/x64/ia32     | x64/ia32  |
| 0.11.2        |                    |           |                    |           |
| 0.11.1        | x64                | x64       | arm64/x64/ia32     | x64/ia32  |
| 0.11.0        | x64                | x64       | arm64/x64/ia32     | x64/ia32  |
| 0.10.14       | x64                | x64       | arm64/x64/ia32     | x64/ia32  |
| 0.10.13       | x64                | x64       | arm64/x64/ia32     | x64/ia32  |
| 0.10.12       | x64                | x64       | arm64/x64/ia32     | x64/ia32  |
| 0.10.11       | x64                | x64       | arm64/x64/ia32     | x64/ia32  |
| 0.10.10       | x64                | x64       | arm64/x64/ia32     | x64/ia32  |
| 0.10.9        | x64                | x64       | arm64/x64/ia32     | x64/ia32  |
| 0.10.8        | x64                | x64       | arm64/x64/ia32     | x64/ia32  |
| 0.10.7        | x64                | x64       | arm64/x64/ia32     | x64/ia32  |
| 0.10.6        | x64                | x64       | arm64/x64/ia32     | x64/ia32  |
| 0.10.5        | x64                | x64       | arm64/x64          | x64/ia32  |
| 0.10.4        | x64                | x64       | arm64/x64/ia32     | x64/ia32  |
| 0.10.3        | x64                | x64       | arm64/x64          | x64/ia32  |
| 0.10.2        | x64                | x64       | arm64/x64/ia32     | x64/ia32  |
| 0.10.1        | x64                | x64       | arm64/x64/ia32     | x64/ia32  |
| 0.10.0        | x64                | x64       | arm64/x64          | x64/ia32  |
| 0.9.5         | x64/ia32           | x64       | arm64/x64/ia32     | x64/ia32  |
| 0.9.4         | x64/ia32           | x64       | arm64/x64/ia32     | x64/ia32  |
| 0.9.3         | x64/ia32           | x64       | arm64/x64/ia32     | x64/ia32  |
| 0.9.2         | x64/ia32           | x64       | arm64/x64/ia32     | x64/ia32  |
| 0.9.1         | x64/ia32           | x64       | arm64/x64/ia32     | x64/ia32  |
| 0.9.0         | x64/ia32           | x64       | arm64/x64/ia32     | x64/ia32  |
| 0.8.3         | x64/ia32           | x64       | arm64/x64/ia32     | x64/ia32  |
| 0.8.2         | x64/ia32/arm       | x64       | x64/ia32/arm       | x64/ia32  |
| 0.8.1         | x64/ia32/arm       | x64       | x64/ia32/arm       | x64/ia32  |
| 0.8.0         | x64/ia32/arm       | x64       | x64/ia32/arm       | x64/ia32  |
| 0.7.6         | x64/ia32/arm       | x64       | x64/ia32/arm       | x64/ia32  |
| 0.7.5         | x64/ia32/arm       | x64       | x64/ia32/arm       | x64/ia32  |
| 0.7.4         | x64/ia32/arm       | x64       | x64/ia32/arm       | x64/ia32  |
| 0.7.3         | x64/ia32/arm       | x64       | x64/ia32/arm       | x64/ia32  |
| 0.7.2         | x64/ia32/arm       | x64       | x64/ia32/arm       | x64/ia32  |
| 0.7.1         | x64/ia32/arm       | x64       | x64/ia32/arm       | x64/ia32  |
| 0.7.0         | x64/ia32/arm       | x64       | x64/ia32/arm       | x64/ia32  |
| 0.6.0         | x64/ia32/arm       | x64       | x64/ia32/arm       | x64/ia32  |
| 0.5.1         | x64/ia32/arm       | x64       | x64/ia32/arm       | x64/ia32  |
| 0.5.0         | x64/ia32/arm       | x64       | x64/ia32/arm       | x64/ia32  |
