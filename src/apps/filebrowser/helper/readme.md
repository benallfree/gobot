![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.34/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-filebrowser) ![](https://img.shields.io/npm/dt/gobot-filebrowser) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## filebrowser via npm

This package allows you to use [filebrowser](https://filebrowser.org) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot filebrowser --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`filebrowser`)
bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-filebrowser
```

With `gobot-filebrowser` present, Gobot will default to the `filebrowser` version corresponding to the `gobot-filebrowser` version you installed. Now you can use `filebrowser` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`filebrowser`)
bot..run([`--version`])
```

**Locking to a specific version**

The `gobot-filebrowser` package version always mirrors the underlying `filebrowser` [version](#all-known-releases):

```bash
npm i gobot-filebrowser@2.27.0
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `filebrowser` even though `gobot-filebrowser` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`filebrowser`, { version: `2.27.0` })
bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`filebrowser`, { version: `*` })
bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`filebrowser`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
bot.run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-filebrowser` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-filebrowser
filebrowser --help

# Upgrade to  @latest or any version
npm i -g gobot-filebrowser@latest
```

## CLI

`gobot-filebrowser` comes with a [bin](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#bin) shortcut for CLI usage.

### `filebrowser  [options]`
filebrowser (https://filebrowser.org) runner for Gobot (https://github.com/benallfree/gobot)

**Options**

|Name|Default|Discussion|
|---|---|---|
| `--g-v` | `true` | Show informational output |
| `--g-vv` | `false` | Show even more output |
| `--g-vvv` | `false` | Show even more output |
| `--g-cache-path` | `host specific` | The cache path to use |
| `--g-use-version` | `*` | Run a specific binary version (format: x.y.z semver or x.y.* semver range) |
| `--g-os` | `host specific` | Specify OS/Platform |
| `--g-arch` | `host specific` | Specify OS/Platform |




## API

[Full API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/docs/readme.md)



## Sample project

View the [filebrowser sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.34/src/apps/filebrowser/sample-project) on github.

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

`gobot-filebrowser` versions mirror `filebrowser` versions. Gobot knows about 55 releases of `filebrowser`:

| Version | freebsd        | darwin    | linux              | win32          |
| ------- | -------------- | --------- | ------------------ | -------------- |
| 2.27.0  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.26.0  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.25.0  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.24.2  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.24.1  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.24.0  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.23.0  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.22.4  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.22.3  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.22.2  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.22.1  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.22.0  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.21.1  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.21.0  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.20.1  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.20.0  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 2.19.0  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.18.0  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.17.2  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.17.1  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.17.0  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.16.1  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.16.0  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.15.0  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.14.1  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.14.0  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.13.0  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.12.1  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.12.0  | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 2.11.0  | arm64/x64/ia32 | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.10.0  | arm64/x64/ia32 | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.9.0   | arm64/x64/ia32 | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.8.0   | arm64/x64/ia32 | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.7.0   | arm64/x64/ia32 | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.6.2   | arm64/x64/ia32 | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.6.1   | arm64/x64/ia32 | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.6.0   | arm64/x64/ia32 | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.5.0   | arm64/x64/ia32 | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.4.0   | arm64/x64/ia32 | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.3.0   | arm64/x64/ia32 | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.2.0   | arm64/x64/ia32 | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.1.2   | arm64/x64/ia32 | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.1.1   | arm64/x64/ia32 | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.1.0   | x64/ia32       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.16  | x64/ia32       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.15  | x64/ia32       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.14  | x64/ia32       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.13  | x64/ia32       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.12  | x64/ia32       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.11  |                |           |                    |                |
| 2.0.10  |                |           |                    |                |
| 2.0.9   | x64/ia32       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.8   | x64/ia32       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.7   | x64/ia32       | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 2.0.6   | x64/ia32       | x64       | arm64/x64/ia32/arm | x64/ia32       |
