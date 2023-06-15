import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from 'src/app/services/node.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  files: TreeNode[] = [];

  cols: any[] = [];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
      this.nodeService.getFilesystem().subscribe((files: any) => (this.files = files));
      this.cols = [
          { field: 'name', header: 'Name' },
          { field: 'size', header: 'Size' },
          { field: 'type', header: 'Type' },
          // { header: 'Action' }
      ];
  }
}
