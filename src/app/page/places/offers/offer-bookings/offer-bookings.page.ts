import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../places.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    ) { }

  ngOnInit() {
  }

  OnBookOffer() {
    this.navCtrl.navigateBack('/places/tabs/offers');
  }
}
