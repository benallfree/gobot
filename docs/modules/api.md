## Table of contents

### Functions

- [gobot](api.md#gobot)

## Functions

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

[api.ts:15](https://github.com/benallfree/gobot/blob/276e50d/src/api.ts#L15)
