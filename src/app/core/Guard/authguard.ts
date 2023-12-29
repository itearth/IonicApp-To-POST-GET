// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Check authentication state (e.g., if the user is logged in)
    if (this.isAuthenticated()) {
      return true; // Allow navigation
    } else {
      // Redirect to the login page and deny navigation
      this.router.navigate(['/sign-in']);
      return false;
    }
  }

  private isAuthenticated(): boolean {
    // Implement your authentication check logic here
    // For example, check if the user is logged in or has a valid token
    // You may use a service or a stored value to check the authentication state
    // Return true if authenticated, false otherwise
    // Replace this with your actual authentication logic
    return localStorage.getItem('userData') !== null;
  }
}
