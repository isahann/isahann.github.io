import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ProfessionalExperienceWindowComponent} from "./professional-experience-window.component";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {CommonComponentsModule} from "../common/common-components.module";

@NgModule({
  declarations: [ProfessionalExperienceWindowComponent],
  imports: [
    CommonModule,
    DragDropModule,
    NgOptimizedImage,
    CommonComponentsModule
  ],
  exports: [
    ProfessionalExperienceWindowComponent
  ]
})
export class ProfessionalExperienceWindowModule {
}
