import { Component } from '@angular/core/';
import {NavParams} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-space',
  templateUrl: 'space.html',
})
export class SpacePage {

  uid : Observable<string>

  constructor(params: NavParams) {
    this.uid = params.get('uid');
    this.uid.subscribe(success => {console.log(success)},
    error => {console.log(error)})
    //console.log('UserId', params.get('userId'));
  }

}