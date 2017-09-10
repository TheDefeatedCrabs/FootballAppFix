import { Component, Input } from '@angular/core';
import { FootballStates } from './../../../models/FootballStates';
import { Match } from './../../../models/Match';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MatchEvent } from "../../../models/MatchEvent";

@Component({
  selector: 'app-match-details-modal',
  templateUrl: './match-details-modal.component.html',
  styleUrls: ['./match-details-modal.component.css']
})
export class MatchDetailsModalComponent {
  @Input() match: Match;
  @Input() footballStates: FootballStates;
  @Input() matchGoals: MatchEvent[] = [];
  @Input() matchPlayers: string[][] = [];

  constructor(public activeModal: NgbActiveModal) {}
}
