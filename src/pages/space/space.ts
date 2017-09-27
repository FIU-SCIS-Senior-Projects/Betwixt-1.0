import { Component } from '@angular/core/';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-space',
  templateUrl: 'space.html',
})
export class SpacePage {
  uid: string;

  constructor(public viewCtrl: ViewController, params: NavParams) {
    this.uid = params.get('uid');
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
