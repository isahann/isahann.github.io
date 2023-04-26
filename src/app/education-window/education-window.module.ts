import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {EducationWindowComponent} from "./education-window.component";
import { UnivelComponent } from './univel/univel.component';
import { UtfprComponent } from './utfpr/utfpr.component';
import {DragDropModule} from "@angular/cdk/drag-drop";


@NgModule({
  declarations: [
    EducationWindowComponent,
    UnivelComponent,
    UtfprComponent
  ],
    imports: [
        CommonModule,
        DragDropModule,
        NgOptimizedImage
    ],
  exports: [
    EducationWindowComponent
  ]
})
export class EducationWindowModule { }
