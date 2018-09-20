import {Component, OnInit, Input, Output, EventEmitter, ElementRef} from '@angular/core';
import {DataService} from '../Services/data-service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss']
})
export class FilterBoxComponent implements OnInit {

  constructor(private dataService: DataService, private refElement: ElementRef) { }

  hideFilterBox = true;
  filteredData: any = [];
  @Input() field = '';
  @Output() addToFilterEvent: EventEmitter<any> = new EventEmitter();
  unique: any = [];
  subscription: Subscription;

  ngOnInit() {
  }
  show(val, event) {
    console.log(val);
    event.stopPropagation();
    console.log(this.refElement);
    this.hideFilterBox = ! this.hideFilterBox
    this.unique = this.uniqueItems(this.dataService.filteredData, val);
  }

  close() {
    this.hideFilterBox = ! this.hideFilterBox;
  }

  inFilterArray(item, field) {
    return this.dataService.filterMap[field].includes(item);
  }

  inSelectAll(field) {
    return this.unique.length === this.dataService.filterMap[field].length;
  }

  addToFilter(item, field, event) {
    console.log(event, item);
    event.stopPropagation();
    if (event.target.checked) {
      if (!this.dataService.filterMap[field].includes(item)) {
        this.dataService.filterMap[field].push(item);
      }
    } else {
      let index = this.dataService.filterMap[field].indexOf(item);
      this.dataService.filterMap[field].splice(index, 1);
    }

    console.log(this.dataService.filterMap, 'FilterMap');
    this.dataService.filterMapData(this.dataService.rowData, field);
    console.log(this.filteredData, 'Row Data');
  }

  selectAllToFilter(event, field) {
    event.stopPropagation();
    console.log(field)
    if (event.target.checked) {
      console.log('unchecked')
      this.filteredData.forEach(val => {
        if (!this.dataService.filterMap[field].includes(val)) {
          this.dataService.filterMap[field].push(val[field]);
        }
      });
    } else {
      console.log('checked')
      this.dataService.emptyFilterMap();
      //  this.filterMap[field] = [];
      // this.filterMapData(this.filteredData, field);
    }
    console.log(this.dataService.filterMap, 'FMAP');
    // this.filterMapData(this.rowData, field);
  }

  uniqueItems(data, key) {
    let result = [];
    for (var i = 0; i < data.length; i++) {
      let value = data[i][key];
      if (result.indexOf(value) == -1) {
        result.push(value);
      }
    }
    return result;
  }

}
