import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MultiDatepickerComponent } from './multidatepicker.component';
import { YearPickerComponent } from './year-picker-component/year-picker.component';
import { MonthPickerComponent } from './month-picker-component/month-picker.component';
import { RegularDatepickerComponent } from './regular-datepicker-component/regular-datepicker.component';
import { InfoDialogComponent } from './month-picker-component/dialog/info-dialog/info-dialog.component';
import { CustomMaterialModule } from 'src/app/custom-material/custom-material.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatMomentDateModule,
  ],
  declarations: [
    InfoDialogComponent,
    MultiDatepickerComponent,
    MonthPickerComponent,
    YearPickerComponent,
    RegularDatepickerComponent,
  ],
  entryComponents: [InfoDialogComponent],
  exports: [
    MultiDatepickerComponent,
  ],
})
export class MultiDatepickerModule { }