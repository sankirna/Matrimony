import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileCreateComponent } from './create/create.component';
import { ProfileListComponent } from './list/list.component';
import { AngularMaterialModule } from '../../angular-material.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppCommonModule } from '../Common/common.module';


@NgModule({
  declarations: [ ProfileListComponent, ProfileCreateComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    AngularMaterialModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    AppCommonModule,
  ]
})
export class ProfileModule { }
