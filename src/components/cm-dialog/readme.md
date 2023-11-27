# cm-dialog



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute         | Description | Type      | Default |
| --------------- | ----------------- | ----------- | --------- | ------- |
| `isAlertDialog` | `is-alert-dialog` |             | `boolean` | `false` |


## Events

| Event         | Description | Type                |
| ------------- | ----------- | ------------------- |
| `closeDialog` |             | `CustomEvent<null>` |
| `openDialog`  |             | `CustomEvent<null>` |


## Methods

### `toggleClose() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `toggleOpen() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [cm-main-app](../cm-main-app)

### Graph
```mermaid
graph TD;
  cm-main-app --> cm-dialog
  style cm-dialog fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
