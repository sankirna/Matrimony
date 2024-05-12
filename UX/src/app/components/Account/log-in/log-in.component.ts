import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from '../../../services/authService';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  [x: string]: any;
  loginForm = new FormGroup({
    userName: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });
  constructor(private authService: AuthService
    , private router: Router) { }

  onLogin() {
    var formValues = this.loginForm.value;
    console.log(this.loginForm.value);
    this.authService.login(formValues)
      .subscribe(
        (response) => { 
          console.log('User created:', response);
          this.authService.store(response.token);
          // Refresh the user list after creating a new user
          this.router.navigate(['country/list']);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
