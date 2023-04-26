import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ContactWindowComponent} from "./contact-window.component";
import {SendEmailComponent} from "./send-email/send-email.component";
import {SocialComponent} from "./social/social.component";
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [ContactWindowComponent, SendEmailComponent, SocialComponent],
    imports: [
        CommonModule,
        DragDropModule,
        NgOptimizedImage
    ],
  exports: [ContactWindowComponent, SendEmailComponent, SocialComponent],
})
export class ContactWindowModule { }
