import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileCreateComponent } from './profile-create/profile-create.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileInformationComponent } from './shared/profile-information/profile-information.component';
import { ProfileAddressListComponent } from './shared/profile-address/profile-address-list/profile-address-list.component';
import { ProfileAddressFormComponent } from './shared/profile-address/profile-address-form/profile-address-form.component';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfileService } from 'src/app/core/services/profile.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ 
      ProfileListComponent
    , ProfileCreateComponent
    , ProfileEditComponent
    , ProfileInformationComponent
    , ProfileAddressListComponent
    , ProfileAddressFormComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    SharedModule,
    ProfilesRoutingModule,
  ],
  providers: [
    ProfileService
  ]
})
export class ProfilesModule { }
