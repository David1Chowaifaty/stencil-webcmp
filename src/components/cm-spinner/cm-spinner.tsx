import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cm-spinner',
  styleUrl: 'cm-spinner.css',
  scoped: true,
})
export class CmSpinner {
  render() {
    return (
      <Host>
        <div class="spinner">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
          <div class="bar4"></div>
          <div class="bar5"></div>
          <div class="bar6"></div>
          <div class="bar7"></div>
          <div class="bar8"></div>
          <div class="bar9"></div>
          <div class="bar10"></div>
          <div class="bar11"></div>
          <div class="bar12"></div>
        </div>
      </Host>
    );
  }
}
