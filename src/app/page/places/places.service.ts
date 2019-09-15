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
  private _places = new BehaviorSubject < Place[] > ([]);

  constructor(
    private authService: AuthService,
    private http: HttpClient,
  ) {}

  get places(): Observable < Place[] > {
    return this._places.asObservable();
  }

  fetchPlaces(): Observable < Place[]  > {
    return this.http.get < { [key: string]: PlaceData } > (`https://ionic-base-app-7888a.firebaseio.com/offered-places.json`).pipe(
      take(1),
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
      return this.http.get < Place > (`https://ionic-base-app-7888a.firebaseio.com/offered-places/${id}.json`).pipe(
      map(resData => new Place(
        id,
        resData.title,
        resData.description,
        resData.imageUrl,
        resData.price,
        new Date(resData.availableFrom),
        new Date(resData.availableTo),
        resData.userId,
      )));
  }

  addPlace(place: Place): Observable < Place[] > {
    let generatedID: string; // id that is being saved inside db
    return this.authService.userId.pipe(
      take(1),
      switchMap(userId => {
        if (!userId) {
          throw new Error('no user found!');
        }
        place.availableFrom = new Date(place.availableFrom);
        place.availableTo = new Date(place.availableTo);
        place.imageUrl = 'https://i.postimg.cc/43rP7SLr/Hotel-Sunroute-Higashi-Shinjuku.jpg';
        place.userId = userId;
        return this.http.post < {
          name: string
        } > ('https://ionic-base-app-7888a.firebaseio.com/offered-places.json', {
          ...place,
          id: null
        });
      }),
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
  updateOffer(placeId: string, title: string, description: string): Observable < Place[] > {
    let updatedPlaces: Place[];
    return this.places.pipe(
      take(1),
      switchMap(p => !p || p.length <= 0 ? this.fetchPlaces() : of (p)), // if the data is not loaded yet fetch the data from the server
      switchMap(p => { // parse the fetch data
        const placeIdx = p.findIndex(pl => pl.id === placeId);
        updatedPlaces = [...p];
        const oldPlace = updatedPlaces[placeIdx];
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
        return this.http.put < Place[] > (`https://ionic-base-app-7888a.firebaseio.com/offered-places/${placeId}.json`, {
          ...updatedPlaces[placeIdx],
          id: null
        });
      }),
      tap(() => {
        this._places.next(updatedPlaces);
      })
    );
  }
  deletePlace(placeId): Observable < Place[] > {
    return this.http.delete(`https://ionic-base-app-7888a.firebaseio.com/offered-places/${placeId}.json`).pipe(
      switchMap(() => this.places),  // ----------------------------------------------------------------------------------> Observable < Place[]>
      take(1),
      tap(p =>  { // -----------------------------------------------------------------------------------------------------> Observable < Place[]>
        const latestBookings = p.filter(pl => pl.id !== placeId); // filter the deleted place from the _places subjects
        this._places.next(latestBookings);
      })
    );
  }
}
