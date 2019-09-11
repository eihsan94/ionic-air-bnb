import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { Place } from '../../place';
import { ModalOptions } from '@ionic/core';
import { CreateBookingComponent } from 'src/app/page/bookings/create-booking/create-booking.component';

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
    private placesService: PlacesService,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap =>
      !paramMap.has('placeId') ? this.navCtrl.navigateBack('/places/tabs/discover') :
      this.place = this.placesService.getPlace(paramMap.get('placeId'))
    );
  }

  onBookPlace() {
    // this.navCtrl.navigateBack('/places/tabs/discover'); // this will navigate with correct animations
    this.actionSheetCtrl.create({
      header: 'Choose an Action',
      buttons: [
        {
          text: 'Select Date',
          handler: () => {
            this.openBookingModal('select');
          }
        },
        {
          text: 'Random Date',
          handler: () => {
            this.openBookingModal('random');
          }
        },
        {
          text: 'cancel',
          role: 'cancel',
        },
      ]
    })
    .then(
      actionSheetEl => {
        actionSheetEl.present();  // showing the action sheet
    });
  }

  openBookingModal(mode: 'select' | 'random') { // ts stating that the value of the mode should be selecet or random only
    console.log(mode);
    const opts: ModalOptions =  {
      component: CreateBookingComponent,
      componentProps: {selectedPlace: this.place},
    };
    this.modalCtrl.create(opts) // this is the created method
    .then(modalEl => {
      modalEl.present(); // this is the show modal method
      return modalEl.onDidDismiss(); // after close modal method
    })
    .then(resultData => {
      console.log(resultData);
      if (resultData.role === 'confirm') {
        console.log('BOOOKED!');
      }
    });
  }
}
