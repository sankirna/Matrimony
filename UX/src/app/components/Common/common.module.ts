import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../angular-material.module';
import { CustomPaginatorComponent } from './custom-paginator/custom-paginator.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { CustomConfirmDialogComponent } from './custom-confirm-dialog/custom-confirm-dialog.component';
import { AppNavigationListComponent } from './app-navigation-list/app-navigation-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [AppHeaderComponent, CustomConfirmDialogComponent, CustomPaginatorComponent, AppNavigationListComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  exports:[
    AppHeaderComponent, 
    CustomConfirmDialogComponent, 
    CustomPaginatorComponent,
    AppNavigationListComponent,
    FlexLayoutModule
  ]
})
export class AppCommonModule { }
