[Gobot](../modules/Gobot.md).Gobot

Generic Gobot app. Subclass this for specific functionality.

## Table of contents

### Constructors

- [constructor](Gobot.Gobot.md#constructor)

### Properties

- [arch](Gobot.Gobot.md#arch)
- [cacheRoot](Gobot.Gobot.md#cacheroot)
- [env](Gobot.Gobot.md#env)
- [os](Gobot.Gobot.md#os)
- [releaseProvider](Gobot.Gobot.md#releaseprovider)
- [repo](Gobot.Gobot.md#repo)
- [storedReleases](Gobot.Gobot.md#storedreleases)
- [version](Gobot.Gobot.md#version)
- [VERSION_FORMATS](Gobot.Gobot.md#version_formats)

### Accessors

- [binName](Gobot.Gobot.md#binname)
- [name](Gobot.Gobot.md#name)
- [slug](Gobot.Gobot.md#slug)

### Methods

- [allPlatforms](Gobot.Gobot.md#allplatforms)
- [cachePath](Gobot.Gobot.md#cachepath)
- [clearAllReleases](Gobot.Gobot.md#clearallreleases)
- [clearStoredReleases](Gobot.Gobot.md#clearstoredreleases)
- [compare](Gobot.Gobot.md#compare)
- [download](Gobot.Gobot.md#download)
- [downloadPath](Gobot.Gobot.md#downloadpath)
- [downloadRoot](Gobot.Gobot.md#downloadroot)
- [filterArgs](Gobot.Gobot.md#filterargs)
- [findArchiveBinPath](Gobot.Gobot.md#findarchivebinpath)
- [getBinaryPath](Gobot.Gobot.md#getbinarypath)
- [getLatestVersion](Gobot.Gobot.md#getlatestversion)
- [getSatisfyingVersions](Gobot.Gobot.md#getsatisfyingversions)
- [hasAnyBuildForVersion](Gobot.Gobot.md#hasanybuildforversion)
- [maxSatisfyingRelease](Gobot.Gobot.md#maxsatisfyingrelease)
- [maxSatisfyingVersion](Gobot.Gobot.md#maxsatisfyingversion)
- [releases](Gobot.Gobot.md#releases)
- [reset](Gobot.Gobot.md#reset)
- [run](Gobot.Gobot.md#run)
- [satisfies](Gobot.Gobot.md#satisfies)
- [unpack](Gobot.Gobot.md#unpack)
- [update](Gobot.Gobot.md#update)
- [versions](Gobot.Gobot.md#versions)
- [DEFAULT_GOBOT_CACHE_ROOT](Gobot.Gobot.md#default_gobot_cache_root)
- [reset](Gobot.Gobot.md#reset-1)

## Constructors

### constructor

• **new Gobot**(`repo`, `releaseProviderFactory`, `optionsIn?`): [`Gobot`](Gobot.Gobot.md)

Create a new Gobot

#### Parameters

| Name                     | Type                                                                                                 | Description                               |
| :----------------------- | :--------------------------------------------------------------------------------------------------- | :---------------------------------------- |
| `repo`                   | `string`                                                                                             | The repo name, in `<user>/<repo>` format. |
| `releaseProviderFactory` | (`repo`: `string`, `cacheRoot`: `string`) => [`GithubReleaseProvider`](api.GithubReleaseProvider.md) | -                                         |
| `optionsIn`              | `Partial`\<[`GobotOptions`](../interfaces/Gobot.GobotOptions.md)\>                                   | Option overrides                          |

#### Returns

[`Gobot`](Gobot.Gobot.md)

#### Defined in

[Gobot.ts:82](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L82)

## Properties

### arch

• `Protected` **arch**: `Architecture`

#### Defined in

[Gobot.ts:69](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L69)

---

### cacheRoot

• `Protected` **cacheRoot**: `string`

#### Defined in

[Gobot.ts:72](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L72)

---

### env

• `Protected` **env**: `ProcessEnv`

#### Defined in

[Gobot.ts:71](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L71)

---

### os

• `Protected` **os**: `Platform`

#### Defined in

[Gobot.ts:68](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L68)

---

### releaseProvider

• `Protected` **releaseProvider**: [`GithubReleaseProvider`](api.GithubReleaseProvider.md)

#### Defined in

[Gobot.ts:74](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L74)

---

### repo

• `Protected` **repo**: `string`

#### Defined in

[Gobot.ts:67](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L67)

---

### storedReleases

• `Protected` **storedReleases**: `undefined` \| [`Release`](../modules/Gobot.md#release)[] = `undefined`

#### Defined in

[Gobot.ts:73](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L73)

---

### version

• `Protected` **version**: `string`

#### Defined in

[Gobot.ts:70](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L70)

---

### VERSION_FORMATS

▪ `Static` **VERSION_FORMATS**: readonly [``"js"``, ``"txt"``, ``"json"``, ``"cjs"``, ``"esm"``, ``"md"``]

#### Defined in

[Gobot.ts:65](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L65)

## Accessors

### binName

• `get` **binName**(): `string`

#### Returns

`string`

#### Defined in

[Gobot.ts:215](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L215)

---

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[Gobot.ts:126](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L126)

---

### slug

• `get` **slug**(): `string`

#### Returns

`string`

#### Defined in

[Gobot.ts:122](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L122)

## Methods

### allPlatforms

▸ **allPlatforms**(): `Promise`\<`Platform`[]\>

#### Returns

`Promise`\<`Platform`[]\>

#### Defined in

[Gobot.ts:376](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L376)

---

### cachePath

▸ **cachePath**(`...paths`): (...`paths`: `string`[]) => `string`

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `...paths` | `string`[] |

#### Returns

`fn`

▸ (`...paths`): `string`

##### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `...paths` | `string`[] |

##### Returns

`string`

#### Defined in

[Gobot.ts:130](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L130)

---

### clearAllReleases

▸ **clearAllReleases**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:168](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L168)

---

### clearStoredReleases

▸ **clearStoredReleases**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:173](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L173)

---

### compare

▸ **compare**(`a`, `b`): `-1` \| `0` \| `1`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `a`  | `string` |
| `b`  | `string` |

#### Returns

`-1` \| `0` \| `1`

#### Defined in

[Gobot.ts:304](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L304)

---

### download

▸ **download**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:154](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L154)

---

### downloadPath

▸ **downloadPath**(`version`, `url`): `string`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `version` | `string` |
| `url`     | `string` |

#### Returns

`string`

#### Defined in

[Gobot.ts:251](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L251)

---

### downloadRoot

▸ **downloadRoot**(`version`): `string`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `version` | `string` |

#### Returns

`string`

#### Defined in

[Gobot.ts:240](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L240)

---

### filterArgs

▸ **filterArgs**(`args`): `string`[]

#### Parameters

| Name   | Type       |
| :----- | :--------- |
| `args` | `string`[] |

#### Returns

`string`[]

#### Defined in

[Gobot.ts:360](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L360)

---

### findArchiveBinPath

▸ **findArchiveBinPath**(`version`): `string`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `version` | `string` |

#### Returns

`string`

#### Defined in

[Gobot.ts:221](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L221)

---

### getBinaryPath

▸ **getBinaryPath**(`versionRangeIn?`): `Promise`\<`string`\>

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `versionRangeIn?` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:264](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L264)

---

### getLatestVersion

▸ **getLatestVersion**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:317](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L317)

---

### getSatisfyingVersions

▸ **getSatisfyingVersions**(`range`): `Promise`\<`string`[]\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `range` | `string` |

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[Gobot.ts:312](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L312)

---

### hasAnyBuildForVersion

▸ **hasAnyBuildForVersion**(`version`): `Promise`\<`boolean`\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `version` | `string` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[Gobot.ts:364](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L364)

---

### maxSatisfyingRelease

▸ **maxSatisfyingRelease**(`range`): `Promise`\<`undefined` \| [`Release`](../modules/Gobot.md#release)\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `range` | `string` |

#### Returns

`Promise`\<`undefined` \| [`Release`](../modules/Gobot.md#release)\>

#### Defined in

[Gobot.ts:330](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L330)

---

### maxSatisfyingVersion

▸ **maxSatisfyingVersion**(`range`): `Promise`\<`undefined` \| `string`\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `range` | `string` |

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Defined in

[Gobot.ts:322](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L322)

---

### releases

▸ **releases**(): `Promise`\<[`Release`](../modules/Gobot.md#release)[]\>

#### Returns

`Promise`\<[`Release`](../modules/Gobot.md#release)[]\>

#### Defined in

[Gobot.ts:343](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L343)

---

### reset

▸ **reset**(): `Promise`\<`void`\>

Clear all items from cache (flush cache).

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:144](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L144)

---

### run

▸ **run**(`args`, `stdio?`): `Promise`\<`ChildProcess`\>

Run a binary.

#### Parameters

| Name    | Type           | Default value | Description                        |
| :------ | :------------- | :------------ | :--------------------------------- |
| `args`  | `string`[]     | `undefined`   | The arguments to pass to `spawn()` |
| `stdio` | `StdioOptions` | `'inherit'`   | -                                  |

#### Returns

`Promise`\<`ChildProcess`\>

#### Defined in

[Gobot.ts:388](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L388)

---

### satisfies

▸ **satisfies**(`version`, `range`): `boolean`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `version` | `string` |
| `range`   | `string` |

#### Returns

`boolean`

#### Defined in

[Gobot.ts:308](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L308)

---

### unpack

▸ **unpack**(`downloadPath`, `version`): `Promise`\<`void`\>

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `downloadPath` | `string` |
| `version`      | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:257](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L257)

---

### update

▸ **update**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:136](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L136)

---

### versions

▸ **versions**(`type?`): `Promise`\<`string`[]\>

#### Parameters

| Name    | Type   |
| :------ | :----- |
| `type?` | `"js"` |

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[Gobot.ts:177](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L177)

▸ **versions**(`type?`): `Promise`\<`string`\>

#### Parameters

| Name    | Type   |
| :------ | :----- |
| `type?` | `"md"` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:178](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L178)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `type` | `"json"` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:179](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L179)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name   | Type    |
| :----- | :------ |
| `type` | `"txt"` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:180](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L180)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name   | Type    |
| :----- | :------ |
| `type` | `"cjs"` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:181](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L181)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name   | Type    |
| :----- | :------ |
| `type` | `"esm"` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:182](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L182)

---

### DEFAULT_GOBOT_CACHE_ROOT

▸ **DEFAULT_GOBOT_CACHE_ROOT**(`...paths`): `string`

The default Gobot cache root. This is platform specific.

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `...paths` | `string`[] |

#### Returns

`string`

#### Defined in

[Gobot.ts:62](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L62)

---

### reset

▸ **reset**(`cachePath?`): `Promise`\<`void`\>

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `cachePath` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:149](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/Gobot.ts#L149)
