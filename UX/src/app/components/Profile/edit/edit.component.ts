import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../profileService';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})

export class ProfileEditComponent implements OnInit {
  id: number = 0;

  constructor(
    private router: Router
  , private route: ActivatedRoute
  , private profileService: ProfileService
  , private fb: FormBuilder) {
    //this.buildForm();
}

  get isEdit(): boolean {
    return (this.id && this.id > 0 ? true : false);
  }

  ngOnInit() {
    this.id = <number><unknown>this.route.snapshot.paramMap.get('id');
    // if (this.isEdit) {
    //   this.getData();
    // }else{
    //   this.buildForm();
    // }
  }
}
