import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EnumModel } from '../../../../models/common.model';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css']
})
export class ProfileInformationComponent {
  @Input() form: FormGroup = new FormGroup({});
  @Input() genderTypes: EnumModel[] | undefined=[];
}
