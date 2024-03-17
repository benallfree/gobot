![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.23/assets/gobot-banner-300x.png)

## `gptscript` for npm

This package allows you to use [GPTScript](https://gptscript.ai/) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot gptscript --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
gobot(`gptscript`).run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-gptscript
```

With `gobot-gptscript` present, Gobot will default to the `gptscript` version corresponding to the `gobot-gptscript` version you installed. Now you can use `gptscript` as a real dependency.

```js
import { gobot } from 'gobot'
gobot(`gptscript`).run([`--version`])
```

**Locking to a specific version**

The `gobot-gptscript` package version always mirrors the underlying `gptscript` [version](#known-versions):

```bash
npm i gobot-gptscript@0.2.1
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `gptscript` even though `gobot-gptscript` is installed.

```js
// Run a specific version (override)
gobot(`gptscript`, { version: `0.19.4` }).run([`--version`])

// Or the latest version (override)
gobot(`gptscript`, { version: `*` }).run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
gobot(`gptscript`, {
  env: process.env, // This is not always necessary, but some apps do need it
}).run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-gptscript` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-gptscript
gptscript --help

# Upgrade to  @latest or any version
npm i -g gobot-gptscript@latest
```

For more information, see [Gobot's full documentation](https://github.com/benallfree/gobot).



## Sample project

View the [GPTScript sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.23/src/apps/gptscript/sample-project) on github.

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

`gobot-gptscript` versions mirror `gptscript` versions. Gobot knows about 16 releases of `gptscript`:

| Version       | darwin    | linux     | win32 |
| ------------- | --------- | --------- | ----- |
| **0.2.1**     | arm64/x64 | arm64/x64 | x64   |
| **0.2.0**     | arm64/x64 | arm64/x64 | x64   |
| **0.2.0-rc1** | arm64/x64 | arm64/x64 | x64   |
| **0.1.5**     | arm64/x64 | arm64/x64 | x64   |
| **0.1.4**     | arm64/x64 | arm64/x64 | x64   |
| **0.1.3**     | arm64/x64 | arm64/x64 | x64   |
| **0.1.3-rc4** | arm64/x64 | arm64/x64 | x64   |
| **0.1.3-rc3** | arm64/x64 | arm64/x64 | x64   |
| **0.1.3-rc2** | arm64/x64 | arm64/x64 | x64   |
| **0.1.3-rc1** | arm64/x64 | arm64/x64 | x64   |
| **0.1.2**     | arm64/x64 | arm64/x64 | x64   |
| **0.1.1**     | arm64/x64 | arm64/x64 | x64   |
| **0.1.0**     | arm64/x64 | arm64/x64 | x64   |
| **0.0.3**     | arm64/x64 | arm64/x64 | x64   |
| **0.0.2**     | arm64/x64 | arm64/x64 | x64   |
| **0.0.1**     | arm64/x64 | arm64/x64 | x64   |
