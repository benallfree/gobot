[api](../modules/api.md).GithubReleaseProvider

## Table of contents

### Constructors

- [constructor](api.GithubReleaseProvider.md#constructor)

### Properties

- [cacheRoot](api.GithubReleaseProvider.md#cacheroot)
- [platformMap](api.GithubReleaseProvider.md#platformmap)
- [repo](api.GithubReleaseProvider.md#repo)

### Accessors

- [slug](api.GithubReleaseProvider.md#slug)

### Methods

- [cachePath](api.GithubReleaseProvider.md#cachepath)
- [extractVersionFromTag](api.GithubReleaseProvider.md#extractversionfromtag)
- [fetch](api.GithubReleaseProvider.md#fetch)
- [getArchivesForRelease](api.GithubReleaseProvider.md#getarchivesforrelease)
- [isValidRelease](api.GithubReleaseProvider.md#isvalidrelease)

## Constructors

### constructor

• **new GithubReleaseProvider**(`repo`, `cacheRoot`, `optionsIn?`): [`GithubReleaseProvider`](api.GithubReleaseProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `repo` | `string` |
| `cacheRoot` | `string` |
| `optionsIn` | `Partial`\<[`GithubReleaseProviderOptions`](../modules/api.md#githubreleaseprovideroptions)\> |

#### Returns

[`GithubReleaseProvider`](api.GithubReleaseProvider.md)

#### Defined in

[GithubReleaseProvider.ts:85](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.16/src/GithubReleaseProvider.ts#L85)

## Properties

### cacheRoot

• `Protected` **cacheRoot**: `string`

#### Defined in

[GithubReleaseProvider.ts:82](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.16/src/GithubReleaseProvider.ts#L82)

___

### platformMap

• **platformMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `darwin` | \{ `aliases`: readonly [``"mac"``, ``"osx"``, ``"macos"``] ; `architectures`: `SupportedArchMap` = SUPPORTED\_ARCH } |
| `darwin.aliases` | readonly [``"mac"``, ``"osx"``, ``"macos"``] |
| `darwin.architectures` | `SupportedArchMap` |
| `freebsd` | \{ `aliases`: readonly [] = []; `architectures`: `SupportedArchMap` = SUPPORTED\_ARCH } |
| `freebsd.aliases` | readonly [] |
| `freebsd.architectures` | `SupportedArchMap` |
| `linux` | \{ `aliases`: readonly [] = []; `architectures`: `SupportedArchMap` = SUPPORTED\_ARCH } |
| `linux.aliases` | readonly [] |
| `linux.architectures` | `SupportedArchMap` |
| `win32` | \{ `aliases`: readonly [``"win"``, ``"windows"``] ; `architectures`: `SupportedArchMap` = SUPPORTED\_ARCH } |
| `win32.aliases` | readonly [``"win"``, ``"windows"``] |
| `win32.architectures` | `SupportedArchMap` |

#### Defined in

[GithubReleaseProvider.ts:83](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.16/src/GithubReleaseProvider.ts#L83)

___

### repo

• `Protected` **repo**: `string`

#### Defined in

[GithubReleaseProvider.ts:81](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.16/src/GithubReleaseProvider.ts#L81)

## Accessors

### slug

• `get` **slug**(): `string`

#### Returns

`string`

#### Defined in

[GithubReleaseProvider.ts:103](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.16/src/GithubReleaseProvider.ts#L103)

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

[GithubReleaseProvider.ts:107](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.16/src/GithubReleaseProvider.ts#L107)

___

### extractVersionFromTag

▸ **extractVersionFromTag**(`tag`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |

#### Returns

`string`

#### Defined in

[GithubReleaseProvider.ts:212](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.16/src/GithubReleaseProvider.ts#L212)

___

### fetch

▸ **fetch**(): `Promise`\<[`StoredRelease`](../modules/Gobot.md#storedrelease)[]\>

#### Returns

`Promise`\<[`StoredRelease`](../modules/Gobot.md#storedrelease)[]\>

#### Defined in

[GithubReleaseProvider.ts:120](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.16/src/GithubReleaseProvider.ts#L120)

___

### getArchivesForRelease

▸ **getArchivesForRelease**(`release`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `release` | [`GithubRelease`](../interfaces/api.GithubRelease.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `aix` | `undefined` \| \{ `arm`: `undefined` \| `string` ; `arm64`: `undefined` \| `string` ; `ia32`: `undefined` \| `string` ; `mips`: `undefined` \| `string` ; `mipsel`: `undefined` \| `string` ; `ppc`: `undefined` \| `string` ; `ppc64`: `undefined` \| `string` ; `riscv64`: `undefined` \| `string` ; `s390`: `undefined` \| `string` ; `s390x`: `undefined` \| `string` ; `x64`: `undefined` \| `string`  } |
| `android` | `undefined` \| \{ `arm`: `undefined` \| `string` ; `arm64`: `undefined` \| `string` ; `ia32`: `undefined` \| `string` ; `mips`: `undefined` \| `string` ; `mipsel`: `undefined` \| `string` ; `ppc`: `undefined` \| `string` ; `ppc64`: `undefined` \| `string` ; `riscv64`: `undefined` \| `string` ; `s390`: `undefined` \| `string` ; `s390x`: `undefined` \| `string` ; `x64`: `undefined` \| `string`  } |
| `cygwin` | `undefined` \| \{ `arm`: `undefined` \| `string` ; `arm64`: `undefined` \| `string` ; `ia32`: `undefined` \| `string` ; `mips`: `undefined` \| `string` ; `mipsel`: `undefined` \| `string` ; `ppc`: `undefined` \| `string` ; `ppc64`: `undefined` \| `string` ; `riscv64`: `undefined` \| `string` ; `s390`: `undefined` \| `string` ; `s390x`: `undefined` \| `string` ; `x64`: `undefined` \| `string`  } |
| `darwin` | `undefined` \| \{ `arm`: `undefined` \| `string` ; `arm64`: `undefined` \| `string` ; `ia32`: `undefined` \| `string` ; `mips`: `undefined` \| `string` ; `mipsel`: `undefined` \| `string` ; `ppc`: `undefined` \| `string` ; `ppc64`: `undefined` \| `string` ; `riscv64`: `undefined` \| `string` ; `s390`: `undefined` \| `string` ; `s390x`: `undefined` \| `string` ; `x64`: `undefined` \| `string`  } |
| `freebsd` | `undefined` \| \{ `arm`: `undefined` \| `string` ; `arm64`: `undefined` \| `string` ; `ia32`: `undefined` \| `string` ; `mips`: `undefined` \| `string` ; `mipsel`: `undefined` \| `string` ; `ppc`: `undefined` \| `string` ; `ppc64`: `undefined` \| `string` ; `riscv64`: `undefined` \| `string` ; `s390`: `undefined` \| `string` ; `s390x`: `undefined` \| `string` ; `x64`: `undefined` \| `string`  } |
| `haiku` | `undefined` \| \{ `arm`: `undefined` \| `string` ; `arm64`: `undefined` \| `string` ; `ia32`: `undefined` \| `string` ; `mips`: `undefined` \| `string` ; `mipsel`: `undefined` \| `string` ; `ppc`: `undefined` \| `string` ; `ppc64`: `undefined` \| `string` ; `riscv64`: `undefined` \| `string` ; `s390`: `undefined` \| `string` ; `s390x`: `undefined` \| `string` ; `x64`: `undefined` \| `string`  } |
| `linux` | `undefined` \| \{ `arm`: `undefined` \| `string` ; `arm64`: `undefined` \| `string` ; `ia32`: `undefined` \| `string` ; `mips`: `undefined` \| `string` ; `mipsel`: `undefined` \| `string` ; `ppc`: `undefined` \| `string` ; `ppc64`: `undefined` \| `string` ; `riscv64`: `undefined` \| `string` ; `s390`: `undefined` \| `string` ; `s390x`: `undefined` \| `string` ; `x64`: `undefined` \| `string`  } |
| `netbsd` | `undefined` \| \{ `arm`: `undefined` \| `string` ; `arm64`: `undefined` \| `string` ; `ia32`: `undefined` \| `string` ; `mips`: `undefined` \| `string` ; `mipsel`: `undefined` \| `string` ; `ppc`: `undefined` \| `string` ; `ppc64`: `undefined` \| `string` ; `riscv64`: `undefined` \| `string` ; `s390`: `undefined` \| `string` ; `s390x`: `undefined` \| `string` ; `x64`: `undefined` \| `string`  } |
| `openbsd` | `undefined` \| \{ `arm`: `undefined` \| `string` ; `arm64`: `undefined` \| `string` ; `ia32`: `undefined` \| `string` ; `mips`: `undefined` \| `string` ; `mipsel`: `undefined` \| `string` ; `ppc`: `undefined` \| `string` ; `ppc64`: `undefined` \| `string` ; `riscv64`: `undefined` \| `string` ; `s390`: `undefined` \| `string` ; `s390x`: `undefined` \| `string` ; `x64`: `undefined` \| `string`  } |
| `sunos` | `undefined` \| \{ `arm`: `undefined` \| `string` ; `arm64`: `undefined` \| `string` ; `ia32`: `undefined` \| `string` ; `mips`: `undefined` \| `string` ; `mipsel`: `undefined` \| `string` ; `ppc`: `undefined` \| `string` ; `ppc64`: `undefined` \| `string` ; `riscv64`: `undefined` \| `string` ; `s390`: `undefined` \| `string` ; `s390x`: `undefined` \| `string` ; `x64`: `undefined` \| `string`  } |
| `win32` | `undefined` \| \{ `arm`: `undefined` \| `string` ; `arm64`: `undefined` \| `string` ; `ia32`: `undefined` \| `string` ; `mips`: `undefined` \| `string` ; `mipsel`: `undefined` \| `string` ; `ppc`: `undefined` \| `string` ; `ppc64`: `undefined` \| `string` ; `riscv64`: `undefined` \| `string` ; `s390`: `undefined` \| `string` ; `s390x`: `undefined` \| `string` ; `x64`: `undefined` \| `string`  } |

#### Defined in

[GithubReleaseProvider.ts:160](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.16/src/GithubReleaseProvider.ts#L160)

___

### isValidRelease

▸ **isValidRelease**(`release`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `release` | [`GithubRelease`](../interfaces/api.GithubRelease.md) |

#### Returns

`boolean`

#### Defined in

[GithubReleaseProvider.ts:113](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.16/src/GithubReleaseProvider.ts#L113)
