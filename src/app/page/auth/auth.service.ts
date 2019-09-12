import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = true; // dev
  // private _userIsAuthenticated = false; // prod
  private _userId = 'abc'; // dev

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }
  get userId() {
    return this._userId;
  }
  constructor() { }

  login() {
    this._userIsAuthenticated = true;
  }

  logout() {
    this._userIsAuthenticated = false;
  }
}
