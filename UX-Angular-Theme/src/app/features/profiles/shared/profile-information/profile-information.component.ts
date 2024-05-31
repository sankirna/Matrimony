import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EnumModel, PrimaryDataModel } from '../../../../models/common.model';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css']
})
export class ProfileInformationComponent implements OnInit, AfterViewInit {
  @Input() form: FormGroup = new FormGroup({});
  @Input() genderTypes: EnumModel[] | undefined=[];

  constructor(
    private commonService: CommonService
    ) {
  }

  ngOnInit() {
    
  }
  ngAfterViewInit(): void {
    // let model=new PrimaryDataModel()
    // this.commonService.primaryDataSubject.next(model);
    // this.commonService.primaryDataSubject.subscribe((event)=> {
    //   debugger
    //   this.genderTypesNew=event.genderTypes;
    // })

  }
}
