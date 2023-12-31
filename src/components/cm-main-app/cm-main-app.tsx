import { Component, Element, Event, EventEmitter, Fragment, Host, State, h } from '@stencil/core';
import {
  buttonEventProperties,
  buttonFeatures,
  buttonProperties,
  checkboxEvents,
  checkboxFeatures,
  checkboxProperties,
  dialogFeatures,
  dialogMethods,
  dialogProperties,
  dropdownEvents,
  dropdownFeatures,
  dropdownProperties,
  inputEventProperties,
  inputFeatures,
  inputProperties,
  navigationLinks,
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
  @Event() openDialog: EventEmitter<null>;
  @Event() openSheet: EventEmitter<null>;
  @Event() closeSheet: EventEmitter<null>;
  @Event() closeDialog: EventEmitter<null>;
  @State() isDarkTheme: boolean = false;
  @Element() element: HTMLElement;

  private burgerMenuSheet: any;
  private sheetReference: any;
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.className = this.isDarkTheme ? `dark-theme ${this.selectedColor}` : this.selectedColor;
    localStorage.setItem('theme', this.isDarkTheme ? 'light' : 'dark');
  }
  handleThemeChange(color: string) {
    this.selectedColor = color;
    document.body.className = this.isDarkTheme ? `dark-theme ${this.selectedColor}` : this.selectedColor;
  }
  createRootTable(data: any[], options: any = {}) {
    return (
      <div class={'table-container'}>
        <table>
          <thead>
            <tr>
              {Object.keys(options).length > 0 ? (
                Object.keys(options[0]).map(opt => <th>{opt}</th>)
              ) : (
                <Fragment>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                </Fragment>
              )}
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
        <p>Features</p>
        {data.map(d => (
          <p>
            <span>
              <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          <div class={'burger-menu'}>
            <cm-button
              onButtonClicked={() => {
                this.burgerMenuSheet.toggleOpen();
              }}
              variants="ghost"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H2.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </cm-button>
            <cm-sheet sheetTitle="BlueprintBits" ref={el => (this.burgerMenuSheet = el)} position="left">
              <nav class={"burger-menu-navigation"} slot="sheet-body">
                <ul>
                  {navigationLinks.map(link => (
                    <li>
                      <a onClick={() => this.burgerMenuSheet.toggleClose()} href={`#${link.split(' ').join('').toLowerCase()}`}>
                       {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </cm-sheet>
          </div>
          <h1 class="title">BlueprintBits</h1>
          <nav>
            <ul></ul>
          </nav>
          <cm-button aria-label="theme-button" variants="ghost" onClick={this.toggleTheme.bind(this)}>
            <p class={'sr-only'}>toggle theme</p>
            {this.isDarkTheme ? (
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            )}
          </cm-button>
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
            <p>Root</p>
            {this.createRootTable(buttonProperties)}
            <p>Events</p>
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
            <p>Root</p>
            {this.createRootTable(checkboxProperties)}
            <p>Events</p>
            {this.createEventTable(checkboxEvents)}
          </div>
        </section>
        {/* Dialog*/}
        <section id="dialog" class="component-container">
          <div class={'title-section'}>
            <h1>Dialog</h1>
            <p>A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.</p>
          </div>
          <cm-dialog dialogTitle="Update User">
            <div slot="dialog-body">
              <cm-input required placeholder="Email"></cm-input>
              <cm-input placeholder="Password" type="password"></cm-input>
            </div>
            <div slot="dialog-footer">
              <cm-button onButtonClicked={() => this.closeDialog.emit(null)} variants="secondary">
                cancel
              </cm-button>
              <cm-button onButtonClicked={() => this.closeDialog.emit(null)} variants="danger">
                delete
              </cm-button>
            </div>
          </cm-dialog>
          <cm-button
            onButtonClicked={() => {
              this.openDialog.emit(null);
            }}
          >
            Open Dialog
          </cm-button>
          {this.createFeatures(dialogFeatures)}
          <div class="reference">
            <p>Events</p>
            {this.createEventTable(dialogProperties)}
            <p>Public Methods</p>
            {this.createRootTable(dialogMethods, dialogMethods)}
          </div>
        </section>

        {/* Sheet*/}
        <section id="sheet" class="component-container">
          <div class={'title-section'}>
            <h1>Sheet</h1>
            <p>A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.</p>
          </div>
          <cm-sheet ref={(el)=>this.sheetReference=el} sheetTitle="Update User" position="right">
            <div slot="sheet-body">
              <cm-input required placeholder="Email"></cm-input>
              <cm-input placeholder="Password" type="password"></cm-input>
            </div>
            <div slot="sheet-footer">
              <cm-button onButtonClicked={() => this.sheetReference.toggleClose()} variants="secondary">
                cancel
              </cm-button>
              <cm-button onButtonClicked={() => this.sheetReference.toggleClose()} variants="danger">
                delete
              </cm-button>
            </div>
          </cm-sheet>
          <cm-button
            onButtonClicked={() => {
              this.sheetReference.toggleOpen();
            }}
          >
            Open sheet
          </cm-button>
          {this.createFeatures(dialogFeatures)}
          <div class="reference">
            <p>Events</p>
            {this.createEventTable(dialogProperties)}
            <p>Public Methods</p>
            {this.createRootTable(dialogMethods, dialogMethods)}
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
            <p>Root</p>
            {this.createRootTable(dropdownProperties)}
            <p>Events</p>
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
            <p>Root</p>
            {this.createRootTable(inputProperties)}
            <p>Events</p>
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
            <p>Root</p>
            <p>Contains all the parts of a switch. An input will also render when used within a form to ensure events propagate correctly.</p>
            {this.createRootTable(switchProperties)}
            <p>Events</p>
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
            <p>Root</p>
            <p>The toast that automatically closes. It should not be held open to acquire a user response.</p>
            {this.createRootTable(toastProperties)}
            <p>Events</p>
            {this.createEventTable(toastEventProperties)}
          </div>
        </section>
      </Host>
    );
  }
}
