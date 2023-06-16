import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private api: HttpClient) { }

  getProductsMini() {
   return this.api.get<any>("http://localhost:3001/tableCRUD");
  }

  postProduct(data:any) {
    return this.api.post<any>("http://localhost:3001/tableCRUD", data);
  }

  deleteProduct(id:any) {
    return this.api.delete<any>("http://localhost:3001/tableCRUD/" + id);
  }

  updateProduct(rowData:any, id:any) {
    return this.api.put<any>("http://localhost:3001/tableCRUD/" + id, rowData);
  }
}
