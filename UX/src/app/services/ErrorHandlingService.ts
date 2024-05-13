import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
})
export class ErrorHandlingService {
    /**
     *
     */
    constructor(private snackBar: MatSnackBar) {
    }
    handleError(error: HttpErrorResponse) {
        let errorMessage = 'An error occurred';
        if (error.error instanceof ErrorEvent) {
            // Client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            let config = new MatSnackBarConfig();
            config.verticalPosition = 'top';
            let message=_.join(error.error.data.errors, '\n');
            this.snackBar.open(message, "close", config);
        }

        // Perform additional error handling tasks (e.g., logging, display error message)
        console.error(errorMessage);

        // Throw the error to propagate it to the caller
        return throwError(errorMessage);
    }
}