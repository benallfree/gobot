[api](../modules/api.md).GithubReleaseProvider

## Table of contents

### Constructors

- [constructor](api.GithubReleaseProvider.md#constructor)

### Properties

- [cacheRoot](api.GithubReleaseProvider.md#cacheroot)
- [platformMap](api.GithubReleaseProvider.md#platformmap)
- [repo](api.GithubReleaseProvider.md#repo)

### Accessors

- [allowedExts](api.GithubReleaseProvider.md#allowedexts)
- [slug](api.GithubReleaseProvider.md#slug)

### Methods

- [archRegex](api.GithubReleaseProvider.md#archregex)
- [cachePath](api.GithubReleaseProvider.md#cachepath)
- [extractVersionFromTag](api.GithubReleaseProvider.md#extractversionfromtag)
- [fetch](api.GithubReleaseProvider.md#fetch)
- [getArchivesForRelease](api.GithubReleaseProvider.md#getarchivesforrelease)
- [isArchiveUrlAllowed](api.GithubReleaseProvider.md#isarchiveurlallowed)
- [isValidRelease](api.GithubReleaseProvider.md#isvalidrelease)
- [platformRegex](api.GithubReleaseProvider.md#platformregex)

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

[GithubReleaseProvider.ts:93](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.27/src/GithubReleaseProvider.ts#L93)

## Properties

### cacheRoot

• `Protected` **cacheRoot**: `string`

#### Defined in

[GithubReleaseProvider.ts:90](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.27/src/GithubReleaseProvider.ts#L90)

___

### platformMap

• **platformMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `darwin` | \{ `aliases`: readonly [``"mac"``, ``"osx"``, ``"macos"``] ; `architectures`: \{ `arm64`: \{ `aliases`: readonly [`string`, ``"universal"``, ``"all"``]  } ; `x64`: \{ `aliases`: readonly [`string`, ``"universal"``, ``"all"``]  }  }  } |
| `darwin.aliases` | readonly [``"mac"``, ``"osx"``, ``"macos"``] |
| `darwin.architectures` | \{ `arm64`: \{ `aliases`: readonly [`string`, ``"universal"``, ``"all"``]  } ; `x64`: \{ `aliases`: readonly [`string`, ``"universal"``, ``"all"``]  }  } |
| `darwin.architectures.arm64` | \{ `aliases`: readonly [`string`, ``"universal"``, ``"all"``]  } |
| `darwin.architectures.arm64.aliases` | readonly [`string`, ``"universal"``, ``"all"``] |
| `darwin.architectures.x64` | \{ `aliases`: readonly [`string`, ``"universal"``, ``"all"``]  } |
| `darwin.architectures.x64.aliases` | readonly [`string`, ``"universal"``, ``"all"``] |
| `freebsd` | \{ `aliases`: readonly [] = []; `architectures`: `SupportedArchMap` = SUPPORTED\_ARCH } |
| `freebsd.aliases` | readonly [] |
| `freebsd.architectures` | `SupportedArchMap` |
| `linux` | \{ `aliases`: readonly [] = []; `architectures`: `SupportedArchMap` = SUPPORTED\_ARCH } |
| `linux.aliases` | readonly [] |
| `linux.architectures` | `SupportedArchMap` |
| `win32` | \{ `aliases`: readonly [``"win"``, ``"windows"``] ; `architectures`: \{ `ia32`: `ArchAliasMap` = SUPPORTED\_ARCH.ia32; `x64`: `ArchAliasMap` = SUPPORTED\_ARCH.x64 }  } |
| `win32.aliases` | readonly [``"win"``, ``"windows"``] |
| `win32.architectures` | \{ `ia32`: `ArchAliasMap` = SUPPORTED\_ARCH.ia32; `x64`: `ArchAliasMap` = SUPPORTED\_ARCH.x64 } |
| `win32.architectures.ia32` | `ArchAliasMap` |
| `win32.architectures.x64` | `ArchAliasMap` |

#### Defined in

[GithubReleaseProvider.ts:91](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.27/src/GithubReleaseProvider.ts#L91)

___

### repo

• `Protected` **repo**: `string`

#### Defined in

[GithubReleaseProvider.ts:89](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.27/src/GithubReleaseProvider.ts#L89)

## Accessors

### allowedExts

• `get` **allowedExts**(): `string`[]

#### Returns

`string`[]

#### Defined in

[GithubReleaseProvider.ts:168](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.27/src/GithubReleaseProvider.ts#L168)

___

### slug

• `get` **slug**(): `string`

#### Returns

`string`

#### Defined in

[GithubReleaseProvider.ts:111](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.27/src/GithubReleaseProvider.ts#L111)

## Methods

### archRegex

▸ **archRegex**(`os`, `aliases`): `RegExp`

#### Parameters

| Name | Type |
| :------ | :------ |
| `os` | `Platform` |
| `aliases` | `string`[] |

#### Returns

`RegExp`

#### Defined in

[GithubReleaseProvider.ts:180](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.27/src/GithubReleaseProvider.ts#L180)

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

[GithubReleaseProvider.ts:115](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.27/src/GithubReleaseProvider.ts#L115)

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

[GithubReleaseProvider.ts:229](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.27/src/GithubReleaseProvider.ts#L229)

___

### fetch

▸ **fetch**(): `Promise`\<[`StoredRelease`](../modules/Gobot.md#storedrelease)[]\>

#### Returns

`Promise`\<[`StoredRelease`](../modules/Gobot.md#storedrelease)[]\>

#### Defined in

[GithubReleaseProvider.ts:128](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.27/src/GithubReleaseProvider.ts#L128)

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

[GithubReleaseProvider.ts:184](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.27/src/GithubReleaseProvider.ts#L184)

___

### isArchiveUrlAllowed

▸ **isArchiveUrlAllowed**(`url`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`boolean`

#### Defined in

[GithubReleaseProvider.ts:172](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.27/src/GithubReleaseProvider.ts#L172)

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

[GithubReleaseProvider.ts:121](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.27/src/GithubReleaseProvider.ts#L121)

___

### platformRegex

▸ **platformRegex**(`arch`, `aliases`): `RegExp`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arch` | `Architecture` |
| `aliases` | `string`[] |

#### Returns

`RegExp`

#### Defined in

[GithubReleaseProvider.ts:176](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.27/src/GithubReleaseProvider.ts#L176)
