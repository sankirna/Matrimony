import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PrimaryDataModel } from '../models/common.model';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    primaryData: PrimaryDataModel| undefined;

    constructor(private http: HttpClient
              , private router: Router
    ) { }

    getPrimaryData(): Observable<PrimaryDataModel> {
        const api='Common/GetPrimaryData';
        return this.http.post<PrimaryDataModel>(api,null);
    }
    
}
