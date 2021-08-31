[hue-push-client](../README.md) / [Exports](../modules.md) / HuePushClient

# Class: HuePushClient

## Hierarchy

- `EventSource`

  ↳ **`HuePushClient`**

## Table of contents

### Constructors

- [constructor](HuePushClient.md#constructor)

### Properties

- [CLOSED](HuePushClient.md#closed)
- [CONNECTING](HuePushClient.md#connecting)
- [OPEN](HuePushClient.md#open)
- [bridge](HuePushClient.md#bridge)
- [onerror](HuePushClient.md#onerror)
- [onmessage](HuePushClient.md#onmessage)
- [onopen](HuePushClient.md#onopen)
- [readyState](HuePushClient.md#readystate)
- [url](HuePushClient.md#url)
- [withCredentials](HuePushClient.md#withcredentials)
- [CLOSED](HuePushClient.md#closed)
- [CONNECTING](HuePushClient.md#connecting)
- [OPEN](HuePushClient.md#open)

### Methods

- [addEventListener](HuePushClient.md#addeventlistener)
- [close](HuePushClient.md#close)
- [dispatchEvent](HuePushClient.md#dispatchevent)
- [removeEventListener](HuePushClient.md#removeeventlistener)
- [resources](HuePushClient.md#resources)
- [uuids](HuePushClient.md#uuids)

## Constructors

### constructor

• **new HuePushClient**(`bridge`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bridge` | [`Bridge`](../interfaces/Bridge.md) |

#### Overrides

EventSource.constructor

#### Defined in

[src/index.ts:20](https://github.com/Pmant/hue-push-client/blob/5503874/src/index.ts#L20)

## Properties

### CLOSED

• `Readonly` **CLOSED**: `number`

#### Inherited from

EventSource.CLOSED

#### Defined in

node_modules/@types/eventsource/index.d.ts:22

___

### CONNECTING

• `Readonly` **CONNECTING**: `number`

#### Inherited from

EventSource.CONNECTING

#### Defined in

node_modules/@types/eventsource/index.d.ts:23

___

### OPEN

• `Readonly` **OPEN**: `number`

#### Inherited from

EventSource.OPEN

#### Defined in

node_modules/@types/eventsource/index.d.ts:24

___

### bridge

• **bridge**: [`Bridge`](../interfaces/Bridge.md)

#### Defined in

[src/index.ts:14](https://github.com/Pmant/hue-push-client/blob/5503874/src/index.ts#L14)

___

### onerror

• **onerror**: (`evt`: `MessageEvent`<`any`\>) => `any`

#### Type declaration

▸ (`evt`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `MessageEvent`<`any`\> |

##### Returns

`any`

#### Inherited from

EventSource.onerror

#### Defined in

node_modules/@types/eventsource/index.d.ts:30

___

### onmessage

• **onmessage**: (`evt`: `MessageEvent`<`any`\>) => `any`

#### Type declaration

▸ (`evt`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `MessageEvent`<`any`\> |

##### Returns

`any`

#### Inherited from

EventSource.onmessage

#### Defined in

node_modules/@types/eventsource/index.d.ts:29

___

### onopen

• **onopen**: (`evt`: `MessageEvent`<`any`\>) => `any`

#### Type declaration

▸ (`evt`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `MessageEvent`<`any`\> |

##### Returns

`any`

#### Inherited from

EventSource.onopen

#### Defined in

node_modules/@types/eventsource/index.d.ts:28

___

### readyState

• `Readonly` **readyState**: `number`

#### Inherited from

EventSource.readyState

#### Defined in

node_modules/@types/eventsource/index.d.ts:26

___

### url

• `Readonly` **url**: `string`

#### Inherited from

EventSource.url

#### Defined in

node_modules/@types/eventsource/index.d.ts:25

___

### withCredentials

• `Readonly` **withCredentials**: `boolean`

#### Inherited from

EventSource.withCredentials

#### Defined in

node_modules/@types/eventsource/index.d.ts:27

___

### CLOSED

▪ `Static` `Readonly` **CLOSED**: `number`

#### Inherited from

EventSource.CLOSED

#### Defined in

node_modules/@types/eventsource/index.d.ts:16

___

### CONNECTING

▪ `Static` `Readonly` **CONNECTING**: `number`

#### Inherited from

EventSource.CONNECTING

#### Defined in

node_modules/@types/eventsource/index.d.ts:17

___

### OPEN

▪ `Static` `Readonly` **OPEN**: `number`

#### Inherited from

EventSource.OPEN

#### Defined in

node_modules/@types/eventsource/index.d.ts:18

## Methods

### addEventListener

▸ **addEventListener**(`type`, `listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | `EventListener` |

#### Returns

`void`

#### Inherited from

EventSource.addEventListener

#### Defined in

node_modules/@types/eventsource/index.d.ts:31

___

### close

▸ **close**(): `void`

 closes all open connections to Hue Bridge

#### Returns

`void`

#### Overrides

EventSource.close

#### Defined in

[src/index.ts:80](https://github.com/Pmant/hue-push-client/blob/5503874/src/index.ts#L80)

___

### dispatchEvent

▸ **dispatchEvent**(`evt`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `evt` | `Event` |

#### Returns

`boolean`

#### Inherited from

EventSource.dispatchEvent

#### Defined in

node_modules/@types/eventsource/index.d.ts:32

___

### removeEventListener

▸ **removeEventListener**(`type`, `listener?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener?` | `EventListener` |

#### Returns

`void`

#### Inherited from

EventSource.removeEventListener

#### Defined in

node_modules/@types/eventsource/index.d.ts:33

___

### resources

▸ **resources**(`resourceParser`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourceParser` | [`ResourceParser`](../modules.md#resourceparser) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/index.ts:40](https://github.com/Pmant/hue-push-client/blob/5503874/src/index.ts#L40)

___

### uuids

▸ **uuids**(): `Promise`<`Error` \| { [index: string]: `Resource`;  }\>

#### Returns

`Promise`<`Error` \| { [index: string]: `Resource`;  }\>

#### Defined in

[src/index.ts:73](https://github.com/Pmant/hue-push-client/blob/5503874/src/index.ts#L73)
