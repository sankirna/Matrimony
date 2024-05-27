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
    this.form = this.fb.group({
      id: [this.model.id],
      firstName: [this.model.firstName, Validators.required],
      middleName: [this.model.middleName],
      lastName: [this.model.lastName],
      sex: [this.model.sex, Validators.required],
      email: [this.model.email, Validators.required],
      alternateEmail: [this.model.alternateEmail],
      phoneNo: [this.model.phoneNo, Validators.required],
      alternatePhoneNo: [this.model.alternatePhoneNo],
      langauge: [this.model.langauge, Validators.required],
      otherInformation: [this.model.otherInformation],
    });
  }

  isValid(): boolean {
    return this.form.valid;
  }

  // onChange($event:any) {
  //   this.form.controls['sex'].setValue( $event.value);
  // }


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
    this.buildForm();
  }
}
