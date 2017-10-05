import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Deeplinks } from '@ionic-native/deeplinks';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  rootPage: any = HomePage;

  @ViewChild(Nav) navChild: Nav;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private deeplinks: Deeplinks
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngAfterViewInit() {
    this.deeplinks
      .routeWithNavController(this.navChild, {
        '/': HomePage,
      })
      .subscribe(
        match => {
          console.log('Successfully routed\n' + JSON.stringify(match));
        },
        nomatch => {
          console.warn('Unmatched Route', nomatch);
        }
      );
  }
}
