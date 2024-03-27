![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.34/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-mc) ![](https://img.shields.io/npm/dt/gobot-mc) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## Mc via npm

This package allows you to use [Mc](https://min.io) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot mc --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`mc`)
bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-mc
```

With `gobot-mc` present, Gobot will default to the `mc` version corresponding to the `gobot-mc` version you installed. Now you can use `mc` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`mc`)
bot..run([`--version`])
```

**Locking to a specific version**

The `gobot-mc` package version always mirrors the underlying `mc` [version](#all-known-releases):

```bash
npm i gobot-mc@2024.3.20210729
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `mc` even though `gobot-mc` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`mc`, { version: `2024.3.20210729` })
bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`mc`, { version: `*` })
bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`mc`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
bot.run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-mc` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-mc
mc --help

# Upgrade to  @latest or any version
npm i -g gobot-mc@latest
```

## CLI

`gobot-mc` comes with a [bin](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#bin) shortcut for CLI usage.

### `mc  [options]`

mc (https://min.io) runner for Gobot (https://github.com/benallfree/gobot)

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

[Full API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/docs/readme.md)

## Quirks

### Versioning

mc uses date-based version tags. npm requires semver, so Gobot converts them.

Format:

| major  | minor    | patch          |
| ------ | -------- | -------------- |
| `YYYY` | `M[M]`\* | `D[D]HHMMSS`\* |

\* Note: `M[M]` and `D[D]` are 1 digit for months 1-9 and 2 digits for moths 10-12 because semver doesn't support leading zeros.

Example:

| Original mc release tag        | Gobot version                           | Note |
| ------------------------------ | --------------------------------------- | ---- |
| `RELEASE.2024-03-11T11_34_09Z` | `2024.3.11113409`<br/>`_____^_______^^` | \*   |
| `RELEASE.2017-12-08T01-21-00Z` | `2017.12.8012100`<br/>`________^^^____` | \*\* |

> \* `M[M]` is `3` not `03` because it would create a leading `0` in the _minor_ semver part. However, the `SS` portion of the _patch_ part is still `09` because it's not a leading `0`.

> \*\* `D[D]` is `8` not `08` because it would create a leading `0` in the _patch_ semver part. However, the `HH` portion of the _patch_ part is still `01` because it's not a leading `0`.

## Sample project

View the [Mc sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.34/src/apps/mc/sample-project) on github.

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

`gobot-mc` versions mirror `mc` versions. Gobot knows about 264 releases of `mc`:

| Version          | win32 | darwin    | linux     |
| ---------------- | ----- | --------- | --------- |
| 2024.3.20210729  | x64   | arm64/x64 | arm64/x64 |
| 2024.3.13235157  | x64   | arm64/x64 | arm64/x64 |
| 2024.3.9064306   | x64   | arm64/x64 | arm64/x64 |
| 2024.3.7003149   | x64   | arm64/x64 | arm64/x64 |
| 2024.3.3001308   | x64   | arm64/x64 | arm64/x64 |
| 2024.2.24013320  | x64   | arm64/x64 | arm64/x64 |
| 2024.2.16110548  | x64   | arm64/x64 | arm64/x64 |
| 2024.2.14211952  | x64   | arm64/x64 | arm64/x64 |
| 2024.2.9221824   | x64   | arm64/x64 | arm64/x64 |
| 2024.1.31085940  | x64   | arm64/x64 | arm64/x64 |
| 2024.1.28162314  | x64   | arm64/x64 | arm64/x64 |
| 2024.1.18070339  | x64   | arm64/x64 | arm64/x64 |
| 2024.1.16160634  | x64   | arm64/x64 | arm64/x64 |
| 2024.1.13084448  | x64   | arm64/x64 | arm64/x64 |
| 2024.1.11054932  | x64   | arm64/x64 | arm64/x64 |
| 2024.1.5050432   | x64   | arm64/x64 | arm64/x64 |
| 2023.12.29201529 | x64   | arm64/x64 | arm64/x64 |
| 2023.12.23084721 | x64   | arm64/x64 | arm64/x64 |
| 2023.12.20071422 | x64   | arm64/x64 | arm64/x64 |
| 2023.12.14003741 | x64   | arm64/x64 | arm64/x64 |
| 2023.12.7221317  | x64   | arm64/x64 | arm64/x64 |
| 2023.12.2112410  | x64   | arm64/x64 | arm64/x64 |
| 2023.12.2020328  | x64   | arm64/x64 | arm64/x64 |
| 2023.11.20163059 | x64   | arm64/x64 | arm64/x64 |
| 2023.11.15224558 | x64   | arm64/x64 | arm64/x64 |
| 2023.11.10213717 | x64   | arm64/x64 | arm64/x64 |
| 2023.11.6041923  | x64   | arm64/x64 | arm64/x64 |
| 2023.10.30184332 | x64   | arm64/x64 | arm64/x64 |
| 2023.10.24214222 | x64   | arm64/x64 | arm64/x64 |
| 2023.10.24051828 | x64   | arm64/x64 | arm64/x64 |
| 2023.10.14015703 | x64   | arm64/x64 | arm64/x64 |
| 2023.10.4065256  | x64   | arm64/x64 | arm64/x64 |
| 2023.9.29164122  | x64   | arm64/x64 | arm64/x64 |
| 2023.9.28174830  | x64   | arm64/x64 | arm64/x64 |
| 2023.9.22050746  | x64   | arm64/x64 | arm64/x64 |
| 2023.9.20152231  | x64   | arm64/x64 | arm64/x64 |
| 2023.9.13230858  | x64   | arm64/x64 | arm64/x64 |
| 2023.9.7224855   | x64   | arm64/x64 | arm64/x64 |
| 2023.9.2212803   | x64   | arm64/x64 | arm64/x64 |
| 2023.8.30080226  | x64   | arm64/x64 | arm64/x64 |
| 2023.8.29225506  | x64   | arm64/x64 | arm64/x64 |
| 2023.8.18215755  | x64   | arm64/x64 | arm64/x64 |
| 2023.8.15230309  | x64   | arm64/x64 | arm64/x64 |
| 2023.8.8172359   | x64   | arm64/x64 | arm64/x64 |
| 2023.8.1233057   | x64   | arm64/x64 | arm64/x64 |
| 2023.7.21204427  | x64   | arm64/x64 | arm64/x64 |
| 2023.7.18210538  | x64   | arm64/x64 | arm64/x64 |
| 2023.7.11233044  | x64   | arm64/x64 | arm64/x64 |
| 2023.7.7052551   | x64   | arm64/x64 | arm64/x64 |
| 2023.6.28215417  | x64   | arm64/x64 | arm64/x64 |
| 2023.6.23181207  | x64   | arm64/x64 | arm64/x64 |
| 2023.6.19193119  | x64   | arm64/x64 | arm64/x64 |
| 2023.6.15150826  | x64   | arm64/x64 | arm64/x64 |
| 2023.6.6134856   | x64   | arm64/x64 | arm64/x64 |
| 2023.5.30224138  | x64   | arm64/x64 | arm64/x64 |
| 2023.5.26233154  | x64   | arm64/x64 | arm64/x64 |
| 2023.5.18165900  | x64   | arm64/x64 | arm64/x64 |
| 2023.5.4181016   | x64   | arm64/x64 | arm64/x64 |
| 2023.4.12022151  | x64   | arm64/x64 | arm64/x64 |
| 2023.4.6165110   | x64   | arm64/x64 | arm64/x64 |
| 2023.3.23200304  | x64   | arm64/x64 | arm64/x64 |
| 2023.3.20171753  | x64   | arm64/x64 | arm64/x64 |
| 2023.2.28001259  | x64   | arm64/x64 | arm64/x64 |
| 2023.2.16192011  | x64   | arm64/x64 | arm64/x64 |
| 2023.1.28202938  | x64   | arm64/x64 | arm64/x64 |
| 2023.1.11031416  | x64   | arm64/x64 | arm64/x64 |
| 2022.12.24152138 | x64   | arm64/x64 | arm64/x64 |
| 2022.12.13002328 | x64   | arm64/x64 | arm64/x64 |
| 2022.12.2234847  | x64   | arm64/x64 | arm64/x64 |
| 2022.11.17212039 | x64   | arm64/x64 | arm64/x64 |
| 2022.11.7234739  | x64   | arm64/x64 | arm64/x64 |
| 2022.10.29100923 | x64   | arm64/x64 | arm64/x64 |
| 2022.10.22033929 | x64   | arm64/x64 | arm64/x64 |
| 2022.10.20232633 | x64   | arm64/x64 | arm64/x64 |
| 2022.10.12181250 | x64   | arm64/x64 | arm64/x64 |
| 2022.10.9211059  | x64   | arm64/x64 | arm64/x64 |
| 2022.10.6012006  | x64   | arm64/x64 | arm64/x64 |
| 2022.10.1075614  | x64   | arm64/x64 | arm64/x64 |
| 2022.9.16091647  | x64   | arm64/x64 | arm64/x64 |
| 2022.8.28200811  | x64   | arm64/x64 | arm64/x64 |
| 2022.8.23054520  | x64   | arm64/x64 | arm64/x64 |
| 2022.8.11003048  | x64   | arm64/x64 | arm64/x64 |
| 2022.8.5080128   | x64   | arm64/x64 | arm64/x64 |
| 2022.7.29191716  | x64   | arm64/x64 | arm64/x64 |
| 2022.7.24022513  | x64   | arm64/x64 | arm64/x64 |
| 2022.7.15092055  | x64   | arm64/x64 | arm64/x64 |
| 2022.7.11161612  | x64   | arm64/x64 | arm64/x64 |
| 2022.7.6145436   | x64   | arm64/x64 | arm64/x64 |
| 2022.6.26185148  | x64   | arm64/x64 | arm64/x64 |
| 2022.6.17025250  | x64   | arm64/x64 | arm64/x64 |
| 2022.6.11211036  | x64   | arm64/x64 | arm64/x64 |
| 2022.6.10222912  | x64   | arm64/x64 | arm64/x64 |
| 2022.5.9040826   | x64   | arm64/x64 | arm64/x64 |
| 2022.5.4060755   | x64   | arm64/x64 | arm64/x64 |
| 2022.4.26180022  | x64   | arm64/x64 | arm64/x64 |
| 2022.4.16211121  | x64   | arm64/x64 | arm64/x64 |
| 2022.4.7214327   | x64   | arm64/x64 | arm64/x64 |
| 2022.4.1234448   | x64   | arm64/x64 | arm64/x64 |
| 2022.3.31045530  | x64   | arm64/x64 | arm64/x64 |
| 2022.3.17202506  | x64   | arm64/x64 | arm64/x64 |
| 2022.3.17072129  | x64   | arm64/x64 | arm64/x64 |
| 2022.3.13223400  | x64   | arm64/x64 | arm64/x64 |
| 2022.3.9020836   | x64   | arm64/x64 | arm64/x64 |
| 2022.3.3211224   | x64   | arm64/x64 | arm64/x64 |
| 2022.2.26035831  | x64   | arm64/x64 | arm64/x64 |
| 2022.2.23031559  | x64   | arm64/x64 | arm64/x64 |
| 2022.2.16055401  | x64   | arm64/x64 | arm64/x64 |
| 2022.2.13232613  | x64   | arm64/x64 | arm64/x64 |
| 2022.2.7092534   | x64   | arm64/x64 | arm64/x64 |
| 2022.2.2020324   | x64   | arm64/x64 | arm64/x64 |
| 2022.1.29010327  | x64   | arm64/x64 | arm64/x64 |
| 2022.1.25210201  | x64   | arm64/x64 | arm64/x64 |
| 2022.1.7060138   | x64   | arm64/x64 | arm64/x64 |
| 2022.1.5235251   | x64   | arm64/x64 | arm64/x64 |
| 2021.12.29065255 | x64   | arm64/x64 | arm64/x64 |
| 2021.12.20234334 | x64   | arm64/x64 | arm64/x64 |
| 2021.12.16233839 | x64   | arm64/x64 | arm64/x64 |
| 2021.12.10001428 | x64   | arm64/x64 | arm64/x64 |
| 2021.11.16203736 | x64   | arm64/x64 | arm64/x64 |
| 2021.11.5100506  | x64   | arm64/x64 | arm64/x64 |
| 2021.10.7041958  | x64   | arm64/x64 | arm64/x64 |
| 2021.9.23054403  | x64   | arm64/x64 | arm64/x64 |
| 2021.9.2092127   | x64   | arm64/x64 | arm64/x64 |
| 2021.7.27064619  | x64   | arm64/x64 | arm64/x64 |
| 2021.6.13174822  | x64   | arm64/x64 | arm64/x64 |
| 2021.6.8012937   | x64   | arm64/x64 | arm64/x64 |
| 2021.5.26191926  | x64   | arm64/x64 | arm64/x64 |
| 2021.5.18033944  | x64   | arm64/x64 | arm64/x64 |
| 2021.5.12031011  | x64   | arm64/x64 | arm64/x64 |
| 2021.5.12012906  | x64   | arm64/x64 | arm64/x64 |
| 2021.4.22174000  | x64   | arm64/x64 | arm64/x64 |
| 2021.3.23054611  | x64   | arm64/x64 | arm64/x64 |
| 2021.3.12033659  | x64   | arm64/x64 | arm64/x64 |
| 2021.3.10055920  | x64   | arm64/x64 | arm64/x64 |
| 2021.3.6221644   | x64   | arm64/x64 | arm64/x64 |
| 2021.2.19053440  | x64   | arm64/x64 | arm64/x64 |
| 2021.2.14042806  | x64   | arm64/x64 | arm64/x64 |
| 2021.2.10073257  | x64   | arm64/x64 | arm64/x64 |
| 2021.2.7020205   | x64   | arm64/x64 | arm64/x64 |
| 2021.1.30005042  | x64   | arm64/x64 | arm64/x64 |
| 2021.1.16024534  | x64   | arm64/x64 | arm64/x64 |
| 2021.1.5050358   | x64   | arm64/x64 | arm64/x64 |
| 2020.12.18105353 | x64   | arm64/x64 | arm64/x64 |
| 2020.12.18042311 | x64   | arm64/x64 | arm64/x64 |
| 2020.12.10012617 | x64   | arm64/x64 | arm64/x64 |
| 2020.11.25230407 | x64   | arm64/x64 | arm64/x64 |
| 2020.11.17003914 | x64   | arm64/x64 | arm64/x64 |
| 2020.10.3025456  | x64   | arm64/x64 | arm64/x64 |
| 2020.9.23200213  | x64   | arm64/x64 | arm64/x64 |
| 2020.9.18001321  | x64   | arm64/x64 | arm64/x64 |
| 2020.9.3000828   | x64   | arm64/x64 | arm64/x64 |
| 2020.8.20002301  | x64   | arm64/x64 | arm64/x64 |
| 2020.8.8023358   | x64   | arm64/x64 | arm64/x64 |
| 2020.7.31233413  | x64   | arm64/x64 | arm64/x64 |
| 2020.7.17025220  | x64   | arm64/x64 | arm64/x64 |
| 2020.7.11051852  | x64   | arm64/x64 | arm64/x64 |
| 2020.7.11045320  | x64   | arm64/x64 | arm64/x64 |
| 2020.6.26195655  | x64   | arm64/x64 | arm64/x64 |
| 2020.6.20001843  | x64   | arm64/x64 | arm64/x64 |
| 2020.6.16192441  | x64   | arm64/x64 | arm64/x64 |
| 2020.5.28234336  | x64   | arm64/x64 | arm64/x64 |
| 2020.5.16014437  | x64   | arm64/x64 | arm64/x64 |
| 2020.5.6180007   | x64   | arm64/x64 | arm64/x64 |
| 2020.5.5060347   | x64   | arm64/x64 | arm64/x64 |
| 2020.4.25004323  | x64   | arm64/x64 | arm64/x64 |
| 2020.4.19191753  | x64   | arm64/x64 | arm64/x64 |
| 2020.4.17085548  | x64   | arm64/x64 | arm64/x64 |
| 2020.4.17025618  | x64   | arm64/x64 | arm64/x64 |
| 2020.4.15201800  | x64   | arm64/x64 | arm64/x64 |
| 2020.4.15023837  | x64   | arm64/x64 | arm64/x64 |
| 2020.4.4052855   | x64   | arm64/x64 | arm64/x64 |
| 2020.4.2215012   | x64   | arm64/x64 | arm64/x64 |
| 2020.3.14012337  | x64   | arm64/x64 | arm64/x64 |
| 2020.3.6232945   | x64   | arm64/x64 | arm64/x64 |
| 2020.2.25181003  | x64   | arm64/x64 | arm64/x64 |
| 2020.2.20234954  | x64   | arm64/x64 | arm64/x64 |
| 2020.2.14193550  | x64   | arm64/x64 | arm64/x64 |
| 2020.2.5200722   | x64   | arm64/x64 | arm64/x64 |
| 2020.1.25030219  | x64   | arm64/x64 | arm64/x64 |
| 2020.1.13224903  | x64   | arm64/x64 | arm64/x64 |
| 2020.1.3203314   | x64   | arm64/x64 | arm64/x64 |
| 2019.12.24234136 | x64   | arm64/x64 | arm64/x64 |
| 2019.12.17232628 | x64   | arm64/x64 | arm64/x64 |
| 2019.10.9225457  | x64   | arm64/x64 | arm64/x64 |
| 2019.10.2194102  | x64   | arm64/x64 | arm64/x64 |
| 2019.9.24013620  | x64   | arm64/x64 | arm64/x64 |
| 2019.9.20000955  | x64   | arm64/x64 | arm64/x64 |
| 2019.9.11201747  | x64   | arm64/x64 | arm64/x64 |
| 2019.9.5234350   | x64   | arm64/x64 | arm64/x64 |
| 2019.8.29004057  | x64   | arm64/x64 | arm64/x64 |
| 2019.8.21195910  | x64   | arm64/x64 | arm64/x64 |
| 2019.8.14204949  | x64   | arm64/x64 | arm64/x64 |
| 2019.8.7231443   | x64   | arm64/x64 | arm64/x64 |
| 2019.7.31191735  | x64   | arm64/x64 | arm64/x64 |
| 2019.7.24025556  | x64   | arm64/x64 | arm64/x64 |
| 2019.7.17221342  | x64   | arm64/x64 | arm64/x64 |
| 2019.7.11193128  | x64   | arm64/x64 | arm64/x64 |
| 2019.7.9235706   | x64   | arm64/x64 | arm64/x64 |
| 2019.7.3181453   | x64   | arm64/x64 | arm64/x64 |
| 2019.6.27213145  | x64   | arm64/x64 | arm64/x64 |
| 2019.6.19223953  | x64   | arm64/x64 | arm64/x64 |
| 2019.6.12203520  | x64   | arm64/x64 | arm64/x64 |
| 2019.6.7000132   | x64   | arm64/x64 | arm64/x64 |
| 2019.5.29212134  | x64   | arm64/x64 | arm64/x64 |
| 2019.5.23013327  | x64   | arm64/x64 | arm64/x64 |
| 2019.5.1232744   | x64   | arm64/x64 | arm64/x64 |
| 2019.4.24000941  | x64   | arm64/x64 | arm64/x64 |
| 2019.4.17174156  | x64   | arm64/x64 | arm64/x64 |
| 2019.4.10221128  | x64   | arm64/x64 | arm64/x64 |
| 2019.4.3175957   | x64   | arm64/x64 | arm64/x64 |
| 2019.3.28204356  | x64   | arm64/x64 | arm64/x64 |
| 2019.3.20212903  | x64   | arm64/x64 | arm64/x64 |
| 2019.3.13210506  | x64   | arm64/x64 | arm64/x64 |
| 2019.3.9003031   | x64   | arm64/x64 | arm64/x64 |
| 2019.3.6184135   | x64   | arm64/x64 | arm64/x64 |
| 2019.2.27184428  | x64   | arm64/x64 | arm64/x64 |
| 2019.2.20222150  | x64   | arm64/x64 | arm64/x64 |
| 2019.2.13194827  | x64   | arm64/x64 | arm64/x64 |
| 2019.2.6202656   | x64   | arm64/x64 | arm64/x64 |
| 2019.1.30195722  | x64   | arm64/x64 | arm64/x64 |
| 2019.1.25233819  | x64   | arm64/x64 | arm64/x64 |
| 2019.1.24014023  | x64   | arm64/x64 | arm64/x64 |
| 2019.1.10003822  | x64   | arm64/x64 | arm64/x64 |
| 2018.12.27003749 | x64   | arm64/x64 | arm64/x64 |
| 2018.12.19225803 | x64   | arm64/x64 | arm64/x64 |
| 2018.12.12190222 | x64   | arm64/x64 | arm64/x64 |
| 2018.12.5225907  | x64   | arm64/x64 | arm64/x64 |
| 2018.11.30015208 | x64   | arm64/x64 | arm64/x64 |
| 2018.11.6011220  | x64   | arm64/x64 | arm64/x64 |
| 2018.10.31221544 | x64   | arm64/x64 | arm64/x64 |
| 2018.10.18004005 | x64   | arm64/x64 | arm64/x64 |
| 2018.10.16232525 | x64   | arm64/x64 | arm64/x64 |
| 2018.9.26004243  | x64   | arm64/x64 | arm64/x64 |
| 2018.9.22004716  | x64   | arm64/x64 | arm64/x64 |
| 2018.9.10233912  | x64   | arm64/x64 | arm64/x64 |
| 2018.9.6232656   | x64   | arm64/x64 | arm64/x64 |
| 2018.8.18021304  | x64   | arm64/x64 | arm64/x64 |
| 2018.8.2173944   | x64   | arm64/x64 | arm64/x64 |
| 2018.7.31022853  | x64   | arm64/x64 | arm64/x64 |
| 2018.7.13005322  | x64   | arm64/x64 | arm64/x64 |
| 2018.6.30001331  | x64   | arm64/x64 | arm64/x64 |
| 2018.6.22233212  | x64   | arm64/x64 | arm64/x64 |
| 2018.6.9021809   | x64   | arm64/x64 | arm64/x64 |
| 2018.6.7192428   | x64   | arm64/x64 | arm64/x64 |
| 2018.5.25202015  | x64   | arm64/x64 | arm64/x64 |
| 2018.4.28000820  | x64   | arm64/x64 | arm64/x64 |
| 2018.3.25012222  | x64   | arm64/x64 | arm64/x64 |
| 2018.3.14231627  | x64   | arm64/x64 | arm64/x64 |
| 2018.2.9230736   | x64   | arm64/x64 | arm64/x64 |
| 2018.1.18211856  | x64   | arm64/x64 | arm64/x64 |
| 2017.12.12010802 | x64   | arm64/x64 | arm64/x64 |
| 2017.10.14005116 | x64   | arm64/x64 | arm64/x64 |
| 2017.6.15033843  | x64   | arm64/x64 | arm64/x64 |
| 2017.4.3183501   | x64   | arm64/x64 | arm64/x64 |
| 2017.2.6201619   | x64   | arm64/x64 | arm64/x64 |
| 2017.2.2223848   | x64   | arm64/x64 | arm64/x64 |
| 2016.12.9182319  | x64   | arm64/x64 | arm64/x64 |
| 2016.12.5225151  | x64   | arm64/x64 | arm64/x64 |
| 2016.10.7015622  | x64   | arm64/x64 | arm64/x64 |
| 2016.8.21030249  | x64   | arm64/x64 | arm64/x64 |
| 2016.8.18014103  | x64   | arm64/x64 | arm64/x64 |
| 2016.6.3184837   | x64   | arm64/x64 | arm64/x64 |
| 2016.4.1002211   | x64   | arm64/x64 | arm64/x64 |
| 2016.2.19041155  | x64   | arm64/x64 | arm64/x64 |
