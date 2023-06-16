import { Component, OnInit } from '@angular/core';
import { Product } from '../../domains/product';
import { ProductService } from '../../services/product.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-table-crud',
  templateUrl: './table-crud.component.html',
  styleUrls: ['./table-crud.component.css']
})
export class TableCrudComponent implements OnInit {
  products: Product[] = []
  cols: any[] = [];
  visible: boolean = false;
  showAdd: boolean = false;
  showUpdate: boolean = false;
  modalContent: any;

  modalForm = new FormGroup({
    code: new FormControl(''),
    name: new FormControl(''),
    category: new FormControl(''),
    quantity: new FormControl(''),
    price: new FormControl('')
  })

  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.getCurrentTable();
    this.cols = [
      { field: 'id', header: 'S.No' },
      { field: 'code', header: 'Product Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' },
      { field: 'price', header: 'Price' }
    ];
  }

  getCurrentTable() {
    this.productService.getProductsMini().subscribe((data: any) => {
      this.products = data;
    });
  }

  showForm() {
    this.visible = true;
    this.showUpdate = false;
    this.showAdd = true;
  }

  postToTable() {
    this.productService.postProduct({ ...this.modalForm.value }).subscribe((res: any) => {
      this.visible = false;
      this.getCurrentTable();
      this.modalForm.reset();
      return res;
    });
  }

  deleteRow(rowData: any) {
    if (window.confirm("Are you sure you want to delete this row?")) {
      this.productService.deleteProduct(rowData.id).subscribe((res: any) => {
        this.getCurrentTable();
        return res;
      })
    }
  }

  editRow(rowData: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.visible = true;
    this.modalContent = {...rowData};


    this.modalForm.controls['code'].setValue(rowData.code);
    this.modalForm.controls['name'].setValue(rowData.name);
    this.modalForm.controls['category'].setValue(rowData.category);
    this.modalForm.controls['quantity'].setValue(rowData.quantity);
    this.modalForm.controls['price'].setValue(rowData.price);
  }

  updateRow() {
    this.productService.updateProduct({... this.modalForm.value}, this.modalContent.id).subscribe((res:any) => {
      this.visible = false;
      this.getCurrentTable();
      this.modalForm.reset();
      return res;
    })
  }
}
