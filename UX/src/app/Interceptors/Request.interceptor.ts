import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { AuthService } from "../services/authService";
import { Injectable } from "@angular/core";
import { Observable, finalize, tap } from "rxjs";
import { environment } from '../../environments/environment';
import { LoaderService } from "../services/LoaderService";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(
    private loaderService: LoaderService
  ){ }
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.setLoading(true, request.url);
    let  modifiedReq = request.clone({
        url: environment.apiUrl + request.url,
        setHeaders:{ 'Content-Type': 'application/json' }
      });
    return next.handle(modifiedReq ? modifiedReq : request).pipe(tap(() => {
    },
    
    (err: any) => {
   
  })).pipe(
    finalize(() =>{
      this.loaderService.setLoading(false, request.url);
    }
    ) ) 
 }
}
