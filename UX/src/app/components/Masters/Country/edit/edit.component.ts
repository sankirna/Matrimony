import { Component, OnInit } from '@angular/core';
import { CountryService } from '../countryservice';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent  implements OnInit{
  name:string='';
  constructor( private countryService: CountryService ) {
  }
  ngOnInit() {
  }
}
