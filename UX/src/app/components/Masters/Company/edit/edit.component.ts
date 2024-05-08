import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent  implements OnInit{
  name:string='';
  constructor( private companyService: CompanyService ) {
  }
  ngOnInit() {
    this.name=this.companyService.name;
  }
}
