## Table of contents

### Classes

- [Gobot](../classes/Gobot.Gobot.md)

### Interfaces

- [GobotOptions](../interfaces/Gobot.GobotOptions.md)

### Type Aliases

- [ArchKey](Gobot.md#archkey)
- [PlatformKey](Gobot.md#platformkey)
- [StoredRelease](Gobot.md#storedrelease)

## Type Aliases

### ArchKey

Ƭ **ArchKey**: `NodeJS.Architecture`

#### Defined in

[Gobot.ts:29](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L29)

___

### PlatformKey

Ƭ **PlatformKey**: `NodeJS.Platform`

#### Defined in

[Gobot.ts:28](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L28)

___

### StoredRelease

Ƭ **StoredRelease**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `archives` | \{ [osName in PlatformKey]?: \{ [archName in ArchKey]?: string } } |
| `version` | `string` |

#### Defined in

[Gobot.ts:31](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L31)
