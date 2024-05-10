import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryListModel, CountryModel, CountrySearchModel } from '../country.model';
import { PagedListModel } from '../../../Common/Models/BasePagedListModel';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  name= 'test';
  constructor(private http: HttpClient
) { }

  list(model: CountrySearchModel){
    const api='Country/List';
    return this.http.post<PagedListModel<CountryModel>>(api, model,{params:{isPageType:true}});
  }

  get(id: number){
    const api='Country/get';
    return this.http.post<CountryModel>(api, null, {params:{id:id}});
  }

  create(model: CountryModel){
    const api='Country/Create';
    return this.http.post<CountryModel>(api, model);
  }

  update(model: CountryModel){
    const api='Country/update';
    return this.http.post<CountryModel>(api, model);
  }

  
}
