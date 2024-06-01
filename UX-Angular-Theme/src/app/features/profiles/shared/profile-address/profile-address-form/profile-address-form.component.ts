import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CityService } from 'src/app/core/services/city.service';
import { CountryService } from 'src/app/core/services/country.service';
import { StateService } from 'src/app/core/services/state.service';
import { CityModel, CitySearchModel } from 'src/app/models/city.model';
import { CountryModel, CountrySearchModel } from 'src/app/models/country.model';
import { StateModel, StateSearchModel } from 'src/app/models/state.model';

@Component({
  selector: 'app-profile-addresse-form',
  templateUrl: './profile-address-form.component.html',
  styleUrls: ['./profile-address-form.component.css']
})
export class ProfileAddressFormComponent implements OnInit {
  @Input() form: FormGroup = new FormGroup({});
  @Input() isEdit: boolean = false;
  @Output() cancelEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() submitEvent: EventEmitter<FormGroup> = new EventEmitter();
  countries: CountryModel[] = [];
  states: StateModel[] = [];
  cities: CityModel[] = [];

  constructor(
    private countryService: CountryService,
    private stateService: StateService,
    private cityService: CityService
  ) {

  }

  ngOnInit(): void {
    this.loadContries();
    // this.form.get('countryId')?.valueChanges.subscribe(countryId => {
    //   this.form.get('stateId')?.reset();
    //   this.form.get('cityId')?.reset();
    //   if (countryId) {
    //     this.loadSates(countryId);
    //   } else {
    //     this.states = [];
    //   }
    // });

    // this.form.get('stateId')?.valueChanges.subscribe(stateId => {
    //   this.form.get('cityId')?.reset();
    //   if (stateId) {
    //     this.loadCities(stateId);
    //   } else {
    //     this.cities = [];
    //   }
    // });
  }

  onCountryChange(countryId: number): void {
    this.form.get('stateId')?.reset();
    this.form.get('cityId')?.reset();
    if (countryId) {
      this.loadStates(countryId);
    } else {
      this.states = [];
    }
  }

  loadContries() {
    let countrySearchModel = new CountrySearchModel();
    countrySearchModel.length = 10000;
    countrySearchModel.start = 0;
    this.countryService.list(countrySearchModel).subscribe(data => {
      if (data.data) {
        this.countries = data.data;
      }
    });
  }

  onStateChange(stateId: number): void {
    this.form.get('cityId')?.reset();
    if (stateId) {
      this.loadCities(stateId);
    } else {
      this.cities = [];
    }
  }

  loadStates(countryId: number) {
    let stateSearchModel = new StateSearchModel();
    stateSearchModel.length = 10000;
    stateSearchModel.start = 0;
    stateSearchModel.countryId = countryId;
    this.stateService.list(stateSearchModel).subscribe(data => {
      if (data.data) {
        this.states = data.data;
      }
    });
  }

  loadCities(stateId: number) {
    let citySearchModel = new CitySearchModel();
    citySearchModel.length = 10000;
    citySearchModel.start = 0;
    citySearchModel.stateId = stateId;
    this.cityService.list(citySearchModel).subscribe(data => {
      if (data.data) {
        this.cities = data.data;
      }
    });
  }

  onCancel() {
    this.cancelEvent.emit(true);
  }

  isValid(): boolean {
    return true || this.form.valid;
  }

  onSubmit() {
    if (this.isValid()) {
      this.submitEvent.emit(this.form);
    }
  }
}
