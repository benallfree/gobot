## Table of contents

### Functions

- [gobot](api.md#gobot)

## Functions

### gobot

▸ **gobot**(`pluginName`, `optionsIn?`): [`GobotBase`](../classes/GobotBase.GobotBase.md)

Instantiate a gobot for a specific app.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pluginName` | ``"pocketbase"`` \| ``"caddy"`` \| ``"act"`` | `<app>` for officially supported apps, or `<user>/<repo>` for unofficial apps (your mileage may vary) |
| `optionsIn` | `Partial`\<[`GobotOptions`](../interfaces/GobotBase.GobotOptions.md)\> | Option overrides |

#### Returns

[`GobotBase`](../classes/GobotBase.GobotBase.md)

An instance of GobotBase

#### Defined in

[gobot.ts:11](https://github.com/benallfree/gobot/blob/e2aa217/src/gobot.ts#L11)