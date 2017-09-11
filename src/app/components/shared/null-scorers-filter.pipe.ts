import { Pipe, PipeTransform } from '@angular/core';
import { MatchPlayer } from '../../models/MatchPlayer';

@Pipe({name: 'nullScorersFilterPipe' })

export class NullScorersFilterPipe implements PipeTransform {
  transform(matchPlayer: MatchPlayer): string {
    if (typeof matchPlayer === 'undefined' || matchPlayer === null) {
        return '<Няма Информация>';
    }
    return matchPlayer.name;
  }
}
