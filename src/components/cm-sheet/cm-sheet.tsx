import { Component, Host, Prop, h,Element,Event, EventEmitter, Fragment,  Method } from '@stencil/core';

@Component({
  tag: 'cm-sheet',
  styleUrl: 'cm-sheet.css',
  shadow: true,
})
export class CmSheet {
  @Prop({reflect:true,mutable:true}) isSheetVisible: boolean = false;
  @Prop({ reflect: true }) sheetTitle: string = 'Sheet Title';
  @Prop({ reflect: true }) position:'top'|'bottom'|'right'|'left'='left';
  @Element() el: HTMLElement;
  @Event() openSheet: EventEmitter<null>;
  @Event() closeSheet: EventEmitter<null>;

  private firstFocusableEl: HTMLElement;
  private lastFocusableEl: HTMLElement;
  private allFocusableEls: HTMLElement[];


  @Method()
  async toggleOpen() {
    this.isSheetVisible = true;
    document.body.style.pointerEvents = 'none';
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      this.updateFocusableElements();

      this.firstFocusableEl?.focus();
    }, 150);
  }

  @Method()
  async toggleClose() {
    this.isSheetVisible = false;
    document.body.style.pointerEvents = 'all';
    document.body.style.overflow = 'auto';
    this.el.removeEventListener('keydown', this.handleKeyDown.bind(this));
  }

  updateFocusableElements() {
    const focusableSelectors = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]),[tabindex]:not([tabindex="-1"])';
    const lightDOMFocusableEls = Array.from(this.el.querySelectorAll(focusableSelectors));
    const shadowDOMFocusableEls = Array.from(this.el.shadowRoot.querySelectorAll(focusableSelectors));

    this.allFocusableEls = [...lightDOMFocusableEls, ...shadowDOMFocusableEls] as HTMLElement[];
    this.firstFocusableEl = this.allFocusableEls[0];
    this.lastFocusableEl = this.allFocusableEls[this.allFocusableEls.length - 1];
  }

  handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      this.toggleClose();
    } else if (!this.isSheetVisible || e.key !== 'Tab') return;

    const activeElement = document.activeElement.shadowRoot ? document.activeElement.shadowRoot.activeElement : document.activeElement;

    const lastElementIndex = this.allFocusableEls.indexOf(this.lastFocusableEl);
    const firstElementIndex = this.allFocusableEls.indexOf(this.firstFocusableEl);

    if (e.shiftKey) {
      if (activeElement === this.firstFocusableEl) {
        this.allFocusableEls[lastElementIndex].focus();
        e.preventDefault();
      }
    } else {
      if (activeElement === this.lastFocusableEl) {
        this.allFocusableEls[firstElementIndex].focus();
        e.preventDefault();
      }
    }
  }

  handleBackdropClick() {
    this.toggleClose();
  }

  componentDidLoad() {
    this.updateFocusableElements();
    this.el.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  render() {
    return (
      <Host>
        <div onClick={this.handleBackdropClick.bind(this)} data-state={this.isSheetVisible ? 'visible' : 'hidden'} class={'backdrop'}></div>
        <div
          role="dialog"
          aria-labelledby="sheetTitle"
          aria-describedby="sheetDescription"
          tabIndex={-1}
          aria-label={this.sheetTitle}
          data-state={this.isSheetVisible ? 'visible' : 'hidden'}
          data-position={this.position}
          class={'sheet'}
        >
          {this.isSheetVisible && (
            <Fragment>
              <h2 class="sheet-title" id="sheetTitle">
                {this.sheetTitle}
              </h2>
              <div id="sheetDescription">
                <slot name="sheet-body"></slot>
              </div>
              <slot name="sheet-footer"></slot>
             
                <button aria-label="Close" onClick={this.toggleClose.bind(this)} class={'IconButton'}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
             
            </Fragment>
          )}
        </div>
      </Host>
    );
  }

}
