import { Component, EventEmitter, Host, Prop, h, Event } from '@stencil/core';

@Component({
  tag: 'cm-checkbox',
  styleUrl: 'cm-checkbox.css',
  scoped: true,
})
export class CmCheckbox {
  @Prop({ reflect: true }) name: string;
  @Prop({ reflect: true }) required: boolean;
  @Prop({ reflect: true }) disabled: boolean;
  @Prop({ reflect: true }) value: string;
  @Prop({ reflect: true, mutable: true }) checked: boolean = false;
  @Prop({ reflect: true }) defaultChecked: boolean;
  @Prop({ reflect: true }) labelMessage: string;
  @Event({ bubbles: true, composed: true }) checkedChange: EventEmitter<boolean>;
  private checkbox: HTMLElement;
  componentDidLoad() {
    this.checkbox.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    this.checkbox.setAttribute('role', 'checkbox');
  }
  handleChange() {
    this.checked = !this.checked;
    this.checkbox.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    this.checkedChange.emit(this.checked);
  }
  render() {
    return (
      <Host>
        <div class="root-container">
          <button
            ref={el => (this.checkbox = el)}
            type="button"
            aria-label="checkbox"
            onClick={this.handleChange.bind(this)}
            data-state={this.checked ? 'checked' : 'unchecked'}
            value="on"
            id="c1"
            class="CheckboxRoot"
          >
            <p class={'sr-only'}>checkbox</p>
            <span data-state={this.checked ? 'checked' : 'unchecked'} class="CheckboxIndicator">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
          <input type="checkbox" aria-hidden="true" tabindex="-1" value="on" checked={this.checked} />
          {this.labelMessage && (
            <label htmlFor="c1" class="Label">
              {this.labelMessage}
            </label>
          )}
        </div>
      </Host>
    );
  }
}
