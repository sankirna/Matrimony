import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/authService';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn: boolean | undefined=false;
  isArrivalRoute: boolean | undefined;
  isLoggingOut: boolean | undefined;
  title = 'UX';
  constructor(private authService: AuthService
    , private router: Router,private Location:Location
    , private activatedRoute: ActivatedRoute) {  
       
  }
  public ngOnInit() {
    this.isLoggedIn=this.Location.path() === '/login'
  }

  logout() {
    this.authService.clearToken();
    this.authService.goToLogin();
  }
}
