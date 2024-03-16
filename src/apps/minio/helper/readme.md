![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.20/assets/gobot-banner-300x.png)

## `minio` for npm

This package allows you to use [Minio](https://min.io) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Basic version locking**

Install `gobot-minio`:

```bash
npm i gobot-minio
```

With `gobot-minio` present, Gobot will default to the `minio` version corresponding to the `gobot-minio` version you installed.

```js
import { gobot } from 'gobot'
gobot(`minio`).run([`--version`])
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
gobot(`minio`, { version: `0.19.4` }).run([`--version`])

// Or the latest version (override)
gobot(`minio`, { version: `*` }).run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
gobot(`minio`, {
  env: process.env, // This is not always necessary, but some apps do need it
}).run([`--version`])
```

**Install globally for CLI access**

Exactly one `gobot-minio` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-minio
minio --help

# Upgrade to  @latest or any version
npm i -g gobot-minio@latest
```

For more information, see [Gobot's full documentation](https://github.com/benallfree/gobot).

## Quirks

### Versioning

`minio` uses date-based version tags. Gobot converts these into semver format, so `2024-03-11T11_34_09_458Z` becomes `2024.03.11113409458`.


## Versions

`gobot-minio` versions mirror `minio` versions. Gobot knows about 464 releases of `minio`:

2024.3.15010719, 2024.3.10025348, 2024.3.7004348, 2024.3.5044844, 2024.3.3175039, 2024.2.26093348, 2024.2.24171114, 2024.2.17011557, 2024.2.14213602, 2024.2.13153511, 2024.2.12210227, 2024.2.9212516, 2024.2.6213622, 2024.2.4223613, 2024.1.31202033, 2024.1.29035632, 2024.1.28223553, 2024.1.18225128, 2024.1.16160738, 2024.1.13075303, 2024.1.11074616, 2024.1.5221724, 2024.1.1163633, 2023.12.23071911, 2023.12.20010002, 2023.12.14185157, 2023.12.13232855, 2023.12.9181751, 2023.12.7041600, 2023.12.6090922, 2023.12.2105133, 2023.11.20224007, 2023.11.15204325, 2023.11.11081441, 2023.11.6222608, 2023.11.1183725, 2023.11.1015710, 2023.10.25063325, 2023.10.24044236, 2023.10.16041343, 2023.10.14051722, 2023.10.7150738, 2023.9.30070229, 2023.9.27152250, 2023.9.23034750, 2023.9.20224955, 2023.9.16010147, 2023.9.7020502, 2023.9.4195737, 2023.8.31153116, 2023.8.29230735, 2023.8.23100706, 2023.8.16201730, 2023.8.9233022, 2023.8.4174021, 2023.7.21211244, 2023.7.18174940, 2023.7.11212934, 2023.7.7071357, 2023.6.29051228, 2023.6.23202600, 2023.6.19195250, 2023.6.16024106, 2023.6.9073212, 2023.6.2231726, 2023.5.27055619, 2023.5.18000536, 2023.5.4214430, 2023.4.28181117, 2023.4.20175655, 2023.4.13030807, 2023.4.7052858, 2023.3.24214123, 2023.3.22063624, 2023.3.20201618, 2023.3.13194617, 2023.3.9231613, 2023.2.27181045, 2023.2.22182345, 2023.2.17175243, 2023.2.10184839, 2023.2.9051653, 2023.1.31022419, 2023.1.25001954, 2023.1.20020544, 2023.1.18043638, 2023.1.12020616, 2023.1.6181118, 2023.1.2094009, 2022.12.12192727, 2022.12.7005637, 2022.12.2191922, 2022.11.29234049, 2022.11.26224332, 2022.11.17232009, 2022.11.11034420, 2022.11.10182021, 2022.11.8052707, 2022.10.29062133, 2022.10.24183507, 2022.10.21223748, 2022.10.20005509, 2022.10.15195703, 2022.10.8201100, 2022.10.5145827, 2022.10.2192929, 2022.9.25154453, 2022.9.22185727, 2022.9.17000945, 2022.9.7222502, 2022.9.1235336, 2022.8.26195315, 2022.8.25071705, 2022.8.22235306, 2022.8.13215444, 2022.8.11043728, 2022.8.8183409, 2022.8.5232709, 2022.8.2235916, 2022.7.30052140, 2022.7.29194048, 2022.7.26005303, 2022.7.24170931, 2022.7.24015452, 2022.7.17154314, 2022.7.15034422, 2022.7.13232944, 2022.7.8000523, 2022.7.6202949, 2022.7.4210254, 2022.6.30205809, 2022.6.25155016, 2022.6.20231345, 2022.6.17020035, 2022.6.11195532, 2022.6.10165915, 2022.6.7003341, 2022.6.6231452, 2022.6.3014053, 2022.6.2161626, 2022.6.2021104, 2022.5.26054841, 2022.5.23184511, 2022.5.19182059, 2022.5.8235031, 2022.5.4074527, 2022.5.3203608, 2022.4.30222353, 2022.4.29012709, 2022.4.26012024, 2022.4.16042602, 2022.4.12065535, 2022.4.9150952, 2022.4.8194435, 2022.4.1034139, 2022.3.26064928, 2022.3.24004344, 2022.3.22020510, 2022.3.17063449, 2022.3.17025736, 2022.3.14182524, 2022.3.11235745, 2022.3.11110823, 2022.3.8222851, 2022.3.5063239, 2022.3.3212116, 2022.2.26025446, 2022.2.24221201, 2022.2.18015010, 2022.2.17232226, 2022.2.16003527, 2022.2.12005125, 2022.2.7081733, 2022.2.5044059, 2022.2.1180014, 2022.1.28022816, 2022.1.27035302, 2022.1.25195604, 2022.1.8031154, 2022.1.7015323, 2022.1.4074107, 2022.1.3182258, 2021.12.29064906, 2021.12.27072318, 2021.12.20220716, 2021.12.18044233, 2021.12.10230339, 2021.12.9061941, 2021.11.24231933, 2021.11.9032145, 2021.11.5091626, 2021.11.3033636, 2021.10.27162942, 2021.10.23032824, 2021.10.13002317, 2021.10.10165330, 2021.10.8235824, 2021.10.6233631, 2021.10.2163105, 2021.9.24002424, 2021.9.23044624, 2021.9.18180959, 2021.9.15045425, 2021.9.9213707, 2021.9.3035613, 2021.8.31054654, 2021.8.25004118, 2021.8.20183201, 2021.8.17205308, 2021.8.5220119, 2021.7.30000200, 2021.7.27024015, 2021.7.22052332, 2021.7.21221523, 2021.7.15222734, 2021.7.12024453, 2021.7.8194325, 2021.7.8011501, 2021.6.17001046, 2021.6.14012923, 2021.6.9185139, 2021.6.7214051, 2021.5.27220631, 2021.5.26002246, 2021.5.22023439, 2021.5.20223144, 2021.5.18005328, 2021.5.16053234, 2021.5.11232741, 2021.4.22154428, 2021.4.18192629, 2021.4.6231100, 2021.3.26000041, 2021.3.17023302, 2021.3.12000047, 2021.3.10051133, 2021.3.4005313, 2021.3.1042055, 2021.2.24184445, 2021.2.23200501, 2021.2.19043802, 2021.2.14040133, 2021.2.11082343, 2021.2.7013102, 2021.2.1225652, 2021.1.30002058, 2021.1.16021944, 2021.1.8211821, 2021.1.5052238, 2020.12.29232929, 2020.12.26013554, 2020.12.23022412, 2020.12.18032742, 2020.12.16050517, 2020.12.12083907, 2020.12.10015429, 2020.12.3054924, 2020.12.3000310, 2020.11.25223625, 2020.11.19234816, 2020.11.13201018, 2020.11.12223334, 2020.11.10210224, 2020.11.6231707, 2020.10.28081650, 2020.10.27040355, 2020.10.18215412, 2020.10.12215321, 2020.10.9225505, 2020.10.3021942, 2020.9.26034456, 2020.9.23191830, 2020.9.21223159, 2020.9.17044920, 2020.9.16042235, 2020.9.10220245, 2020.9.8230518, 2020.9.5071449, 2020.9.2181950, 2020.8.27051620, 2020.8.26000049, 2020.8.25002120, 2020.8.18194100, 2020.8.16183938, 2020.8.13023950, 2020.8.8045006, 2020.8.7012307, 2020.8.5213413, 2020.8.4231051, 2020.7.31033905, 2020.7.27183702, 2020.7.24224305, 2020.7.22002633, 2020.7.20022516, 2020.7.18184816, 2020.7.14191430, 2020.7.13180956, 2020.7.12191417, 2020.7.11211423, 2020.7.11060716, 2020.7.2001509, 2020.6.22031250, 2020.6.18022335, 2020.6.14183217, 2020.6.12000619, 2020.6.3221349, 2020.6.1172803, 2020.5.29140849, 2020.5.28232921, 2020.5.16013321, 2020.5.8024049, 2020.5.6232325, 2020.5.1221914, 2020.4.28235656, 2020.4.23005849, 2020.4.22001112, 2020.4.15194218, 2020.4.15003901, 2020.4.10033442, 2020.4.4053931, 2020.4.2213449, 2020.3.25070304, 2020.3.19214900, 2020.3.14022158, 2020.3.9182653, 2020.3.6222356, 2020.3.5010419, 2020.2.27002305, 2020.2.20225123, 2020.2.7232816, 2020.2.7045650, 2020.1.25025051, 2020.1.16224029, 2020.1.16030544, 2020.1.3191221, 2019.12.30054539, 2019.12.24230445, 2019.12.19225226, 2019.12.17231633, 2019.10.12013957, 2019.10.11003809, 2019.10.2211938, 2019.9.26194235, 2019.9.25182551, 2019.9.18215505, 2019.9.11195316, 2019.9.5232438, 2019.8.29002501, 2019.8.21194007, 2019.8.14203741, 2019.8.7015921, 2019.8.1221854, 2019.7.31185756, 2019.7.24020223, 2019.7.17225412, 2019.7.10003456, 2019.7.5212021, 2019.6.27211350, 2019.6.19182442, 2019.6.15230718, 2019.6.13014113, 2019.6.11004433, 2019.6.4011558, 2019.6.1034614, 2019.5.23002934, 2019.5.14235745, 2019.5.2190709, 2019.4.23235036, 2019.4.18214459, 2019.4.18011557, 2019.4.9012230, 2019.4.4183146, 2019.3.27223521, 2019.3.20223847, 2019.3.13215947, 2019.3.6224710, 2019.2.26195146, 2019.2.20224429, 2019.2.14002145, 2019.2.12215847, 2019.2.6211636, 2019.1.31003119, 2019.1.23231858, 2019.1.16214408, 2019.1.10002120, 2018.12.27183308, 2018.12.19234624, 2018.12.13020419, 2018.12.6012743, 2018.11.30035659, 2018.11.22025156, 2018.11.17012348, 2018.11.15012607, 2018.11.6010102, 2018.10.25012703, 2018.10.18002858, 2018.10.6001516, 2018.10.5010303, 2018.9.25213443, 2018.9.12184956, 2018.9.11013921, 2018.9.1003825, 2018.8.25015638, 2018.8.21003720, 2018.8.18034957, 2018.8.2231136, 2018.7.31021147, 2018.7.23183449, 2018.7.13000907, 2018.7.10014211, 2018.6.29021129, 2018.6.22234846, 2018.6.9034335, 2018.6.8034938, 2018.6.7191007, 2018.5.25194913, 2018.5.16233533, 2018.5.11002924, 2018.5.10000042, 2018.5.4231312, 2018.4.27233352, 2018.4.19225458, 2018.4.12234109, 2018.4.4052054, 2018.3.30003844, 2018.3.28234553, 2018.3.19192206, 2018.3.16225212, 2018.3.12212528, 2018.2.9224005, 2018.1.18203321, 2018.1.2230700, 2017.12.28012100, 2017.11.22195546, 2017.10.27185902, 2017.9.29191656, 2017.8.5000053, 2017.7.24182735, 2017.6.13190101, 2017.5.5011451, 2017.4.29004027, 2017.4.25012749, 2017.3.16215032, 2017.2.16014730, 2017.2.15225524, 2017.1.25031452, 2016.12.13171942, 2016.12.12234433, 2016.12.12183543, 2016.11.26022347, 2016.11.24020908, 2016.10.24212347, 2016.10.22005041, 2016.10.14040039, 2016.10.7011639, 2016.9.11174218, 2016.8.21024447, 2016.8.16231945, 2016.7.13214605, 2016.6.3193205, 2016.4.17220924, 2016.4.14183810, 2016.3.21210851, 2016.3.11034550

## Sample project

View the [Minio sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.20/src/apps/minio/sample-project) on github.

## Try Gobot's other apps

Gobot has a growing list of apps. Have you tried them all?

| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                                                                              | `<app>`       | What is it?                                                                                                                                                                                                                                                                              |                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.20/src/apps/act/logo-50x.png">](https://nektosact.com/)                        | `act`         | Run your GitHub Actions locally 🚀                                                                                                                                                                                                                                                       | [readme](https://www.npmjs.com/package/gobot-act)         |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.20/src/apps/AdGuardHome/logo-50x.png">](https://adguard.com/adguard-home.html) | `AdGuardHome` | Network-wide ads & trackers blocking DNS server                                                                                                                                                                                                                                          | [readme](https://www.npmjs.com/package/gobot-adguardhome) |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.20/src/apps/backrest/logo-50x.png">](https://github.com/garethgeorge/backrest) | `backrest`    | Backrest is a web UI and orchestrator for restic backup.                                                                                                                                                                                                                                 | [readme](https://www.npmjs.com/package/gobot-backrest)    |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.20/src/apps/caddy/logo-50x.png">](https://caddyserver.com/)                    | `caddy`       | Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS                                                                                                                                                                                                            | [readme](https://www.npmjs.com/package/gobot-caddy)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.20/src/apps/mc/logo-50x.png">](https://min.io)                                 | `mc`          | The Object Store for AI Data Infrastructure (client)                                                                                                                                                                                                                                     | [readme](https://www.npmjs.com/package/gobot-mc)          |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.20/src/apps/minio/logo-50x.png">](https://min.io)                              | `minio`       | The Object Store for AI Data Infrastructure (server)                                                                                                                                                                                                                                     | [readme](https://www.npmjs.com/package/gobot-minio)       |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.20/src/apps/pocketbase/logo-50x.png">](https://pocketbase.io)                  | `pocketbase`  | Open Source realtime backend in 1 file                                                                                                                                                                                                                                                   | [readme](https://www.npmjs.com/package/gobot-pocketbase)  |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.20/src/apps/pulumi/logo-50x.png">](https://www.pulumi.com)                     | `pulumi`      | Pulumi - Infrastructure as Code in any programming language. Build infrastructure intuitively on any cloud using familiar languages 🚀                                                                                                                                                   | [readme](https://www.npmjs.com/package/gobot-pulumi)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.20/src/apps/rclone/logo-50x.png">](https://rclone.org/)                        | `rclone`      | rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Yandex Files                                                                                                                                                  | [readme](https://www.npmjs.com/package/gobot-rclone)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.20/src/apps/restic/logo-50x.png">](https://restic.net/)                        | `restic`      | Fast, secure, efficient backup program.                                                                                                                                                                                                                                                  | [readme](https://www.npmjs.com/package/gobot-restic)      |
| [<img src="https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.20/src/apps/weaviate/logo-50x.png">](https://weaviate.io)                      | `weaviate`    | Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering with the fault-tolerance and scalability of a cloud-native database, all accessible through GraphQL, REST, and various language clients. | [readme](https://www.npmjs.com/package/gobot-weaviate)    |

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

