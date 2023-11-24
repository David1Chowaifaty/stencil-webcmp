import { Component, Host, h, Prop, State, Element, EventEmitter, Event, Listen, Fragment } from '@stencil/core';

@Component({
  tag: 'cm-dropdown',
  styleUrl: 'cm-dropdown.css',
  scoped: true,
})
export class CmDropdown {
  @Prop({ reflect: true }) itemNames: IItems[] = [
    { item: 'Settings' },
    { item: 'Profile' },
    { item: 'Notifications', disabled: true },
    { item: 'Messages' },
    { item: 'Support', disabled: true },
    { item: 'Account' },
    { item: 'Dashboard' },
    { item: 'Logout' },
    { item: 'Help' },
    { item: 'Feedback' },
  ];
  @Prop({ reflect: true, mutable: true }) rtl: boolean = false;
  @Prop({ reflect: true }) search: boolean = true;
  @Prop({ reflect: true }) dropdownTitle: string = 'Toggle DropDown';
  @State() isDropdownVisible: boolean = false;
  @State() searchQuery: string = '';
  @State() selectedItemName: string = '';
  @State() currentHighlightedIndex: number = -1;
  @State() filteredItemNames: IItems[] = this.itemNames;
  @Element() el: HTMLElement;
  @Event() itemClick: EventEmitter<string>;
  private searchTimeout: any;
  private buttonRef: HTMLButtonElement;
  private dropdownContainer: HTMLDivElement;
  private inputRef: HTMLInputElement;
  componentWillLoad() {
    this.filteredItemNames = [...this.itemNames];
  }
  addFocusToButton() {
    this.buttonRef?.focus();
  }
  componentDidLoad() {
    this.updateListFocus();
    this.detectRTLContext();
  }
  detectRTLContext() {
    const direction = getComputedStyle(this.el).direction;
    this.rtl = direction === 'rtl';
  }
  @Listen('click', { target: 'document' })
  handleDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!this.el.contains(target)) {
      this.isDropdownVisible = false;
    }
  }

  updateListFocus() {
    if (this.isDropdownVisible) {
      let list = this.el.querySelector('.combobox-viewport') as HTMLUListElement;
      list?.focus();
    }
  }

  onMouseOver(index: number) {
    this.currentHighlightedIndex = index;
  }
  handleSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      const filterdNames = this.itemNames.filter(item => item.item.toLowerCase().includes(this.searchQuery.toLowerCase()));
      this.filteredItemNames = filterdNames.length > 0 ? filterdNames : [{ item: 'No Result Found', disabled: true }];
    }, 100);
    if (this.searchQuery === '') {
      this.filteredItemNames = [...this.itemNames];
    }
  }
  onKeyDown(event: KeyboardEvent) {
    this.handleNavigation(event);
  }
  handleInputKeyDown(event) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (this.filteredItemNames.length > 0) {
        this.buttonRef.blur();
        this.focusOnList();
      }
    }
  }

  focusOnList() {
    setTimeout(() => {
      const list = this.el.querySelector('.combobox-viewport') as HTMLUListElement;
      if (list) {
        list.focus();
      }
    }, 0);
  }
  handleNavigation(event: KeyboardEvent) {
    const itemCount = this.filteredItemNames.length;
    let newIndex = this.currentHighlightedIndex;

    switch (event.key) {
      case 'ArrowDown':
        newIndex = (newIndex + 1) % itemCount;
        if (this.filteredItemNames[newIndex].disabled) {
          newIndex = (newIndex + 1) % itemCount;
        }
        break;
      case 'ArrowUp':
        newIndex = (newIndex - 1 + itemCount) % itemCount;
        if (this.filteredItemNames[newIndex].disabled) {
          newIndex = (newIndex - 1 + itemCount) % itemCount;
        }
        break;
      case 'Enter':
      case ' ':
        this.onItemClick();
        break;
      case 'Escape':
        this.toggleDropdown();
        break;
    }
    this.currentHighlightedIndex = newIndex;
    event.preventDefault();
  }
  onItemClick() {
    const selectedItem = this.filteredItemNames[this.currentHighlightedIndex];
    this.itemClick.emit(selectedItem.item);
    this.selectedItemName = selectedItem.item;
    this.toggleDropdown();
  }

  onMouseLeave() {
    this.currentHighlightedIndex = -1;
  }
  toggleDropdown() {
    this.calculateDropdownPosition();
    this.buttonRef.blur();
    this.isDropdownVisible = !this.isDropdownVisible;

    if (this.isDropdownVisible) {
      this.addFocusToButton();
      if (this.searchQuery !== '') {
        this.searchQuery = '';
        this.filteredItemNames = [...this.itemNames];
      }
      setTimeout(() => {
        const list = this.el.querySelector('.combobox-viewport') as HTMLUListElement;
        if (list) {
          list.focus();
        }
      }, 0);
    } else {
      this.addFocusToButton();
    }
  }

  calculateDropdownPosition() {
    const buttonRect = this.el.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const spaceAbove = buttonRect.top;
    const spaceBelow = viewportHeight - buttonRect.bottom;

    const dropdownHeight = 200;
    if (spaceBelow >= dropdownHeight || spaceBelow > spaceAbove) {
      this.dropdownContainer.setAttribute('data-position', 'below');
    } else {
      this.dropdownContainer.setAttribute('data-position', 'above');
    }
  }
  renderItem(item: IItems, index: number) {
    return (
      <li
        data-disabled={item.disabled}
        data-highlighted={this.currentHighlightedIndex === index ? 'true' : 'false'}
        class={'combobox-item'}
        tabIndex={index}
        onMouseOver={() => {
          if (!item.disabled) {
            this.onMouseOver(index);
          }
        }}
        onClick={() => {
          if (!item.disabled) {
            this.onItemClick();
          }
        }}
      >
        {item.item}
        {this.selectedItemName === item.item && (
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        )}
      </li>
    );
  }

  renderButtonName() {
    if (this.filteredItemNames[this.currentHighlightedIndex] !== undefined) {
      return this.filteredItemNames[this.currentHighlightedIndex].item;
    } else if (this.selectedItemName !== '') {
      return this.selectedItemName;
    }
    return this.dropdownTitle;
  }
  handleChange(event) {
    this.searchQuery = event.target.value;
    this.handleSearch();
    this.inputRef.addEventListener('keydown', this.handleInputKeyDown.bind(this));
  }
  handleButtonKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      this.toggleDropdown();
      event.preventDefault();
    }
  }
  render() {
    return (
      <Host>
        <button
          ref={el => (this.buttonRef = el)}
          type="button"
          onKeyDown={event => this.handleButtonKeyDown(event)}
          class={'combobox-trigger'}
          onClick={() => this.toggleDropdown()}
        >
          {this.renderButtonName()}

          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div ref={el => (this.dropdownContainer = el)} data-visibility={this.isDropdownVisible ? 'show' : 'hide'} class={'combobox-content'}>
          {this.isDropdownVisible && (
            <Fragment>
              {this.search && (
                <div class="search-container">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>

                  <input
                    onBlur={() => this.updateListFocus()}
                    ref={el => (this.inputRef = el)}
                    id="drp-search"
                    type="text"
                    placeholder="Search"
                    value={this.searchQuery}
                    onInput={event => this.handleChange(event)}
                  />
                </div>
              )}
              <ul class={'combobox-viewport'} tabindex="0" onKeyDown={event => this.onKeyDown(event)} onMouseLeave={() => this.onMouseLeave()}>
                {this.filteredItemNames.map((name, index) => this.renderItem(name, index))}
              </ul>
            </Fragment>
          )}
        </div>
      </Host>
    );
  }
}
