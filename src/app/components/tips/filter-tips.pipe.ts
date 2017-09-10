import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTips'
})
export class FilterTipsPipe implements PipeTransform {

  transform(tips: any, search: any): any {
    if (search === undefined) return tips;

    return tips.filter(function(result){
      return result.tip.toLowerCase().includes(search.toLowerCase())
      || result.tournament.toLowerCase().includes(search.toLowerCase());
    });
  }

}
