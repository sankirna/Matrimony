import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { AuthService } from "../services/authService";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public authService: AuthService) {
  }  

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let modifiedReq;
    const token = this.authService.getToken();

    // we need the heck clone because the HttpRequest is immutable
    // https://angular.io/guide/http#immutability
    if (token) {
      modifiedReq = request.clone({ headers: request.headers.set('Authorization', `Bearer ${token}`)});
    }
    
    return next.handle(modifiedReq ? modifiedReq : request).pipe(tap(() => {
        // do nothing
    },
    (err: any) => {
    if (err instanceof HttpErrorResponse) {
      if (err.status === 0) {
        alert('what the heck, 0 HTTP code?');
      }
      if (err.status !== 401) {
        return;
      }
      this.authService.goToLogin();
    }
  }));
 }
}