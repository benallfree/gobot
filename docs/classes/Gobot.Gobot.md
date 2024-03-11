[Gobot](../modules/Gobot.md).Gobot

Generic Gobot plugin. Subclass this for specific functionality.

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
- [verbosity](Gobot.Gobot.md#verbosity)

### Accessors

- [binName](Gobot.Gobot.md#binname)
- [name](Gobot.Gobot.md#name)
- [slug](Gobot.Gobot.md#slug)

### Methods

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
- [maxSatisfyingRelease](Gobot.Gobot.md#maxsatisfyingrelease)
- [maxSatisfyingVersion](Gobot.Gobot.md#maxsatisfyingversion)
- [releases](Gobot.Gobot.md#releases)
- [run](Gobot.Gobot.md#run)
- [satisfies](Gobot.Gobot.md#satisfies)
- [unpack](Gobot.Gobot.md#unpack)
- [versions](Gobot.Gobot.md#versions)
- [DEFAULT\_GOBOT\_CACHE\_ROOT](Gobot.Gobot.md#default_gobot_cache_root)

## Constructors

### constructor

• **new Gobot**(`repo`, `releaseProviderFactory`, `optionsIn?`): [`Gobot`](Gobot.Gobot.md)

Create a new Gobot

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `repo` | `string` | The repo name, in `<user>/<repo>` format. |
| `releaseProviderFactory` | (`cacheRoot`: `string`) => [`GithubReleaseProvider`](api.GithubReleaseProvider.md) | - |
| `optionsIn` | `Partial`\<[`GobotOptions`](../interfaces/Gobot.GobotOptions.md)\> | Option overrides |

#### Returns

[`Gobot`](Gobot.Gobot.md)

#### Defined in

[Gobot.ts:81](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L81)

## Properties

### arch

• **arch**: `Architecture`

#### Defined in

[Gobot.ts:68](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L68)

___

### cacheRoot

• **cacheRoot**: `string`

#### Defined in

[Gobot.ts:71](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L71)

___

### env

• **env**: `ProcessEnv`

#### Defined in

[Gobot.ts:70](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L70)

___

### os

• **os**: `Platform`

#### Defined in

[Gobot.ts:67](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L67)

___

### releaseProvider

• **releaseProvider**: [`GithubReleaseProvider`](api.GithubReleaseProvider.md)

#### Defined in

[Gobot.ts:73](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L73)

___

### repo

• **repo**: `string`

#### Defined in

[Gobot.ts:66](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L66)

___

### storedReleases

• **storedReleases**: `undefined` \| [`StoredRelease`](../modules/Gobot.md#storedrelease)[] = `undefined`

#### Defined in

[Gobot.ts:72](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L72)

___

### version

• **version**: `string`

#### Defined in

[Gobot.ts:69](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L69)

___

### verbosity

▪ `Static` **verbosity**: (`newValue?`: ``0`` \| ``1`` \| ``2`` \| ``3``) => ``0`` \| ``1`` \| ``2`` \| ``3``

#### Type declaration

▸ (`newValue?`): ``0`` \| ``1`` \| ``2`` \| ``3``

##### Parameters

| Name | Type |
| :------ | :------ |
| `newValue?` | ``0`` \| ``1`` \| ``2`` \| ``3`` |

##### Returns

``0`` \| ``1`` \| ``2`` \| ``3``

#### Defined in

[Gobot.ts:64](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L64)

## Accessors

### binName

• `get` **binName**(): `string`

#### Returns

`string`

#### Defined in

[Gobot.ts:178](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L178)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[Gobot.ts:121](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L121)

___

### slug

• `get` **slug**(): `string`

#### Returns

`string`

#### Defined in

[Gobot.ts:117](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L117)

## Methods

### cachePath

▸ **cachePath**(`...paths`): (...`paths`: `string`[]) => `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...paths` | `string`[] |

#### Returns

`fn`

▸ (`...paths`): `string`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...paths` | `string`[] |

##### Returns

`string`

#### Defined in

[Gobot.ts:125](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L125)

___

### clearCache

▸ **clearCache**(): `void`

Clear all items from cache (flush cache).

#### Returns

`void`

#### Defined in

[Gobot.ts:134](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L134)

___

### compare

▸ **compare**(`a`, `b`): ``-1`` \| ``0`` \| ``1``

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` |
| `b` | `string` |

#### Returns

``-1`` \| ``0`` \| ``1``

#### Defined in

[Gobot.ts:259](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L259)

___

### download

▸ **download**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:139](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L139)

___

### downloadPath

▸ **downloadPath**(`version`, `url`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `string` |
| `url` | `string` |

#### Returns

`string`

#### Defined in

[Gobot.ts:204](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L204)

___

### downloadRoot

▸ **downloadRoot**(`version`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `string` |

#### Returns

`string`

#### Defined in

[Gobot.ts:193](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L193)

___

### filterArgs

▸ **filterArgs**(`args`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `string`[] |

#### Returns

`string`[]

#### Defined in

[Gobot.ts:336](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L336)

___

### findArchiveBinPath

▸ **findArchiveBinPath**(`version`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:184](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L184)

___

### getBinaryPath

▸ **getBinaryPath**(`versionRangeIn?`): `Promise`\<`undefined` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `versionRangeIn?` | `string` |

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Defined in

[Gobot.ts:217](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L217)

___

### getLatestVersion

▸ **getLatestVersion**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:272](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L272)

___

### getSatisfyingVersions

▸ **getSatisfyingVersions**(`range`): `Promise`\<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | `string` |

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[Gobot.ts:267](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L267)

___

### maxSatisfyingRelease

▸ **maxSatisfyingRelease**(`range`): `Promise`\<`undefined` \| [`StoredRelease`](../modules/Gobot.md#storedrelease)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | `string` |

#### Returns

`Promise`\<`undefined` \| [`StoredRelease`](../modules/Gobot.md#storedrelease)\>

#### Defined in

[Gobot.ts:285](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L285)

___

### maxSatisfyingVersion

▸ **maxSatisfyingVersion**(`range`): `Promise`\<`undefined` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `range` | `string` |

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Defined in

[Gobot.ts:277](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L277)

___

### releases

▸ **releases**(`force?`): `Promise`\<[`StoredRelease`](../modules/Gobot.md#storedrelease)[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`\<[`StoredRelease`](../modules/Gobot.md#storedrelease)[]\>

#### Defined in

[Gobot.ts:294](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L294)

___

### run

▸ **run**(`args`): `Promise`\<`undefined` \| `ChildProcess`\>

Run a binary.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `string`[] | The arguments to pass to `spawn()` |

#### Returns

`Promise`\<`undefined` \| `ChildProcess`\>

#### Defined in

[Gobot.ts:346](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L346)

___

### satisfies

▸ **satisfies**(`version`, `range`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `string` |
| `range` | `string` |

#### Returns

`boolean`

#### Defined in

[Gobot.ts:263](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L263)

___

### unpack

▸ **unpack**(`downloadPath`, `version`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `downloadPath` | `string` |
| `version` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:210](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L210)

___

### versions

▸ **versions**(`type?`): `Promise`\<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | ``"js"`` |

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[Gobot.ts:153](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L153)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"json"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:154](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L154)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"txt"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:155](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L155)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"cjs"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:156](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L156)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"esm"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:157](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L157)

___

### DEFAULT\_GOBOT\_CACHE\_ROOT

▸ **DEFAULT_GOBOT_CACHE_ROOT**(`...paths`): `string`

The default Gobot cache root. This is platform specific.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...paths` | `string`[] |

#### Returns

`string`

#### Defined in

[Gobot.ts:61](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L61)
