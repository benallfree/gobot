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

[GithubReleaseProvider.ts:124](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L124)

## Properties

### repo

• `Protected` **repo**: `string`

#### Defined in

[GithubReleaseProvider.ts:120](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L120)

## Accessors

### allowBareFiles

• `get` **allowBareFiles**(): `boolean`

#### Returns

`boolean`

#### Defined in

[GithubReleaseProvider.ts:209](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L209)

---

### allowedExts

• `get` **allowedExts**(): `string`[]

#### Returns

`string`[]

#### Defined in

[GithubReleaseProvider.ts:217](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L217)

---

### excludedExts

• `get` **excludedExts**(): `string`[]

#### Returns

`string`[]

#### Defined in

[GithubReleaseProvider.ts:213](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L213)

---

### platformMap

• `get` **platformMap**(): `Object`

#### Returns

`Object`

| Name      | Type                                    |
| :-------- | :-------------------------------------- |
| `darwin`  | `ReadonlyObjectDeep`\<`PlatformEntry`\> |
| `freebsd` | `ReadonlyObjectDeep`\<`PlatformEntry`\> |
| `linux`   | `ReadonlyObjectDeep`\<`PlatformEntry`\> |
| `win32`   | `ReadonlyObjectDeep`\<`PlatformEntry`\> |

#### Defined in

[GithubReleaseProvider.ts:205](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L205)

---

### releasesKey

• `get` **releasesKey**(): `string`

#### Returns

`string`

#### Defined in

[GithubReleaseProvider.ts:170](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L170)

---

### slug

• `get` **slug**(): `string`

#### Returns

`string`

#### Defined in

[GithubReleaseProvider.ts:141](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L141)

## Methods

### archRegex

▸ **archRegex**(`os`, `arch`, `aliases`): `RegExp`

#### Parameters

| Name      | Type           |
| :-------- | :------------- |
| `os`      | `Platform`     |
| `arch`    | `Architecture` |
| `aliases` | `string`[]     |

#### Returns

`RegExp`

#### Defined in

[GithubReleaseProvider.ts:236](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L236)

---

### clearCache

▸ **clearCache**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[GithubReleaseProvider.ts:137](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L137)

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

[GithubReleaseProvider.ts:300](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L300)

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

[GithubReleaseProvider.ts:243](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L243)

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

[GithubReleaseProvider.ts:253](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L253)

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

[GithubReleaseProvider.ts:261](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L261)

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

[GithubReleaseProvider.ts:221](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L221)

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

[GithubReleaseProvider.ts:145](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L145)

---

### platformRegex

▸ **platformRegex**(`os`, `arch`, `aliases`): `RegExp`

#### Parameters

| Name      | Type           |
| :-------- | :------------- |
| `os`      | `Platform`     |
| `arch`    | `Architecture` |
| `aliases` | `string`[]     |

#### Returns

`RegExp`

#### Defined in

[GithubReleaseProvider.ts:229](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L229)

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

[GithubReleaseProvider.ts:152](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L152)

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

[GithubReleaseProvider.ts:174](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.32/src/GithubReleaseProvider.ts#L174)
