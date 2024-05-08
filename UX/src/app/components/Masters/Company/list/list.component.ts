import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
   name:string='';
   public routerLinkVariable = "/masters/company/edit/1"; 
  constructor( private companyService: CompanyService ) {
  }

  ngOnInit() {
    this.companyService.name='List updated';
  }

}
