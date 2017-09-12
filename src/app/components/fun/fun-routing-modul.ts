import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../guards/auth.guard';

import { AddFunComponent } from './add-fun/add-fun.component'

const funRoutes: Routes = [
    { path: 'joks/add', component: AddFunComponent, canActivate: [AuthGuard] },
];
@NgModule({
    imports: [
        RouterModule.forChild(funRoutes)
    ],
    exports: [RouterModule]
})

export class FunRoutingModule {}