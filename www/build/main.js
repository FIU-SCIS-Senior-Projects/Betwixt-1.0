webpackJsonp([1],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
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
        console.log('Profile Settings', this.profile);
    }
    ProfilePage.prototype.onSave = function () {
        this.events.publish('profile:saved', this.profile);
        this.navCtrl.pop();
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"/Users/danielraad/projects/Betwixt-1.0/src/pages/profile/profile.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Edit Profile</ion-title>\n        <ion-buttons end>\n            <button ion-button (click)="onSave()">Save</button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <form>\n        <ion-list>\n            <ion-item>\n                <ion-label floating>Email Address</ion-label>\n                <ion-input name="email" [(ngModel)]="profile.email" type="text"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>First Name</ion-label>\n                <ion-input name="firstName" [(ngModel)]="profile.firstName" type="text"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Last Name</ion-label>\n                <ion-input name="lastName" [(ngModel)]="profile.lastName" type="text"></ion-input>\n            </ion-item>\n            <p class="info-text">The new email address and name that you set will be updated here; however, it won\'t be reflected on your pin until the next time you restart the app.</p>\n            <br/>\n            <ion-list-header>Space Preferences</ion-list-header>\n            <ion-item>\n                <ion-label>Has WiFi</ion-label>\n                <ion-toggle name="hasWifi" [(ngModel)]="profile.hasWifi"></ion-toggle>\n            </ion-item>\n            <ion-item>\n                <ion-label>Has Local Deals</ion-label>\n                <ion-toggle name="hasLocalDeals" [(ngModel)]="profile.hasLocalDeals"></ion-toggle>\n            </ion-item>\n            <p class="info-text">We will still search the preferences that you have not selected; however, the one\'s that you have selected will be the first places you see!</p>\n        </ion-list>\n    </form>\n</ion-content>\n'/*ion-inline-end:"/Users/danielraad/projects/Betwixt-1.0/src/pages/profile/profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
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
		638,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_workfrom_workfrom_service__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_onwater_onwater_service__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__space_space__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_services_groupsocket_groupsocket_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_geolib__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_geolib___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_geolib__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_gravatar__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_gravatar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_gravatar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_launch_navigator__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__location_location__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__preferences_preferences__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// import geolib from 'geolib';




//import { GroupTestService } from '../../app/services/grouptest/grouptest.service';


var IMAGE_SIZE = {
    width: 28,
    height: 28,
};
// TODO: Remove random coordinates
// gonna leave them here for now to use this for testing
// const RANDOM_GEOCOORDINATES: Coordinates[] = [
//   { latitude: 25.992046, longitude: -80.283645 }, // Pembroke Pines
//   { latitude: 25.942871, longitude: -80.12338 }, // Sunny Isles
//   // { latitude: 38.5678818, longitude: -121.4636956 }, // East Sacramento
//   // { latitude: 37.2972316, longitude: -122.0976092 }, // San Jose
// ];
var CENTRAL_LOCATION = 'Central Location';
var CURRENT_LOCATION = 'Current Location';
var HomePage = (function () {
    function HomePage(platform, modalCtrl, workfromService, onWaterService, googleMaps, groupSocketService, 
        //public groupTestService: GroupTestService,
        nativeStorage, navCtrl, events, alertCtrl, launchNavigator) {
        var _this = this;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.workfromService = workfromService;
        this.onWaterService = onWaterService;
        this.googleMaps = googleMaps;
        this.groupSocketService = groupSocketService;
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.launchNavigator = launchNavigator;
        this.isSpaceCreated = false;
        this.isUserJoined = false;
        this.isOnWater = false;
        this.isInGroup = false;
        this.droppedMarkers = [];
        this.userMarkerUID = this.generateMarkerUID();
        this.username = {
            firstName: 'Betwixt',
            lastName: 'Space',
        };
        this.gravatarUrl = 'assets/profile.jpg';
        events.subscribe('profile:saved', function (profile) {
            _this.nativeStorage.setItem('email', profile.email);
            _this.nativeStorage.setItem('firstName', profile.firstName);
            _this.nativeStorage.setItem('lastName', profile.lastName);
            _this.nativeStorage.setItem('hasWifi', profile.hasWifi);
            _this.nativeStorage.setItem('hasLocalDeals', profile.hasLocalDeals);
            _this.gravatarUrl = __WEBPACK_IMPORTED_MODULE_10_gravatar___default.a.url(profile.email, { s: '100', d: 'mm' }, true);
            _this.nativeStorage.setItem('gravatarUrl', _this.gravatarUrl);
            console.log("profile:saved " + JSON.stringify(profile));
        });
        this.platform
            .ready()
            .then(function () { return _this.initialSetup(); })
            .then(function () { return _this.getCurrentPosition(); })
            .then(function (currentPosition) { return _this.joinGroupIfDeeplinked(currentPosition); })
            .then(function (currentPosition) { return _this.loadMap(currentPosition); })
            .catch(function (error) { return alert("An error has occured:\n " + error); });
    }
    HomePage.prototype.initialSetup = function () {
        var _this = this;
        this.nativeStorage.getItem('firstName').then(function (firstName) {
            _this.username.firstName = firstName;
            console.log("set username " + _this.username.firstName);
        }, function (error) {
            _this.username.firstName = 'Betwixt';
            console.log("error username " + _this.username.firstName + " " + error);
        });
        this.nativeStorage.getItem('lastName').then(function (lastName) {
            _this.username.lastName = lastName;
            console.log("set username " + _this.username.lastName);
        }, function (error) {
            _this.username.lastName = 'Space';
            console.log("error username " + _this.username.lastName + " " + error);
        });
        this.nativeStorage.getItem('gravatarUrl').then(function (url) {
            _this.gravatarUrl = url;
            console.log("set gravatarUrl " + _this.gravatarUrl);
        }, function (error) {
            _this.gravatarUrl = 'assets/profile.jpg';
            console.log("error gravatarUrl " + _this.gravatarUrl + " " + error);
        });
    };
    HomePage.prototype.presentProfilePage = function () {
        var profileData = this.getProfileData('email', 'firstName', 'lastName', 'hasWifi', 'hasLocalDeals');
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
            _this.nativeStorage.getItem(key).then(function (value) { return (profileData[key] = value); }, function (error) {
                console.log('Error getting storage item', error);
                profileData[key] = '';
            });
        });
        return profileData;
    };
    //Joins group if deeplinked.
    HomePage.prototype.joinGroupIfDeeplinked = function (currentPosition) {
        var _this = this;
        //Subscribe to event and get Replay Subject
        this.events.subscribe('group:join', function (deeplinkGroupSubject) {
            //Subscribe to Replay Subject and get the group uid
            deeplinkGroupSubject.subscribe(function (uid) {
                //Join the host group.
                _this.joinHostGroup(currentPosition, uid);
            });
        });
        //Home Page is ready to receive group uid.
        this.events.publish('deeplink:listening');
        return currentPosition;
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
            var currentUserImage = {
                url: _this.gravatarUrl,
                size: IMAGE_SIZE,
            };
            _this.dropMarker(CURRENT_LOCATION, _this.userMarkerUID, currentUserImage, latitude, longitude, false);
            //Share observable between multiple subscribers.
            var userInfoSubject = _this.groupSocketService.userInfoSubject;
            //Drop marker.
            userInfoSubject.subscribe(function (userInfo) {
                console.log("Marker dropped for user: " + userInfo.username);
                _this.dropMarker(userInfo.username, userInfo.markerUID, {
                    url: userInfo.imageUrl,
                    size: IMAGE_SIZE,
                }, userInfo.latitude, userInfo.longitude, false);
            });
            //Adjust central location. Multiple instantaneous requests are ignored so just 1 is done every 1 second.
            userInfoSubject.debounce(function () { return __WEBPACK_IMPORTED_MODULE_15_rxjs_Observable__["Observable"].timer(1000); }).subscribe(function () {
                _this.isUserJoined = true;
                _this.adjustCentralLocation({
                    latitude: latitude,
                    longitude: longitude,
                });
            });
            //Share observable among subscribers.
            var userLeftObservable = _this.groupSocketService.userLeftObservable.share();
            //Remove pin of person who has left the group.
            userLeftObservable.subscribe(function (userInfo) {
                if (userInfo) {
                    var userMarker = _this.droppedMarkers.find(function (dm) { return dm.markerUID === userInfo.markerUID; });
                    userMarker.marker.remove();
                    __WEBPACK_IMPORTED_MODULE_14_lodash__["pull"](_this.droppedMarkers, userMarker);
                    alert(userInfo.username + " has left the space.");
                }
                // if there aren't any more users in the list
                if (_this.groupSocketService.joinedUsers.length === 0) {
                    // remove ability to select a location
                    _this.isUserJoined = false;
                }
            });
            //Adjust central location on removal of user.
            userLeftObservable.subscribe(function () {
                if (_this.groupSocketService.joinedUsers.length > 0) {
                    _this.adjustCentralLocation({ latitude: latitude, longitude: longitude });
                }
                else {
                    // remove central location marker
                    var centralLocationMarker = _this.droppedMarkers.find(function (x) { return x.title === CENTRAL_LOCATION; });
                    centralLocationMarker.marker.remove();
                    __WEBPACK_IMPORTED_MODULE_14_lodash__["pull"](_this.droppedMarkers, centralLocationMarker);
                }
            });
            //Remove pin of selected location to users
            _this.groupSocketService.locationRemovedObservable.subscribe(function (selectedLocation) {
                if (selectedLocation) {
                    var locationMarker = _this.droppedMarkers.find(function (dm) { return dm.title === _this.selectedLocation.title; });
                    locationMarker.marker.remove();
                    __WEBPACK_IMPORTED_MODULE_14_lodash__["pull"](_this.droppedMarkers, locationMarker);
                    alert(selectedLocation.title + " has been removed as the meeting location.");
                }
            });
            _this.groupSocketService.locationSubject.subscribe(function (selectedLocation) {
                console.log("Marker dropped for selected location " + JSON.stringify(selectedLocation));
                _this.selectedLocation = selectedLocation;
                _this.dropMarker(selectedLocation.title, _this.generateMarkerUID(), 'red', selectedLocation.latitude, selectedLocation.longitude, false, _this.launchMapsDirections, {
                    createNavigatorAlert: true,
                    launchNavigator: _this.launchNavigator,
                    currentPosition: currentPosition.coords,
                    selectedLocation: selectedLocation,
                });
                alert(selectedLocation.title + " has been selected as the meeting location!");
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
            //LOCATION IN PEMBROKE PINES USED FOR TESTING.
            //return resolve({
            // coords: { latitude: 25.992046, longitude: -80.383645 },
            //});
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
    };
    HomePage.prototype.adjustCentralLocation = function (currentPosition) {
        var _this = this;
        //Find old central location marker.
        var centralLocationMarker = this.droppedMarkers.find(function (x) { return x.title === CENTRAL_LOCATION; });
        //Remove old central location marker.
        if (centralLocationMarker) {
            centralLocationMarker.marker.remove();
            __WEBPACK_IMPORTED_MODULE_14_lodash__["pull"](this.droppedMarkers, centralLocationMarker);
        }
        //Share central position observable that calculates central position among users.
        var centralPosObservable = this.getCentralPosition(currentPosition).share();
        centralPosObservable.subscribe(function (centralPosition) {
            return _this.getWorkfromLocations(centralPosition);
        });
        centralPosObservable.subscribe(function (centralPosition) {
            return _this.checkIfPositionOnWater(centralPosition);
        });
    };
    HomePage.prototype.getCentralPosition = function (currentPosition) {
        var _this = this;
        //Array of user locations.
        var userLocations = this.groupSocketService.joinedUsers.map(function (_a) {
            var latitude = _a.latitude, longitude = _a.longitude;
            return ({ latitude: latitude, longitude: longitude });
        });
        var locations = [currentPosition].concat(userLocations);
        console.log("" + JSON.stringify(locations));
        return new __WEBPACK_IMPORTED_MODULE_15_rxjs_Observable__["Observable"](function (observer) {
            var centralPosition = __WEBPACK_IMPORTED_MODULE_9_geolib___default.a.getCenterOfBounds(locations);
            _this.dropMarker(CENTRAL_LOCATION, _this.generateMarkerUID(), 'purple', centralPosition.latitude, centralPosition.longitude, _this.isOnWater);
            observer.next(centralPosition);
        });
    };
    HomePage.prototype.checkIfPositionOnWater = function (centralPosition) {
        var _this = this;
        this.onWaterService
            .checkForWater(centralPosition.latitude, centralPosition.longitude)
            .subscribe(function (res) {
            _this.isOnWater = res.json().water;
            if (_this.isOnWater === true) {
                alert('It looks like the central location is on water! You have the chance to move the pin and put it on land.');
            }
        });
    };
    HomePage.prototype.getWorkfromLocations = function (centralPosition) {
        var _this = this;
        var latitude = centralPosition.latitude === undefined
            ? centralPosition.lat
            : centralPosition.latitude;
        var longitude = centralPosition.longitude === undefined
            ? centralPosition.lng
            : centralPosition.longitude;
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
    //Alert control for map navigation must be created before clickFunction because of scoping issues.
    HomePage.prototype.prepareAlertCtrl = function (launchNav, currentPosition, selectedLocation) {
        var alertCtrl = this.alertCtrl.create({
            title: 'Betwixt',
            message: "Would you like directions to " + selectedLocation.title + "?",
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    },
                },
                {
                    text: 'Yes',
                    handler: function () {
                        var launchNavigator = launchNav;
                        launchNavigator
                            .isAppAvailable(launchNavigator.APP.GOOGLE_MAPS)
                            .then(function (available) {
                            var app;
                            if (available)
                                app = launchNavigator.APP.GOOGLE_MAPS;
                            else
                                app = launchNavigator.APP.USER_SELECT;
                            launchNavigator.navigate([selectedLocation.latitude, selectedLocation.longitude], {
                                app: app,
                                start: [
                                    currentPosition.latitude,
                                    currentPosition.longitude,
                                ],
                            });
                        });
                    },
                },
            ],
        });
        return alertCtrl;
    };
    //Presents the redirect to navigator modal.
    HomePage.prototype.launchMapsDirections = function (params) {
        params.alertCtrl.present();
    };
    HomePage.prototype.showCreateSpaceModal = function () {
        var _this = this;
        var defaultPreferences = this.getProfileData('hasWifi', 'hasLocalDeals');
        console.log("defaultPreferences " + JSON.stringify(defaultPreferences));
        var preferencesModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__preferences_preferences__["a" /* PreferencesPage */], {
            defaultPreferences: defaultPreferences,
        });
        preferencesModal.present();
        preferencesModal.onDidDismiss(function (preferences) {
            //If the next button was clicked, preferences were passed.
            console.log("preferences " + JSON.stringify(preferences));
            if (preferences) {
                _this.spacePreferences = preferences;
                //On open space modal, subscribe to group uid from server.
                _this.groupSocketService.uid.subscribe(
                //User's info object that will be sent to server.
                function (group_uid) {
                    console.log("group_uid " + JSON.stringify(group_uid));
                    _this.groupSocketService.userInfo = {
                        socketID: '',
                        groupUID: group_uid,
                        markerUID: _this.userMarkerUID,
                        imageUrl: _this.gravatarUrl,
                        username: _this.username.firstName + " " + _this.username.lastName,
                        latitude: _this.latitude,
                        longitude: _this.longitude,
                    };
                    console.log("this.groupSocketService.userInfo " + JSON.stringify(_this.groupSocketService.userInfo));
                    console.log(group_uid);
                    //Join the room specified by the group uid.
                    _this.groupSocketService.joinGroup();
                    _this.isInGroup = true;
                    //Create modal.
                    var spaceModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__space_space__["a" /* SpacePage */], {
                        uid: group_uid,
                    });
                    spaceModal.present();
                    spaceModal.onDidDismiss(function () { return (_this.isSpaceCreated = true); });
                }, function (error) { return _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__space_space__["a" /* SpacePage */], { uid: '' }).present(); });
            }
        });
    };
    HomePage.prototype.showLocationsModal = function () {
        var _this = this;
        var locationsModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__location_location__["a" /* LocationPage */], {
            locations: this.locations,
            group_uid: this.groupSocketService.userInfo.groupUID,
            preferences: this.spacePreferences,
        });
        locationsModal.present();
        locationsModal.onDidDismiss(function (selectedLocation) {
            if (_this.selectedLocation) {
                _this.groupSocketService.removeSelectedLocation();
                alert("Removing " + _this.selectedLocation
                    .title + " and adding new location to meet up.");
                var locationMarker = _this.droppedMarkers.find(function (dm) { return dm.title === _this.selectedLocation.title; });
                locationMarker.marker.remove();
                __WEBPACK_IMPORTED_MODULE_14_lodash__["pull"](_this.droppedMarkers, locationMarker);
            }
            _this.selectLocation(selectedLocation.groupUID, selectedLocation.latitude, selectedLocation.longitude, selectedLocation.title);
        });
    };
    HomePage.prototype.leaveGroup = function () {
        var _this = this;
        this.alertCtrl
            .create({
            title: 'Leave space',
            message: 'Are you sure to want to leave this space?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel leave space clicked');
                    },
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        _this.groupSocketService.leaveGroup();
                        _this.isInGroup = false;
                        _this.isSpaceCreated = false;
                        _this.selectedLocation = null;
                        _this.droppedMarkers.forEach(function (marker) {
                            if (marker.markerUID !== _this.userMarkerUID)
                                marker.marker.remove();
                        });
                        _this.droppedMarkers = _this.droppedMarkers.filter(function (marker) { return marker.markerUID === _this.userMarkerUID; });
                    },
                },
            ],
        })
            .present();
    };
    HomePage.prototype.selectLocation = function (groupUID, latitude, longitude, title) {
        this.groupSocketService.selectedLocation = {
            socketId: '',
            groupUID: groupUID,
            latitude: latitude,
            longitude: longitude,
            title: title,
        };
        this.groupSocketService.selectLocation();
    };
    //If routed from the deeplink, join the room.
    HomePage.prototype.joinHostGroup = function (currentPosition, groupUID) {
        this.groupSocketService.userInfo = {
            socketID: '',
            groupUID: groupUID,
            markerUID: this.userMarkerUID,
            imageUrl: this.gravatarUrl,
            username: this.username.firstName + " " + this.username.lastName,
            latitude: currentPosition.coords.latitude,
            longitude: currentPosition.coords.longitude,
        };
        //Join the room specified by the group uid.
        this.groupSocketService.joinGroup();
        this.isInGroup = true;
    };
    //Used to generate UIDs for handling marker removals.
    HomePage.prototype.generateMarkerUID = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };
    HomePage.prototype.dropMarker = function (title, markerUID, icon, lat, lng, draggable, clickFunction, clickFunctionParams) {
        var _this = this;
        this.map
            .addMarker({
            title: title,
            icon: icon,
            animation: 'DROP',
            draggable: draggable,
            position: { lat: lat, lng: lng },
        })
            .then(function (marker) {
            _this.droppedMarkers.push({
                title: title,
                markerUID: markerUID,
                marker: marker,
            });
            if (clickFunction !== undefined) {
                if (clickFunctionParams.createNavigatorAlert === true) {
                    marker.on(__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function (res) {
                        var alertCtrl = _this.prepareAlertCtrl(clickFunctionParams.launchNavigator, clickFunctionParams.currentPosition, clickFunctionParams.selectedLocation);
                        clickFunction({ alertCtrl: alertCtrl });
                    });
                }
                else
                    marker.on(__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function (res) {
                        clickFunction(clickFunctionParams);
                    });
            }
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
        selector: 'page-home',template:/*ion-inline-start:"/Users/danielraad/projects/Betwixt-1.0/src/pages/home/home.html"*/'<div id="map" class="map-canvas">\n  <img id="profile-icon" [src]="gravatarUrl" on-tap="presentProfilePage()" />\n  <div class="button-group">\n     <!--REMOVE THIS BUTTON AND GROUP TEST SERVICE FOR PRODUCTION-->\n     <!--<button ion-button color="secondary" round (click)="groupTestService.generateRandomGeoUser(latitude, longitude, groupSocketService.userInfo.groupUID, generateMarkerUID())">Generate user</button>-->\n    <div *ngIf="isSpaceCreated && isUserJoined" class="location-button">\n      <button ion-button color="light" round (click)="showLocationsModal()">Select A Location!</button>\n    </div>\n    <div class="space-button">\n      <button *ngIf="!isInGroup" ion-button color="primary" (click)="showCreateSpaceModal()">\n        Create space\n      </button>\n\n      <button *ngIf="isInGroup" ion-button color="primary" (click)="leaveGroup()">\n        Leave space\n      </button>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"/Users/danielraad/projects/Betwixt-1.0/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__app_services_workfrom_workfrom_service__["a" /* WorkfromService */],
        __WEBPACK_IMPORTED_MODULE_4__app_services_onwater_onwater_service__["a" /* OnWaterService */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_maps__["a" /* GoogleMaps */],
        __WEBPACK_IMPORTED_MODULE_6__app_services_groupsocket_groupsocket_service__["a" /* GroupSocketService */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_launch_navigator__["a" /* LaunchNavigator */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkfromService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
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
    function SpacePage(viewCtrl, clipboard, platform, params) {
        this.viewCtrl = viewCtrl;
        this.clipboard = clipboard;
        this.platform = platform;
        this.uid = params.get('uid');
        this.spaceLink = "https://betwixt.space/?group_uid=" + this.uid;
    }
    SpacePage.prototype.onCopy = function () {
        this.clipboard
            .copy(this.spaceLink)
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__["a" /* Clipboard */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], SpacePage);

//# sourceMappingURL=space.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
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
        this.preferences = params.get('preferences');
        this.sortByPreference();
    }
    LocationPage.prototype.selectLocation = function (latitude, longitude, title) {
        console.log('selected location!', latitude, longitude);
        console.log('group_uid', this.group_uid);
        this.viewCtrl.dismiss({ latitude: latitude, longitude: longitude, title: title, groupUID: this.group_uid });
    };
    LocationPage.prototype.sortByPreference = function () {
        if (this.locations)
            this.locations.sort(this.preferenceCompare(this.preferences));
    };
    //Comparison function passed into sort.
    LocationPage.prototype.preferenceCompare = function (preferences) {
        return function (a, b) {
            //Amount of preferences a and b match.
            var aCount = 0;
            var bCount = 0;
            console.log(preferences);
            if (preferences.hasWifi) {
                if (a.no_wifi == '0')
                    aCount++;
                if (b.no_wifi == '0')
                    bCount++;
            }
            if (preferences.hasLocalDeals) {
                if (a.local_deal_flag == '1')
                    aCount++;
                if (b.local_deal_flag == '1')
                    bCount++;
            }
            //If a matches more preferences, put it first.
            if (aCount > bCount)
                return -1;
            //if b matches more preferences, put it first.
            if (bCount > aCount)
                return 1;
            else
                //Have the same preference count so do nothing.
                return 0;
        };
    };
    LocationPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return LocationPage;
}());
LocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core___["n" /* Component */])({
        selector: 'page-location',template:/*ion-inline-start:"/Users/danielraad/projects/Betwixt-1.0/src/pages/location/location.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Select A Location</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content *ngIf="locations">\n  <ion-card *ngFor="let location of locations">\n    <img *ngIf="location?.thumbnail_img" [src]="location?.thumbnail_img" />\n    <ion-card-content>\n      <ion-card-title class="flex-center">\n        {{ location?.title }}\n        <ion-badge color="secondary" class="badge-title">{{ location?.type }}</ion-badge>\n      </ion-card-title>\n      <div *ngIf="location?.no_wifi > 0" class="no-wifi">\n        <ion-badge color="danger">No WiFi</ion-badge>\n      </div>\n      <div *ngIf="location?.local_deal_flag > 0" class="local-deal">\n        <ion-badge color="success">Local deals</ion-badge>\n      </div>\n      <p>{{ location?.description }}</p>\n      <br/>\n      <p>{{ location?.distance }} miles away from central location!</p>\n    </ion-card-content>\n    <ion-row no-padding>\n      <ion-col text-left>\n        <button ion-button clear icon-start (click)="selectLocation(location?.latitude, location?.longitude, location?.title)">\n          <ion-icon name="checkmark"></ion-icon>\n          Select\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear icon-start>\n          <ion-icon name="more"></ion-icon>\n          More Info\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/danielraad/projects/Betwixt-1.0/src/pages/location/location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], LocationPage);

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferencesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreferencesPage = (function () {
    function PreferencesPage(viewCtrl, params) {
        this.viewCtrl = viewCtrl;
        this.preferenceOptions = params.get('defaultPreferences');
    }
    PreferencesPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PreferencesPage.prototype.next = function () {
        this.viewCtrl.dismiss(this.preferenceOptions);
    };
    return PreferencesPage;
}());
PreferencesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core___["n" /* Component */])({
        selector: 'page-preferences',template:/*ion-inline-start:"/Users/danielraad/projects/Betwixt-1.0/src/pages/preferences/preferences.html"*/'<div>\n    <button ion-button icon-only clear large class="icon-button" (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n    </button>\n    <div>\n        <h1 class="text-center">Select Space Preferences</h1>\n        <p>The following preferences are the same as your default preferences; however, you have a chance to update them now for this space!</p>\n        <ion-list>\n            <ion-item>\n                <ion-label>Has WiFi</ion-label>\n                <ion-toggle name="hasWifi" [(ngModel)]="preferenceOptions.hasWifi"></ion-toggle>\n            </ion-item>\n            <ion-item>\n                <ion-label>Has Local Deals</ion-label>\n                <ion-toggle name="hasLocalDeals" [(ngModel)]="preferenceOptions.hasLocalDeals"></ion-toggle>\n            </ion-item>\n        </ion-list>\n        <div class="text-center">\n            <button ion-button icon-end (click)="next()">\n                Next\n                <ion-icon name="arrow-forward"></ion-icon>\n            </button>\n        </div>\n    </div>\n</div>'/*ion-inline-end:"/Users/danielraad/projects/Betwixt-1.0/src/pages/preferences/preferences.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], PreferencesPage);

//# sourceMappingURL=preferences.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(292);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_space_space__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_services_module__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_maps__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_deeplinks__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_clipboard__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_native_storage__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_groupsocket_groupsocket_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_launch_navigator__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_location_location__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_preferences_preferences__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_grouptest_grouptest_service__ = __webpack_require__(636);
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
    __WEBPACK_IMPORTED_MODULE_19__pages_preferences_preferences__["a" /* PreferencesPage */],
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
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
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
            __WEBPACK_IMPORTED_MODULE_20__services_grouptest_grouptest_service__["a" /* GroupTestService */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
        ],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_deeplinks__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_ReplaySubject__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_ReplaySubject__);
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
    function MyApp(platform, statusBar, splashScreen, deeplinks, events) {
        var _this = this;
        this.deeplinks = deeplinks;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.deeplinkGroupSubject = new __WEBPACK_IMPORTED_MODULE_6_rxjs_ReplaySubject__["ReplaySubject"]();
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //Subscribe when the Home Page has published that it is ready to receive the group UID.
            events.subscribe('deeplink:listening', function () {
                //alert('Publishing deeplink group subject');
                //Publish a Replay Subject that will contain the group uid.
                events.publish('group:join', _this.deeplinkGroupSubject);
            });
            _this.deeplinks.route({ '/': 1 }).subscribe(function (match) {
                _this.deeplinkGroupSubject.next(match.$args.group_uid);
            }, function (nomatch) {
                // nomatch.$link - the full link data
                alert("Unmatched Route " + JSON.stringify(nomatch));
            });
        });
    }
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "navChild", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/danielraad/projects/Betwixt-1.0/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/danielraad/projects/Betwixt-1.0/src/app/app.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_deeplinks__["a" /* Deeplinks */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 355:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_url_join__ = __webpack_require__(336);
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
//For browser or iOS testing
// const SERVER_URL = 'http://localhost:8080/';
//For android emulator testing
//const SERVER_URL = "http://10.0.2.2:8080/";
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

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sample_sample_service__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config_module__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__yelp_yelp_service__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__workfrom_workfrom_service__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__groupsocket_groupsocket_service__ = __webpack_require__(79);
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

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
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

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_service__ = __webpack_require__(46);
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

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YelpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_config_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
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

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupTestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__groupsocket_groupsocket_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_generate_random_points__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_generate_random_points___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_generate_random_points__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GroupTestService = (function () {
    function GroupTestService(http, configService) {
        this.http = http;
        this.configService = configService;
    }
    //Create a new instance of the GroupSocketService for testing and have it join the group.
    GroupTestService.prototype.generateRandomGeoUser = function (latitude, longitude, group_uid, markerUID) {
        var groupSocketService = new __WEBPACK_IMPORTED_MODULE_3__groupsocket_groupsocket_service__["a" /* GroupSocketService */](this.http, this.configService);
        //Generate a random point within a 10 mile (16094 meter) radius of the current position.
        var randomPoint = __WEBPACK_IMPORTED_MODULE_4_generate_random_points__["generateRandomPoint"]({ latitude: latitude, longitude: longitude }, 16094);
        //Assign lat, lng, and a random username.
        groupSocketService.userInfo = {
            socketID: '',
            groupUID: group_uid,
            markerUID: markerUID,
            username: "RandomGeoUser" + Math.floor(Math.random() * 100),
            imageUrl: 'http://www.freeiconspng.com/uploads/profile-icon-9.png',
            latitude: randomPoint.latitude,
            longitude: randomPoint.longitude,
        };
        //Join the space.
        groupSocketService.joinGroup();
    };
    return GroupTestService;
}());
GroupTestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config_config_service__["a" /* ConfigService */]])
], GroupTestService);

//# sourceMappingURL=grouptest.service.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupSocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_config_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_ReplaySubject__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_ReplaySubject__);
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
        this.joinedUsers = [];
        this.userInfoSubject = new __WEBPACK_IMPORTED_MODULE_7_rxjs_ReplaySubject__["ReplaySubject"]();
        this.locationSubject = new __WEBPACK_IMPORTED_MODULE_7_rxjs_ReplaySubject__["ReplaySubject"]();
        this.socketIdSubject = new __WEBPACK_IMPORTED_MODULE_7_rxjs_ReplaySubject__["ReplaySubject"]();
        this.socketHost = configService.serverUrl;
        //Initialize userInfos object.
        this.uid = this.getUID;
        this.socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client__(this.socketHost);
        //Add user information when a new user joins.
        this.socket.on('getNewUserInfo', function (res) {
            console.log("Got new user info " + JSON.stringify(res));
            _this.joinedUsers.push(res);
            _this.socket.emit('sendUserInfo', {
                socketID: res.socketID,
                userInfo: _this.userInfo,
            });
            _this.userInfoSubject.next(res);
        });
        this.socket.on('error', function (res) {
            console.log("" + JSON.stringify(res));
        });
        this.socket.on('getExistingUserInfo', function (res) {
            console.log("Got existing user info " + JSON.stringify(res));
            _this.joinedUsers.push(res);
            _this.userInfoSubject.next(res);
        });
        this.socket.on('getSelectedLocation', function (res) {
            _this.socket.emit('sendSelectedLocation', {
                socketId: res.socketId,
                selectedLocation: _this.selectedLocation,
            });
            _this.locationSubject.next(res);
        });
        this.socket.on('getExistingSelectedLocation', function (res) {
            _this.locationSubject.next(res);
        });
        this.userLeftObservable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('getLeavingUserInfo', function (res) {
                __WEBPACK_IMPORTED_MODULE_6_lodash__["pull"](_this.joinedUsers, _this.joinedUsers.find(function (dm) { return dm.markerUID === res.markerUID; }));
                observer.next(res);
            });
        });
        this.locationRemovedObservable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on('removedSelectedLocation', function (res) {
                observer.next(res);
            });
        });
        //Get socket id on connect as observable.
        this.socket.on('connect', function (res) {
            _this.socketIdSubject.next(_this.socket.io.engine.id);
        });
    }
    GroupSocketService.prototype.joinGroup = function () {
        var _this = this;
        //Add the unique socket id on join group.
        this.socketIdSubject.subscribe(function (socketId) {
            _this.userInfo.socketID = socketId;
            console.log("Got socketID: " + _this.userInfo.socketID);
            _this.socket.emit('joinGroup', _this.userInfo);
        });
    };
    GroupSocketService.prototype.leaveGroup = function () {
        var _this = this;
        this.userInfo.socketID = this.socket.io.engine.id;
        this.socket.emit('leaveGroup', this.userInfo);
        //Remove all userInfos from array except for the current user's userInfo.
        this.joinedUsers = this.joinedUsers.filter(function (userInfo) { return userInfo.socketID === _this.userInfo.socketID; });
    };
    GroupSocketService.prototype.selectLocation = function () {
        //Add the unique socket id on join group.
        this.selectedLocation.socketId = this.socket.io.engine.id;
        this.socket.emit('selectLocation', this.selectedLocation);
    };
    GroupSocketService.prototype.removeSelectedLocation = function () {
        //Add the unique socket id on join group.
        this.selectedLocation.socketId = this.socket.io.engine.id;
        this.socket.emit('removeSelectedLocation', this.selectedLocation);
        this.selectedLocation = null;
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__config_config_service__["a" /* ConfigService */]])
], GroupSocketService);

//# sourceMappingURL=groupsocket.service.js.map

/***/ })

},[287]);
//# sourceMappingURL=main.js.map