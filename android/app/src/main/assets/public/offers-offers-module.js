(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-offers-module"],{

/***/ "./src/app/page/places/offers/offer-items/offer-items.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/page/places/offers/offer-items/offer-items.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item [routerLink]=\"['/', 'places', 'tabs','offers', 'edit', offer.id]\">\n  <ion-thumbnail slot=\"start\">\n    <ion-img [src]=\"offer.imageUrl\"></ion-img>\n  </ion-thumbnail>\n  <ion-label>\n    <h1>{{offer.title}}</h1>\n    <div>\n      <ion-icon  name=\"calendar\" color=\"primary\"></ion-icon>\n      <ion-text color=\"tertiary\" class=\"space-left\">{{ offer.availableFrom | date}}</ion-text>\n      <span class=\"space-left\">to</span>\n      <ion-icon name=\"calendar\" color=\"primary\" class=\"space-left\"></ion-icon>\n      <ion-text color=\"tertiary\" class=\"space-left\">{{ offer.availableTo | date}}</ion-text>\n    </div>\n  </ion-label>\n</ion-item>"

/***/ }),

/***/ "./src/app/page/places/offers/offer-items/offer-items.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/page/places/offers/offer-items/offer-items.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-size: 18px;\n  border: 1px solid var(--ion-color-primary);\n  padding: 8px;\n  border-radius: 5px;\n  color: var(--ion-color-primary); }\n\n.space-left {\n  margin-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9idzAwMjEvRGVza3RvcC9haXItYm5iL3NyYy9hcHAvcGFnZS9wbGFjZXMvb2ZmZXJzL29mZmVyLWl0ZW1zL29mZmVyLWl0ZW1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWU7RUFDZiwyQ0FBMEM7RUFDMUMsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixnQ0FBK0IsRUFDbEM7O0FBQ0Q7RUFDSSxpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlL3BsYWNlcy9vZmZlcnMvb2ZmZXItaXRlbXMvb2ZmZXItaXRlbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uc3BhY2UtbGVmdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/page/places/offers/offer-items/offer-items.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/page/places/offers/offer-items/offer-items.component.ts ***!
  \*************************************************************************/
/*! exports provided: OfferItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferItemsComponent", function() { return OfferItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _place__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../place */ "./src/app/page/places/place.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OfferItemsComponent = /** @class */ (function () {
    function OfferItemsComponent() {
    }
    OfferItemsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _place__WEBPACK_IMPORTED_MODULE_1__["Place"])
    ], OfferItemsComponent.prototype, "offer", void 0);
    OfferItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-offer-items',
            template: __webpack_require__(/*! ./offer-items.component.html */ "./src/app/page/places/offers/offer-items/offer-items.component.html"),
            styles: [__webpack_require__(/*! ./offer-items.component.scss */ "./src/app/page/places/offers/offer-items/offer-items.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OfferItemsComponent);
    return OfferItemsComponent;
}());



/***/ }),

/***/ "./src/app/page/places/offers/offers.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/page/places/offers/offers.module.ts ***!
  \*****************************************************/
/*! exports provided: OffersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageModule", function() { return OffersPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offers.page */ "./src/app/page/places/offers/offers.page.ts");
/* harmony import */ var _offer_items_offer_items_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offer-items/offer-items.component */ "./src/app/page/places/offers/offer-items/offer-items.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _offers_page__WEBPACK_IMPORTED_MODULE_5__["OffersPage"]
    }
];
var OffersPageModule = /** @class */ (function () {
    function OffersPageModule() {
    }
    OffersPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_offers_page__WEBPACK_IMPORTED_MODULE_5__["OffersPage"], _offer_items_offer_items_component__WEBPACK_IMPORTED_MODULE_6__["OfferItemsComponent"]]
        })
    ], OffersPageModule);
    return OffersPageModule;
}());



/***/ }),

/***/ "./src/app/page/places/offers/offers.page.html":
/*!*****************************************************!*\
  !*** ./src/app/page/places/offers/offers.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button><ion-icon name=\"menu\"></ion-icon></ion-menu-button>\n      </ion-buttons>\n    <ion-title>My Offers</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"/places/tabs/offers/new\" >\n        <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" text-center>\n              <div text-center  *ngIf=\"isLoading\">\n                <ion-spinner color=\"primary\"></ion-spinner>\n              </div>\n              <div *ngIf=\"!isLoading && loadedOffers.length <= 0\">\n                <p>No offers found! Please create one first!</p>\n                <ion-button routerLink=\"/places/tabs/offers/new\">\n                  Offer New Place\n                </ion-button>\n              </div>\n              <ion-list *ngIf=\"!isLoading && loadedOffers.length > 0\">\n                  <ion-item-sliding *ngFor=\"let offer of loadedOffers\" #slidingItem >\n\n                    <app-offer-items [offer]=\"offer\"></app-offer-items>\n\n                    <ion-item-options>\n                      <ion-item-option color=\"secondary\" (click)=\"onEdit(offer.id, slidingItem)\">\n                        <ion-icon name=\"create\" slot=\"icon-only\"></ion-icon>\n                      </ion-item-option>\n                    </ion-item-options>\n\n                  </ion-item-sliding>\n              </ion-list>\n            </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page/places/offers/offers.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/page/places/offers/offers.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcGxhY2VzL29mZmVycy9vZmZlcnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/page/places/offers/offers.page.ts":
/*!***************************************************!*\
  !*** ./src/app/page/places/offers/offers.page.ts ***!
  \***************************************************/
/*! exports provided: OffersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPage", function() { return OffersPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../places.service */ "./src/app/page/places/places.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var OffersPage = /** @class */ (function () {
    function OffersPage(placesService, router) {
        this.placesService = placesService;
        this.router = router;
        this.isLoading = false;
        this._placesSub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    OffersPage.prototype.ngOnInit = function () {
        var _this = this;
        this._placesSub.add(this.placesService.places.subscribe(function (p) { return _this.loadedOffers = p; }));
    };
    OffersPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.isLoading = true;
        this._placesSub.add(this.placesService.fetchPlaces().subscribe(function () { return _this.isLoading = false; }));
    };
    OffersPage.prototype.onEdit = function (offerId, slidingItem) {
        slidingItem.close();
        this.router.navigateByUrl("/places/tabs/offers/edit/" + offerId);
    };
    OffersPage.prototype.ngOnDestroy = function () {
        if (this._placesSub) {
            this._placesSub.unsubscribe();
        }
    };
    OffersPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-offers',
            template: __webpack_require__(/*! ./offers.page.html */ "./src/app/page/places/offers/offers.page.html"),
            styles: [__webpack_require__(/*! ./offers.page.scss */ "./src/app/page/places/offers/offers.page.scss")]
        }),
        __metadata("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_1__["PlacesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OffersPage);
    return OffersPage;
}());



/***/ })

}]);
//# sourceMappingURL=offers-offers-module.js.map