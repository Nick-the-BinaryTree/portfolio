(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions.ts":
/*!****************************!*\
  !*** ./src/app/actions.ts ***!
  \****************************/
/*! exports provided: GOTO_BIO_PAGE, GOTO_LANDING_PAGE, GOTO_MUN_PAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOTO_BIO_PAGE", function() { return GOTO_BIO_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOTO_LANDING_PAGE", function() { return GOTO_LANDING_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOTO_MUN_PAGE", function() { return GOTO_MUN_PAGE; });
var GOTO_BIO_PAGE = 'GOTO_BIO_PAGE';
var GOTO_LANDING_PAGE = 'GOTO_LANDING_PAGE';
var GOTO_MUN_PAGE = 'GOTO_MUN_PAGE';


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Yeah, we should be using AngularRouter here, but I wanted to Redux! -->\n<app-bio-page *ngIf=\"(page | async)==='bio'; else landing\">oh hey</app-bio-page>\n<ng-template #landing>\n    <app-landing-page></app-landing-page>\n</ng-template>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(ngRedux) {
        this.ngRedux = ngRedux;
        this.title = 'Nicholas Hartunian';
    }
    __decorate([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["select"])(),
        __metadata("design:type", String)
    ], AppComponent.prototype, "page", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["NgRedux"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/app/store.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _game_bg_game_bg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-bg/game-bg.component */ "./src/app/game-bg/game-bg.component.ts");
/* harmony import */ var _name_title_name_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./name-title/name-title.component */ "./src/app/name-title/name-title.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _bio_page_bio_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bio-page/bio-page.component */ "./src/app/bio-page/bio-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = /** @class */ (function () {
    function AppModule(ngRedux) {
        ngRedux.configureStore(_store__WEBPACK_IMPORTED_MODULE_3__["rootReducer"], _store__WEBPACK_IMPORTED_MODULE_3__["INITIAL_STATE"]);
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _game_bg_game_bg_component__WEBPACK_IMPORTED_MODULE_5__["GameBgComponent"],
                _name_title_name_title_component__WEBPACK_IMPORTED_MODULE_6__["NameTitleComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__["LandingPageComponent"],
                _bio_page_bio_page_component__WEBPACK_IMPORTED_MODULE_8__["BioPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["NgReduxModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["NgRedux"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bio-page/bio-page.component.css":
/*!*************************************************!*\
  !*** ./src/app/bio-page/bio-page.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n    font-size: 36px;\n\n    -webkit-animation: fadeInAndUp 4s forwards;\n\n            animation: fadeInAndUp 4s forwards;\n}\n\np {\n    font-size: 20px;\n\n    -webkit-animation: fadeInAndUp 4s forwards;\n\n            animation: fadeInAndUp 4s forwards;\n    -webkit-animation-delay: 1s;\n            animation-delay: 1s;\n}\n\n.bio-page-bg {\n    display: none;\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.bio-page-bg-overlay, .bio-page-container {\n    background-color: #000;\n}\n\n.bio-text-container {\n    position: absolute;\n    left: 44px;\n    top: 20px;\n\n    line-height: 30px;\n    max-width: 500px;\n}\n\n.bio-text-element {\n    background-color: rgba(0,0,0,0.8);\n    color: white;\n    margin: 12px;\n    opacity: 0;\n    padding: 12px;\n    -webkit-transform: translateY(36px);\n            transform: translateY(36px);\n}\n\n/* Camel case forced by Angular syntax in template */\n\n.bgLoaded {\n    display: block;\n}\n\n.overlayFadeOut {\n    -webkit-animation: fadeOut 6s forwards;\n            animation: fadeOut 6s forwards;\n    -webkit-animation-delay: 4s;\n            animation-delay: 4s;\n}\n\n.picture-credits {\n    position: absolute;\n    bottom: 0px;\n    right: 8px;\n\n    color: #fff;\n    font-size: 10px;\n}\n\n@media (max-width: 800px) {\n    .bio-text-container {\n        left: 4%;    \n        max-width: 72%;\n    }\n}\n\n@-webkit-keyframes fadeInAndUp {\n    100% {\n        opacity: 1;\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n    }\n}\n\n@keyframes fadeInAndUp {\n    100% {\n        opacity: 1;\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n    }\n}\n\n@-webkit-keyframes fadeOut {\n    100% {\n        opacity: 0;\n    }\n}\n\n@keyframes fadeOut {\n    100% {\n        opacity: 0;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlvLXBhZ2UvYmlvLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjs7SUFFaEIsMkNBQW1DOztZQUFuQyxtQ0FBbUM7Q0FDdEM7O0FBRUQ7SUFDSSxnQkFBZ0I7O0lBRWhCLDJDQUFtQzs7WUFBbkMsbUNBQW1DO0lBQ25DLDRCQUFvQjtZQUFwQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBa0I7T0FBbEIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxVQUFVOztJQUVWLGtCQUFrQjtJQUNsQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLGFBQWE7SUFDYixXQUFXO0lBQ1gsY0FBYztJQUNkLG9DQUE0QjtZQUE1Qiw0QkFBNEI7Q0FDL0I7O0FBRUQscURBQXFEOztBQUNyRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSx1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLDRCQUFvQjtZQUFwQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7O0lBRVgsWUFBWTtJQUNaLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJO1FBQ0ksU0FBUztRQUNULGVBQWU7S0FDbEI7Q0FDSjs7QUFFRDtJQUNJO1FBQ0ksV0FBVztRQUNYLGlDQUF5QjtnQkFBekIseUJBQXlCO0tBQzVCO0NBQ0o7O0FBTEQ7SUFDSTtRQUNJLFdBQVc7UUFDWCxpQ0FBeUI7Z0JBQXpCLHlCQUF5QjtLQUM1QjtDQUNKOztBQUVEO0lBQ0k7UUFDSSxXQUFXO0tBQ2Q7Q0FDSjs7QUFKRDtJQUNJO1FBQ0ksV0FBVztLQUNkO0NBQ0oiLCJmaWxlIjoic3JjL2FwcC9iaW8tcGFnZS9iaW8tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcblxuICAgIGFuaW1hdGlvbjogZmFkZUluQW5kVXAgNHMgZm9yd2FyZHM7XG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcblxuICAgIGFuaW1hdGlvbjogZmFkZUluQW5kVXAgNHMgZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbn1cblxuLmJpby1wYWdlLWJnIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmJpby1wYWdlLWJnLW92ZXJsYXksIC5iaW8tcGFnZS1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG5cbi5iaW8tdGV4dC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA0NHB4O1xuICAgIHRvcDogMjBweDtcblxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi5iaW8tdGV4dC1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMTJweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDM2cHgpO1xufVxuXG4vKiBDYW1lbCBjYXNlIGZvcmNlZCBieSBBbmd1bGFyIHN5bnRheCBpbiB0ZW1wbGF0ZSAqL1xuLmJnTG9hZGVkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm92ZXJsYXlGYWRlT3V0IHtcbiAgICBhbmltYXRpb246IGZhZGVPdXQgNnMgZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiA0cztcbn1cblxuLnBpY3R1cmUtY3JlZGl0cyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHJpZ2h0OiA4cHg7XG5cbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5iaW8tdGV4dC1jb250YWluZXIge1xuICAgICAgICBsZWZ0OiA0JTsgICAgXG4gICAgICAgIG1heC13aWR0aDogNzIlO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW5BbmRVcCB7XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZU91dCB7XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/bio-page/bio-page.component.html":
/*!**************************************************!*\
  !*** ./src/app/bio-page/bio-page.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bio-page-container full-page\">\n  <img\n    alt=\"Background image\"\n    class=\"bio-page-bg full-page\"\n    (load)=\"onBgLoad()\"\n    [ngClass]=\"{bgLoaded: bgLoaded}\"\n    [src]=\"bgURL\" />\n  <p class=\"picture-credits\">\n    {{photographerCredits}}\n  </p>\n  <div\n    alt=\"Background image\"\n    class=\"bio-page-bg-overlay full-page\"\n    [ngClass]=\"{overlayFadeOut: bgLoaded}\">\n</div>\n  <div class=\"bio-text-container\">\n    <h2 class=\"bio-text-element\">About Me</h2>\n    <p class=\"bio-text-element\">\n      Hi, I'm Nick. I study computer science at the University of Connecticut.\n      <br>\n      I currently intern at Google and previously worked for Facebook, UConn, Catapult Marketing, and MediaCrossing (a digital advertising startup).\n      <br>\n      I like Model UN and most books.\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bio-page/bio-page.component.ts":
/*!************************************************!*\
  !*** ./src/app/bio-page/bio-page.component.ts ***!
  \************************************************/
/*! exports provided: BioPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioPageComponent", function() { return BioPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var CLIENT_ID = '813f1db96865d9d36ff6e9d5623b0da770d4b7bd4c05e6a764161e3460135296';
var BG_COLLECTION_ID = '3684874';
var DEFAULT_BG_INFO = {
    urls: {
        full: 'https://raw.githubusercontent.com/Nick-the-BinaryTree/nick-the-binarytree.github.io/master/src/assets/bgL.jpg',
        regular: 'https://raw.githubusercontent.com/Nick-the-BinaryTree/nick-the-binarytree.github.io/master/src/assets/bgM.jpg',
        small: 'https://raw.githubusercontent.com/Nick-the-BinaryTree/nick-the-binarytree.github.io/master/src/assets/bgS.jpg'
    },
    user: {
        name: 'Rebe Adelaida'
    }
};
var MEDIUM_WIDTH = 1080;
var MOBILE_WIDTH = 400;
var BioPageComponent = /** @class */ (function () {
    function BioPageComponent() {
        this.bgLoaded = false;
        this.bgURL = null;
        this.photographerCredits = '';
        this.windowWidthCategory = 0;
    }
    BioPageComponent.prototype.ngOnInit = function () {
        this.fetchBackground();
    };
    BioPageComponent.prototype.fetchBackground = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a, e_1, _b, name, urls;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch('https://api.unsplash.com/photos/random/'
                                + '?collections=' + BG_COLLECTION_ID
                                + '&orientation=landscape'
                                + '&client_id=' + CLIENT_ID)];
                    case 1:
                        response = _c.sent();
                        _a = this;
                        return [4 /*yield*/, response.json()];
                    case 2:
                        _a.bgInfo = _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _c.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        this.windowWidthCategory = this.getWindowWidthCategory();
                        _b = this.getBgData(this.bgInfo), name = _b.name, urls = _b.urls;
                        if (urls == null || name == null) {
                            this.bgInfo = DEFAULT_BG_INFO;
                            name = DEFAULT_BG_INFO.user.name;
                            urls = DEFAULT_BG_INFO.urls;
                        }
                        this.bgURL = this.getSizedBg(this.windowWidthCategory, urls);
                        this.photographerCredits = "Photography by " + name + ' on Unsplash';
                        this.initWindowResizeHandler();
                        return [2 /*return*/];
                }
            });
        });
    };
    BioPageComponent.prototype.getBgData = function (bgInfo) {
        if (bgInfo == null) {
            return { name: null, urls: null };
        }
        var urls = bgInfo.urls, user = bgInfo.user;
        var name = user != null ? user.name : null;
        return { name: name, urls: urls };
    };
    BioPageComponent.prototype.getWindowWidthCategory = function () {
        if (window.innerWidth > MEDIUM_WIDTH) {
            return 3;
        }
        else if (window.innerWidth > MOBILE_WIDTH) {
            return 2;
        }
        return 1;
    };
    BioPageComponent.prototype.getSizedBg = function (windowWidthCategory, urls) {
        if (windowWidthCategory === 1) {
            return urls.regular;
        }
        else if (windowWidthCategory === 0) {
            return urls.small;
        }
        return urls.full;
    };
    BioPageComponent.prototype.initWindowResizeHandler = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'resize').subscribe(function () {
            var curWindowWidthCategory = _this.getWindowWidthCategory();
            if (curWindowWidthCategory != _this.windowWidthCategory) {
                _this.windowWidthCategory = curWindowWidthCategory;
                _this.bgURL = _this.getSizedBg(_this.windowWidthCategory, _this.bgInfo.urls);
            }
        });
    };
    BioPageComponent.prototype.onBgLoad = function () {
        this.bgLoaded = this.bgURL != null;
    };
    BioPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bio-page',
            template: __webpack_require__(/*! ./bio-page.component.html */ "./src/app/bio-page/bio-page.component.html"),
            styles: [__webpack_require__(/*! ./bio-page.component.css */ "./src/app/bio-page/bio-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BioPageComponent);
    return BioPageComponent;
}());



/***/ }),

/***/ "./src/app/game-bg/game-bg.component.css":
/*!***********************************************!*\
  !*** ./src/app/game-bg/game-bg.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "canvas {\n    background: #37464f;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1iZy9nYW1lLWJnLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7R0FDckIiLCJmaWxlIjoic3JjL2FwcC9nYW1lLWJnL2dhbWUtYmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImNhbnZhcyB7XG4gICAgYmFja2dyb3VuZDogIzM3NDY0ZjtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/game-bg/game-bg.component.html":
/*!************************************************!*\
  !*** ./src/app/game-bg/game-bg.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas class=\"full-page\" width=\"400px\" height=\"300px\" #gameArea></canvas>"

/***/ }),

/***/ "./src/app/game-bg/game-bg.component.ts":
/*!**********************************************!*\
  !*** ./src/app/game-bg/game-bg.component.ts ***!
  \**********************************************/
/*! exports provided: GameBgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameBgComponent", function() { return GameBgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _game_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.util */ "./src/app/game-bg/game.util.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var maxRadius = 20;
var maxVelocity = 80;
var minRadius = 5;
var minVelocity = 20;
var midRadius = (maxRadius + minRadius) / 2;
var boundaries = {
    left: 0,
    top: 0,
    bottom: window.innerHeight,
    right: window.innerWidth
};
var initObjs = [__assign({}, Object(_game_util__WEBPACK_IMPORTED_MODULE_3__["randomStartPos"])(boundaries, maxRadius), { radius: maxRadius, velocity: Object(_game_util__WEBPACK_IMPORTED_MODULE_3__["randomStartVelocityDir"])(minVelocity), color: 'rgb(83,109,254,0.1)' }), __assign({}, Object(_game_util__WEBPACK_IMPORTED_MODULE_3__["randomStartPos"])(boundaries, midRadius), { radius: midRadius, velocity: Object(_game_util__WEBPACK_IMPORTED_MODULE_3__["randomStartVelocityDir"])((maxVelocity + minVelocity) / 2), color: 'rgb(105,240,174,0.1)' }), __assign({}, Object(_game_util__WEBPACK_IMPORTED_MODULE_3__["randomStartPos"])(boundaries, minRadius), { radius: minRadius, velocity: Object(_game_util__WEBPACK_IMPORTED_MODULE_3__["randomStartVelocityDir"])(maxVelocity), color: 'rgb(255,82,82,0.1)' })];
var GameBgComponent = /** @class */ (function () {
    function GameBgComponent() {
        var _this = this;
        this.frames$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(undefined)
            .pipe(
        // emits value of calculateStep
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["expand"])(function (val) { return _this.calculateStep(val); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (frame) { return frame !== undefined; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (frame) { return frame.deltaTime; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        this.gameState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
    }
    GameBgComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // canvas setup
        this.gameArea.nativeElement.width = boundaries.right;
        this.gameArea.nativeElement.height = boundaries.bottom;
        // TODO: convert to stream
        window.addEventListener('resize', function () {
            _this.gameArea.nativeElement.height = boundaries.bottom = window.innerHeight;
            _this.gameArea.nativeElement.width = boundaries.right = window.innerWidth;
        });
        // run game
        this.frames$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.gameState$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var deltaTime = _a[0], gameState = _a[1];
            return _this.update(deltaTime, gameState);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (gameState) { return _this.gameState$.next(gameState); })).subscribe(function (gameState) {
            _this.render(gameState);
        });
    };
    GameBgComponent.prototype.calculateStep = function (prevFrame) {
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            requestAnimationFrame(function (frameStartTime) {
                var deltaTime = prevFrame
                    ? (frameStartTime - prevFrame.frameStartTime) / 1000
                    : 0;
                observer.next({
                    frameStartTime: frameStartTime,
                    deltaTime: deltaTime
                });
            });
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(_game_util__WEBPACK_IMPORTED_MODULE_3__["clampTo30FPS"]));
    };
    GameBgComponent.prototype.render = function (state) {
        var ctx = this.gameArea.nativeElement.getContext('2d');
        // ctx.clearRect(0, 0, this.gameArea.nativeElement.clientWidth,
        //    this.gameArea.nativeElement.clientHeight);
        state['objects'].forEach(function (obj) {
            ctx.fillStyle = obj.color;
            ctx.beginPath();
            ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        });
    };
    ;
    GameBgComponent.prototype.update = function (deltaTime, state) {
        if (state['objects'] == null) {
            state['objects'] = initObjs;
        }
        else {
            state['objects'].forEach(function (obj) {
                var hitBoundary = Object(_game_util__WEBPACK_IMPORTED_MODULE_3__["runBoundaryCheck"])(obj, boundaries);
                if (hitBoundary != null) {
                    if (hitBoundary === 'right' || hitBoundary === 'left') {
                        obj.velocity.dx *= -1;
                    }
                    else {
                        obj.velocity.dy *= -1;
                    }
                }
                obj.x = obj.x += obj.velocity.dx * deltaTime;
                obj.y = obj.y += obj.velocity.dy * deltaTime;
            });
        }
        return state;
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gameArea'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GameBgComponent.prototype, "gameArea", void 0);
    GameBgComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-bg',
            template: __webpack_require__(/*! ./game-bg.component.html */ "./src/app/game-bg/game-bg.component.html"),
            styles: [__webpack_require__(/*! ./game-bg.component.css */ "./src/app/game-bg/game-bg.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GameBgComponent);
    return GameBgComponent;
}());



/***/ }),

/***/ "./src/app/game-bg/game.util.ts":
/*!**************************************!*\
  !*** ./src/app/game-bg/game.util.ts ***!
  \**************************************/
/*! exports provided: clampMag, clampTo30FPS, randomStartPos, randomStartVal, randomStartVelocity, randomStartVelocityDir, randomStartVelocityVal, randomVelocityDir, runBoundaryCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clampMag", function() { return clampMag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clampTo30FPS", function() { return clampTo30FPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomStartPos", function() { return randomStartPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomStartVal", function() { return randomStartVal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomStartVelocity", function() { return randomStartVelocity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomStartVelocityDir", function() { return randomStartVelocityDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomStartVelocityVal", function() { return randomStartVelocityVal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomVelocityDir", function() { return randomVelocityDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runBoundaryCheck", function() { return runBoundaryCheck; });
var clampMag = function (value, min, max) {
    var val = Math.abs(value);
    var sign = value < 0 ? -1 : 1;
    if (min <= val && val <= max) {
        return value;
    }
    return sign * min;
};
// prevents frames jumping ahead too far
var clampTo30FPS = function (frame) {
    if (frame.deltaTime > (1 / 30)) {
        frame.deltaTime = 1 / 30;
    }
    return frame;
};
var randomStartPos = function (boundaries, min) { return ({
    x: Math.random() * (boundaries.right - min) + min,
    y: Math.random() * (boundaries.bottom - min) + min
}); };
var randomStartVal = function (baseVal, min) {
    return Math.random() * (baseVal - min) + min;
};
var randomStartVelocity = function (baseVal, min) {
    return ({ dx: randomStartVelocityVal(baseVal, min), dy: randomStartVelocityVal(baseVal, min) });
};
var randomStartVelocityDir = function (val) {
    return ({ dx: randomVelocityDir(val), dy: randomVelocityDir(val) });
};
var randomStartVelocityVal = function (baseVal, min) {
    return randomVelocityDir(randomStartVal(baseVal, min));
};
var randomVelocityDir = function (val) { return val * (Math.random() < 0.5 ? -1 : 1); };
var runBoundaryCheck = function (obj, boundaries) {
    var boundaryHit = null;
    if (obj.x + obj.radius > boundaries.right) {
        boundaryHit = 'right';
    }
    else if (obj.x - obj.radius < boundaries.left) {
        boundaryHit = 'left';
    }
    else if (obj.y + obj.radius > boundaries.bottom) {
        boundaryHit = 'bottom';
    }
    else if (obj.y - obj.radius < boundaries.top) {
        boundaryHit = 'top';
    }
    return boundaryHit;
};


/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-game-bg></app-game-bg>\n<app-name-title></app-name-title>"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/app/actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent(ngRedux) {
        this.ngRedux = ngRedux;
        this.munCode = 0;
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.keyStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document.body, 'keydown')
            .subscribe(function (x) {
            if (x.key === 'm' && _this.munCode === 0
                || x.key === 'u' && _this.munCode === 1) {
                _this.munCode++;
            }
            else if (x.key === 'n' && _this.munCode === 2) {
                _this.ngRedux.dispatch({ type: _actions__WEBPACK_IMPORTED_MODULE_3__["GOTO_MUN_PAGE"] });
            }
            else {
                _this.ngRedux.dispatch({ type: _actions__WEBPACK_IMPORTED_MODULE_3__["GOTO_BIO_PAGE"] });
            }
        });
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["NgRedux"]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/name-title/name-title.component.css":
/*!*****************************************************!*\
  !*** ./src/app/name-title/name-title.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    top: 35%;\n\n    color: white;\n    font-size: 5rem;\n    font-weight: 100;\n    text-align: center;\n\n    -webkit-animation: fadeIn 5s forwards;\n\n            animation: fadeIn 5s forwards;\n}\n\n@media (max-width: 500px) {\n    h1 {\n        font-size: 3rem;\n    }\n}\n\n@-webkit-keyframes fadeIn {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n\n@keyframes fadeIn {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmFtZS10aXRsZS9uYW1lLXRpdGxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLHlDQUFpQztZQUFqQyxpQ0FBaUM7SUFDakMsU0FBUzs7SUFFVCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7O0lBRW5CLHNDQUE4Qjs7WUFBOUIsOEJBQThCO0NBQ2pDOztBQUVEO0lBQ0k7UUFDSSxnQkFBZ0I7S0FDbkI7Q0FDSjs7QUFFRDtJQUNJO1FBQ0ksV0FBVztLQUNkO0lBQ0Q7UUFDSSxXQUFXO0tBQ2Q7Q0FDSjs7QUFQRDtJQUNJO1FBQ0ksV0FBVztLQUNkO0lBQ0Q7UUFDSSxXQUFXO0tBQ2Q7Q0FDSiIsImZpbGUiOiJzcmMvYXBwL25hbWUtdGl0bGUvbmFtZS10aXRsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdG9wOiAzNSU7XG5cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiA1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gNXMgZm9yd2FyZHM7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/name-title/name-title.component.html":
/*!******************************************************!*\
  !*** ./src/app/name-title/name-title.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 #myname>Nicholas Hartunian</h1>\n"

/***/ }),

/***/ "./src/app/name-title/name-title.component.ts":
/*!****************************************************!*\
  !*** ./src/app/name-title/name-title.component.ts ***!
  \****************************************************/
/*! exports provided: NameTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameTitleComponent", function() { return NameTitleComponent; });
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

var NameTitleComponent = /** @class */ (function () {
    function NameTitleComponent() {
    }
    NameTitleComponent.prototype.ngOnInit = function () {
    };
    NameTitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-name-title',
            template: __webpack_require__(/*! ./name-title.component.html */ "./src/app/name-title/name-title.component.html"),
            styles: [__webpack_require__(/*! ./name-title.component.css */ "./src/app/name-title/name-title.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NameTitleComponent);
    return NameTitleComponent;
}());



/***/ }),

/***/ "./src/app/store.ts":
/*!**************************!*\
  !*** ./src/app/store.ts ***!
  \**************************/
/*! exports provided: rootReducer, INITIAL_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/actions.ts");

function rootReducer(state, action) {
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["GOTO_BIO_PAGE"]:
            return { page: 'bio' };
        case _actions__WEBPACK_IMPORTED_MODULE_0__["GOTO_LANDING_PAGE"]:
            return { page: 'landing' };
        case _actions__WEBPACK_IMPORTED_MODULE_0__["GOTO_MUN_PAGE"]:
            window.location.href = "https://nicholashartunian.com/projects/MUNGen/";
            return { page: 'MUN' };
    }
    return state;
}
var INITIAL_STATE = {
    page: 'landing'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nick/Desktop/nick-the-binarytree.github.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map