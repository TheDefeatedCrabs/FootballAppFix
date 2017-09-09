import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  exports: [
    CommonModule,
    SpinnerComponent
  ],
  declarations: [
    SpinnerComponent
  ]
})
export class SharedModule { }
