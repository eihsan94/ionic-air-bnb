(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-bookings-bookings-module"],{

/***/ "./src/app/page/bookings/bookings.module.ts":
/*!**************************************************!*\
  !*** ./src/app/page/bookings/bookings.module.ts ***!
  \**************************************************/
/*! exports provided: BookingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsPageModule", function() { return BookingsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bookings_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookings.page */ "./src/app/page/bookings/bookings.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _bookings_page__WEBPACK_IMPORTED_MODULE_5__["BookingsPage"]
    }
];
var BookingsPageModule = /** @class */ (function () {
    function BookingsPageModule() {
    }
    BookingsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            // declarations: [BookingsPage, CreateBookingComponent] // create booking component is not the component that we want to use here
            declarations: [_bookings_page__WEBPACK_IMPORTED_MODULE_5__["BookingsPage"]] // create booking component is not the component that we want to use here
        })
    ], BookingsPageModule);
    return BookingsPageModule;
}());



/***/ }),

/***/ "./src/app/page/bookings/bookings.page.html":
/*!**************************************************!*\
  !*** ./src/app/page/bookings/bookings.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- open menu using button -->\n      <!-- <ion-button (click)=\"openMenu()\">open</ion-button> -->\n      <ion-menu-button>\n        <ion-icon name=\"menu\"></ion-icon>\n      </ion-menu-button>\n    </ion-buttons>\n    <ion-title>Your Bookings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-md=\"6\" offset-md=\"3\" text-center padding *ngIf=\"isLoading\">\n        <ion-spinner color=\"primary\"></ion-spinner>\n      </ion-col>\n      <ion-col size-md=\"6\" offset-md=\"3\" text-center padding *ngIf=\"!isLoading && (!bookings || bookings.length <= 0)\">\n        <p>You don't have any booking currently!</p>\n      </ion-col>\n      <ion-col size-md=\"6\" offset-md=\"3\" *ngIf=\"!isLoading && bookings.length > 0\">\n        <ion-list>\n          <ion-item-sliding *ngFor=\"let booking of bookings\" #bookingSlider>\n            <ion-item>\n              <ion-avatar slot=\"start\">\n                <img [src]=\"booking.placeImage\" />\n              </ion-avatar>\n              <ion-label>\n                <h5>{{booking.placeTitle}}</h5>\n                <p>Guests: {{booking.guestNumber}}</p>\n              </ion-label>\n            </ion-item>\n            <ion-item-options side=\"end\">\n              <ion-item-option color=\"danger\" (click)=\"onBookingCancel(booking.id, bookingSlider)\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-item-option>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/page/bookings/bookings.page.scss":
/*!**************************************************!*\
  !*** ./src/app/page/bookings/bookings.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvYm9va2luZ3MvYm9va2luZ3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/page/bookings/bookings.page.ts":
/*!************************************************!*\
  !*** ./src/app/page/bookings/bookings.page.ts ***!
  \************************************************/
/*! exports provided: BookingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsPage", function() { return BookingsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bookings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookings.service */ "./src/app/page/bookings/bookings.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookingsPage = /** @class */ (function () {
    function BookingsPage(bookingsService, loadingCtrl) {
        this.bookingsService = bookingsService;
        this.loadingCtrl = loadingCtrl;
        this.isLoading = false;
        this._subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    BookingsPage.prototype.ngOnInit = function () {
        var _this = this;
        this._subs.add(this.bookingsService.bookings.subscribe(function (b) { return _this.bookings = b; }));
    };
    BookingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.isLoading = true;
        this._subs.add(this.bookingsService.fetchBookings().subscribe(function () { return _this.isLoading = false; }));
    };
    BookingsPage.prototype.onBookingCancel = function (bookingId, sliderEl) {
        var _this = this;
        sliderEl.close();
        this.loadingCtrl.create({
            message: 'canceling  booking...'
        }).then(function (loadingEl) {
            loadingEl.present();
            _this.bookingsService.cancelBooking(bookingId).subscribe(function () {
                loadingEl.dismiss();
            });
        });
    };
    BookingsPage.prototype.ngOnDestroy = function () {
        this._subs.unsubscribe();
    };
    BookingsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bookings',
            template: __webpack_require__(/*! ./bookings.page.html */ "./src/app/page/bookings/bookings.page.html"),
            styles: [__webpack_require__(/*! ./bookings.page.scss */ "./src/app/page/bookings/bookings.page.scss")]
        }),
        __metadata("design:paramtypes", [_bookings_service__WEBPACK_IMPORTED_MODULE_1__["BookingsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
    ], BookingsPage);
    return BookingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-bookings-bookings-module.js.map