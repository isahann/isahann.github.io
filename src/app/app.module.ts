import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutMeWindowModule} from "./about-me-window/about-me-window.module";
import {
    ProfessionalExperienceWindowModule
} from "./professional-experience-window/professional-experience-window.module";
import {EducationWindowModule} from "./education-window/education-window.module";
import {ContactWindowModule} from "./contact-window/contact-window.module";
import {HomeWindowComponent} from './home-window/home-window.component';
import {CommonComponentsModule} from "./common/common-components.module";
import {BlogWindowComponent} from "./blog-window/blog-window.component";
import {MarkdownModule} from "ngx-markdown";
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    declarations: [
        AppComponent,
        HomeWindowComponent,
        BlogWindowComponent
    ],
    imports: [
        AppRoutingModule,
        AboutMeWindowModule,
        ProfessionalExperienceWindowModule,
        EducationWindowModule,
        ContactWindowModule,
        CommonComponentsModule,
        MarkdownModule.forRoot(
            {loader: HttpClient}
        ),
        BrowserModule
    ],
    providers: [
        provideHttpClient(),
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
