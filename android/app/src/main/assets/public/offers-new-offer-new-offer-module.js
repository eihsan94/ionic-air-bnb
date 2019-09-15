(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-new-offer-new-offer-module"],{

/***/ "./src/app/page/places/offers/new-offer/new-offer.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/page/places/offers/new-offer/new-offer.module.ts ***!
  \******************************************************************/
/*! exports provided: NewOfferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOfferPageModule", function() { return NewOfferPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_offer_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-offer.page */ "./src/app/page/places/offers/new-offer/new-offer.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _new_offer_page__WEBPACK_IMPORTED_MODULE_5__["NewOfferPage"]
    }
];
var NewOfferPageModule = /** @class */ (function () {
    function NewOfferPageModule() {
    }
    NewOfferPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_new_offer_page__WEBPACK_IMPORTED_MODULE_5__["NewOfferPage"]]
        })
    ], NewOfferPageModule);
    return NewOfferPageModule;
}());



/***/ }),

/***/ "./src/app/page/places/offers/new-offer/new-offer.page.html":
/*!******************************************************************!*\
  !*** ./src/app/page/places/offers/new-offer/new-offer.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/places/tabs/offers\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>New Offer</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onCreateOffer()\" [disabled]=\"!form.valid || !datesValid()\">\n        <ion-icon slot=\"icon-only\" name=\"checkmark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"form\">\n    <ion-grid>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\" [ngClass]=\"{'err': !form.get('title').valid && form.get('title').touched}\">Title</ion-label>\n            <ion-input type=\"text\" autocomplete autocorrect formControlName=\"title\"></ion-input>\n          </ion-item>\n          <ion-item *ngIf=\"!form.get('title').valid && form.get('title').touched\" lines=\"none\">\n            <div class=\"err\">\n              This is required\n            </div>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\" [ngClass]=\"{'err': !form.get('description').valid && form.get('description').touched}\">Short Description</ion-label>\n            <ion-textarea rows=\"3\" formControlName=\"description\"></ion-textarea>\n          </ion-item>\n          <ion-item *ngIf=\"!form.get('description').valid && form.get('description').touched\" lines=\"none\">\n            <div class=\"err\">\n              Description must be between 1 to 180\n            </div>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\" [ngClass]=\"{'err': !form.get('price').valid && form.get('price').touched}\">Price</ion-label>\n            <ion-input type=\"number\" formControlName=\"price\"></ion-input>\n          </ion-item>\n          <ion-item *ngIf=\"!form.get('price').valid && form.get('price').touched\" lines=\"none\">\n            <div class=\"err\">\n              This is required\n            </div>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"3\" offset-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\" [ngClass]=\"{'err': (form.controls.availableFrom?.invalid || !datesValid() && form.controls.availableTo?.dirty) && form.controls.availableFrom?.touched }\">\n              Available from</ion-label>\n            <ion-datetime \n            display-format=\"YYYY-MM-DD\" \n            picker-format=\"YYYY MMM DD\" \n            min=\"2019-01-01\"\n            max=\"2025-12-31\"\n            formControlName=\"availableFrom\"\n            ></ion-datetime>\n          </ion-item>\n          <ion-item *ngIf=\"!form.get('availableFrom').valid && form.get('availableFrom').touched\" lines=\"none\">\n            <div class=\"err\">\n              This is required\n            </div>\n          </ion-item>\n          <ion-item *ngIf=\"!datesValid() && form.controls.availableFrom?.valid && form.controls.availableTo?.dirty\" lines=\"none\">\n            <div class=\"err\">\n              The start date must be before the end date\n            </div>\n          </ion-item>\n        </ion-col>\n        <ion-col size-sm=\"3\">\n          <ion-item>\n            <ion-label position=\"floating\" [ngClass]=\"{'err': (form.controls.availableTo?.invalid || !datesValid() && form.controls.availableFrom?.dirty) && form.controls.availableTo?.touched}\">\n              Available to</ion-label>\n            <ion-datetime\n            display-format=\"YYYY-MM-DD\" \n            picker-format=\"YYYY MMM DD\" \n            [min]=\"startDate\" \n            max=\"2025-12-31\" \n            formControlName=\"availableTo\"\n            ></ion-datetime>\n          </ion-item>\n          <ion-item *ngIf=\"!form.get('availableTo').valid && form.get('availableTo').touched\" lines=\"none\">\n            <div class=\"err\">\n              This is required\n            </div>\n          </ion-item>\n          <ion-item *ngIf=\"!datesValid() && form.controls.availableTo?.valid && form.controls.availableFrom?.dirty\" lines=\"none\">\n            <div class=\"err\">\n              The end date must be after the start date\n            </div>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </form>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/page/places/offers/new-offer/new-offer.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/page/places/offers/new-offer/new-offer.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcGxhY2VzL29mZmVycy9uZXctb2ZmZXIvbmV3LW9mZmVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/page/places/offers/new-offer/new-offer.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/page/places/offers/new-offer/new-offer.page.ts ***!
  \****************************************************************/
/*! exports provided: NewOfferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOfferPage", function() { return NewOfferPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../places.service */ "./src/app/page/places/places.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewOfferPage = /** @class */ (function () {
    function NewOfferPage(placeService, router, loadingCtrl) {
        this.placeService = placeService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.startDate = new Date().toISOString();
        this._subs = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]();
    }
    NewOfferPage.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(180),
                ]
            }),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1),
                ]
            }),
            availableFrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                ]
            }),
            availableTo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                ]
            }),
        });
        this._subs.add(this.form.controls.availableFrom.valueChanges.subscribe(function (v) { return _this.startDate = v; }));
    };
    NewOfferPage.prototype.onCreateOffer = function () {
        var _this = this;
        if (!this.form.valid) {
            return;
        }
        this.loadingCtrl.create({
            message: 'Creating offer...'
        })
            .then(function (loadingEl) {
            loadingEl.present();
            _this.placeService.addPlace(_this.form.value).subscribe(function () {
                _this.form.reset();
                _this.router.navigateByUrl('/places/tabs/offers');
                _this.loadingCtrl.dismiss();
            });
        });
    };
    NewOfferPage.prototype.datesValid = function () {
        var startDate = new Date(this.form.value.availableFrom);
        var endDate = new Date(this.form.value.availableTo);
        return endDate > startDate;
    };
    NewOfferPage.prototype.ngOnDestroy = function () {
        this._subs.unsubscribe();
    };
    NewOfferPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-offer',
            template: __webpack_require__(/*! ./new-offer.page.html */ "./src/app/page/places/offers/new-offer/new-offer.page.html"),
            styles: [__webpack_require__(/*! ./new-offer.page.scss */ "./src/app/page/places/offers/new-offer/new-offer.page.scss")]
        }),
        __metadata("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], NewOfferPage);
    return NewOfferPage;
}());



/***/ })

}]);
//# sourceMappingURL=offers-new-offer-new-offer-module.js.map