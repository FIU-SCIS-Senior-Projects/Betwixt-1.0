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
  ) { }

  ngAfterViewInit() {
    console.log('Ion view loaded.');
    this.platform
      .ready()
      .then(() => this.getCurrentPosition())
      .then((position) => this.loadMap(position))
      .then(() => this.getWorkfromLocations());
  }


  loadMap(position) {
    this.mapElement = document.getElementById('map');
    const currentLat = position.coords.latitude;
    const currentLng = position.coords.longitude;
    alert(currentLat)
    alert(currentLng)

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: currentLat,
          lng: currentLng,
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
            lat: currentLat,
            lng: currentLng,
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
    if (navigator.geolocation) {
      var options = {
        enableHighAccuracy: true
      };

      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
      });

    }
  }

  getWorkfromLocations() {
    this.workfromService.getPlaces(
      43.0741904,
      -89.38098022
    ).subscribe(res => {
      var locations = res.json();
      for (var i = 0; i < locations.length; i++) {
        this.map
          .addMarker({
            title: locations[i].title,
            icon: 'blue',
            animation: 'DROP',
            position: {
              lat: locations[i].latitude,
              lng: locations[i].longitude,
            },
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
              alert('clicked');
            });
          });
      }
    });
  }
}
