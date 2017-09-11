import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { HoverDirective } from './hover.directive';
import { LiveLabelHoverDirective } from './live-label-hover.directive';
import { SortPipe } from '../shared/sort.pipe';
import { CurrentStateFilterPipe } from './current-state-filter.pipe';
import { NullScorersFilterPipe } from './null-scorers-filter.pipe';

@NgModule({
  exports: [
    CommonModule,
    SpinnerComponent,
    HoverDirective,
    LiveLabelHoverDirective,
    SortPipe,
    CurrentStateFilterPipe,
    NullScorersFilterPipe
  ],
  declarations: [
    SpinnerComponent,
    HoverDirective,
    LiveLabelHoverDirective,
    SortPipe,
    CurrentStateFilterPipe,
    NullScorersFilterPipe
  ]
})
export class SharedModule { }
