import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { TreemoduleModule } from './treemodule/treemodule.module';
import { TableModule } from 'primeng/table';
import { TableCRUDModule } from './tableCRUDmodule/table-crud.module';
import { CurrencyPipe } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    TreemoduleModule,
    TableCRUDModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
