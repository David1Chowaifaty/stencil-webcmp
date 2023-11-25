# cm-toast



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                                                           | Default         |
| ---------- | ---------- | ----------- | -------------------------------------------------------------- | --------------- |
| `position` | `position` |             | `"bottom-left" \| "bottom-right" \| "top-left" \| "top-right"` | `'bottom-left'` |
| `swipable` | `swipable` |             | `boolean`                                                      | `false`         |


## Events

| Event   | Description | Type                                                                                                 |
| ------- | ----------- | ---------------------------------------------------------------------------------------------------- |
| `toast` |             | `CustomEvent<ICustomToast & Partial<IToastWithButton> \| IDefaultToast & Partial<IToastWithButton>>` |


## Methods

### `hideToast() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `showToast() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [cm-main-app](../cm-main-app)

### Graph
```mermaid
graph TD;
  cm-main-app --> cm-toast
  style cm-toast fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
