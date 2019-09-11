import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  loadedOffers: Place[];
  constructor(
    private placesService: PlacesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loadedOffers = this.placesService.getPlaces();
  }

  onEdit(offerId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigateByUrl(`/places/tabs/offers/${offerId}`);
  }
}
