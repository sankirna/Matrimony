import { Injectable } from "@angular/core";
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable({
   providedIn: "root",
})
export class ChildAuthGuard implements CanActivateChild {
   canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      // Your logic here is to determine access to child routes.
      return true; // Return true to allow access, or false to deny access.
   }
}