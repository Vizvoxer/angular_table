import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "./table.component/DataService";
import {PaginatorNavigator} from "./table.component/Paginator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() tableIndex: number;
  public data: any[];
  public theaders: any[];
  public filterQuery = "";
  public rowsOnPage = 5;
  public sortBy = "email";
  public sortOrder = "asc";
  public itemInfo = false;
  constructor(public dataService: DataService, public paginator: PaginatorNavigator) {
  }

  ngOnInit() {
    const rowData = this.dataService.tableData;
    const keys = Object.keys(rowData[0]);
    this.theaders = keys;
    const values = rowData.slice(1, rowData.length);
    let newarray = [];
    for(var y = 0; y < values.length; y++) {
      let thing = {};
      for(var i = 0; i < keys.length; i++) {
        thing[keys[i]] = values[y][i];
      }
      newarray.push(thing);
    }
    this.data = newarray;
  }
  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.quantity.length;
  }

  public info(item) {
    let index = this.data.indexOf(item);
    if(index > -1) {
      this.itemInfo = this.data[index];
    }
  }



}
