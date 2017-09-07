import {
  Component,
  Input,
  SimpleChange,
  OnChanges,
  Optional
} from "@angular/core";
import {DataTable, PageEvent} from "./DataTable";
import {DataService} from "./DataService";

@Component({
    selector: "paginator-navigator",
    template: `<ng-content></ng-content>`
})
export class PaginatorNavigator implements OnChanges {
    @Input("table") inputtable: DataTable;

    private table: DataTable;
    public activePage: number;
    public rowsOnPage;
    public dataLength: number = 0;
    public lastPage: number;
    public constructor(public dataService: DataService, @Optional() private injecttable: DataTable) {
    }

    public ngOnChanges(changes: {[key: string]: SimpleChange}): any {
        this.table = this.inputtable || this.injecttable;
        this.onPageChangeSubscriber(this.table.getPage());
        this.table.onPageChange.subscribe(this.onPageChangeSubscriber);
    }

    public setPage(pageNumber: number): void {
        this.table.setPage(pageNumber, this.rowsOnPage);
        this.dataService.currentPage = pageNumber;
    }

    public setRowsOnPage(rowsOnPage: number): void {
        this.table.setPage(this.activePage, rowsOnPage);
      this.dataService.displayTables = true;

    }

    private onPageChangeSubscriber = (event: PageEvent) => {
        this.activePage = event.activePage;
        this.rowsOnPage = event.rowsOnPage;
        this.dataLength = event.dataLength;
        this.lastPage = Math.ceil(this.dataLength / this.rowsOnPage);
    };
}
