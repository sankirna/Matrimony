import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/Account/log-in/log-in.component';
import { RegisterComponent } from './components/Account/register/register.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { AuthGuard } from './guards/AuthGuard';
import { UsersComponent } from './layout/users/users.component';
import { CountryModule } from './components/Masters/Country/country.module';
import { AccountModule } from './components/Account/account.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'user',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account',
    loadChildren: () => AccountModule
  },
  {
    path: 'Masters/Country',
    loadChildren: () => CountryModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
