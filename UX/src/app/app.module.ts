import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/Account/log-in/log-in.component';
import { RegisterComponent } from './components/Account/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderService } from './services/LoaderService';
import { ErrorInterceptor } from './Interceptors/ErrorInterceptor';
import { TokenInterceptor } from './Interceptors/TokenInterceptor';
import { AppHeaderComponent } from './components/Common/app-header/app-header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UsersComponent } from './layout/users/users.component';
import { RequestInterceptor } from './Interceptors/Request.interceptor';
import { ResponseInterceptor } from './Interceptors/Response.interceptor';
import { PaginatorInterceptor } from './Interceptors/Paginator.interceptor';
import { MainComponent } from './layout/main/main.component';
import { CustomConfirmDialogComponent } from './components/Common/custom-confirm-dialog/custom-confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent, 
    MainComponent,
    LogInComponent,
    RegisterComponent, 
    AppHeaderComponent, 
    UsersComponent,
    CustomConfirmDialogComponent
  ],
  // entryComponents: [CustomConfirmDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatButtonModule, 
    MatMenuModule,
    MatTableModule, 
    MatPaginatorModule
  ],
 
  exports: [
    MatTabsModule,
    MatSidenavModule, 
    MatTableModule, 
    MatPaginatorModule
  ],
  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
   
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PaginatorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
