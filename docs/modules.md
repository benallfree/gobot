[pbgo](README.md) / Exports

# pbgo

## Table of contents

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue?` | `ArchValue` |

#### Returns

`ArchValue`

#### Defined in

[settings/arch.ts:37](https://github.com/pockethost/pbgo/blob/8de849f/src/settings/arch.ts#L37)

___

### cachePath

▸ **cachePath**(`newValue?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue?` | `string` |

#### Returns

`string`

#### Defined in

[settings/cache.ts:13](https://github.com/pockethost/pbgo/blob/8de849f/src/settings/cache.ts#L13)

___

### clearCache

▸ **clearCache**(): `void`

#### Returns

`void`

#### Defined in

[settings/cache.ts:8](https://github.com/pockethost/pbgo/blob/8de849f/src/settings/cache.ts#L8)

___

### download

▸ **download**(`options?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`\<`DownloadOptions`\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[download.ts:13](https://github.com/pockethost/pbgo/blob/8de849f/src/download.ts#L13)

___

### env

▸ **env**(`newValue?`): `ProcessEnv`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue?` | `ProcessEnv` |

#### Returns

`ProcessEnv`

#### Defined in

[settings/env.ts:3](https://github.com/pockethost/pbgo/blob/8de849f/src/settings/env.ts#L3)

___

### getAllVersionTags

▸ **getAllVersionTags**(`key?`): (...`args`: []) => `Promise`\<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `string` |

#### Returns

`fn`

▸ (`...args`): `Promise`\<`string`[]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] |

##### Returns

`Promise`\<`string`[]\>

#### Defined in

[versions.ts:22](https://github.com/pockethost/pbgo/blob/8de849f/src/versions.ts#L22)

___

### getAvailableVersionsPath

▸ **getAvailableVersionsPath**(`type?`): `Promise`\<`string`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `ReleaseType` | `ReleaseType.Json` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[versions.ts:103](https://github.com/pockethost/pbgo/blob/8de849f/src/versions.ts#L103)

___

### getFilteredVersionTags

▸ **getFilteredVersionTags**(`semver?`): `Promise`\<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semver` | `string` |

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[versions.ts:87](https://github.com/pockethost/pbgo/blob/8de849f/src/versions.ts#L87)

___

### getLatestVersion

▸ **getLatestVersion**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[versions.ts:110](https://github.com/pockethost/pbgo/blob/8de849f/src/versions.ts#L110)

___

### getPocketBasePath

▸ **getPocketBasePath**(`key?`): (...`args`: [options: Partial\<BinaryOptions\>]) => `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `string` |

#### Returns

`fn`

▸ (`...args`): `Promise`\<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [options: Partial\<BinaryOptions\>] |

##### Returns

`Promise`\<`string`\>

#### Defined in

[getPocketBasePath.ts:17](https://github.com/pockethost/pbgo/blob/8de849f/src/getPocketBasePath.ts#L17)

___

### os

▸ **os**(`newValue?`): `PlatformValue`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue?` | `PlatformValue` |

#### Returns

`PlatformValue`

#### Defined in

[settings/os.ts:43](https://github.com/pockethost/pbgo/blob/8de849f/src/settings/os.ts#L43)

___

### run

▸ **run**(`args`, `options?`): `Promise`\<`ChildProcess`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `string`[] |
| `options` | `Partial`\<`RunOptions`\> |

#### Returns

`Promise`\<`ChildProcess`\>

#### Defined in

[run.ts:19](https://github.com/pockethost/pbgo/blob/8de849f/src/run.ts#L19)

___

### version

▸ **version**(`newValue?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue?` | `string` |

#### Returns

`string`

#### Defined in

[settings/version.ts:3](https://github.com/pockethost/pbgo/blob/8de849f/src/settings/version.ts#L3)
