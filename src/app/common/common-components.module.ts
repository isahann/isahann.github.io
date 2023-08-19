import {NgModule} from '@angular/core';
import {IconButtonComponent} from "./icon-button/icon-button.component";
import {WindowTitleBarComponent} from "./window-title-bar/window-title-bar.component";
import {CommonModule, NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [IconButtonComponent, WindowTitleBarComponent],
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  exports: [
    IconButtonComponent, WindowTitleBarComponent
  ]
})
export class CommonComponentsModule {
}
