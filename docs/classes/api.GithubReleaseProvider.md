[api](../modules/api.md).GithubReleaseProvider

## Table of contents

### Constructors

- [constructor](api.GithubReleaseProvider.md#constructor)

### Properties

- [repo](api.GithubReleaseProvider.md#repo)

### Accessors

- [allowBareFiles](api.GithubReleaseProvider.md#allowbarefiles)
- [allowedExts](api.GithubReleaseProvider.md#allowedexts)
- [excludedExts](api.GithubReleaseProvider.md#excludedexts)
- [platformMap](api.GithubReleaseProvider.md#platformmap)
- [releasesKey](api.GithubReleaseProvider.md#releaseskey)
- [slug](api.GithubReleaseProvider.md#slug)

### Methods

- [archRegex](api.GithubReleaseProvider.md#archregex)
- [clearCache](api.GithubReleaseProvider.md#clearcache)
- [extractVersionFromTag](api.GithubReleaseProvider.md#extractversionfromtag)
- [getAllUrlsForRelease](api.GithubReleaseProvider.md#getallurlsforrelease)
- [getAllowedUrlsForRelease](api.GithubReleaseProvider.md#getallowedurlsforrelease)
- [getArchivesForRelease](api.GithubReleaseProvider.md#getarchivesforrelease)
- [isArchiveUrlAllowed](api.GithubReleaseProvider.md#isarchiveurlallowed)
- [isValidRelease](api.GithubReleaseProvider.md#isvalidrelease)
- [platformRegex](api.GithubReleaseProvider.md#platformregex)
- [reduceReleases](api.GithubReleaseProvider.md#reducereleases)
- [remoteReleases](api.GithubReleaseProvider.md#remotereleases)

## Constructors

### constructor

• **new GithubReleaseProvider**(`repo`, `cacheRoot`, `optionsIn?`): [`GithubReleaseProvider`](api.GithubReleaseProvider.md)

#### Parameters

| Name        | Type                                                                                          |
| :---------- | :-------------------------------------------------------------------------------------------- |
| `repo`      | `string`                                                                                      |
| `cacheRoot` | `string`                                                                                      |
| `optionsIn` | `Partial`\<[`GithubReleaseProviderOptions`](../modules/api.md#githubreleaseprovideroptions)\> |

#### Returns

[`GithubReleaseProvider`](api.GithubReleaseProvider.md)

#### Defined in

[GithubReleaseProvider.ts:118](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L118)

## Properties

### repo

• `Protected` **repo**: `string`

#### Defined in

[GithubReleaseProvider.ts:114](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L114)

## Accessors

### allowBareFiles

• `get` **allowBareFiles**(): `boolean`

#### Returns

`boolean`

#### Defined in

[GithubReleaseProvider.ts:203](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L203)

---

### allowedExts

• `get` **allowedExts**(): `string`[]

#### Returns

`string`[]

#### Defined in

[GithubReleaseProvider.ts:211](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L211)

---

### excludedExts

• `get` **excludedExts**(): `string`[]

#### Returns

`string`[]

#### Defined in

[GithubReleaseProvider.ts:207](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L207)

---

### platformMap

• `get` **platformMap**(): `Object`

#### Returns

`Object`

| Name                                 | Type                                                                                                                                                                                                                                   |
| :----------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `darwin`                             | \{ `aliases`: readonly [``"mac"``, ``"osx"``, ``"macos"``] ; `architectures`: \{ `arm64`: \{ `aliases`: readonly [`string`, ``"universal"``, ``"all"``] } ; `x64`: \{ `aliases`: readonly [`string`, ``"universal"``, ``"all"``] } } } |
| `darwin.aliases`                     | readonly [``"mac"``, ``"osx"``, ``"macos"``]                                                                                                                                                                                           |
| `darwin.architectures`               | \{ `arm64`: \{ `aliases`: readonly [`string`, ``"universal"``, ``"all"``] } ; `x64`: \{ `aliases`: readonly [`string`, ``"universal"``, ``"all"``] } }                                                                                 |
| `darwin.architectures.arm64`         | \{ `aliases`: readonly [`string`, ``"universal"``, ``"all"``] }                                                                                                                                                                        |
| `darwin.architectures.arm64.aliases` | readonly [`string`, ``"universal"``, ``"all"``]                                                                                                                                                                                        |
| `darwin.architectures.x64`           | \{ `aliases`: readonly [`string`, ``"universal"``, ``"all"``] }                                                                                                                                                                        |
| `darwin.architectures.x64.aliases`   | readonly [`string`, ``"universal"``, ``"all"``]                                                                                                                                                                                        |
| `freebsd`                            | \{ `aliases`: readonly [] = []; `architectures`: `SupportedArchMap` = SUPPORTED_ARCH }                                                                                                                                                 |
| `freebsd.aliases`                    | readonly []                                                                                                                                                                                                                            |
| `freebsd.architectures`              | `SupportedArchMap`                                                                                                                                                                                                                     |
| `linux`                              | \{ `aliases`: readonly [] = []; `architectures`: `SupportedArchMap` = SUPPORTED_ARCH }                                                                                                                                                 |
| `linux.aliases`                      | readonly []                                                                                                                                                                                                                            |
| `linux.architectures`                | `SupportedArchMap`                                                                                                                                                                                                                     |
| `win32`                              | \{ `aliases`: readonly [``"win"``, ``"windows"``] ; `architectures`: \{ `arm64`: `ArchAliasMap` = SUPPORTED_ARCH.arm64; `ia32`: `ArchAliasMap` = SUPPORTED_ARCH.ia32; `x64`: `ArchAliasMap` = SUPPORTED_ARCH.x64 } }                   |
| `win32.aliases`                      | readonly [``"win"``, ``"windows"``]                                                                                                                                                                                                    |
| `win32.architectures`                | \{ `arm64`: `ArchAliasMap` = SUPPORTED_ARCH.arm64; `ia32`: `ArchAliasMap` = SUPPORTED_ARCH.ia32; `x64`: `ArchAliasMap` = SUPPORTED_ARCH.x64 }                                                                                          |
| `win32.architectures.arm64`          | `ArchAliasMap`                                                                                                                                                                                                                         |
| `win32.architectures.ia32`           | `ArchAliasMap`                                                                                                                                                                                                                         |
| `win32.architectures.x64`            | `ArchAliasMap`                                                                                                                                                                                                                         |

#### Defined in

[GithubReleaseProvider.ts:199](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L199)

---

### releasesKey

• `get` **releasesKey**(): `string`

#### Returns

`string`

#### Defined in

[GithubReleaseProvider.ts:164](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L164)

---

### slug

• `get` **slug**(): `string`

#### Returns

`string`

#### Defined in

[GithubReleaseProvider.ts:135](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L135)

## Methods

### archRegex

▸ **archRegex**(`arch`, `aliases`): `RegExp`

#### Parameters

| Name      | Type           |
| :-------- | :------------- |
| `arch`    | `Architecture` |
| `aliases` | `string`[]     |

#### Returns

`RegExp`

#### Defined in

[GithubReleaseProvider.ts:227](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L227)

---

### clearCache

▸ **clearCache**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[GithubReleaseProvider.ts:131](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L131)

---

### extractVersionFromTag

▸ **extractVersionFromTag**(`tag`): `string`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `tag` | `string` |

#### Returns

`string`

#### Defined in

[GithubReleaseProvider.ts:292](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L292)

---

### getAllUrlsForRelease

▸ **getAllUrlsForRelease**(`release`): `string`[]

#### Parameters

| Name      | Type                                                  |
| :-------- | :---------------------------------------------------- |
| `release` | [`GithubRelease`](../interfaces/api.GithubRelease.md) |

#### Returns

`string`[]

#### Defined in

[GithubReleaseProvider.ts:234](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L234)

---

### getAllowedUrlsForRelease

▸ **getAllowedUrlsForRelease**(`release`): `string`[]

#### Parameters

| Name      | Type                                                  |
| :-------- | :---------------------------------------------------- |
| `release` | [`GithubRelease`](../interfaces/api.GithubRelease.md) |

#### Returns

`string`[]

#### Defined in

[GithubReleaseProvider.ts:244](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L244)

---

### getArchivesForRelease

▸ **getArchivesForRelease**(`release`): `Object`

#### Parameters

| Name      | Type                                                  |
| :-------- | :---------------------------------------------------- |
| `release` | [`GithubRelease`](../interfaces/api.GithubRelease.md) |

#### Returns

`Object`

| Name      | Type                                                                                                                                                                                                                                                                                                                                                                                                         |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aix`     | `undefined` \| \{ `arm`: `undefined` \| `string` ; `arm64`: `undefined` \| `string` ; `ia32`: `undefined` \| `string` ; `mips`: `undefined` \| `string` ; `mipsel`: `undefined` \| `string` ; `ppc`: `undefined` \| `string` ; `ppc64`: `undefined` \| `string` ; `riscv64`: `undefined` \| `string` ; `s390`: `undefined` \| `string` ; `s390x`: `undefined` \| `string` ; `x64`: `undefined` \| `string` } |
| `android` | `undefined` \| \{ `arm`: `undefined` \| `string` ; `arm64`: `undefined` \| `string` ; `ia32`: `undefined` \| `string` ; `mips`: `undefined` \| `string` ; `mipsel`: `undefined` \| `string` ; `ppc`: `undefined` \| `string` ; `ppc64`: `undefined` \| `string` ; `riscv64`: `undefined` \| `string` ; `s390`: `undefined` \| `string` ; `s390x`: `undefined` \| `string` ; `x64`: `undefined` \| `string` } |
| `cygwin`  | `undefined` \| \{ `arm`: `undefined` \| `string` ; `arm64`: `undefined` \| `string` ; `ia32`: `undefined` \| `string` ; `mips`: `undefined` \| `string` ; `mipsel`: `undefined` \| `string` ; `ppc`: `undefined` \| `string` ; `ppc64`: `undefined` \| `string` ; `riscv64`: `undefined` \| `string` ; `s390`: `undefined` \| `string` ; `s390x`: `undefined` \| `string` ; `x64`: `undefined` \| `string` } |
| `darwin`  | `undefined` \| \{ `arm`: `undefined` \| `string` ; `arm64`: `undefined` \| `string` ; `ia32`: `undefined` \| `string` ; `mips`: `undefined` \| `string` ; `mipsel`: `undefined` \| `string` ; `ppc`: `undefined` \| `string` ; `ppc64`: `undefined` \| `string` ; `riscv64`: `undefined` \| `string` ; `s390`: `undefined` \| `string` ; `s390x`: `undefined` \| `string` ; `x64`: `undefined` \| `string` } |
| `freebsd` | `undefined` \| \{ `arm`: `undefined` \| `string` ; `arm64`: `undefined` \| `string` ; `ia32`: `undefined` \| `string` ; `mips`: `undefined` \| `string` ; `mipsel`: `undefined` \| `string` ; `ppc`: `undefined` \| `string` ; `ppc64`: `undefined` \| `string` ; `riscv64`: `undefined` \| `string` ; `s390`: `undefined` \| `string` ; `s390x`: `undefined` \| `string` ; `x64`: `undefined` \| `string` } |
| `haiku`   | `undefined` \| \{ `arm`: `undefined` \| `string` ; `arm64`: `undefined` \| `string` ; `ia32`: `undefined` \| `string` ; `mips`: `undefined` \| `string` ; `mipsel`: `undefined` \| `string` ; `ppc`: `undefined` \| `string` ; `ppc64`: `undefined` \| `string` ; `riscv64`: `undefined` \| `string` ; `s390`: `undefined` \| `string` ; `s390x`: `undefined` \| `string` ; `x64`: `undefined` \| `string` } |
| `linux`   | `undefined` \| \{ `arm`: `undefined` \| `string` ; `arm64`: `undefined` \| `string` ; `ia32`: `undefined` \| `string` ; `mips`: `undefined` \| `string` ; `mipsel`: `undefined` \| `string` ; `ppc`: `undefined` \| `string` ; `ppc64`: `undefined` \| `string` ; `riscv64`: `undefined` \| `string` ; `s390`: `undefined` \| `string` ; `s390x`: `undefined` \| `string` ; `x64`: `undefined` \| `string` } |
| `netbsd`  | `undefined` \| \{ `arm`: `undefined` \| `string` ; `arm64`: `undefined` \| `string` ; `ia32`: `undefined` \| `string` ; `mips`: `undefined` \| `string` ; `mipsel`: `undefined` \| `string` ; `ppc`: `undefined` \| `string` ; `ppc64`: `undefined` \| `string` ; `riscv64`: `undefined` \| `string` ; `s390`: `undefined` \| `string` ; `s390x`: `undefined` \| `string` ; `x64`: `undefined` \| `string` } |
| `openbsd` | `undefined` \| \{ `arm`: `undefined` \| `string` ; `arm64`: `undefined` \| `string` ; `ia32`: `undefined` \| `string` ; `mips`: `undefined` \| `string` ; `mipsel`: `undefined` \| `string` ; `ppc`: `undefined` \| `string` ; `ppc64`: `undefined` \| `string` ; `riscv64`: `undefined` \| `string` ; `s390`: `undefined` \| `string` ; `s390x`: `undefined` \| `string` ; `x64`: `undefined` \| `string` } |
| `sunos`   | `undefined` \| \{ `arm`: `undefined` \| `string` ; `arm64`: `undefined` \| `string` ; `ia32`: `undefined` \| `string` ; `mips`: `undefined` \| `string` ; `mipsel`: `undefined` \| `string` ; `ppc`: `undefined` \| `string` ; `ppc64`: `undefined` \| `string` ; `riscv64`: `undefined` \| `string` ; `s390`: `undefined` \| `string` ; `s390x`: `undefined` \| `string` ; `x64`: `undefined` \| `string` } |
| `win32`   | `undefined` \| \{ `arm`: `undefined` \| `string` ; `arm64`: `undefined` \| `string` ; `ia32`: `undefined` \| `string` ; `mips`: `undefined` \| `string` ; `mipsel`: `undefined` \| `string` ; `ppc`: `undefined` \| `string` ; `ppc64`: `undefined` \| `string` ; `riscv64`: `undefined` \| `string` ; `s390`: `undefined` \| `string` ; `s390x`: `undefined` \| `string` ; `x64`: `undefined` \| `string` } |

#### Defined in

[GithubReleaseProvider.ts:252](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L252)

---

### isArchiveUrlAllowed

▸ **isArchiveUrlAllowed**(`url`): `boolean`

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `url` | `string` |

#### Returns

`boolean`

#### Defined in

[GithubReleaseProvider.ts:215](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L215)

---

### isValidRelease

▸ **isValidRelease**(`release`): `boolean`

#### Parameters

| Name      | Type                                                  |
| :-------- | :---------------------------------------------------- |
| `release` | [`GithubRelease`](../interfaces/api.GithubRelease.md) |

#### Returns

`boolean`

#### Defined in

[GithubReleaseProvider.ts:139](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L139)

---

### platformRegex

▸ **platformRegex**(`os`, `aliases`): `RegExp`

#### Parameters

| Name      | Type       |
| :-------- | :--------- |
| `os`      | `Platform` |
| `aliases` | `string`[] |

#### Returns

`RegExp`

#### Defined in

[GithubReleaseProvider.ts:223](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L223)

---

### reduceReleases

▸ **reduceReleases**(`refetch?`): `Promise`\<[`Release`](../modules/Gobot.md#release)[]\>

#### Parameters

| Name      | Type      | Default value |
| :-------- | :-------- | :------------ |
| `refetch` | `boolean` | `false`       |

#### Returns

`Promise`\<[`Release`](../modules/Gobot.md#release)[]\>

#### Defined in

[GithubReleaseProvider.ts:146](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L146)

---

### remoteReleases

▸ **remoteReleases**(`force?`): `Promise`\<`GithubReleaseCollection`\>

#### Parameters

| Name    | Type      | Default value |
| :------ | :-------- | :------------ |
| `force` | `boolean` | `false`       |

#### Returns

`Promise`\<`GithubReleaseCollection`\>

#### Defined in

[GithubReleaseProvider.ts:168](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L168)
