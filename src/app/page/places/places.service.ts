import { Injectable } from '@angular/core';
import { Place } from './place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In The Heart of NY city',
      'https://i.postimg.cc/sx2rBx06/manhattan-mansiions.jpg',
      149.99,
    ),
    new Place(
      'p2',
      'Bali resort',
      'the best resort in bali',
      'https://i.postimg.cc/7Pp4PHnV/bali-resort.jpg',
      189.99,
    ),
    new Place(
      'p3',
      'Hotel Sunroute Higashi Shinjuku',
      'the best hotel in tokyo city',
      'https://i.postimg.cc/43rP7SLr/Hotel-Sunroute-Higashi-Shinjuku.jpg',
      199.99,
    ),
  ];

  constructor() { }

  getPlaces(): Place[] {
    return [...this._places];
  }
}
