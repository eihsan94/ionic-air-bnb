import { Injectable } from '@angular/core';
import { Place } from './place';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { take, map, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places = new BehaviorSubject < Place[] >(
    [
      new Place(
        'p1',
        'Manhattan Mansion',
        'In The Heart of NY city',
        'https://i.postimg.cc/sx2rBx06/manhattan-mansiions.jpg',
        149.99,
        new Date('2019-01-01'),
        new Date('2019-12-31'),
        'abc',
      ),
      new Place(
        'p2',
        'Bali resort',
        'the best resort in bali',
        'https://i.postimg.cc/7Pp4PHnV/bali-resort.jpg',
        189.99,
        new Date('2019-01-01'),
        new Date('2019-12-31'),
        'xyz',
      ),
      new Place(
        'p3',
        'Hotel Sunroute Higashi Shinjuku',
        'the best hotel in tokyo city',
        'https://i.postimg.cc/43rP7SLr/Hotel-Sunroute-Higashi-Shinjuku.jpg',
        199.99,
        new Date('2019-01-01'),
        new Date('2019-12-31'),
        'abc',
      ),

    ]
  );

  constructor (
    private authService: AuthService
  ) { }

  get places(): Observable < Place[] > {
    return this._places.asObservable();
  }

  getPlace(id: any) {
    return this.places.pipe(
      take(1), // take one object emitted from the observable and unsubscribe -> get 1 Place[] then unsub
      map(pl => ({...pl.find(p => p.id === id)})));
  }

  addPlace(place: Place): Observable < Place[]> {
    place.id = Math.random().toString();
    place.availableFrom = new Date(place.availableFrom);
    place.availableTo = new Date(place.availableTo);
    place.imageUrl = 'https://i.postimg.cc/43rP7SLr/Hotel-Sunroute-Higashi-Shinjuku.jpg';
    place.userId = this.authService.userId;
    return this.places.pipe(
      take(1),
      delay(1000), // delay the observable res for 1s
      tap(p => this._places.next(p.concat(place)))); // we use tap because we want to run the fn without completing the subs
  }

  updateOffer(placeId: string, title: string,  description: string): Observable < Place[]> {
    return this.places.pipe(
      take(1),
      delay(1000),
      tap(p =>  {
        const placeIdx = p.findIndex(pl => pl.id === placeId);
        const updatedPlaces = [...p];
        const  oldPlace = updatedPlaces[placeIdx];
        updatedPlaces[placeIdx] = new Place(
          oldPlace.id,
          title,
          description,
          oldPlace.imageUrl,
          oldPlace.price,
          oldPlace.availableFrom,
          oldPlace.availableTo,
          oldPlace.userId,
        );
        this._places.next(updatedPlaces);
      })
    );
  }
}
