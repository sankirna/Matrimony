import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  name= 'test';
  private apiBaseUrl = 'https://localhost:7050/api/';
  constructor(private http: HttpClient
) { }

  list(name: string){
    const api='Authenticate/login';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiBaseUrl+api, name, { headers });
  }
}
