import { Component, OnInit } from '@angular/core';
import {DataService} from '../Services/data-service';
import {ArrayFilterPipe} from '../Pipes/search.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private dataService: DataService, private arrayFilter: ArrayFilterPipe) { }

  query = '';
  showTitleFilter = false;
  filteredData: any = [];
  subscription: Subscription;
  cols: any = [
    {
      'field': 'amount',
      'header': 'Amount',
    },
    {
      'field': 'balanceAfterTransaction',
      'header': 'Balance',
    },
    {
      'field': 'description',
      'header': 'Description',
    },
    {
      'field': 'type',
      'header': 'Type',
    },
    {
      'field': 'firstLevelCategory',
      'header': 'First Category',
    },
    {
      'field': 'secondLevelCategory',
      'header': 'Second Category',
    }
  ];
  /*filterMap:any = {
    amount: [],
    balanceAfterTransaction: [],
    description: [],
    type: [],
    firstLevelCategory: [],
    secondLevelCategory: []
  }
  unique:any = [];*/

  ngOnInit() {
    console.log(this.dataService.filteredData, 'inside Table Service');
    // console.log(this.filteredData, 'inside Table');
    this.dataService.createMap(this.filteredData, this.dataService.filterMap);
    console.log(this.dataService.filterMap, 'Map');
  }

  /*emptyFilterMap() {
      this.filterMap = {
      amount: [],
      balanceAfterTransaction: [],
      description: [],
      type: [],
      firstLevelCategory: [],
      secondLevelCategory: []
    };
  }



  show(val, event) {
    event.stopPropagation();
    event.target.nextElementSibling.style.visibility = 'visible';
    this.unique = this.uniqueItems(this.filteredData, val);
    console.log(this.unique)
  }

  close(event) {
    event.style.visibility = 'hidden';
    this.showTitleFilter = false;
    // this.rowData = this.filteredData;
  }



  createMap(data, filterMap) {
    let keys = Object.keys(filterMap)
    data.forEach(val => {
      keys.forEach(key => {
        if (filterMap[key].indexOf(val[key]) < 0) {
          filterMap[key].push(val[key]);
        }
      });
    });
  }

  addToFilter(item, field, event) {
    console.log(event, item);
    event.stopPropagation();
    if (event.target.checked) {
      if(!this.filterMap[field].includes(item)) {
        this.filterMap[field].push(item);
      }
    } else {
       let index = this.filterMap[field].indexOf(item);
       this.dataService.filterMap[field].splice(index, 1);
    }

    console.log(this.filterMap, "FilterMap");
    this.filterMapData(this.dataService.rowData, field);
    console.log(this.filteredData, "Row Data");
  }

  inFilterArray(item, field) {
    return this.dataService.filterMap[field].includes(item);
  }

  inSelectAll(field) {
    return this.unique.length === this.dataService.filterMap[field].length;
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
    console.log(this.dataService.filterMap, "FMAP")
    // this.filterMapData(this.rowData, field);
  }


  filterMapData(data, key) {
    console.log(data, key, "sfjgjd");
    this.filteredData =  data.filter(val =>
      this.dataService.filterMap[key].includes(val[key])
    );
    console.log(this.filteredData);
    this.dataService.createMap(this.filteredData, this.filterMap);
    console.log(this.filterMap, "FMAP")
  }*/


}
