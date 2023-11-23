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
        "name": string;
        "type": 'button' | 'submit' | 'reset';
        "value": string;
        "variants": 'default' | 'danger' | 'secondary' | 'icon' | 'ghost' | 'link';
    }
    interface CmCard {
    }
    interface CmCombobox {
        "itemNames": string[];
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
export interface CmComboboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCmComboboxElement;
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
    interface HTMLCmComboboxElementEventMap {
        "itemClick": string;
    }
    interface HTMLCmComboboxElement extends Components.CmCombobox, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCmComboboxElementEventMap>(type: K, listener: (this: HTMLCmComboboxElement, ev: CmComboboxCustomEvent<HTMLCmComboboxElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCmComboboxElementEventMap>(type: K, listener: (this: HTMLCmComboboxElement, ev: CmComboboxCustomEvent<HTMLCmComboboxElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCmComboboxElement: {
        prototype: HTMLCmComboboxElement;
        new (): HTMLCmComboboxElement;
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
        "cm-combobox": HTMLCmComboboxElement;
        "cm-toast": HTMLCmToastElement;
    }
}
declare namespace LocalJSX {
    interface CmButton {
        "disabled"?: boolean;
        "name"?: string;
        "onButtonClicked"?: (event: CmButtonCustomEvent<MouseEvent>) => void;
        "type"?: 'button' | 'submit' | 'reset';
        "value"?: string;
        "variants"?: 'default' | 'danger' | 'secondary' | 'icon' | 'ghost' | 'link';
    }
    interface CmCard {
    }
    interface CmCombobox {
        "itemNames"?: string[];
        "onItemClick"?: (event: CmComboboxCustomEvent<string>) => void;
    }
    interface CmToast {
        "onToast"?: (event: CmToastCustomEvent<IToast>) => void;
        "position"?: TPositions;
        "swipable"?: boolean;
    }
    interface IntrinsicElements {
        "cm-button": CmButton;
        "cm-card": CmCard;
        "cm-combobox": CmCombobox;
        "cm-toast": CmToast;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cm-button": LocalJSX.CmButton & JSXBase.HTMLAttributes<HTMLCmButtonElement>;
            "cm-card": LocalJSX.CmCard & JSXBase.HTMLAttributes<HTMLCmCardElement>;
            "cm-combobox": LocalJSX.CmCombobox & JSXBase.HTMLAttributes<HTMLCmComboboxElement>;
            "cm-toast": LocalJSX.CmToast & JSXBase.HTMLAttributes<HTMLCmToastElement>;
        }
    }
}
