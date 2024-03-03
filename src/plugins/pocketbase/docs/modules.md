## Table of contents

### Functions

- [arch](modules.md#arch)
- [cachePath](modules.md#cachepath)
- [clearCache](modules.md#clearcache)
- [download](modules.md#download)
- [env](modules.md#env)
- [getAllVersionTags](modules.md#getallversiontags)
- [getAvailableVersionsPath](modules.md#getavailableversionspath)
- [getLatestVersion](modules.md#getlatestversion)
- [getMatchingVersion](modules.md#getmatchingversion)
- [getMatchingVersions](modules.md#getmatchingversions)
- [getPocketBasePath](modules.md#getpocketbasepath)
- [os](modules.md#os)
- [run](modules.md#run)
- [version](modules.md#version)

## Functions

### arch

▸ **arch**(`newValue?`): `ArchValue`

Get or set the architecture. This is the global default used whenever an architecture is not explicitly set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newValue?` | `ArchValue` | The new value to set, one of `amd64`, `arm64`, or `arm7` |

#### Returns

`ArchValue`

#### Defined in

settings/arch.ts:45

___

### cachePath

▸ **cachePath**(`newValue?`): `string`

Get or set the path pbGo us using to save all cached items to disk. The path will be created if it does not exist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue?` | `string` |

#### Returns

`string`

#### Defined in

settings/cache.ts:19

___

### clearCache

▸ **clearCache**(): `void`

Clear all items from cache (flush cache).

#### Returns

`void`

#### Defined in

settings/cache.ts:11

___

### download

▸ **download**(`options?`): `Promise`\<`void`\>

Download one or more versions of PocketBase (default latest version for host machine). Downloads up to 10 binaries concurrently.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`\<`DownloadOptions`\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

download.ts:20

___

### env

▸ **env**(`newValue?`): `ProcessEnv`

Get or set environment variables to pass to PocketBase at launch.

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue?` | `ProcessEnv` |

#### Returns

`ProcessEnv`

#### Defined in

settings/env.ts:8

___

### getAllVersionTags

▸ **getAllVersionTags**(): `Promise`\<`string`[]\>

Query github and return all available release tags for PocketBase.

#### Returns

`Promise`\<`string`[]\>

#### Defined in

versions.ts:91

___

### getAvailableVersionsPath

▸ **getAvailableVersionsPath**(`type?`): `Promise`\<`string`\>

Return a formatted string of available versions in the requested format (`json`, `txt`, `esm`, or `cjs`)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `type` | `ReleaseType` | `ReleaseType.Json` | The format to return |

#### Returns

`Promise`\<`string`\>

#### Defined in

versions.ts:114

___

### getLatestVersion

▸ **getLatestVersion**(): `Promise`\<`string`\>

Return the most recent version number (semver) of PocketBase. Query github if cache is stale.

#### Returns

`Promise`\<`string`\>

The most recent version number (semver) of PocketBase

#### Defined in

versions.ts:125

___

### getMatchingVersion

▸ **getMatchingVersion**(`semver`): `Promise`\<`string`\>

Return the highest matching version.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `semver` | `string` | Version or range to match |

#### Returns

`Promise`\<`string`\>

#### Defined in

versions.ts:137

___

### getMatchingVersions

▸ **getMatchingVersions**(`semver`): `Promise`\<`string`[]\>

Return all matching versions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `semver` | `string` | Version or range to match |

#### Returns

`Promise`\<`string`[]\>

#### Defined in

versions.ts:154

___

### getPocketBasePath

▸ **getPocketBasePath**(`options?`): `Promise`\<`string`\>

Return the file path for the given binary profile (`version`, `os`, and `arch`, all defaulting to global settings which default to host machine compatibility)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`\<`BinaryProfile`\> |

#### Returns

`Promise`\<`string`\>

#### Defined in

getPocketBasePath.ts:62

___

### os

▸ **os**(`newValue?`): `PlatformValue`

Get or set the operating system global (one of: `linux`, `windows`, `darwin`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue?` | `PlatformValue` |

#### Returns

`PlatformValue`

#### Defined in

settings/os.ts:51

___

### run

▸ **run**(`args`, `options?`): `Promise`\<`ChildProcess`\>

Run PocketBase.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `string`[] | The arguments to pass to `spawn()` |
| `options` | `Partial`\<`RunOptions`\> | Globals will be used for `os`, `version`, `arch`, and `env` unless specified |

#### Returns

`Promise`\<`ChildProcess`\>

#### Defined in

run.ts:32

___

### version

▸ **version**(`newValue?`): `string`

Gets or sets the global semver.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newValue?` | `string` | The version (semver) to set. Default `*` |

#### Returns

`string`

#### Defined in

settings/version.ts:8
