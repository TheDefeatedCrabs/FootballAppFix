import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Tip } from '../models/Tip';
import { News } from '../models/News';
import { Joke } from '../models/Joke';
import * as firebase from 'firebase/app';

@Injectable()
export class ClientService {
  tips: FirebaseListObservable<any[]>;
  tip: FirebaseObjectObservable<any>;
  news: FirebaseListObservable<any[]>;
  oneNews: FirebaseObjectObservable<any>;
  joke: FirebaseObjectObservable<any>;
  joks: FirebaseObjectObservable<any[]>;

  user: firebase.User;
  userName: string;

  constructor(
    public db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {
    this.tips = this.db.list('/tips') as FirebaseListObservable<Tip[]>;
    this.news = this.db.list('/news') as FirebaseListObservable<News[]>;
    // this.joks = this.db.list('/joks') as FirebaseListObservable<Joke[]>;



    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;

        this.getUser().subscribe(a => {
          this.userName = a.displayName;
        });
      }
    });
  }

  getTips() {
    return this.tips;
  }

  addTip(tip: Tip) {
    tip.postTime = this.getTimeStamp();
    tip.displayName = this.userName;
    this.tips.push(tip);
  }

  getNews() {
    return this.news;
  }

  addNews(oneNews: News) {
    oneNews.displayEmail = this.user.email;
    oneNews.postTime = this.getTimeStamp();
    oneNews.displayName = this.userName;
    this.news.push(oneNews);
  }

  getOneNews(id: string) {
    this.oneNews = this.db.object('/news/' + id) as FirebaseObjectObservable<News>;
    return this.oneNews;
  }

  updateOneNews(id: string, oneNews: News) {
    return this.news.update(id, oneNews);
  }

  deleteOneNews(id: string) {
    return this.news.remove(id);
  }


  getUser() {
    const userId = this.user.uid;
    const path = `/users/${userId}`;
    return this.db.object(path);
  }

  getUsers() {
    const path = '/users';
    return this.db.list(path);
  }

  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
      (now.getUTCMonth() + 1) + '/' +
      now.getUTCDate();
    const time = now.getUTCHours() + ':' +
      now.getUTCMinutes() + ':' +
      now.getUTCSeconds();

    return (date + ' ' + time);
  }
}
