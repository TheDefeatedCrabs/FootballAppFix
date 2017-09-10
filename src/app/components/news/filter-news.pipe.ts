import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterNewsPipe implements PipeTransform {

  transform(news: any, search: any): any {
    if (search === undefined) return news;

    return news.filter(function(result){
      return result.header.toLowerCase().includes(search.toLowerCase())
      || result.newsText.toLowerCase().includes(search.toLowerCase());
    });
  }

}
