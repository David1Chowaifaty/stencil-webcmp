# cm-main-app



<!-- Auto Generated Below -->


## Events

| Event         | Description | Type                                                                                                 |
| ------------- | ----------- | ---------------------------------------------------------------------------------------------------- |
| `closeDialog` |             | `CustomEvent<null>`                                                                                  |
| `openDialog`  |             | `CustomEvent<null>`                                                                                  |
| `toast`       |             | `CustomEvent<ICustomToast & Partial<IToastWithButton> \| IDefaultToast & Partial<IToastWithButton>>` |


## Dependencies

### Depends on

- [cm-button](../cm-button)
- [cm-checkbox](../cm-checkbox)
- [cm-dialog](../cm-dialog)
- [cm-input](../cm-input)
- [cm-dropdown](../cm-dropdown)
- [cm-switch](../cm-switch)
- [cm-toast](../cm-toast)

### Graph
```mermaid
graph TD;
  cm-main-app --> cm-button
  cm-main-app --> cm-checkbox
  cm-main-app --> cm-dialog
  cm-main-app --> cm-input
  cm-main-app --> cm-dropdown
  cm-main-app --> cm-switch
  cm-main-app --> cm-toast
  cm-button --> cm-spinner
  style cm-main-app fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
