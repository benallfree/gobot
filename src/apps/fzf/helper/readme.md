![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-fzf) ![](https://img.shields.io/npm/dt/gobot-fzf) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## fzf via npm

This package allows you to use [fzf](https://github.com/junegunn/fzf) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot fzf --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`fzf`)
const exitCode = await bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-fzf
```

With `gobot-fzf` present, Gobot will default to the `fzf` version corresponding to the `gobot-fzf` version you installed. Now you can use `fzf` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`fzf`)
const exitCode = await bot.run([`--version`])
```

**Locking to a specific version**

The `gobot-fzf` package version always mirrors the underlying `fzf` [version](#all-known-releases):

```bash
npm i gobot-fzf@0.49.0
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `fzf` even though `gobot-fzf` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`fzf`, { version: `0.49.0` })
const exitCode = await bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`fzf`, { version: `*` })
const exitCode = await bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`fzf`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
const exitCode = await bot.run([`--version`])
```

**Access the child process**

```js
import { gobot } from 'gobot'
const bot = await gobot(`fzf`, {
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

Exactly one `gobot-fzf` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-fzf
fzf --help

# Upgrade to  @latest or any version
npm i -g gobot-fzf@latest
```

## CLI

`gobot-fzf` comes with a [bin](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#bin) shortcut for CLI usage.

### `fzf  [options]`

fzf (https://github.com/junegunn/fzf) runner for Gobot (https://github.com/benallfree/gobot)

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

View the [fzf sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.37/src/apps/fzf/sample-project) on github.

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

`gobot-fzf` versions mirror `fzf` versions. Gobot knows about 40 releases of `fzf`:

| Version | freebsd | darwin    | linux         | win32     |
| ------- | ------- | --------- | ------------- | --------- |
| 0.49.0  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.48.1  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.48.0  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.47.0  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.46.1  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.46.0  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.45.0  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.44.1  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.44.0  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.43.0  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.42.0  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.41.1  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.41.0  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.40.0  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.39.0  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.38.0  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.37.0  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.36.0  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.35.1  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.35.0  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.34.0  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.33.0  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.32.1  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.32.0  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.31.0  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.30.0  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.29.0  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.28.0  | x64     | arm64/x64 | arm64/x64/arm | x64/arm64 |
| 0.27.3  | x64     | arm64/x64 | arm64/x64/arm | x64       |
| 0.27.2  | x64     | arm64/x64 | arm64/x64/arm | x64       |
| 0.27.1  | x64     | arm64/x64 | arm64/x64/arm | x64       |
| 0.27.0  | x64     | arm64/x64 | arm64/x64/arm | x64       |
| 0.26.0  | x64     | arm64/x64 | arm64/x64/arm | x64       |
| 0.25.1  | x64     | x64       | arm64/x64/arm | x64       |
| 0.25.0  | x64     | x64       | arm64/x64/arm | x64       |
| 0.24.4  | x64     | x64       | arm64/x64/arm | x64       |
| 0.24.3  | x64     | x64       | arm64/x64/arm | x64       |
| 0.24.2  | x64     | x64       | arm64/x64/arm | x64       |
| 0.24.1  | x64     | x64       | arm64/x64/arm | x64       |
| 0.24.0  | x64     | x64       | arm64/x64/arm | x64       |
