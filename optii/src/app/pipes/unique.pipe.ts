import { Pipe, PipeTransform } from '@angular/core';
import 'rxjs/add/operator/distinct';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(items: any[], field: string): any[] {
    if (!items) {
      return [];
    }
    let present;
    const tasklists = new Array<any>();
    items.forEach(x => {
        if ( tasklists != null) {
          present = tasklists.some(m => {
            return m[field] === x[field];
          });
        } else {
          present = false;
        }
        if (!present) {
          tasklists.push(x);
        } else {
        }
      });
      return tasklists;
  }
}
