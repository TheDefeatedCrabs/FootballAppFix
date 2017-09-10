import { MatchPlayer } from "./MatchPlayer";

export interface MatchEvent {
    matchTimeString: string;
    happenedAt: number;
    homeGoals: number;
    awayGoals: number;
    type: string;
    scoringPlayer?: MatchPlayer;
    scoringSide?: string;
    stateCode?: number;
}