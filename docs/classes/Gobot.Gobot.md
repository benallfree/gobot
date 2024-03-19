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
- [VERSION\_FORMATS](Gobot.Gobot.md#version_formats)
- [verbosity](Gobot.Gobot.md#verbosity)

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
- [DEFAULT\_GOBOT\_CACHE\_ROOT](Gobot.Gobot.md#default_gobot_cache_root)

## Constructors

### constructor

• **new Gobot**(`repo`, `releaseProviderFactory`, `optionsIn?`): [`Gobot`](Gobot.Gobot.md)

Create a new Gobot

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `repo` | `string` | The repo name, in `<user>/<repo>` format. |
| `releaseProviderFactory` | (`repo`: `string`, `cacheRoot`: `string`) => [`GithubReleaseProvider`](api.GithubReleaseProvider.md) | - |
| `optionsIn` | `Partial`\<[`GobotOptions`](../interfaces/Gobot.GobotOptions.md)\> | Option overrides |

#### Returns

[`Gobot`](Gobot.Gobot.md)

#### Defined in

[Gobot.ts:98](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L98)

## Properties

### arch

• **arch**: `Architecture`

#### Defined in

[Gobot.ts:85](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L85)

___

### cacheRoot

• **cacheRoot**: `string`

#### Defined in

[Gobot.ts:88](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L88)

___

### env

• **env**: `ProcessEnv`

#### Defined in

[Gobot.ts:87](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L87)

___

### os

• **os**: `Platform`

#### Defined in

[Gobot.ts:84](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L84)

___

### releaseProvider

• **releaseProvider**: [`GithubReleaseProvider`](api.GithubReleaseProvider.md)

#### Defined in

[Gobot.ts:90](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L90)

___

### repo

• **repo**: `string`

#### Defined in

[Gobot.ts:83](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L83)

___

### storedReleases

• **storedReleases**: `undefined` \| [`StoredRelease`](../modules/Gobot.md#storedrelease)[] = `undefined`

#### Defined in

[Gobot.ts:89](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L89)

___

### version

• **version**: `string`

#### Defined in

[Gobot.ts:86](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L86)

___

### VERSION\_FORMATS

▪ `Static` **VERSION\_FORMATS**: readonly [``"js"``, ``"txt"``, ``"json"``, ``"cjs"``, ``"esm"``, ``"md"``]

#### Defined in

[Gobot.ts:81](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L81)

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

[Gobot.ts:79](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L79)

## Accessors

### binName

• `get` **binName**(): `string`

#### Returns

`string`

#### Defined in

[Gobot.ts:212](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L212)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[Gobot.ts:142](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L142)

___

### slug

• `get` **slug**(): `string`

#### Returns

`string`

#### Defined in

[Gobot.ts:138](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L138)

## Methods

### allPlatforms

▸ **allPlatforms**(): `Promise`\<`Platform`[]\>

#### Returns

`Promise`\<`Platform`[]\>

#### Defined in

[Gobot.ts:404](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L404)

___

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

[Gobot.ts:146](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L146)

___

### clearCache

▸ **clearCache**(): `void`

Clear all items from cache (flush cache).

#### Returns

`void`

#### Defined in

[Gobot.ts:155](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L155)

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

[Gobot.ts:311](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L311)

___

### download

▸ **download**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:160](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L160)

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

[Gobot.ts:249](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L249)

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

[Gobot.ts:238](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L238)

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

[Gobot.ts:388](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L388)

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

[Gobot.ts:218](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L218)

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

[Gobot.ts:268](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L268)

___

### getLatestVersion

▸ **getLatestVersion**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:324](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L324)

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

[Gobot.ts:319](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L319)

___

### hasAnyBuildForVersion

▸ **hasAnyBuildForVersion**(`version`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `string` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[Gobot.ts:392](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L392)

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

[Gobot.ts:337](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L337)

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

[Gobot.ts:329](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L329)

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

[Gobot.ts:346](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L346)

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

[Gobot.ts:416](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L416)

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

[Gobot.ts:315](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L315)

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

[Gobot.ts:255](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L255)

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

[Gobot.ts:174](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L174)

▸ **versions**(`type?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | ``"md"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:175](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L175)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"json"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:176](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L176)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"txt"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:177](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L177)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"cjs"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:178](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L178)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"esm"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:179](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L179)

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

[Gobot.ts:76](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L76)
