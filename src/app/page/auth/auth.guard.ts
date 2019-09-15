import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { take, tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad { // CanLoad is for guarding the lazy loaded component
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}
  canLoad( route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.userIsAuthenticated.pipe(
      take(1),
      switchMap( // ------------------------------------------------------------------------------------> receive Observable < boolean >
        isAuthenticated => !isAuthenticated ? this.authService.autoLogin() : of(isAuthenticated) // ----> return autoLogin() : Observable < boolean > | Of(isAuthenticated): Observable < boolean >
      ), // --------------------------------------------------------------------------------------------> return Observable < boolean >
      tap(isAuthenticated => { // ----------------------------------------------------------------------> receive Observable < boolean > tapping the boolean observable
        if (!isAuthenticated) {
          this.router.navigateByUrl('/auth');  // ------------------------------------------------------> navigate to login if not authenticated
        }
      }),
    ); // ----------------------------------------------------------------------------------------------> return Observable < boolean >

  }

}
