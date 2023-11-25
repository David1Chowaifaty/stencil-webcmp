import { Component, Event, EventEmitter, Host, State, h } from '@stencil/core';
import {
  buttonEventProperties,
  buttonFeatures,
  buttonProperties,
  checkboxEvents,
  checkboxFeatures,
  checkboxProperties,
  dropdownEvents,
  dropdownFeatures,
  dropdownProperties,
  switchEventProperties,
  switchFeatures,
  switchProperties,
  toastEventProperties,
  toastFeatures,
  toastProperties,
} from './data';
import { IToast } from '../cm-toast/toast';

@Component({
  tag: 'cm-main-app',
  styleUrl: 'cm-main-app.css',
  scoped: true,
})
export class CmMainApp {
  private defaultThemesColor = ['blue', 'yellow', 'green'];
  @State() selectedColor = this.defaultThemesColor[0];
  @Event() toast: EventEmitter<IToast>;
  handleThemeChange(color: string) {
    this.selectedColor = color;
    document.body.className = `${color}`;
  }
  createRootTable(data: any[]) {
    return (
      <div class={'table-container'}>
        <table>
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            {data.map(property => (
              <tr>
                {Object.keys(property).map(p => (
                  <td>{property[p]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  createEventTable(data: any[]) {
    return (
      <div class={'table-container'}>
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {data.map(property => (
              <tr>
                {Object.keys(property).map(p => (
                  <td>{property[p]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  createFeatures(data: any[]) {
    return (
      <div class="features">
        <h3>Features</h3>
        {data.map(d => (
          <p>{d}</p>
        ))}
      </div>
    );
  }
  render() {
    return (
      <Host>
        <h1 class="title">CM Components</h1>
        <h1>Themes</h1>
        <div class="container">
          {this.defaultThemesColor.map(color => (
            <button class={`circle-btn ${color}`} onClick={() => this.handleThemeChange(color)} data-state={this.selectedColor === color ? 'checked' : 'unchecked'}>
              <p class={'sr-only'}>{`${color} theme button`}</p>
            </button>
          ))}
        </div>
        {/*Button */}
        <section class="component-container">
          <div class={'title-section'}>
            <h1>Buttons</h1>
            <p>Displays a button or a component that looks like a button.</p>
          </div>
          <div class="buttons-container">
            <cm-button>Primary</cm-button>
            <cm-button variants="secondary">Secondary</cm-button>
            <cm-button variants="danger">Danger</cm-button>
            <cm-button isLoading>With Loading</cm-button>
          </div>
          {this.createFeatures(buttonFeatures)}
          <div class="reference">
            <h3>Root</h3>
            {this.createRootTable(buttonProperties)}
            <h3>Events</h3>
            {this.createEventTable(buttonEventProperties)}
          </div>
        </section>
        {/*Checkbox */}
        <section class="component-container">
          <div class={'title-section'}>
            <h1>Checkbox</h1>
            <p>A control that allows the user to toggle between checked and not checked.</p>
          </div>

          <cm-checkbox></cm-checkbox>

          {this.createFeatures(checkboxFeatures)}
          <div class="reference">
            <h3>Root</h3>
            {this.createRootTable(checkboxProperties)}
            <h3>Events</h3>
            {this.createEventTable(checkboxEvents)}
          </div>
        </section>
        {/*Dropdown */}
        <section class="component-container">
          <div class={'title-section'}>
            <h1>Dropdown</h1>
            <p>Autocomplete input and command palette with a list of suggestions.</p>
          </div>
          <cm-dropdown></cm-dropdown>
          {this.createFeatures(dropdownFeatures)}
          <div class="reference">
            <h3>Root</h3>
            {this.createRootTable(dropdownProperties)}
            <h3>Events</h3>
            {this.createEventTable(dropdownEvents)}
          </div>
        </section>
        {/*Toast */}
        <section class="component-container">
          <div class={'title-section'}>
            <h1>Toast</h1>
            <p>A succinct message that is displayed temporarily.</p>
          </div>
          <cm-toast></cm-toast>
          <cm-button
            onButtonClicked={() => {
              this.toast.emit({
                type: 'success',
                title: 'Success',
                description: 'Your account have been created.',
                position: 'top-right',
                swipable: true,
              });
            }}
          >
            Trigger Toast
          </cm-button>
          {this.createFeatures(toastFeatures)}
          <div class="reference">
            <h3>Root</h3>
            <p>The toast that automatically closes. It should not be held open to acquire a user response.</p>
            {this.createRootTable(toastProperties)}
            <h3>Events</h3>
            {this.createEventTable(toastEventProperties)}
          </div>
        </section>
        {/*Switch */}
        <section class="component-container">
          <div class={'title-section'}>
            <h1>Switch</h1>
            <p>A control that allows the user to toggle between checked and not checked.</p>
          </div>
          <cm-switch></cm-switch>
          {this.createFeatures(switchFeatures)}
          <div class="reference">
            <h3>Root</h3>
            <p>Contains all the parts of a switch. An input will also render when used within a form to ensure events propagate correctly.</p>
            {this.createRootTable(switchProperties)}
            <h3>Events</h3>
            {this.createEventTable(switchEventProperties)}
          </div>
        </section>
      </Host>
    );
  }
}
