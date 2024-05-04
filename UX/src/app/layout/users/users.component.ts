import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
 
export class UsersComponent implements AfterViewInit {
  displayedColumns: string[] = ['id','role', 'username',  'email'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort ;
  users: any[] | undefined = [];
  constructor() {
    // Create 100 users
    
    this.users =[{id:'nyn',role:'admin',username:'nayan',email:'nayan@gmail.com'},
    {id:'nyn',role:'admin',username:'nayan',email:'nayan@gmail.com'},
    {id:'sanki',role:'admin',username:'nayan',email:'nayan@gmail.com'},
    {id:'rinku',role:'admin',username:'nayan',email:'nayan@gmail.com'},
    {id:'nayan',role:'admin',username:'nayan',email:'nayan@gmail.com'},
    {id:'rnnyn',role:'admin',username:'nayan',email:'nayan@gmail.com'},
    {id:'nynrn',role:'admin',username:'nayan',email:'nayan@gmail.com'},
    {id:'sankirna',role:'admin',username:'nayan',email:'nayan@gmail.com'},
    {id:'test',role:'admin',username:'nayan',email:'nayan@gmail.com'},
    {id:'tsts',role:'admin',username:'nayan',email:'nayan@gmail.com'},
    {id:'demo',role:'admin',username:'nayan',email:'nayan@gmail.com'},
    {id:'ussr',role:'admin',username:'nayan',email:'nayan@gmail.com'},
    {id:'nyn1',role:'admin',username:'nayan',email:'nayan@gmail.com'},
    {id:'nyn2',role:'admin',username:'nayan',email:'nayan@gmail.com'},
    {id:'nyn3',role:'admin',username:'nayan',email:'nayan@gmail.com'},
    {id:'nyn4',role:'admin',username:'nayan',email:'nayan@gmail.com'}]
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.users);
    
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
 