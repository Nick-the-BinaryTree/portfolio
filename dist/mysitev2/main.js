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

module.exports = "<!-- Yeah, we should be using AngularRouter here, but I wanted to Redux! -->\n<p *ngIf=\"(page | async)==='bio'; else landing\">oh hey</p>\n<ng-template #landing>\n    <app-landing-page></app-landing-page>\n</ng-template>"

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
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__["LandingPageComponent"]
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

/***/ "./src/app/game-bg/game-bg.component.css":
/*!***********************************************!*\
  !*** ./src/app/game-bg/game-bg.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "canvas {\n    position:absolute;\n    left:0;\n    right:0;\n    bottom:0;\n    top:0;\n    background: #37464f;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1iZy9nYW1lLWJnLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsTUFBTTtJQUNOLG9CQUFvQjtHQUNyQiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtYmcvZ2FtZS1iZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2FudmFzIHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBsZWZ0OjA7XG4gICAgcmlnaHQ6MDtcbiAgICBib3R0b206MDtcbiAgICB0b3A6MDtcbiAgICBiYWNrZ3JvdW5kOiAjMzc0NjRmO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/game-bg/game-bg.component.html":
/*!************************************************!*\
  !*** ./src/app/game-bg/game-bg.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas width=\"400px\" height=\"300px\" #gameArea></canvas>"

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
        this.keyStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document.body, 'keyup')
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
            return { page: 'landing' };
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