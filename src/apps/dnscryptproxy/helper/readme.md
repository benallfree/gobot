![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-dnscryptproxy) ![](https://img.shields.io/npm/dt/gobot-dnscryptproxy) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## dnscrypt-proxy via npm

This package allows you to use [dnscrypt-proxy](https://dnscrypt.info) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot dnscryptproxy --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`dnscryptproxy`)
const exitCode = await bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-dnscryptproxy
```

With `gobot-dnscryptproxy` present, Gobot will default to the `dnscryptproxy` version corresponding to the `gobot-dnscryptproxy` version you installed. Now you can use `dnscryptproxy` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`dnscryptproxy`)
const exitCode = await bot.run([`--version`])
```

**Locking to a specific version**

The `gobot-dnscryptproxy` package version always mirrors the underlying `dnscryptproxy` [version](#all-known-releases):

```bash
npm i gobot-dnscryptproxy@2.1.5
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `dnscryptproxy` even though `gobot-dnscryptproxy` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`dnscryptproxy`, { version: `2.1.5` })
const exitCode = await bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`dnscryptproxy`, { version: `*` })
const exitCode = await bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`dnscryptproxy`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
const exitCode = await bot.run([`--version`])
```

**Access the child process**

```js
import { gobot } from 'gobot'
const bot = await gobot(`dnscryptproxy`, {
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

Exactly one `gobot-dnscryptproxy` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-dnscryptproxy
dnscryptproxy --help

# Upgrade to  @latest or any version
npm i -g gobot-dnscryptproxy@latest
```

## CLI

`gobot-dnscryptproxy` comes with a [bin](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#bin) shortcut for CLI usage.

### `dnscryptproxy  [options]`

dnscrypt-proxy (https://dnscrypt.info) runner for Gobot (https://github.com/benallfree/gobot)

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

[Full API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.37/docs/readme.md)

## Sample project

View the [dnscrypt-proxy sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.37/src/apps/dnscryptproxy/sample-project) on github.

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

`gobot-dnscryptproxy` versions mirror `dnscryptproxy` versions. Gobot knows about 84 releases of `dnscryptproxy`:

| Version       | freebsd      | darwin    | linux              |
| ------------- | ------------ | --------- | ------------------ |
| 2.1.5         | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm |
| 2.1.4         | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm |
| 2.1.3         | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm |
| 2.1.2         | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm |
| 2.1.1         | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm |
| 2.1.0         | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm |
| 2.0.46-beta3  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm |
| 2.0.46-beta2  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm |
| 2.0.46-beta1  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm |
| 2.0.45        | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm |
| 2.0.44        | x64/ia32/arm | arm64     | arm64/x64/ia32/arm |
| 2.0.43        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.42        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.41        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.40        |              |           |                    |
| 2.0.39        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.38        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.36        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.36-beta.1 | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.35        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.34        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.34-beta.1 | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.33        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.32        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.31        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.30        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.29        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.29-beta.3 | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.29-beta.2 | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.29-beta.1 | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.28        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.27        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.26        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.25        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.24        |              |           |                    |
| 2.0.23        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.22        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.21        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.20        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.19        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.18        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.17        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.16        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.15        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.14        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.13        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.12        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.11        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.10        | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.9         | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.9         | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.9         | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.8         | x64/ia32/arm |           | arm64/x64/ia32/arm |
| 2.0.7         | x64/ia32     |           | arm64/x64/ia32/arm |
| 2.0.6         | x64/ia32     |           | arm64/x64/ia32/arm |
| 2.0.5         | x64/ia32     |           | arm64/x64/ia32/arm |
| 2.0.4         | x64/ia32     |           | arm64/x64/ia32/arm |
| 2.0.3         | x64/ia32     |           | arm64/x64/ia32/arm |
| 2.0.2         | x64/ia32     |           | arm64/x64/ia32/arm |
| 2.0.1         | x64/ia32     |           | arm64/x64/ia32/arm |
| 2.0.0         | x64/ia32     |           | arm64/x64/ia32/arm |
| 2.0.0         | x64/ia32     |           | arm64/x64/ia32/arm |
| 2.0.0         | x64/ia32     |           | arm64/x64/ia32/arm |
| 2.0.0         | x64/ia32     |           | arm64/x64/ia32/arm |
| 2.0.0         | x64/ia32     |           | arm64/x64/ia32/arm |
| 2.0.0         | x64/ia32     |           | arm64/x64/ia32/arm |
| 2.0.0         | x64/ia32     |           | arm64/x64/ia32/arm |
| 2.0.0         | x64/ia32     |           | arm64/x64/ia32/arm |
| 2.0.0         | x64/ia32     |           | arm64/x64/ia32/arm |
| 2.0.0         | x64/ia32     |           | arm64/x64/ia32/arm |
| 2.0.0         | x64/ia32     |           | arm64/x64/ia32/arm |
| 2.0.0         | x64/ia32     |           | arm64/x64/ia32/arm |
| 2.0.0         | x64/ia32     |           | arm64/x64/ia32/arm |
| 2.0.0         | x64/ia32     |           | arm64/x64/ia32/arm |
| 2.0.0         | x64/ia32     |           | arm64/x64/ia32/arm |
| 2.0.0         | x64/ia32     |           | arm64/x64/ia32/arm |
| 2.0.0         | x64/ia32     |           | x64/ia32/arm       |
| 2.0.0         | x64/ia32     |           | x64/ia32/arm       |
| 2.0.0         | x64/ia32     |           | arm64/x64/ia32/arm |
| 2.0.0         | x64/ia32     |           | x64/ia32/arm       |
| 2.0.0         | x64/ia32     |           | x64/ia32/arm       |
| 2.0.0         | x64/ia32     |           | x64/ia32/arm       |
| 2.0.0         | x64/ia32     |           | x64/ia32/arm       |
| 2.0.0         | x64/ia32     |           | x64/ia32/arm       |
