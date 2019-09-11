import { Injectable } from '@angular/core';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private _bookings: Booking[] = [
    {
      id: 'xyz',
      placeId: 'p1',
      placeTitle: 'Manhattan Mansion',
      guestNumber: 2,
      userId: 'abc'
    }
  ];
  get bookings(): Booking[] { // getter property for setting the bookings variable for other component to access
    return this._bookings;
  }

  constructor() { }
}
