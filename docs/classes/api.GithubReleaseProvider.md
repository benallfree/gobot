[api](../modules/api.md).GithubReleaseProvider

## Table of contents

### Constructors

- [constructor](api.GithubReleaseProvider.md#constructor)

### Properties

- [repo](api.GithubReleaseProvider.md#repo)

### Accessors

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

[GithubReleaseProvider.ts:125](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.33/src/GithubReleaseProvider.ts#L125)

## Properties

### repo

• `Protected` **repo**: `string`

#### Defined in

[GithubReleaseProvider.ts:120](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.33/src/GithubReleaseProvider.ts#L120)

## Accessors

### allowedExts

• `get` **allowedExts**(): `string`[]

#### Returns

`string`[]

#### Defined in

[GithubReleaseProvider.ts:218](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.33/src/GithubReleaseProvider.ts#L218)

---

### excludedExts

• `get` **excludedExts**(): `string`[]

#### Returns

`string`[]

#### Defined in

[GithubReleaseProvider.ts:214](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.33/src/GithubReleaseProvider.ts#L214)

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

[GithubReleaseProvider.ts:210](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.33/src/GithubReleaseProvider.ts#L210)

---

### releasesKey

• `get` **releasesKey**(): `string`

#### Returns

`string`

#### Defined in

[GithubReleaseProvider.ts:175](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.33/src/GithubReleaseProvider.ts#L175)

---

### slug

• `get` **slug**(): `string`

#### Returns

`string`

#### Defined in

[GithubReleaseProvider.ts:146](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.33/src/GithubReleaseProvider.ts#L146)

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

[GithubReleaseProvider.ts:237](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.33/src/GithubReleaseProvider.ts#L237)

---

### clearCache

▸ **clearCache**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[GithubReleaseProvider.ts:142](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.33/src/GithubReleaseProvider.ts#L142)

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

[GithubReleaseProvider.ts:301](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.33/src/GithubReleaseProvider.ts#L301)

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

[GithubReleaseProvider.ts:244](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.33/src/GithubReleaseProvider.ts#L244)

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

[GithubReleaseProvider.ts:254](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.33/src/GithubReleaseProvider.ts#L254)

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

[GithubReleaseProvider.ts:262](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.33/src/GithubReleaseProvider.ts#L262)

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

[GithubReleaseProvider.ts:222](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.33/src/GithubReleaseProvider.ts#L222)

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

[GithubReleaseProvider.ts:150](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.33/src/GithubReleaseProvider.ts#L150)

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

[GithubReleaseProvider.ts:230](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.33/src/GithubReleaseProvider.ts#L230)

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

[GithubReleaseProvider.ts:157](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.33/src/GithubReleaseProvider.ts#L157)

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

[GithubReleaseProvider.ts:179](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.33/src/GithubReleaseProvider.ts#L179)
