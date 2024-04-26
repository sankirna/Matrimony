import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiBaseUrl = 'https://localhost:7050/api/'; // Replace with your API endpoint

    constructor(private http: HttpClient) { }

    fetchUsers(): Observable<any[]> {
        return this.http.get<any[]>(this.apiBaseUrl);
    }

    login(user: any): Observable<any> {
        const api='Authenticate/login';
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<any>(this.apiBaseUrl+api, user, { headers });
    }

    createUser(user: any): Observable<any> {
        const headers =  new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            'key': 'x-api-key',
            'value': 'NNctr6Tjrw9794gFXf3fi6zWBZ78j6Gv3UCb3y0x',

        });
        return this.http.post<any>(this.apiBaseUrl, user, { headers });
    }

    deleteUser(userId: number): Observable<any> {
        return this.http.delete<any>(`${this.apiBaseUrl}/${userId}`);
    }
}