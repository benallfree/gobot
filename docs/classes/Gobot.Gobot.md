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
- [VERSION_FORMATS](Gobot.Gobot.md#version_formats)

### Accessors

- [binName](Gobot.Gobot.md#binname)
- [className](Gobot.Gobot.md#classname)
- [name](Gobot.Gobot.md#name)

### Methods

- [allPlatforms](Gobot.Gobot.md#allplatforms)
- [archivePath](Gobot.Gobot.md#archivepath)
- [archiveRoot](Gobot.Gobot.md#archiveroot)
- [cachePath](Gobot.Gobot.md#cachepath)
- [clearAllReleases](Gobot.Gobot.md#clearallreleases)
- [clearStoredReleases](Gobot.Gobot.md#clearstoredreleases)
- [compare](Gobot.Gobot.md#compare)
- [download](Gobot.Gobot.md#download)
- [filterArgs](Gobot.Gobot.md#filterargs)
- [findArchiveBinPath](Gobot.Gobot.md#findarchivebinpath)
- [getBinaryPath](Gobot.Gobot.md#getbinarypath)
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
- [reset](Gobot.Gobot.md#reset-1)

## Constructors

### constructor

• **new Gobot**(`repo`, `releaseProviderFactory`, `optionsIn?`): [`Gobot`](Gobot.Gobot.md)

Create a new Gobot

#### Parameters

| Name                     | Type                                                                                                 | Description                               |
| :----------------------- | :--------------------------------------------------------------------------------------------------- | :---------------------------------------- |
| `repo`                   | `string`                                                                                             | The repo name, in `<user>/<repo>` format. |
| `releaseProviderFactory` | (`repo`: `string`, `cacheRoot`: `string`) => [`GithubReleaseProvider`](api.GithubReleaseProvider.md) | -                                         |
| `optionsIn`              | `Partial`\<[`GobotOptions`](../interfaces/Gobot.GobotOptions.md)\>                                   | Option overrides                          |

#### Returns

[`Gobot`](Gobot.Gobot.md)

#### Defined in

[Gobot.ts:85](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L85)

## Properties

### arch

• `Protected` **arch**: `Architecture`

#### Defined in

[Gobot.ts:72](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L72)

---

### cacheRoot

• `Protected` **cacheRoot**: `string`

#### Defined in

[Gobot.ts:75](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L75)

---

### env

• `Protected` **env**: `ProcessEnv`

#### Defined in

[Gobot.ts:74](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L74)

---

### os

• `Protected` **os**: `Platform`

#### Defined in

[Gobot.ts:71](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L71)

---

### releaseProvider

• `Protected` **releaseProvider**: [`GithubReleaseProvider`](api.GithubReleaseProvider.md)

#### Defined in

[Gobot.ts:77](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L77)

---

### repo

• `Protected` **repo**: `string`

#### Defined in

[Gobot.ts:70](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L70)

---

### storedReleases

• `Protected` **storedReleases**: `undefined` \| [`Release`](../modules/Gobot.md#release)[] = `undefined`

#### Defined in

[Gobot.ts:76](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L76)

---

### version

• `Protected` **version**: `string`

#### Defined in

[Gobot.ts:73](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L73)

---

### VERSION_FORMATS

▪ `Static` **VERSION_FORMATS**: readonly [``"js"``, ``"txt"``, ``"json"``, ``"cjs"``, ``"esm"``, ``"md"``]

The default Gobot cache root. This is platform specific.

#### Defined in

[Gobot.ts:68](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L68)

## Accessors

### binName

• `get` **binName**(): `string`

#### Returns

`string`

#### Defined in

[Gobot.ts:215](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L215)

---

### className

• `get` **className**(): `string`

#### Returns

`string`

#### Defined in

[Gobot.ts:122](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L122)

---

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[Gobot.ts:126](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L126)

## Methods

### allPlatforms

▸ **allPlatforms**(): `Promise`\<`Platform`[]\>

#### Returns

`Promise`\<`Platform`[]\>

#### Defined in

[Gobot.ts:383](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L383)

---

### archivePath

▸ **archivePath**(`version`, `url`): `string`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `version` | `string` |
| `url`     | `string` |

#### Returns

`string`

#### Defined in

[Gobot.ts:251](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L251)

---

### archiveRoot

▸ **archiveRoot**(`version`): `string`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `version` | `string` |

#### Returns

`string`

#### Defined in

[Gobot.ts:240](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L240)

---

### cachePath

▸ **cachePath**(`...paths`): (...`paths`: `string`[]) => `string`

#### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `...paths` | `string`[] |

#### Returns

`fn`

▸ (`...paths`): `string`

##### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `...paths` | `string`[] |

##### Returns

`string`

#### Defined in

[Gobot.ts:130](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L130)

---

### clearAllReleases

▸ **clearAllReleases**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:168](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L168)

---

### clearStoredReleases

▸ **clearStoredReleases**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:173](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L173)

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

[Gobot.ts:311](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L311)

---

### download

▸ **download**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:154](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L154)

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

[Gobot.ts:367](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L367)

---

### findArchiveBinPath

▸ **findArchiveBinPath**(`version`): `string`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `version` | `string` |

#### Returns

`string`

#### Defined in

[Gobot.ts:221](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L221)

---

### getBinaryPath

▸ **getBinaryPath**(`versionRangeIn?`): `Promise`\<`string`\>

#### Parameters

| Name              | Type     |
| :---------------- | :------- |
| `versionRangeIn?` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:271](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L271)

---

### getLatestVersion

▸ **getLatestVersion**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:324](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L324)

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

[Gobot.ts:319](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L319)

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

[Gobot.ts:371](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L371)

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

[Gobot.ts:337](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L337)

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

[Gobot.ts:329](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L329)

---

### releases

▸ **releases**(): `Promise`\<[`Release`](../modules/Gobot.md#release)[]\>

#### Returns

`Promise`\<[`Release`](../modules/Gobot.md#release)[]\>

#### Defined in

[Gobot.ts:350](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L350)

---

### reset

▸ **reset**(): `Promise`\<`void`\>

Clear all items from cache (flush cache).

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:144](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L144)

---

### run

▸ **run**(`args`, `options?`, `onProc?`): `Promise`\<`number`\>

Run a binary

#### Parameters

| Name      | Type                                                                               | Description                                        |
| :-------- | :--------------------------------------------------------------------------------- | :------------------------------------------------- |
| `args`    | `string`[]                                                                         | Array of arguments to pass to the binary           |
| `options` | `Partial`\<`SpawnOptionsWithStdioTuple`\<`StdioNull`, `StdioPipe`, `StdioPipe`\>\> | Spawn options                                      |
| `onProc`  | (`proc`: `ChildProcessByStdio`\<`null`, `Readable`, `Readable`\>) => `void`        | Callback with child process after spawn() launches |

#### Returns

`Promise`\<`number`\>

Exit code from spawned process

#### Defined in

[Gobot.ts:396](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L396)

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

[Gobot.ts:315](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L315)

---

### unpack

▸ **unpack**(`downloadPath`, `version`): `Promise`\<`void`\>

#### Parameters

| Name           | Type     |
| :------------- | :------- |
| `downloadPath` | `string` |
| `version`      | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:257](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L257)

---

### update

▸ **update**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[Gobot.ts:136](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L136)

---

### versions

▸ **versions**(`type?`): `Promise`\<`string`[]\>

#### Parameters

| Name    | Type   |
| :------ | :----- |
| `type?` | `"js"` |

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[Gobot.ts:177](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L177)

▸ **versions**(`type?`): `Promise`\<`string`\>

#### Parameters

| Name    | Type   |
| :------ | :----- |
| `type?` | `"md"` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:178](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L178)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `type` | `"json"` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:179](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L179)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name   | Type    |
| :----- | :------ |
| `type` | `"txt"` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:180](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L180)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name   | Type    |
| :----- | :------ |
| `type` | `"cjs"` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:181](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L181)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name   | Type    |
| :----- | :------ |
| `type` | `"esm"` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[Gobot.ts:182](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L182)

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

[Gobot.ts:149](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L149)
