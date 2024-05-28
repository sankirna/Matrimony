import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddressModel, ProfileEditRequestModel, ProfileModel, ProfileSearchModel } from './profile.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../services/commonService';
import { PagedListModel } from 'src/app/models/BasePagedListModel';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient
    , private fb: FormBuilder
    , private commonService: CommonService
  ) {

  }

  list(model: ProfileSearchModel) {
    const api = 'profile/List';
    return this.http.post<PagedListModel<ProfileModel>>(api, model, { params: { isPageType: true } });
  }

  get(id: number) {
    const api = 'profile/get';
    return this.http.post<ProfileEditRequestModel>(api, null, { params: { id: id } });
  }

  create(model: ProfileModel) {
    const api = 'profile/Create';
    return this.http.post<ProfileModel>(api, model);
  }

  update(model: ProfileModel) {
    const api = 'profile/update';
    return this.http.post<ProfileModel>(api, model);
  }

  delete(id: number) {
    const api = 'profile/delete';
    return this.http.post<number>(api, null, { params: { id: id } });
  }

  getProfileInformationForm(model: ProfileModel): FormGroup {
    let form: FormGroup = this.fb.group({
      id: [model.id],
      firstName: [model.firstName, Validators.required],
      middleName: [model.middleName],
      lastName: [model.lastName],
      sex: [model.sex, Validators.required],
      email: [model.email, Validators.required],
      alternateEmail: [model.alternateEmail],
      phoneNo: [model.phoneNo, Validators.required],
      alternatePhoneNo: [model.alternatePhoneNo],
      langauge: [model.langauge, Validators.required],
      otherInformation: [model.otherInformation],
    });
    return form;
  }

  

  getProfileAddressForm(model: AddressModel): FormGroup {
    let form: FormGroup = this.fb.group({
      randomId: [this.commonService.newGuid()],
      id: [model.id],
      profileId: [model.profileId, Validators.required],
      address1: [model.address1, Validators.required],
      address2: [model.address2],
      landmark: [model.landmark],
      cityId: [model.cityId, Validators.required],
      stateId: [model.stateId, Validators.required],
      countryId: [model.countryId, Validators.required],
      pinNo: [model.pinNo],
      typeId: [model.typeId],
      displayOrder: [model.displayOrder],
    });
    return form;
  }
}
