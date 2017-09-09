export interface Match {
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
    awayTeam: {
        shirtUrl: string;
        name: string;
    };
    awayGoals: number;
    currentState: number;
}
