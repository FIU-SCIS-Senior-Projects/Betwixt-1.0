import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SampleService } from '../../app/services/sample/sample.service';
import { YelpService } from '../../app/services/yelp/yelp.service';
import { Observable } from 'rxjs/Observable';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  locations$: Observable<any>;

  constructor(
    navCtrl: NavController,
    private sampleService: SampleService,
    private yelpService: YelpService,
    private geolocation: Geolocation
  ) {}

  ngOnInit() {
    this.sampleService.getRequest()
      .subscribe(
        data => console.log('SUCCESS', data),
        error => console.error('ERROR', error)
      );

    this.geolocation.getCurrentPosition()
      .then((resp) => {
        console.log(`Got geolocation!\nlatitude: ${resp.coords.latitude} longitude: ${resp.coords.longitude}`)
        this.locations$ = this.yelpService.getBusinesses(resp.coords.latitude, resp.coords.longitude);
      }).catch((error) => {
        console.log('Error getting location', error);
      });

  }

}
