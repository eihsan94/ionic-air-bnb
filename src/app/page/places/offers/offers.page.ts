import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit, OnDestroy {
  loadedOffers: Place[];
  isLoading = false;
  private _placesSub = new Subscription();

  constructor(
    private placesService: PlacesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this._placesSub.add(this.placesService.places.subscribe(p => this.loadedOffers = p));
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this._placesSub.add(this.placesService.fetchPlaces().subscribe(() => this.isLoading = false));
  }

  onEdit(offerId: string, sliderEl: IonItemSliding) {
    sliderEl.close();
    this.router.navigateByUrl(`/places/tabs/offers/edit/${offerId}`);
  }

  onDelete(offerId: string, sliderEl: IonItemSliding) {
    this.placesService.deletePlace(offerId).subscribe(() => sliderEl.close());
  }

  ngOnDestroy() {
    if (this._placesSub) {
      this._placesSub.unsubscribe();
    }
  }
}
