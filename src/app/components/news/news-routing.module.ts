import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { EditNewsComponent } from './edit-news/edit-news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';

import { AuthGuard } from '../../guards/auth.guard';

const newsRoutes: Routes = [
    { path: 'news/all', component: NewsComponent },
    { path: 'news/add', component: AddNewsComponent, canActivate: [AuthGuard] },
    { path: 'news/:id', component: NewsDetailsComponent },
    { path: 'news/edit/:id', component: EditNewsComponent },
];
@NgModule({
    imports: [
        RouterModule.forChild(newsRoutes)
    ],
    exports: [RouterModule]
})

export class NewsRoutingModule {}
