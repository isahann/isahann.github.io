import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ProfessionalExperienceWindowComponent} from "./professional-experience-window.component";
import {CommonComponentsModule} from "../common/common-components.module";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [ProfessionalExperienceWindowComponent],
    imports: [
        CommonModule,
        NgOptimizedImage,
        CommonComponentsModule,
        RouterLink
    ],
  exports: [
    ProfessionalExperienceWindowComponent
  ]
})
export class ProfessionalExperienceWindowModule {
}
