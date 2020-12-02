/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ureedFilter',
})
export class FilterPipe implements PipeTransform {
  transform(data: any[], { query, filterBy }): any {
    if (!query || !data) {
      return data;
    }

    return data.filter(item => {
      if (item[filterBy]) {
        return item[filterBy]
          .toString()
          .toLowerCase()
          .includes(query.toLowerCase());
      }
    });
  }
}
