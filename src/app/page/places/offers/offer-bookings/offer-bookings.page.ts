import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../places.service';
import { NavController } from '@ionic/angular';
import { Place } from '../../place';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  place: Place;
  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    ) { }

    ngOnInit() {
      this.activatedRoute.paramMap.subscribe(
        paramMap =>
        !paramMap.has('placeId') ? this.navCtrl.navigateBack('/places/tabs/discover') :
        this.place = this.placesService.getPlace(paramMap.get('placeId'))
      );
    }
}
