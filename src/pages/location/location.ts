import { Component } from '@angular/core/';
import { NavParams, ViewController, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  locations;

  constructor(public viewCtrl: ViewController, params: NavParams, public navCtrl: NavController) {
    this.locations = params.get('locations');
  }

  selectLocation(latitude, longitude) {
    console.log('selected location!', latitude, longitude);
    // TODO: drop the pin on selected location for everyone
    this.dismiss();
    this.navCtrl.push(HomePage, { selectedLocation: { latitude, longitude } });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
