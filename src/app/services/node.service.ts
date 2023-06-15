import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor( private http: HttpClient) { }

  getFilesystem() {
    return this.http.get<any>("http://localhost:3001/table");
  }
}
