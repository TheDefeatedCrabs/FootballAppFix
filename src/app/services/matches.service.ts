import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Match } from './../models/Match';
import { ApiConfig } from '../../../api.config';

@Injectable()
export class MatchesService {
  private baseUrl: string = 'https://api.crowdscores.com/v1/matches';
  constructor(private http: Http) { }
  
  getAll(): Observable<Match[]> {
    let today: Date = new Date()
    return this.http.get(
      this.baseUrl, 
      {
        params: {
          api_key: ApiConfig.API_KEY,
          from: this.getStartOfDay(today),
          to: this.getEndOfDay(today)
        }
      })
      .map((res: Response) => {
          return <Match[]>res.json();
      });
  }

  private getStartOfDay(date: Date): string{
    return `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}T00:00:00-00:00`;
  }

  private getEndOfDay(date: Date): string{
    return `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}T23:59:59-00:00`;
  }
}
