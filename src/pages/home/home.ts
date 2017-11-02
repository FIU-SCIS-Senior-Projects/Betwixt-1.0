import { Component } from '@angular/core/';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
} from '@ionic-native/google-maps';
import {
  Platform,
  ModalController,
  NavController,
  NavParams,
  Events,
  AlertController,
} from 'ionic-angular';
import { WorkfromService } from '../../app/services/workfrom/workfrom.service';
import { OnWaterService } from '../../app/services/onwater/onwater.service';
import { SpacePage } from '../space/space';
import { GroupSocketService } from '../../app/services/groupsocket/groupsocket.service';
import { ProfilePage, Profile } from '../profile/profile';
import { NativeStorage } from '@ionic-native/native-storage';
import geolib from 'geolib';
import gravatar from 'gravatar';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { LocationPage } from '../location/location';
import { PreferencesPage } from '../preferences/preferences';
import { PreferenceOptions } from '../preferences/preference-options';
import { GroupTestService } from '../../app/services/grouptest/grouptest.service';

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface SelectedLocation {
  title: string;
  latitude: number;
  longitude: number;
}

// TODO: Remove random coordinates
// gonna leave them here for now to use this for testing
// const RANDOM_GEOCOORDINATES: Coordinates[] = [
//   { latitude: 25.992046, longitude: -80.283645 }, // Pembroke Pines
//   { latitude: 25.942871, longitude: -80.12338 }, // Sunny Isles
//   // { latitude: 38.5678818, longitude: -121.4636956 }, // East Sacramento
//   // { latitude: 37.2972316, longitude: -122.0976092 }, // San Jose
// ];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  map: GoogleMap;
  mapElement: HTMLElement;
  gravatarUrl: string;
  selectedLocation: SelectedLocation;
  //For use outisde promise chain.
  latitude: number;
  longitude: number;

  host_uid: string;
  isSpaceCreated: boolean = false;
  spacePreferences: PreferenceOptions;

  //Random username.
  username: string;

  locations;
  // If central location is on water
  isOnWater: boolean;
  isInGroup: boolean;

  constructor(
    public platform: Platform,
    public modalCtrl: ModalController,
    private workfromService: WorkfromService,
    private onWaterService: OnWaterService,
    private googleMaps: GoogleMaps,
    public groupSocketService: GroupSocketService,
    public groupTestService: GroupTestService,
    private nativeStorage: NativeStorage,
    private navParams: NavParams,
    public navCtrl: NavController,
    public events: Events,
    public alertCtrl: AlertController,
    private launchNavigator: LaunchNavigator
  ) {
    //Generate random username and pass to socketservice.
    this.username = `TestUser${Math.floor(Math.random() * 100)}`;
    this.groupSocketService.username = this.username;
    this.isOnWater = false;
    this.isInGroup = false;

    events.subscribe('profile:saved', (profile: Profile) => {
      this.nativeStorage.setItem('email', profile.email);
      this.nativeStorage.setItem('firstName', profile.firstName);
      this.nativeStorage.setItem('lastName', profile.lastName);
      this.nativeStorage.setItem('hasWifi', profile.hasWifi);
      this.nativeStorage.setItem('hasLocalDeals', profile.hasLocalDeals);
      this.gravatarUrl = gravatar.url(
        profile.email,
        { s: '100', d: 'mm' },
        true
      );
      this.nativeStorage.setItem('gravatarUrl', this.gravatarUrl);
    });
  }

  ngAfterViewInit() {
    console.log('Ion view loaded.');
    this.platform
      .ready()
      .then(() => this.initialSetup())
      .then(() => {
        this.host_uid = this.navParams.get('group_uid');
        this.selectedLocation = this.navParams.get('selectedLocation');
        return this.getCurrentPosition().then(currentPosition => {
          this.joinHostGroup(currentPosition);
          this.selectLocation();
          return new Promise(resolve => resolve(currentPosition));
        });
        /*
         this.locations = [{
           title: 'Starbucks',
           description: 'A cool please to study. A cool please to study. A cool please to study. A cool please to study.',
           type: 'free',
           distance: 12,
           no_wifi: 1,
           local_deal_flag: 1
         },
         {
           title: 'Starbucks',
           description: 'A cool please to study. A cool please to study. A cool please to study. A cool please to study.',
           type: 'commercial',
           distance: 5,
           no_wifi: 0,
           local_deal_flag: 0
         }]
         */
      })
      .then(currentPosition => this.loadMap(currentPosition))
      .then(currentPosition => this.getCentralPosition(currentPosition))
      .then(centralPosition => this.getWorkfromLocations(centralPosition))
      .catch(error => alert(`An error has occured:\n ${error}`));
  }

  initialSetup() {
    this.nativeStorage
      .getItem('gravatarUrl')
      .then(url => (this.gravatarUrl = url), error => console.log(error));
  }

  presentProfilePage() {
    const profileData = this.getProfileData(
      'email',
      'firstName',
      'lastName',
      'hasWifi',
      'hasLocalDeals'
    );
    this.navCtrl.push(ProfilePage, { profileData });
  }

  getProfileData(...keys) {
    let profileData = <Profile>{};
    keys.forEach((key, index) => {
      this.nativeStorage.getItem(key).then(
        value => (profileData[key] = value),
        error => {
          console.log('Error getting storage item', error);
          profileData[key] = '';
        }
      );
    });
    return profileData;
  }

  loadMap(currentPosition) {
    const { latitude, longitude } = currentPosition.coords;
    this.latitude = latitude;
    this.longitude = longitude;

    let mapOptions: GoogleMapOptions = {
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
      .one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        this.dropMarker(
          'Current Location',
          'green',
          latitude,
          longitude,
          false
        );

        this.groupSocketService.userInfoSubject.subscribe(userInfo => {
          console.log(`Marker dropped for user: ${userInfo.username}`);
          this.dropMarker(
            userInfo.username,
            'blue',
            userInfo.latitude,
            userInfo.longitude,
            false
          );
        });

        this.groupSocketService.locationSubject.subscribe(selectedLocation => {
          console.log(
            `Marker dropped for selected location ${JSON.stringify(
              selectedLocation
            )}`
          );
          this.dropMarker(
            selectedLocation.title,
            'red',
            selectedLocation.latitude,
            selectedLocation.longitude,
            false,
            this.launchMapsDirections,
            {
              launchNavigator: this.launchNavigator,
              currentPosition: currentPosition.coords,
              selectedPosition: selectedLocation,
            }
          );
          this.locations = [];
          this.isSpaceCreated = false;
        });

        return { latitude, longitude };
      })
      .catch(error => error);
  }

  getCurrentPosition() {
    const options = {
      enableHighAccuracy: true,
    };
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  getCentralPosition(currentPosition: Coordinates) {
    // const locations = [currentPosition, ...RANDOM_GEOCOORDINATES];

    return new Promise(resolve => {
      // const centralPosition = geolib.getCenterOfBounds(locations);

      // TODO: should be dropping the pin on the central location
      // but for now it will just be the current position

      this.onWaterService
        .checkForWater(currentPosition.latitude, currentPosition.longitude)
        .subscribe(res => {
          this.isOnWater = res.json().water;
          if (this.isOnWater === true) {
            alert(
              'It looks like the central location is on water! You have the chance to move the pin and put it on land.'
            );
          }
          this.dropMarker(
            'Central Location',
            'purple',
            currentPosition.latitude,
            currentPosition.longitude,
            this.isOnWater
          );
        });

      return resolve(currentPosition);
    });
  }

  getWorkfromLocations(centralPosition) {
    const latitude =
      centralPosition.latitude === undefined
        ? centralPosition.lat
        : centralPosition.latitude;
    const longitude =
      centralPosition.longitude === undefined
        ? centralPosition.lng
        : centralPosition.longitude;

    // TODO: we need to expand the radius or have some option for the user to expand it
    this.workfromService
      .getPlaces(latitude, longitude, { radius: 20 })
      .subscribe(res => {
        const locations = res.json();

        if (locations.length > 0) {
          this.locations = locations;
        } else {
          alert(
            `There aren't any Workfrom locations... We might need to search on Yelp then!`
          );
        }
      });
  }

  launchMapsDirections(params) {
    // TODO: we need our own confirmation dialog because the title
    // of this is index.html and we dont want the user to see that
    if (
      confirm(`Would you like directions to ${params.selectedPosition.title}?`)
    ) {
      let launchNavigator = params.launchNavigator;

      launchNavigator
        .isAppAvailable(launchNavigator.APP.GOOGLE_MAPS)
        .then(available => {
          let app: string;
          if (available) app = launchNavigator.APP.GOOGLE_MAPS;
          else app = launchNavigator.APP.USER_SELECT;

          launchNavigator
            .navigate(
              [
                params.selectedPosition.latitude,
                params.selectedPosition.longitude,
              ],
              {
                app: app,
                start: [
                  params.currentPosition.latitude,
                  params.currentPosition.longitude,
                ],
              }
            )
            .then(
              success => alert('Map launching...'),
              error => alert('Maps application failed to open!')
            );
        });
    }
  }

  showCreateSpaceModal() {
    const defaultPreferences = this.getProfileData('hasWifi', 'hasLocalDeals');
    let preferencesModal = this.modalCtrl.create(PreferencesPage, {
      defaultPreferences,
    });
    preferencesModal.present();
    preferencesModal.onDidDismiss(preferences => {
      //If the next button was clicked, preferences were passed.
      if (preferences) {
        this.spacePreferences = preferences;
        //On open space modal, subscribe to group uid from server.
        this.groupSocketService.uid.subscribe(
          //User's info object that will be sent to server.
          group_uid => {
            this.groupSocketService.userInfo = {
              socketID: '',
              groupUID: group_uid,
              username: this.username,
              latitude: this.latitude,
              longitude: this.longitude,
            };

            console.log(group_uid);

            //Join the room specified by the group uid.
            this.groupSocketService.joinGroup();
            this.isInGroup = true;

            //Create modal.
            let spaceModal = this.modalCtrl.create(SpacePage, {
              uid: group_uid,
            });

            spaceModal.present();

            spaceModal.onDidDismiss(data => {
              this.groupSocketService.userInfos = [];
              this.isSpaceCreated = true;
            });
          },
          error => {
            //Create modal.
            let spaceModal = this.modalCtrl.create(SpacePage, {
              uid: '',
            });

            spaceModal.present();

            spaceModal.onDidDismiss(data => {
              this.groupSocketService.userInfos = [];
            });
          }
        );
      }
    });
  }

  showLocationsModal() {
    this.modalCtrl
      .create(LocationPage, {
        locations: this.locations,
        group_uid: this.groupSocketService.userInfo.groupUID,
        preferences: this.spacePreferences,
      })
      .present();
  }

  leaveGroup() {
    this.alertCtrl
      .create({
        title: 'Leave space',
        message: 'Are you sure to want to leave this space?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel leave space clicked');
            },
          },
          {
            text: 'Confirm',
            handler: () => {
              this.groupSocketService.leaveGroup();
              this.isInGroup = false;
            },
          },
        ],
      })
      .present();
  }

  private selectLocation() {
    if (this.selectedLocation && this.groupSocketService.userInfo.groupUID) {
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
  }

  //If routed from the deeplink, join the room.
  private joinHostGroup(currentPosition) {
    if (this.host_uid && this.selectedLocation === undefined) {
      this.groupSocketService.userInfo = {
        socketID: '',
        groupUID: this.host_uid,
        username: this.username,
        latitude: currentPosition.coords.latitude,
        longitude: currentPosition.coords.longitude,
      };

      //Join the room specified by the group uid.
      this.groupSocketService.joinGroup();
      this.isInGroup = true;
      this.navCtrl.pop();
    }
  }

  private dropMarker(
    title,
    icon,
    lat,
    lng,
    draggable,
    clickFunction?,
    clickFunctionParams?
  ) {
    this.map
      .addMarker({
        title,
        icon,
        animation: 'DROP',
        draggable,
        position: { lat, lng },
      })
      .then(marker => {
        if (clickFunction !== undefined) {
          marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(res => {
            clickFunction(clickFunctionParams);
          });
        } else
          marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(res => {
            alert(`clicked on ${res}`);
          });
        if (draggable) {
          marker.on(GoogleMapsEvent.MARKER_DRAG_END).subscribe(res => {
            this.getWorkfromLocations(res[0]);
          });
        }
      });
  }
}
