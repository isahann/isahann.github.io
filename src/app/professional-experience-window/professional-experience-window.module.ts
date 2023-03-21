import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfessionalExperienceWindowComponent} from "./professional-experience-window.component";
import { TotvsExperienceComponent } from './totvs-experience/totvs-experience.component';
import { SyngularExperienceComponent } from './syngular-experience/syngular-experience.component';
import { MateraExperienceComponent } from './matera-experience/matera-experience.component';
import { CiandtExperienceComponent } from './ciandt-experience/ciandt-experience.component';

@NgModule({
  declarations: [ProfessionalExperienceWindowComponent, TotvsExperienceComponent, SyngularExperienceComponent, MateraExperienceComponent, CiandtExperienceComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProfessionalExperienceWindowComponent
  ]
})
export class ProfessionalExperienceWindowModule {
}
