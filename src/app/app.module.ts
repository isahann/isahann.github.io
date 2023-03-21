import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClippyService} from "./clippy/clippy.service";
import {AboutMeWindowModule} from "./about-me-window/about-me-window.module";
import { ContactWindowComponent } from './contact-window/contact-window.component';
import {
  ProfessionalExperienceWindowModule
} from "./professional-experience-window/professional-experience-window.module";
import {EducationWindowModule} from "./education-window/education-window.module";

@NgModule({
  declarations: [
    AppComponent,
    ContactWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutMeWindowModule,
    ProfessionalExperienceWindowModule,
    EducationWindowModule
  ],
  providers: [ClippyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
