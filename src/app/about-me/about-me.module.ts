import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutMeComponent} from "./about-me.component";
import { WhoAmIComponent } from './who-am-i/who-am-i.component';
import { WhatDoIDoComponent } from './what-do-i-do/what-do-i-do.component';
import { WhatDoIKnowComponent } from './what-do-i-know/what-do-i-know.component';

@NgModule({
  declarations: [AboutMeComponent, WhoAmIComponent, WhatDoIDoComponent, WhatDoIKnowComponent],
  imports: [
    CommonModule
  ],
  exports: [AboutMeComponent]
})
export class AboutMeModule { }
