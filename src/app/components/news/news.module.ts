import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { EditNewsComponent } from './edit-news/edit-news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsRoutingModule } from './news-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    NewsComponent,
    AddNewsComponent,
    EditNewsComponent,
    NewsDetailsComponent
  ],
  exports: [
    NewsComponent
  ]
})
export class NewsModule { }
