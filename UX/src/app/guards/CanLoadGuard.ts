import { Injectable } from "@angular/core";
import { CanLoad, Route } from "@angular/router";
import { AuthService } from "../services/authService";

@Injectable({
   providedIn: "root",
})
export class CanLoadGuard implements CanLoad {
   constructor(private authService: AuthService) {}

   canLoad(route: Route): boolean {
      if (this.authService.checkAuthentication()) {
         return true;
      } else {
         // Redirect to the login page or display an error message.
         return false;
      }
   }
}
