import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutMeWindowComponent} from "./about-me-window.component";
import { WhoAmIComponent } from './who-am-i/who-am-i.component';
import { WhatDoIDoComponent } from './what-do-i-do/what-do-i-do.component';
import { WhatDoIKnowComponent } from './what-do-i-know/what-do-i-know.component';
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [AboutMeWindowComponent, WhoAmIComponent, WhatDoIDoComponent, WhatDoIKnowComponent],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [AboutMeWindowComponent]
})
export class AboutMeWindowModule { }
