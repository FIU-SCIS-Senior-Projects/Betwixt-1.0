import { Component } from '@angular/core/';
import { NavParams, ViewController } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  locations;

  constructor(public viewCtrl: ViewController, params: NavParams) {
    this.locations = params.get('locations');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
