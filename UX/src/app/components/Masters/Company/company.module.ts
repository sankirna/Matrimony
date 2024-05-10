import { NgModule } from '@angular/core';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyService } from './company.service';
import { ListComponent } from './list/list.component';
import { CustomPaginatorComponent } from '../../Common/custom-paginator/custom-paginator.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { AngularMaterialModule } from '../../../angular-material.module';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ CustomPaginatorComponent,ListComponent,CreateComponent],
  imports: [
    CompanyRoutingModule,
    AngularMaterialModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    CompanyService
  ]
})
export class CompanyModule { }
