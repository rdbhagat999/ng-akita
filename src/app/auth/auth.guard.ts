import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthQuery } from './state/auth.query';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private readonly router: Router, private readonly authQuery: AuthQuery) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.authQuery.isLoggedIn$.pipe(
      map((isAuth: boolean) => {
        if (isAuth) {
          return true;
        }
        this.router.navigateByUrl('login');
        return false;
      }),
      take(1),
    );
  }

}
