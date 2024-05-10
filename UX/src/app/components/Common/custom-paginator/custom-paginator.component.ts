import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { PaggerModel } from '../../../Common/Models/BasePagedListModel';
import { PageEvent } from '@angular/material/paginator';
import { BaseSearchModel } from '../../../Common/Models/BaseSearchModel';

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
  @Input() PaggerModel: PaggerModel = new PaggerModel();
  @Output() ChangePage: EventEmitter<BaseSearchModel> = new EventEmitter();

  onChangePage(pe: PageEvent) {
    let baseSearchModel = new BaseSearchModel();
    baseSearchModel.Start = pe.pageIndex * pe.pageSize;
    baseSearchModel.Length = pe.pageSize;
    this.ChangePage.emit(baseSearchModel);
  }
}
