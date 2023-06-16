import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './treemodule/table/table.component';
import { TableCrudComponent } from './tableCRUDmodule/table-crud/table-crud/table-crud.component';

const routes: Routes = [
  {path: 'treeTable', component: TableComponent},
  {path: 'tableCRUD', component: TableCrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
