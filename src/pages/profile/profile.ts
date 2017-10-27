import { Component } from '@angular/core';
import {
  IonicPage,
  ViewController,
  NavController,
  NavParams,
  Events,
} from 'ionic-angular';

export interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  hasWifi: boolean;
  hasLocalDeals: boolean;
}

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profile: Profile;

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public navCtrl: NavController,
    public events: Events
  ) {
    this.profile = navParams.get('profileData');
    console.log('Profile Settings', this.profile);
  }

  onSave() {
    this.events.publish('profile:saved', this.profile);
    this.navCtrl.pop();
  }
}
