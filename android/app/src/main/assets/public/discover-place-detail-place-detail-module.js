(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discover-place-detail-place-detail-module"],{

/***/ "./src/app/page/bookings/create-booking/create-booking.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/page/bookings/create-booking/create-booking.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title padding>{{ selectedPlace.title}}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button margin (click)=\"onCancel()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content text-center padding>\n  <form #f=\"ngForm\" (ngSubmit)=\"onBookPlace()\">\n\n    <ion-grid>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\" [ngClass]=\"{'err': f.controls.firstname?.invalid && f.controls.firstname?.touched}\">First Name</ion-label>\n            <ion-input type=\"text\" ngModel name=\"firstname\" required></ion-input>\n          </ion-item>\n          <ion-item *ngIf=\"f.controls.firstname?.invalid && f.controls.firstname?.touched\" lines=\"none\">\n            <div class=\"err\">\n              This is required\n            </div>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\" [ngClass]=\"{'err': f.controls.lastName?.invalid && f.controls.lastName?.touched}\">Last Name</ion-label>\n            <ion-input type=\"lastName\" ngModel name=\"lastName\" required></ion-input>\n          </ion-item>\n          <ion-item *ngIf=\"f.controls.lastName?.invalid && f.controls.lastName?.touched\" lines=\"none\">\n            <div class=\"err\">\n              This is required\n            </div>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\" [ngClass]=\"{'err': f.controls.guestNumber?.invalid && f.controls.guestNumber?.touched}\">Number of Guests</ion-label>\n            <ion-select [ngModel]=\"'2'\" name=\"guestNumber\" required>\n              <ion-select-option value=\"1\">1</ion-select-option>\n              <ion-select-option value=\"2\">2</ion-select-option>\n              <ion-select-option value=\"2\">3</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item *ngIf=\"f.controls.guestNumber?.invalid && f.controls.guestNumber?.touched\" lines=\"none\">\n            <div class=\"err\">\n              This is required\n            </div>\n          </ion-item>\n        </ion-col>\n      </ion-row> \n\n      <ion-row>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\" [ngClass]=\"{'err': (f.controls.date_from?.invalid || !datesValid() && f.controls.date_to?.dirty) && f.controls.date_from?.touched }\">From</ion-label>\n            <ion-datetime \n            display-format=\"YYYY-MM-DD\" \n            picker-format=\"YYYY MMM DD\" \n            [min]=\"selectedPlace.availableFrom.toISOString()\" \n            [max]=\"selectedPlace.availableTo.toISOString()\" \n            [ngModel]=\"startDate\" \n            name=\"date_from\" \n            #startDateCtrl=\"ngModel\"\n              required></ion-datetime>\n          </ion-item>\n          <ion-item *ngIf=\"f.controls.date_from?.invalid && f.controls.date_from?.touched\" lines=\"none\">\n            <div class=\"err\">\n              This is required\n            </div>\n          </ion-item>\n          <ion-item *ngIf=\"!datesValid() && f.controls.date_from?.valid && f.controls.date_to?.dirty\" lines=\"none\">\n              <div class=\"err\">\n                The start date must be before the end date\n              </div>\n            </ion-item>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col size-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\" [ngClass]=\"{'err': (f.controls.date_to?.invalid || !datesValid() && f.controls.date_from?.dirty) && f.controls.date_to?.touched}\">To</ion-label>\n            <ion-datetime \n            display-format=\"YYYY-MM-DD\" \n            picker-format=\"YYYY MMM DD\" \n            [min]=\"startDateCtrl.value\" \n            [max]=\"selectedPlace.availableTo.toISOString()\" \n            [ngModel]=\"endDate\" \n            name=\"date_to\" \n            required>\n          </ion-datetime>\n          </ion-item>\n          <ion-item *ngIf=\"f.controls.date_to?.invalid && f.controls.date_to?.touched\" lines=\"none\">\n            <div class=\"err\">\n              This is required\n            </div>\n          </ion-item>\n          <ion-item *ngIf=\"!datesValid() && f.controls.date_to?.valid && f.controls.date_from?.dirty\" lines=\"none\">\n            <div class=\"err\">\n              The end date must be after the start date\n            </div>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-button [disabled]=\"f.invalid || !datesValid()\" color=\"primary\" type=\"submit\" expand=\"block\" type=\"submit\">\n            Book!\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/page/bookings/create-booking/create-booking.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/page/bookings/create-booking/create-booking.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvYm9va2luZ3MvY3JlYXRlLWJvb2tpbmcvY3JlYXRlLWJvb2tpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/page/bookings/create-booking/create-booking.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/page/bookings/create-booking/create-booking.component.ts ***!
  \**************************************************************************/
/*! exports provided: CreateBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBookingComponent", function() { return CreateBookingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _places_place__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../places/place */ "./src/app/page/places/place.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateBookingComponent = /** @class */ (function () {
    function CreateBookingComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    CreateBookingComponent.prototype.ngOnInit = function () {
        var availableFrom = new Date(this.selectedPlace.availableFrom);
        var availableTo = new Date(this.selectedPlace.availableTo);
        // generating random date
        if (this.selectedMode === 'random') {
            this.startDate =
                new Date(availableFrom.getTime() + Math.random() * (availableTo.getTime() - 7 * 24 * 60 * 60 * 1000 - availableFrom.getTime()))
                    .toISOString();
            this.endDate =
                new Date(new Date(this.startDate).getTime() + Math.random() *
                    (new Date(this.startDate).getTime() + 6 * 24 * 60 * 60 * 1000 - new Date(this.startDate).getTime())).toISOString();
        }
    };
    CreateBookingComponent.prototype.onCancel = function () {
        this.modalCtrl.dismiss(null, 'cancel'); // this.modalCtrl.dismiss(dataToPassBack, role)
    };
    CreateBookingComponent.prototype.onBookPlace = function () {
        if (!this.form.valid || !this.datesValid()) {
            return;
        }
        var newBooking = this.form.value;
        newBooking.bookedFrom = new Date(this.form.value.bookedFrom);
        newBooking.bookedTo = new Date(this.form.value.bookedTo);
        this.modalCtrl.dismiss({ bookingData: newBooking }, 'confirm');
    };
    CreateBookingComponent.prototype.datesValid = function () {
        var startDate = new Date(this.form.value.date_from);
        var endDate = new Date(this.form.value.date_to);
        return endDate > startDate;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _places_place__WEBPACK_IMPORTED_MODULE_1__["Place"])
    ], CreateBookingComponent.prototype, "selectedPlace", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CreateBookingComponent.prototype, "selectedMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], CreateBookingComponent.prototype, "form", void 0);
    CreateBookingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-booking',
            template: __webpack_require__(/*! ./create-booking.component.html */ "./src/app/page/bookings/create-booking/create-booking.component.html"),
            styles: [__webpack_require__(/*! ./create-booking.component.scss */ "./src/app/page/bookings/create-booking/create-booking.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], CreateBookingComponent);
    return CreateBookingComponent;
}());



/***/ }),

/***/ "./src/app/page/places/discover/place-detail/place-detail.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/page/places/discover/place-detail/place-detail.module.ts ***!
  \**************************************************************************/
/*! exports provided: PlaceDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetailPageModule", function() { return PlaceDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _place_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./place-detail.page */ "./src/app/page/places/discover/place-detail/place-detail.page.ts");
/* harmony import */ var src_app_page_bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/page/bookings/create-booking/create-booking.component */ "./src/app/page/bookings/create-booking/create-booking.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _place_detail_page__WEBPACK_IMPORTED_MODULE_5__["PlaceDetailPage"]
    }
];
var PlaceDetailPageModule = /** @class */ (function () {
    function PlaceDetailPageModule() {
    }
    PlaceDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _place_detail_page__WEBPACK_IMPORTED_MODULE_5__["PlaceDetailPage"],
                src_app_page_bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_6__["CreateBookingComponent"]
            ],
            entryComponents: [
                src_app_page_bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_6__["CreateBookingComponent"],
            ],
        })
    ], PlaceDetailPageModule);
    return PlaceDetailPageModule;
}());



/***/ }),

/***/ "./src/app/page/places/discover/place-detail/place-detail.page.html":
/*!**************************************************************************!*\
  !*** ./src/app/page/places/discover/place-detail/place-detail.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- \n      <ion-back-button></ion-back-button> :  this contains the back click  event with the icon embedded\n      defaultHref=\"/places/tabs/discover\":  if the page is reloaded it will still have the default routes that can help it navigate back\n       -->\n      <ion-back-button defaultHref=\"/places/tabs/discover\"></ion-back-button> \n    </ion-buttons>\n    <ion-title>{{ isLoading? 'Loading...' : place?.title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"isLoading\" text-center>\n    <ion-spinner color=\"primary\"></ion-spinner>\n  </div>\n  <ion-grid no-padding *ngIf=\"!isLoading\">\n    <ion-row>\n      <ion-col size-sm=\"6\" offset-sm=3 no-padding>\n        <ion-img [src]=\"place?.imageUrl\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=3 text-center padding>\n          <p>{{ place?.description }}</p>\n        </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"isBookable\">\n        <ion-col size-sm=\"6\" offset-sm=3 text-center>\n          <ion-button color=\"primary\" margin (click)=\"onBookPlace()\">Book</ion-button>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/places/discover/place-detail/place-detail.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/page/places/discover/place-detail/place-detail.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcGxhY2VzL2Rpc2NvdmVyL3BsYWNlLWRldGFpbC9wbGFjZS1kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/page/places/discover/place-detail/place-detail.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/page/places/discover/place-detail/place-detail.page.ts ***!
  \************************************************************************/
/*! exports provided: PlaceDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetailPage", function() { return PlaceDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../places.service */ "./src/app/page/places/places.service.ts");
/* harmony import */ var src_app_page_bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/page/bookings/create-booking/create-booking.component */ "./src/app/page/bookings/create-booking/create-booking.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_page_bookings_bookings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/page/bookings/bookings.service */ "./src/app/page/bookings/bookings.service.ts");
/* harmony import */ var src_app_page_bookings_booking__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/page/bookings/booking */ "./src/app/page/bookings/booking.ts");
/* harmony import */ var src_app_page_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/page/auth/auth.service */ "./src/app/page/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PlaceDetailPage = /** @class */ (function () {
    function PlaceDetailPage(navCtrl, activatedRoute, placesService, authService, modalCtrl, actionSheetCtrl, bookingsService, loadingCtrl, alertCtrl, router) {
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.placesService = placesService;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.bookingsService = bookingsService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.isLoading = false;
        this._placesSub = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
    }
    PlaceDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (paramMap) {
            _this.isLoading = true;
            !paramMap.has('placeId') ? _this.navCtrl.navigateBack('/places/tabs/discover') :
                _this._placesSub.add(_this.placesService.getPlace(paramMap.get('placeId')).subscribe(function (p) {
                    _this.place = p;
                    _this.isBookable = p.userId !== _this.authService.userId;
                    _this.isLoading = false;
                }, function (err) {
                    _this.alertCtrl.create({
                        header: 'An Error Occured!',
                        message: 'Data could not be fetched, Please try again later!',
                        buttons: [{
                                text: 'Okay',
                                handler: function () {
                                    _this.router.navigateByUrl('/places/tabs/discover');
                                }
                            }],
                    })
                        .then(function (alertEl) {
                        alertEl.present();
                    });
                }));
        });
    };
    PlaceDetailPage.prototype.onBookPlace = function () {
        var _this = this;
        // this.navCtrl.navigateBack('/places/tabs/discover'); // this will navigate with correct animations
        this.actionSheetCtrl.create({
            header: 'Choose an Action',
            buttons: [
                {
                    text: 'Select Date',
                    handler: function () {
                        _this.openBookingModal('select');
                    }
                },
                {
                    text: 'Random Date',
                    handler: function () {
                        _this.openBookingModal('random');
                    }
                },
                {
                    text: 'cancel',
                    role: 'cancel',
                },
            ]
        })
            .then(function (actionSheetEl) {
            actionSheetEl.present(); // showing the action sheet
        });
    };
    PlaceDetailPage.prototype.openBookingModal = function (mode) {
        var _this = this;
        console.log(mode);
        var opts = {
            component: src_app_page_bookings_create_booking_create_booking_component__WEBPACK_IMPORTED_MODULE_4__["CreateBookingComponent"],
            componentProps: { selectedPlace: this.place, selectedMode: mode },
        };
        this.modalCtrl.create(opts) // this is the created method
            .then(function (modalEl) {
            modalEl.present(); // this is the show modal method
            return modalEl.onDidDismiss(); // after close modal method
        })
            .then(function (resultData) {
            console.log(resultData.data);
            if (resultData.role === 'confirm') {
                _this.loadingCtrl.create({ message: 'Booking your place...' }).then(function (loadingEl) {
                    loadingEl.present();
                    var data = resultData.data.bookingData;
                    var newBooking = new src_app_page_bookings_booking__WEBPACK_IMPORTED_MODULE_7__["Booking"](_this.place.id, _this.place.title, _this.authService.userId, _this.place.title, _this.place.imageUrl, data.firstName, data.lastName, data.guestNumber, data.bookedFrom, data.bookedTo);
                    _this.bookingsService.addBooking(newBooking).subscribe(function () {
                        loadingEl.dismiss();
                    });
                });
            }
        });
    };
    PlaceDetailPage.prototype.ngOnDestroy = function () {
        this._placesSub.unsubscribe();
    };
    PlaceDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-place-detail',
            template: __webpack_require__(/*! ./place-detail.page.html */ "./src/app/page/places/discover/place-detail/place-detail.page.html"),
            styles: [__webpack_require__(/*! ./place-detail.page.scss */ "./src/app/page/places/discover/place-detail/place-detail.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"],
            src_app_page_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"],
            src_app_page_bookings_bookings_service__WEBPACK_IMPORTED_MODULE_6__["BookingsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PlaceDetailPage);
    return PlaceDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=discover-place-detail-place-detail-module.js.map