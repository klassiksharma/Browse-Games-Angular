import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import {TableComponent} from './table/table.component';
import {TableFilterPipe, ArrayFilterPipe} from './Pipes/search.component';
import {DataService} from './Services/data-service';

import {ClickOutsideDirective} from './click-outside/click-outside';
import { FilterBoxComponent } from './filter-box/filter-box.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableFilterPipe,
    ArrayFilterPipe,
    ClickOutsideDirective,
    FilterBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [DataService, ArrayFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
