import { Component } from '@angular/core';
import { TestService } from '../../services/TestService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private testService: TestService
    ) {

     }

     ngOnInit() {
      this.fetchData();
  }

     fetchData(): void {
      this.testService.getData().subscribe(
        (response) => {
            console.log(response);
        },
        (error) => {
            console.error(error);
        }
    );
  }
}
