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

### Variables

- [APPS\_MAP](api.md#apps_map)

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
| `description` | `string` |
| `homepage` | `string` |
| `name` | `string` |
| `slug` | `string` |
| `version?` | `string` |

#### Defined in

[apps/APPS_MAP.ts:1](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.18/src/apps/APPS_MAP.ts#L1)

___

### GithubReleaseProviderOptions

Ƭ **GithubReleaseProviderOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `platformMap` | `PlatformMap` |

#### Defined in

[GithubReleaseProvider.ts:76](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.18/src/GithubReleaseProvider.ts#L76)

## Variables

### APPS\_MAP

• `Const` **APPS\_MAP**: [`AppInfo`](api.md#appinfo)[]

#### Defined in

[apps/APPS_MAP.ts:9](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.18/src/apps/APPS_MAP.ts#L9)

## Functions

### botRun

▸ **botRun**(`appInfo`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appInfo` | `AppInfo` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[util/botrun.ts:15](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.18/src/util/botrun.ts#L15)

___

### gobot

▸ **gobot**(`appName`, `optionsIn?`): [`Gobot`](../classes/Gobot.Gobot.md)

Instantiate a gobot for a specific app.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appName` | `string` | `<app>` for officially supported apps, or `<user>/<repo>` for unofficial apps (your mileage may vary) |
| `optionsIn` | `Partial`\<[`GobotOptions`](../interfaces/Gobot.GobotOptions.md)\> | Option overrides |

#### Returns

[`Gobot`](../classes/Gobot.Gobot.md)

An instance of GobotBase

#### Defined in

[api.ts:33](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.18/src/api.ts#L33)

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

[util/mergeConfig.ts:9](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.18/src/util/mergeConfig.ts#L9)

___

### mkGobot

▸ **mkGobot**(`appName`, `defaultOptionsIn?`): (`optionsIn`: `Partial`\<[`GobotOptions`](../interfaces/Gobot.GobotOptions.md)\>) => [`Gobot`](../classes/Gobot.Gobot.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `appName` | `string` |
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

[api.ts:70](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.18/src/api.ts#L70)
