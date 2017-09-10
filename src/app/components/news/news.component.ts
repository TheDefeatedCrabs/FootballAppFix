import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { News } from '../../models/News';
import { FilterNewsPipe } from './filter-news.pipe';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: News[];
  showSpinner = true;
  constructor(public clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getNews().subscribe(news => {
      this.news = news;
      this.showSpinner = false;
    });
  }

}
