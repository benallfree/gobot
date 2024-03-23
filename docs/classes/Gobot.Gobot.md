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
- [clearCache](Gobot.Gobot.md#clearcache)
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
- [run](Gobot.Gobot.md#run)
- [satisfies](Gobot.Gobot.md#satisfies)
- [unpack](Gobot.Gobot.md#unpack)
- [versions](Gobot.Gobot.md#versions)
- [DEFAULT_GOBOT_CACHE_ROOT](Gobot.Gobot.md#default_gobot_cache_root)

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

[Gobot.ts:89](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L89)

## Properties

### arch

• `Protected` **arch**: `Architecture`

#### Defined in

[Gobot.ts:76](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L76)

---

### cacheRoot

• `Protected` **cacheRoot**: `string`

#### Defined in

[Gobot.ts:79](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L79)

---

### env

• `Protected` **env**: `ProcessEnv`

#### Defined in

[Gobot.ts:78](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L78)

---

### os

• `Protected` **os**: `Platform`

#### Defined in

[Gobot.ts:75](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L75)

---

### releaseProvider

• `Protected` **releaseProvider**: [`GithubReleaseProvider`](api.GithubReleaseProvider.md)

#### Defined in

[Gobot.ts:81](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L81)

---

### repo

• `Protected` **repo**: `string`

#### Defined in

[Gobot.ts:74](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L74)

---

### storedReleases

• `Protected` **storedReleases**: `undefined` \| [`Release`](../modules/Gobot.md#release)[] = `undefined`

#### Defined in

[Gobot.ts:80](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L80)

---

### version

• `Protected` **version**: `string`

#### Defined in

[Gobot.ts:77](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L77)

---

### VERSION_FORMATS

▪ `Static` **VERSION_FORMATS**: readonly [``"js"``, ``"txt"``, ``"json"``, ``"cjs"``, ``"esm"``, ``"md"``]

#### Defined in

[Gobot.ts:72](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L72)

## Accessors

### binName

• `get` **binName**(): `string`

#### Returns

`string`

#### Defined in

[Gobot.ts:203](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L203)

---

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[Gobot.ts:133](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L133)

---

### slug

• `get` **slug**(): `string`

#### Returns

`string`

#### Defined in

[Gobot.ts:129](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L129)

## Methods

### allPlatforms

▸ **allPlatforms**(): `Promise`\<`Platform`[]\>

#### Returns

`Promise`\<`Platform`[]\>

#### Defined in

[Gobot.ts:390](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L390)

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

[Gobot.ts:137](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L137)

---

### clearCache

▸ **clearCache**(): `Promise`\<`void`\>

Clear all items from cache (flush cache).

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:146](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L146)

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

[Gobot.ts:296](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L296)

---

### download

▸ **download**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:151](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L151)

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

[Gobot.ts:240](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L240)

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

[Gobot.ts:229](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L229)

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

[Gobot.ts:374](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L374)

---

### findArchiveBinPath

▸ **findArchiveBinPath**(`version`): `Promise`\<`string`\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `version` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:209](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L209)

---

### getBinaryPath

▸ **getBinaryPath**(`versionRangeIn?`): `Promise`\<`undefined` \| `string`\>

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `versionRangeIn?` | `string` |

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Defined in

[Gobot.ts:253](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L253)

---

### getLatestVersion

▸ **getLatestVersion**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:309](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L309)

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

[Gobot.ts:304](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L304)

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

[Gobot.ts:378](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L378)

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

[Gobot.ts:322](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L322)

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

[Gobot.ts:314](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L314)

---

### releases

▸ **releases**(`options?`): `Promise`\<[`Release`](../modules/Gobot.md#release)[]\>

#### Parameters

| Name       | Type                                                         |
| :--------- | :----------------------------------------------------------- |
| `options?` | `Partial`\<\{ `recalc`: `boolean` ; `refetch`: `boolean` }\> |

#### Returns

`Promise`\<[`Release`](../modules/Gobot.md#release)[]\>

#### Defined in

[Gobot.ts:331](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L331)

---

### run

▸ **run**(`args`): `Promise`\<`undefined` \| `ChildProcess`\>

Run a binary.

#### Parameters

| Name   | Type       | Description                        |
| :----- | :--------- | :--------------------------------- |
| `args` | `string`[] | The arguments to pass to `spawn()` |

#### Returns

`Promise`\<`undefined` \| `ChildProcess`\>

#### Defined in

[Gobot.ts:402](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L402)

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

[Gobot.ts:300](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L300)

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

[Gobot.ts:246](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L246)

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

[Gobot.ts:165](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L165)

▸ **versions**(`type?`): `Promise`\<`string`\>

#### Parameters

| Name    | Type   |
| :------ | :----- |
| `type?` | `"md"` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:166](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L166)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `type` | `"json"` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:167](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L167)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name   | Type    |
| :----- | :------ |
| `type` | `"txt"` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:168](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L168)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name   | Type    |
| :----- | :------ |
| `type` | `"cjs"` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:169](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L169)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name   | Type    |
| :----- | :------ |
| `type` | `"esm"` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:170](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L170)

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

[Gobot.ts:69](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/Gobot.ts#L69)
