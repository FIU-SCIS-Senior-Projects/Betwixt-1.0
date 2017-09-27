import { Component } from '@angular/core/';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
} from '@ionic-native/google-maps';
import { Platform, ModalController } from 'ionic-angular';
import { WorkfromService } from '../../app/services/workfrom/workfrom.service';
import { SpacePage } from '../space/space';
import { GroupSocketService } from '../../app/services/groupsocket/groupsocket.service';
import geolib from 'geolib';

interface Coordinates {
  latitude: number;
  longitude: number;
}

const RANDOM_GEOCOORDINATES: Coordinates[] = [
  { latitude: 25.992046, longitude: -80.283645 }, // Pembroke Pines
  { latitude: 25.942871, longitude: -80.12338 }, // Sunny Isles
  // { latitude: 38.5678818, longitude: -121.4636956 }, // East Sacramento
  // { latitude: 37.2972316, longitude: -122.0976092 }, // San Jose
];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  map: GoogleMap;
  mapElement: HTMLElement;

  constructor(
    private googleMaps: GoogleMaps,
    public platform: Platform,
    private workfromService: WorkfromService,
    public spaceCtrl: ModalController,
    private groupSocketService: GroupSocketService
  ) {}

  ngAfterViewInit() {
    console.log('Ion view loaded.');
    this.platform
      .ready()
      .then(() => this.getCurrentPosition())
      .then(currentPosition => this.loadMap(currentPosition))
      .then(currentPosition => this.getCentralPosition(currentPosition))
      .then(centralPosition => this.getWorkfromLocations(centralPosition))
      .catch(error => alert(`An error has occured:\n ${error}`));
  }

  loadMap(currentPosition) {
    const { latitude, longitude } = currentPosition.coords;

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

        this.dropMarker('Current Location', 'green', latitude, longitude);

        RANDOM_GEOCOORDINATES.forEach((position, index) => {
          const { latitude, longitude } = position;
          this.dropMarker(`Location ${index + 1}`, 'blue', latitude, longitude);
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

  getCentralPosition(currentPostion: Coordinates) {
    const locations = [currentPostion, ...RANDOM_GEOCOORDINATES];

    return new Promise(resolve => {
      const centralPosition = geolib.getCenterOfBounds(locations);
      this.dropMarker(
        'Central Location',
        'purple',
        centralPosition.latitude,
        centralPosition.longitude
      );
      return resolve(centralPosition);
    });
  }

  getWorkfromLocations(centralPosition) {
    const { latitude, longitude } = centralPosition;

    this.workfromService.getPlaces(latitude, longitude).subscribe(res => {
      const locations = res.json();

      if (locations.length > 0) {
        locations.forEach(location => {
          this.dropMarker(
            location.title,
            'red',
            location.latitude,
            location.longitude
          );
        });
      } else {
        alert(
          `There aren't any Workfrom locations... We might need to search on Yelp then!`
        );
      }
    });
  }

  showCreateSpaceModal() {
    let spaceModal = this.spaceCtrl.create(SpacePage, {
      uid: this.groupSocketService.uid,
    });
    spaceModal.present();
  }

  private dropMarker(title, icon, lat, lng) {
    this.map
      .addMarker({
        title,
        icon,
        animation: 'DROP',
        position: { lat, lng },
      })
      .then(marker => {
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(res => {
          alert(`clicked on ${res}`);
        });
      });
  }
}
