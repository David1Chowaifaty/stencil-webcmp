import { Component, Host, h, Prop, State, Element, EventEmitter, Event, Listen } from '@stencil/core';

@Component({
  tag: 'cm-combobox',
  styleUrl: 'cm-combobox.css',
  scoped: true,
})
export class CmCombobox {
  @Prop({ reflect: true }) itemNames = ['hello', 'hi'];
  @State() isDropdownVisible: boolean = false;
  @State() selectedItemName: string = '';
  @State() currentHighlightedIndex: number = -1;
  @Element() el: HTMLElement;
  @Event() itemClick: EventEmitter<string>;

  componentDidLoad() {
    this.updateListFocus();
  }

  @Listen('click', { target: 'document' })
  handleDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!this.el.contains(target)) {
      this.isDropdownVisible = false;
    }
  }

  componentDidUpdate() {
    this.updateListFocus();
  }

  updateListFocus() {
    if (this.isDropdownVisible) {
      const list = this.el.querySelector('.combobox-viewport') as HTMLUListElement;
      list?.focus();
    }
  }

  onMouseOver(index: number) {
    this.currentHighlightedIndex = index;
  }

  onKeyDown(event: KeyboardEvent) {
    const itemCount = this.itemNames.length;
    switch (event.key) {
      case 'ArrowDown':
        this.currentHighlightedIndex = (this.currentHighlightedIndex + 1) % itemCount;
        break;
      case 'ArrowUp':
        this.currentHighlightedIndex = (this.currentHighlightedIndex - 1 + itemCount) % itemCount;
        break;
      case 'Enter':
      case ' ':
        this.onItemClick();
        break;
      case 'Escape':
        this.isDropdownVisible = false;
        break;
    }
    event.preventDefault();
  }
  onItemClick() {
    const selectedItem = this.itemNames[this.currentHighlightedIndex];
    this.itemClick.emit(selectedItem);
    this.selectedItemName = selectedItem;

    this.toggleDropdown();
  }

  onMouseLeave() {
    this.currentHighlightedIndex = -1;
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  renderItem(name: string, index: number) {
    return (
      <li
        data-highlighted={this.currentHighlightedIndex === index ? 'true' : 'false'}
        class={'combobox-item'}
        tabIndex={index}
        onMouseOver={() => this.onMouseOver(index)}
        onClick={() => this.onItemClick()}
      >
        {this.selectedItemName === name && (
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        )}
        {name}
      </li>
    );
  }

  renderButtonName() {
    if (this.itemNames[this.currentHighlightedIndex] !== undefined) {
      return this.itemNames[this.currentHighlightedIndex];
    }
    return 'Toggle Dropdown';
  }

  render() {
    return (
      <Host>
        <button onClick={() => this.toggleDropdown()}>{this.renderButtonName()}</button>
        <div data-visibility={this.isDropdownVisible ? 'show' : 'hide'} class={'combobox-content'}>
          {this.isDropdownVisible && (
            <ul class={'combobox-viewport'} tabindex="0" onKeyDown={event => this.onKeyDown(event)} onMouseLeave={() => this.onMouseLeave()}>
              {this.itemNames.map((name, index) => this.renderItem(name, index))}
            </ul>
          )}
        </div>
      </Host>
    );
  }
}
