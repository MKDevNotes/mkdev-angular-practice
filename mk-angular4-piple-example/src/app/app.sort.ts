import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortingNumber'
})

export class SortingPipe implements PipeTransform {
  transform(value: any[], args: string): any {
    if(args === 'ascending'){
      return value.sort();
    } else if ( args === 'descending') {
      return value.sort().reverse();
    }
  }
}
