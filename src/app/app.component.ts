import { Component } from '@angular/core';
import { Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Deeplinks} from '@ionic-native/deeplinks';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(
    private platform: Platform, 
    private deeplinks : Deeplinks,
    statusBar: StatusBar, 
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();    
    });
  }

  ngAfterViewInit() {
    this.platform.ready().then(() => {
  
      // Convenience to route with a given nav
      this.deeplinks.route( {
        '/': {},
      }).subscribe((match) => {
        alert('Successfully routed\n' + JSON.stringify(match));
      }, (nomatch) => {
        console.warn('Unmatched Route\n' + JSON.stringify(nomatch));
      });
    })
  }
}
