import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  loadedOffers: Place[];
  constructor(
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.loadedOffers = this.placesService.getPlaces();
  }

}
