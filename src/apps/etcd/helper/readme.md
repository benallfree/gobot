![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.32/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-etcd) ![](https://img.shields.io/npm/dt/gobot-etcd) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## etcd via npm

This package allows you to use [etcd](https://etcd.io) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot etcd --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`etcd`)
bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-etcd
```

With `gobot-etcd` present, Gobot will default to the `etcd` version corresponding to the `gobot-etcd` version you installed. Now you can use `etcd` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`etcd`)
bot..run([`--version`])
```

**Locking to a specific version**

The `gobot-etcd` package version always mirrors the underlying `etcd` [version](#known-versions):

```bash
npm i gobot-etcd@3.6.0-alpha.0
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `etcd` even though `gobot-etcd` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`etcd`, { version: `3.6.0-alpha.0` })
bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`etcd`, { version: `*` })
bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`etcd`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
bot.run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-etcd` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-etcd
etcd --help

# Upgrade to  @latest or any version
npm i -g gobot-etcd@latest
```

For more information, see Gobot's [main docs](https://www.npmjs.com/package/gobot) and [API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/docs/readme.md).

## Sample project

View the [etcd sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.32/src/apps/etcd/sample-project) on github.

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

`gobot-etcd` versions mirror `etcd` versions. Gobot knows about 232 releases of `etcd`:

| Version       | darwin    | linux     | win32 |
| ------------- | --------- | --------- | ----- |
| 3.6.0-alpha.0 | arm64/x64 | arm64/x64 | x64   |
| 3.5.12        | arm64/x64 | arm64/x64 | x64   |
| 3.5.11        | arm64/x64 | arm64/x64 | x64   |
| 3.5.10        | arm64/x64 | arm64/x64 | x64   |
| 3.5.9         | arm64/x64 | arm64/x64 | x64   |
| 3.5.8         | arm64/x64 | arm64/x64 | x64   |
| 3.5.7         | arm64/x64 | arm64/x64 | x64   |
| 3.5.6         | arm64/x64 | arm64/x64 | x64   |
| 3.5.5         | arm64/x64 | arm64/x64 | x64   |
| 3.5.4         | x64       | arm64/x64 | x64   |
| 3.5.3         | x64       | arm64/x64 | x64   |
| 3.5.2         | x64       | arm64/x64 | x64   |
| 3.5.1         | x64       | arm64/x64 | x64   |
| 3.5.0         | x64       | arm64/x64 | x64   |
| 3.5.0-rc.1    | x64       | arm64/x64 | x64   |
| 3.5.0-rc.0    | x64       | arm64/x64 | x64   |
| 3.5.0-beta.4  | x64       | arm64/x64 | x64   |
| 3.5.0-beta.3  | x64       | arm64/x64 | x64   |
| 3.5.0-beta.1  | x64       | arm64/x64 | x64   |
| 3.5.0-alpha.0 | x64       | arm64/x64 | x64   |
| 3.4.31        | x64       | arm64/x64 | x64   |
| 3.4.30        | x64       | arm64/x64 | x64   |
| 3.4.29        | x64       | arm64/x64 | x64   |
| 3.4.28        | x64       | arm64/x64 | x64   |
| 3.4.27        | x64       | arm64/x64 | x64   |
| 3.4.26        | x64       | arm64/x64 | x64   |
| 3.4.25        | x64       | arm64/x64 | x64   |
| 3.4.24        | x64       | arm64/x64 | x64   |
| 3.4.23        | x64       | arm64/x64 | x64   |
| 3.4.22        | x64       | arm64/x64 | x64   |
| 3.4.21        | x64       | arm64/x64 | x64   |
| 3.4.20        | x64       | arm64/x64 | x64   |
| 3.4.19        | x64       | arm64/x64 | x64   |
| 3.4.18        | x64       | arm64/x64 | x64   |
| 3.4.17        | x64       | arm64/x64 | x64   |
| 3.4.16        | x64       | arm64/x64 | x64   |
| 3.4.15        | x64       | arm64/x64 | x64   |
| 3.4.14        | x64       | arm64/x64 | x64   |
| 3.4.13        | x64       | arm64/x64 | x64   |
| 3.4.12        | x64       | arm64/x64 | x64   |
| 3.4.11        | x64       | arm64/x64 | x64   |
| 3.4.10        | x64       | arm64/x64 | x64   |
| 3.4.9         | x64       | arm64/x64 | x64   |
| 3.4.8         | x64       | arm64/x64 | x64   |
| 3.4.7         | x64       | arm64/x64 | x64   |
| 3.4.6         | x64       | arm64/x64 | x64   |
| 3.4.5         | x64       | arm64/x64 | x64   |
| 3.4.4         | x64       | arm64/x64 | x64   |
| 3.4.3         | x64       | arm64/x64 | x64   |
| 3.4.2         | x64       | arm64/x64 | x64   |
| 3.4.1         | x64       | arm64/x64 | x64   |
| 3.4.0         | x64       | arm64/x64 | x64   |
| 3.4.0-rc.4    | x64       | arm64/x64 | x64   |
| 3.4.0-rc.3    | x64       | arm64/x64 | x64   |
| 3.4.0-rc.2    | x64       | arm64/x64 | x64   |
| 3.4.0-rc.1    | x64       | arm64/x64 | x64   |
| 3.4.0-rc.0    | x64       | arm64/x64 | x64   |
| 3.3.27        | x64       | arm64/x64 | x64   |
| 3.3.26        | x64       | arm64/x64 | x64   |
| 3.3.25        | x64       | arm64/x64 | x64   |
| 3.3.24        | x64       | arm64/x64 | x64   |
| 3.3.23        | x64       | arm64/x64 | x64   |
| 3.3.22        | x64       | arm64/x64 | x64   |
| 3.3.21        | x64       | arm64/x64 | x64   |
| 3.3.20        | x64       | arm64/x64 | x64   |
| 3.3.19        | x64       | arm64/x64 | x64   |
| 3.3.18        | x64       | arm64/x64 | x64   |
| 3.3.17        | x64       | arm64/x64 | x64   |
| 3.3.15        | x64       | arm64/x64 | x64   |
| 3.3.14        | x64       | arm64/x64 | x64   |
| 3.3.14-rc.0   | x64       | arm64/x64 | x64   |
| 3.3.14-beta.0 | x64       | arm64/x64 | x64   |
| 3.3.13        | x64       | arm64/x64 | x64   |
| 3.3.12        | x64       | arm64/x64 | x64   |
| 3.3.11        | x64       | arm64/x64 | x64   |
| 3.3.10        | x64       | arm64/x64 | x64   |
| 3.3.9         | x64       | arm64/x64 | x64   |
| 3.3.8         | x64       | arm64/x64 | x64   |
| 3.3.7         | x64       | arm64/x64 | x64   |
| 3.3.6         | x64       | arm64/x64 | x64   |
| 3.3.5         | x64       | arm64/x64 | x64   |
| 3.3.4         | x64       | arm64/x64 | x64   |
| 3.3.3         | x64       | arm64/x64 | x64   |
| 3.3.2         | x64       | arm64/x64 | x64   |
| 3.3.1         | x64       | arm64/x64 | x64   |
| 3.3.0         | x64       | arm64/x64 | x64   |
| 3.3.0-rc.4    | x64       | arm64/x64 | x64   |
| 3.3.0-rc.3    | x64       | arm64/x64 | x64   |
| 3.3.0-rc.2    | x64       | arm64/x64 | x64   |
| 3.3.0-rc.1    | x64       | arm64/x64 | x64   |
| 3.3.0-rc.0    | x64       | arm64/x64 | x64   |
| 3.2.32        | x64       | arm64/x64 | x64   |
| 3.2.31        | x64       | arm64/x64 | x64   |
| 3.2.30        | x64       | arm64/x64 | x64   |
| 3.2.29        | x64       | arm64/x64 | x64   |
| 3.2.28        | x64       | arm64/x64 | x64   |
| 3.2.27        | x64       | arm64/x64 | x64   |
| 3.2.26        | x64       | arm64/x64 | x64   |
| 3.2.25        | x64       | arm64/x64 | x64   |
| 3.2.24        | x64       | arm64/x64 | x64   |
| 3.2.23        | x64       | arm64/x64 | x64   |
| 3.2.22        | x64       | arm64/x64 | x64   |
| 3.2.21        | x64       | arm64/x64 | x64   |
| 3.2.20        | x64       | arm64/x64 | x64   |
| 3.2.19        | x64       | arm64/x64 | x64   |
| 3.2.18        | x64       | arm64/x64 | x64   |
| 3.2.17        | x64       | arm64/x64 | x64   |
| 3.2.16        | x64       | arm64/x64 | x64   |
| 3.2.15        | x64       | arm64/x64 | x64   |
| 3.2.14        | x64       | arm64/x64 | x64   |
| 3.2.13        | x64       | arm64/x64 | x64   |
| 3.2.12        | x64       | arm64/x64 | x64   |
| 3.2.11        | x64       | arm64/x64 | x64   |
| 3.2.10        | x64       | arm64/x64 | x64   |
| 3.2.9         | x64       | arm64/x64 | x64   |
| 3.2.8         | x64       | arm64/x64 | x64   |
| 3.2.7         | x64       | arm64/x64 | x64   |
| 3.2.6         | x64       | arm64/x64 | x64   |
| 3.2.5         | x64       | arm64/x64 | x64   |
| 3.2.4         | x64       | arm64/x64 | x64   |
| 3.2.3         | x64       | arm64/x64 | x64   |
| 3.2.2         | x64       | arm64/x64 | x64   |
| 3.2.1         | x64       | arm64/x64 | x64   |
| 3.2.0         | x64       | x64       | x64   |
| 3.2.0-rc.1    | x64       | arm64/x64 | x64   |
| 3.2.0-rc.0    | x64       | arm64/x64 | x64   |
| 3.1.20        | x64       | x64       | x64   |
| 3.1.19        | x64       | x64       | x64   |
| 3.1.18        | x64       | x64       | x64   |
| 3.1.17        | x64       | x64       | x64   |
| 3.1.16        | x64       | x64       | x64   |
| 3.1.15        | x64       | x64       | x64   |
| 3.1.14        | x64       | x64       | x64   |
| 3.1.13        | x64       | x64       | x64   |
| 3.1.12        | x64       | x64       | x64   |
| 3.1.11        | x64       | x64       | x64   |
| 3.1.10        | x64       | x64       | x64   |
| 3.1.9         | x64       | x64       | x64   |
| 3.1.8         | x64       | x64       | x64   |
| 3.1.7         | x64       | x64       | x64   |
| 3.1.6         | x64       | x64       | x64   |
| 3.1.5         | x64       | x64       | x64   |
| 3.1.4         | x64       | x64       | x64   |
| 3.1.3         | x64       | x64       | x64   |
| 3.1.2         | x64       | x64       | x64   |
| 3.1.1         | x64       | x64       | x64   |
| 3.1.0         | x64       | x64       | x64   |
| 3.1.0-rc.1    | x64       | x64       | x64   |
| 3.1.0-rc.0    | x64       | x64       | x64   |
| 3.1.0-alpha.1 | x64       | x64       | x64   |
| 3.1.0-alpha.0 | x64       | x64       | x64   |
| 3.0.17        | x64       | x64       | x64   |
| 3.0.16        | x64       | x64       | x64   |
| 3.0.15        | x64       | x64       | x64   |
| 3.0.14        | x64       | x64       | x64   |
| 3.0.13        | x64       | x64       | x64   |
| 3.0.12        | x64       | x64       | x64   |
| 3.0.11        | x64       | x64       | x64   |
| 3.0.10        | x64       | x64       | x64   |
| 3.0.9         | x64       | x64       | x64   |
| 3.0.8         | x64       | x64       | x64   |
| 3.0.7         | x64       | x64       | x64   |
| 3.0.6         | x64       | x64       | x64   |
| 3.0.5         | x64       | x64       | x64   |
| 3.0.4         | x64       | x64       | x64   |
| 3.0.3         | x64       | x64       | x64   |
| 3.0.2         | x64       | x64       | x64   |
| 3.0.1         | x64       | x64       | x64   |
| 3.0.0         | x64       | x64       | x64   |
| 3.0.0-beta.0  | x64       | x64       | x64   |
| 2.3.8         | x64       | x64       | x64   |
| 2.3.7         | x64       | x64       | x64   |
| 2.3.6         | x64       | x64       | x64   |
| 2.3.5         | x64       | x64       | x64   |
| 2.3.4         | x64       | x64       | x64   |
| 2.3.3         | x64       | x64       | x64   |
| 2.3.2         | x64       | x64       | x64   |
| 2.3.1         | x64       | x64       | x64   |
| 2.3.0         | x64       | x64       | x64   |
| 2.3.0-alpha.1 | x64       | x64       | x64   |
| 2.3.0-alpha.0 | x64       | x64       | x64   |
| 2.2.5         | x64       | x64       | x64   |
| 2.2.4         | x64       | x64       | x64   |
| 2.2.3         | x64       | x64       | x64   |
| 2.2.2         | x64       | x64       | x64   |
| 2.2.1         | x64       | x64       | x64   |
| 2.2.0         | x64       | x64       | x64   |
| 2.2.0-rc.0    | x64       | x64       | x64   |
| 2.2.0-alpha.1 | x64       | x64       | x64   |
| 2.2.0-alpha.0 | x64       | x64       |       |
| 2.1.3         | x64       | x64       | x64   |
| 2.1.2         | x64       | x64       | x64   |
| 2.1.1         | x64       | x64       | x64   |
| 2.1.0-rc.0    | x64       | x64       | x64   |
| 2.1.0-alpha.1 | x64       | x64       |       |
| 2.1.0-alpha.0 | x64       | x64       | x64   |
| 2.0.13        | x64       | x64       | x64   |
| 2.0.12        | x64       | x64       | x64   |
| 2.0.11        | x64       | x64       | x64   |
| 2.0.10        | x64       | x64       | x64   |
| 2.0.9         | x64       | x64       | x64   |
| 2.0.8         | x64       | x64       | x64   |
| 2.0.5         | x64       | x64       | x64   |
| 2.0.4         | x64       | x64       | x64   |
| 2.0.3         | x64       | x64       |       |
| 2.0.2         | x64       | x64       | x64   |
| 2.0.0         | x64       | x64       | x64   |
| 2.0.0-rc.1    | x64       | x64       |       |
| 0.5.0-alpha.5 | x64       | x64       | x64   |
| 0.5.0-alpha.4 | x64       | x64       | x64   |
| 0.5.0-alpha.3 | x64       | x64       | x64   |
| 0.5.0-alpha.2 | x64       | x64       | x64   |
| 0.5.0-alpha.1 | x64       | x64       | x64   |
| 0.5.0-alpha.0 | x64       | x64       | x64   |
| 0.4.9         | x64       | x64       | x64   |
| 0.4.6         | x64       | x64       | x64   |
| 0.4.5         | x64       | x64       | x64   |
| 0.4.4         | x64       | x64       | x64   |
| 0.4.3         | x64       | x64       | x64   |
| 0.4.2         | x64       | x64       | x64   |
| 0.4.1         | x64       | x64       | x64   |
| 0.4.0         | x64       | x64       | x64   |
| 0.3.0         | x64       | x64       | x64   |
| 0.2.0         | x64       | x64       |       |
| 0.2.0-rc4     | x64       | x64       |       |
| 0.2.0-rc3     | x64       | x64       |       |
| 0.2.0-rc2     | x64       | x64       |       |
| 0.2.0-rc1     | x64       | x64       |       |
| 0.2.0-rc0     | x64       | x64       |       |
| 0.1.2         | x64       | x64       |       |
| 0.1.1         |           |           |       |
| 0.1.0         |           |           |       |
