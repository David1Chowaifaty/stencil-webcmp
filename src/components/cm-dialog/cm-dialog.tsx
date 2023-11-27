import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'cm-dialog',
  styleUrl: 'cm-dialog.css',
 scoped:true
})
export class CmDialog {
@State() openDialog:boolean=false;
  render() {
    return (
      <Host>
       <button onClick={()=>this.openDialog=!this.openDialog}>dialog</button>
       {this.openDialog&&<div class={"dialog"}>hii</div>}
      </Host>
    );
  }

}
