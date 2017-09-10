import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { HoverDirective } from './hover.directive';
import { SortPipe } from '../shared/sort.pipe';
@NgModule({
  exports: [
    CommonModule,
    SpinnerComponent,
    HoverDirective,
    SortPipe
  ],
  declarations: [
    SpinnerComponent,
    HoverDirective,
    SortPipe
  ]
})
export class SharedModule { }
