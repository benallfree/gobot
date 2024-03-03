[pbgo](https://github.com/pockethost/pbgo/blob/main/readme.md) / Exports

# poGo API

This API is available so you can embed pbGo and PocketBase in your nodejs application.

### Functions

- [arch](modules.md#arch)
- [cachePath](modules.md#cachepath)
- [clearCache](modules.md#clearcache)
- [download](modules.md#download)
- [env](modules.md#env)
- [getAllVersionTags](modules.md#getallversiontags)
- [getAvailableVersionsPath](modules.md#getavailableversionspath)
- [getFilteredVersionTags](modules.md#getfilteredversiontags)
- [getLatestVersion](modules.md#getlatestversion)
- [getPocketBasePath](modules.md#getpocketbasepath)
- [os](modules.md#os)
- [run](modules.md#run)
- [version](modules.md#version)

## Functions

### arch

▸ **arch**(`newValue?`): `ArchValue`

Get or set the architecture. This is the global default used whenever an architecture is not explicitly set.

#### Parameters

| Name        | Type        | Description                                              |
| :---------- | :---------- | :------------------------------------------------------- |
| `newValue?` | `ArchValue` | The new value to set, one of `amd64`, `arm64`, or `arm7` |

#### Returns

`ArchValue`

#### Defined in

settings/arch.ts:45

---

### cachePath

▸ **cachePath**(`newValue?`): `string`

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `newValue?` | `string` |

#### Returns

`string`

#### Defined in

settings/cache.ts:13

---

### clearCache

▸ **clearCache**(): `void`

#### Returns

`void`

#### Defined in

settings/cache.ts:8

---

### download

▸ **download**(`options?`): `Promise`\<`void`\>

#### Parameters

| Name      | Type                           |
| :-------- | :----------------------------- |
| `options` | `Partial`\<`DownloadOptions`\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

download.ts:13

---

### env

▸ **env**(`newValue?`): `ProcessEnv`

#### Parameters

| Name        | Type         |
| :---------- | :----------- |
| `newValue?` | `ProcessEnv` |

#### Returns

`ProcessEnv`

#### Defined in

settings/env.ts:3

---

### getAllVersionTags

▸ **getAllVersionTags**(`key?`): (...`args`: []) => `Promise`\<`string`[]\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `key?` | `string` |

#### Returns

`fn`

▸ (`...args`): `Promise`\<`string`[]\>

##### Parameters

| Name      | Type |
| :-------- | :--- |
| `...args` | []   |

##### Returns

`Promise`\<`string`[]\>

#### Defined in

versions.ts:22

---

### getAvailableVersionsPath

▸ **getAvailableVersionsPath**(`type?`): `Promise`\<`string`\>

#### Parameters

| Name   | Type          | Default value      |
| :----- | :------------ | :----------------- |
| `type` | `ReleaseType` | `ReleaseType.Json` |

#### Returns

`Promise`\<`string`\>

#### Defined in

versions.ts:103

---

### getFilteredVersionTags

▸ **getFilteredVersionTags**(`semver?`): `Promise`\<`string`[]\>

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `semver` | `string` |

#### Returns

`Promise`\<`string`[]\>

#### Defined in

versions.ts:87

---

### getLatestVersion

▸ **getLatestVersion**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

versions.ts:110

---

### getPocketBasePath

▸ **getPocketBasePath**(`key?`): (...`args`: [options: Partial\<BinaryOptions\>]) => `Promise`\<`string`\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `key?` | `string` |

#### Returns

`fn`

▸ (`...args`): `Promise`\<`string`\>

##### Parameters

| Name      | Type                                |
| :-------- | :---------------------------------- |
| `...args` | [options: Partial\<BinaryOptions\>] |

##### Returns

`Promise`\<`string`\>

#### Defined in

getPocketBasePath.ts:17

---

### os

▸ **os**(`newValue?`): `PlatformValue`

#### Parameters

| Name        | Type            |
| :---------- | :-------------- |
| `newValue?` | `PlatformValue` |

#### Returns

`PlatformValue`

#### Defined in

settings/os.ts:43

---

### run

▸ **run**(`args`, `options?`): `Promise`\<`ChildProcess`\>

#### Parameters

| Name      | Type                      |
| :-------- | :------------------------ |
| `args`    | `string`[]                |
| `options` | `Partial`\<`RunOptions`\> |

#### Returns

`Promise`\<`ChildProcess`\>

#### Defined in

run.ts:19

---

### version

▸ **version**(`newValue?`): `string`

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `newValue?` | `string` |

#### Returns

`string`

#### Defined in

settings/version.ts:3
