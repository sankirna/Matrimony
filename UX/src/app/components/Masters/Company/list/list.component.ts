import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { CountryListModel, CountrySearchModel } from '../../company.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  searchModel  : CountrySearchModel= new CountrySearchModel();
  constructor( private companyService: CompanyService ) {
  }

  ngOnInit() {
    this.companyService.name='List updated';
    this.companyService.list(this.searchModel).subscribe(
      (response: CountryListModel) => { 
       debugger
      },
      (error) => {
        console.error(error);
      }
    );;
  }

}
