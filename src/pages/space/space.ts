import { Component } from '@angular/core/';
import { NavParams, ViewController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-space',
  templateUrl: 'space.html',
})
export class SpacePage {

  uid: string

  constructor(
    public viewCtrl: ViewController, params: NavParams) {

    var uidObservable = params.get('uid');
    uidObservable.subscribe(uid => this.uid = uid,
      error => { console.log(error) })

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}