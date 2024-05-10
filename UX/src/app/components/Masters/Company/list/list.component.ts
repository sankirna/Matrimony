import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { CountryListModel, CountryModel, CountrySearchModel } from '../../company.model';
import { PagedListModel, PaggerModel } from '../../../../Common/Models/BasePagedListModel';
import { BaseSearchModel } from '../../../../Common/Models/BaseSearchModel';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-company-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  searchModel: CountrySearchModel = new CountrySearchModel();
  paggerModel: PaggerModel = new PaggerModel();
  list: CountryModel[] = [];
  displayedColumns: string[] = ['Name'];
  dataSource: MatTableDataSource<CountryModel>;
  
  constructor(private companyService: CompanyService) {
    this.dataSource = new MatTableDataSource(this.list);
  }

  ngOnInit() {
    this.companyService.name = 'List updated';
    this.search();
  }

  search() {
    this.companyService.list(this.searchModel).subscribe(
      (response) => {
        this.list = <CountryModel[]>response.data;
        this.dataSource = new MatTableDataSource(this.list);
        this.paggerModel = <PaggerModel>response.paggerModel;
        console.log(this.paggerModel);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ChangePage($event: BaseSearchModel) {
    this.searchModel.start = $event.start;
    this.searchModel.length = $event.length;
    this.search();
  }
}
