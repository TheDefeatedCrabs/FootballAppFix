import { Match } from './Match';

export class Competition {
    constructor (public name: string, public flagUrl: string, public matches: Match[]) {}
}
