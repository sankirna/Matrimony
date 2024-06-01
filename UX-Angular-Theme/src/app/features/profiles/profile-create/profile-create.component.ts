import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnumModel } from '../../../models/common.model';
import { ProfileModel } from 'src/app/models/profile.model';
import { ProfileService } from 'src/app/core/services/profile.service';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-profile-create',
  templateUrl: './profile-create.component.html',
  styleUrls: ['./profile-create.component.css']
})
export class ProfileCreateComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  model: ProfileModel | undefined;
  genderTypes: EnumModel[] | undefined = [];
  constructor(
    private router: Router
    , private route: ActivatedRoute
    , private profileService: ProfileService
    , public commonService: CommonService
    , private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit() {

    this.getPrimaryData();
  }

  getPrimaryData() {
    //this.genderTypes = this.commonService.primaryData?.genderTypes;
    this.commonService.getPrimaryData().subscribe(
      (response) => {
        this.commonService.primaryData=response;
        this.genderTypes=this.commonService.primaryData.genderTypes;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  buildForm() {
    this.model = new ProfileModel();
    this.form = this.profileService.getProfileInformationForm(this.model);
  }

  isValid(): boolean {
    return this.form.valid;
  }

  clear() {
    this.buildForm();
  }

  onSubmit() {
    if (this.isValid()) {
      this.model = <ProfileModel>this.form.getRawValue();

      this.profileService.create(this.model).subscribe(
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
