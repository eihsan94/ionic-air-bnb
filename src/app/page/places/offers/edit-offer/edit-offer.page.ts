import { Component, OnInit, OnDestroy } from '@angular/core';
import { Place } from '../../place';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../../places.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit, OnDestroy {
  form: FormGroup;
  place: Place;
  placeId: string;
  isLoading = false;
  private _placesSub = new Subscription();

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl : AlertController,
    ) { }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if (!paramMap.has('placeId')) {
          this.navCtrl.navigateBack('/places/tabs/discover');
          return;
        }
        this.placeId = paramMap.get('placeId');
        this.isLoading = true;
        this._placesSub.add(this.placesService.getPlace(paramMap.get('placeId')).subscribe(p => {
          this.place = p;
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
          this.isLoading = false;
        },
        err => {
          this.alertCtrl.create({
            header: 'An Error Occured!',
            message: 'Data could not be fetched, Please try again later!',
            buttons: [{
              text: 'Okay',
              handler: () => {
                this.router.navigateByUrl('/places/tabs/offers');
              }
            }],
          })
          .then(alertEl => {
            alertEl.present();
            
          })
        }));
      }
    );
  }

  onUpdateOffer() {
    if (!this.form.valid) {
      return;
    }
    this.loadingCtrl.create({
      message: 'updating offer...'
    }).then(loadingEl => {
      loadingEl.present();
      this.placesService.updateOffer(this.place.id, this.form.value.title, this.form.value.description).subscribe(() => {
        this.form.reset();
        this.router.navigateByUrl('/places/tabs/offers');
        loadingEl.dismiss();
      });
    });
  }

  ngOnDestroy() {
    this._placesSub.unsubscribe();
  }
}
