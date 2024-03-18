![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.26/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-pocketbase) ![](https://img.shields.io/npm/dt/gobot-pocketbase) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## `pocketbase` for npm

This package allows you to use [PocketBase](https://pocketbase.io) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot pocketbase --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
gobot(`pocketbase`).run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-pocketbase
```

With `gobot-pocketbase` present, Gobot will default to the `pocketbase` version corresponding to the `gobot-pocketbase` version you installed. Now you can use `pocketbase` as a real dependency.

```js
import { gobot } from 'gobot'
gobot(`pocketbase`).run([`--version`])
```

**Locking to a specific version**

The `gobot-pocketbase` package version always mirrors the underlying `pocketbase` [version](#known-versions):

```bash
npm i gobot-pocketbase@0.22.4
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `pocketbase` even though `gobot-pocketbase` is installed.

```js
// Run a specific version (override)
gobot(`pocketbase`, { version: `0.22.4` }).run([`--version`])

// Or the latest version (override)
gobot(`pocketbase`, { version: `*` }).run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
gobot(`pocketbase`, {
  env: process.env, // This is not always necessary, but some apps do need it
}).run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-pocketbase` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-pocketbase
pocketbase --help

# Upgrade to  @latest or any version
npm i -g gobot-pocketbase@latest
```

For more information, see Gobot's [main docs](https://www.npmjs.com/package/gobot) and [API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.26/docs/readme.md).

## Quirks

### Where is `data.db`?

By default, `pocketbase` places `data.db` where the executable resides. However, this is [inconsistent across platforms](https://github.com/pocketbase/pocketbase/issues/4361). `bash`/`zsh` will alias `pocketbase` so it appears that the executable launched from the current directory. Windows shell uses the physical path to the executable.

To create consistency, `pb_data/data.db` will be created in the current directory.

If you want to specify your own `data.db` location, use `--dir=path/to/pb_data` to ensure `data.db` is created where you desire.

```bash
gobot pocketbase --dir=/path/to/pb_data
```

### Upgrading PocketBase

The `--upgrade` switch is intentionally blocked because using it would overwrite Gobot's cached binary and create cache inconsistency.

Instead, specify the version you wish to use either via CLI or programmatically and Gobot will fetch it when necessary.


## Sample project

View the [PocketBase sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.26/src/apps/pocketbase/sample-project) on github.

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

`gobot-pocketbase` versions mirror `pocketbase` versions. Gobot knows about 127 releases of `pocketbase`:

| Version    | darwin    | linux         | win32 |
| ---------- | --------- | ------------- | ----- |
| 0.22.4     | arm64/x64 | arm64/x64/arm | x64   |
| 0.22.3     | arm64/x64 | arm64/x64/arm | x64   |
| 0.22.2     | arm64/x64 | arm64/x64/arm | x64   |
| 0.22.1     | arm64/x64 | arm64/x64/arm | x64   |
| 0.22.0     | arm64/x64 | arm64/x64/arm | x64   |
| 0.21.3     | arm64/x64 | arm64/x64/arm | x64   |
| 0.21.2     | arm64/x64 | arm64/x64/arm | x64   |
| 0.21.1     | arm64/x64 | arm64/x64/arm | x64   |
| 0.21.0     | arm64/x64 | arm64/x64/arm | x64   |
| 0.20.7     | arm64/x64 | arm64/x64/arm | x64   |
| 0.20.6     | arm64/x64 | arm64/x64/arm | x64   |
| 0.20.5     | arm64/x64 | arm64/x64/arm | x64   |
| 0.20.4     | arm64/x64 | arm64/x64/arm | x64   |
| 0.20.3     | arm64/x64 | arm64/x64/arm | x64   |
| 0.20.2     | arm64/x64 | arm64/x64/arm | x64   |
| 0.20.1     | arm64/x64 | arm64/x64/arm | x64   |
| 0.20.0     | arm64/x64 | arm64/x64/arm | x64   |
| 0.20.0-rc3 | arm64/x64 | arm64/x64/arm | x64   |
| 0.20.0-rc2 | arm64/x64 | arm64/x64/arm | x64   |
| 0.20.0-rc  | arm64/x64 | arm64/x64/arm | x64   |
| 0.19.4     | arm64/x64 | arm64/x64/arm | x64   |
| 0.19.3     | arm64/x64 | arm64/x64/arm | x64   |
| 0.19.2     | arm64/x64 | arm64/x64/arm | x64   |
| 0.19.1     | arm64/x64 | arm64/x64/arm | x64   |
| 0.19.0     | arm64/x64 | arm64/x64/arm | x64   |
| 0.18.10    | arm64/x64 | arm64/x64/arm | x64   |
| 0.18.9     | arm64/x64 | arm64/x64/arm | x64   |
| 0.18.8     | arm64/x64 | arm64/x64/arm | x64   |
| 0.18.7     | arm64/x64 | arm64/x64/arm | x64   |
| 0.18.6     | arm64/x64 | arm64/x64/arm | x64   |
| 0.18.5     | arm64/x64 | arm64/x64/arm | x64   |
| 0.18.4     | arm64/x64 | arm64/x64/arm | x64   |
| 0.18.3     | arm64/x64 | arm64/x64/arm | x64   |
| 0.18.2     | arm64/x64 | arm64/x64/arm | x64   |
| 0.18.1     | arm64/x64 | arm64/x64/arm | x64   |
| 0.18.0     | arm64/x64 | arm64/x64/arm | x64   |
| 0.17.7     | arm64/x64 | arm64/x64/arm | x64   |
| 0.17.6     | arm64/x64 | arm64/x64/arm | x64   |
| 0.17.5     | arm64/x64 | arm64/x64/arm | x64   |
| 0.17.4     | arm64/x64 | arm64/x64/arm | x64   |
| 0.17.3     | arm64/x64 | arm64/x64/arm | x64   |
| 0.17.2     | arm64/x64 | arm64/x64/arm | x64   |
| 0.17.1     | arm64/x64 | arm64/x64/arm | x64   |
| 0.17.0     | arm64/x64 | arm64/x64/arm | x64   |
| 0.16.10    | arm64/x64 | arm64/x64/arm | x64   |
| 0.16.9     | arm64/x64 | arm64/x64/arm | x64   |
| 0.16.8     | arm64/x64 | arm64/x64/arm | x64   |
| 0.16.7     | arm64/x64 | arm64/x64/arm | x64   |
| 0.16.6     | arm64/x64 | arm64/x64/arm | x64   |
| 0.16.5     | arm64/x64 | arm64/x64/arm | x64   |
| 0.16.4     | arm64/x64 | arm64/x64/arm | x64   |
| 0.16.3     | arm64/x64 | arm64/x64/arm | x64   |
| 0.16.2     | arm64/x64 | arm64/x64/arm | x64   |
| 0.16.1     | arm64/x64 | arm64/x64/arm | x64   |
| 0.16.0     | arm64/x64 | arm64/x64/arm | x64   |
| 0.15.3     | arm64/x64 | arm64/x64/arm | x64   |
| 0.15.2     | arm64/x64 | arm64/x64/arm | x64   |
| 0.15.1     | arm64/x64 | arm64/x64/arm | x64   |
| 0.15.0     | arm64/x64 | arm64/x64/arm | x64   |
| 0.14.5     | arm64/x64 | arm64/x64/arm | x64   |
| 0.14.4     | arm64/x64 | arm64/x64/arm | x64   |
| 0.14.3     | arm64/x64 | arm64/x64/arm | x64   |
| 0.14.2     | arm64/x64 | arm64/x64/arm | x64   |
| 0.14.1     | arm64/x64 | arm64/x64/arm | x64   |
| 0.14.0     | arm64/x64 | arm64/x64/arm | x64   |
| 0.13.4     | arm64/x64 | arm64/x64/arm | x64   |
| 0.13.3     | arm64/x64 | arm64/x64/arm | x64   |
| 0.13.2     | arm64/x64 | arm64/x64/arm | x64   |
| 0.13.1     | arm64/x64 | arm64/x64/arm | x64   |
| 0.13.0     | arm64/x64 | arm64/x64/arm | x64   |
| 0.12.3     | arm64/x64 | arm64/x64/arm | x64   |
| 0.12.2     | arm64/x64 | arm64/x64/arm | x64   |
| 0.12.1     | arm64/x64 | arm64/x64/arm | x64   |
| 0.12.0     | arm64/x64 | arm64/x64/arm | x64   |
| 0.11.4     | arm64/x64 | arm64/x64/arm | x64   |
| 0.11.3     | arm64/x64 | arm64/x64/arm | x64   |
| 0.11.2     | arm64/x64 | arm64/x64/arm | x64   |
| 0.11.1     | arm64/x64 | arm64/x64/arm | x64   |
| 0.11.0     | arm64/x64 | arm64/x64/arm | x64   |
| 0.10.4     | arm64/x64 | arm64/x64/arm | x64   |
| 0.10.3     | arm64/x64 | arm64/x64/arm | x64   |
| 0.10.2     | arm64/x64 | arm64/x64/arm | x64   |
| 0.10.1     | arm64/x64 | arm64/x64/arm | x64   |
| 0.10.0     | arm64/x64 | arm64/x64/arm | x64   |
| 0.9.2      | arm64/x64 | arm64/x64/arm | x64   |
| 0.9.1      | arm64/x64 | arm64/x64/arm | x64   |
| 0.9.0      | arm64/x64 | arm64/x64/arm | x64   |
| 0.8.0      | arm64/x64 | arm64/x64/arm | x64   |
| 0.8.0-rc4  | arm64/x64 | arm64/x64/arm | x64   |
| 0.8.0-rc3  | arm64/x64 | arm64/x64/arm | x64   |
| 0.8.0-rc2  | arm64/x64 | arm64/x64/arm | x64   |
| 0.8.0-rc1  | arm64/x64 | arm64/x64/arm | x64   |
| 0.7.10     | arm64/x64 | arm64/x64/arm | x64   |
| 0.7.9      | arm64/x64 | arm64/x64/arm | x64   |
| 0.7.8      | arm64/x64 | arm64/x64/arm | x64   |
| 0.7.7      | arm64/x64 | arm64/x64/arm | x64   |
| 0.7.6      | arm64/x64 | arm64/x64/arm | x64   |
| 0.7.5      | arm64/x64 | arm64/x64/arm | x64   |
| 0.7.4      | arm64/x64 | arm64/x64/arm | x64   |
| 0.7.3      | arm64/x64 | arm64/x64/arm | x64   |
| 0.7.2      | arm64/x64 | arm64/x64/arm | x64   |
| 0.7.1      | arm64/x64 | arm64/x64/arm | x64   |
| 0.7.0      | arm64/x64 | arm64/x64/arm | x64   |
| 0.6.0      | arm64/x64 | arm64/x64/arm | x64   |
| 0.5.2      | arm64/x64 | arm64/x64/arm | x64   |
| 0.5.1      | arm64/x64 | arm64/x64/arm | x64   |
| 0.5.0      | arm64/x64 | arm64/x64/arm | x64   |
| 0.4.2      | arm64/x64 | arm64/x64/arm | x64   |
| 0.4.1      | arm64/x64 | arm64/x64/arm | x64   |
| 0.4.0      | arm64/x64 | arm64/x64/arm | x64   |
| 0.3.4      | arm64/x64 | arm64/x64/arm | x64   |
| 0.3.3      | arm64/x64 | arm64/x64     | x64   |
| 0.3.2      | arm64/x64 | arm64/x64     | x64   |
| 0.3.1      | arm64/x64 | arm64/x64     | x64   |
| 0.3.0      | arm64/x64 | arm64/x64     | x64   |
| 0.2.8      | arm64/x64 | arm64/x64     | x64   |
| 0.2.7      | arm64/x64 | arm64/x64     | x64   |
| 0.2.6      | arm64/x64 | arm64/x64     | x64   |
| 0.2.5      | arm64/x64 | arm64/x64     | x64   |
| 0.2.4      | arm64/x64 | arm64/x64     | x64   |
| 0.2.3      | arm64/x64 | arm64/x64     | x64   |
| 0.2.2      | arm64/x64 | arm64/x64     | x64   |
| 0.2.1      | arm64/x64 | arm64/x64     | x64   |
| 0.2.0      | arm64/x64 | arm64/x64     | x64   |
| 0.1.2      | arm64/x64 | arm64/x64     | x64   |
| 0.1.1      | arm64/x64 | arm64/x64     | x64   |
| 0.1.0      | arm64/x64 | arm64/x64     | x64   |
