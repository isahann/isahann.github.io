import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {ProfessionalExperienceComponent} from './professional-experience/professional-experience.component';
import {ClippyService} from "./clippy/clippy.service";

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ProfessionalExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ClippyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
