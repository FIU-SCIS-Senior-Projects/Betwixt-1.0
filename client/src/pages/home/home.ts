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

  latitude: number;
  longitude: number;

  constructor(
    navCtrl: NavController,
    private yelpService: YelpService,
    private workfromService: WorkfromService,
    private geolocation: Geolocation
  ) {}

  ngOnInit() {
    this.geolocation.getCurrentPosition()
      .then(resp => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;

        this.yelpLocations$ = this.yelpService.getBusinesses(this.latitude, this.longitude);
        this.workfromLocations$ = this.workfromService.getPlaces(this.latitude, this.longitude);

      }).catch(error => {
        console.log('Error getting geolocation', error);
      });

  }

}
