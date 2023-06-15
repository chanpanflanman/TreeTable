import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TreeTableModule } from 'primeng/treetable';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    TreeTableModule,
    ButtonModule
  ]
})
export class TreemoduleModule { }
