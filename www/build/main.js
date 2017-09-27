webpackJsonp([0],{

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 193;

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_workfrom_workfrom_service__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__space_space__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_groupsocket_groupsocket_service__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_geolib__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_geolib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_geolib__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RANDOM_GEOCOORDINATES = [
    { latitude: 25.992046, longitude: -80.283645 },
    { latitude: 25.942871, longitude: -80.12338 },
];
var HomePage = (function () {
    function HomePage(googleMaps, platform, workfromService, spaceCtrl, groupSocketService) {
        this.googleMaps = googleMaps;
        this.platform = platform;
        this.workfromService = workfromService;
        this.spaceCtrl = spaceCtrl;
        this.groupSocketService = groupSocketService;
    }
    HomePage.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log('Ion view loaded.');
        this.platform
            .ready()
            .then(function () { return _this.getCurrentPosition(); })
            .then(function (currentPosition) { return _this.loadMap(currentPosition); })
            .then(function (currentPosition) { return _this.getCentralPosition(currentPosition); })
            .then(function (centralPosition) { return _this.getWorkfromLocations(centralPosition); })
            .catch(function (error) { return alert("An error has occured:\n " + error); });
    };
    HomePage.prototype.loadMap = function (currentPosition) {
        var _this = this;
        var _a = currentPosition.coords, latitude = _a.latitude, longitude = _a.longitude;
        var mapOptions = {
            camera: {
                target: {
                    lat: latitude,
                    lng: longitude,
                },
                zoom: 18,
                tilt: 30,
            },
        };
        this.mapElement = document.getElementById('map');
        this.map = this.googleMaps.create(this.mapElement, mapOptions);
        return this.map
            .one(__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            console.log('Map is ready!');
            _this.dropMarker('Current Location', 'green', latitude, longitude);
            RANDOM_GEOCOORDINATES.forEach(function (position, index) {
                var latitude = position.latitude, longitude = position.longitude;
                _this.dropMarker("Location " + (index + 1), 'blue', latitude, longitude);
            });
            return { latitude: latitude, longitude: longitude };
        })
            .catch(function (error) { return error; });
    };
    HomePage.prototype.getCurrentPosition = function () {
        var options = {
            enableHighAccuracy: true,
        };
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
    };
    HomePage.prototype.getCentralPosition = function (currentPostion) {
        var _this = this;
        var locations = [currentPostion].concat(RANDOM_GEOCOORDINATES);
        return new Promise(function (resolve) {
            var centralPosition = __WEBPACK_IMPORTED_MODULE_6_geolib___default.a.getCenterOfBounds(locations);
            _this.dropMarker('Central Location', 'purple', centralPosition.latitude, centralPosition.longitude);
            return resolve(centralPosition);
        });
    };
    HomePage.prototype.getWorkfromLocations = function (centralPosition) {
        var _this = this;
        var latitude = centralPosition.latitude, longitude = centralPosition.longitude;
        this.workfromService.getPlaces(latitude, longitude).subscribe(function (res) {
            var locations = res.json();
            if (locations.length > 0) {
                locations.forEach(function (location) {
                    _this.dropMarker(location.title, 'red', location.latitude, location.longitude);
                });
            }
            else {
                alert("There aren't any Workfrom locations... We might need to search on Yelp then!");
            }
        });
    };
    HomePage.prototype.showCreateSpaceModal = function () {
        var spaceModal = this.spaceCtrl.create(__WEBPACK_IMPORTED_MODULE_4__space_space__["a" /* SpacePage */], {
            uid: this.groupSocketService.uid,
        });
        spaceModal.present();
    };
    HomePage.prototype.dropMarker = function (title, icon, lat, lng) {
        this.map
            .addMarker({
            title: title,
            icon: icon,
            animation: 'DROP',
            position: { lat: lat, lng: lng },
        })
            .then(function (marker) {
            marker.on(__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function (res) {
                alert("clicked on " + res);
            });
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core___["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/aliciar/Projects/mine/betwixt/mobileApp/src/pages/home/home.html"*/'<ion-content>\n  <div #map id="map"></div>\n</ion-content>\n<ion-footer>\n  <button ion-button full color="primary" (click)="showCreateSpaceModal()">Create space</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/aliciar/Projects/mine/betwixt/mobileApp/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["a" /* GoogleMaps */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["a" /* GoogleMaps */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_services_workfrom_workfrom_service__["a" /* WorkfromService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_services_workfrom_workfrom_service__["a" /* WorkfromService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__app_services_groupsocket_groupsocket_service__["a" /* GroupSocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_services_groupsocket_groupsocket_service__["a" /* GroupSocketService */]) === "function" && _e || Object])
], HomePage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkfromService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkfromService = (function () {
    function WorkfromService(http, configService) {
        this.http = http;
        this.configService = configService;
    }
    Object.defineProperty(WorkfromService.prototype, "workfromPlaces", {
        get: function () {
            return this.configService.workfromPlaces;
        },
        enumerable: true,
        configurable: true
    });
    // TODO: create interface for options
    WorkfromService.prototype.getPlaces = function (latitude, longitude, options) {
        var params = {
            latitude: latitude,
            longitude: longitude
        };
        return this.http.get(this.workfromPlaces, { params: params });
    };
    return WorkfromService;
}());
WorkfromService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1__config_config_service__["a" /* ConfigService */]])
], WorkfromService);

//# sourceMappingURL=workfrom.service.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpacePage = (function () {
    function SpacePage(viewCtrl, params) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        var uidObservable = params.get('uid');
        uidObservable.subscribe(function (uid) { return (_this.uid = uid); }, function (error) {
            console.log(error);
        });
    }
    SpacePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return SpacePage;
}());
SpacePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core___["n" /* Component */])({
        selector: 'page-space',template:/*ion-inline-start:"/Users/aliciar/Projects/mine/betwixt/mobileApp/src/pages/space/space.html"*/''/*ion-inline-end:"/Users/aliciar/Projects/mine/betwixt/mobileApp/src/pages/space/space.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]) === "function" && _b || Object])
], SpacePage);

var _a, _b;
//# sourceMappingURL=space.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GroupSocketService = (function () {
    function GroupSocketService(http) {
        this.http = http;
        //LOCALHOST
        this.socketHost = 'http://localhost:8080';
        this.uid = this.getUID;
        this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__(this.socketHost);
    }
    Object.defineProperty(GroupSocketService.prototype, "getUID", {
        get: function () {
            return this.http
                .get(this.socketHost + "/group/create")
                .map(function (res) { return res.json().uid; })
                .catch(function (error) {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(JSON.stringify(error.json()) || 'Server error');
            });
        },
        enumerable: true,
        configurable: true
    });
    return GroupSocketService;
}());
GroupSocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === "function" && _a || Object])
], GroupSocketService);

var _a;
//# sourceMappingURL=groupsocket.service.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(282);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_space_space__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_services_module__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_maps__ = __webpack_require__(238);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_space_space__["a" /* SpacePage */]
        ],
        imports: [
            // Custom
            __WEBPACK_IMPORTED_MODULE_8__services_services_module__["a" /* ServicesModule */],
            // Angular
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
            // Ionic
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_space_space__["a" /* SpacePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_maps__["a" /* GoogleMaps */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/aliciar/Projects/mine/betwixt/mobileApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/aliciar/Projects/mine/betwixt/mobileApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sample_sample_service__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config_module__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__yelp_yelp_service__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__workfrom_workfrom_service__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__groupsocket_groupsocket_service__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var serviceModules = [__WEBPACK_IMPORTED_MODULE_2__config_config_module__["a" /* ConfigModule */]];
var serviceProviders = [
    __WEBPACK_IMPORTED_MODULE_1__sample_sample_service__["a" /* SampleService */],
    __WEBPACK_IMPORTED_MODULE_3__yelp_yelp_service__["a" /* YelpService */],
    __WEBPACK_IMPORTED_MODULE_4__workfrom_workfrom_service__["a" /* WorkfromService */],
    __WEBPACK_IMPORTED_MODULE_5__groupsocket_groupsocket_service__["a" /* GroupSocketService */],
];
var ServicesModule = (function () {
    function ServicesModule(parentModule) {
        if (parentModule) {
            // ServicesModule includes singleton services that shouldn't be created more than once.
            // Throwing if we're a child prevents that.
            throw new Error('ServicesModule is already loaded. Import from AppModule only.');
        }
    }
    return ServicesModule;
}());
ServicesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: serviceModules,
        exports: serviceModules,
        providers: serviceProviders,
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Optional */])()),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* SkipSelf */])()),
    __metadata("design:paramtypes", [ServicesModule])
], ServicesModule);

//# sourceMappingURL=services.module.js.map

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SampleService = (function () {
    function SampleService(http, configService) {
        this.http = http;
        this.configService = configService;
    }
    Object.defineProperty(SampleService.prototype, "getServerHelloWorld", {
        get: function () {
            return this.configService.getServerHelloWorld;
        },
        enumerable: true,
        configurable: true
    });
    SampleService.prototype.getRequest = function () {
        return this.http.get(this.getServerHelloWorld);
    };
    return SampleService;
}());
SampleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1__config_config_service__["a" /* ConfigService */]])
], SampleService);

//# sourceMappingURL=sample.service.js.map

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ConfigModule = (function () {
    function ConfigModule() {
    }
    return ConfigModule;
}());
ConfigModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        providers: [__WEBPACK_IMPORTED_MODULE_1__config_service__["a" /* ConfigService */]],
    })
], ConfigModule);

//# sourceMappingURL=config.module.js.map

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YelpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YelpService = (function () {
    function YelpService(http, configService) {
        this.http = http;
        this.configService = configService;
    }
    Object.defineProperty(YelpService.prototype, "yelpBusinessSearch", {
        get: function () {
            return this.configService.yelpBusinessSearch;
        },
        enumerable: true,
        configurable: true
    });
    // TODO: create interface for options
    YelpService.prototype.getBusinesses = function (latitude, longitude, options) {
        var params = {
            latitude: latitude,
            longitude: longitude
        };
        return this.http.get(this.yelpBusinessSearch, { params: params });
    };
    return YelpService;
}());
YelpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1__config_config_service__["a" /* ConfigService */]])
], YelpService);

//# sourceMappingURL=yelp.service.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_url_join__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_url_join___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_url_join__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SERVER_URL = 'https://server.betwixt.space/';
var ConfigService = (function () {
    function ConfigService() {
        console.info('CONFIG-SERVICE');
    }
    Object.defineProperty(ConfigService.prototype, "serverUrl", {
        get: function () {
            return SERVER_URL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "getServerHelloWorld", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1_url_join___default()(SERVER_URL, 'helloworld');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "yelpBusinessSearch", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1_url_join___default()(SERVER_URL, 'businesses', 'search');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigService.prototype, "workfromPlaces", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1_url_join___default()(SERVER_URL, 'places');
        },
        enumerable: true,
        configurable: true
    });
    return ConfigService;
}());
ConfigService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ConfigService);

//# sourceMappingURL=config.service.js.map

/***/ })

},[277]);
//# sourceMappingURL=main.js.map