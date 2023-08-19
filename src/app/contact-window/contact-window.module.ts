import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactWindowComponent} from "./contact-window.component";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {CommonComponentsModule} from "../common/common-components.module";

@NgModule({
  declarations: [ContactWindowComponent],
  imports: [
    DragDropModule,
    CommonModule,
    CommonComponentsModule,
  ],
  exports: [ContactWindowComponent],
})
export class ContactWindowModule {
}
