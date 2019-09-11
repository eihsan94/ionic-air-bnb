import { Component, OnInit } from '@angular/core';
import { Place } from '../../place';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  form: FormGroup;
  place: Place;
  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService
  ) { }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        !paramMap.has('placeId') ? this.navCtrl.navigateBack('/places/tabs/discover') :
        this.place = this.placesService.getPlace(paramMap.get('placeId'));
        this.form = new FormGroup({
          title: new FormControl(this.place.title, {
            updateOn: 'blur',
            validators: [
              Validators.required
            ]
          }),
          description: new FormControl(this.place.description, {
            updateOn: 'blur',
            validators: [
              Validators.required,
              Validators.maxLength(180),
            ]
          }),
          });

      }
    );
  }

}
