import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryListModel, CountryModel, CountrySearchModel } from '../company.model';
import { PagedListModel } from '../../../Common/Models/BasePagedListModel';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  name= 'test';
  constructor(private http: HttpClient
) { }

  list(model: CountrySearchModel){
    const api='Country/List';
    return this.http.post<PagedListModel<CountryModel>>(api, model,{params:{isPageType:true}});
  }

  create(model: CountryModel){
    const api='Country/Create';
    return this.http.post<CountryModel>(api, model);
  }
}
