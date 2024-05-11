import { Component, OnInit } from '@angular/core';
import { CountryService } from '../countryservice';
import { CountryModel, CountrySearchModel } from '../../country.model';
import { PaggerModel } from '../../../../Common/Models/BasePagedListModel';
import { BaseSearchModel } from '../../../../Common/Models/BaseSearchModel';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  searchModel: CountrySearchModel = new CountrySearchModel();
  paggerModel: PaggerModel = new PaggerModel();
  list: CountryModel[] = [];
  displayedColumns: string[] = ['Name','Actions'];
  dataSource: MatTableDataSource<CountryModel>;
  
  constructor(private countryService: CountryService
     , private router: Router
     , private route: ActivatedRoute
  ) {
    this.dataSource = new MatTableDataSource(this.list);
  }

  ngOnInit() {
    this.countryService.name = 'List updated';
    this.search();
  }

  applyFilter() {
    this.searchModel.start=0;
    this.search();
  }

  search() {
    this.countryService.list(this.searchModel).subscribe(
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

  edit(row: CountryModel){
    this.router.navigate(['/Masters/Country/Edit'], {queryParams:{id: row.id}, relativeTo: this.route});
  }

  delete(row: CountryModel){
    this.countryService.delete(<number>row.id).subscribe(
      (response) => {
        console.log(response);
        this.applyFilter();
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
