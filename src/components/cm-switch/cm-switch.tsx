import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'cm-switch',
  styleUrl: 'cm-switch.css',
  scoped: true,
})
export class CmSwitch {
  @Prop({ reflect: true }) name: string;
  @Prop({ reflect: true }) required: boolean;
  @Prop({ reflect: true }) disabled: boolean;
  @Prop({ reflect: true }) value: string;
  @Prop({ reflect: true, mutable: true }) checked: boolean;
  @Prop({ reflect: true }) defaultChecked: boolean;
  @Event({ bubbles: true, composed: true }) checkedChange: EventEmitter<boolean>;

  componentWillLoad() {
    this.checked = this.defaultChecked;
  }

  private toggleChecked() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

  render() {
    return (
      <Host>
        <label data-disabled={this.disabled} data-state={this.checked ? 'checked' : 'unchecked'} class="SwitchRoot">
          <input
            type="checkbox"
            value={this.value}
            disabled={this.disabled}
            name={this.name}
            required={this.required}
            checked={this.checked}
            onInput={() => this.toggleChecked()}
          />
          <span  class="SwitchThumb"></span>
        </label>
      </Host>
    );
  }
}
