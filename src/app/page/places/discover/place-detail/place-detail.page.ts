import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { Place } from '../../place';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;
  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap =>
      !paramMap.has('placeId') ? this.navCtrl.navigateBack('/places/tabs/discover') :
      this.place = this.placesService.getPlace(paramMap.get('placeId'))
    );
  }

  onBookPlace() {
    this.navCtrl.navigateBack('/places/tabs/discover'); // this will navigate with correct animations
  }
}
