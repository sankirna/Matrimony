import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryService } from '../countryservice';
import { CountryModel } from '../../country.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
   form : FormGroup = new FormGroup({});

  constructor(
    private router: Router
    , private countryService: CountryService
    , private fb: FormBuilder) {
        this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      name: ["", Validators.required]
    });
  }

  isValid(): boolean {
    return this.form.valid;
  }

  onSubmit() {
    if (this.isValid()) {
      this.countryService.create(<CountryModel>this.form.getRawValue()).subscribe(
        (response) => {
          debugger
          
          this.router.navigateByUrl('/masters/Country/list');
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  onClear() {

  }

}
