import { Component, Input } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../../profileService';
import { CommonService } from '../../../../../services/commonService';

@Component({
  selector: 'app-profile-addresse-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ProfileAddressListComponent {
  @Input() forms: FormArray = this.fb.array([]);
  requestForm: FormGroup = new FormGroup({});
  isShowForm: boolean = false;

  constructor(
    private router: Router
    , private route: ActivatedRoute
    , private profileService: ProfileService
    , private commonService: CommonService
    , private fb: FormBuilder) {
  }

  edit(index: number, form: AbstractControl) {
    this.isShowForm = true;
    this.requestForm = form as FormGroup;
  }

  cancelEvent($event:boolean) {
    this.isShowForm = false;
    this.requestForm = new FormGroup({});
  }

  delete(index: number, form: AbstractControl) {
    this.forms.removeAt(index);
  }
}
