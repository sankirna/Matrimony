import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-addresse-form',

  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class ProfileAddressFormComponent {
  @Input() form: FormGroup = new FormGroup({});
  @Input() isAdd: boolean = false;
  @Output() cancelEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() submitEvent: EventEmitter<FormGroup> = new EventEmitter();

  onCancel() {
    this.cancelEvent.emit(true);
  }

  isValid(): boolean {
    return this.form.valid;
  }

  onSubmit() {
    if(this.isValid()){
      this.submitEvent.emit(this.form);
    }
  }
}
