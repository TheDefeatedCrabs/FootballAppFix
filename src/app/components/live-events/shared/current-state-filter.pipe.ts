import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'currentStateFilter' })
export class CurrentStateFilterPipe implements PipeTransform {
  transform(item: string): string {
    if (item === 'Fixture') {
        return 'Pending'
    }
    return item;
  }
}