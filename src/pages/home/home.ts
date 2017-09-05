import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SampleService } from '../../app/services/sample/sample.service';
import { YelpService } from '../../app/services/yelp/yelp.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  locations$: Observable<any>;

  constructor(
    navCtrl: NavController,
    private sampleService: SampleService,
    private yelpService: YelpService
  ) {}

  ngOnInit() {
    this.sampleService.getRequest()
      .subscribe(
        data => console.log('SUCCESS', data),
        error => console.error('ERROR', error)
      );

    // TODO: get user's current location
    this.locations$ = this.yelpService.getBusinesses(25.9495954, -80.3497382);
  }

}
