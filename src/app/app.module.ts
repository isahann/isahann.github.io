import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutMeWindowModule} from "./about-me-window/about-me-window.module";
import {
  ProfessionalExperienceWindowModule
} from "./professional-experience-window/professional-experience-window.module";
import {EducationWindowModule} from "./education-window/education-window.module";
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ContactWindowModule} from "./contact-window/contact-window.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutMeWindowModule,
    ProfessionalExperienceWindowModule,
    EducationWindowModule,
    ContactWindowModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
