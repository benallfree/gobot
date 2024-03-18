![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.23/assets/gobot-banner-300x.png)

## `backrest` for npm

This package allows you to use [Backrest](https://github.com/garethgeorge/backrest) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot backrest --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
gobot(`backrest`).run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-backrest
```

With `gobot-backrest` present, Gobot will default to the `backrest` version corresponding to the `gobot-backrest` version you installed. Now you can use `backrest` as a real dependency.

```js
import { gobot } from 'gobot'
gobot(`backrest`).run([`--version`])
```

**Locking to a specific version**

The `gobot-backrest` package version always mirrors the underlying `backrest` [version](#known-versions):

```bash
npm i gobot-backrest@0.14.0
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `backrest` even though `gobot-backrest` is installed.

```js
// Run a specific version (override)
gobot(`backrest`, { version: `0.14.0` }).run([`--version`])

// Or the latest version (override)
gobot(`backrest`, { version: `*` }).run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
gobot(`backrest`, {
  env: process.env, // This is not always necessary, but some apps do need it
}).run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-backrest` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-backrest
backrest --help

# Upgrade to  @latest or any version
npm i -g gobot-backrest@latest
```

For more information, see [Gobot's full documentation](https://github.com/benallfree/gobot).



## Sample project

View the [Backrest sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.23/src/apps/backrest/sample-project) on github.

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

Test it out by running `npx gobot <user>/<repo> --help` (example: `gobot pocketbase/pocketbase --help` for the [https://github.com/pocketbase/pocketbase](https://github.com/pocketbase/pocketbase) project).

Make sure your release name follows these rules:

- Ends in `.zip`, `.tgz`, or `.tar.gz`
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

`gobot-backrest` versions mirror `backrest` versions. Gobot knows about 15 releases of `backrest`:

| Version    | darwin    | linux         | win32 |
| ---------- | --------- | ------------- | ----- |
| **0.14.0** | arm64/x64 | arm64/x64/arm | x64   |
| **0.13.0** | arm64/x64 | arm64/x64     | x64   |
| **0.12.2** | arm64/x64 | arm64/x64     | x64   |
| **0.12.0** | arm64/x64 | arm64/x64     |       |
| **0.11.1** | arm64/x64 | arm64/x64     | x64   |
| **0.11.0** | arm64/x64 | arm64/x64     | x64   |
| **0.10.1** | arm64/x64 | arm64/x64     | x64   |
| **0.10.0** | arm64/x64 | arm64/x64     | x64   |
| **0.9.3**  | arm64/x64 | arm64/x64     | x64   |
| **0.9.2**  | arm64/x64 | arm64/x64     | x64   |
| **0.9.1**  | arm64/x64 | arm64/x64     | x64   |
| **0.9.0**  | arm64/x64 | arm64/x64     | x64   |
| **0.8.2**  | arm64/x64 | arm64/x64     | x64   |
| **0.8.1**  | arm64/x64 | arm64/x64     | x64   |
| **0.7.0**  | arm64/x64 | arm64/x64     | x64   |
