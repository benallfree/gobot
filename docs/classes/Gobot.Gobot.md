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
- [version](Gobot.Gobot.md#version)
- [VERSION_FORMATS](Gobot.Gobot.md#version_formats)

### Accessors

- [binName](Gobot.Gobot.md#binname)
- [className](Gobot.Gobot.md#classname)
- [name](Gobot.Gobot.md#name)

### Methods

- [allPlatforms](Gobot.Gobot.md#allplatforms)
- [archiveDirPath](Gobot.Gobot.md#archivedirpath)
- [archiveFilePathFromUrl](Gobot.Gobot.md#archivefilepathfromurl)
- [cachePath](Gobot.Gobot.md#cachepath)
- [clearAllReleases](Gobot.Gobot.md#clearallreleases)
- [compare](Gobot.Gobot.md#compare)
- [download](Gobot.Gobot.md#download)
- [filterArgs](Gobot.Gobot.md#filterargs)
- [findBinFilePathInArchiveDir](Gobot.Gobot.md#findbinfilepathinarchivedir)
- [getBinaryFilePath](Gobot.Gobot.md#getbinaryfilepath)
- [getLatestVersion](Gobot.Gobot.md#getlatestversion)
- [getSatisfyingVersions](Gobot.Gobot.md#getsatisfyingversions)
- [hasAnyBuildForVersion](Gobot.Gobot.md#hasanybuildforversion)
- [maxSatisfyingRelease](Gobot.Gobot.md#maxsatisfyingrelease)
- [maxSatisfyingVersion](Gobot.Gobot.md#maxsatisfyingversion)
- [releases](Gobot.Gobot.md#releases)
- [reset](Gobot.Gobot.md#reset)
- [run](Gobot.Gobot.md#run)
- [satisfies](Gobot.Gobot.md#satisfies)
- [unpack](Gobot.Gobot.md#unpack)
- [update](Gobot.Gobot.md#update)
- [versions](Gobot.Gobot.md#versions)
- [DEFAULT_GOBOT_CACHE_ROOT](Gobot.Gobot.md#default_gobot_cache_root)
- [reset](Gobot.Gobot.md#reset-1)

## Constructors

### constructor

• **new Gobot**(`repo`, `releaseProviderFactory`, `optionsIn?`): [`Gobot`](Gobot.Gobot.md)

Create a new Gobot

#### Parameters

| Name                     | Type                                                                                                 | Description                                               |
| :----------------------- | :--------------------------------------------------------------------------------------------------- | :-------------------------------------------------------- |
| `repo`                   | `string`                                                                                             | The repo name, in `<user>/<repo>` format.                 |
| `releaseProviderFactory` | (`repo`: `string`, `cacheRoot`: `string`) => [`GithubReleaseProvider`](api.GithubReleaseProvider.md) | -                                                         |
| `optionsIn`              | `Partial`\<[`GobotOptions`](../interfaces/Gobot.GobotOptions.md)\>                                   | Option overrides. `env` is passed to the spawned process. |

#### Returns

[`Gobot`](Gobot.Gobot.md)

#### Defined in

[Gobot.ts:91](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L91)

## Properties

### arch

• `Protected` **arch**: `Architecture`

#### Defined in

[Gobot.ts:79](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L79)

---

### cacheRoot

• `Protected` **cacheRoot**: `string`

#### Defined in

[Gobot.ts:82](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L82)

---

### env

• `Protected` **env**: `ProcessEnv`

#### Defined in

[Gobot.ts:81](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L81)

---

### os

• `Protected` **os**: `Platform`

#### Defined in

[Gobot.ts:78](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L78)

---

### releaseProvider

• `Protected` **releaseProvider**: [`GithubReleaseProvider`](api.GithubReleaseProvider.md)

#### Defined in

[Gobot.ts:83](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L83)

---

### repo

• `Protected` **repo**: `string`

#### Defined in

[Gobot.ts:77](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L77)

---

### version

• `Protected` **version**: `string`

#### Defined in

[Gobot.ts:80](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L80)

---

### VERSION_FORMATS

▪ `Static` **VERSION_FORMATS**: readonly [``"js"``, ``"txt"``, ``"json"``, ``"cjs"``, ``"esm"``, ``"md"``]

#### Defined in

[Gobot.ts:75](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L75)

## Accessors

### binName

• `get` **binName**(): `string`

#### Returns

`string`

#### Defined in

[Gobot.ts:234](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L234)

---

### className

• `get` **className**(): `string`

#### Returns

`string`

#### Defined in

[Gobot.ts:132](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L132)

---

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[Gobot.ts:136](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L136)

## Methods

### allPlatforms

▸ **allPlatforms**(): `Promise`\<`Platform`[]\>

#### Returns

`Promise`\<`Platform`[]\>

#### Defined in

[Gobot.ts:409](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L409)

---

### archiveDirPath

▸ **archiveDirPath**(`version`): `string`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `version` | `string` |

#### Returns

`string`

#### Defined in

[Gobot.ts:259](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L259)

---

### archiveFilePathFromUrl

▸ **archiveFilePathFromUrl**(`version`, `url`): `string`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `version` | `string` |
| `url`     | `string` |

#### Returns

`string`

#### Defined in

[Gobot.ts:271](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L271)

---

### cachePath

▸ **cachePath**(`...paths`): `string`

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `...paths` | `string`[] |

#### Returns

`string`

#### Defined in

[Gobot.ts:140](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L140)

---

### clearAllReleases

▸ **clearAllReleases**(): `Promise`\<`void`\>

Clear releases index and underlying release provider cache.

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:185](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L185)

---

### compare

▸ **compare**(`a`, `b`): `-1` \| `0` \| `1`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `a`  | `string` |
| `b`  | `string` |

#### Returns

`-1` \| `0` \| `1`

#### Defined in

[Gobot.ts:348](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L348)

---

### download

▸ **download**(`force?`): `Promise`\<`void`\>

Download the binary for the specified semver.

#### Parameters

| Name     | Type      | Default value | Description                                             |
| :------- | :-------- | :------------ | :------------------------------------------------------ |
| `force?` | `boolean` | `false`       | If true, download the binary even if it already exists. |

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:168](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L168)

---

### filterArgs

▸ **filterArgs**(`args`): `string`[]

#### Parameters

| Name   | Type       |
| :----- | :--------- |
| `args` | `string`[] |

#### Returns

`string`[]

#### Defined in

[Gobot.ts:393](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L393)

---

### findBinFilePathInArchiveDir

▸ **findBinFilePathInArchiveDir**(`version`): `string`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `version` | `string` |

#### Returns

`string`

#### Defined in

[Gobot.ts:240](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L240)

---

### getBinaryFilePath

▸ **getBinaryFilePath**(`versionRange?`, `redownload?`): `Promise`\<`string`\>

#### Parameters

| Name           | Type      | Default value |
| :------------- | :-------- | :------------ |
| `versionRange` | `string`  | `undefined`   |
| `redownload`   | `boolean` | `false`       |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:288](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L288)

---

### getLatestVersion

▸ **getLatestVersion**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:362](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L362)

---

### getSatisfyingVersions

▸ **getSatisfyingVersions**(`range`): `Promise`\<`string`[]\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `range` | `string` |

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[Gobot.ts:356](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L356)

---

### hasAnyBuildForVersion

▸ **hasAnyBuildForVersion**(`version`): `Promise`\<`boolean`\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `version` | `string` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[Gobot.ts:397](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L397)

---

### maxSatisfyingRelease

▸ **maxSatisfyingRelease**(`range`): `Promise`\<`undefined` \| [`Release`](../modules/Gobot.md#release)\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `range` | `string` |

#### Returns

`Promise`\<`undefined` \| [`Release`](../modules/Gobot.md#release)\>

#### Defined in

[Gobot.ts:375](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L375)

---

### maxSatisfyingVersion

▸ **maxSatisfyingVersion**(`range`): `Promise`\<`undefined` \| `string`\>

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `range` | `string` |

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Defined in

[Gobot.ts:367](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L367)

---

### releases

▸ **releases**(): `Promise`\<[`Release`](../modules/Gobot.md#release)[]\>

#### Returns

`Promise`\<[`Release`](../modules/Gobot.md#release)[]\>

#### Defined in

[Gobot.ts:388](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L388)

---

### reset

▸ **reset**(): `Promise`\<`void`\>

Clear all items from cache (flush cache).

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:153](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L153)

---

### run

▸ **run**(`args`, `options?`, `onProc?`): `Promise`\<`number`\>

Run a binary

#### Parameters

| Name      | Type                                                                               | Description                                                                                                               |
| :-------- | :--------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ |
| `args`    | `string`[]                                                                         | Array of arguments to pass to the binary                                                                                  |
| `options` | `Partial`\<`SpawnOptionsWithStdioTuple`\<`StdioNull`, `StdioPipe`, `StdioPipe`\>\> | Spawn options specific to this run. `env` from these options is merged with `env` from Gobot constructor options, if any. |
| `onProc`  | (`proc`: `ChildProcessByStdio`\<`null`, `Readable`, `Readable`\>) => `void`        | Callback with child process after spawn() launches                                                                        |

#### Returns

`Promise`\<`number`\>

Exit code from spawned process

#### Defined in

[Gobot.ts:422](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L422)

---

### satisfies

▸ **satisfies**(`version`, `range`): `boolean`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `version` | `string` |
| `range`   | `string` |

#### Returns

`boolean`

#### Defined in

[Gobot.ts:352](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L352)

---

### unpack

▸ **unpack**(`archiveFilePath`, `destinationDirPath`): `Promise`\<`void`\>

#### Parameters

| Name                 | Type     |
| :------------------- | :------- |
| `archiveFilePath`    | `string` |
| `destinationDirPath` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:277](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L277)

---

### update

▸ **update**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:145](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L145)

---

### versions

▸ **versions**(`type?`, `includeWildcards?`): `Promise`\<`string`[]\>

#### Parameters

| Name                | Type      |
| :------------------ | :-------- |
| `type?`             | `"js"`    |
| `includeWildcards?` | `boolean` |

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[Gobot.ts:189](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L189)

▸ **versions**(`type`, `includeWildcards?`): `Promise`\<`string`\>

#### Parameters

| Name                | Type      |
| :------------------ | :-------- |
| `type`              | `"md"`    |
| `includeWildcards?` | `boolean` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:190](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L190)

▸ **versions**(`type`, `includeWildcards?`): `Promise`\<`string`\>

#### Parameters

| Name                | Type      |
| :------------------ | :-------- |
| `type`              | `"json"`  |
| `includeWildcards?` | `boolean` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:191](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L191)

▸ **versions**(`type`, `includeWildcards?`): `Promise`\<`string`\>

#### Parameters

| Name                | Type      |
| :------------------ | :-------- |
| `type`              | `"txt"`   |
| `includeWildcards?` | `boolean` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:192](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L192)

▸ **versions**(`type`, `includeWildcards?`): `Promise`\<`string`\>

#### Parameters

| Name                | Type      |
| :------------------ | :-------- |
| `type`              | `"cjs"`   |
| `includeWildcards?` | `boolean` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:193](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L193)

▸ **versions**(`type`, `includeWildcards?`): `Promise`\<`string`\>

#### Parameters

| Name                | Type      |
| :------------------ | :-------- |
| `type`              | `"esm"`   |
| `includeWildcards?` | `boolean` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:194](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L194)

---

### DEFAULT_GOBOT_CACHE_ROOT

▸ **DEFAULT_GOBOT_CACHE_ROOT**(`...paths`): `string`

The default Gobot cache root. This is platform specific.

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `...paths` | `string`[] |

#### Returns

`string`

#### Defined in

[Gobot.ts:72](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L72)

---

### reset

▸ **reset**(`cachePath?`): `Promise`\<`void`\>

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `cachePath` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:158](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L158)
