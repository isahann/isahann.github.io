import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClippyService} from "./clippy/clippy.service";
import {AboutMeWindowModule} from "./about-me-window/about-me-window.module";
import {
  ProfessionalExperienceWindowModule
} from "./professional-experience-window/professional-experience-window.module";
import {EducationWindowModule} from "./education-window/education-window.module";
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {ContactWindowModule} from "./contact-window/contact-window.module";
import { LanguageSelectionWindowComponent } from './language-selection-window/language-selection-window.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    LanguageSelectionWindowComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AboutMeWindowModule,
        ProfessionalExperienceWindowModule,
        EducationWindowModule,
        ContactWindowModule,
        NoopAnimationsModule,
        DragDropModule,
        NgOptimizedImage
    ],
  providers: [ClippyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
