import { Component, OnInit } from '@angular/core';
import { ProfileModel, ProfileSearchModel } from '../profile.model';
import { PaggerModel } from '../../../Common/Models/BasePagedListModel';
import { MatTableDataSource } from '@angular/material/table';
import { ProfileService } from '../profileService';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, CustomConfirmDialogComponent } from '../../Common/custom-confirm-dialog/custom-confirm-dialog.component';
import { BaseSearchModel } from '../../../Common/Models/BaseSearchModel';

@Component({
  selector: 'app-profile-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ProfileListComponent implements OnInit {

  searchModel: ProfileSearchModel = new ProfileSearchModel();
  paggerModel: PaggerModel = new PaggerModel();
  list: ProfileModel[] = [];
  displayedColumns: string[] = ['FirstName','Actions'];
  dataSource: MatTableDataSource<ProfileModel>;

  constructor(private profileService: ProfileService
     , private router: Router
     , private route: ActivatedRoute
     , private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource(this.list);
  }

  ngOnInit() {
    this.search();
  }

  applyFilter() {
    this.searchModel.start=0;
    this.search();
  }

  search() {
    this.profileService.list(this.searchModel).subscribe(
      (response) => {
        this.list = <ProfileModel[]>response.data;
        this.dataSource = new MatTableDataSource(this.list);
        this.paggerModel = <PaggerModel>response.paggerModel;
        console.log(this.paggerModel);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  edit(row: ProfileModel){
    this.router.navigateByUrl('/profile/edit/'+ row.id);
    //this.router.navigate(['/Profile/Edit'], {queryParams:{id: row.id}, relativeTo: this.route});
  }


  delete(row: ProfileModel){
    const message = `Are you sure you want to do delete?`;
    const dialogData = new ConfirmDialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(CustomConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult){
        this.profileService.delete(<number>row.id).subscribe(
          (response) => {
            console.log(response);
            this.applyFilter();
          },
          (error) => {
            console.error(error);
          }
        );
      }
    });
    
  }

  ChangePage($event: BaseSearchModel) {
    this.searchModel.start = $event.start;
    this.searchModel.length = $event.length;
    this.search();
  }
  
  addNew(){
    this.router.navigateByUrl('/profile/create');
  }
}
