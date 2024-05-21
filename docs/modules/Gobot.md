## Table of contents

### Classes

- [Gobot](../classes/Gobot.Gobot.md)

### Interfaces

- [GobotOptions](../interfaces/Gobot.GobotOptions.md)

### Type Aliases

- [ArchKey](Gobot.md#archkey)
- [PlatformKey](Gobot.md#platformkey)
- [Release](Gobot.md#release)
- [VersionFormat](Gobot.md#versionformat)

### Variables

- [COMPRESSED_ARCHIVE_EXTS](Gobot.md#compressed_archive_exts)

### Functions

- [mkGobot](Gobot.md#mkgobot)

## Type Aliases

### ArchKey

Ƭ **ArchKey**: `NodeJS.Architecture`

#### Defined in

[Gobot.ts:32](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L32)

---

### PlatformKey

Ƭ **PlatformKey**: `NodeJS.Platform`

#### Defined in

[Gobot.ts:31](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L31)

---

### Release

Ƭ **Release**: `Object`

#### Type declaration

| Name          | Type                                                               |
| :------------ | :----------------------------------------------------------------- |
| `allUrls`     | `string`[]                                                         |
| `allowedUrls` | `string`[]                                                         |
| `archives`    | \{ [osName in PlatformKey]?: \{ [archName in ArchKey]?: string } } |
| `version`     | `string`                                                           |

#### Defined in

[Gobot.ts:34](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L34)

---

### VersionFormat

Ƭ **VersionFormat**: typeof [`VERSION_FORMATS`](../classes/Gobot.Gobot.md#version_formats)[`number`]

#### Defined in

[Gobot.ts:58](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L58)

## Variables

### COMPRESSED_ARCHIVE_EXTS

• `Const` **COMPRESSED_ARCHIVE_EXTS**: `string`[]

#### Defined in

[Gobot.ts:60](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L60)

## Functions

### mkGobot

▸ **mkGobot**(`repo`, `config?`): [`Gobot`](../classes/Gobot.Gobot.md)

#### Parameters

| Name      | Type                                                  |
| :-------- | :---------------------------------------------------- |
| `repo`    | `string`                                              |
| `config?` | [`GobotOptions`](../interfaces/Gobot.GobotOptions.md) |

#### Returns

[`Gobot`](../classes/Gobot.Gobot.md)

#### Defined in

[Gobot.ts:433](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L433)
