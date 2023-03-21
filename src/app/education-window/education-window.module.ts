import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EducationWindowComponent} from "./education-window.component";
import { UnivelComponent } from './univel/univel.component';
import { UtfprComponent } from './utfpr/utfpr.component';


@NgModule({
  declarations: [
    EducationWindowComponent,
    UnivelComponent,
    UtfprComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EducationWindowComponent
  ]
})
export class EducationWindowModule { }
