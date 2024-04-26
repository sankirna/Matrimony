import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class TestService {
    private apiBaseUrl = 'https://localhost:7050/api/'; // Replace with your API endpoint
    constructor(private http: HttpClient
        ,private router: Router
    ) { }

    getData(): Observable<any> {
        const api='WeatherForecast';
        return this.http.get<any>(this.apiBaseUrl+api);
    }
}
