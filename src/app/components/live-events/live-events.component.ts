import { Component, OnInit, OnDestroy } from '@angular/core';
import { FootballStatesService } from './../../services/football-states.service';
import { MatchesService } from './../../services/matches.service';
import { FootballStates } from './../../models/FootballStates';
import { Match } from './../../models/Match';
import { Competition } from "../../models/Competition";
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-live-events',
  templateUrl: './live-events.component.html',
  styleUrls: ['./live-events.component.css']
})
export class LiveEventsComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  competitions: Competition[] = [];
  footballStates: FootballStates;

  constructor(private matchesService: MatchesService, private footballStatesService: FootballStatesService) { }

  ngOnInit() {
    this.matchesService
      .getAll()
      .takeUntil(this.ngUnsubscribe)
      .subscribe((matches: Match[]) => {
        matches.forEach((match: Match) => {
          let compIdx = this.competitions.map(c => c.name).indexOf(match.competition.name);
          if (compIdx !== -1) {
            this.competitions[compIdx].matches.push(match);
          } else {
            this.competitions.push(new Competition(match.competition.name, [match]));
          }
        });
      });
    this.footballStatesService
      .get()
      .takeUntil(this.ngUnsubscribe)
      .subscribe((fs: FootballStates) => {
        this.footballStates = fs;
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
