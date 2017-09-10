import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(input: any, args?: any): any {
    console.log(input);
    return input.reverse();
  }

}
