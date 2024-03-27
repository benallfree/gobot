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

- [cliForApp](api.md#cliforapp)
- [gobot](api.md#gobot-1)
- [mergeConfig](api.md#mergeconfig)
- [mkGobot](api.md#mkgobot)

## References

### Gobot

Re-exports [Gobot](../classes/Gobot.Gobot.md)

---

### GobotOptions

Re-exports [GobotOptions](../interfaces/Gobot.GobotOptions.md)

## Type Aliases

### AppInfo

Ƭ **AppInfo**: `Object`

#### Type declaration

| Name          | Type                     |
| :------------ | :----------------------- |
| `description` | `string`                 |
| `factory`     | `AppFactory` \| `string` |
| `homepage`    | `string`                 |
| `isAlpha`     | `boolean`                |
| `name`        | `string`                 |
| `version?`    | `string`                 |

#### Defined in

[apps/index.ts:4](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/apps/index.ts#L4)

---

### GithubReleaseProviderOptions

Ƭ **GithubReleaseProviderOptions**: `Object`

#### Type declaration

| Name             | Type      |
| :--------------- | :-------- |
| `allowBareFiles` | `boolean` |

#### Defined in

[GithubReleaseProvider.ts:96](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/GithubReleaseProvider.ts#L96)

## Functions

### cliForApp

▸ **cliForApp**(`appInfo`): `Cmd`

#### Parameters

| Name      | Type                        |
| :-------- | :-------------------------- |
| `appInfo` | [`AppInfo`](api.md#appinfo) |

#### Returns

`Cmd`

#### Defined in

[util/cliForApp.ts:7](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/util/cliForApp.ts#L7)

---

### gobot

▸ **gobot**(`appSlugOrPath`, `optionsIn?`): `Promise`\<[`Gobot`](../classes/Gobot.Gobot.md)\>

Instantiate a gobot for a specific app.

#### Parameters

| Name            | Type                                                               | Description                                                                                           |
| :-------------- | :----------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------- |
| `appSlugOrPath` | `string`                                                           | `<app>` for officially supported apps, or `<user>/<repo>` for unofficial apps (your mileage may vary) |
| `optionsIn`     | `Partial`\<[`GobotOptions`](../interfaces/Gobot.GobotOptions.md)\> | Option overrides                                                                                      |

#### Returns

`Promise`\<[`Gobot`](../classes/Gobot.Gobot.md)\>

An instance of GobotBase

#### Defined in

[api.ts:33](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/api.ts#L33)

---

### mergeConfig

▸ **mergeConfig**\<`T`\>(`defaultConfig`, `...partialConfigs`): `T`

Merges a config object with defaults. Shallow copies root descendants,
skipping`undefined` values.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name                | Type               | Description                             |
| :------------------ | :----------------- | :-------------------------------------- |
| `defaultConfig`     | `T`                | The default config values               |
| `...partialConfigs` | `Partial`\<`T`\>[] | A partial config to merge with defaults |

#### Returns

`T`

#### Defined in

[util/mergeConfig.ts:9](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/util/mergeConfig.ts#L9)

---

### mkGobot

▸ **mkGobot**(`appName`, `defaultOptionsIn?`): (`optionsIn`: `Partial`\<[`GobotOptions`](../interfaces/Gobot.GobotOptions.md)\>) => `Promise`\<[`Gobot`](../classes/Gobot.Gobot.md)\>

#### Parameters

| Name               | Type                                                               |
| :----------------- | :----------------------------------------------------------------- |
| `appName`          | `string`                                                           |
| `defaultOptionsIn` | `Partial`\<[`GobotOptions`](../interfaces/Gobot.GobotOptions.md)\> |

#### Returns

`fn`

▸ (`optionsIn?`): `Promise`\<[`Gobot`](../classes/Gobot.Gobot.md)\>

##### Parameters

| Name        | Type                                                               |
| :---------- | :----------------------------------------------------------------- |
| `optionsIn` | `Partial`\<[`GobotOptions`](../interfaces/Gobot.GobotOptions.md)\> |

##### Returns

`Promise`\<[`Gobot`](../classes/Gobot.Gobot.md)\>

#### Defined in

[api.ts:71](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.34/src/api.ts#L71)
