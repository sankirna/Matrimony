import { NgModule } from '@angular/core';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyService } from './company.service';
import { ListComponent } from './list/list.component';
import { CustomPaginatorComponent } from '../../Common/custom-paginator/custom-paginator.component';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [ ListComponent, CustomPaginatorComponent],
  imports: [
    CompanyRoutingModule,
    MatPaginatorModule
  ],
  providers:[
    CompanyService
  ]
})
export class CompanyModule { }
