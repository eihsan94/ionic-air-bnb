import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, ModalController, ActionSheetController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { Place } from '../../place';
import { ModalOptions } from '@ionic/core';
import { CreateBookingComponent } from 'src/app/page/bookings/create-booking/create-booking.component';
import { Subscription } from 'rxjs';
import { BookingsService } from 'src/app/page/bookings/bookings.service';
import { Booking } from 'src/app/page/bookings/booking';
import { AuthService } from 'src/app/page/auth/auth.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit, OnDestroy {
  place: Place;
  isBookable: boolean;
  private _placesSub = new Subscription();

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private authService: AuthService,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private bookingsService: BookingsService,
    public loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap =>
      !paramMap.has('placeId') ? this.navCtrl.navigateBack('/places/tabs/discover') :
      this._placesSub.add(this.placesService.getPlace(paramMap.get('placeId')).subscribe( p => {
        this.place = p;
        this.isBookable = p.userId !== this.authService.userId;
      }))
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
      componentProps: {selectedPlace: this.place, selectedMode: mode},
    };
    this.modalCtrl.create(opts) // this is the created method
    .then(modalEl => {
      modalEl.present(); // this is the show modal method
      return modalEl.onDidDismiss(); // after close modal method
    })
    .then(resultData => {
      console.log(resultData.data);
      if (resultData.role === 'confirm') {
        this.loadingCtrl.create({message: 'Booking your place...'}).then(loadingEl => {
          loadingEl.present();
          const data: Booking  = resultData.data.bookingData;
          const newBooking = new Booking(
            this.place.id,
            this.place.title,
            this.authService.userId,
            this.place.title,
            this.place.imageUrl,
            data.firstName,
            data.lastName,
            data.guestNumber,
            data.bookedFrom,
            data.bookedTo,
          );
          this.bookingsService.addBooking(newBooking).subscribe(() => {
            loadingEl.dismiss();
          });
        });
      }
    });
  }

  ngOnDestroy() {
    this._placesSub.unsubscribe();
  }
}
