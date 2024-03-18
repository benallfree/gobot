![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.28/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-cue) ![](https://img.shields.io/npm/dt/gobot-cue) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## `cue` for npm

This package allows you to use [CUE](https://cuelang.org) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot cue --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
gobot(`cue`).run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-cue
```

With `gobot-cue` present, Gobot will default to the `cue` version corresponding to the `gobot-cue` version you installed. Now you can use `cue` as a real dependency.

```js
import { gobot } from 'gobot'
gobot(`cue`).run([`--version`])
```

**Locking to a specific version**

The `gobot-cue` package version always mirrors the underlying `cue` [version](#known-versions):

```bash
npm i gobot-cue@0.8.0
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `cue` even though `gobot-cue` is installed.

```js
// Run a specific version (override)
gobot(`cue`, { version: `0.8.0` }).run([`--version`])

// Or the latest version (override)
gobot(`cue`, { version: `*` }).run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
gobot(`cue`, {
  env: process.env, // This is not always necessary, but some apps do need it
}).run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-cue` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-cue
cue --help

# Upgrade to  @latest or any version
npm i -g gobot-cue@latest
```

For more information, see Gobot's [main docs](https://www.npmjs.com/package/gobot) and [API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.28/docs/readme.md).



## Sample project

View the [CUE sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.28/src/apps/cue/sample-project) on github.

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

`gobot-cue` versions mirror `cue` versions. Gobot knows about 39 releases of `cue`:

| Version | darwin    | linux     | win32 |
| ------- | --------- | --------- | ----- |
| 0.8.0   | arm64/x64 | arm64/x64 | x64   |
| 0.7.1   | arm64/x64 | arm64/x64 | x64   |
| 0.7.0   | arm64/x64 | arm64/x64 | x64   |
| 0.6.0   | arm64/x64 | arm64/x64 | x64   |
| 0.5.0   | arm64/x64 | arm64/x64 | x64   |
| 0.4.3   | arm64/x64 | arm64/x64 | x64   |
| 0.4.2   | arm64/x64 | arm64/x64 | x64   |
| 0.4.1   | arm64/x64 | arm64/x64 | x64   |
| 0.4.0   | x64       | arm64/x64 | x64   |
| 0.3.2   | x64       | arm64/x64 | x64   |
| 0.3.1   | x64       | arm64/x64 | x64   |
| 0.3.0   | x64       | arm64/x64 | x64   |
| 0.3.0   | x64       | arm64/x64 | x64   |
| 0.3.0   | x64       | arm64/x64 | x64   |
| 0.3.0   | x64       | arm64/x64 | x64   |
| 0.3.0   | x64       | arm64/x64 | x64   |
| 0.3.0   | x64       | arm64/x64 | x64   |
| 0.3.0   | x64       | arm64/x64 | x64   |
| 0.2.2   | x64       | arm64/x64 | x64   |
| 0.2.1   | x64       | arm64/x64 | x64   |
| 0.2.0   | x64       | arm64/x64 | x64   |
| 0.1.2   | x64       | arm64/x64 | x64   |
| 0.1.1   | x64       | arm64/x64 | x64   |
| 0.1.0   | x64       | arm64/x64 | x64   |
| 0.0.15  | x64       | arm64/x64 | x64   |
| 0.0.14  | x64       | arm64/x64 | x64   |
| 0.0.13  | x64       | arm64/x64 | x64   |
| 0.0.12  | x64       | arm64/x64 | x64   |
| 0.0.11  | x64       | arm64/x64 | x64   |
| 0.0.10  | x64       | arm64/x64 | x64   |
| 0.0.9   | x64       | arm64/x64 | x64   |
| 0.0.8   | x64       | arm64/x64 | x64   |
| 0.0.7   | x64       | arm64/x64 | x64   |
| 0.0.6   | x64       | arm64/x64 | x64   |
| 0.0.5   | x64       | arm64/x64 | x64   |
| 0.0.4   | x64       | arm64/x64 | x64   |
| 0.0.4   | x64       | arm64/x64 | x64   |
| 0.0.3   | x64       | arm64/x64 | x64   |
| 0.0.2   | x64       | arm64/x64 | x64   |