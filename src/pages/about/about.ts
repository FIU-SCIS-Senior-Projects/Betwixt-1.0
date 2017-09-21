import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import geolib from 'geolib';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(
    navCtrl: NavController,
    platform: Platform,
    private geolocation: Geolocation
  ) {
    platform.ready()
      .then(() => this.getCurrentPosition())
      .then(coords => this.getCentralPosition(coords));
  }

  getCurrentPosition() {
    return this.geolocation.getCurrentPosition()
      .then(({ coords }) => {
        console.log('Got current position!', coords);
        return { latitude: coords.latitude, longitude: coords.longitude };
      })
      .catch(error => {
        console.log('Error getting geolocation', error);
        return error;
      });
  }

  getCentralPosition(coords: { latitude: number, longitude: number }) {
    const locations = [
      coords,
      { latitude: 25.992046, longitude: -80.283645 },
      { latitude: 25.942871, longitude: -80.123380 }
    ];

    const centerOfBounds = geolib.getCenterOfBounds(locations);
    const center = geolib.getCenter(locations);


    console.log('Got center of bounds position!', centerOfBounds);
    console.log('Got center position!', center);
  }
}
