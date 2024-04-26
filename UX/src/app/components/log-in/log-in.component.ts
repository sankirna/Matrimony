import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from '../../services/authService';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  loginForm = new FormGroup({
    userName: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });
  constructor(private authService: AuthService) { }

  onLogin(){
    var formValues=this.loginForm.value;
    console.log(this.loginForm.value);
    this.authService.login(formValues)
            .subscribe(
                (response) => {
                  debugger
                    console.log('User created:', response);
                    // Refresh the user list after creating a new user
                },
                (error) => {
                    console.error(error);
                }
            );
  }
}
