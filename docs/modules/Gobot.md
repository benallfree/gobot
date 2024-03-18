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

[Gobot.ts:33](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.24/src/Gobot.ts#L33)

___

### PlatformKey

Ƭ **PlatformKey**: `NodeJS.Platform`

#### Defined in

[Gobot.ts:32](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.24/src/Gobot.ts#L32)

___

### StoredRelease

Ƭ **StoredRelease**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `archives` | \{ [osName in PlatformKey]?: \{ [archName in ArchKey]?: string } } |
| `version` | `string` |

#### Defined in

[Gobot.ts:35](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.24/src/Gobot.ts#L35)

___

### VersionFormat

Ƭ **VersionFormat**: typeof [`VERSION_FORMATS`](../classes/Gobot.Gobot.md#version_formats)[`number`]

#### Defined in

[Gobot.ts:57](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.24/src/Gobot.ts#L57)
