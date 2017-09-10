import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FootballStates } from './../models/FootballStates';
import { ApiConfig } from '../../../api.config';

@Injectable()

export class FootballStatesService {
  private baseUrl = 'https://api.crowdscores.com/v1/football_states';

  constructor(private http: Http) { }

  get(): Observable<FootballStates> {
    return this.http.get(
      this.baseUrl,
      {
        params: {
          api_key: ApiConfig.API_KEY
        }
      })
      .map((res: Response) => {
          return <FootballStates>res.json();
    });
  }
}
