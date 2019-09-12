import { Injectable } from '@angular/core';
import { Place } from './place';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

interface PlaceData {
  availableFrom: string;
  availableTo: string;
  description: string;
  imageUrl: string;
  price: number;
  title: string;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places = new BehaviorSubject < Place[] >([]);

  constructor (
    private authService: AuthService,
    private http: HttpClient,
  ) { }

  get places(): Observable < Place[] > {
    return this._places.asObservable();
  }

  fetchPlaces() {
    return this.http.get<{[key: string]: PlaceData}>('https://ionic-base-app-7888a.firebaseio.com/offered-places.json')
    .pipe(
      map(resData => {
        const places = [];
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            places.push(
              new Place(
                key,
                resData[key].title,
                resData[key].description,
                resData[key].imageUrl,
                resData[key].price,
                new Date(resData[key].availableFrom),
                new Date(resData[key].availableTo),
                resData[key].userId)
              );
          }
        }
        return places; // return the reconstructed places array to the next operator
        // return []; // testing
      }),
      tap(places => {
        this._places.next(places);
      })
    );
  }
  getPlace(id: any): Observable < Place > {
    return this.http.get< Place >(`https://ionic-base-app-7888a.firebaseio.com/offered-places/${id}.json`)
    .pipe(map(resData =>  new Place(
      id,
      resData.title,
      resData.description,
      resData.imageUrl,
      resData.price,
      new Date(resData.availableFrom),
      new Date(resData.availableTo),
      resData.userId,
      )));
    // return this.places.pipe(
    //   take(1), // take one object emitted from the observable and unsubscribe -> get 1 Place[] then unsub
    //   map(pl => ({...pl.find(p => p.id === id)})));
  }

  addPlace(place: Place): Observable < Place[]> {
    let generatedID: string; // id that is being saved inside db
    place.availableFrom = new Date(place.availableFrom);
    place.availableTo = new Date(place.availableTo);
    place.imageUrl = 'https://i.postimg.cc/43rP7SLr/Hotel-Sunroute-Higashi-Shinjuku.jpg';
    place.userId = this.authService.userId;
    return this.http.post<{name: string}>('https://ionic-base-app-7888a.firebaseio.com/offered-places.json', {...place, id: null})
    .pipe(
      switchMap(resData => {
        generatedID = resData.name; // unique id returned from firebase
        return this.places;
      }), // the http req will return the name observable so we change that return to place observable here
      take(1),
      tap(p => {
        place.id = generatedID;
        return this._places.next(p.concat(place));
      })
    ); // we use tap because we want to run the fn without completing the subs);
  }

  // updateOffer(placeId: string, title: string,  description: string): Observable < Place[]> {
  updateOffer(placeId: string, title: string,  description: string): Observable < Place[]> {
    let updatedPlaces: Place[];
    return this.places.pipe (
      take(1),
      switchMap(p =>  !p || p.length <= 0 ?  this.fetchPlaces() : of(p)), // if the data is not loaded yet fetch the data from the server
      switchMap(p => { // parse the fetch data
        const placeIdx = p.findIndex(pl => pl.id === placeId);
        updatedPlaces = [...p];
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
        return this.http.put< Place[] >(`https://ionic-base-app-7888a.firebaseio.com/offered-places/${placeId}.json`,
          {...updatedPlaces[placeIdx], id: null}
        );
      }),
      tap(() => {
        this._places.next(updatedPlaces);
      })
    );
  }
}



/**
 * new Place(
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

 */
