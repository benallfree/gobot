![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.27/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-reviewdog) ![](https://img.shields.io/npm/dt/gobot-reviewdog) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## `reviewdog` for npm

This package allows you to use [reviewdog](https://medium.com/@haya14busa/reviewdog-a-code-review-dog-who-keeps-your-codebase-healthy-d957c471938b#.8xctbaw5u) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot reviewdog --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
gobot(`reviewdog`).run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-reviewdog
```

With `gobot-reviewdog` present, Gobot will default to the `reviewdog` version corresponding to the `gobot-reviewdog` version you installed. Now you can use `reviewdog` as a real dependency.

```js
import { gobot } from 'gobot'
gobot(`reviewdog`).run([`--version`])
```

**Locking to a specific version**

The `gobot-reviewdog` package version always mirrors the underlying `reviewdog` [version](#known-versions):

```bash
npm i gobot-reviewdog@0.17.2
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `reviewdog` even though `gobot-reviewdog` is installed.

```js
// Run a specific version (override)
gobot(`reviewdog`, { version: `0.17.2` }).run([`--version`])

// Or the latest version (override)
gobot(`reviewdog`, { version: `*` }).run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
gobot(`reviewdog`, {
  env: process.env, // This is not always necessary, but some apps do need it
}).run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-reviewdog` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-reviewdog
reviewdog --help

# Upgrade to  @latest or any version
npm i -g gobot-reviewdog@latest
```

For more information, see Gobot's [main docs](https://www.npmjs.com/package/gobot) and [API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.27/docs/readme.md).



## Sample project

View the [reviewdog sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.27/src/apps/reviewdog/sample-project) on github.

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

`gobot-reviewdog` versions mirror `reviewdog` versions. Gobot knows about 33 releases of `reviewdog`:

| Version | darwin    | linux         | win32 |
| ------- | --------- | ------------- | ----- |
| 0.17.2  | arm64/x64 | arm64/x64/arm | x64   |
| 0.17.1  | arm64/x64 | arm64/x64/arm | x64   |
| 0.17.0  | arm64/x64 | arm64/x64/arm | x64   |
| 0.16.0  | arm64/x64 | arm64/x64/arm | x64   |
| 0.15.0  | arm64/x64 | arm64/x64/arm | x64   |
| 0.14.2  | arm64/x64 | arm64/x64/arm | x64   |
| 0.14.1  | arm64/x64 | arm64/x64/arm | x64   |
| 0.14.0  | arm64/x64 | arm64/x64/arm | x64   |
| 0.13.1  | arm64/x64 | arm64/x64/arm | x64   |
| 0.13.0  | arm64/x64 | arm64/x64/arm | x64   |
| 0.12.0  | arm64/x64 | arm64/x64/arm | x64   |
| 0.11.0  | x64       | arm64/x64/arm | x64   |
| 0.10.2  | x64       | arm64/x64/arm | x64   |
| 0.10.1  | x64       | arm64/x64/arm | x64   |
| 0.10.0  | x64       | arm64/x64/arm | x64   |
| 0.9.17  | x64       | arm64/x64/arm | x64   |
| 0.9.16  | x64       | arm64/x64/arm | x64   |
| 0.9.15  | x64       | x64           |       |
| 0.9.14  | x64       | x64           |       |
| 0.9.13  | x64       | x64           |       |
| 0.9.12  | x64       | x64           |       |
| 0.9.11  |           |               |       |
| 0.9.10  |           |               |       |
| 0.9.9   |           |               |       |
| 0.9.8   |           |               |       |
| 0.9.7   |           |               |       |
| 0.9.6   |           |               |       |
| 0.9.5   |           |               |       |
| 0.9.4   |           |               |       |
| 0.9.3   |           |               |       |
| 0.9.2   |           |               |       |
| 0.9.1   |           |               |       |
| 0.9.0   |           |               |       |
