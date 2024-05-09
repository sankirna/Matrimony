import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryListModel, CountrySearchModel } from '../company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  name= 'test';
  constructor(private http: HttpClient
) { }

  list(model: CountrySearchModel){
    const api='Country/List';
    return this.http.post<CountryListModel>(api, model,{params:{isPageType:true}});
  }
}
