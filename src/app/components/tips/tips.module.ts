import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TipsRoutingModule } from './tips-routing.module';
import { FormsModule } from '@angular/forms';
import { TipsComponent } from './tips.component';
import { AddTipComponent } from './add-tip/add-tip.component';

@NgModule({
  imports: [
    CommonModule,
    TipsRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [
    TipsComponent,
    AddTipComponent
  ],
  exports: [
    TipsComponent
  ]
})
export class TipsModule { }
