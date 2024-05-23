import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../angular-material.module';
import { CustomPaginatorComponent } from './custom-paginator/custom-paginator.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { CustomConfirmDialogComponent } from './custom-confirm-dialog/custom-confirm-dialog.component';


@NgModule({
  declarations: [AppHeaderComponent, CustomConfirmDialogComponent, CustomPaginatorComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  exports:[
    AppHeaderComponent, 
    CustomConfirmDialogComponent, 
    CustomPaginatorComponent,
  ]
})
export class AppCommonModule { }
