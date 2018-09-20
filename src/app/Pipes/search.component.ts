import { Pipe, PipeTransform } from '@angular/core';
import {Inject, forwardRef} from '@angular/core';
import {TableComponent} from '../table/table.component';


@Pipe({
  name: 'tableFilter',
  pure: false
})
export class TableFilterPipe implements PipeTransform {
  keys = [];

  transform(items: any, args: string): any {

    args = args.toLowerCase();
    if (items != null && items.length > 0) {
      let ans = [];

      if (this.keys.length == 0) {
        this.keys = Object.keys(items[0]);
      }
      for (let i of items) {
        for (let k of this.keys) {
          if (i[k].toString().toLowerCase().match('^.*' + args + '.*$')) {
            ans.push(i);
            break;
          }
        }
      }
      return ans;
    }
  }
}


@Pipe({
  name: 'arrayFilter',
  pure: false
})
export class ArrayFilterPipe implements PipeTransform {
  keys = [];

  transform(items: any, args: string[]): any {
    if (items != null && items.length > 0) {
      let ans = [];

      if (this.keys.length == 0) {
        this.keys = Object.keys(items[0]);
      }
      if (!args.length) {
        return items;
      } else {
        for (let ele = 0; ele < args.length; ele++) {
          if (typeof args[ele] === 'string') {
            args[ele] = args[ele].toLowerCase();
          }
          for (let i of items) {
            for (let k of this.keys) {
              if (k == args[ele]['field'] && i[k].toString().toLowerCase() == args[ele]['value'].toString().toLowerCase()) {
                ans.push(i);
              }
            }
          }
        }
      }
      return ans;
    }
  }
}
