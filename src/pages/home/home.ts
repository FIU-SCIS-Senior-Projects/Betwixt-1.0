import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SampleService } from '../../app/services/sample/sample.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(
    navCtrl: NavController,
    private sampleService: SampleService
  ) {}

  ngOnInit() {
    this.sampleService.getRequest()
      .subscribe(
        data => console.log('SUCCESS', data),
        error => console.error('ERROR', error)
      );
  }

}
