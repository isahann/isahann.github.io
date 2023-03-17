import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProfessionalExperienceWindowComponent} from './professional-experience-window/professional-experience-window.component';
import {ClippyService} from "./clippy/clippy.service";
import {AboutMeWindowModule} from "./about-me-window/about-me-window.module";
import { ContactWindowComponent } from './contact-window/contact-window.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessionalExperienceWindowComponent,
    ContactWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutMeWindowModule
  ],
  providers: [ClippyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
