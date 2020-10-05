import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(obs:any, searchTerm:string): any {
    if (!obs || !searchTerm) {
      return obs;
  }

  return obs.filter(detail => {
    if(!isNullOrUndefined(detail.suggestion)){
     return detail.suggestion.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    }
    if(!isNullOrUndefined(detail.value)){
      return detail.value.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    }
    if(!isNullOrUndefined(detail.statement)){
      return detail.statement.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    }
  });
}
}