import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'cm-button',
  styleUrl: 'cm-button.css',
  shadow: true,
})
export class CmButton {
  @Prop({ reflect: true }) type: 'button' | 'submit' | 'reset' = 'button';
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) variants: 'default' | 'danger' | 'secondary' | 'icon' | 'ghost' | 'link' = 'default';
  @Prop({ reflect: true }) name: string;
  @Prop({ reflect: true }) value: string;
  @Event() buttonClicked: EventEmitter<MouseEvent>;

  render() {
    return (
      <button class={this.variants} onClick={e => this.buttonClicked.emit(e)} type={this.type} disabled={this.disabled} name={this.name} value={this.value}>
        <slot></slot>
      </button>
    );
  }
}
