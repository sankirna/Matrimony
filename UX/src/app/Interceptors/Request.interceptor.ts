import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { AuthService } from "../services/authService";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { environment } from '../../environments/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let  modifiedReq = request.clone({
        url: environment.apiUrl + request.url,
        setHeaders:{ 'Content-Type': 'application/json' }
      });
    return next.handle(modifiedReq ? modifiedReq : request).pipe(tap(() => {
    },
    (err: any) => {
   
  }));
 }
}
