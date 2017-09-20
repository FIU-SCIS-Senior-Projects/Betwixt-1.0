import { Component } from '@angular/core/';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
} from '@ionic-native/google-maps';
import { Platform } from 'ionic-angular';
import { YelpService } from '../../app/services/yelp/yelp.service';
import { Observable } from 'rxjs/Observable';
import { Geolocation } from '@ionic-native/geolocation';
import { WorkfromService } from '../../app/services/workfrom/workfrom.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  yelpLocations$: Observable<any>;
  workfromLocations$: Observable<any>;

  latitude: number;
  longitude: number;

  map: GoogleMap;
  mapElement: HTMLElement;

  constructor(
    private googleMaps: GoogleMaps,
    public platform: Platform,
    private yelpService: YelpService,
    private workfromService: WorkfromService,
    private geolocation: Geolocation
  ) {}

  ngAfterViewInit() {
    console.log('Ion view loaded.');
    this.platform
      .ready()
      .then(() => this.getCurrentPosition())
      .then(() => this.loadMap());
  }

  loadMap() {
    this.mapElement = document.getElementById('map');

    //const currentLat = coords.latitude;
    //const currentLng = coords.longitude;

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802,
        },
        zoom: 18,
        tilt: 30,
      },
    };

    this.map = this.googleMaps.create(this.mapElement, mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log('Map is ready!');

      // Now you can use all methods safely.
      this.map
        .addMarker({
          title: 'Ionic',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: 43.0741904,
            lng: -89.3809802,
          },
        })
        .then(marker => {
          marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
            alert('clicked');
          });
        });
    });
  }

  getCurrentPosition() {
    return this.geolocation
      .getCurrentPosition()
      .then(resp => {
        
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;

        console.log(`Lat: ${this.latitude}\nLon:${this.longitude}`);

        // this.yelpLocations$ = this.yelpService.getBusinesses(
        //   this.latitude,
        //   this.longitude
        // );
        // this.workfromLocations$ = this.workfromService.getPlaces(
        //   this.latitude,
        //   this.longitude
        // );
        return resp.coords;
      })
      .catch(error => {
        console.log('Error getting geolocation', error);
        return error;
      });
  }
}
