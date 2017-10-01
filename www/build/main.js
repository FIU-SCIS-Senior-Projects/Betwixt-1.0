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

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_workfrom_workfrom_service__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__space_space__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_groupsocket_groupsocket_service__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_geolib__ = __webpack_require__(616);
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
    function HomePage(googleMaps, platform, workfromService, modalCtrl, groupSocketService) {
        this.googleMaps = googleMaps;
        this.platform = platform;
        this.workfromService = workfromService;
        this.modalCtrl = modalCtrl;
        this.groupSocketService = groupSocketService;
    }
    HomePage.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log('Ion view loaded.');
        this.platform
            .ready()
            .then(function () { return _this.loadMap(); })
            .then(function (currentPosition) { return _this.getCentralPosition(currentPosition); })
            .then(function (centralPosition) { return _this.getWorkfromLocations(centralPosition); })
            .catch(function (error) { return alert("An error has occured:\n " + JSON.stringify(error)); });
    };
    HomePage.prototype.loadMap = function () {
        var _this = this;
        var currentPosition = { coords: { latitude: 43.0741904, longitude: -89.3809802 } };
        var _a = currentPosition.coords, latitude = _a.latitude, longitude = _a.longitude;
        this.latitude = latitude;
        this.longitude = longitude;
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
            enableHighAccuracy: true
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
        var _this = this;
        this.groupSocketService.uid.subscribe(function (group_uid) {
            var userInfo = {
                groupUID: group_uid,
                username: 'TestUser',
                latitude: _this.latitude,
                longitude: _this.longitude,
            };
            _this.groupSocketService.joinGroup(group_uid);
            _this.groupSocketService.sendLocation(userInfo);
            var spaceModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__space_space__["a" /* SpacePage */], {
                uid: group_uid,
            });
            spaceModal.present();
        }, function (error) { return console.log(error); });
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
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Alex\Desktop\Betwixt-1.0\src\pages\home\home.html"*/'<div id="map" class="map-canvas">\n  <button ion-button color="primary" (click)="showCreateSpaceModal()">Create space</button>\n</div>\n'/*ion-inline-end:"C:\Users\Alex\Desktop\Betwixt-1.0\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["a" /* GoogleMaps */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__app_services_workfrom_workfrom_service__["a" /* WorkfromService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_5__app_services_groupsocket_groupsocket_service__["a" /* GroupSocketService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkfromService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(55);
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

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
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
        this.viewCtrl = viewCtrl;
        this.uid = params.get('uid');
    }
    SpacePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return SpacePage;
}());
SpacePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core___["n" /* Component */])({
        selector: 'page-space',template:/*ion-inline-start:"C:\Users\Alex\Desktop\Betwixt-1.0\src\pages\space\space.html"*/'<div>\n    <button ion-button icon-only clear large (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n    </button>\n    <div class="flex-center-align">\n        <h1>Your Space Link</h1>\n        <p>{{ uid }}</p>\n        <h4>Share the Space Link above with the people you want to meet with!</h4>\n    </div>\n</div>'/*ion-inline-end:"C:\Users\Alex\Desktop\Betwixt-1.0\src\pages\space\space.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], SpacePage);

//# sourceMappingURL=space.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(351);
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
        var _this = this;
        this.http = http;
        //LOCALHOST
        //socketHost: string = 'http://localhost:8080';
        //IP TO ACCESS WITH ANDROID EMULATOR. COMMENT OUT ALL OTHERS WHEN TESTING WITH ANDROID EMULATOR.
        this.socketHost = "http://10.0.2.2:8080";
        this.userInfos = [];
        this.uid = this.getUID;
        this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__(this.socketHost);
        this.socket.on('serverSendInfo', function (res) {
            console.log("User info added\n" + JSON.stringify(res));
            _this.userInfos.push(res);
        });
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
    GroupSocketService.prototype.joinGroup = function (group_uid) {
        this.socket.emit('group_uid', group_uid);
    };
    GroupSocketService.prototype.sendLocation = function (userInfo) {
        this.socket.emit('clientSendInfo', userInfo);
    };
    return GroupSocketService;
}());
GroupSocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], GroupSocketService);

//# sourceMappingURL=groupsocket.service.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(283);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_space_space__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_services_module__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_maps__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_deeplinks__ = __webpack_require__(237);
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
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_deeplinks__["a" /* Deeplinks */],
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

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_deeplinks__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(238);
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
    function MyApp(platform, deeplinks, statusBar, splashScreen) {
        this.platform = platform;
        this.deeplinks = deeplinks;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Convenience to route with a given nav
            _this.deeplinks.route({
                '/': {},
            }).subscribe(function (match) {
                alert('Successfully routed\n' + JSON.stringify(match));
            }, function (nomatch) {
                console.warn('Unmatched Route\n' + JSON.stringify(nomatch));
            });
        });
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Alex\Desktop\Betwixt-1.0\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Alex\Desktop\Betwixt-1.0\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_deeplinks__["a" /* Deeplinks */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sample_sample_service__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config_module__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__yelp_yelp_service__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__workfrom_workfrom_service__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__groupsocket_groupsocket_service__ = __webpack_require__(242);
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

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(55);
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

/***/ 619:
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

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YelpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(55);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_url_join__ = __webpack_require__(327);
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

},[278]);
//# sourceMappingURL=main.js.map