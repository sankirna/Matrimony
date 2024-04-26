import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/authService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UX';
  constructor(private authService: AuthService
    ,private router: Router) { }

  logout(){
 this.authService.clearToken();
 this.authService.goToLogin();
  }
}
