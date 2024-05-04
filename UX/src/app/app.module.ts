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

@NgModule({
  declarations: [AppComponent, LogInComponent, RegisterComponent, AppHeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule
  ],
  providers: [
      LoaderService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor ,
        multi: true,
      },
      {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptor,
          multi: true
      }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
