import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyService } from './company.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  providers:[
    CompanyService
  ]
})
export class CompanyModule { }
