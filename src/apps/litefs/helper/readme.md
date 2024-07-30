![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.41/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-litefs) ![](https://img.shields.io/npm/dt/gobot-litefs) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## litefs via npm

This package allows you to use [litefs](https://github.com/superfly/litefs) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot litefs --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`litefs`)
const exitCode = await bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-litefs
```

With `gobot-litefs` present, Gobot will default to the `litefs` version corresponding to the `gobot-litefs` version you installed. Now you can use `litefs` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`litefs`)
const exitCode = await bot.run([`--version`])
```

**Locking to a specific version**

The `gobot-litefs` package version always mirrors the underlying `litefs` [version](#all-known-releases):

```bash
npm i gobot-litefs@0.5.11
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `litefs` even though `gobot-litefs` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`litefs`, { version: `0.5.11` })
const exitCode = await bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`litefs`, { version: `*` })
const exitCode = await bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`litefs`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
const exitCode = await bot.run([`--version`])
```

**Access the child process**

```js
import { gobot } from 'gobot'
const bot = await gobot(`litefs`, {
  env: process.env,
})
const exitCode = await bot.run(
  [`--help`],
  { cwd: `./foo` }, // SpawnOptions
  (proc) => {
    // ChildProcess
    proc.stdout.on('exit', (code) => {
      console.log(`process has exited`)
    })
  },
)
```

**Install globally for CLI access**

Exactly one `gobot-litefs` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-litefs
litefs --help

# Upgrade to  @latest or any version
npm i -g gobot-litefs@latest
```

## CLI

`gobot-litefs` comes with a [bin](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#bin) shortcut for CLI usage.

### `litefs  [options]`

litefs (https://github.com/superfly/litefs) runner for Gobot (https://github.com/benallfree/gobot)

**Options**

| Name              | Default         | Discussion                                                                  |
| ----------------- | --------------- | --------------------------------------------------------------------------- |
| `--g-v`           | `true`          | Show informational output                                                   |
| `--g-vv`          | `false`         | Show even more output                                                       |
| `--g-vvv`         | `false`         | Show even more output                                                       |
| `--g-cache-path`  | `host specific` | The cache path to use                                                       |
| `--g-use-version` | `*`             | Run a specific binary version (format: x.y.z semver or x.y.\* semver range) |
| `--g-os`          | `host specific` | Specify OS/Platform                                                         |
| `--g-arch`        | `host specific` | Specify OS/Platform                                                         |

## API

[Full API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.41/docs/readme.md)

## Sample project

View the [litefs sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.41/src/apps/litefs/sample-project) on github.

## Try Gobot's other apps

Gobot has a growing list (currently 53) of [official apps](https://www.npmjs.com/package/gobot#official-gobot-apps). Have you tried them all?

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

`gobot-litefs` versions mirror `litefs` versions. Gobot knows about 29 releases of `litefs`:

| Version      | linux     |
| ------------ | --------- |
| 0.5.11       | arm64/x64 |
| 0.5.10       | arm64/x64 |
| 0.5.9        | arm64/x64 |
| 0.5.8        | arm64/x64 |
| 0.5.7        | arm64/x64 |
| 0.5.6        | arm64/x64 |
| 0.5.5        | arm64/x64 |
| 0.5.4        | arm64/x64 |
| 0.5.3        | arm64/x64 |
| 0.5.2        | arm64/x64 |
| 0.5.1        | arm64/x64 |
| 0.5.0        | arm64/x64 |
| 0.5.0-beta1  | arm64/x64 |
| 0.4.0        | arm64/x64 |
| 0.4.0-beta1  | arm64/x64 |
| 0.3.0        | arm64/x64 |
| 0.3.0-beta7  | arm64/x64 |
| 0.3.0-beta6  | arm64/x64 |
| 0.3.0-beta5  | arm64/x64 |
| 0.3.0-beta4  | arm64/x64 |
| 0.3.0-beta3  | arm64/x64 |
| 0.3.0-beta2  | arm64/x64 |
| 0.2.0        | arm64/x64 |
| 0.2.0-beta3  | arm64/x64 |
| 0.1.1        | arm64/x64 |
| 0.1.0        | arm64/x64 |
| 0.1.0-alpha3 | arm64/x64 |
| 0.1.0-alpha2 |           |
| 0.1.0-alpha1 |           |
