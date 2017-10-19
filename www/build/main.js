webpackJsonp([1],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_subject__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
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
    function GroupSocketService(http, configService) {
        var _this = this;
        this.http = http;
        this.userInfos = [];
        this.userInfoSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_subject__["Subject"]();
        this.socketHost = configService.serverUrl;
        //Initialize userInfos object.
        this.uid = this.getUID;
        this.socket = __WEBPACK_IMPORTED_MODULE_5_socket_io_client__(this.socketHost);
        //Add user information when a new user joins.
        this.socket.on('getNewUserInfo', function (res) {
            alert('User info added\n' + JSON.stringify(res));
            _this.userInfos.push(res);
            _this.socket.emit('sendUserInfo', {
                socketID: res.socketID,
                userInfo: _this.userInfo,
            });
            _this.userInfoSubject.next(res);
        });
        this.socket.on('getExistingUserInfo', function (res) {
            alert('User info added\n' + JSON.stringify(res));
            _this.userInfos.push(res);
            _this.userInfoSubject.next(res);
        });
    }
    GroupSocketService.prototype.joinGroup = function () {
        alert("Socket is: " + this.socket.connected);
        //Add the unique socket id on join group.
        this.userInfo.socketID = this.socket.io.engine.id;
        this.socket.emit('joinGroup', this.userInfo);
        alert("Should have joined group with uid: " + this.userInfo.groupUID);
    };
    Object.defineProperty(GroupSocketService.prototype, "getUID", {
        get: function () {
            return this.http
                .get(this.socketHost + "group/create")
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__config_config_service__["a" /* ConfigService */]])
], GroupSocketService);

//# sourceMappingURL=groupsocket.service.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilePage = (function () {
    function ProfilePage(viewCtrl, navParams, navCtrl, events) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.events = events;
        this.profile = navParams.get('profileData');
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.ionViewWillLeave = function () {
        this.events.publish('profile:saved', this.profile);
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Alex\Desktop\Betwixt-1.0\src\pages\profile\profile.html"*/'<ion-header>\n        <ion-navbar>\n            <button ion-button menuToggle>\n              <ion-icon name="menu"></ion-icon>\n            </button>\n            <ion-title>Profile</ion-title>\n          </ion-navbar>\n    </ion-header>\n    <ion-content>\n        <div class="flex-center-align">\n            <form>\n                <ion-item>\n                    <ion-label stacked>Email Address</ion-label>\n                    <ion-input name="email" [(ngModel)]="profile.email" type="text"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>First Name</ion-label>\n                    <ion-input name="First Name" [(ngModel)]="profile.firstName" type="text"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>Last Name</ion-label>\n                    <ion-input name="Last Name" [(ngModel)]="profile.lastName" type="text"></ion-input>\n                </ion-item>\n            </form>\n        </div>\n    </ion-content>\n'/*ion-inline-end:"C:\Users\Alex\Desktop\Betwixt-1.0\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/profile/profile.module": [
		633,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 195;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_workfrom_workfrom_service__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__space_space__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_groupsocket_groupsocket_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_geolib__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_geolib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_geolib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_gravatar__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_gravatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_gravatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_launch_navigator__ = __webpack_require__(281);
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
    { latitude: 25.942871, longitude: -80.12338 } // Sunny Isles
    // { latitude: 38.5678818, longitude: -121.4636956 }, // East Sacramento
    // { latitude: 37.2972316, longitude: -122.0976092 }, // San Jose
];
var HomePage = (function () {
    function HomePage(platform, modalCtrl, workfromService, googleMaps, groupSocketService, nativeStorage, navParams, navCtrl, events, launchNavigator) {
        var _this = this;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.workfromService = workfromService;
        this.googleMaps = googleMaps;
        this.groupSocketService = groupSocketService;
        this.nativeStorage = nativeStorage;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.events = events;
        this.launchNavigator = launchNavigator;
        //Generate random username and pass to socketservice.
        this.username = "TestUser" + Math.floor(Math.random() * 100);
        this.groupSocketService.username = this.username;
        events.subscribe("profile:saved", function (profile) {
            _this.nativeStorage.setItem("email", profile.email);
            _this.nativeStorage.setItem("firstName", profile.firstName);
            _this.nativeStorage.setItem("lastName", profile.lastName);
            _this.gravatarUrl = __WEBPACK_IMPORTED_MODULE_9_gravatar___default.a.url(profile.email, { s: "100", d: "mm" }, true);
            _this.nativeStorage.setItem("gravatarUrl", _this.gravatarUrl);
        });
    }
    HomePage.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log("Ion view loaded.");
        this.platform
            .ready()
            .then(function () { return _this.initialSetup(); })
            .then(function () {
            alert("platform ready...");
            _this.host_uid = _this.navParams.get("group_uid");
            //When app is re-opened
            _this.joinHostGroup();
            return _this.getCurrentPosition();
        })
            .then(function (currentPosition) { return _this.loadMap(currentPosition); })
            .then(function (currentPosition) { return _this.getCentralPosition(currentPosition); })
            .then(function (centralPosition) { return _this.getWorkfromLocations(centralPosition); })
            .catch(function (error) { return alert("An error has occured:\n " + error); });
    };
    HomePage.prototype.initialSetup = function () {
        var _this = this;
        this.nativeStorage.getItem("gravatarUrl").then(function (url) {
            _this.gravatarUrl = url;
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.presentProfilePage = function () {
        var profileData = this.getProfileData("email", "firstName", "lastName");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */], { profileData: profileData });
    };
    HomePage.prototype.getProfileData = function () {
        var _this = this;
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        var profileData = {};
        keys.forEach(function (key, index) {
            _this.nativeStorage.getItem(key).then(function (value) {
                profileData[key] = value;
            }, function (error) {
                console.log(error);
                profileData[key] = "";
            });
        });
        return profileData;
    };
    HomePage.prototype.loadMap = function (currentPosition) {
        var _this = this;
        var _a = currentPosition.coords, latitude = _a.latitude, longitude = _a.longitude;
        this.latitude = latitude;
        this.longitude = longitude;
        var mapOptions = {
            camera: {
                target: {
                    lat: latitude,
                    lng: longitude
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.mapElement = document.getElementById("map");
        this.map = this.googleMaps.create(this.mapElement, mapOptions);
        return this.map
            .one(__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            console.log("Map is ready!");
            _this.dropMarker("Current Location", "green", latitude, longitude);
            RANDOM_GEOCOORDINATES.forEach(function (position, index) {
                var latitude = position.latitude, longitude = position.longitude;
                _this.dropMarker("Location " + (index + 1), "blue", latitude, longitude);
            });
            _this.groupSocketService.userInfoSubject.subscribe(function (userInfo) {
                console.log("Marker dropped for user: " + userInfo.username);
                _this.dropMarker(userInfo.username, "blue", userInfo.latitude, userInfo.longitude);
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
            var centralPosition = __WEBPACK_IMPORTED_MODULE_8_geolib___default.a.getCenterOfBounds(locations);
            _this.dropMarker("Central Location", "purple", centralPosition.latitude, centralPosition.longitude, _this.launchMap, {
                launchNavigator: _this.launchNavigator,
                currentPosition: currentPostion,
                centralPosition: centralPosition
            });
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
                    _this.dropMarker(location.title, "red", location.latitude, location.longitude);
                });
            }
            else {
                alert("There aren't any Workfrom locations... We might need to search on Yelp then!");
            }
        });
    };
    HomePage.prototype.launchMap = function (params) {
        var launchNavigator = params.launchNavigator;
        launchNavigator
            .isAppAvailable(launchNavigator.APP.GOOGLE_MAPS)
            .then(function (available) {
            var app;
            if (available)
                app = launchNavigator.APP.GOOGLE_MAPS;
            else
                app = launchNavigator.APP.USER_SELECT;
            launchNavigator
                .navigate([params.centralPosition.latitude, params.centralPosition.longitude], {
                app: app,
                start: [
                    params.currentPosition.latitude,
                    params.currentPosition.longitude
                ]
            })
                .then(function (success) { return alert("Map launching..."); }, function (error) { return alert("Maps application failed to open!"); });
        });
    };
    HomePage.prototype.showCreateSpaceModal = function () {
        var _this = this;
        //On open space modal, subscribe to group uid from server.
        this.groupSocketService.uid.subscribe(
        //User's info object that will be sent to server.
        function (group_uid) {
            _this.groupSocketService.userInfo = {
                socketID: "",
                groupUID: group_uid,
                username: _this.username,
                latitude: _this.latitude,
                longitude: _this.longitude
            };
            console.log(group_uid);
            //Join the room specified by the group uid.
            _this.groupSocketService.joinGroup();
            //Create modal.
            var spaceModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__space_space__["a" /* SpacePage */], {
                uid: group_uid
            });
            spaceModal.present();
            spaceModal.onDidDismiss(function (data) {
                _this.groupSocketService.userInfos = [];
            });
        }, function (error) {
            //Create modal.
            var spaceModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__space_space__["a" /* SpacePage */], {
                uid: ""
            });
            spaceModal.present();
            spaceModal.onDidDismiss(function (data) {
                _this.groupSocketService.userInfos = [];
            });
        });
    };
    //If routed from the deeplink, join the room.
    HomePage.prototype.joinHostGroup = function () {
        if (this.host_uid) {
            alert("Joining group " + this.host_uid);
            this.groupSocketService.userInfo = {
                socketID: "",
                groupUID: this.host_uid,
                username: this.username,
                latitude: this.latitude,
                longitude: this.longitude
            };
            //Join the room specified by the group uid.
            this.groupSocketService.joinGroup();
            this.navCtrl.pop();
        }
    };
    HomePage.prototype.dropMarker = function (title, icon, lat, lng, clickFunction, clickFunctionParams) {
        this.map
            .addMarker({
            title: title,
            icon: icon,
            animation: "DROP",
            position: { lat: lat, lng: lng }
        })
            .then(function (marker) {
            if (clickFunction != undefined)
                marker.on(__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function (res) {
                    clickFunction(clickFunctionParams);
                });
            else
                marker.on(__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function (res) {
                    alert("clicked on " + res);
                });
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core___["n" /* Component */])({
        selector: "page-home",template:/*ion-inline-start:"C:\Users\Alex\Desktop\Betwixt-1.0\src\pages\home\home.html"*/'<div id="map" class="map-canvas">\n  <img id="profile-icon" [src]="gravatarUrl || \'assets/profile.jpg\'" on-tap="presentProfilePage()" />\n  <button ion-button color="primary" (click)="showCreateSpaceModal()">Create space</button>\n</div>\n'/*ion-inline-end:"C:\Users\Alex\Desktop\Betwixt-1.0\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__app_services_workfrom_workfrom_service__["a" /* WorkfromService */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["a" /* GoogleMaps */],
        __WEBPACK_IMPORTED_MODULE_5__app_services_groupsocket_groupsocket_service__["a" /* GroupSocketService */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkfromService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(59);
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

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__ = __webpack_require__(244);
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
    function SpacePage(viewCtrl, clipboard, params) {
        this.viewCtrl = viewCtrl;
        this.clipboard = clipboard;
        this.uid = params.get('uid');
        this.spaceLink = "betwixt://betwixt.com/?group_uid=" + this.uid;
    }
    SpacePage.prototype.onCopy = function () {
        this.clipboard.copy(this.spaceLink)
            .then(function () { return alert('Your Space Link has been copied to your clipboard!'); });
    };
    SpacePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return SpacePage;
}());
SpacePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core___["n" /* Component */])({
        selector: 'page-space',template:/*ion-inline-start:"C:\Users\Alex\Desktop\Betwixt-1.0\src\pages\space\space.html"*/'<div>\n    <button ion-button icon-only clear large class="close-button" (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n    </button>\n    <div *ngIf="uid" class="flex-center-align">\n        <h1>Your Space Link</h1>\n        <p>{{spaceLink}}</p>\n        <button ion-button icon-left (click)="onCopy()">\n            <ion-icon name="copy"></ion-icon>\n            Copy Space Link\n        </button>\n        <h4>Share the Space Link above with the people you want to meet with!</h4>\n    </div>\n    <div *ngIf="!uid" class="flex-center-align">\n        <h1>Oops! Something bad happened on the server.</h1>\n        <p>It\'s not your fault. Try closing and opening the page again.</p>\n    </div>\n</div>'/*ion-inline-end:"C:\Users\Alex\Desktop\Betwixt-1.0\src\pages\space\space.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__["a" /* Clipboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], SpacePage);

//# sourceMappingURL=space.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(287);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_space_space__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_services_module__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_maps__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_deeplinks__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_clipboard__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_native_storage__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_groupsocket_groupsocket_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_launch_navigator__ = __webpack_require__(281);
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
            __WEBPACK_IMPORTED_MODULE_5__pages_space_space__["a" /* SpacePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */]
        ],
        imports: [
            // Custom
            __WEBPACK_IMPORTED_MODULE_9__services_services_module__["a" /* ServicesModule */],
            // Angular
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */],
            // Ionic
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_space_space__["a" /* SpacePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_deeplinks__["a" /* Deeplinks */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_16__services_groupsocket_groupsocket_service__["a" /* GroupSocketService */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_deeplinks__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(240);
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
    function MyApp(platform, statusBar, splashScreen, deeplinks) {
        var _this = this;
        this.deeplinks = deeplinks;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.deeplinks
                .routeWithNavController(_this.navChild, {
                '/': __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            })
                .subscribe(function (match) {
                alert("Successfully routed " + JSON.stringify(match.$args.group_uid));
            }, function (nomatch) {
                alert("Unmatched Route " + JSON.stringify(nomatch));
            });
        });
    }
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "navChild", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Alex\Desktop\Betwixt-1.0\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Alex\Desktop\Betwixt-1.0\src\app\app.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_deeplinks__["a" /* Deeplinks */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_url_join__ = __webpack_require__(331);
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

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sample_sample_service__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config_module__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__yelp_yelp_service__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__workfrom_workfrom_service__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__groupsocket_groupsocket_service__ = __webpack_require__(133);
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

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(59);
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

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__(58);
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

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YelpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(59);
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

/***/ })

},[282]);
//# sourceMappingURL=main.js.map