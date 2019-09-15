(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-auth-auth-module"],{

/***/ "./src/app/page/auth/auth.module.ts":
/*!******************************************!*\
  !*** ./src/app/page/auth/auth.module.ts ***!
  \******************************************/
/*! exports provided: AuthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.page */ "./src/app/page/auth/auth.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_5__["AuthPage"]
    }
];
var AuthPageModule = /** @class */ (function () {
    function AuthPageModule() {
    }
    AuthPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_5__["AuthPage"]]
        })
    ], AuthPageModule);
    return AuthPageModule;
}());



/***/ }),

/***/ "./src/app/page/auth/auth.page.html":
/*!******************************************!*\
  !*** ./src/app/page/auth/auth.page.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar text-center>\n    <ion-title>{{ isLogin ? 'Login' : 'Signup'}} Page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- default ionic spinner -->\n  <!-- \n  <ion-spinner name=\"crescent\" *ngIf=\"isLoading\"></ion-spinner> \n  <ion-button color=\"primary\" (click)=\"onLogin()\" *ngIf=\"!isLoading\">\n-->\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n\n    <ion-grid>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"floating\" [ngClass]=\"{'err': f.controls.email?.invalid && f.controls.email?.touched}\">Email</ion-label>\n              <ion-input \n              type=\"text\"\n              ngModel\n              name=\"email\"\n              required\n              email\n              ></ion-input>\n            </ion-item>\n            <ion-item  *ngIf=\"f.controls.email?.invalid && f.controls.email?.touched\" lines=\"none\">\n              <div class=\"err\">\n                Should be a valid email address\n              </div>\n            </ion-item>\n            <ion-item>\n              <ion-label position=\"floating\"[ngClass]=\"{'err': f.controls.password?.invalid && f.controls.password?.touched}\">Password</ion-label>\n              <ion-input \n              type=\"password\"\n              ngModel\n              name=\"password\"\n              required\n              minlength=\"8\"\n              ></ion-input>\n            </ion-item>\n            <ion-item  *ngIf=\"f.controls.password?.invalid && f.controls.password?.touched\" lines=\"none\">\n                <div class=\"err\">\n                  Should be at least 8 characters long\n                </div>\n              </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size-sm=\"6\" offset-sm=\"3\">\n          <ion-button \n          type=\"button\" \n          color=\"primary\"\n          fill=\"clear\"\n          expand=\"block\"\n          (click)=\"onSwitchAuthMode()\"\n          >\n            SWITCH TO {{ isLogin ? 'SIGNUP' : 'LOGIN'}}\n          </ion-button>\n          <ion-button \n          [disabled] = \"f.invalid\" \n          color=\"primary\" \n          type=\"submit\" \n          (click)=\"onLogin()\" \n          expand=\"block\">\n          {{ isLogin ? 'LOGIN' : 'SIGNUP'}}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </form>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/page/auth/auth.page.scss":
/*!******************************************!*\
  !*** ./src/app/page/auth/auth.page.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvYXV0aC9hdXRoLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/page/auth/auth.page.ts":
/*!****************************************!*\
  !*** ./src/app/page/auth/auth.page.ts ***!
  \****************************************/
/*! exports provided: AuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPage", function() { return AuthPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/page/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthPage = /** @class */ (function () {
    function AuthPage(authService, router, loadingCtrl) {
        this.authService = authService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.isLoading = false;
        this.isLogin = true;
    }
    AuthPage.prototype.ngOnInit = function () {
    };
    AuthPage.prototype.onLogin = function () {
        var _this = this;
        this.isLoading = true;
        this.authService.login();
        this.loadingCtrl.create({
            keyboardClose: true,
            message: 'logging in....'
        })
            .then(function (loadingEl) {
            loadingEl.present();
            setTimeout(function () {
                _this.isLoading = false;
                loadingEl.dismiss();
                _this.router.navigateByUrl('/places/tabs/discover');
            }, 1500);
        });
    };
    AuthPage.prototype.onSubmit = function (form) {
        if (form.invalid) {
            return;
        }
        if (this.isLogin) {
            // send req to login servers
        }
        else {
            // send req to signup servers
        }
    };
    AuthPage.prototype.onSwitchAuthMode = function () {
        this.isLogin = !this.isLogin;
    };
    AuthPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.page.html */ "./src/app/page/auth/auth.page.html"),
            styles: [__webpack_require__(/*! ./auth.page.scss */ "./src/app/page/auth/auth.page.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], AuthPage);
    return AuthPage;
}());



/***/ })

}]);
//# sourceMappingURL=page-auth-auth-module.js.map