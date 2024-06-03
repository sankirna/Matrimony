import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnumModel } from '../../../models/common.model';
import * as _ from 'lodash';
import { AddressModel, FamilyModel, ProfileEditRequestModel } from 'src/app/models/profile.model';
import { ProfileService } from 'src/app/core/services/profile.service';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})

export class ProfileEditComponent implements OnInit {
  id: number = 0;
  model: ProfileEditRequestModel | undefined;
  form: FormGroup = new FormGroup({});

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
    this.getData();
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
      this.form = this.fb.group({
        id: [this.model.id],
        profile: profileInformationForm,
        addresses: this.fb.array([]),
        families: this.fb.array([])
      });
      this.buildAddressesForm(this.model.addresses);
      this.buildFamiliesForm(this.model.families);
    }
  }

  get profileForm() {
    return this.form.get("profile") as FormGroup;
  }

  get addressesForm() {
    return this.form.get("addresses") as FormArray;
  }

  get familiesForm() {
    return this.form.get("families") as FormArray;
  }

  buildAddressesForm(addresses: AddressModel[]) {
    var self = this;
    _.forEach(addresses, function (value, key) {
      let addressForm: FormGroup = self.profileService.getProfileAddressForm(value);
      self.addressesForm.push(addressForm);
    });
  }

  buildFamiliesForm(families: FamilyModel[]) {
    var self = this;
    _.forEach(families, function (value, key) {
      let familyForm: FormGroup = self.profileService.getProfileFamilyForm(value);
      self.familiesForm.push(familyForm);
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
      this.model = <ProfileEditRequestModel>this.form.getRawValue();

      this.profileService.update(this.model).subscribe(
        (response) => {
          this.router.navigateByUrl('/profiles/list');
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  gotoList() {
    this.router.navigateByUrl('/profiles/list');
  }
}
