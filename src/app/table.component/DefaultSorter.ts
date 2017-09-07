import {Component, Input, OnInit} from "@angular/core";
import {DataTable, SortEvent} from "./DataTable";

@Component({
  selector: "Sorter",
  template: `
    <a style="cursor: pointer" (click)="sort()" class="text-nowrap">
      <ng-content></ng-content>
      <i *ngIf="isSortedByMeAsc" class="fa fa-caret-up" aria-hidden="true"></i>
      <i *ngIf="isSortedByMeDesc" class="fa fa-caret-down" aria-hidden="true"></i>
    </a>`
})
export class DefaultSorter implements OnInit {
  @Input("by") sortBy: string;

  isSortedByMeAsc: boolean = false;
  isSortedByMeDesc: boolean = false;

  public constructor(private table: DataTable) {
  }

  public ngOnInit(): void {
    this.table.onSortChange.subscribe((event: SortEvent) => {
      this.isSortedByMeAsc = (event.sortBy == this.sortBy && event.sortOrder == "asc");
      this.isSortedByMeDesc = (event.sortBy == this.sortBy && event.sortOrder == "desc");
    });
  }

  sort() {
    if (this.isSortedByMeAsc) {
      this.table.setSort(this.sortBy, "desc");
    } else {
      this.table.setSort(this.sortBy, "asc");
    }
  }
}
