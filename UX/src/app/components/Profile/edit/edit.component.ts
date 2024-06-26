import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../profileService';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressModel, ProfileEditRequestModel } from '../profile.model';
import { EnumModel } from '../../../models/common.model';
import { CommonService } from '../../../services/commonService';
import * as _ from 'lodash';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})

export class ProfileEditComponent implements OnInit {
  id: number = 0;
  model: ProfileEditRequestModel | undefined;
  form: FormGroup = new FormGroup({});
  genderTypes: EnumModel[] | undefined = [];
  firstFormGroup = this.fb.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(
    private router: Router
    , private route: ActivatedRoute
    , private profileService: ProfileService
    , private commonService: CommonService
    , private fb: FormBuilder) {
    this.buildForm();
  }

  get isEdit(): boolean {
    return (this.id && this.id > 0 ? true : false);
  }

  ngOnInit() {
    this.id = <number><unknown>this.route.snapshot.paramMap.get('id');
    this.getPrimaryData();
    this.getData();
  }
  getPrimaryData() {
    this.commonService.getPrimaryData().subscribe(
      (response) => {
        this.genderTypes = response.genderTypes;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getData() {
    this.profileService.get(this.id).subscribe(
      (response) => {
        this.model = response;
        this.buildForm();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  buildForm() {
    if (this.model) {
      let profileInformationForm: FormGroup = this.profileService.getProfileInformationForm(this.model.profile);
      this.form = new FormGroup({
        profile: profileInformationForm,
        addresses: this.fb.array([])
      });
      this.buildAddressesForm(this.model.addresses);
    }
  }

  get profileForm() {
    return this.form.get("profile") as FormGroup;
  }

  get  addressesForm() {
    return this.form.get("addresses") as FormArray;
  }

  buildAddressesForm(addresses: AddressModel[]) {
    var self = this;
    _.forEach(addresses, function (value, key) {
      let addressForm: FormGroup = self.profileService.getProfileAddressForm(value);
      self.addressesForm.push(addressForm);
    });
  }


  isValid(): boolean {
    return this.form.valid;
  }



  clear() {
    this.buildForm();
  }

  onSubmit() {
    if (this.isValid()) {
      // this.model = <ProfileModel>this.form.getRawValue();

      //   this.profileService.create(this.model).subscribe(
      //     (response) => {
      //       this.router.navigateByUrl('/profile/list');
      //     },
      //     (error) => {
      //       console.error(error);
      //     }
      //   );
    }
  }

  gotoList() {
    this.router.navigateByUrl('/profile/list');
  }
}
