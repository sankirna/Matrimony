import { NgModule } from '@angular/core';
import { CountryRoutingModule } from './country-routing.module';
import { CountryService } from './countryservice';
import { ListComponent } from './list/list.component';
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
import { AppCommonModule } from '../../Common/common.module';

@NgModule({
  declarations: [ ListComponent,CreateComponent],
  imports: [
    CountryRoutingModule,
    AngularMaterialModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    AppCommonModule,
    
  ],
  providers:[
    CountryService
  ]
})
export class CountryModule { }
