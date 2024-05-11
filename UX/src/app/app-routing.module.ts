import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/Account/log-in/log-in.component';
import { RegisterComponent } from './components/Account/register/register.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { AuthGuard } from './guards/AuthGuard';
import { UsersComponent } from './layout/users/users.component';
import { CountryModule } from './components/Masters/Country/country.module';
import { AccountModule } from './components/Account/account.module';
import { MainComponent } from './layout/main/main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path: 'Masters/Country',
        //loadChildren: () => CountryModule
        loadChildren: () => import('./components/Masters/Country/country.module').then(m => m.CountryModule),
      }
    ]
    
  },
  {
    path: 'user',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Account',
    loadChildren: () => AccountModule
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
