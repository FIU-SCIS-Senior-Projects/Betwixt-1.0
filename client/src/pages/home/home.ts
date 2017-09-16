import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YelpService } from '../../app/services/yelp/yelp.service';
import { Observable } from 'rxjs/Observable';
import { Geolocation } from '@ionic-native/geolocation';
import { WorkfromService } from '../../app/services/workfrom/workfrom.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  yelpLocations$: Observable<any>;
  workfromLocations$: Observable<any>;

  constructor(
    navCtrl: NavController,
    private yelpService: YelpService,
    private workfromService: WorkfromService,
    private geolocation: Geolocation
  ) {}

  ngOnInit() {
    this.geolocation.getCurrentPosition()
      .then(resp => {
        console.log(`Got geolocation!\nlatitude: ${resp.coords.latitude} longitude: ${resp.coords.longitude}`)

        this.yelpLocations$ = this.yelpService.getBusinesses(resp.coords.latitude, resp.coords.longitude);
        this.workfromLocations$ = this.workfromService.getPlaces(resp.coords.latitude, resp.coords.longitude);

      }).catch(error => {
        console.log('Error getting geolocation', error);
      });

  }

}
