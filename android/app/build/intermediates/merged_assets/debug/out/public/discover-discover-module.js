(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discover-discover-module"],{

/***/ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic-native/barcode-scanner/ngx/index.js ***!
  \*****************************************************************/
/*! exports provided: BarcodeScanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeScanner", function() { return BarcodeScanner; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BarcodeScanner = /** @class */ (function (_super) {
    __extends(BarcodeScanner, _super);
    function BarcodeScanner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Encode = {
            TEXT_TYPE: 'TEXT_TYPE',
            EMAIL_TYPE: 'EMAIL_TYPE',
            PHONE_TYPE: 'PHONE_TYPE',
            SMS_TYPE: 'SMS_TYPE'
        };
        return _this;
    }
    BarcodeScanner.prototype.scan = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "scan", { "callbackOrder": "reverse" }, arguments); };
    BarcodeScanner.prototype.encode = function (type, data) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "encode", {}, arguments); };
    BarcodeScanner.pluginName = "BarcodeScanner";
    BarcodeScanner.plugin = "phonegap-plugin-barcodescanner";
    BarcodeScanner.pluginRef = "cordova.plugins.barcodeScanner";
    BarcodeScanner.repo = "https://github.com/phonegap/phonegap-plugin-barcodescanner";
    BarcodeScanner.platforms = ["Android", "BlackBerry 10", "Browser", "iOS", "Windows"];
    BarcodeScanner = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], BarcodeScanner);
    return BarcodeScanner;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhcmNvZGUtc2Nhbm5lci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFtSHBDLGtDQUFpQjs7O1FBQ25ELFlBQU0sR0FLRjtZQUNBLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFFBQVEsRUFBRSxVQUFVO1NBQ3JCLENBQUM7OztJQVVKLDZCQUFJLGFBQUMsT0FBK0I7SUFZcEMsK0JBQU0sYUFBQyxJQUFZLEVBQUUsSUFBUzs7Ozs7O0lBakNuQixjQUFjO1FBRDFCLFVBQVUsRUFBRTtPQUNBLGNBQWM7eUJBcEgzQjtFQW9Ib0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlU2Nhbm5lck9wdGlvbnMge1xuICAvKipcbiAgICogUHJlZmVyIGZyb250IGNhbWVyYS4gU3VwcG9ydGVkIG9uIGlPUyBhbmQgQW5kcm9pZC5cbiAgICovXG4gIHByZWZlckZyb250Q2FtZXJhPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2hvdyBmbGlwIGNhbWVyYSBidXR0b24uIFN1cHBvcnRlZCBvbiBpT1MgYW5kIEFuZHJvaWQuXG4gICAqL1xuICBzaG93RmxpcENhbWVyYUJ1dHRvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNob3cgdG9yY2ggYnV0dG9uLiBTdXBwb3J0ZWQgb24gaU9TIGFuZCBBbmRyb2lkLlxuICAgKi9cbiAgc2hvd1RvcmNoQnV0dG9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGlzYWJsZSBhbmltYXRpb25zLiBTdXBwb3J0ZWQgb24gaU9TIG9ubHkuXG4gICAqL1xuICBkaXNhYmxlQW5pbWF0aW9ucz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERpc2FibGUgc3VjY2VzcyBiZWVwLiBTdXBwb3J0ZWQgb24gaU9TIG9ubHkuXG4gICAqL1xuICBkaXNhYmxlU3VjY2Vzc0JlZXA/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlIG9yIGVuYWJsZSBBdXRvcm90YXRlLiBTdXBwb3J0ZWQgb24gSU9TIG9ubHkuXG4gICAqL1xuICBzaG91bGRBdXRvcm90YXRlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUHJvbXB0IHRleHQuIFN1cHBvcnRlZCBvbiBBbmRyb2lkIG9ubHkuXG4gICAqL1xuICBwcm9tcHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEZvcm1hdHMgc2VwYXJhdGVkIGJ5IGNvbW1hcy4gRGVmYXVsdHMgdG8gYWxsIGZvcm1hdHMgZXhjZXB0IGBQREZfNDE3YCBhbmQgYFJTU19FWFBBTkRFRGAuXG4gICAqL1xuICBmb3JtYXRzPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBPcmllbnRhdGlvbi4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgb25seS4gQ2FuIGJlIHNldCB0byBgcG9ydHJhaXRgIG9yIGBsYW5kc2NhcGVgLiBEZWZhdWx0cyB0byBub25lIHNvIHRoZSB1c2VyIGNhbiByb3RhdGUgdGhlIHBob25lIGFuZCBwaWNrIGFuIG9yaWVudGF0aW9uLlxuICAgKi9cbiAgb3JpZW50YXRpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExhdW5jaCB3aXRoIHRoZSB0b3JjaCBzd2l0Y2hlZCBvbiAoaWYgYXZhaWxhYmxlKS4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgb25seS5cbiAgICovXG4gIHRvcmNoT24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5IHNjYW5uZWQgdGV4dCBmb3IgWCBtcy4gMCBzdXBwcmVzc2VzIGl0IGVudGlyZWx5LCBkZWZhdWx0IDE1MDAuIFN1cHBvcnRlZCBvbiBBbmRyb2lkIG9ubHkuXG4gICAqL1xuICByZXN1bHREaXNwbGF5RHVyYXRpb24/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVNjYW5SZXN1bHQge1xuICBmb3JtYXQ6XG4gIHwgJ1FSX0NPREUnXG4gIHwgJ0RBVEFfTUFUUklYJ1xuICB8ICdVUENfRSdcbiAgfCAnVVBDX0EnXG4gIHwgJ0VBTl84J1xuICB8ICdFQU5fMTMnXG4gIHwgJ0NPREVfMTI4J1xuICB8ICdDT0RFXzM5J1xuICB8ICdDT0RFXzkzJ1xuICB8ICdDT0RBQkFSJ1xuICB8ICdJVEYnXG4gIHwgJ1JTUzE0J1xuICB8ICdSU1NfRVhQQU5ERUQnXG4gIHwgJ1BERl80MTcnXG4gIHwgJ0FaVEVDJ1xuICB8ICdNU0knO1xuICBjYW5jZWxsZWQ6IGJvb2xlYW47XG4gIHRleHQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBCYXJjb2RlIFNjYW5uZXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIEJhcmNvZGUgU2Nhbm5lciBQbHVnaW4gb3BlbnMgYSBjYW1lcmEgdmlldyBhbmQgYXV0b21hdGljYWxseSBzY2FucyBhIGJhcmNvZGUsIHJldHVybmluZyB0aGUgZGF0YSBiYWNrIHRvIHlvdS5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYHBob25lZ2FwLXBsdWdpbi1iYXJjb2Rlc2Nhbm5lcmAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtCYXJjb2RlU2Nhbm5lciBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL3Bob25lZ2FwL3Bob25lZ2FwLXBsdWdpbi1iYXJjb2Rlc2Nhbm5lcikuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYmFyY29kZS1zY2FubmVyL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiYXJjb2RlU2Nhbm5lcjogQmFyY29kZVNjYW5uZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLmJhcmNvZGVTY2FubmVyLnNjYW4oKS50aGVuKGJhcmNvZGVEYXRhID0+IHtcbiAqICBjb25zb2xlLmxvZygnQmFyY29kZSBkYXRhJywgYmFyY29kZURhdGEpO1xuICogfSkuY2F0Y2goZXJyID0+IHtcbiAqIFx0Y29uc29sZS5sb2coJ0Vycm9yJywgZXJyKTtcbiAqIH0pO1xuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogQmFyY29kZVNjYW5uZXJPcHRpb25zXG4gKiBCYXJjb2RlU2NhblJlc3VsdFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0JhcmNvZGVTY2FubmVyJyxcbiAgcGx1Z2luOiAncGhvbmVnYXAtcGx1Z2luLWJhcmNvZGVzY2FubmVyJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmJhcmNvZGVTY2FubmVyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9waG9uZWdhcC9waG9uZWdhcC1wbHVnaW4tYmFyY29kZXNjYW5uZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCbGFja0JlcnJ5IDEwJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYXJjb2RlU2Nhbm5lciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgRW5jb2RlOiB7XG4gICAgVEVYVF9UWVBFOiBzdHJpbmc7XG4gICAgRU1BSUxfVFlQRTogc3RyaW5nO1xuICAgIFBIT05FX1RZUEU6IHN0cmluZztcbiAgICBTTVNfVFlQRTogc3RyaW5nO1xuICB9ID0ge1xuICAgICAgVEVYVF9UWVBFOiAnVEVYVF9UWVBFJyxcbiAgICAgIEVNQUlMX1RZUEU6ICdFTUFJTF9UWVBFJyxcbiAgICAgIFBIT05FX1RZUEU6ICdQSE9ORV9UWVBFJyxcbiAgICAgIFNNU19UWVBFOiAnU01TX1RZUEUnXG4gICAgfTtcblxuICAvKipcbiAgICogT3BlbiB0aGUgYmFyY29kZSBzY2FubmVyLlxuICAgKiBAcGFyYW0ge0JhcmNvZGVTY2FubmVyT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbmFsIG9wdGlvbnMgdG8gcGFzcyB0byB0aGUgc2Nhbm5lclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggc2Nhbm5lciBkYXRhLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnXG4gIH0pXG4gIHNjYW4ob3B0aW9ucz86IEJhcmNvZGVTY2FubmVyT3B0aW9ucyk6IFByb21pc2U8QmFyY29kZVNjYW5SZXN1bHQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRW5jb2RlcyBkYXRhIGludG8gYSBiYXJjb2RlLlxuICAgKiBOT1RFOiBub3Qgd2VsbCBzdXBwb3J0ZWQgb24gQW5kcm9pZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUeXBlIG9mIGVuY29kaW5nXG4gICAqIEBwYXJhbSB7YW55fSBkYXRhIERhdGEgdG8gZW5jb2RlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGVuY29kZSh0eXBlOiBzdHJpbmcsIGRhdGE6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./src/app/page/places/discover/discover.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/page/places/discover/discover.module.ts ***!
  \*********************************************************/
/*! exports provided: DiscoverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPageModule", function() { return DiscoverPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _discover_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discover.page */ "./src/app/page/places/discover/discover.page.ts");
/* harmony import */ var src_app_shared_components_bw_qr_button_bw_qr_button_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared-components/bw-qr-button/bw-qr-button.module */ "./src/app/shared-components/bw-qr-button/bw-qr-button.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _discover_page__WEBPACK_IMPORTED_MODULE_5__["DiscoverPage"]
    }
];
var DiscoverPageModule = /** @class */ (function () {
    function DiscoverPageModule() {
    }
    DiscoverPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                src_app_shared_components_bw_qr_button_bw_qr_button_module__WEBPACK_IMPORTED_MODULE_6__["BwQrButtonModule"]
            ],
            declarations: [_discover_page__WEBPACK_IMPORTED_MODULE_5__["DiscoverPage"]]
        })
    ], DiscoverPageModule);
    return DiscoverPageModule;
}());



/***/ }),

/***/ "./src/app/page/places/discover/discover.page.html":
/*!*********************************************************!*\
  !*** ./src/app/page/places/discover/discover.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <!-- open menu using button -->\n      <!-- <ion-button (click)=\"openMenu()\">open</ion-button> -->\n      <ion-menu-button><ion-icon name=\"menu\"></ion-icon></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Discover places</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <bw-qr-button></bw-qr-button>\n  <!-- \n    ion segment is like angular mat tab but way cooler\n    ion-segment-button:  the tab itself\n    value=\"all\":  the tab value\n    checked: wether the tab is selected\n   -->\n  <ion-segment (ionChange)=\"onFilterUpdate($event)\">\n    <ion-segment-button value=\"all\" checked>\n      <ion-label>All Places</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"bookable\">\n      <ion-label>Bookable</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <ion-grid *ngIf=\"isLoading\">\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" text-center>\n        <ion-spinner color=\"primary\"></ion-spinner>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"  !isLoading && (!relevantPlaces || relevantPlaces.length <= 0)\">\n    <ion-row>\n        <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" text-center>\n          <p>There are no bookable places right now, please come back later!</p>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"!isLoading && relevantPlaces.length > 0\">\n    <ion-row>\n      <!-- \n    size=\"12\":  the column size to take the full width of the screen  (range 0~12)\n    size-sm=\"8\":  the column size 80% full width of the screen if the screen is bigger than the small screen (range 0~12)\n    offset-sm=\"2\": padding the left and right of the card by 20% if the screen is bigger than the small screen (range 0~12)\n    text-center: align the all of the text in col to center\n    -->\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" text-center>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>{{ relevantPlaces[0].title }}</ion-card-title>\n            <ion-card-subtitle>{{ relevantPlaces[0].price | currency }} / Night</ion-card-subtitle>\n          </ion-card-header>\n          <ion-img [src]=\"relevantPlaces[0].imageUrl\"></ion-img>\n          <ion-card-content>{{ relevantPlaces[0].description }}</ion-card-content>\n          <div text-center padding>\n            <ion-button \n              fill=\"clear\" \n              color=\"primary\"\n              [routerLink]=\"['/', 'places', 'tabs', 'discover', relevantPlaces[0].id]\"\n            >\n            MORE\n            </ion-button>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" text-center>\n        <!-- \n          u can apply routerlink directly on ion-item\n          [routerLink]=\"['/', 'places', 'tabs', 'discover', place.id]\": navigate  /places/tabs/discover/place.id\n          detail: gives u the detail icon (really useful)\n          ion image is good because it loads the image lazily\n        -->\n        \n          <ion-list>\n            <ion-item           \n          *ngFor=\"let place of relevantPlaces.slice(1)\" \n          [routerLink]=\"['/', 'places', 'tabs', 'discover', place.id]\"\n          detail\n          >\n            <ion-thumbnail slot=\"start\">\n              <ion-img [src]=\"place.imageUrl\"></ion-img> \n            </ion-thumbnail>\n            <ion-label>\n              <h2>{{ place.title }}</h2>\n              <p>{{ place.description }}</p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n        <!-- \n          ion virtual is still buggy\n          <ion-virtual-scroll \n          [items]=\"listedLoadedPlaces\" : the list of the array that u wanted to scroll\n          approxItemHeight=\"70px\": the item height is render before the item is scrolled\n          >\n         -->\n         <!-- <ion-virtual-scroll \n         [items]=\"listedLoadedPlaces\"\n         approxItemHeight=\"70px\"\n         >\n           <ion-item [routerLink]=\"['/', 'places', 'tabs', 'discover', place.id]\" detail *virtualItem=\"let place\">\n             <ion-thumbnail slot=\"start\">\n               <ion-img [src]=\"place.imageUrl\"></ion-img>\n             </ion-thumbnail>\n             <ion-label>\n               <h2>{{ place.title }}</h2>\n               <p>{{ place.description }}</p>\n             </ion-label>\n           </ion-item>\n         </ion-virtual-scroll> -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/page/places/discover/discover.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/page/places/discover/discover.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcGxhY2VzL2Rpc2NvdmVyL2Rpc2NvdmVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/page/places/discover/discover.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/page/places/discover/discover.page.ts ***!
  \*******************************************************/
/*! exports provided: DiscoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverPage", function() { return DiscoverPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../places.service */ "./src/app/page/places/places.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/page/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DiscoverPage = /** @class */ (function () {
    function DiscoverPage(placesService, authService, menuCtrl) {
        this.placesService = placesService;
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this._placesSub = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.isLoading = false;
    }
    DiscoverPage.prototype.ngOnInit = function () {
        var _this = this;
        this._placesSub.add(this.placesService.places.subscribe(function (p) {
            _this.loadedPlaces = p;
            _this.relevantPlaces = _this.loadedPlaces;
            _this.listedLoadedPlaces = _this.relevantPlaces.slice(1);
        }));
    };
    DiscoverPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.isLoading = true;
        this._placesSub.add(this.placesService.fetchPlaces().subscribe(function () { return _this.isLoading = false; }));
    };
    DiscoverPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    DiscoverPage.prototype.onFilterUpdate = function (event) {
        var _this = this;
        if (event.detail.value === 'all') {
            this.relevantPlaces = this.loadedPlaces;
        }
        else {
            this.relevantPlaces = this.loadedPlaces.filter(function (p) { return p.userId !== _this.authService.userId; });
        }
        this.listedLoadedPlaces = this.relevantPlaces.slice(1);
    };
    DiscoverPage.prototype.ngOnDestroy = function () {
        this._placesSub.unsubscribe();
    };
    DiscoverPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-discover',
            template: __webpack_require__(/*! ./discover.page.html */ "./src/app/page/places/discover/discover.page.html"),
            styles: [__webpack_require__(/*! ./discover.page.scss */ "./src/app/page/places/discover/discover.page.scss")]
        }),
        __metadata("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_1__["PlacesService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], DiscoverPage);
    return DiscoverPage;
}());



/***/ }),

/***/ "./src/app/shared-components/bw-qr-button/bw-qr-button.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared-components/bw-qr-button/bw-qr-button.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "scannedData: {{scannedData.text}}\n<ion-tab-button (click)=\"scanCode()\">\n    <ion-icon name=\"camera\"></ion-icon>\n    <ion-label>Photo</ion-label>\n</ion-tab-button>"

/***/ }),

/***/ "./src/app/shared-components/bw-qr-button/bw-qr-button.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared-components/bw-qr-button/bw-qr-button.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2J3LXFyLWJ1dHRvbi9idy1xci1idXR0b24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared-components/bw-qr-button/bw-qr-button.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared-components/bw-qr-button/bw-qr-button.component.ts ***!
  \**************************************************************************/
/*! exports provided: BwQrButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BwQrButtonComponent", function() { return BwQrButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BwQrButtonComponent = /** @class */ (function () {
    function BwQrButtonComponent(barcodeScanner) {
        this.barcodeScanner = barcodeScanner;
        this.encodeData = 'https://www.FreakyJolly.com';
        // Options
        this.barcodeScannerOptions = {
            showTorchButton: true,
            showFlipCameraButton: true
        };
    }
    BwQrButtonComponent.prototype.scanCode = function () {
        var _this = this;
        this.barcodeScanner
            .scan()
            .then(function (barcodeData) {
            // alert('Barcode data ' + JSON.stringify(barcodeData));
            _this.scannedData = barcodeData;
            console.log(_this.scannedData);
        })
            .catch(function (err) {
            console.log('Error', err);
        });
    };
    BwQrButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bw-qr-button',
            template: __webpack_require__(/*! ./bw-qr-button.component.html */ "./src/app/shared-components/bw-qr-button/bw-qr-button.component.html"),
            styles: [__webpack_require__(/*! ./bw-qr-button.component.scss */ "./src/app/shared-components/bw-qr-button/bw-qr-button.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_1__["BarcodeScanner"]])
    ], BwQrButtonComponent);
    return BwQrButtonComponent;
}());



/***/ }),

/***/ "./src/app/shared-components/bw-qr-button/bw-qr-button.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared-components/bw-qr-button/bw-qr-button.module.ts ***!
  \***********************************************************************/
/*! exports provided: BwQrButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BwQrButtonModule", function() { return BwQrButtonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _bw_qr_button_bw_qr_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bw-qr-button/bw-qr-button.component */ "./src/app/shared-components/bw-qr-button/bw-qr-button.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var BwQrButtonModule = /** @class */ (function () {
    function BwQrButtonModule() {
    }
    BwQrButtonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            ],
            providers: [
                _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
                _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
                _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"],
            ],
            declarations: [
                _bw_qr_button_bw_qr_button_component__WEBPACK_IMPORTED_MODULE_7__["BwQrButtonComponent"],
            ],
            exports: [
                _bw_qr_button_bw_qr_button_component__WEBPACK_IMPORTED_MODULE_7__["BwQrButtonComponent"],
            ]
        })
    ], BwQrButtonModule);
    return BwQrButtonModule;
}());



/***/ })

}]);
//# sourceMappingURL=discover-discover-module.js.map