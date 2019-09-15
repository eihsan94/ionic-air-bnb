import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { tap, take, switchMap } from 'rxjs/operators';
import { HttpErrorHandlerService } from './handle-error.service';
import { LoadingService } from './loading.service';
import { AuthService } from '../page/auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class HttpReqInterceptorService implements HttpInterceptor {
  reqMethod: string;
  constructor(
    private httpErrorHandlerService: HttpErrorHandlerService,
    private loadingService: LoadingService,
    private authService: AuthService,
    ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable < HttpEvent < any > > {
    this.reqMethod = req.method; // setting the req method
    this.startLoader();
    // We retrieve the token, if any
    return this.authService.authToken.pipe( // ------------------------------> return Observable < string > Token Observable
      take(1),
      switchMap(token => { // ------------------------------------------------> received Observable < string > Token Observable
        let newHeaders = req.headers;
        const url = this.firebaseReqTokenAppend(req.url, token);
        if (token) {
           // If we have a token, we append it to our new headers
           newHeaders = newHeaders.append('bearer', token);
        }

        // Finally we have to clone our request with our new headers
        // This is required because HttpRequests are immutable
        const authReq = req.clone({
          headers: newHeaders,
          url: url,
        });

        // Then we return an Observable that will run the request
        // or pass it to the next interceptor if any
        return next.handle(authReq); // --------------------------------------> return Observable < HttpEvent > // switchMap change Observable < string > => Observable < HttpEvent < any > >

      }), // -----------------------------------------------------------------> received Observable < HttpEvent >
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.stopLoader();
          }
        },
        err => {
          this.stopLoader();
          this.httpErrorHandlerService.handleError(err);
        },
      )
    );
  }
  private startLoader(): void {
    if (this.reqMethod !== 'GET') { // loading ctrller is for other than GET req // GET req should use ion spinner
      this.loadingService.start('loading...');
    }
  }
  private stopLoader(): void {
    if (this.reqMethod !== 'GET') { // loading ctrller is for other than GET req // GET req should use ion spinner
      this.loadingService.stop();
    }
  }
  private firebaseReqTokenAppend(reqUrl: string, token: string): string {
    // this is the type of req that firebase accept
    const queryType = reqUrl.includes('?') ? '&' : '?'; // if there is query in url already add the token to existing query else make a new query
    return reqUrl.includes('firebase') ? `${reqUrl}${queryType}auth=${token}` : reqUrl;
  }
}
