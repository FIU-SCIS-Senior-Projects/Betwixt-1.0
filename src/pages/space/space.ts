import { Component } from '@angular/core/';
import { NavParams, ViewController } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';

@Component({
  selector: 'page-space',
  templateUrl: 'space.html',
})
export class SpacePage {
  spaceLink: string;
  uid: string;

  constructor(
    public viewCtrl: ViewController,
    public clipboard: Clipboard,
    params: NavParams
  ) {
    this.uid = params.get('uid');
    this.spaceLink = `betwixt://betwixt.com/?group_uid=${this.uid}`;
  }

  onCopy() {
    this.clipboard
      .copy(this.spaceLink)
      .then(() => alert('Your Space Link has been copied to your clipboard!'));
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
