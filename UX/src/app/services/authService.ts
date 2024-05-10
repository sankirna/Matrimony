import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private tokenKey:string = 'app_token';
    isAuthenticated = true;

    constructor(private http: HttpClient
        ,private router: Router
    ) { }

    store(content:string) {
        localStorage.setItem(this.tokenKey,  content);
    }

    getToken(){
        return localStorage.getItem(this.tokenKey);
    }

    clearToken() {
        localStorage.removeItem(this.tokenKey);
    }

    login(user: any): Observable<any> {
        const api='Authenticate/login';
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post<any>(api, user, { headers });
    }

    goToLogin(){
        this.router.navigate(['/Account/login']);
    }

    checkAuthentication(): boolean {
        return this.getToken()!=null && this.getToken()!='';
     }
}