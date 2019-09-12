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
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
    this._subs.add(this.bookingsService.bookings.subscribe(b => this.bookings = b));
  }
  ionViewWillEnter() {
    this.isLoading = true;
    this._subs.add(this.bookingsService.fetchBookings().subscribe(() => this.isLoading = false));
  }
  onBookingCancel(bookingId: string, sliderEl: IonItemSliding) {
    sliderEl.close();
    this.loadingCtrl.create({
      message: 'canceling  booking...'
    }).then(loadingEl => {
      loadingEl.present();
      this.bookingsService.cancelBooking(bookingId).subscribe(() => {
        loadingEl.dismiss();
      });
    });
  }

  ngOnDestroy() {
    this._subs.unsubscribe();
  }
}
