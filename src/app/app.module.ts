import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProfessionalExperienceComponent} from './professional-experience/professional-experience.component';
import {ClippyService} from "./clippy/clippy.service";
import {AboutMeModule} from "./about-me/about-me.module";

@NgModule({
  declarations: [
    AppComponent,
    ProfessionalExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutMeModule
  ],
  providers: [ClippyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
