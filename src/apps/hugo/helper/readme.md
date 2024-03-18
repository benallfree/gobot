![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.24/assets/gobot-banner-300x.png)

## `hugo` for npm

This package allows you to use [Hugo](https://gohugo.io/) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot hugo --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
gobot(`hugo`).run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-hugo
```

With `gobot-hugo` present, Gobot will default to the `hugo` version corresponding to the `gobot-hugo` version you installed. Now you can use `hugo` as a real dependency.

```js
import { gobot } from 'gobot'
gobot(`hugo`).run([`--version`])
```

**Locking to a specific version**

The `gobot-hugo` package version always mirrors the underlying `hugo` [version](#known-versions):

```bash
npm i gobot-hugo@0.124.0
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `hugo` even though `gobot-hugo` is installed.

```js
// Run a specific version (override)
gobot(`hugo`, { version: `0.124.0` }).run([`--version`])

// Or the latest version (override)
gobot(`hugo`, { version: `*` }).run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
gobot(`hugo`, {
  env: process.env, // This is not always necessary, but some apps do need it
}).run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-hugo` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-hugo
hugo --help

# Upgrade to  @latest or any version
npm i -g gobot-hugo@latest
```

For more information, see Gobot's [main docs](https://www.npmjs.com/package/gobot) and [API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.24/docs/readme.md).



## Sample project

View the [Hugo sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.24/src/apps/hugo/sample-project) on github.

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

If you have the flexibility or are starting an ew project, make sure your release names follows these rules:

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

`gobot-hugo` versions mirror `hugo` versions. Gobot knows about 213 releases of `hugo`:

| Version | freebsd            | darwin    | linux              | win32    |
| ------- | ------------------ | --------- | ------------------ | -------- |
| 0.124.0 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.123.8 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.123.7 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.123.6 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.123.5 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.123.4 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.123.3 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.123.2 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.123.1 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.123.0 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.122.0 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.121.2 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.121.1 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.121.0 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.120.4 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.120.3 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.120.2 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.120.1 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.120.0 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.119.0 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.118.2 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.118.1 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.118.0 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.117.0 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.116.1 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.116.0 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.115.4 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.115.3 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.115.2 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.115.1 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.115.0 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.114.1 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.114.0 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.113.0 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.112.7 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.112.6 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.112.5 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.112.4 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.112.3 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.112.2 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.112.1 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.112.0 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.111.3 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.111.2 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.111.1 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.111.0 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.110.0 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.109.0 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.108.0 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.107.0 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.106.0 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.105.0 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.104.3 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.104.2 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.104.1 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.104.0 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.103.1 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.103.0 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.102.3 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.102.2 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.102.1 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.102.0 | x64                | arm64/x64 | arm64/x64/arm      | x64      |
| 0.101.0 | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.100.2 | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.100.1 | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.100.0 | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.99.1  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.99.0  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.98.0  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.97.3  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.97.2  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.97.1  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.97.0  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.96.0  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.95.0  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.94.2  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.94.1  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.94.0  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.93.3  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.93.2  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.93.1  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.93.0  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.92.2  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.92.1  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.92.0  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.91.2  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.91.1  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.91.0  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.90.1  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.90.0  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.89.4  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.89.3  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.89.2  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.89.1  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.89.0  | x64                | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.88.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.88.0  | arm64/x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.87.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.86.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.86.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.85.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.84.4  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.84.3  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.84.2  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.84.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.84.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.83.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.83.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.82.1  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.82.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.81.0  | arm64/x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.80.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.79.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.79.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.78.2  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.78.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.78.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.77.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.76.5  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.76.4  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.76.3  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.76.2  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.76.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.76.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.75.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.75.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.74.3  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.74.2  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.74.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.74.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.73.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.72.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.71.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.71.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.70.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.69.2  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.69.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.69.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.68.3  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.68.2  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.68.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.68.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.67.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.67.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.66.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.65.3  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.65.2  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.65.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.65.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.64.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.64.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.63.2  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.63.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.63.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.62.2  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.62.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.62.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.61.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.60.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.60.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.59.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.59.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.58.3  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.58.2  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.58.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.58.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.57.2  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.57.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.57.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.56.3  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.56.2  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.56.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.56.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.55.6  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.55.5  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.55.4  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.55.3  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.55.2  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.55.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.55.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.54.0  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.49.2  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.49.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.47.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.45.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.42.2  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.42.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.40.3  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.40.2  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.40.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.38.2  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.38.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.37.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.36.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.32.4  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.32.3  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.32.2  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.32.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.31.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.30.2  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.30.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.27.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.25.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.24.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.22.1  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.20.7  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.20.6  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.20.5  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.20.4  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.20.3  | x64/ia32/arm       | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.20.2  | x64/ia32/arm       | x64       | x64/ia32/arm       | x64/ia32 |
| 0.20.1  | x64/ia32/arm       | x64       | x64/ia32/arm       | x64/ia32 |
| 0.18.1  | x64/ia32/arm       | x64       | x64/ia32/arm       | x64/ia32 |