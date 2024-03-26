![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.34/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-gitea) ![](https://img.shields.io/npm/dt/gobot-gitea) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## gitea via npm

This package allows you to use [gitea](https://about.gitea.com) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot gitea --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`gitea`)
bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-gitea
```

With `gobot-gitea` present, Gobot will default to the `gitea` version corresponding to the `gobot-gitea` version you installed. Now you can use `gitea` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`gitea`)
bot..run([`--version`])
```

**Locking to a specific version**

The `gobot-gitea` package version always mirrors the underlying `gitea` [version](#all-known-releases):

```bash
npm i gobot-gitea@1.21.9
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `gitea` even though `gobot-gitea` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`gitea`, { version: `1.21.9` })
bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`gitea`, { version: `*` })
bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`gitea`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
bot.run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-gitea` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-gitea
gitea --help

# Upgrade to  @latest or any version
npm i -g gobot-gitea@latest
```

For more information, see Gobot's [main docs](https://www.npmjs.com/package/gobot) and [API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/docs/readme.md).

## Sample project

View the [gitea sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.34/src/apps/gitea/sample-project) on github.

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

`gobot-gitea` versions mirror `gitea` versions. Gobot knows about 189 releases of `gitea`:

| Version    | darwin    | linux              | win32    |
| ---------- | --------- | ------------------ | -------- |
| 1.21.9     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.21.8     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.21.7     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.21.6     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.21.5     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.21.4     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.21.3     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.21.2     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.21.1     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.21.0     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.21.0-rc1 |           |                    |          |
| 1.21.0-rc0 |           |                    |          |
| 1.20.6     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.20.5     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.20.4     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.20.3     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.20.2     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.20.1     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.20.0     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.20.0-rc2 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.20.0-rc1 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.20.0-rc0 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.19.4     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.19.3     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.19.2     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.19.1     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.19.0     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.19.0-rc1 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.19.0-rc0 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.5     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.4     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.3     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.2     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.1     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.0     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.0-rc1 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.18.0-rc0 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.17.4     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.17.3     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.17.2     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.17.1     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.17.0     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.17.0-rc2 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.17.0-rc1 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.16.9     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.16.8     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.16.7     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.16.6     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.16.5     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.16.4     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.16.3     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.16.2     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.16.1     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.16.0     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.16.0-rc1 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.15.11    | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.15.10    | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.15.9     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.15.8     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.15.7     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.15.6     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.15.5     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.15.4     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.15.3     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.15.2     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.15.1     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.15.0     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.15.0-rc3 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.15.0-rc2 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.15.0-rc1 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.14.7     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.14.6     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.14.5     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.14.4     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.14.3     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.14.2     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.14.1     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.14.0     | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.14.0-rc2 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.14.0-rc1 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.13.7     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.13.6     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.13.5     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.13.4     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.13.3     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.13.2     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.13.1     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.13.0     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.13.0-rc2 | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.13.0-rc1 | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.12.6     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.12.5     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.12.4     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.12.3     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.12.2     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.12.1     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.12.0     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.12.0-rc2 | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.12.0-rc1 | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.11.8     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.11.7     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.11.6     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.11.5     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.11.4     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.11.3     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.11.2     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.11.1     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.11.0     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.11.0-rc2 | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.11.0-rc1 | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.11.0-dev |           |                    |          |
| 1.10.6     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.10.4     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.10.3     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.10.2     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.10.1     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.10.0     | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.10.0-rc2 | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.10.0-rc1 | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.9.6      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.9.5      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.9.4      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.9.3      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.9.2      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.9.1      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.9.0      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.9.0-rc2  | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.8.3      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.8.2      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.8.1      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.8.0      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.8.0-rc3  | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.8.0-rc2  | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.8.0-rc1  | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.7.6      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.7.5      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.7.4      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.7.3      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.7.2      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.7.1      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.7.0      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.7.0-rc3  | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.7.0-rc2  | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.7.0-rc1  | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.7.0-dev  | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.6.4      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.6.3      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.6.2      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.6.1      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.6.0      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.6.0-rc2  | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.6.0-rc1  | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.6.0-dev  | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.5.3      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.5.2      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.5.1      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.5.0      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.5.0-rc2  | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.5.0-rc1  | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.5.0-dev  | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.4.3      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.4.2      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.4.1      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.4.0      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.4.0-rc3  | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.4.0-rc2  | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.4.0-rc1  | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.3.3      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.3.2      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.3.1      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.3.0      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.3.0-rc2  | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.3.0-rc1  | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.3      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.2      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.1      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.0      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.0-rc3  | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.0-rc2  | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.0-rc1  | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.1.4      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.1.3      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.1.2      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.1.1      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.1.0      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.0.2      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.0.1      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 1.0.0      | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.9.99     |           |                    |          |
