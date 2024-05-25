import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '../../../services/authService';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})
export class AppHeaderComponent {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  @Output() drawerClickCallBack: EventEmitter<boolean> = new EventEmitter();
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  constructor(private authService: AuthService){

  }
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  logout(){
    this.authService.clearToken();
    this.authService.goToLogin();
  }

  drawerClick() {
    this.drawerClickCallBack.emit();
  }

}

