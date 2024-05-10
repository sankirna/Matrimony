import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyService } from './company.service';
import { CustomPaginatorComponent } from '../../Common/custom-paginator/custom-paginator.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [ CustomPaginatorComponent, ListComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  providers:[
    CompanyService
  ]
})
export class CompanyModule { }
