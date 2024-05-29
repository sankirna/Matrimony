import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-addresse-form',
  templateUrl: './profile-address-form.component.html',
  styleUrls: ['./profile-address-form.component.css']
})
export class ProfileAddressFormComponent {
  @Input() form: FormGroup = new FormGroup({});
  @Input() isEdit: boolean = false;
  @Output() cancelEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() submitEvent: EventEmitter<FormGroup> = new EventEmitter();

  onCancel() {
    this.cancelEvent.emit(true);
  }

  isValid(): boolean {
    return  true || this.form.valid;
  }

  onSubmit() {
    if(this.isValid()){
      this.submitEvent.emit(this.form);
    }
  }
}
