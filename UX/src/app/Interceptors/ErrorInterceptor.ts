import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from '../services/ErrorHandlingService';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(public errorHandlingService: ErrorHandlingService) {
    } 
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMessage = 'An error occurred';
                if (error.error instanceof ErrorEvent) {
                    // Client-side error
                    errorMessage = `Error: ${error.error.message}`;
                } else {
                    // Server-side error
                    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                }
                // Handle the error as desired (e.g., show an alert, log, etc.)
                this.errorHandlingService.handleError(error);
                console.error(errorMessage);
                return throwError(errorMessage);
            })
        );
    }
}