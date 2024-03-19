## Table of contents

### Classes

- [Gobot](../classes/Gobot.Gobot.md)

### Interfaces

- [GobotOptions](../interfaces/Gobot.GobotOptions.md)

### Type Aliases

- [ArchKey](Gobot.md#archkey)
- [PlatformKey](Gobot.md#platformkey)
- [StoredRelease](Gobot.md#storedrelease)
- [VersionFormat](Gobot.md#versionformat)

### Functions

- [mkGobot](Gobot.md#mkgobot)

## Type Aliases

### ArchKey

Ƭ **ArchKey**: `NodeJS.Architecture`

#### Defined in

[Gobot.ts:34](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.29/src/Gobot.ts#L34)

___

### PlatformKey

Ƭ **PlatformKey**: `NodeJS.Platform`

#### Defined in

[Gobot.ts:33](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.29/src/Gobot.ts#L33)

___

### StoredRelease

Ƭ **StoredRelease**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `archives` | \{ [osName in PlatformKey]?: \{ [archName in ArchKey]?: string } } |
| `version` | `string` |

#### Defined in

[Gobot.ts:36](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.29/src/Gobot.ts#L36)

___

### VersionFormat

Ƭ **VersionFormat**: typeof [`VERSION_FORMATS`](../classes/Gobot.Gobot.md#version_formats)[`number`]

#### Defined in

[Gobot.ts:58](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.29/src/Gobot.ts#L58)

## Functions

### mkGobot

▸ **mkGobot**(`repo`, `config?`): [`Gobot`](../classes/Gobot.Gobot.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `repo` | `string` |
| `config?` | [`GobotOptions`](../interfaces/Gobot.GobotOptions.md) |

#### Returns

[`Gobot`](../classes/Gobot.Gobot.md)

#### Defined in

[Gobot.ts:430](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.29/src/Gobot.ts#L430)
