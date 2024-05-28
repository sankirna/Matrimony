import { Component, OnInit, ViewChild } from '@angular/core';
import { LoaderService } from '../../services/LoaderService';
import { delay } from 'rxjs';
import { TestService } from '../../services/TestService';
import { AppCommonModule } from '../../components/Common/common.module';
import { MatSidenav } from '@angular/material/sidenav';
import { CommonService } from '../../services/commonService';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  @ViewChild('drawer') public drawer:  MatSidenav | undefined;
  isLoading: boolean = false;

  constructor(
    private loaderService: LoaderService,
    private testService: TestService,
    private commonService: CommonService
  ){ }

  ngOnInit() {
    this.listenToLoading();
    this.getPrimaryData();
  }

  getPrimaryData(){
    this.commonService.getPrimaryData().subscribe(
      (response) => {
        this.commonService.primaryData = response;
        console.log(this.commonService.primaryData);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  drawerClick() {
    if(this.drawer!=null){
      this.drawer.toggle();
    }
  }

  listenToLoading(): void {
    this.loaderService.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.isLoading = <boolean>loading;
      });
  }
   
  customError(){
    this.testService.customError()
    .subscribe(
      (response) => { 
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
