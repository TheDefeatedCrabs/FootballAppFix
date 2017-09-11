import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AddTipComponent } from './components/tips/add-tip/add-tip.component';
import { TipsComponent } from './components/tips/tips.component';

import { ProfileComponent } from './components/profile/profile.component';

import { LiveEventsComponent } from './components/live-events/live-events.component';


import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
    { path: '', component: HomeComponent },

    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    { path: 'live-events', component: LiveEventsComponent },
];

@NgModule({
    imports: [(RouterModule.forRoot(routes))],
    exports: [RouterModule]
})

export class AppRouterModule {}
