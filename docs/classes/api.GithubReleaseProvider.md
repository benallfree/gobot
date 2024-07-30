[api](../modules/api.md).GithubReleaseProvider

## Table of contents

### Constructors

- [constructor](api.GithubReleaseProvider.md#constructor)

### Properties

- [repo](api.GithubReleaseProvider.md#repo)

### Accessors

- [allowedExts](api.GithubReleaseProvider.md#allowedexts)
- [className](api.GithubReleaseProvider.md#classname)
- [excludedExts](api.GithubReleaseProvider.md#excludedexts)
- [platformMap](api.GithubReleaseProvider.md#platformmap)
- [releasesKey](api.GithubReleaseProvider.md#releaseskey)

### Methods

- [archRegex](api.GithubReleaseProvider.md#archregex)
- [clearCache](api.GithubReleaseProvider.md#clearcache)
- [extractVersionFromTag](api.GithubReleaseProvider.md#extractversionfromtag)
- [getAllUrlsForRelease](api.GithubReleaseProvider.md#getallurlsforrelease)
- [getAllowedUrlsForRelease](api.GithubReleaseProvider.md#getallowedurlsforrelease)
- [getArchivesForRelease](api.GithubReleaseProvider.md#getarchivesforrelease)
- [isArchiveUrlAllowed](api.GithubReleaseProvider.md#isarchiveurlallowed)
- [isValidReleaseVersion](api.GithubReleaseProvider.md#isvalidreleaseversion)
- [platformRegex](api.GithubReleaseProvider.md#platformregex)
- [reduceReleases](api.GithubReleaseProvider.md#reducereleases)
- [remoteReleases](api.GithubReleaseProvider.md#remotereleases)
- [reset](api.GithubReleaseProvider.md#reset)

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

[GithubReleaseProvider.ts:130](https://github.com/benallfree/gobot/blob/main/src/GithubReleaseProvider.ts#L130)

## Properties

### repo

• `Protected` **repo**: `string`

#### Defined in

[GithubReleaseProvider.ts:125](https://github.com/benallfree/gobot/blob/main/src/GithubReleaseProvider.ts#L125)

## Accessors

### allowedExts

• `get` **allowedExts**(): `string`[]

#### Returns

`string`[]

#### Defined in

[GithubReleaseProvider.ts:236](https://github.com/benallfree/gobot/blob/main/src/GithubReleaseProvider.ts#L236)

---

### className

• `get` **className**(): `string`

#### Returns

`string`

#### Defined in

[GithubReleaseProvider.ts:151](https://github.com/benallfree/gobot/blob/main/src/GithubReleaseProvider.ts#L151)

---

### excludedExts

• `get` **excludedExts**(): `string`[]

#### Returns

`string`[]

#### Defined in

[GithubReleaseProvider.ts:232](https://github.com/benallfree/gobot/blob/main/src/GithubReleaseProvider.ts#L232)

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

[GithubReleaseProvider.ts:228](https://github.com/benallfree/gobot/blob/main/src/GithubReleaseProvider.ts#L228)

---

### releasesKey

• `get` **releasesKey**(): `string`

#### Returns

`string`

#### Defined in

[GithubReleaseProvider.ts:181](https://github.com/benallfree/gobot/blob/main/src/GithubReleaseProvider.ts#L181)

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

[GithubReleaseProvider.ts:257](https://github.com/benallfree/gobot/blob/main/src/GithubReleaseProvider.ts#L257)

---

### clearCache

▸ **clearCache**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[GithubReleaseProvider.ts:147](https://github.com/benallfree/gobot/blob/main/src/GithubReleaseProvider.ts#L147)

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

[GithubReleaseProvider.ts:319](https://github.com/benallfree/gobot/blob/main/src/GithubReleaseProvider.ts#L319)

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

[GithubReleaseProvider.ts:264](https://github.com/benallfree/gobot/blob/main/src/GithubReleaseProvider.ts#L264)

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

[GithubReleaseProvider.ts:273](https://github.com/benallfree/gobot/blob/main/src/GithubReleaseProvider.ts#L273)

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

[GithubReleaseProvider.ts:280](https://github.com/benallfree/gobot/blob/main/src/GithubReleaseProvider.ts#L280)

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

[GithubReleaseProvider.ts:240](https://github.com/benallfree/gobot/blob/main/src/GithubReleaseProvider.ts#L240)

---

### isValidReleaseVersion

▸ **isValidReleaseVersion**(`release`): `boolean`

#### Parameters

| Name      | Type                                                  |
| :-------- | :---------------------------------------------------- |
| `release` | [`GithubRelease`](../interfaces/api.GithubRelease.md) |

#### Returns

`boolean`

#### Defined in

[GithubReleaseProvider.ts:155](https://github.com/benallfree/gobot/blob/main/src/GithubReleaseProvider.ts#L155)

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

[GithubReleaseProvider.ts:250](https://github.com/benallfree/gobot/blob/main/src/GithubReleaseProvider.ts#L250)

---

### reduceReleases

▸ **reduceReleases**(): `Promise`\<[`Release`](../modules/Gobot.md#release)[]\>

#### Returns

`Promise`\<[`Release`](../modules/Gobot.md#release)[]\>

#### Defined in

[GithubReleaseProvider.ts:162](https://github.com/benallfree/gobot/blob/main/src/GithubReleaseProvider.ts#L162)

---

### remoteReleases

▸ **remoteReleases**(): `Promise`\<`GithubReleaseCollection`\>

Fetch the remote releases from the Github API.

#### Returns

`Promise`\<`GithubReleaseCollection`\>

#### Defined in

[GithubReleaseProvider.ts:197](https://github.com/benallfree/gobot/blob/main/src/GithubReleaseProvider.ts#L197)

---

### reset

▸ **reset**(): `Promise`\<`void`\>

Reset the cache entirely.

#### Returns

`Promise`\<`void`\>

#### Defined in

[GithubReleaseProvider.ts:188](https://github.com/benallfree/gobot/blob/main/src/GithubReleaseProvider.ts#L188)
