import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlacesService } from '../../places.service';
import { NavController } from '@ionic/angular';
import { Place } from '../../place';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit, OnDestroy {
  place: Place;
  private _placesSub = new Subscription();

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap =>
      !paramMap.has('placeId') ? this.navCtrl.navigateBack('/places/tabs/discover') :
      this._placesSub.add(this.placesService.getPlace(paramMap.get('placeId')).subscribe(p => this.place = p))
    );
  }

  ngOnDestroy() {
    this._placesSub.unsubscribe();
  }
}
