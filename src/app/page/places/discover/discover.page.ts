import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place';
import { MenuController } from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy {
  private _placesSub = new Subscription();
  loadedPlaces: Place[];
  listedLoadedPlaces: Place[];
  relevantPlaces: Place[];
  isLoading = false;

  constructor(
    private placesService: PlacesService,
    private authService: AuthService,
    private menuCtrl: MenuController,
  ) { }

  ngOnInit() {
    this._placesSub.add(this.placesService.places.subscribe(p => {
      this.loadedPlaces = p;
      this.relevantPlaces = this.loadedPlaces;
      this.listedLoadedPlaces = this.relevantPlaces.slice(1);
    }));
  }
  ionViewWillEnter() {
    this.isLoading = true;
    this._placesSub.add(this.placesService.fetchPlaces().subscribe(() => this.isLoading = false));
  }
  openMenu() {
    this.menuCtrl.open();
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    this.authService.userId.pipe(take(1)).subscribe(userId => {
      if (event.detail.value === 'all') {
        this.relevantPlaces = this.loadedPlaces;
      } else {
        this.relevantPlaces = this.loadedPlaces.filter(p => p.userId !== userId);
      }
      this.listedLoadedPlaces = this.relevantPlaces.slice(1);
    });

  }

  ngOnDestroy() {
    this._placesSub.unsubscribe();
  }
}
