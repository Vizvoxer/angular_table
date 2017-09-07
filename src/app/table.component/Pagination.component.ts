import {Component, Input, OnChanges} from "@angular/core";
import {DataTable} from "./DataTable";
import {DataService} from "./DataService";

@Component({
    selector: "app-pagination",
    templateUrl: "./Pagination.component.html",
    styleUrls: ['./Pagination.component.css']
})
export class Pagination implements OnChanges {
    constructor(public dataService: DataService){};
    @Input("rowsOnPageSet") rowsOnPageSet = [];
    @Input("table") table: DataTable;
    customSize = 15;
    minRowsOnPage = 0;
    displayCustom = false;

    ngOnChanges(changes: any): any {
        if (changes.rowsOnPageSet) {
            this.minRowsOnPage = Math.min(...this.rowsOnPageSet);
        }
    }
}
