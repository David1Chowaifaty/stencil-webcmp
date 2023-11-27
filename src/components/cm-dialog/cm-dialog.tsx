import { Component, EventEmitter, Host, Listen, State, h, Event, Method, Fragment, Element, Prop } from '@stencil/core';

@Component({
  tag: 'cm-dialog',
  styleUrl: 'cm-dialog.css',
  shadow: true,
})
export class CmDialog {
  @State() isDialogVisible: boolean = false;
  @Prop({ reflect: true }) isAlertDialog: boolean = false;
  @Element() el: HTMLElement;
  @Event() openDialog: EventEmitter<null>;
  @Event() closeDialog: EventEmitter<null>;

  private firstFocusableEl: HTMLElement;
  private lastFocusableEl: HTMLElement;

  @Listen('openDialog', { target: 'body' })
  handleOpenDialog() {
    this.toggleOpen();
  }

  @Listen('closeDialog', { target: 'body' })
  handleCloseDialog() {
    this.toggleClose();
  }

  @Method()
  async toggleOpen() {
    this.isDialogVisible = true;
    document.body.style.pointerEvents = 'none';
    document.body.style.overflow = 'hidden';
    this.updateFocusableElements();
    setTimeout(() => this.firstFocusableEl?.focus(), 150);
  }

  @Method()
  async toggleClose() {
    this.isDialogVisible = false;
    document.body.style.pointerEvents = 'all';
    document.body.style.overflow = 'visible';
  }

  updateFocusableElements() {
    const focusableEls = this.el.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled])');
    if (this.isAlertDialog) {
      this.firstFocusableEl = focusableEls[0] as HTMLElement;
    }
    this.lastFocusableEl = focusableEls[focusableEls.length - 1] as HTMLElement;
  }

  handleKeyDown(e: KeyboardEvent) {
    if (!this.isDialogVisible) return;

    const isTab = e.key === 'Tab';
    if (!isTab) return;

    if (e.shiftKey) {
      if (document.activeElement === this.firstFocusableEl) {
        this.lastFocusableEl.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === this.lastFocusableEl) {
        this.firstFocusableEl.focus();
        e.preventDefault();
      }
    }
  }

  handleBackdropClick() {
    if (!this.isAlertDialog) this.toggleClose();
  }

  componentDidLoad() {
    this.updateFocusableElements();
    this.el.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  render() {
    return (
      <Host>
        <div onClick={this.handleBackdropClick.bind(this)} data-state={this.isDialogVisible ? 'visible' : 'hidden'} class={'backdrop'}></div>
        <div tabIndex={-1} data-state={this.isDialogVisible ? 'visible' : 'hidden'} class={'dialog'}>
          {this.isDialogVisible && (
            <Fragment>
              {!this.isAlertDialog && (
                <button ref={el => (this.firstFocusableEl = el)} aria-label="Close" onClick={this.toggleClose.bind(this)} class={'IconButton'}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              )}
              <slot name="dialog-header"></slot>
              <slot name="dialog-body"></slot>
              <slot name="dialog-footer"></slot>
            </Fragment>
          )}
        </div>
      </Host>
    );
  }
}
