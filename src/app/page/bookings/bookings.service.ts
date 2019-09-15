import { Injectable } from '@angular/core';
import { Booking } from './booking';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { take, tap, delay, switchMap, map, switchMapTo } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

interface BookingData {
  bookedFrom: string;
  bookedTo: string;
  guestNumber: number;
  firstName: string;
  lastName: string;
  placeId: string;
  placeImage: string;
  placeTitle: string;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private _bookings = new BehaviorSubject < Booking[] >([]);

  get bookings(): Observable < Booking[] > { // getter property for setting the bookings variable for other component to access
    return this._bookings.asObservable();
  }

  constructor(
    private authService: AuthService,
    private http: HttpClient,
  ) { }

  addBooking(booking: Booking): Observable <any> {
    let generatedID;
    return this.authService.userId.pipe(
      take(1),
      switchMap(userId => {
        booking.userId = userId;
        if (!userId ) {
          throw new Error('No Id found!');
        }
        return this.http.post<{name: string}>('https://ionic-base-app-7888a.firebaseio.com/bookings.json', {...booking, id: null})
        .pipe(
          switchMap(resData => {
            generatedID = resData.name; // unique id returned from firebase
            return this.bookings;
          }), // the http req will return the name observable so we change that return to place observable here
          take(1),
          tap(b => {
            booking.id = generatedID;
            return this._bookings.next(b.concat(booking));
          })
        ); // we use tap because we want to run the fn without completing the subs)
      })
    );
  }

  cancelBooking(bookingId: string): Observable < any > {
      return this.http.delete(`https://ionic-base-app-7888a.firebaseio.com/bookings/${bookingId}.json`).pipe(
      switchMap(() => this.bookings),
      take(1),
      tap(p =>  {
        const latestBookings = p.filter(pl => pl.id !== bookingId);
        this._bookings.next(latestBookings);
      })
    );

  }

  fetchBookings(): Observable < Booking[] >  {
    return this.authService.userId.pipe(
      take(1),
      switchMap(userId => this.http.get< {[key: string]: BookingData} >
        (`https://ionic-base-app-7888a.firebaseio.com/bookings.json?orderBy="userId"&equalTo="${userId}"`)
      ),
      map(resData => {
        const bookings = [];
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            bookings.push(
              new Booking(
                key,
                resData[key].placeId,
                resData[key].userId,
                resData[key].placeTitle,
                resData[key].placeImage,
                resData[key].firstName,
                resData[key].lastName,
                resData[key].guestNumber,
                new Date(resData[key].bookedFrom),
                new Date(resData[key].bookedTo),
                )
              );
          }
        }
        return bookings; // return the reconstructed places array to the next operator
        // return []; // testing
      }),
      tap(bookings => {
        this._bookings.next(bookings);
      })
    );
  }
}
