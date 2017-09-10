import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { HoverDirective } from './hover.directive';
@NgModule({
  exports: [
    CommonModule,
    SpinnerComponent,
    HoverDirective
  ],
  declarations: [
    SpinnerComponent,
    HoverDirective
  ]
})
export class SharedModule { }
