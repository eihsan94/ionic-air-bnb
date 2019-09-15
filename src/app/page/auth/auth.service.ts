import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';
import { User } from './user.model';
import { Plugins } from '@capacitor/core';

export interface AuthResData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user = new BehaviorSubject < User >(null);
  private _fireKey = environment.fireBaseApiKey;

  get userIsAuthenticated(): Observable < boolean > {
    return this._user.asObservable().pipe(map(user => user ? !!user.token : false));
  }
  get userId(): Observable < string > {
    return this._user.asObservable().pipe(map(user => user ? user.id : null));
  }
  get authToken(): Observable < string > {
    return this._user.asObservable().pipe(map(user => user ? user.token : null));
  }
  constructor(
    private http: HttpClient,
  ) { }

  autoLogin():  Observable < boolean > {
    return from(Plugins.Storage.get({key: 'authData'})).pipe(
      map(storedData => { // --------------------------------------------------> return Observable < storedData >
        if (!storedData.value) { // if the user logged out
          return null;
        }
        const data = JSON.parse(storedData.value) as {
          token: string,
          userId: string,
          expirationDate: string,
          email: string,
        };
        const tokenExpirationDate = new Date(data.expirationDate);
        const currentUser = new User(
          data.userId,
          data.email,
          data.token,
          new Date(data.expirationDate),
        );
        return tokenExpirationDate <= new Date() ? null : currentUser; // ----> return Observable < currentUser | null >
      }),
      tap(currentUser => this._user.next(currentUser)), // -------------------> return Observable < currentUser | null > // still get the same observable res but use that res to to insert new user inside the this._user observable
      map(currentUser => !!currentUser), // ----------------------------------> return Observable < boolean >
    );
  }

  signup(email: string, password: string): Observable < AuthResData > {
    return this.http.post < AuthResData > (
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this._fireKey}`,
      {
        email: email,
        password: password,
        returnSecureToken: true // set the token expiration date
      },
    ).pipe(
      take(1),
      tap(this.setUserData.bind(this)) // same as tap(userData => this.setUserData(userData))
    );
  }

  login(email: string, password: string): Observable < AuthResData > {
    return this.http.post <AuthResData> (
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this._fireKey}`,
      {email, password, returnSecureToken: true} // {email: email, password: password, returnSecureToken: true // set the token expiration date}
    ).pipe(
      take(1),
      tap(this.setUserData.bind(this)) // same as tap(userData => this.setUserData(userData))
      );
  }

  logout() {
    this._user.next(null);
    this.removeAuthData();
  }

  private setUserData(userData: AuthResData) {
    const expirationTime = new Date(new Date().getTime() + +userData.expiresIn * 1000);
    this._user.next(
      new User(
        userData.localId,
        userData.email,
        userData.idToken,
        expirationTime
      )
    );
    this.storeAuthData(
      userData.localId,
      userData.idToken,
      expirationTime.toISOString(),
      userData.email,
    );
  }

  private storeAuthData(
      userId: string,
      token: string,
      tokenExpirationDate: string,
      email: string,
    ) {
    const data: string = JSON.stringify ({
      userId, // userId: userId
      token,
      tokenExpirationDate,
      email,
    });
    Plugins.Storage.set({
      key: 'authData',
      value: data,
    });
  }
  private removeAuthData() {
    Plugins.Storage.remove({key: 'authData'});
  }
}
