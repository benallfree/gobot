![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.28/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-kopia) ![](https://img.shields.io/npm/dt/gobot-kopia) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## `kopia` for npm

This package allows you to use [kopia](https://kopia.io) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot kopia --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
gobot(`kopia`).run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-kopia
```

With `gobot-kopia` present, Gobot will default to the `kopia` version corresponding to the `gobot-kopia` version you installed. Now you can use `kopia` as a real dependency.

```js
import { gobot } from 'gobot'
gobot(`kopia`).run([`--version`])
```

**Locking to a specific version**

The `gobot-kopia` package version always mirrors the underlying `kopia` [version](#known-versions):

```bash
npm i gobot-kopia@0.15.0
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `kopia` even though `gobot-kopia` is installed.

```js
// Run a specific version (override)
gobot(`kopia`, { version: `0.15.0` }).run([`--version`])

// Or the latest version (override)
gobot(`kopia`, { version: `*` }).run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
gobot(`kopia`, {
  env: process.env, // This is not always necessary, but some apps do need it
}).run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-kopia` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-kopia
kopia --help

# Upgrade to  @latest or any version
npm i -g gobot-kopia@latest
```

For more information, see Gobot's [main docs](https://www.npmjs.com/package/gobot) and [API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.28/docs/readme.md).



## Sample project

View the [kopia sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.28/src/apps/kopia/sample-project) on github.

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
npx gobot <user>/<repo> --g-show-versions md --g-refresh
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

`gobot-kopia` versions mirror `kopia` versions. Gobot knows about 69 releases of `kopia`:

| Version | freebsd       | darwin    | linux         | win32 |
| ------- | ------------- | --------- | ------------- | ----- |
| 0.15.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.14.1  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.14.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.13.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.13.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.13.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.12.1  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.12.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.11.3  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.11.2  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.11.1  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.11.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.10.7  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.10.6  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.10.5  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.10.4  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.10.3  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.10.2  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.10.1  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.10.0  | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.9.8   | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.9.7   | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.9.6   | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.9.5   | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.9.4   | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.9.3   | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.9.2   | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.9.1   | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.9.0   | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.9.0   | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.9.0   | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.9.0   | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.9.0   | arm64/x64/arm | arm64/x64 | arm64/x64/arm | x64   |
| 0.8.4   |               | arm64/x64 | arm64/x64/arm | x64   |
| 0.8.3   |               | arm64/x64 | arm64/x64/arm | x64   |
| 0.8.2   |               | arm64/x64 | arm64/x64/arm | x64   |
| 0.7.3   |               | x64       | arm64/x64/arm | x64   |
| 0.7.2   |               | x64       | arm64/x64/arm | x64   |
| 0.7.1   |               | x64       | arm64/x64/arm | x64   |
| 0.7.0   |               | x64       | arm64/x64/arm | x64   |
| 0.7.0   |               | x64       | arm64/x64/arm | x64   |
| 0.7.0   |               | x64       | arm64/x64/arm | x64   |
| 0.6.4   |               | x64       | arm64/x64/arm | x64   |
| 0.6.3   |               | x64       | arm64/x64/arm | x64   |
| 0.6.2   |               | x64       | arm64/x64/arm | x64   |
| 0.6.1   |               | x64       | arm64/x64/arm | x64   |
| 0.6.0   |               | x64       | arm64/x64/arm | x64   |
| 0.6.0   |               | x64       | arm64/x64/arm | x64   |
| 0.6.0   |               | x64       | arm64/x64/arm | x64   |
| 0.6.0   |               | x64       | arm64/x64/arm | x64   |
| 0.6.0   |               | x64       | arm64/x64/arm | x64   |
| 0.5.2   |               | x64       | arm64/x64/arm | x64   |
| 0.5.1   |               | x64       | arm64/x64/arm | x64   |
| 0.5.0   |               | x64       | arm64/x64/arm | x64   |
| 0.5.0   |               | x64       | arm64/x64/arm | x64   |
| 0.4.0   |               | x64       | arm64/x64/arm | x64   |
| 0.3.0   |               | x64       | arm64/x64/arm | x64   |
| 0.3.0   |               | x64       | arm64/x64/arm | x64   |
| 0.3.0   |               | x64       | arm64/x64/arm | x64   |
| 0.3.0   |               | x64       | arm64/x64/arm | x64   |
| 0.3.0   |               | x64       | arm64/x64/arm | x64   |
| 0.3.0   |               | x64       | arm64/x64/arm | x64   |
| 0.3.0   |               | x64       | arm64/x64/arm | x64   |
| 0.3.0   |               | x64       | arm64/x64/arm | x64   |
| 0.3.0   |               | x64       | arm64/x64/arm | x64   |
| 0.3.0   |               | x64       | arm64/x64/arm | x64   |
| 0.3.0   |               | x64       | arm64/x64/arm | x64   |
| 0.3.0   |               | x64       | arm64/x64/arm | x64   |
| 0.3.0   |               | x64       | arm64/x64/arm | x64   |