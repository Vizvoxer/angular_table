import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CommonModule} from "@angular/common";
import {DataTable} from "./table.component/DataTable";
import {DefaultSorter} from "./table.component/DefaultSorter";
import {PaginatorNavigator} from "./table.component/Paginator";
import {Pagination} from "./table.component/Pagination.component";
import {FormsModule} from "@angular/forms";
import {DataService} from "./table.component/DataService";
import {DataFilterPipe} from "./table.component/Data-filter.pipe";
import { AppContainerComponent} from "./app.container";

@NgModule({
  declarations: [
    AppComponent,
    DataTable,
    DefaultSorter,
    PaginatorNavigator,
    Pagination,
    DataFilterPipe,
    AppContainerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  entryComponents: [AppComponent],

  exports: [
    DataTable,
    DefaultSorter,
    PaginatorNavigator,
    Pagination
  ],
  providers: [DataService, PaginatorNavigator],
  bootstrap: [AppContainerComponent]
})
export class AppModule { }
