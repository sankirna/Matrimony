import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/authService';

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
    , private router: Router
    , private activatedRoute: ActivatedRoute) {
  }
  public ngOnInit() {
    this.isLoggedIn=this.router.url === '/login'
  }

  logout() {
    this.authService.clearToken();
    this.authService.goToLogin();
  }
}
