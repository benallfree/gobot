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

[Gobot.ts:100](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L100)

## Properties

### arch

• **arch**: `Architecture`

#### Defined in

[Gobot.ts:87](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L87)

___

### cacheRoot

• **cacheRoot**: `string`

#### Defined in

[Gobot.ts:90](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L90)

___

### env

• **env**: `ProcessEnv`

#### Defined in

[Gobot.ts:89](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L89)

___

### os

• **os**: `Platform`

#### Defined in

[Gobot.ts:86](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L86)

___

### releaseProvider

• **releaseProvider**: [`GithubReleaseProvider`](api.GithubReleaseProvider.md)

#### Defined in

[Gobot.ts:92](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L92)

___

### repo

• **repo**: `string`

#### Defined in

[Gobot.ts:85](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L85)

___

### storedReleases

• **storedReleases**: `undefined` \| [`StoredRelease`](../modules/Gobot.md#storedrelease)[] = `undefined`

#### Defined in

[Gobot.ts:91](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L91)

___

### version

• **version**: `string`

#### Defined in

[Gobot.ts:88](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L88)

___

### VERSION\_FORMATS

▪ `Static` **VERSION\_FORMATS**: readonly [``"js"``, ``"txt"``, ``"json"``, ``"cjs"``, ``"esm"``, ``"md"``]

#### Defined in

[Gobot.ts:83](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L83)

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

[Gobot.ts:81](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L81)

## Accessors

### binName

• `get` **binName**(): `string`

#### Returns

`string`

#### Defined in

[Gobot.ts:214](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L214)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[Gobot.ts:144](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L144)

___

### slug

• `get` **slug**(): `string`

#### Returns

`string`

#### Defined in

[Gobot.ts:140](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L140)

## Methods

### allPlatforms

▸ **allPlatforms**(): `Promise`\<`Platform`[]\>

#### Returns

`Promise`\<`Platform`[]\>

#### Defined in

[Gobot.ts:407](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L407)

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

[Gobot.ts:148](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L148)

___

### clearCache

▸ **clearCache**(): `void`

Clear all items from cache (flush cache).

#### Returns

`void`

#### Defined in

[Gobot.ts:157](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L157)

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

[Gobot.ts:314](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L314)

___

### download

▸ **download**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:162](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L162)

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

[Gobot.ts:251](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L251)

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

[Gobot.ts:240](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L240)

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

[Gobot.ts:391](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L391)

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

[Gobot.ts:220](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L220)

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

[Gobot.ts:271](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L271)

___

### getLatestVersion

▸ **getLatestVersion**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:327](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L327)

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

[Gobot.ts:322](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L322)

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

[Gobot.ts:395](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L395)

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

[Gobot.ts:340](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L340)

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

[Gobot.ts:332](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L332)

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

[Gobot.ts:349](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L349)

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

[Gobot.ts:419](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L419)

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

[Gobot.ts:318](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L318)

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

[Gobot.ts:257](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L257)

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

[Gobot.ts:176](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L176)

▸ **versions**(`type?`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | ``"md"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:177](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L177)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"json"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:178](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L178)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"txt"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:179](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L179)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"cjs"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:180](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L180)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"esm"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:181](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L181)

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

[Gobot.ts:78](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.31/src/Gobot.ts#L78)
