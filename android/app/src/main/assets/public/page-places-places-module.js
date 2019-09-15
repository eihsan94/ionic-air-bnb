(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-places-places-module"],{

/***/ "./src/app/page/places/places-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/page/places/places-routing.module.ts ***!
  \******************************************************/
/*! exports provided: PlacesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesRoutingModule", function() { return PlacesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _places_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./places.page */ "./src/app/page/places/places.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// tab routes
var routes = [
    {
        path: 'tabs',
        component: _places_page__WEBPACK_IMPORTED_MODULE_3__["PlacesPage"],
        children: [
            {
                path: 'discover',
                children: [
                    { path: '', loadChildren: './discover/discover.module#DiscoverPageModule' },
                    { path: ':placeId', loadChildren: './discover/place-detail/place-detail.module#PlaceDetailPageModule' },
                ],
            },
            {
                path: 'offers',
                children: [
                    { path: '', loadChildren: './offers/offers.module#OffersPageModule' },
                    { path: 'new', loadChildren: './offers/new-offer/new-offer.module#NewOfferPageModule' },
                    { path: 'edit/:placeId', loadChildren: './offers/edit-offer/edit-offer.module#EditOfferPageModule' },
                ],
            },
            {
                // path redircet when the user go /places/tabs
                path: '',
                redirectTo: '/places/tabs/discover',
                pathMatch: 'full',
            }
        ],
    },
    {
        // path redircet when the user go /places
        path: '',
        redirectTo: '/places/tabs/discover',
        pathMatch: 'full',
    }
];
var PlacesRoutingModule = /** @class */ (function () {
    function PlacesRoutingModule() {
    }
    PlacesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
        })
    ], PlacesRoutingModule);
    return PlacesRoutingModule;
}());



/***/ }),

/***/ "./src/app/page/places/places.module.ts":
/*!**********************************************!*\
  !*** ./src/app/page/places/places.module.ts ***!
  \**********************************************/
/*! exports provided: PlacesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesPageModule", function() { return PlacesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _places_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./places.page */ "./src/app/page/places/places.page.ts");
/* harmony import */ var _places_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./places-routing.module */ "./src/app/page/places/places-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PlacesPageModule = /** @class */ (function () {
    function PlacesPageModule() {
    }
    PlacesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _places_routing_module__WEBPACK_IMPORTED_MODULE_4__["PlacesRoutingModule"]
            ],
            declarations: [_places_page__WEBPACK_IMPORTED_MODULE_3__["PlacesPage"]]
        })
    ], PlacesPageModule);
    return PlacesPageModule;
}());



/***/ }),

/***/ "./src/app/page/places/places.page.html":
/*!**********************************************!*\
  !*** ./src/app/page/places/places.page.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- places is the menu inside the bottom tab so it doesnt need ion header or contents -->\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n\n    <!-- ion tab button have routerLink built in  -->\n    <ion-tab-button tab=\"discover\">  <!-- /discover  -->\n      <ion-label>Discover</ion-label>\n      <ion-icon name=\"search\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"offers\"> <!-- /offers  -->\n      <ion-label>Offers</ion-label>\n      <ion-icon name=\"card\"></ion-icon>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/page/places/places.page.scss":
/*!**********************************************!*\
  !*** ./src/app/page/places/places.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcGxhY2VzL3BsYWNlcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/page/places/places.page.ts":
/*!********************************************!*\
  !*** ./src/app/page/places/places.page.ts ***!
  \********************************************/
/*! exports provided: PlacesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesPage", function() { return PlacesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlacesPage = /** @class */ (function () {
    function PlacesPage() {
    }
    PlacesPage.prototype.ngOnInit = function () {
    };
    PlacesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-places',
            template: __webpack_require__(/*! ./places.page.html */ "./src/app/page/places/places.page.html"),
            styles: [__webpack_require__(/*! ./places.page.scss */ "./src/app/page/places/places.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlacesPage);
    return PlacesPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-places-places-module.js.map