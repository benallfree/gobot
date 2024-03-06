[GobotBase](../modules/GobotBase.md).GobotBase

Generic Gobot plugin. Subclass this for specific functionality.

## Table of contents

### Constructors

- [constructor](GobotBase.GobotBase.md#constructor)

### Properties

- [\_cacheRoot](GobotBase.GobotBase.md#_cacheroot)
- [arch](GobotBase.GobotBase.md#arch)
- [env](GobotBase.GobotBase.md#env)
- [os](GobotBase.GobotBase.md#os)
- [releaseProvider](GobotBase.GobotBase.md#releaseprovider)
- [repo](GobotBase.GobotBase.md#repo)
- [version](GobotBase.GobotBase.md#version)

### Accessors

- [archAliases](GobotBase.GobotBase.md#archaliases)
- [osAliases](GobotBase.GobotBase.md#osaliases)

### Methods

- [cachePath](GobotBase.GobotBase.md#cachepath)
- [clearCache](GobotBase.GobotBase.md#clearcache)
- [download](GobotBase.GobotBase.md#download)
- [getBinaryPath](GobotBase.GobotBase.md#getbinarypath)
- [getLatestVersion](GobotBase.GobotBase.md#getlatestversion)
- [getMatchingVersion](GobotBase.GobotBase.md#getmatchingversion)
- [getMatchingVersions](GobotBase.GobotBase.md#getmatchingversions)
- [releases](GobotBase.GobotBase.md#releases)
- [run](GobotBase.GobotBase.md#run)
- [versions](GobotBase.GobotBase.md#versions)

## Constructors

### constructor

• **new GobotBase**(`repo`, `optionsIn?`): [`GobotBase`](GobotBase.GobotBase.md)

Create a new Gobot

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `repo` | `string` | The repo name, in `<user>/<repo>` format. |
| `optionsIn` | `Partial`\<[`GobotOptions`](../interfaces/GobotBase.GobotOptions.md)\> | Option overrides |

#### Returns

[`GobotBase`](GobotBase.GobotBase.md)

#### Defined in

[GobotBase.ts:63](https://github.com/benallfree/gobot/blob/d9f6ceb/src/GobotBase.ts#L63)

## Properties

### \_cacheRoot

• `Protected` **\_cacheRoot**: `string` = `''`

#### Defined in

[GobotBase.ts:54](https://github.com/benallfree/gobot/blob/d9f6ceb/src/GobotBase.ts#L54)

___

### arch

• `Protected` **arch**: ``"arm64"`` \| ``"ia32"`` \| ``"mips"`` \| ``"mipsel"`` \| ``"ppc"`` \| ``"ppc64"`` \| ``"riscv64"`` \| ``"s390"`` \| ``"s390x"`` \| ``"x64"`` \| ``"arm7"``

#### Defined in

[GobotBase.ts:51](https://github.com/benallfree/gobot/blob/d9f6ceb/src/GobotBase.ts#L51)

___

### env

• `Protected` **env**: `ProcessEnv`

#### Defined in

[GobotBase.ts:53](https://github.com/benallfree/gobot/blob/d9f6ceb/src/GobotBase.ts#L53)

___

### os

• `Protected` **os**: ``"aix"`` \| ``"android"`` \| ``"darwin"`` \| ``"freebsd"`` \| ``"haiku"`` \| ``"linux"`` \| ``"openbsd"`` \| ``"sunos"`` \| ``"win32"`` \| ``"cygwin"`` \| ``"netbsd"``

#### Defined in

[GobotBase.ts:50](https://github.com/benallfree/gobot/blob/d9f6ceb/src/GobotBase.ts#L50)

___

### releaseProvider

• `Protected` **releaseProvider**: typeof `GithubReleaseProvider`

#### Defined in

[GobotBase.ts:55](https://github.com/benallfree/gobot/blob/d9f6ceb/src/GobotBase.ts#L55)

___

### repo

• `Protected` **repo**: `string`

#### Defined in

[GobotBase.ts:49](https://github.com/benallfree/gobot/blob/d9f6ceb/src/GobotBase.ts#L49)

___

### version

• `Protected` **version**: `string`

#### Defined in

[GobotBase.ts:52](https://github.com/benallfree/gobot/blob/d9f6ceb/src/GobotBase.ts#L52)

## Accessors

### archAliases

• `get` **archAliases**(): (``"arm"`` \| ``"arm64"`` \| ``"ia32"`` \| ``"mips"`` \| ``"mipsel"`` \| ``"ppc"`` \| ``"ppc64"`` \| ``"riscv64"`` \| ``"s390"`` \| ``"s390x"`` \| ``"x64"`` \| ``"arm7"`` \| ``"i386"`` \| ``"x86_64"``)[]

#### Returns

(``"arm"`` \| ``"arm64"`` \| ``"ia32"`` \| ``"mips"`` \| ``"mipsel"`` \| ``"ppc"`` \| ``"ppc64"`` \| ``"riscv64"`` \| ``"s390"`` \| ``"s390x"`` \| ``"x64"`` \| ``"arm7"`` \| ``"i386"`` \| ``"x86_64"``)[]

#### Defined in

[GobotBase.ts:208](https://github.com/benallfree/gobot/blob/d9f6ceb/src/GobotBase.ts#L208)

___

### osAliases

• `get` **osAliases**(): (``"aix"`` \| ``"android"`` \| ``"darwin"`` \| ``"freebsd"`` \| ``"haiku"`` \| ``"linux"`` \| ``"openbsd"`` \| ``"sunos"`` \| ``"win32"`` \| ``"cygwin"`` \| ``"netbsd"`` \| ``"mac"`` \| ``"osx"`` \| ``"windows"``)[]

#### Returns

(``"aix"`` \| ``"android"`` \| ``"darwin"`` \| ``"freebsd"`` \| ``"haiku"`` \| ``"linux"`` \| ``"openbsd"`` \| ``"sunos"`` \| ``"win32"`` \| ``"cygwin"`` \| ``"netbsd"`` \| ``"mac"`` \| ``"osx"`` \| ``"windows"``)[]

#### Defined in

[GobotBase.ts:204](https://github.com/benallfree/gobot/blob/d9f6ceb/src/GobotBase.ts#L204)

## Methods

### cachePath

▸ **cachePath**(`...paths`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...paths` | `string`[] |

#### Returns

`string`

#### Defined in

[GobotBase.ts:102](https://github.com/benallfree/gobot/blob/d9f6ceb/src/GobotBase.ts#L102)

___

### clearCache

▸ **clearCache**(): `void`

Clear all items from cache (flush cache).

#### Returns

`void`

#### Defined in

[GobotBase.ts:111](https://github.com/benallfree/gobot/blob/d9f6ceb/src/GobotBase.ts#L111)

___

### download

▸ **download**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[GobotBase.ts:116](https://github.com/benallfree/gobot/blob/d9f6ceb/src/GobotBase.ts#L116)

___

### getBinaryPath

▸ **getBinaryPath**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[GobotBase.ts:238](https://github.com/benallfree/gobot/blob/d9f6ceb/src/GobotBase.ts#L238)

___

### getLatestVersion

▸ **getLatestVersion**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[GobotBase.ts:157](https://github.com/benallfree/gobot/blob/d9f6ceb/src/GobotBase.ts#L157)

___

### getMatchingVersion

▸ **getMatchingVersion**(`semver`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semver` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[GobotBase.ts:130](https://github.com/benallfree/gobot/blob/d9f6ceb/src/GobotBase.ts#L130)

___

### getMatchingVersions

▸ **getMatchingVersions**(`semver`): `Promise`\<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semver` | `string` |

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[GobotBase.ts:152](https://github.com/benallfree/gobot/blob/d9f6ceb/src/GobotBase.ts#L152)

___

### releases

▸ **releases**(): `Promise`\<`StoredRelease`[]\>

#### Returns

`Promise`\<`StoredRelease`[]\>

#### Defined in

[GobotBase.ts:162](https://github.com/benallfree/gobot/blob/d9f6ceb/src/GobotBase.ts#L162)

___

### run

▸ **run**(`args`): `Promise`\<`ChildProcess`\>

Run a Go binary.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `string`[] | The arguments to pass to `spawn()` |

#### Returns

`Promise`\<`ChildProcess`\>

#### Defined in

[GobotBase.ts:273](https://github.com/benallfree/gobot/blob/d9f6ceb/src/GobotBase.ts#L273)

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

[GobotBase.ts:171](https://github.com/benallfree/gobot/blob/d9f6ceb/src/GobotBase.ts#L171)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"json"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[GobotBase.ts:172](https://github.com/benallfree/gobot/blob/d9f6ceb/src/GobotBase.ts#L172)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"cjs"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[GobotBase.ts:173](https://github.com/benallfree/gobot/blob/d9f6ceb/src/GobotBase.ts#L173)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"esm"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[GobotBase.ts:174](https://github.com/benallfree/gobot/blob/d9f6ceb/src/GobotBase.ts#L174)
