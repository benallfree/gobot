[GobotBase](../modules/GobotBase.md).GobotBase

Generic Gobot plugin. Subclass this for specific functionality.

## Table of contents

### Constructors

- [constructor](GobotBase.GobotBase.md#constructor)

### Methods

- [cachePath](GobotBase.GobotBase.md#cachepath)
- [clearCache](GobotBase.GobotBase.md#clearcache)
- [download](GobotBase.GobotBase.md#download)
- [getBinaryPath](GobotBase.GobotBase.md#getbinarypath)
- [getLatestVersion](GobotBase.GobotBase.md#getlatestversion)
- [getMatchingVersion](GobotBase.GobotBase.md#getmatchingversion)
- [getMatchingVersions](GobotBase.GobotBase.md#getmatchingversions)
- [releases](GobotBase.GobotBase.md#releases)
- [run](GobotBase.GobotBase.md#run)
- [versions](GobotBase.GobotBase.md#versions)

## Constructors

### constructor

• **new GobotBase**(`repo`, `optionsIn?`): [`GobotBase`](GobotBase.GobotBase.md)

Create a new Gobot

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `repo` | `string` | The repo name, in `<user>/<repo>` format. |
| `optionsIn` | `Partial`\<[`GobotOptions`](../interfaces/GobotBase.GobotOptions.md)\> | Option overrides |

#### Returns

[`GobotBase`](GobotBase.GobotBase.md)

#### Defined in

[GobotBase.ts:55](https://github.com/benallfree/gobot/blob/05facad/src/GobotBase.ts#L55)

## Methods

### cachePath

▸ **cachePath**(`...paths`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...paths` | `string`[] |

#### Returns

`string`

#### Defined in

[GobotBase.ts:94](https://github.com/benallfree/gobot/blob/05facad/src/GobotBase.ts#L94)

___

### clearCache

▸ **clearCache**(): `void`

Clear all items from cache (flush cache).

#### Returns

`void`

#### Defined in

[GobotBase.ts:103](https://github.com/benallfree/gobot/blob/05facad/src/GobotBase.ts#L103)

___

### download

▸ **download**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[GobotBase.ts:108](https://github.com/benallfree/gobot/blob/05facad/src/GobotBase.ts#L108)

___

### getBinaryPath

▸ **getBinaryPath**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[GobotBase.ts:217](https://github.com/benallfree/gobot/blob/05facad/src/GobotBase.ts#L217)

___

### getLatestVersion

▸ **getLatestVersion**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[GobotBase.ts:149](https://github.com/benallfree/gobot/blob/05facad/src/GobotBase.ts#L149)

___

### getMatchingVersion

▸ **getMatchingVersion**(`semver`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semver` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[GobotBase.ts:122](https://github.com/benallfree/gobot/blob/05facad/src/GobotBase.ts#L122)

___

### getMatchingVersions

▸ **getMatchingVersions**(`semver`): `Promise`\<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `semver` | `string` |

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[GobotBase.ts:144](https://github.com/benallfree/gobot/blob/05facad/src/GobotBase.ts#L144)

___

### releases

▸ **releases**(): `Promise`\<`StoredRelease`[]\>

#### Returns

`Promise`\<`StoredRelease`[]\>

#### Defined in

[GobotBase.ts:154](https://github.com/benallfree/gobot/blob/05facad/src/GobotBase.ts#L154)

___

### run

▸ **run**(`args`): `Promise`\<`ChildProcess`\>

Run a Go binary.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `string`[] | The arguments to pass to `spawn()` |

#### Returns

`Promise`\<`ChildProcess`\>

#### Defined in

[GobotBase.ts:252](https://github.com/benallfree/gobot/blob/05facad/src/GobotBase.ts#L252)

___

### versions

▸ **versions**(`type?`): `Promise`\<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | ``"js"`` |

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[GobotBase.ts:163](https://github.com/benallfree/gobot/blob/05facad/src/GobotBase.ts#L163)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"json"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[GobotBase.ts:164](https://github.com/benallfree/gobot/blob/05facad/src/GobotBase.ts#L164)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"cjs"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[GobotBase.ts:165](https://github.com/benallfree/gobot/blob/05facad/src/GobotBase.ts#L165)

▸ **versions**(`type`): `Promise`\<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"esm"`` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[GobotBase.ts:166](https://github.com/benallfree/gobot/blob/05facad/src/GobotBase.ts#L166)
