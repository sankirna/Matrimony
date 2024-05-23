import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/LoaderService';
import { delay } from 'rxjs';
import { TestService } from '../../services/TestService';
import { AppCommonModule } from '../../components/Common/common.module';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  isLoading: boolean = false;

  constructor(
    private loaderService: LoaderService,
    private testService: TestService
  ){ }

  ngOnInit() {
    this.listenToLoading();
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
