import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Place } from '../../places/place';
import { ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { Booking } from '../booking';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;
  @Input() selectedMode: 'select' | 'random';
  @ViewChild('f') form: NgForm;
  startDate: string;
  endDate: string;
  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    const availableFrom: Date = new Date(this.selectedPlace.availableFrom);
    const availableTo: Date = new Date(this.selectedPlace.availableTo);
    // generating random date
    if (this.selectedMode === 'random') {
      this.startDate =
        new Date(availableFrom.getTime() + Math.random() * (availableTo.getTime() - 7 * 24 *  60 * 60 * 1000 - availableFrom.getTime()))
        .toISOString();
      this.endDate =
        new Date(
          new Date(this.startDate).getTime() + Math.random() *
          (new Date(this.startDate).getTime() + 6 * 24 *  60 * 60 * 1000 - new Date(this.startDate).getTime())
        ).toISOString();
    }
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel'); // this.modalCtrl.dismiss(dataToPassBack, role)
  }

  onBookPlace() {
    if (!this.form.valid || !this.datesValid()) {
      return;
    }
    const newBooking: Booking = this.form.value;
    newBooking.bookedFrom = new Date(this.form.value.bookedFrom);
    newBooking.bookedTo = new Date(this.form.value.bookedTo);
    this.modalCtrl.dismiss({bookingData: newBooking}, 'confirm');
  }

  datesValid(): boolean {
    const startDate = new Date(this.form.value.date_from);
    const endDate = new Date(this.form.value.date_to);
    return endDate > startDate;
  }
}
