import { Component } from '@angular/core/';
import { NavParams, ViewController } from 'ionic-angular';
import { PreferenceOptions } from './preference-options';

@Component({
  selector: 'page-preferences',
  templateUrl: 'preferences.html',
})
export class PreferencesPage {
  preferenceOptions: PreferenceOptions;

  constructor(public viewCtrl: ViewController, params: NavParams) {
    this.preferenceOptions = params.get('defaultPreferences');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  next() {
    this.viewCtrl.dismiss(this.preferenceOptions);
  }
}
