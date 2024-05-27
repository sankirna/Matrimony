import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileCreateComponent } from './create/create.component';
import { ProfileListComponent } from './list/list.component';
import { ProfileEditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: ProfileListComponent },
  { path: 'create', component: ProfileCreateComponent },
  { path: 'edit/:id', component: ProfileEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
