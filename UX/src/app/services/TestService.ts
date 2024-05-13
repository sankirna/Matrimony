import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class TestService {
    constructor(private http: HttpClient
        ,private router: Router
    ) { }

    getData(): Observable<any> {
        const api='WeatherForecast';
        return this.http.get<any>(api);
    }

    customError(): Observable<any> {
        const api='TestError/customError';
        return this.http.post<any>(api,{});
    }

    applicationError(): Observable<any> {
        const api='TestError/applicationError';
        return this.http.post<any>(api,{});
    }

    modelError(): Observable<any> {
        const api='TestError/modelError';
        return this.http.post<any>(api,{name:'', email:''});
    }
}
