import { Component, Host, h, Element } from '@stencil/core';

@Component({
  tag: 'cm-card',
  styleUrl: 'cm-card.css',
  shadow: true,
})
export class CmCard {
  @Element() element: HTMLElement;
  componentWillLoad() {
    this.element.className = 'container';
  }
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
