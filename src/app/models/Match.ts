import { MatchPlayer } from './MatchPlayer';
import { MatchEvent } from './MatchEvent';

export interface Match {
    dbid: number;
    competition: {
        name: string;
        flagUrl: string;
    };
    start: number;
    homeTeam: {
        shirtUrl: string;
        name: string;
    };
    homeGoals: number;
    homePlayers?: MatchPlayer[];
    awayTeam: {
        shirtUrl: string;
        name: string;
    };
    awayGoals: number;
    awayPlayers?: MatchPlayer[];
    currentState: number;
    matchevents?: MatchEvent[];
    venue?: {
        name?: string;
    };
}
