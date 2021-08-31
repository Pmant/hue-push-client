[hue-push-client](README.md) / Exports

# hue-push-client

## Table of contents

### Classes

- [HuePushClient](classes/HuePushClient.md)

### Interfaces

- [Bridge](interfaces/Bridge.md)

### Type aliases

- [ResourceParser](modules.md#resourceparser)

### Functions

- [defaultResourceParser](modules.md#defaultresourceparser)
- [uuidResourceParser](modules.md#uuidresourceparser)

## Type aliases

### ResourceParser

Ƭ **ResourceParser**: (`resources`: `string`) => `any`

#### Type declaration

▸ (`resources`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `resources` | `string` |

##### Returns

`any`

#### Defined in

[src/index.ts:90](https://github.com/Pmant/hue-push-client/blob/9e21eac/src/index.ts#L90)

## Functions

### defaultResourceParser

▸ `Const` **defaultResourceParser**(`resources`): `any`

returns Hue Bridge's resources output as object

#### Parameters

| Name | Type |
| :------ | :------ |
| `resources` | `string` |

#### Returns

`any`

#### Defined in

[src/index.ts:98](https://github.com/Pmant/hue-push-client/blob/9e21eac/src/index.ts#L98)

___

### uuidResourceParser

▸ `Const` **uuidResourceParser**(`resources`): `any`

returns Hue Bridge's resources output as object with UUIDs as keys

#### Parameters

| Name | Type |
| :------ | :------ |
| `resources` | `string` |

#### Returns

`any`

#### Defined in

[src/index.ts:114](https://github.com/Pmant/hue-push-client/blob/9e21eac/src/index.ts#L114)
