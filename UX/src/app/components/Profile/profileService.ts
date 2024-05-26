import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfileModel, ProfileSearchModel } from './profile.model';
import { PagedListModel } from '../../Common/Models/BasePagedListModel';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {

  }

  list(model: ProfileSearchModel){
    const api='profile/List';
    return this.http.post<PagedListModel<ProfileModel>>(api, model,{params:{isPageType:true}});
  }

  get(id: number){
    const api='profile/get';
    return this.http.post<ProfileModel>(api, null, {params:{id:id}});
  }

  create(model: ProfileModel){
    const api='profile/Create';
    return this.http.post<ProfileModel>(api, model);
  }

  update(model: ProfileModel){
    const api='profile/update';
    return this.http.post<ProfileModel>(api, model);
  }

  delete(id: number){
    const api='profile/delete';
    return this.http.post<number>(api, null, {params:{id:id}});
  }
}
