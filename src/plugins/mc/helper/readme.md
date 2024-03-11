![Gobot](https://raw.githubusercontent.com/benallfree/gobot/main/assets/gobot-banner-300x.png)

# `gobot-mc`

**Mc for Gobot**

_Install, run, and manage `mc` as an npm package with CLI and API interfaces._

## Table of Contents

- [What is Mc?](#what-is-Mc)
- [What is Gobot?](#what-is-gobot)
- [Quickstart](#quickstart)
- [CLI](#cli)
  - [Options](#options)
  - [Examples](#examples)
- [API](#api)
- [Notes](#notes)
  - [OS X Users](#os-x-users)
  - [Known Versions](#known-versions)
- [Sample project](#sample-project)
- [Try Gobot's other apps](#try-gobots-other-apps)
- [Why?](#why)
- [Technical Notes](#technical-notes)
  - [Repository API Rate Limits](#repository-api-rate-limits)
    - [Github API](#github-api)
- [Adding your app to the Gobot registry](#adding-your-app-to-the-gobot-registry)
- [Contributing](#contributing)

## What is Mc?

![Mc](https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/mc/logo-50x.png)
[https://min.io](https://min.io)

The Object Store for AI Data Infrastructure (client)

## What is Gobot?

![Gobot](https://raw.githubusercontent.com/benallfree/gobot/main/assets/gobot-50x50.png)
[https://github.com/benallfree/gobot](https://github.com/benallfree/gobot)

Gobot downloads, installs, and runs statically-linked binaries while managing versions, OS's, and architectures. It has a CLI and a programmatic API.

With Gobot, external binaries become project dependencies just like other npm packages.

## Quickstart

This package provides [Mc](https://min.io) helpers to [Gobot](https://github.com/benallfree/gobot).

Install globally to run from the CLI:

```bash
npm i -g gobot-mc
mc --help
```

When installed as a dependency, you get a `mc()` helper that returns a Gobot instance pre-configured for `mc` using the version npm resolved and installed.

```bash
npm i gobot-mc@2024.3.9064306
```

```js
// index.mjs
import { mc } from 'gobot-mc'

const bot = mc()
bot.run([`--help`])
```

## CLI

> ### `mc [gobotOptions] [appOptions]`

### Options

All Gobot options begin with `--g-` so as not to conflict with app option switches. Every unrecognized option is passed through to the app binary.

| Option            | Default       | Discussion                                                                                                                                                   |
| ----------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--g-help`        | Show help     | Display help and options for Gobot                                                                                                                           |
| `--g-os`          | host OS       | `aix`, `darwin`, `freebsd`,`linux`, `openbsd`, `sunos`, and `win32`                                                                                          |
| `--g-arch`        | host arch     | `arm`, `arm64`, `ia32`, `loong64`, `mips`, `mipsel`, `ppc`, `ppc64`, `riscv64`, `s390`, `s390x`, and `x64`                                                   |
| `--g-v[vv]`       |               | Adjust output verbosity                                                                                                                                      |
| `--g-download`    | `false`       | Download all matching versions and exit                                                                                                                      |
| `--g-refresh`     | `false`       | Clear the gobot cache                                                                                                                                        |
| `--g-use-version` | latest        | Run a specific binary version, in [semver](https://semver.org/) format `x.y.z`. Also supports [semver ranges](https://www.npmjs.com/package/semver) `0.20.*` |
| `--g-cache-path`  | host specific | Use the specified directory for cache files.                                                                                                                 |

### Examples

```bash
# Show help for mc
mc --help

# Run in mc debugging mode
 --g-debug mc --help

# Run a specific version of mc
# Note: this technically works, even though this helper package
# defaults to a specific version.
mc --g-version="0.22.3" --help

# Force Gobot to dump cache and refresh tags and binaries
mc --g-refresh
```

## API

[Full API Docs](https://github.com/pockethost/gobot/blob/main/docs/readme.md)

The real power of Gobot is that your favorite external binaries can be treated as project dependencies with version locking.

Inside your project:

```bash
# Any of these will work
npm i gobot-mc
npm i gobot-mc@latest
npm i gobot-mc@2024.3.9064306
```

Now you have made `mc` a dependency of your package, and you've locked it at a specific version. When you run the app via the Gobot API, Gobot will use a version matching your criteria.

Gobot dynamically selects the correct build for the user's OS and architecture, in the version you specified, and stores it.

```js
// index.mjs
import { mc } from 'gobot-mc'

mc({ env: process.env }).run(['--help'])
```

Reminder: the `mc` executable alias can also be called from your npm scripts, and it will always use the version in the lockfile.



### OS X Users

If a Gobot app does not run it's likely you need to authorize it first. Go to `Security & Privacy` and scroll down to allow the exception.

### Known Versions

Gobot knows about 262 releases of `mc`:

2024.3.9064306, 2024.3.7003149, 2024.3.3001308, 2024.2.24013320, 2024.2.16110548, 2024.2.14211952, 2024.2.9221824, 2024.1.31085940, 2024.1.28162314, 2024.1.18070339, 2024.1.16160634, 2024.1.13084448, 2024.1.11054932, 2024.1.5050432, 2023.12.29201529, 2023.12.23084721, 2023.12.20071422, 2023.12.14003741, 2023.12.7221317, 2023.12.2112410, 2023.12.2020328, 2023.11.20163059, 2023.11.15224558, 2023.11.10213717, 2023.11.6041923, 2023.10.30184332, 2023.10.24214222, 2023.10.24051828, 2023.10.14015703, 2023.10.4065256, 2023.9.29164122, 2023.9.28174830, 2023.9.22050746, 2023.9.20152231, 2023.9.13230858, 2023.9.7224855, 2023.9.2212803, 2023.8.30080226, 2023.8.29225506, 2023.8.18215755, 2023.8.15230309, 2023.8.8172359, 2023.8.1233057, 2023.7.21204427, 2023.7.18210538, 2023.7.11233044, 2023.7.7052551, 2023.6.28215417, 2023.6.23181207, 2023.6.19193119, 2023.6.15150826, 2023.6.6134856, 2023.5.30224138, 2023.5.26233154, 2023.5.18165900, 2023.5.4181016, 2023.4.12022151, 2023.4.6165110, 2023.3.23200304, 2023.3.20171753, 2023.2.28001259, 2023.2.16192011, 2023.1.28202938, 2023.1.11031416, 2022.12.24152138, 2022.12.13002328, 2022.12.2234847, 2022.11.17212039, 2022.11.7234739, 2022.10.29100923, 2022.10.22033929, 2022.10.20232633, 2022.10.12181250, 2022.10.9211059, 2022.10.6012006, 2022.10.1075614, 2022.9.16091647, 2022.8.28200811, 2022.8.23054520, 2022.8.11003048, 2022.8.5080128, 2022.7.29191716, 2022.7.24022513, 2022.7.15092055, 2022.7.11161612, 2022.7.6145436, 2022.6.26185148, 2022.6.17025250, 2022.6.11211036, 2022.6.10222912, 2022.5.9040826, 2022.5.4060755, 2022.4.26180022, 2022.4.16211121, 2022.4.7214327, 2022.4.1234448, 2022.3.31045530, 2022.3.17202506, 2022.3.17072129, 2022.3.13223400, 2022.3.9020836, 2022.3.3211224, 2022.2.26035831, 2022.2.23031559, 2022.2.16055401, 2022.2.13232613, 2022.2.7092534, 2022.2.2020324, 2022.1.29010327, 2022.1.25210201, 2022.1.7060138, 2022.1.5235251, 2021.12.29065255, 2021.12.20234334, 2021.12.16233839, 2021.12.10001428, 2021.11.16203736, 2021.11.5100506, 2021.10.7041958, 2021.9.23054403, 2021.9.2092127, 2021.7.27064619, 2021.6.13174822, 2021.6.8012937, 2021.5.26191926, 2021.5.18033944, 2021.5.12031011, 2021.5.12012906, 2021.4.22174000, 2021.3.23054611, 2021.3.12033659, 2021.3.10055920, 2021.3.6221644, 2021.2.19053440, 2021.2.14042806, 2021.2.10073257, 2021.2.7020205, 2021.1.30005042, 2021.1.16024534, 2021.1.5050358, 2020.12.18105353, 2020.12.18042311, 2020.12.10012617, 2020.11.25230407, 2020.11.17003914, 2020.10.3025456, 2020.9.23200213, 2020.9.18001321, 2020.9.3000828, 2020.8.20002301, 2020.8.8023358, 2020.7.31233413, 2020.7.17025220, 2020.7.11051852, 2020.7.11045320, 2020.6.26195655, 2020.6.20001843, 2020.6.16192441, 2020.5.28234336, 2020.5.16014437, 2020.5.6180007, 2020.5.5060347, 2020.4.25004323, 2020.4.19191753, 2020.4.17085548, 2020.4.17025618, 2020.4.15201800, 2020.4.15023837, 2020.4.4052855, 2020.4.2215012, 2020.3.14012337, 2020.3.6232945, 2020.2.25181003, 2020.2.20234954, 2020.2.14193550, 2020.2.5200722, 2020.1.25030219, 2020.1.13224903, 2020.1.3203314, 2019.12.24234136, 2019.12.17232628, 2019.10.9225457, 2019.10.2194102, 2019.9.24013620, 2019.9.20000955, 2019.9.11201747, 2019.9.5234350, 2019.8.29004057, 2019.8.21195910, 2019.8.14204949, 2019.8.7231443, 2019.7.31191735, 2019.7.24025556, 2019.7.17221342, 2019.7.11193128, 2019.7.9235706, 2019.7.3181453, 2019.6.27213145, 2019.6.19223953, 2019.6.12203520, 2019.6.7000132, 2019.5.29212134, 2019.5.23013327, 2019.5.1232744, 2019.4.24000941, 2019.4.17174156, 2019.4.10221128, 2019.4.3175957, 2019.3.28204356, 2019.3.20212903, 2019.3.13210506, 2019.3.9003031, 2019.3.6184135, 2019.2.27184428, 2019.2.20222150, 2019.2.13194827, 2019.2.6202656, 2019.1.30195722, 2019.1.25233819, 2019.1.24014023, 2019.1.10003822, 2018.12.27003749, 2018.12.19225803, 2018.12.12190222, 2018.12.5225907, 2018.11.30015208, 2018.11.6011220, 2018.10.31221544, 2018.10.18004005, 2018.10.16232525, 2018.9.26004243, 2018.9.22004716, 2018.9.10233912, 2018.9.6232656, 2018.8.18021304, 2018.8.2173944, 2018.7.31022853, 2018.7.13005322, 2018.6.30001331, 2018.6.22233212, 2018.6.9021809, 2018.6.7192428, 2018.5.25202015, 2018.4.28000820, 2018.3.25012222, 2018.3.14231627, 2018.2.9230736, 2018.1.18211856, 2017.12.12010802, 2017.10.14005116, 2017.6.15033843, 2017.4.3183501, 2017.2.6201619, 2017.2.2223848, 2016.12.9182319, 2016.12.5225151, 2016.10.7015622, 2016.8.21030249, 2016.8.18014103, 2016.6.3184837, 2016.4.1002211, 2016.2.19041155

## Sample project

View the [Mc sample project](https://github.com/benallfree/gobot/tree/main/src/plugins/mc/sample-project) on github.

## Try Gobot's other apps

Gobot has a growing list of apps. Have you tried them all?

| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                                      | `<app>`       | What is it?                                                                                                                                                                                                                                                                              |                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/act/logo-50x.png">](https://github.com/nektos/act)                 | `act`         | Run your GitHub Actions locally 🚀                                                                                                                                                                                                                                                       | [readme](https://github.com/benallfree/gobot/blob/main/src/plugins/act/helper/readme.md)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/AdGuardHome/logo-50x.png">](https://adguard.com/adguard-home.html) | `AdGuardHome` | Network-wide ads & trackers blocking DNS server                                                                                                                                                                                                                                          | [readme](https://github.com/benallfree/gobot/blob/main/src/plugins/AdGuardHome/helper/readme.md) |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/caddy/logo-50x.png">](https://caddyserver.com/)                    | `caddy`       | Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS                                                                                                                                                                                                            | [readme](https://github.com/benallfree/gobot/blob/main/src/plugins/caddy/helper/readme.md)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/mc/logo-50x.png">](https://min.io)                                 | `mc`          | The Object Store for AI Data Infrastructure (client)                                                                                                                                                                                                                                     | [readme](https://github.com/benallfree/gobot/blob/main/src/plugins/mc/helper/readme.md)          |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/minio/logo-50x.png">](https://min.io)                              | `minio`       | The Object Store for AI Data Infrastructure (server)                                                                                                                                                                                                                                     | [readme](https://github.com/benallfree/gobot/blob/main/src/plugins/minio/helper/readme.md)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/pocketbase/logo-50x.png">](https://pocketbase.io)                  | `pocketbase`  | Open Source realtime backend in 1 file                                                                                                                                                                                                                                                   | [readme](https://github.com/benallfree/gobot/blob/main/src/plugins/pocketbase/helper/readme.md)  |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/pulumi/logo-50x.png">](https://www.pulumi.com)                     | `pulumi`      | Pulumi - Infrastructure as Code in any programming language. Build infrastructure intuitively on any cloud using familiar languages 🚀                                                                                                                                                   | [readme](https://github.com/benallfree/gobot/blob/main/src/plugins/pulumi/helper/readme.md)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/rclone/logo-50x.png">](https://rclone.org/)                        | `rclone`      | rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Yandex Files                                                                                                                                                  | [readme](https://github.com/benallfree/gobot/blob/main/src/plugins/rclone/helper/readme.md)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/main/src/plugins/weaviate/logo-50x.png">](https://weaviate.io)                      | `weaviate`    | Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering with the fault-tolerance and scalability of a cloud-native database, all accessible through GraphQL, REST, and various language clients. | [readme](https://github.com/benallfree/gobot/blob/main/src/plugins/weaviate/helper/readme.md)    |

## Why?

If you are writing a nodejs application that depends upon binaries being present (like [PocketHost](https://github.com/pockethost/pockethost) does), you can add this package as a dependency and execute the binary via CLI or programmatically. This package will make sure your desired external binaries are always available.

If you just want to grab a binary quickly for your own use, `npx gobot@latest <app>` is quite a bit easier than manually downloading zips and installing binaries in shell paths. Gobot handles it all for you effortlessly.

## Technical Notes

### Repository API Rate Limits

When you run an app, Gobot may periodically hits repository REST APIs to query for new releases. This may, at times, lead to hitting API rate limits.

#### Github API

If you are hitting Github API rate limits, you may supply a `GITHUB_TOKEN` environment variable. More information in the [manual](https://cli.github.com/manual/gh_help_environment)

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

