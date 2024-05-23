import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileCreateComponent } from './create/create.component';
import { ProfileListComponent } from './list/list.component';


@NgModule({
  declarations: [ ProfileListComponent, ProfileCreateComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
