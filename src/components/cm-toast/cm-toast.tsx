import { Component, Fragment, Prop, State, h, Event, EventEmitter, Element, Method, Host, Listen } from '@stencil/core';
import { IToast, TPositions } from './toast';

@Component({
  tag: 'cm-toast',
  styleUrl: 'cm-toast.css',
  scoped: true,
})
export class CmToast {
  @Prop({ reflect: true, mutable: true }) position: TPositions = 'bottom-left';
  @Prop({ reflect: true, mutable: true }) swipable: boolean = false;
  @State() isVisible = false;
  @State() isDragging = false;
  @State() toastClicked = false;
  @State() isFocused = false;
  @Event() toast: EventEmitter<IToast>;
  @Element() element: HTMLElement;
  private startX: number;
  private endX: number;
  private toastRef: HTMLElement;
  private duration = 5000;
  private showToastTimeOut: any;
  private toastBody: IToast = { description: '', type: 'success' };
  private eventsAdded = false;
  componentWillLoad() {
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  handleTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }
  setSwipeEventToRootElement(state: string) {
    this.toastRef.setAttribute('data-swipe', state);
  }
  handleTouchMove(event: TouchEvent) {
    this.endX = event.touches[0].clientX;
    const deltaX = this.startX - this.endX;
    const isLeft = this.position.includes('left');
    if ((isLeft && deltaX > 0) || (!isLeft && deltaX < 0)) {
      this.updateSwipePosition(-deltaX);
      this.setSwipeEventToRootElement('move');
    }
  }
  applyStyles(style: Partial<CSSStyleDeclaration>) {
    for (const property in style) {
      if (style.hasOwnProperty(property)) {
        this.toastRef.style[property] = style[property];
      }
    }
  }
  @Listen('toast', { target: 'body' })
  onToast(event: CustomEvent<IToast>) {
    event.stopImmediatePropagation();
    event.stopPropagation();
    const { duration, position, style, swipable, type } = event.detail;
    this.toastBody = event.detail;
    if (position) {
      this.position = position;
    }
    if (swipable !== undefined) {
      this.swipable = swipable;
    }
    if (duration) {
      this.duration = duration;
    }
    if (style) {
      this.applyStyles(style);
    }
    if (type === 'error') {
      this.toastRef.style.borderColor = 'hsl(var(--destructive))';
    }
    this.showToast();
    //this.setToastTimeout();
  }
  @Listen('click', { target: 'document' })
  handleDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!this.element.contains(target) && this.toastClicked) {
      this.toastClicked = false;
      //this.setToastTimeout();
    }
  }

  handleTouchEnd() {
    this.handleSwipeEnd(this.startX - this.endX);
  }

  handleMouseDown(event: MouseEvent) {
    this.clearToastTimeout();
    this.toastClicked = true;
    this.isDragging = true;
    this.startX = event.clientX;
  }

  handleMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;
    console.log('mouse move');
    this.endX = event.clientX;
    const deltaX = this.startX - this.endX;
    const isLeft = this.position.includes('left');
    if ((isLeft && deltaX > 0) || (!isLeft && deltaX < 0)) {
      this.setSwipeEventToRootElement('move');
      this.updateSwipePosition(-deltaX);
    }
  }

  handleMouseUp() {
    console.log('mouse up');
    this.isDragging = false;
    this.handleSwipeEnd(this.startX - this.endX);
  }
  setToastTimeout() {
    this.showToastTimeOut = setTimeout(() => {
      this.hideToast();
    }, this.duration);
  }

  clearToastTimeout() {
    if (this.showToastTimeOut) {
      clearTimeout(this.showToastTimeOut);
      this.showToastTimeOut = undefined;
    }
  }
  handleMouseLeave() {
    // if (this.isDragging) {
    //   this.handleSwipeEnd(this.startX - this.endX);
    // }
    if (this.isFocused || this.toastClicked) {
      return;
    }
    //this.setToastTimeout();
  }
  updateSwipePosition(deltaX: number) {
    this.toastRef.style.setProperty('--rd-toast-swipe-move-x', `${deltaX}px`);
  }

  handleSwipeEnd(delta: number) {
    if (!isNaN(delta)) {
      const isLeft = this.position.includes('left');
      let MAX_SWIPE = isLeft ? 2500 : -2500;
      if (this.isDragging) {
        MAX_SWIPE = isLeft ? 280 : -280;
        this.isDragging = false;
      }
      console.log(MAX_SWIPE);
      if ((!isLeft && delta <= -150 && delta >= MAX_SWIPE) || (isLeft && delta >= 150 && delta <= MAX_SWIPE)) {
        this.toastRef.style.setProperty('--rd-toast-swipe-end-x', `${-delta}px`);
        this.dismissToast();
        this.startX = 0;
        this.endX = 0;
      } else {
        this.resetSwipePosition();
        this.setSwipeEventToRootElement('cancel');
      }
    }
  }

  dismissToast() {
    this.setSwipeEventToRootElement('end');
    setTimeout(() => {
      this.setSwipeEventToRootElement('');
      this.hideToast();
    }, 100);
  }

  resetSwipePosition() {
    this.toastRef.style.removeProperty('--rd-toast-swipe-end-x');
    this.toastRef.style.removeProperty('--rd-toast-swipe-move-x');
  }
  @Method()
  async hideToast() {
    this.clearToastTimeout();
    this.resetSwipePosition();
    this.toastRef.setAttribute('data-state', 'close');
    this.toastRef.style.opacity = '0';
    this.isVisible = false;
    if (this.isDragging) {
      this.isDragging = false;
    }
    if (this.swipable) {
      this.removeEvents();
    }
  }
  @Method()
  async showToast() {
    this.clearToastTimeout();
    this.toastRef.style.opacity = '1';
    this.toastRef.setAttribute('data-state', 'open');
    this.isVisible = true;
    if (this.swipable) {
      this.addEvents();
    }
  }
  disconnectedCallback() {
    if (this.swipable) {
      this.removeEvents();
    }
    this.clearToastTimeout();
  }
  removeEvents() {
    if (this.eventsAdded) {
      this.toastRef.removeEventListener('touchstart', this.handleTouchStart);
      this.toastRef.removeEventListener('touchmove', this.handleTouchMove);
      this.toastRef.removeEventListener('touchend', this.handleTouchEnd);
      this.toastRef.removeEventListener('mousedown', this.handleMouseDown);
      this.toastRef.removeEventListener('mousemove', this.handleMouseMove);
      this.toastRef.removeEventListener('mouseup', this.handleMouseUp);
      // this.toastRef.removeEventListener('mouseleave', this.handleMouseLeave);
      this.eventsAdded = false;
    }
  }
  addEvents() {
    if (!this.eventsAdded) {
      this.toastRef.addEventListener('touchstart', this.handleTouchStart);
      this.toastRef.addEventListener('touchmove', this.handleTouchMove);
      this.toastRef.addEventListener('touchend', this.handleTouchEnd);
      this.toastRef.addEventListener('mousedown', this.handleMouseDown);
      this.toastRef.addEventListener('mousemove', this.handleMouseMove);
      this.toastRef.addEventListener('mouseup', this.handleMouseUp);
      this.toastRef.addEventListener('mouseleave', this.handleMouseLeave);
      this.eventsAdded = true;
    }
  }
  renderIcon() {
    switch (this.toastBody.type) {
      case 'success':
        return (
          <div class="icon-container success">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        );
      case 'error':
        return (
          <div class="icon-container error">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        );
      default:
        return null;
    }
  }
  handleMouseEnter() {
    console.log('object');
    this.clearToastTimeout();
  }
  handleToastClicked() {
    if (!this.isDragging) {
      this.clearToastTimeout();
      this.toastClicked = true;
    }
  }
  handleFocus() {
    this.isFocused = true;
    this.clearToastTimeout();
  }
  render() {
    return (
      <Host>
        <section
          aria-live="off"
          role="status"
          aria-atomic="true"
          tabIndex={0}
          // onMouseLeave={this.handleMouseLeave.bind(this)}
          // onMouseEnter={this.handleMouseEnter.bind(this)}
          onFocus={this.handleFocus.bind(this)}
          ref={el => (this.toastRef = el)}
          class={`ToastRoot`}
        >
          {this.isVisible && (
            <Fragment>
              {this.toastBody.type === 'custom' ? (
                this.toastBody.body
              ) : (
                <Fragment>
                  <h3 class="ToastTitle">{this.toastBody.title}</h3>
                  <p class="ToastDescription">{this.toastBody.description}</p>
                  {this.renderIcon()}
                </Fragment>
              )}
            </Fragment>
          )}
        </section>
      </Host>
    );
  }
}
