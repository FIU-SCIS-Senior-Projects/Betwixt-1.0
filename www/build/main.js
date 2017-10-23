webpackJsonp([1],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_workfrom_workfrom_service__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_onwater_onwater_service__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__space_space__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_services_groupsocket_groupsocket_service__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_geolib__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_geolib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_geolib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_gravatar__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_gravatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_gravatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_launch_navigator__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__location_location__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













// TODO: remove random coordinates
var RANDOM_GEOCOORDINATES = [
    { latitude: 25.992046, longitude: -80.283645 },
    { latitude: 25.942871, longitude: -180.12338 },
];
var HomePage = (function () {
    function HomePage(platform, modalCtrl, workfromService, onWaterService, googleMaps, groupSocketService, nativeStorage, navParams, navCtrl, events, launchNavigator) {
        var _this = this;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.workfromService = workfromService;
        this.onWaterService = onWaterService;
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
        this.isOnWater = false;
        events.subscribe('profile:saved', function (profile) {
            _this.nativeStorage.setItem('email', profile.email);
            _this.nativeStorage.setItem('firstName', profile.firstName);
            _this.nativeStorage.setItem('lastName', profile.lastName);
            _this.gravatarUrl = __WEBPACK_IMPORTED_MODULE_10_gravatar___default.a.url(profile.email, { s: '100', d: 'mm' }, true);
            _this.nativeStorage.setItem('gravatarUrl', _this.gravatarUrl);
        });
    }
    HomePage.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log('Ion view loaded.');
        this.platform
            .ready()
            .then(function () { return _this.initialSetup(); })
            .then(function () {
            alert('platform ready...');
            _this.host_uid = _this.navParams.get('group_uid');
            alert("got host uid " + _this.host_uid);
            _this.selectedLocation = _this.navParams.get('selectedLocation');
            alert("got selectedLocation " + _this.selectedLocation);
            _this.joinHostGroup();
            _this.selectLocation();
            // this.locations = [{
            //   title: 'Starbucks',
            //   description: 'A cool please to study. A cool please to study. A cool please to study. A cool please to study.',
            //   type: 'free',
            //   distance: 12,
            //   no_wifi: 1
            // },
            // {
            //   title: 'Starbucks',
            //   description: 'A cool please to study. A cool please to study. A cool please to study. A cool please to study.',
            //   type: 'commercial',
            //   distance: 5,
            //   no_wifi: 0
            // }]
            return _this.getCurrentPosition();
        })
            .then(function (currentPosition) { return _this.loadMap(currentPosition); })
            .then(function (currentPosition) { return _this.getCentralPosition(currentPosition); })
            .then(function (centralPosition) { return _this.getWorkfromLocations(centralPosition); })
            .catch(function (error) { return alert("An error has occured:\n " + error); });
    };
    HomePage.prototype.initialSetup = function () {
        var _this = this;
        this.nativeStorage.getItem('gravatarUrl').then(function (url) {
            _this.gravatarUrl = url;
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.presentProfilePage = function () {
        var profileData = this.getProfileData('email', 'firstName', 'lastName');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__profile_profile__["a" /* ProfilePage */], { profileData: profileData });
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
                profileData[key] = '';
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
            _this.dropMarker('Current Location', 'green', latitude, longitude, false);
            RANDOM_GEOCOORDINATES.forEach(function (position, index) {
                var latitude = position.latitude, longitude = position.longitude;
                _this.dropMarker("Location " + (index + 1), 'blue', latitude, longitude, false);
            });
            _this.groupSocketService.userInfoSubject.subscribe(function (userInfo) {
                console.log("Marker dropped for user: " + userInfo.username);
                _this.dropMarker(userInfo.username, 'blue', userInfo.latitude, userInfo.longitude, false);
            });
            _this.groupSocketService.locationSubject.subscribe(function (selectedLocation) {
                console.log("Marker dropped for selected location " + JSON.stringify(selectedLocation));
                _this.dropMarker(selectedLocation.title, 'red', selectedLocation.latitude, selectedLocation.longitude, _this.launchMapsDirections, {
                    launchNavigator: _this.launchNavigator,
                    currentPosition: currentPosition.coords,
                    selectedPosition: selectedLocation,
                });
                _this.locations = [];
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
    HomePage.prototype.getCentralPosition = function (currentPosition) {
        var _this = this;
        var locations = [currentPosition].concat(RANDOM_GEOCOORDINATES);
        return new Promise(function (resolve) {
            var centralPosition = __WEBPACK_IMPORTED_MODULE_9_geolib___default.a.getCenterOfBounds(locations);
            _this.onWaterService.checkForWater(centralPosition.latitude, centralPosition.longitude).subscribe(function (res) {
                _this.isOnWater = res.json().water;
                if (_this.isOnWater === true) {
                    alert("It seems that the central location is in water! You may move the pin and put it on land.");
                }
                _this.dropMarker("Central Location", "purple", centralPosition.latitude, centralPosition.longitude, _this.isOnWater);
            });
            return resolve(centralPosition);
        });
    };
    HomePage.prototype.getWorkfromLocations = function (centralPosition) {
        var _this = this;
        var latitude = centralPosition.latitude === undefined ? centralPosition.lat : centralPosition.latitude;
        var longitude = centralPosition.longitude === undefined ? centralPosition.lng : centralPosition.longitude;
        // TODO: we need to expand the radius or have some option for the user to expand it
        this.workfromService
            .getPlaces(latitude, longitude, { radius: 20 })
            .subscribe(function (res) {
            var locations = res.json();
            if (locations.length > 0) {
                _this.locations = locations;
            }
            else {
                alert("There aren't any Workfrom locations... We might need to search on Yelp then!");
            }
        });
    };
    HomePage.prototype.launchMapsDirections = function (params) {
        // TODO: we need our own confirmation dialog because the title
        // of this is index.html and we dont want the user to see that
        if (confirm("Would you like directions to " + params.selectedPosition.title + "?")) {
            var launchNavigator_1 = params.launchNavigator;
            launchNavigator_1
                .isAppAvailable(launchNavigator_1.APP.GOOGLE_MAPS)
                .then(function (available) {
                var app;
                if (available)
                    app = launchNavigator_1.APP.GOOGLE_MAPS;
                else
                    app = launchNavigator_1.APP.USER_SELECT;
                launchNavigator_1
                    .navigate([
                    params.selectedPosition.latitude,
                    params.selectedPosition.longitude,
                ], {
                    app: app,
                    start: [
                        params.currentPosition.latitude,
                        params.currentPosition.longitude,
                    ],
                })
                    .then(function (success) { return alert('Map launching...'); }, function (error) { return alert('Maps application failed to open!'); });
            });
        }
    };
    HomePage.prototype.showCreateSpaceModal = function () {
        var _this = this;
        //On open space modal, subscribe to group uid from server.
        this.groupSocketService.uid.subscribe(
        //User's info object that will be sent to server.
        function (group_uid) {
            _this.groupSocketService.userInfo = {
                socketID: '',
                groupUID: group_uid,
                username: _this.username,
                latitude: _this.latitude,
                longitude: _this.longitude,
            };
            console.log(group_uid);
            //Join the room specified by the group uid.
            _this.groupSocketService.joinGroup();
            //Create modal.
            var spaceModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__space_space__["a" /* SpacePage */], {
                uid: group_uid,
            });
            spaceModal.present();
            spaceModal.onDidDismiss(function (data) {
                _this.groupSocketService.userInfos = [];
            });
        }, function (error) {
            //Create modal.
            var spaceModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__space_space__["a" /* SpacePage */], {
                uid: '',
            });
            spaceModal.present();
            spaceModal.onDidDismiss(function (data) {
                _this.groupSocketService.userInfos = [];
            });
        });
    };
    HomePage.prototype.showLocationsModal = function () {
        this.modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_12__location_location__["a" /* LocationPage */], {
            locations: this.locations,
            group_uid: this.groupSocketService.userInfo.groupUID,
        })
            .present();
    };
    HomePage.prototype.selectLocation = function () {
        if (this.selectedLocation && this.groupSocketService.userInfo.groupUID) {
            alert("Got selected location! " + JSON.stringify(this.selectedLocation));
            this.groupSocketService.selectedLocation = {
                socketId: '',
                groupUID: this.groupSocketService.userInfo.groupUID,
                latitude: this.selectedLocation.latitude,
                longitude: this.selectedLocation.longitude,
                title: this.selectedLocation.title,
            };
            this.groupSocketService.selectLocation();
            this.navCtrl.pop();
        }
    };
    //If routed from the deeplink, join the room.
    HomePage.prototype.joinHostGroup = function () {
        // when there is a selected location, then that means that we have already joined a group
        // const isJoinedGroup = this.groupSocketService.socket.sockets.adapter.sids[this.groupSocketService.userInfo.socketID][this.groupSocketService.uid];
        if (this.host_uid && this.selectedLocation === undefined) {
            alert("Joining group " + this.host_uid);
            this.groupSocketService.userInfo = {
                socketID: '',
                groupUID: this.host_uid,
                username: this.username,
                latitude: this.latitude,
                longitude: this.longitude,
            };
            //Join the room specified by the group uid.
            this.groupSocketService.joinGroup();
            this.navCtrl.pop();
        }
    };
    HomePage.prototype.dropMarker = function (title, icon, lat, lng, draggable, clickFunction, clickFunctionParams) {
        var _this = this;
        this.map
            .addMarker({
            title: title,
            icon: icon,
            animation: "DROP",
            draggable: draggable,
            position: { lat: lat, lng: lng }
        })
            .then(function (marker) {
            if (clickFunction !== undefined) {
                marker.on(__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function (res) {
                    clickFunction(clickFunctionParams);
                });
            }
            else
                marker.on(__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function (res) {
                    alert("clicked on " + res);
                });
            if (draggable) {
                marker.on(__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_DRAG_END).subscribe(function (res) {
                    _this.getWorkfromLocations(res[0]);
                });
            }
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core___["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/danielraad/projects/Betwixt-1.0/src/pages/home/home.html"*/'<div id="map" class="map-canvas">\n  <img id="profile-icon" [src]="gravatarUrl || \'assets/profile.jpg\'" on-tap="presentProfilePage()" />\n  <div class="button-group">\n    <div *ngIf="locations?.length > 0 && groupSocketService.userInfo.groupUID" class="location-button">\n      <button ion-button color="light" round (click)="showLocationsModal()">Select A Location!</button>\n    </div>\n    <!-- TODO: if user is in a space, the button should change to \'Leave space\' -->\n    <button ion-button color="primary" (click)="showCreateSpaceModal()">Create space</button>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/danielraad/projects/Betwixt-1.0/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__app_services_workfrom_workfrom_service__["a" /* WorkfromService */],
        __WEBPACK_IMPORTED_MODULE_4__app_services_onwater_onwater_service__["a" /* OnWaterService */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["a" /* GoogleMaps */],
        __WEBPACK_IMPORTED_MODULE_6__app_services_groupsocket_groupsocket_service__["a" /* GroupSocketService */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_subject__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_config_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(358);
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
        this.locationSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_subject__["Subject"]();
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
        this.socket.on('getSelectedLocation', function (res) {
            alert('Selected Location Received\n' + JSON.stringify(res));
            _this.socket.emit('sendSelectedLocation', {
                socketId: res.socketId,
                selectedLocation: _this.selectedLocation,
            });
            _this.locationSubject.next(res);
        });
        this.socket.on('getExistingSelectedLocation', function (res) {
            alert('Existing Selected Location Received\n' + JSON.stringify(res));
            _this.locationSubject.next(res);
        });
    }
    GroupSocketService.prototype.joinGroup = function () {
        alert("Socket is: " + this.socket.connected);
        //Add the unique socket id on join group.
        this.userInfo.socketID = this.socket.io.engine.id;
        this.socket.emit('joinGroup', this.userInfo);
        alert("Should have joined group with uid: " + this.userInfo.groupUID);
    };
    GroupSocketService.prototype.selectLocation = function () {
        alert("Socket is: " + this.socket.connected);
        //Add the unique socket id on join group.
        this.selectedLocation.socketId = this.socket.io.engine.id;
        this.socket.emit('selectLocation', this.selectedLocation);
        alert("Should have selected location with " + JSON.stringify(this.selectedLocation));
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

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
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
        selector: 'page-profile',template:/*ion-inline-start:"/Users/danielraad/projects/Betwixt-1.0/src/pages/profile/profile.html"*/'<ion-header>\n        <ion-navbar>\n            <button ion-button menuToggle>\n              <ion-icon name="menu"></ion-icon>\n            </button>\n            <ion-title>Profile</ion-title>\n          </ion-navbar>\n    </ion-header>\n    <ion-content>\n        <div class="flex-center-align">\n            <form>\n                <ion-item>\n                    <ion-label stacked>Email Address</ion-label>\n                    <ion-input name="email" [(ngModel)]="profile.email" type="text"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>First Name</ion-label>\n                    <ion-input name="First Name" [(ngModel)]="profile.firstName" type="text"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>Last Name</ion-label>\n                    <ion-input name="Last Name" [(ngModel)]="profile.lastName" type="text"></ion-input>\n                </ion-item>\n            </form>\n        </div>\n    </ion-content>\n'/*ion-inline-end:"/Users/danielraad/projects/Betwixt-1.0/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 153:
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
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/profile/profile.module": [
		635,
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
webpackAsyncContext.id = 196;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkfromService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(48);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
    WorkfromService.prototype.getPlaces = function (latitude, longitude, options) {
        var params = __assign({ latitude: latitude,
            longitude: longitude }, options);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnWaterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OnWaterService = (function () {
    function OnWaterService(http, configService) {
        this.http = http;
        this.configService = configService;
    }
    Object.defineProperty(OnWaterService.prototype, "onWater", {
        get: function () {
            return this.configService.onWater;
        },
        enumerable: true,
        configurable: true
    });
    OnWaterService.prototype.checkForWater = function (latitude, longitude, options) {
        var onWaterUrl = "" + this.onWater + latitude + "," + longitude;
        return this.http.get(onWaterUrl);
    };
    return OnWaterService;
}());
OnWaterService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1__config_config_service__["a" /* ConfigService */]])
], OnWaterService);

//# sourceMappingURL=onwater.service.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__ = __webpack_require__(245);
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
        selector: 'page-space',template:/*ion-inline-start:"/Users/danielraad/projects/Betwixt-1.0/src/pages/space/space.html"*/'<div>\n    <button ion-button icon-only clear large class="close-button" (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n    </button>\n    <div *ngIf="uid" class="flex-center-align">\n        <h1>Your Space Link</h1>\n        <p>{{spaceLink}}</p>\n        <button ion-button icon-left (click)="onCopy()">\n            <ion-icon name="copy"></ion-icon>\n            Copy Space Link\n        </button>\n        <h4>Share the Space Link above with the people you want to meet with!</h4>\n    </div>\n    <div *ngIf="!uid" class="flex-center-align">\n        <h1>Oops! Something bad happened on the server.</h1>\n        <p>It\'s not your fault. Try closing and opening the page again.</p>\n    </div>\n</div>'/*ion-inline-end:"/Users/danielraad/projects/Betwixt-1.0/src/pages/space/space.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__["a" /* Clipboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], SpacePage);

//# sourceMappingURL=space.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationPage = (function () {
    function LocationPage(viewCtrl, params, navCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.locations = params.get('locations');
        this.group_uid = params.get('group_uid');
    }
    LocationPage.prototype.selectLocation = function (latitude, longitude, title) {
        console.log('selected location!', latitude, longitude);
        console.log('group_uid', this.group_uid);
        this.dismiss();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {
            selectedLocation: { latitude: latitude, longitude: longitude, title: title },
            group_uid: this.group_uid,
        });
    };
    LocationPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return LocationPage;
}());
LocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core___["n" /* Component */])({
        selector: 'page-location',template:/*ion-inline-start:"/Users/danielraad/projects/Betwixt-1.0/src/pages/location/location.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Select A Location</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content *ngIf="locations">\n  <ion-card *ngFor="let location of locations">\n    <img *ngIf="location?.full_img" src="location?.full_img"/>\n    <ion-card-content>\n      <ion-card-title class="flex-center">\n        {{ location?.title }}\n        <ion-badge color="secondary" class="badge-title">{{ location?.type }}</ion-badge>\n      </ion-card-title>\n      <div *ngIf="location?.no_wifi > 0" class="no-wifi">\n        <ion-badge color="danger">No WiFi</ion-badge>\n      </div>\n      <p>{{ location?.description }}</p>\n      <br/>\n      <p>{{ location?.distance }} miles away from central location!</p>\n    </ion-card-content>\n    <ion-row no-padding>\n      <ion-col text-left>\n        <button ion-button clear icon-start (click)="selectLocation(location?.latitude, location?.longitude, location?.title)">\n          <ion-icon name="checkmark"></ion-icon>\n          Select\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear icon-start>\n          <ion-icon name="more"></ion-icon>\n          More Info\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/danielraad/projects/Betwixt-1.0/src/pages/location/location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], LocationPage);

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(289);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_space_space__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_services_module__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_maps__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_deeplinks__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_clipboard__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_native_storage__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_groupsocket_groupsocket_service__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_launch_navigator__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_location_location__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var components = [
    __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
    __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
    __WEBPACK_IMPORTED_MODULE_5__pages_space_space__["a" /* SpacePage */],
    __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */],
    __WEBPACK_IMPORTED_MODULE_18__pages_location_location__["a" /* LocationPage */],
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: components,
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
        entryComponents: components,
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

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_deeplinks__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(133);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/danielraad/projects/Betwixt-1.0/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/danielraad/projects/Betwixt-1.0/src/app/app.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_deeplinks__["a" /* Deeplinks */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 354:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_url_join__ = __webpack_require__(333);
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
// const SERVER_URL = 'http://localhost:8080';
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
    Object.defineProperty(ConfigService.prototype, "onWater", {
        get: function () {
            return 'https://api.onwater.io/api/v1/results/';
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

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sample_sample_service__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config_module__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__yelp_yelp_service__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__workfrom_workfrom_service__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__groupsocket_groupsocket_service__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__onwater_onwater_service__ = __webpack_require__(243);
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
    __WEBPACK_IMPORTED_MODULE_6__onwater_onwater_service__["a" /* OnWaterService */],
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

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(48);
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

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__(47);
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

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YelpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(48);
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

},[284]);
//# sourceMappingURL=main.js.map