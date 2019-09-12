import { Injectable } from '@angular/core';
import { Booking } from './booking';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { take, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private _bookings = new BehaviorSubject < Booking[] >([]);

  get bookings(): Observable < Booking[] > { // getter property for setting the bookings variable for other component to access
    return this._bookings.asObservable();
  }

  constructor(
    private authService: AuthService
  ) { }

  addBooking(booking: Booking): Observable <any> {
    booking.id = Math.random().toString();
    booking.userId = this.authService.userId;
    return this.bookings.pipe(
      take(1),
      delay(1000), // delay the observable res for 1s
      tap(b => this._bookings.next(b.concat(booking)))); // we use tap because we want to run the fn without completing the subs
  }

  cancelBooking(bookingId: string) {
    return this.bookings.pipe(
      take(1),
      delay(1000),
      tap(p =>  {
        const latestBookings = p.filter(pl => pl.id !== bookingId);
        this._bookings.next(latestBookings);
      })
    );
  }
}
