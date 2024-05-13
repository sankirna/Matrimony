import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/AuthGuard';
import { MainComponent } from './layout/main/main.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/account/login', 
      },  
      {
        path: 'account',
        loadChildren: () =>
          import('./components/Account/account.module').then((m) => m.AccountModule),
        data: {
          title: 'Auth modules ',
        },
        //canActivate: [MsalGuard],
      },
      {
        path: 'country',
        component: MainComponent,
        loadChildren: () =>
          import('./components/Masters/Country/country.module').then((m) => m.CountryModule),
        data: {
          title: 'Country ',
        },
        canActivate: [AuthGuard],
      }, 
    ]
    }
];



// const routes: Routes = [
//   {
//     path: '',
//     component: MainComponent,
//     canActivate: [AuthGuard],
//     children: [
//       {
//         path: 'Masters/Country',
//         //loadChildren: () => CountryModule
//         loadChildren: () => import('./components/Masters/Country/country.module').then(m => m.CountryModule),
//       }
//     ]

//   },
//   {
//     path: 'Account',
//     loadChildren: () =>
//       import('./components/Account/account.module').then((m) => m.AccountModule),
//     data: {
//       title: 'Auth modules ',
//     },
//   },
// ];

// const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: '/account/login' },
//   {
//     path: '',
//     component: MainComponent,
//     canActivate: [AuthGuard],
//     children:[
//       {
//         path: 'Masters/Country',
//         //loadChildren: () => CountryModule
//         loadChildren: () => import('./components/Masters/Country/country.module').then(m => m.CountryModule),
//       }
//     ]
    
//   },
//   {
//     path: 'user',
//     component: UsersComponent,
//     canActivate: [AuthGuard]
//   },
//   {
//     path: 'Account',
//     loadChildren: () => AccountModule
//   },
 
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
