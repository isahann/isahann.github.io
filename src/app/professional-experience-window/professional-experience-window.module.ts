import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ProfessionalExperienceWindowComponent} from "./professional-experience-window.component";
import { TotvsExperienceComponent } from './totvs-experience/totvs-experience.component';
import { SyngularExperienceComponent } from './syngular-experience/syngular-experience.component';
import { MateraExperienceComponent } from './matera-experience/matera-experience.component';
import { CiandtExperienceComponent } from './ciandt-experience/ciandt-experience.component';
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [ProfessionalExperienceWindowComponent, TotvsExperienceComponent, SyngularExperienceComponent, MateraExperienceComponent, CiandtExperienceComponent],
    imports: [
        CommonModule,
        DragDropModule,
        NgOptimizedImage
    ],
  exports: [
    ProfessionalExperienceWindowComponent
  ]
})
export class ProfessionalExperienceWindowModule {
}
