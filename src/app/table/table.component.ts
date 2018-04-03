import { Component, OnInit } from '@angular/core';
import {DataService} from '../Services/data-service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private dataService: DataService) { }

  gamesData: any = [];
  url = 'http://starlord.hackerearth.com/gamesarena';
  query = '';
  showTitleFilter = false;

  ngOnInit() {
    this.getData();
  }

  getData() {
    console.log(1);
    this.dataService.getData(this.url)
      .subscribe(
        res => {
          console.log(res, 'response');
          this.gamesData = res.filter(val => !val.api_rate_limit);
          console.log(this.gamesData);
        }
      );
    // setTimeout(() => {console.log('timeout'); }, 0)
    console.log(2);
  }

  uniqueItems(data, key) {
    let result = [];
    for (var i = 0; i < data.length; i++) {
      let value = data[i][key];

      if (result.indexOf(value) == -1) {
        result.push(value);
      }

    }
    console.log(result);
    return result;
  }
  show(val) {
    if (val === 'title'){
      this.showTitleFilter = true;
    }
  }

}
