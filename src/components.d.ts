/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IToast, TPositions } from "./components/cm-toast/toast";
export { IToast, TPositions } from "./components/cm-toast/toast";
export namespace Components {
    interface CmButton {
        "disabled": boolean;
        "isLoading": boolean;
        "name": string;
        "type": 'button' | 'submit' | 'reset';
        "value": string;
        "variants": 'default' | 'danger' | 'secondary' | 'icon' | 'ghost' | 'link';
    }
    interface CmCard {
    }
    interface CmCheckbox {
        "checked": boolean;
        "defaultChecked": boolean;
        "disabled": boolean;
        "labelMessage": string;
        "name": string;
        "required": boolean;
        "value": string;
    }
    interface CmDialog {
        "dialogTitle": string;
        "isAlertDialog": boolean;
        "toggleClose": () => Promise<void>;
        "toggleOpen": () => Promise<void>;
    }
    interface CmDropdown {
        "dropdownTitle": string;
        "itemNames": IItems[];
        "rtl": boolean;
        "search": boolean;
    }
    interface CmInput {
        "autocomplete": string;
        "autofocus": boolean;
        "class": string;
        "disabled": boolean;
        "inputid": string;
        "max": string | number;
        "maxlength": number;
        "min": string | number;
        "multiple": boolean;
        "name": string;
        "pattern": string;
        "placeholder": string;
        "readonly": boolean;
        "required": boolean;
        "size": number;
        "step": string | number;
        "type": InputType;
        "value": string;
    }
    interface CmMainApp {
    }
    interface CmSheet {
        "isSheetVisible": boolean;
        "position": 'top'|'bottom'|'right'|'left';
        "sheetTitle": string;
        "toggleClose": () => Promise<void>;
        "toggleOpen": () => Promise<void>;
    }
    interface CmSpinner {
    }
    interface CmSwitch {
        "checked": boolean;
        "defaultChecked": boolean;
        "disabled": boolean;
        "name": string;
        "required": boolean;
        "value": string;
    }
    interface CmToast {
        "hideToast": () => Promise<void>;
        "position": TPositions;
        "showToast": () => Promise<void>;
        "swipable": boolean;
    }
}
export interface CmButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCmButtonElement;
}
export interface CmCheckboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCmCheckboxElement;
}
export interface CmDialogCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCmDialogElement;
}
export interface CmDropdownCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCmDropdownElement;
}
export interface CmInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCmInputElement;
}
export interface CmMainAppCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCmMainAppElement;
}
export interface CmSheetCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCmSheetElement;
}
export interface CmSwitchCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCmSwitchElement;
}
export interface CmToastCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCmToastElement;
}
declare global {
    interface HTMLCmButtonElementEventMap {
        "buttonClicked": MouseEvent;
    }
    interface HTMLCmButtonElement extends Components.CmButton, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCmButtonElementEventMap>(type: K, listener: (this: HTMLCmButtonElement, ev: CmButtonCustomEvent<HTMLCmButtonElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCmButtonElementEventMap>(type: K, listener: (this: HTMLCmButtonElement, ev: CmButtonCustomEvent<HTMLCmButtonElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCmButtonElement: {
        prototype: HTMLCmButtonElement;
        new (): HTMLCmButtonElement;
    };
    interface HTMLCmCardElement extends Components.CmCard, HTMLStencilElement {
    }
    var HTMLCmCardElement: {
        prototype: HTMLCmCardElement;
        new (): HTMLCmCardElement;
    };
    interface HTMLCmCheckboxElementEventMap {
        "checkedChange": boolean;
    }
    interface HTMLCmCheckboxElement extends Components.CmCheckbox, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCmCheckboxElementEventMap>(type: K, listener: (this: HTMLCmCheckboxElement, ev: CmCheckboxCustomEvent<HTMLCmCheckboxElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCmCheckboxElementEventMap>(type: K, listener: (this: HTMLCmCheckboxElement, ev: CmCheckboxCustomEvent<HTMLCmCheckboxElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCmCheckboxElement: {
        prototype: HTMLCmCheckboxElement;
        new (): HTMLCmCheckboxElement;
    };
    interface HTMLCmDialogElementEventMap {
        "openDialog": null;
        "closeDialog": null;
    }
    interface HTMLCmDialogElement extends Components.CmDialog, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCmDialogElementEventMap>(type: K, listener: (this: HTMLCmDialogElement, ev: CmDialogCustomEvent<HTMLCmDialogElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCmDialogElementEventMap>(type: K, listener: (this: HTMLCmDialogElement, ev: CmDialogCustomEvent<HTMLCmDialogElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCmDialogElement: {
        prototype: HTMLCmDialogElement;
        new (): HTMLCmDialogElement;
    };
    interface HTMLCmDropdownElementEventMap {
        "itemClick": string;
    }
    interface HTMLCmDropdownElement extends Components.CmDropdown, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCmDropdownElementEventMap>(type: K, listener: (this: HTMLCmDropdownElement, ev: CmDropdownCustomEvent<HTMLCmDropdownElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCmDropdownElementEventMap>(type: K, listener: (this: HTMLCmDropdownElement, ev: CmDropdownCustomEvent<HTMLCmDropdownElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCmDropdownElement: {
        prototype: HTMLCmDropdownElement;
        new (): HTMLCmDropdownElement;
    };
    interface HTMLCmInputElementEventMap {
        "textChanged": string;
    }
    interface HTMLCmInputElement extends Components.CmInput, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCmInputElementEventMap>(type: K, listener: (this: HTMLCmInputElement, ev: CmInputCustomEvent<HTMLCmInputElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCmInputElementEventMap>(type: K, listener: (this: HTMLCmInputElement, ev: CmInputCustomEvent<HTMLCmInputElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCmInputElement: {
        prototype: HTMLCmInputElement;
        new (): HTMLCmInputElement;
    };
    interface HTMLCmMainAppElementEventMap {
        "toast": IToast;
        "openDialog": null;
        "openSheet": null;
        "closeSheet": null;
        "closeDialog": null;
    }
    interface HTMLCmMainAppElement extends Components.CmMainApp, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCmMainAppElementEventMap>(type: K, listener: (this: HTMLCmMainAppElement, ev: CmMainAppCustomEvent<HTMLCmMainAppElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCmMainAppElementEventMap>(type: K, listener: (this: HTMLCmMainAppElement, ev: CmMainAppCustomEvent<HTMLCmMainAppElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCmMainAppElement: {
        prototype: HTMLCmMainAppElement;
        new (): HTMLCmMainAppElement;
    };
    interface HTMLCmSheetElementEventMap {
        "openSheet": null;
        "closeSheet": null;
    }
    interface HTMLCmSheetElement extends Components.CmSheet, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCmSheetElementEventMap>(type: K, listener: (this: HTMLCmSheetElement, ev: CmSheetCustomEvent<HTMLCmSheetElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCmSheetElementEventMap>(type: K, listener: (this: HTMLCmSheetElement, ev: CmSheetCustomEvent<HTMLCmSheetElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCmSheetElement: {
        prototype: HTMLCmSheetElement;
        new (): HTMLCmSheetElement;
    };
    interface HTMLCmSpinnerElement extends Components.CmSpinner, HTMLStencilElement {
    }
    var HTMLCmSpinnerElement: {
        prototype: HTMLCmSpinnerElement;
        new (): HTMLCmSpinnerElement;
    };
    interface HTMLCmSwitchElementEventMap {
        "checkedChange": boolean;
    }
    interface HTMLCmSwitchElement extends Components.CmSwitch, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCmSwitchElementEventMap>(type: K, listener: (this: HTMLCmSwitchElement, ev: CmSwitchCustomEvent<HTMLCmSwitchElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCmSwitchElementEventMap>(type: K, listener: (this: HTMLCmSwitchElement, ev: CmSwitchCustomEvent<HTMLCmSwitchElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCmSwitchElement: {
        prototype: HTMLCmSwitchElement;
        new (): HTMLCmSwitchElement;
    };
    interface HTMLCmToastElementEventMap {
        "toast": IToast;
    }
    interface HTMLCmToastElement extends Components.CmToast, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCmToastElementEventMap>(type: K, listener: (this: HTMLCmToastElement, ev: CmToastCustomEvent<HTMLCmToastElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCmToastElementEventMap>(type: K, listener: (this: HTMLCmToastElement, ev: CmToastCustomEvent<HTMLCmToastElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCmToastElement: {
        prototype: HTMLCmToastElement;
        new (): HTMLCmToastElement;
    };
    interface HTMLElementTagNameMap {
        "cm-button": HTMLCmButtonElement;
        "cm-card": HTMLCmCardElement;
        "cm-checkbox": HTMLCmCheckboxElement;
        "cm-dialog": HTMLCmDialogElement;
        "cm-dropdown": HTMLCmDropdownElement;
        "cm-input": HTMLCmInputElement;
        "cm-main-app": HTMLCmMainAppElement;
        "cm-sheet": HTMLCmSheetElement;
        "cm-spinner": HTMLCmSpinnerElement;
        "cm-switch": HTMLCmSwitchElement;
        "cm-toast": HTMLCmToastElement;
    }
}
declare namespace LocalJSX {
    interface CmButton {
        "disabled"?: boolean;
        "isLoading"?: boolean;
        "name"?: string;
        "onButtonClicked"?: (event: CmButtonCustomEvent<MouseEvent>) => void;
        "type"?: 'button' | 'submit' | 'reset';
        "value"?: string;
        "variants"?: 'default' | 'danger' | 'secondary' | 'icon' | 'ghost' | 'link';
    }
    interface CmCard {
    }
    interface CmCheckbox {
        "checked"?: boolean;
        "defaultChecked"?: boolean;
        "disabled"?: boolean;
        "labelMessage"?: string;
        "name"?: string;
        "onCheckedChange"?: (event: CmCheckboxCustomEvent<boolean>) => void;
        "required"?: boolean;
        "value"?: string;
    }
    interface CmDialog {
        "dialogTitle"?: string;
        "isAlertDialog"?: boolean;
        "onCloseDialog"?: (event: CmDialogCustomEvent<null>) => void;
        "onOpenDialog"?: (event: CmDialogCustomEvent<null>) => void;
    }
    interface CmDropdown {
        "dropdownTitle"?: string;
        "itemNames"?: IItems[];
        "onItemClick"?: (event: CmDropdownCustomEvent<string>) => void;
        "rtl"?: boolean;
        "search"?: boolean;
    }
    interface CmInput {
        "autocomplete"?: string;
        "autofocus"?: boolean;
        "class"?: string;
        "disabled"?: boolean;
        "inputid"?: string;
        "max"?: string | number;
        "maxlength"?: number;
        "min"?: string | number;
        "multiple"?: boolean;
        "name"?: string;
        "onTextChanged"?: (event: CmInputCustomEvent<string>) => void;
        "pattern"?: string;
        "placeholder"?: string;
        "readonly"?: boolean;
        "required"?: boolean;
        "size"?: number;
        "step"?: string | number;
        "type"?: InputType;
        "value"?: string;
    }
    interface CmMainApp {
        "onCloseDialog"?: (event: CmMainAppCustomEvent<null>) => void;
        "onCloseSheet"?: (event: CmMainAppCustomEvent<null>) => void;
        "onOpenDialog"?: (event: CmMainAppCustomEvent<null>) => void;
        "onOpenSheet"?: (event: CmMainAppCustomEvent<null>) => void;
        "onToast"?: (event: CmMainAppCustomEvent<IToast>) => void;
    }
    interface CmSheet {
        "isSheetVisible"?: boolean;
        "onCloseSheet"?: (event: CmSheetCustomEvent<null>) => void;
        "onOpenSheet"?: (event: CmSheetCustomEvent<null>) => void;
        "position"?: 'top'|'bottom'|'right'|'left';
        "sheetTitle"?: string;
    }
    interface CmSpinner {
    }
    interface CmSwitch {
        "checked"?: boolean;
        "defaultChecked"?: boolean;
        "disabled"?: boolean;
        "name"?: string;
        "onCheckedChange"?: (event: CmSwitchCustomEvent<boolean>) => void;
        "required"?: boolean;
        "value"?: string;
    }
    interface CmToast {
        "onToast"?: (event: CmToastCustomEvent<IToast>) => void;
        "position"?: TPositions;
        "swipable"?: boolean;
    }
    interface IntrinsicElements {
        "cm-button": CmButton;
        "cm-card": CmCard;
        "cm-checkbox": CmCheckbox;
        "cm-dialog": CmDialog;
        "cm-dropdown": CmDropdown;
        "cm-input": CmInput;
        "cm-main-app": CmMainApp;
        "cm-sheet": CmSheet;
        "cm-spinner": CmSpinner;
        "cm-switch": CmSwitch;
        "cm-toast": CmToast;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cm-button": LocalJSX.CmButton & JSXBase.HTMLAttributes<HTMLCmButtonElement>;
            "cm-card": LocalJSX.CmCard & JSXBase.HTMLAttributes<HTMLCmCardElement>;
            "cm-checkbox": LocalJSX.CmCheckbox & JSXBase.HTMLAttributes<HTMLCmCheckboxElement>;
            "cm-dialog": LocalJSX.CmDialog & JSXBase.HTMLAttributes<HTMLCmDialogElement>;
            "cm-dropdown": LocalJSX.CmDropdown & JSXBase.HTMLAttributes<HTMLCmDropdownElement>;
            "cm-input": LocalJSX.CmInput & JSXBase.HTMLAttributes<HTMLCmInputElement>;
            "cm-main-app": LocalJSX.CmMainApp & JSXBase.HTMLAttributes<HTMLCmMainAppElement>;
            "cm-sheet": LocalJSX.CmSheet & JSXBase.HTMLAttributes<HTMLCmSheetElement>;
            "cm-spinner": LocalJSX.CmSpinner & JSXBase.HTMLAttributes<HTMLCmSpinnerElement>;
            "cm-switch": LocalJSX.CmSwitch & JSXBase.HTMLAttributes<HTMLCmSwitchElement>;
            "cm-toast": LocalJSX.CmToast & JSXBase.HTMLAttributes<HTMLCmToastElement>;
        }
    }
}
