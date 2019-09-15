import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, ModalController, ActionSheetController, LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../../places.service';
import { Place } from '../../place';
import { ModalOptions } from '@ionic/core';
import { CreateBookingComponent } from 'src/app/page/bookings/create-booking/create-booking.component';
import { Subscription } from 'rxjs';
import { BookingsService } from 'src/app/page/bookings/bookings.service';
import { Booking } from 'src/app/page/bookings/booking';
import { AuthService } from 'src/app/page/auth/auth.service';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit, OnDestroy {
  place: Place;
  isBookable: boolean;
  isLoading = false;
  private _placesSub = new Subscription();

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private authService: AuthService,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private bookingsService: BookingsService,
    private alertCtrl: AlertController,
    private router: Router,

  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if (!paramMap.has('placeId')) {
          this.navCtrl.navigateBack('/places/tabs/discover');
          return;
        }
        this.isLoading = true;
        let fetchedUserId: string;
        this.authService.userId.pipe(
          take(1),
          switchMap(userId => {
            if (!userId) {
              throw new Error('user id not found!');
            }
            fetchedUserId = userId;
            return this.placesService.getPlace(paramMap.get('placeId'));
          })
        ).subscribe(
          p => {
            this.place = p;
            this.isBookable = p.userId !== fetchedUserId;
            this.isLoading = false;
          },
          err => {
            this.alertCtrl.create({
              header: 'An Error Occured!',
              message: 'Data could not be fetched, Please try again later!',
              buttons: [{
                text: 'Okay',
                handler: () => {
                  this.router.navigateByUrl('/places/tabs/discover');
                }
              }],
            })
            .then(alertEl => {
              alertEl.present();
            });
          }
        );
      }
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
      this.authService.userId.pipe(take(1)).subscribe(userId => {
        if (resultData.role === 'confirm') {
            const data: Booking  = resultData.data.bookingData;
            const newBooking = new Booking(
              this.place.id,
              this.place.title,
              userId,
              this.place.title,
              this.place.imageUrl,
              data.firstName,
              data.lastName,
              data.guestNumber,
              data.bookedFrom,
              data.bookedTo,
            );
            this.bookingsService.addBooking(newBooking).subscribe();
        }
      });
    });
  }

  ngOnDestroy() {
    this._placesSub.unsubscribe();
  }
}
