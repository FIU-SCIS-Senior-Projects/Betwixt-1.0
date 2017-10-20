import { Component } from '@angular/core/';
import { NavParams, ViewController, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  locations;
  group_uid;

  constructor(
    public viewCtrl: ViewController,
    params: NavParams,
    public navCtrl: NavController
  ) {
    this.locations = params.get('locations');
    this.group_uid = params.get('group_uid');
  }

  selectLocation(latitude, longitude, title) {
    console.log('selected location!', latitude, longitude);
    console.log('group_uid', this.group_uid);
    this.dismiss();
    this.navCtrl.push(HomePage, {
      selectedLocation: { latitude, longitude, title },
      group_uid: this.group_uid,
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
