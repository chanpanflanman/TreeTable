import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TreeTableModule } from 'primeng/treetable';


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    TreeTableModule
  ]
})
export class TreemoduleModule { }
