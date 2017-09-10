import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipsComponent } from './tips.component';
import { AddTipComponent } from './add-tip/add-tip.component';
import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
    { path: 'tips/all', component: TipsComponent},
    { path: 'tips/add', component: AddTipComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipsRoutingModule { }
