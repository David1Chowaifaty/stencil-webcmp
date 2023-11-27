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
  inputEventProperties,
  inputFeatures,
  inputProperties,
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
          <p>
            <span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            {d}
          </p>
        ))}
      </div>
    );
  }
  render() {
    return (
      <Host>
        <header>
          <h1 class="title">CM Components</h1>
          <a href="#toast">Toast</a>
        </header>

        <h1>Customize Your Experience with Themes</h1>
        <p>
          Personalize your app's look and feel by selecting a color theme that suits your style! Simply tap on one of the colored circles under the "Themes" section to switch to a
          new theme.
        </p>
        <div class="container flex items-center justify-center">
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
        {/*Input */}
        <section class="component-container">
          <div class={'title-section'}>
            <h1>Input</h1>
            <p>Displays a form input field or a component that looks like an input field.</p>
          </div>
          <cm-input placeholder="Input"></cm-input>
          {this.createFeatures(inputFeatures)}
          <div class="reference">
            <h3>Root</h3>
            {this.createRootTable(inputProperties)}
            <h3>Events</h3>
            {this.createEventTable(inputEventProperties)}
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
        {/*Toast */}
        <section id="toast" class="component-container">
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
      </Host>
    );
  }
}
