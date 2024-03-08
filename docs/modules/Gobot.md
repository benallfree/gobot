## Table of contents

### Classes

- [Gobot](../classes/Gobot.Gobot.md)

### Interfaces

- [GithubRelease](../interfaces/Gobot.GithubRelease.md)
- [GobotOptions](../interfaces/Gobot.GobotOptions.md)

### Type Aliases

- [ArchKey](Gobot.md#archkey)
- [GithubReleaseCollection](Gobot.md#githubreleasecollection)
- [PlatformKey](Gobot.md#platformkey)
- [StoredRelease](Gobot.md#storedrelease)

### Functions

- [DEFAULT\_GOBOT\_CACHE\_ROOT](Gobot.md#default_gobot_cache_root)

## Type Aliases

### ArchKey

Ƭ **ArchKey**: `NodeJS.Architecture`

#### Defined in

[Gobot.ts:28](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L28)

___

### GithubReleaseCollection

Ƭ **GithubReleaseCollection**: [`GithubRelease`](../interfaces/Gobot.GithubRelease.md)[]

#### Defined in

[Gobot.ts:39](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L39)

___

### PlatformKey

Ƭ **PlatformKey**: `NodeJS.Platform`

#### Defined in

[Gobot.ts:27](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L27)

___

### StoredRelease

Ƭ **StoredRelease**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `archives` | \{ [osName in PlatformKey]?: \{ [archName in ArchKey]?: string } } |
| `version` | `string` |

#### Defined in

[Gobot.ts:41](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L41)

## Functions

### DEFAULT\_GOBOT\_CACHE\_ROOT

▸ **DEFAULT_GOBOT_CACHE_ROOT**(`...paths`): `string`

The default Gobot cache root. This is platform specific.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...paths` | `string`[] |

#### Returns

`string`

#### Defined in

[Gobot.ts:66](https://github.com/benallfree/gobot/blob/main/src/Gobot.ts#L66)
