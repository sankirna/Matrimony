import { Component, Input, input } from '@angular/core';
import { PaggerModel } from '../../../Common/Models/BasePagedListModel';

@Component({
  selector: 'app-custom-paginator',
  templateUrl: './custom-paginator.component.html',
  styleUrl: './custom-paginator.component.css',
})
export class CustomPaginatorComponent {
 @Input() length = 0;
 @Input() pageSize = 10;
 @Input() pageIndex = 0;
 @Input() pageSizeOptions = [5, 10, 25];
 @Input() PaggerModel: PaggerModel= new PaggerModel();
}
