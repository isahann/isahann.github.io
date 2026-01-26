import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactWindowComponent} from "./contact-window.component";
import {CommonComponentsModule} from "../common/common-components.module";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [ContactWindowComponent],
    imports: [
        CommonModule,
        CommonComponentsModule,
        RouterLink,
    ],
  exports: [ContactWindowComponent],
})
export class ContactWindowModule {
}
