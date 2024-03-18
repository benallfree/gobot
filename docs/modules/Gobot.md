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

## Type Aliases

### ArchKey

Ƭ **ArchKey**: `NodeJS.Architecture`

#### Defined in

[Gobot.ts:34](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.26/src/Gobot.ts#L34)

___

### PlatformKey

Ƭ **PlatformKey**: `NodeJS.Platform`

#### Defined in

[Gobot.ts:33](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.26/src/Gobot.ts#L33)

___

### StoredRelease

Ƭ **StoredRelease**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `archives` | \{ [osName in PlatformKey]?: \{ [archName in ArchKey]?: string } } |
| `version` | `string` |

#### Defined in

[Gobot.ts:36](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.26/src/Gobot.ts#L36)

___

### VersionFormat

Ƭ **VersionFormat**: typeof [`VERSION_FORMATS`](../classes/Gobot.Gobot.md#version_formats)[`number`]

#### Defined in

[Gobot.ts:58](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.26/src/Gobot.ts#L58)
