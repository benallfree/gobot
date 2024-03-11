## Table of contents

### References

- [Gobot](api.md#gobot)
- [GobotOptions](api.md#gobotoptions)

### Classes

- [GithubReleaseProvider](../classes/api.GithubReleaseProvider.md)

### Interfaces

- [GithubRelease](../interfaces/api.GithubRelease.md)

### Type Aliases

- [AppInfo](api.md#appinfo)
- [GithubReleaseProviderOptions](api.md#githubreleaseprovideroptions)

### Functions

- [botRun](api.md#botrun)
- [gobot](api.md#gobot-1)
- [mergeConfig](api.md#mergeconfig)
- [mkGobot](api.md#mkgobot)

## References

### Gobot

Re-exports [Gobot](../classes/Gobot.Gobot.md)

___

### GobotOptions

Re-exports [GobotOptions](../interfaces/Gobot.GobotOptions.md)

## Type Aliases

### AppInfo

Ƭ **AppInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `homepage` | `string` |
| `name` | `string` |
| `slug` | `string` |
| `version` | `string` |

#### Defined in

[util/botrun.ts:8](https://github.com/benallfree/gobot/blob/main/src/util/botrun.ts#L8)

___

### GithubReleaseProviderOptions

Ƭ **GithubReleaseProviderOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `platformMap` | `PlatformMap` |

#### Defined in

[GithubReleaseProvider.ts:76](https://github.com/benallfree/gobot/blob/main/src/GithubReleaseProvider.ts#L76)

## Functions

### botRun

▸ **botRun**(`appInfo`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appInfo` | [`AppInfo`](api.md#appinfo) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[util/botrun.ts:15](https://github.com/benallfree/gobot/blob/main/src/util/botrun.ts#L15)

___

### gobot

▸ **gobot**(`pluginName`, `optionsIn?`): [`Gobot`](../classes/Gobot.Gobot.md)

Instantiate a gobot for a specific app.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pluginName` | `string` | `<app>` for officially supported apps, or `<user>/<repo>` for unofficial apps (your mileage may vary) |
| `optionsIn` | `Partial`\<[`GobotOptions`](../interfaces/Gobot.GobotOptions.md)\> | Option overrides |

#### Returns

[`Gobot`](../classes/Gobot.Gobot.md)

An instance of GobotBase

#### Defined in

[api.ts:30](https://github.com/benallfree/gobot/blob/main/src/api.ts#L30)

___

### mergeConfig

▸ **mergeConfig**\<`T`\>(`defaultConfig`, `...partialConfigs`): `T`

Merges a config object with defaults. Shallow copies root descendants,
skipping`undefined` values.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `defaultConfig` | `T` | The default config values |
| `...partialConfigs` | `Partial`\<`T`\>[] | A partial config to merge with defaults |

#### Returns

`T`

#### Defined in

[util/mergeConfig.ts:9](https://github.com/benallfree/gobot/blob/main/src/util/mergeConfig.ts#L9)

___

### mkGobot

▸ **mkGobot**(`pluginName`, `defaultOptionsIn?`): (`optionsIn`: `Partial`\<[`GobotOptions`](../interfaces/Gobot.GobotOptions.md)\>) => [`Gobot`](../classes/Gobot.Gobot.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pluginName` | `string` |
| `defaultOptionsIn` | `Partial`\<[`GobotOptions`](../interfaces/Gobot.GobotOptions.md)\> |

#### Returns

`fn`

▸ (`optionsIn?`): [`Gobot`](../classes/Gobot.Gobot.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `optionsIn` | `Partial`\<[`GobotOptions`](../interfaces/Gobot.GobotOptions.md)\> |

##### Returns

[`Gobot`](../classes/Gobot.Gobot.md)

#### Defined in

[api.ts:67](https://github.com/benallfree/gobot/blob/main/src/api.ts#L67)
