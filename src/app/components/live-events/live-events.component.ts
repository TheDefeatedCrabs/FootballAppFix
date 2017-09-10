import { Component, OnInit, OnDestroy } from '@angular/core';
import { FootballStatesService } from './../../services/football-states.service';
import { MatchesService } from './../../services/matches.service';
import { FootballStates } from './../../models/FootballStates';
import { Match } from './../../models/Match';
import { MatchEvent } from "../../models/MatchEvent";
import { Competition } from "../../models/Competition";
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatchDetailsModalComponent } from './match-details-modal/match-details-modal.component';

@Component({
  selector: 'app-live-events',
  templateUrl: './live-events.component.html',
  styleUrls: ['./live-events.component.css']
})
export class LiveEventsComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  private competitions: Competition[] = [];
  private footballStates: FootballStates;

  constructor(
    private matchesService: MatchesService,
    private footballStatesService: FootballStatesService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.matchesService
      .getAll()
      .takeUntil(this.ngUnsubscribe)
      .subscribe((matches: Match[]) => {
        matches.forEach((match: Match) => {
          let compIdx = this.competitions.map(c => c.name).indexOf(match.competition.name);
          if (compIdx !== -1) {
            this.competitions[compIdx].matches.push(match);
          } else {
            this.competitions.push(new Competition(match.competition.name, match.competition.flagUrl, [match]));
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

  openModal(event): void {
    let target = event.target || event.srcElement || event.currentTarget;
    if (target.parentNode.id) {
      this.matchesService
        .getById(target.parentNode.id)
        .subscribe((m: Match) => {
          let modalRef = this.modalService.open(MatchDetailsModalComponent, {size: "lg"});
          modalRef.componentInstance.match = m;
          modalRef.componentInstance.footballStates = this.footballStates;

          let matchGoals: MatchEvent[] = [];
          m.matchevents.forEach((event: MatchEvent) => {
              if (event.type === "goal") {
                matchGoals.push(event);
              }
          });

          modalRef.componentInstance.matchGoals = matchGoals.sort((e1: MatchEvent, e2: MatchEvent) => {
              return e1.happenedAt - e2.happenedAt
          });

          if ((m.homePlayers.length > 0) && (m.awayPlayers.length > 0))
          {
            let maxPlayers: number = Math.min(m.homePlayers.length, m.awayPlayers.length);
            let matchPlayers: any[] = [];
            for (let i: number = 0; i < maxPlayers; i += 1)
            {
              matchPlayers[i] = [];
              matchPlayers[i].push(m.homePlayers[i].name);
              matchPlayers[i].push(m.awayPlayers[i].name);
            }
            modalRef.componentInstance.matchPlayers = matchPlayers;
          }
      });
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
