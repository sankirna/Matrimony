import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { CountryListModel, CountryModel, CountrySearchModel } from '../../company.model';
import { PagedListModel, PaggerModel } from '../../../../Common/Models/BasePagedListModel';

@Component({
  selector: 'app-company-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  searchModel  : CountrySearchModel= new CountrySearchModel();
  paggerModel: PaggerModel= new PaggerModel();
  list: CountryModel[]=[];
  constructor( private companyService: CompanyService ) {
  }

  ngOnInit() {
    this.companyService.name='List updated';
    this.companyService.list(this.searchModel).subscribe(
      (response) => { 
        this.list=<CountryModel[]>response.Data;
        this.paggerModel=<PaggerModel>response.PaggerModel;
        console.log(this.paggerModel);
      },
      (error) => {
        console.error(error);
      }
    );;
  }

}
