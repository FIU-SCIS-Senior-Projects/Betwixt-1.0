import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams, Events } from 'ionic-angular';

interface Profile {
  firstName: string;
  lastName: string;
  email: string;
}

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profile: Profile;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, public navCtrl: NavController, public events: Events) {
    this.profile = navParams.get('profileData');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  ionViewWillLeave() {
    this.events.publish('profile:saved', this.profile);
  }
}