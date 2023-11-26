import { Component, EventEmitter, Host, Prop, h, Event } from '@stencil/core';

@Component({
  tag: 'cm-input',
  styleUrl: 'cm-input.css',
  scoped: true,
})
export class CmInput {
  @Prop({ reflect: true }) type: InputType;
  @Prop({ reflect: true }) name: string;
  @Prop({ reflect: true }) placeholder: string;
  @Prop({ reflect: true }) inputid: string;
  @Prop({ reflect: true }) class: string;
  @Prop({ reflect: true }) required: boolean;
  @Prop({ reflect: true }) disabled: boolean;
  @Prop({ reflect: true }) readonly: boolean;
  @Prop({ reflect: true }) maxlength: number;
  @Prop({ reflect: true }) min: string | number;
  @Prop({ reflect: true }) max: string | number;
  @Prop({ reflect: true }) step: string | number;
  @Prop({ reflect: true }) pattern: string;
  @Prop({ reflect: true }) autocomplete: string;
  @Prop({ reflect: true }) autofocus: boolean;
  @Prop({ reflect: true }) size: number;
  @Prop({ reflect: true }) multiple: boolean;
  @Prop({ reflect: true }) value: string;
  @Event({ bubbles: true, composed: true }) textChanged: EventEmitter<string>;

  render() {
    return (
      <Host>
        <input
          type={this.type}
          name={this.name}
          placeholder={this.placeholder}
          id={this.inputid}
          class={this.class}
          required={this.required}
          disabled={this.disabled}
          readonly={this.readonly}
          maxlength={this.maxlength}
          min={this.min}
          max={this.max}
          step={this.step}
          pattern={this.pattern}
          autocomplete={this.autocomplete}
          autofocus={this.autofocus}
          size={this.size}
          multiple={this.multiple}
          value={this.value}
          onChange={e => this.textChanged.emit((e.target as HTMLInputElement).value)}
        />
      </Host>
    );
  }
}
