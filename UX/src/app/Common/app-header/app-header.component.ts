import { Component } from '@angular/core';
import { AuthService } from '../../services/authService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})
export class AppHeaderComponent {
  constructor(private authService: AuthService
    , private router: Router) {  
       
  }
  logout() {
    this.authService.clearToken();
    this.authService.goToLogin();
  }
}
