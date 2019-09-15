import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookingsService } from './bookings.service';
import { Booking } from './booking';
import { IonItemSliding, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit, OnDestroy {
  bookings: Booking[];
  isLoading = false;
  private _subs = new Subscription();
  constructor(
    private bookingsService: BookingsService,
  ) { }

  ngOnInit() {
    this._subs.add(this.bookingsService.bookings.subscribe(b => this.bookings = b));
  }
  ionViewWillEnter() {
    this.isLoading = true;
    this._subs.add(this.bookingsService.fetchBookings().subscribe(() => this.isLoading = false));
  }
  onBookingCancel(bookingId: string, sliderEl: IonItemSliding) {
    this.bookingsService.cancelBooking(bookingId).subscribe(() => sliderEl.close());
  }

  ngOnDestroy() {
    this._subs.unsubscribe();
  }
}
