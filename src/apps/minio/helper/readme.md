![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.31/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-minio) ![](https://img.shields.io/npm/dt/gobot-minio) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## Minio via npm

This package allows you to use [Minio](https://min.io) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot minio --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`minio`)
bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-minio
```

With `gobot-minio` present, Gobot will default to the `minio` version corresponding to the `gobot-minio` version you installed. Now you can use `minio` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`minio`)
bot..run([`--version`])
```

**Locking to a specific version**

The `gobot-minio` package version always mirrors the underlying `minio` [version](#known-versions):

```bash
npm i gobot-minio@2024.3.15010719
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `minio` even though `gobot-minio` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`minio`, { version: `2024.3.15010719` })
bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`minio`, { version: `*` })
bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`minio`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
bot.run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-minio` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-minio
minio --help

# Upgrade to  @latest or any version
npm i -g gobot-minio@latest
```

For more information, see Gobot's [main docs](https://www.npmjs.com/package/gobot) and [API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/docs/readme.md).

## Quirks

### Versioning

minio uses date-based version tags. npm requires semver, so Gobot converts them.

Format:

| major  | minor    | patch          |
| ------ | -------- | -------------- |
| `YYYY` | `M[M]`\* | `D[D]HHMMSS`\* |

\* Note: `M[M]` and `D[D]` are 1 digit for months 1-9 and 2 digits for moths 10-12 because semver doesn't support leading zeros.

Example:

| Original minio release tag  | Gobot version                           | Note |
| ------------------------------ | --------------------------------------- | ---- |
| `RELEASE.2024-03-11T11_34_09Z` | `2024.3.11113409`<br/>`_____^_______^^` | \*   |
| `RELEASE.2017-12-08T01-21-00Z` | `2017.12.8012100`<br/>`________^^^____` | \*\* |

> \* `M[M]` is `3` not `03` because it would create a leading `0` in the _minor_ semver part. However, the `SS` portion of the _patch_ part is still `09` because it's not a leading `0`.

> \*\* `D[D]` is `8` not `08` because it would create a leading `0` in the _patch_ semver part. However, the `HH` portion of the _patch_ part is still `01` because it's not a leading `0`.


## Sample project

View the [Minio sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.31/src/apps/minio/sample-project) on github.

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

`gobot-minio` versions mirror `minio` versions. Gobot knows about 464 releases of `minio`:

| Version          | win32 | darwin    | linux     |
| ---------------- | ----- | --------- | --------- |
| 2024.3.15010719  | x64   | arm64/x64 | arm64/x64 |
| 2024.3.10025348  | x64   | arm64/x64 | arm64/x64 |
| 2024.3.7004348   | x64   | arm64/x64 | arm64/x64 |
| 2024.3.5044844   | x64   | arm64/x64 | arm64/x64 |
| 2024.3.3175039   | x64   | arm64/x64 | arm64/x64 |
| 2024.2.26093348  | x64   | arm64/x64 | arm64/x64 |
| 2024.2.24171114  | x64   | arm64/x64 | arm64/x64 |
| 2024.2.17011557  | x64   | arm64/x64 | arm64/x64 |
| 2024.2.14213602  | x64   | arm64/x64 | arm64/x64 |
| 2024.2.13153511  | x64   | arm64/x64 | arm64/x64 |
| 2024.2.12210227  | x64   | arm64/x64 | arm64/x64 |
| 2024.2.9212516   | x64   | arm64/x64 | arm64/x64 |
| 2024.2.6213622   | x64   | arm64/x64 | arm64/x64 |
| 2024.2.4223613   | x64   | arm64/x64 | arm64/x64 |
| 2024.1.31202033  | x64   | arm64/x64 | arm64/x64 |
| 2024.1.29035632  | x64   | arm64/x64 | arm64/x64 |
| 2024.1.28223553  | x64   | arm64/x64 | arm64/x64 |
| 2024.1.18225128  | x64   | arm64/x64 | arm64/x64 |
| 2024.1.16160738  | x64   | arm64/x64 | arm64/x64 |
| 2024.1.13075303  | x64   | arm64/x64 | arm64/x64 |
| 2024.1.11074616  | x64   | arm64/x64 | arm64/x64 |
| 2024.1.5221724   | x64   | arm64/x64 | arm64/x64 |
| 2024.1.1163633   | x64   | arm64/x64 | arm64/x64 |
| 2023.12.23071911 | x64   | arm64/x64 | arm64/x64 |
| 2023.12.20010002 | x64   | arm64/x64 | arm64/x64 |
| 2023.12.14185157 | x64   | arm64/x64 | arm64/x64 |
| 2023.12.13232855 | x64   | arm64/x64 | arm64/x64 |
| 2023.12.9181751  | x64   | arm64/x64 | arm64/x64 |
| 2023.12.7041600  | x64   | arm64/x64 | arm64/x64 |
| 2023.12.6090922  | x64   | arm64/x64 | arm64/x64 |
| 2023.12.2105133  | x64   | arm64/x64 | arm64/x64 |
| 2023.11.20224007 | x64   | arm64/x64 | arm64/x64 |
| 2023.11.15204325 | x64   | arm64/x64 | arm64/x64 |
| 2023.11.11081441 | x64   | arm64/x64 | arm64/x64 |
| 2023.11.6222608  | x64   | arm64/x64 | arm64/x64 |
| 2023.11.1183725  | x64   | arm64/x64 | arm64/x64 |
| 2023.11.1015710  | x64   | arm64/x64 | arm64/x64 |
| 2023.10.25063325 | x64   | arm64/x64 | arm64/x64 |
| 2023.10.24044236 | x64   | arm64/x64 | arm64/x64 |
| 2023.10.16041343 | x64   | arm64/x64 | arm64/x64 |
| 2023.10.14051722 | x64   | arm64/x64 | arm64/x64 |
| 2023.10.7150738  | x64   | arm64/x64 | arm64/x64 |
| 2023.9.30070229  | x64   | arm64/x64 | arm64/x64 |
| 2023.9.27152250  | x64   | arm64/x64 | arm64/x64 |
| 2023.9.23034750  | x64   | arm64/x64 | arm64/x64 |
| 2023.9.20224955  | x64   | arm64/x64 | arm64/x64 |
| 2023.9.16010147  | x64   | arm64/x64 | arm64/x64 |
| 2023.9.7020502   | x64   | arm64/x64 | arm64/x64 |
| 2023.9.4195737   | x64   | arm64/x64 | arm64/x64 |
| 2023.8.31153116  | x64   | arm64/x64 | arm64/x64 |
| 2023.8.29230735  | x64   | arm64/x64 | arm64/x64 |
| 2023.8.23100706  | x64   | arm64/x64 | arm64/x64 |
| 2023.8.16201730  | x64   | arm64/x64 | arm64/x64 |
| 2023.8.9233022   | x64   | arm64/x64 | arm64/x64 |
| 2023.8.4174021   | x64   | arm64/x64 | arm64/x64 |
| 2023.7.21211244  | x64   | arm64/x64 | arm64/x64 |
| 2023.7.18174940  | x64   | arm64/x64 | arm64/x64 |
| 2023.7.11212934  | x64   | arm64/x64 | arm64/x64 |
| 2023.7.7071357   | x64   | arm64/x64 | arm64/x64 |
| 2023.6.29051228  | x64   | arm64/x64 | arm64/x64 |
| 2023.6.23202600  | x64   | arm64/x64 | arm64/x64 |
| 2023.6.19195250  | x64   | arm64/x64 | arm64/x64 |
| 2023.6.16024106  | x64   | arm64/x64 | arm64/x64 |
| 2023.6.9073212   | x64   | arm64/x64 | arm64/x64 |
| 2023.6.2231726   | x64   | arm64/x64 | arm64/x64 |
| 2023.5.27055619  | x64   | arm64/x64 | arm64/x64 |
| 2023.5.18000536  | x64   | arm64/x64 | arm64/x64 |
| 2023.5.4214430   | x64   | arm64/x64 | arm64/x64 |
| 2023.4.28181117  | x64   | arm64/x64 | arm64/x64 |
| 2023.4.20175655  | x64   | arm64/x64 | arm64/x64 |
| 2023.4.13030807  | x64   | arm64/x64 | arm64/x64 |
| 2023.4.7052858   | x64   | arm64/x64 | arm64/x64 |
| 2023.3.24214123  | x64   | arm64/x64 | arm64/x64 |
| 2023.3.22063624  | x64   | arm64/x64 | arm64/x64 |
| 2023.3.20201618  | x64   | arm64/x64 | arm64/x64 |
| 2023.3.13194617  | x64   | arm64/x64 | arm64/x64 |
| 2023.3.9231613   | x64   | arm64/x64 | arm64/x64 |
| 2023.2.27181045  | x64   | arm64/x64 | arm64/x64 |
| 2023.2.22182345  | x64   | arm64/x64 | arm64/x64 |
| 2023.2.17175243  | x64   | arm64/x64 | arm64/x64 |
| 2023.2.10184839  | x64   | arm64/x64 | arm64/x64 |
| 2023.2.9051653   | x64   | arm64/x64 | arm64/x64 |
| 2023.1.31022419  | x64   | arm64/x64 | arm64/x64 |
| 2023.1.25001954  | x64   | arm64/x64 | arm64/x64 |
| 2023.1.20020544  | x64   | arm64/x64 | arm64/x64 |
| 2023.1.18043638  | x64   | arm64/x64 | arm64/x64 |
| 2023.1.12020616  | x64   | arm64/x64 | arm64/x64 |
| 2023.1.6181118   | x64   | arm64/x64 | arm64/x64 |
| 2023.1.2094009   | x64   | arm64/x64 | arm64/x64 |
| 2022.12.12192727 | x64   | arm64/x64 | arm64/x64 |
| 2022.12.7005637  | x64   | arm64/x64 | arm64/x64 |
| 2022.12.2191922  | x64   | arm64/x64 | arm64/x64 |
| 2022.11.29234049 | x64   | arm64/x64 | arm64/x64 |
| 2022.11.26224332 | x64   | arm64/x64 | arm64/x64 |
| 2022.11.17232009 | x64   | arm64/x64 | arm64/x64 |
| 2022.11.11034420 | x64   | arm64/x64 | arm64/x64 |
| 2022.11.10182021 | x64   | arm64/x64 | arm64/x64 |
| 2022.11.8052707  | x64   | arm64/x64 | arm64/x64 |
| 2022.10.29062133 | x64   | arm64/x64 | arm64/x64 |
| 2022.10.24183507 | x64   | arm64/x64 | arm64/x64 |
| 2022.10.21223748 | x64   | arm64/x64 | arm64/x64 |
| 2022.10.20005509 | x64   | arm64/x64 | arm64/x64 |
| 2022.10.15195703 | x64   | arm64/x64 | arm64/x64 |
| 2022.10.8201100  | x64   | arm64/x64 | arm64/x64 |
| 2022.10.5145827  | x64   | arm64/x64 | arm64/x64 |
| 2022.10.2192929  | x64   | arm64/x64 | arm64/x64 |
| 2022.9.25154453  | x64   | arm64/x64 | arm64/x64 |
| 2022.9.22185727  | x64   | arm64/x64 | arm64/x64 |
| 2022.9.17000945  | x64   | arm64/x64 | arm64/x64 |
| 2022.9.7222502   | x64   | arm64/x64 | arm64/x64 |
| 2022.9.1235336   | x64   | arm64/x64 | arm64/x64 |
| 2022.8.26195315  | x64   | arm64/x64 | arm64/x64 |
| 2022.8.25071705  | x64   | arm64/x64 | arm64/x64 |
| 2022.8.22235306  | x64   | arm64/x64 | arm64/x64 |
| 2022.8.13215444  | x64   | arm64/x64 | arm64/x64 |
| 2022.8.11043728  | x64   | arm64/x64 | arm64/x64 |
| 2022.8.8183409   | x64   | arm64/x64 | arm64/x64 |
| 2022.8.5232709   | x64   | arm64/x64 | arm64/x64 |
| 2022.8.2235916   | x64   | arm64/x64 | arm64/x64 |
| 2022.7.30052140  | x64   | arm64/x64 | arm64/x64 |
| 2022.7.29194048  | x64   | arm64/x64 | arm64/x64 |
| 2022.7.26005303  | x64   | arm64/x64 | arm64/x64 |
| 2022.7.24170931  | x64   | arm64/x64 | arm64/x64 |
| 2022.7.24015452  | x64   | arm64/x64 | arm64/x64 |
| 2022.7.17154314  | x64   | arm64/x64 | arm64/x64 |
| 2022.7.15034422  | x64   | arm64/x64 | arm64/x64 |
| 2022.7.13232944  | x64   | arm64/x64 | arm64/x64 |
| 2022.7.8000523   | x64   | arm64/x64 | arm64/x64 |
| 2022.7.6202949   | x64   | arm64/x64 | arm64/x64 |
| 2022.7.4210254   | x64   | arm64/x64 | arm64/x64 |
| 2022.6.30205809  | x64   | arm64/x64 | arm64/x64 |
| 2022.6.25155016  | x64   | arm64/x64 | arm64/x64 |
| 2022.6.20231345  | x64   | arm64/x64 | arm64/x64 |
| 2022.6.17020035  | x64   | arm64/x64 | arm64/x64 |
| 2022.6.11195532  | x64   | arm64/x64 | arm64/x64 |
| 2022.6.10165915  | x64   | arm64/x64 | arm64/x64 |
| 2022.6.7003341   | x64   | arm64/x64 | arm64/x64 |
| 2022.6.6231452   | x64   | arm64/x64 | arm64/x64 |
| 2022.6.3014053   | x64   | arm64/x64 | arm64/x64 |
| 2022.6.2161626   | x64   | arm64/x64 | arm64/x64 |
| 2022.6.2021104   | x64   | arm64/x64 | arm64/x64 |
| 2022.5.26054841  | x64   | arm64/x64 | arm64/x64 |
| 2022.5.23184511  | x64   | arm64/x64 | arm64/x64 |
| 2022.5.19182059  | x64   | arm64/x64 | arm64/x64 |
| 2022.5.8235031   | x64   | arm64/x64 | arm64/x64 |
| 2022.5.4074527   | x64   | arm64/x64 | arm64/x64 |
| 2022.5.3203608   | x64   | arm64/x64 | arm64/x64 |
| 2022.4.30222353  | x64   | arm64/x64 | arm64/x64 |
| 2022.4.29012709  | x64   | arm64/x64 | arm64/x64 |
| 2022.4.26012024  | x64   | arm64/x64 | arm64/x64 |
| 2022.4.16042602  | x64   | arm64/x64 | arm64/x64 |
| 2022.4.12065535  | x64   | arm64/x64 | arm64/x64 |
| 2022.4.9150952   | x64   | arm64/x64 | arm64/x64 |
| 2022.4.8194435   | x64   | arm64/x64 | arm64/x64 |
| 2022.4.1034139   | x64   | arm64/x64 | arm64/x64 |
| 2022.3.26064928  | x64   | arm64/x64 | arm64/x64 |
| 2022.3.24004344  | x64   | arm64/x64 | arm64/x64 |
| 2022.3.22020510  | x64   | arm64/x64 | arm64/x64 |
| 2022.3.17063449  | x64   | arm64/x64 | arm64/x64 |
| 2022.3.17025736  | x64   | arm64/x64 | arm64/x64 |
| 2022.3.14182524  | x64   | arm64/x64 | arm64/x64 |
| 2022.3.11235745  | x64   | arm64/x64 | arm64/x64 |
| 2022.3.11110823  | x64   | arm64/x64 | arm64/x64 |
| 2022.3.8222851   | x64   | arm64/x64 | arm64/x64 |
| 2022.3.5063239   | x64   | arm64/x64 | arm64/x64 |
| 2022.3.3212116   | x64   | arm64/x64 | arm64/x64 |
| 2022.2.26025446  | x64   | arm64/x64 | arm64/x64 |
| 2022.2.24221201  | x64   | arm64/x64 | arm64/x64 |
| 2022.2.18015010  | x64   | arm64/x64 | arm64/x64 |
| 2022.2.17232226  | x64   | arm64/x64 | arm64/x64 |
| 2022.2.16003527  | x64   | arm64/x64 | arm64/x64 |
| 2022.2.12005125  | x64   | arm64/x64 | arm64/x64 |
| 2022.2.7081733   | x64   | arm64/x64 | arm64/x64 |
| 2022.2.5044059   | x64   | arm64/x64 | arm64/x64 |
| 2022.2.1180014   | x64   | arm64/x64 | arm64/x64 |
| 2022.1.28022816  | x64   | arm64/x64 | arm64/x64 |
| 2022.1.27035302  | x64   | arm64/x64 | arm64/x64 |
| 2022.1.25195604  | x64   | arm64/x64 | arm64/x64 |
| 2022.1.8031154   | x64   | arm64/x64 | arm64/x64 |
| 2022.1.7015323   | x64   | arm64/x64 | arm64/x64 |
| 2022.1.4074107   | x64   | arm64/x64 | arm64/x64 |
| 2022.1.3182258   | x64   | arm64/x64 | arm64/x64 |
| 2021.12.29064906 | x64   | arm64/x64 | arm64/x64 |
| 2021.12.27072318 | x64   | arm64/x64 | arm64/x64 |
| 2021.12.20220716 | x64   | arm64/x64 | arm64/x64 |
| 2021.12.18044233 | x64   | arm64/x64 | arm64/x64 |
| 2021.12.10230339 | x64   | arm64/x64 | arm64/x64 |
| 2021.12.9061941  | x64   | arm64/x64 | arm64/x64 |
| 2021.11.24231933 | x64   | arm64/x64 | arm64/x64 |
| 2021.11.9032145  | x64   | arm64/x64 | arm64/x64 |
| 2021.11.5091626  | x64   | arm64/x64 | arm64/x64 |
| 2021.11.3033636  | x64   | arm64/x64 | arm64/x64 |
| 2021.10.27162942 | x64   | arm64/x64 | arm64/x64 |
| 2021.10.23032824 | x64   | arm64/x64 | arm64/x64 |
| 2021.10.13002317 | x64   | arm64/x64 | arm64/x64 |
| 2021.10.10165330 | x64   | arm64/x64 | arm64/x64 |
| 2021.10.8235824  | x64   | arm64/x64 | arm64/x64 |
| 2021.10.6233631  | x64   | arm64/x64 | arm64/x64 |
| 2021.10.2163105  | x64   | arm64/x64 | arm64/x64 |
| 2021.9.24002424  | x64   | arm64/x64 | arm64/x64 |
| 2021.9.23044624  | x64   | arm64/x64 | arm64/x64 |
| 2021.9.18180959  | x64   | arm64/x64 | arm64/x64 |
| 2021.9.15045425  | x64   | arm64/x64 | arm64/x64 |
| 2021.9.9213707   | x64   | arm64/x64 | arm64/x64 |
| 2021.9.3035613   | x64   | arm64/x64 | arm64/x64 |
| 2021.8.31054654  | x64   | arm64/x64 | arm64/x64 |
| 2021.8.25004118  | x64   | arm64/x64 | arm64/x64 |
| 2021.8.20183201  | x64   | arm64/x64 | arm64/x64 |
| 2021.8.17205308  | x64   | arm64/x64 | arm64/x64 |
| 2021.8.5220119   | x64   | arm64/x64 | arm64/x64 |
| 2021.7.30000200  | x64   | arm64/x64 | arm64/x64 |
| 2021.7.27024015  | x64   | arm64/x64 | arm64/x64 |
| 2021.7.22052332  | x64   | arm64/x64 | arm64/x64 |
| 2021.7.21221523  | x64   | arm64/x64 | arm64/x64 |
| 2021.7.15222734  | x64   | arm64/x64 | arm64/x64 |
| 2021.7.12024453  | x64   | arm64/x64 | arm64/x64 |
| 2021.7.8194325   | x64   | arm64/x64 | arm64/x64 |
| 2021.7.8011501   | x64   | arm64/x64 | arm64/x64 |
| 2021.6.17001046  | x64   | arm64/x64 | arm64/x64 |
| 2021.6.14012923  | x64   | arm64/x64 | arm64/x64 |
| 2021.6.9185139   | x64   | arm64/x64 | arm64/x64 |
| 2021.6.7214051   | x64   | arm64/x64 | arm64/x64 |
| 2021.5.27220631  | x64   | arm64/x64 | arm64/x64 |
| 2021.5.26002246  | x64   | arm64/x64 | arm64/x64 |
| 2021.5.22023439  | x64   | arm64/x64 | arm64/x64 |
| 2021.5.20223144  | x64   | arm64/x64 | arm64/x64 |
| 2021.5.18005328  | x64   | arm64/x64 | arm64/x64 |
| 2021.5.16053234  | x64   | arm64/x64 | arm64/x64 |
| 2021.5.11232741  | x64   | arm64/x64 | arm64/x64 |
| 2021.4.22154428  | x64   | arm64/x64 | arm64/x64 |
| 2021.4.18192629  | x64   | arm64/x64 | arm64/x64 |
| 2021.4.6231100   | x64   | arm64/x64 | arm64/x64 |
| 2021.3.26000041  | x64   | arm64/x64 | arm64/x64 |
| 2021.3.17023302  | x64   | arm64/x64 | arm64/x64 |
| 2021.3.12000047  | x64   | arm64/x64 | arm64/x64 |
| 2021.3.10051133  | x64   | arm64/x64 | arm64/x64 |
| 2021.3.4005313   | x64   | arm64/x64 | arm64/x64 |
| 2021.3.1042055   | x64   | arm64/x64 | arm64/x64 |
| 2021.2.24184445  | x64   | arm64/x64 | arm64/x64 |
| 2021.2.23200501  | x64   | arm64/x64 | arm64/x64 |
| 2021.2.19043802  | x64   | arm64/x64 | arm64/x64 |
| 2021.2.14040133  | x64   | arm64/x64 | arm64/x64 |
| 2021.2.11082343  | x64   | arm64/x64 | arm64/x64 |
| 2021.2.7013102   | x64   | arm64/x64 | arm64/x64 |
| 2021.2.1225652   | x64   | arm64/x64 | arm64/x64 |
| 2021.1.30002058  | x64   | arm64/x64 | arm64/x64 |
| 2021.1.16021944  | x64   | arm64/x64 | arm64/x64 |
| 2021.1.8211821   | x64   | arm64/x64 | arm64/x64 |
| 2021.1.5052238   | x64   | arm64/x64 | arm64/x64 |
| 2020.12.29232929 | x64   | arm64/x64 | arm64/x64 |
| 2020.12.26013554 | x64   | arm64/x64 | arm64/x64 |
| 2020.12.23022412 | x64   | arm64/x64 | arm64/x64 |
| 2020.12.18032742 | x64   | arm64/x64 | arm64/x64 |
| 2020.12.16050517 | x64   | arm64/x64 | arm64/x64 |
| 2020.12.12083907 | x64   | arm64/x64 | arm64/x64 |
| 2020.12.10015429 | x64   | arm64/x64 | arm64/x64 |
| 2020.12.3054924  | x64   | arm64/x64 | arm64/x64 |
| 2020.12.3000310  | x64   | arm64/x64 | arm64/x64 |
| 2020.11.25223625 | x64   | arm64/x64 | arm64/x64 |
| 2020.11.19234816 | x64   | arm64/x64 | arm64/x64 |
| 2020.11.13201018 | x64   | arm64/x64 | arm64/x64 |
| 2020.11.12223334 | x64   | arm64/x64 | arm64/x64 |
| 2020.11.10210224 | x64   | arm64/x64 | arm64/x64 |
| 2020.11.6231707  | x64   | arm64/x64 | arm64/x64 |
| 2020.10.28081650 | x64   | arm64/x64 | arm64/x64 |
| 2020.10.27040355 | x64   | arm64/x64 | arm64/x64 |
| 2020.10.18215412 | x64   | arm64/x64 | arm64/x64 |
| 2020.10.12215321 | x64   | arm64/x64 | arm64/x64 |
| 2020.10.9225505  | x64   | arm64/x64 | arm64/x64 |
| 2020.10.3021942  | x64   | arm64/x64 | arm64/x64 |
| 2020.9.26034456  | x64   | arm64/x64 | arm64/x64 |
| 2020.9.23191830  | x64   | arm64/x64 | arm64/x64 |
| 2020.9.21223159  | x64   | arm64/x64 | arm64/x64 |
| 2020.9.17044920  | x64   | arm64/x64 | arm64/x64 |
| 2020.9.16042235  | x64   | arm64/x64 | arm64/x64 |
| 2020.9.10220245  | x64   | arm64/x64 | arm64/x64 |
| 2020.9.8230518   | x64   | arm64/x64 | arm64/x64 |
| 2020.9.5071449   | x64   | arm64/x64 | arm64/x64 |
| 2020.9.2181950   | x64   | arm64/x64 | arm64/x64 |
| 2020.8.27051620  | x64   | arm64/x64 | arm64/x64 |
| 2020.8.26000049  | x64   | arm64/x64 | arm64/x64 |
| 2020.8.25002120  | x64   | arm64/x64 | arm64/x64 |
| 2020.8.18194100  | x64   | arm64/x64 | arm64/x64 |
| 2020.8.16183938  | x64   | arm64/x64 | arm64/x64 |
| 2020.8.13023950  | x64   | arm64/x64 | arm64/x64 |
| 2020.8.8045006   | x64   | arm64/x64 | arm64/x64 |
| 2020.8.7012307   | x64   | arm64/x64 | arm64/x64 |
| 2020.8.5213413   | x64   | arm64/x64 | arm64/x64 |
| 2020.8.4231051   | x64   | arm64/x64 | arm64/x64 |
| 2020.7.31033905  | x64   | arm64/x64 | arm64/x64 |
| 2020.7.27183702  | x64   | arm64/x64 | arm64/x64 |
| 2020.7.24224305  | x64   | arm64/x64 | arm64/x64 |
| 2020.7.22002633  | x64   | arm64/x64 | arm64/x64 |
| 2020.7.20022516  | x64   | arm64/x64 | arm64/x64 |
| 2020.7.18184816  | x64   | arm64/x64 | arm64/x64 |
| 2020.7.14191430  | x64   | arm64/x64 | arm64/x64 |
| 2020.7.13180956  | x64   | arm64/x64 | arm64/x64 |
| 2020.7.12191417  | x64   | arm64/x64 | arm64/x64 |
| 2020.7.11211423  | x64   | arm64/x64 | arm64/x64 |
| 2020.7.11060716  | x64   | arm64/x64 | arm64/x64 |
| 2020.7.2001509   | x64   | arm64/x64 | arm64/x64 |
| 2020.6.22031250  | x64   | arm64/x64 | arm64/x64 |
| 2020.6.18022335  | x64   | arm64/x64 | arm64/x64 |
| 2020.6.14183217  | x64   | arm64/x64 | arm64/x64 |
| 2020.6.12000619  | x64   | arm64/x64 | arm64/x64 |
| 2020.6.3221349   | x64   | arm64/x64 | arm64/x64 |
| 2020.6.1172803   | x64   | arm64/x64 | arm64/x64 |
| 2020.5.29140849  | x64   | arm64/x64 | arm64/x64 |
| 2020.5.28232921  | x64   | arm64/x64 | arm64/x64 |
| 2020.5.16013321  | x64   | arm64/x64 | arm64/x64 |
| 2020.5.8024049   | x64   | arm64/x64 | arm64/x64 |
| 2020.5.6232325   | x64   | arm64/x64 | arm64/x64 |
| 2020.5.1221914   | x64   | arm64/x64 | arm64/x64 |
| 2020.4.28235656  | x64   | arm64/x64 | arm64/x64 |
| 2020.4.23005849  | x64   | arm64/x64 | arm64/x64 |
| 2020.4.22001112  | x64   | arm64/x64 | arm64/x64 |
| 2020.4.15194218  | x64   | arm64/x64 | arm64/x64 |
| 2020.4.15003901  | x64   | arm64/x64 | arm64/x64 |
| 2020.4.10033442  | x64   | arm64/x64 | arm64/x64 |
| 2020.4.4053931   | x64   | arm64/x64 | arm64/x64 |
| 2020.4.2213449   | x64   | arm64/x64 | arm64/x64 |
| 2020.3.25070304  | x64   | arm64/x64 | arm64/x64 |
| 2020.3.19214900  | x64   | arm64/x64 | arm64/x64 |
| 2020.3.14022158  | x64   | arm64/x64 | arm64/x64 |
| 2020.3.9182653   | x64   | arm64/x64 | arm64/x64 |
| 2020.3.6222356   | x64   | arm64/x64 | arm64/x64 |
| 2020.3.5010419   | x64   | arm64/x64 | arm64/x64 |
| 2020.2.27002305  | x64   | arm64/x64 | arm64/x64 |
| 2020.2.20225123  | x64   | arm64/x64 | arm64/x64 |
| 2020.2.7232816   | x64   | arm64/x64 | arm64/x64 |
| 2020.2.7045650   | x64   | arm64/x64 | arm64/x64 |
| 2020.1.25025051  | x64   | arm64/x64 | arm64/x64 |
| 2020.1.16224029  | x64   | arm64/x64 | arm64/x64 |
| 2020.1.16030544  | x64   | arm64/x64 | arm64/x64 |
| 2020.1.3191221   | x64   | arm64/x64 | arm64/x64 |
| 2019.12.30054539 | x64   | arm64/x64 | arm64/x64 |
| 2019.12.24230445 | x64   | arm64/x64 | arm64/x64 |
| 2019.12.19225226 | x64   | arm64/x64 | arm64/x64 |
| 2019.12.17231633 | x64   | arm64/x64 | arm64/x64 |
| 2019.10.12013957 | x64   | arm64/x64 | arm64/x64 |
| 2019.10.11003809 | x64   | arm64/x64 | arm64/x64 |
| 2019.10.2211938  | x64   | arm64/x64 | arm64/x64 |
| 2019.9.26194235  | x64   | arm64/x64 | arm64/x64 |
| 2019.9.25182551  | x64   | arm64/x64 | arm64/x64 |
| 2019.9.18215505  | x64   | arm64/x64 | arm64/x64 |
| 2019.9.11195316  | x64   | arm64/x64 | arm64/x64 |
| 2019.9.5232438   | x64   | arm64/x64 | arm64/x64 |
| 2019.8.29002501  | x64   | arm64/x64 | arm64/x64 |
| 2019.8.21194007  | x64   | arm64/x64 | arm64/x64 |
| 2019.8.14203741  | x64   | arm64/x64 | arm64/x64 |
| 2019.8.7015921   | x64   | arm64/x64 | arm64/x64 |
| 2019.8.1221854   | x64   | arm64/x64 | arm64/x64 |
| 2019.7.31185756  | x64   | arm64/x64 | arm64/x64 |
| 2019.7.24020223  | x64   | arm64/x64 | arm64/x64 |
| 2019.7.17225412  | x64   | arm64/x64 | arm64/x64 |
| 2019.7.10003456  | x64   | arm64/x64 | arm64/x64 |
| 2019.7.5212021   | x64   | arm64/x64 | arm64/x64 |
| 2019.6.27211350  | x64   | arm64/x64 | arm64/x64 |
| 2019.6.19182442  | x64   | arm64/x64 | arm64/x64 |
| 2019.6.15230718  | x64   | arm64/x64 | arm64/x64 |
| 2019.6.13014113  | x64   | arm64/x64 | arm64/x64 |
| 2019.6.11004433  | x64   | arm64/x64 | arm64/x64 |
| 2019.6.4011558   | x64   | arm64/x64 | arm64/x64 |
| 2019.6.1034614   | x64   | arm64/x64 | arm64/x64 |
| 2019.5.23002934  | x64   | arm64/x64 | arm64/x64 |
| 2019.5.14235745  | x64   | arm64/x64 | arm64/x64 |
| 2019.5.2190709   | x64   | arm64/x64 | arm64/x64 |
| 2019.4.23235036  | x64   | arm64/x64 | arm64/x64 |
| 2019.4.18214459  | x64   | arm64/x64 | arm64/x64 |
| 2019.4.18011557  | x64   | arm64/x64 | arm64/x64 |
| 2019.4.9012230   | x64   | arm64/x64 | arm64/x64 |
| 2019.4.4183146   | x64   | arm64/x64 | arm64/x64 |
| 2019.3.27223521  | x64   | arm64/x64 | arm64/x64 |
| 2019.3.20223847  | x64   | arm64/x64 | arm64/x64 |
| 2019.3.13215947  | x64   | arm64/x64 | arm64/x64 |
| 2019.3.6224710   | x64   | arm64/x64 | arm64/x64 |
| 2019.2.26195146  | x64   | arm64/x64 | arm64/x64 |
| 2019.2.20224429  | x64   | arm64/x64 | arm64/x64 |
| 2019.2.14002145  | x64   | arm64/x64 | arm64/x64 |
| 2019.2.12215847  | x64   | arm64/x64 | arm64/x64 |
| 2019.2.6211636   | x64   | arm64/x64 | arm64/x64 |
| 2019.1.31003119  | x64   | arm64/x64 | arm64/x64 |
| 2019.1.23231858  | x64   | arm64/x64 | arm64/x64 |
| 2019.1.16214408  | x64   | arm64/x64 | arm64/x64 |
| 2019.1.10002120  | x64   | arm64/x64 | arm64/x64 |
| 2018.12.27183308 | x64   | arm64/x64 | arm64/x64 |
| 2018.12.19234624 | x64   | arm64/x64 | arm64/x64 |
| 2018.12.13020419 | x64   | arm64/x64 | arm64/x64 |
| 2018.12.6012743  | x64   | arm64/x64 | arm64/x64 |
| 2018.11.30035659 | x64   | arm64/x64 | arm64/x64 |
| 2018.11.22025156 | x64   | arm64/x64 | arm64/x64 |
| 2018.11.17012348 | x64   | arm64/x64 | arm64/x64 |
| 2018.11.15012607 | x64   | arm64/x64 | arm64/x64 |
| 2018.11.6010102  | x64   | arm64/x64 | arm64/x64 |
| 2018.10.25012703 | x64   | arm64/x64 | arm64/x64 |
| 2018.10.18002858 | x64   | arm64/x64 | arm64/x64 |
| 2018.10.6001516  | x64   | arm64/x64 | arm64/x64 |
| 2018.10.5010303  | x64   | arm64/x64 | arm64/x64 |
| 2018.9.25213443  | x64   | arm64/x64 | arm64/x64 |
| 2018.9.12184956  | x64   | arm64/x64 | arm64/x64 |
| 2018.9.11013921  | x64   | arm64/x64 | arm64/x64 |
| 2018.9.1003825   | x64   | arm64/x64 | arm64/x64 |
| 2018.8.25015638  | x64   | arm64/x64 | arm64/x64 |
| 2018.8.21003720  | x64   | arm64/x64 | arm64/x64 |
| 2018.8.18034957  | x64   | arm64/x64 | arm64/x64 |
| 2018.8.2231136   | x64   | arm64/x64 | arm64/x64 |
| 2018.7.31021147  | x64   | arm64/x64 | arm64/x64 |
| 2018.7.23183449  | x64   | arm64/x64 | arm64/x64 |
| 2018.7.13000907  | x64   | arm64/x64 | arm64/x64 |
| 2018.7.10014211  | x64   | arm64/x64 | arm64/x64 |
| 2018.6.29021129  | x64   | arm64/x64 | arm64/x64 |
| 2018.6.22234846  | x64   | arm64/x64 | arm64/x64 |
| 2018.6.9034335   | x64   | arm64/x64 | arm64/x64 |
| 2018.6.8034938   | x64   | arm64/x64 | arm64/x64 |
| 2018.6.7191007   | x64   | arm64/x64 | arm64/x64 |
| 2018.5.25194913  | x64   | arm64/x64 | arm64/x64 |
| 2018.5.16233533  | x64   | arm64/x64 | arm64/x64 |
| 2018.5.11002924  | x64   | arm64/x64 | arm64/x64 |
| 2018.5.10000042  | x64   | arm64/x64 | arm64/x64 |
| 2018.5.4231312   | x64   | arm64/x64 | arm64/x64 |
| 2018.4.27233352  | x64   | arm64/x64 | arm64/x64 |
| 2018.4.19225458  | x64   | arm64/x64 | arm64/x64 |
| 2018.4.12234109  | x64   | arm64/x64 | arm64/x64 |
| 2018.4.4052054   | x64   | arm64/x64 | arm64/x64 |
| 2018.3.30003844  | x64   | arm64/x64 | arm64/x64 |
| 2018.3.28234553  | x64   | arm64/x64 | arm64/x64 |
| 2018.3.19192206  | x64   | arm64/x64 | arm64/x64 |
| 2018.3.16225212  | x64   | arm64/x64 | arm64/x64 |
| 2018.3.12212528  | x64   | arm64/x64 | arm64/x64 |
| 2018.2.9224005   | x64   | arm64/x64 | arm64/x64 |
| 2018.1.18203321  | x64   | arm64/x64 | arm64/x64 |
| 2018.1.2230700   | x64   | arm64/x64 | arm64/x64 |
| 2017.12.28012100 | x64   | arm64/x64 | arm64/x64 |
| 2017.11.22195546 | x64   | arm64/x64 | arm64/x64 |
| 2017.10.27185902 | x64   | arm64/x64 | arm64/x64 |
| 2017.9.29191656  | x64   | arm64/x64 | arm64/x64 |
| 2017.8.5000053   | x64   | arm64/x64 | arm64/x64 |
| 2017.7.24182735  | x64   | arm64/x64 | arm64/x64 |
| 2017.6.13190101  | x64   | arm64/x64 | arm64/x64 |
| 2017.5.5011451   | x64   | arm64/x64 | arm64/x64 |
| 2017.4.29004027  | x64   | arm64/x64 | arm64/x64 |
| 2017.4.25012749  | x64   | arm64/x64 | arm64/x64 |
| 2017.3.16215032  | x64   | arm64/x64 | arm64/x64 |
| 2017.2.16014730  | x64   | arm64/x64 | arm64/x64 |
| 2017.2.15225524  | x64   | arm64/x64 | arm64/x64 |
| 2017.1.25031452  | x64   | arm64/x64 | arm64/x64 |
| 2016.12.13171942 | x64   | arm64/x64 | arm64/x64 |
| 2016.12.12234433 | x64   | arm64/x64 | arm64/x64 |
| 2016.12.12183543 | x64   | arm64/x64 | arm64/x64 |
| 2016.11.26022347 | x64   | arm64/x64 | arm64/x64 |
| 2016.11.24020908 | x64   | arm64/x64 | arm64/x64 |
| 2016.10.24212347 | x64   | arm64/x64 | arm64/x64 |
| 2016.10.22005041 | x64   | arm64/x64 | arm64/x64 |
| 2016.10.14040039 | x64   | arm64/x64 | arm64/x64 |
| 2016.10.7011639  | x64   | arm64/x64 | arm64/x64 |
| 2016.9.11174218  | x64   | arm64/x64 | arm64/x64 |
| 2016.8.21024447  | x64   | arm64/x64 | arm64/x64 |
| 2016.8.16231945  | x64   | arm64/x64 | arm64/x64 |
| 2016.7.13214605  | x64   | arm64/x64 | arm64/x64 |
| 2016.6.3193205   | x64   | arm64/x64 | arm64/x64 |
| 2016.4.17220924  | x64   | arm64/x64 | arm64/x64 |
| 2016.4.14183810  | x64   | arm64/x64 | arm64/x64 |
| 2016.3.21210851  | x64   | arm64/x64 | arm64/x64 |
| 2016.3.11034550  | x64   | arm64/x64 | arm64/x64 |
