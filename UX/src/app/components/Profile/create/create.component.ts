import { Component, OnInit } from '@angular/core';
import { ProfileModel } from '../profile.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../profileService';
import { CommonService } from '../../../services/commonService';
import { EnumModel } from '../../../models/common.model';

@Component({
  selector: 'app-profile-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class ProfileCreateComponent implements OnInit  {
  form: FormGroup = new FormGroup({});
  model: ProfileModel | undefined;
  genderTypes: EnumModel[] | undefined=[];
  constructor(
    private router: Router
    , private route: ActivatedRoute
    , private profileService: ProfileService
    , private commonService: CommonService
    , private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit() {
    this.getPrimaryData();
  }

  getPrimaryData(){
    this.commonService.getPrimaryData().subscribe(
      (response) => {
        this.genderTypes=response.genderTypes;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  buildForm() {
    this.model= new ProfileModel();
    this.form = this.profileService.getProfileInformationForm(this.model);
  }

  

  isValid(): boolean {
    return this.form.valid;
  }

  clear(){
    this.buildForm();
  }

  onSubmit() {
    if (this.isValid()) {
      this.model = <ProfileModel>this.form.getRawValue();
  
        this.profileService.create(this.model).subscribe(
          (response) => {
            this.router.navigateByUrl('/profile/list');
          },
          (error) => {
            console.error(error);
          }
        );
      
      
    }
  }

  gotoList(){
    this.router.navigateByUrl('/profile/list');
  }
}
