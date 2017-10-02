import { Component } from '@angular/core/';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-space',
  templateUrl: 'space.html',
})
export class SpacePage {
  spaceLink : string;
  uid : string;

  constructor(public viewCtrl: ViewController, params: NavParams) {
    
    this.uid = params.get('uid');
    this.spaceLink = `betwixt://betwixt.com/?group_uid=${this.uid}`
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
