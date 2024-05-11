import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/LoaderService';
import { delay } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  isLoading: boolean = false;

  constructor(
    private loaderService: LoaderService
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
}
