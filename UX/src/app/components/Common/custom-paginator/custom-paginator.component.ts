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
  @Input() paggerModel: PaggerModel = new PaggerModel();
  @Output() changePage: EventEmitter<BaseSearchModel> = new EventEmitter();

  onChangePage(pe: PageEvent) {
    let baseSearchModel = new BaseSearchModel();
    baseSearchModel.start = pe.pageIndex * pe.pageSize;
    baseSearchModel.length = pe.pageSize;
    this.changePage.emit(baseSearchModel);
  }
}
