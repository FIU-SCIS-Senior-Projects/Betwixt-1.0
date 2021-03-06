import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Deeplinks } from '@ionic-native/deeplinks';
import { HomePage } from '../pages/home/home';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  rootPage: any = HomePage;
  deeplinkGroupSubject: ReplaySubject<string> = new ReplaySubject<string>();

  @ViewChild(Nav) navChild: Nav;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private deeplinks: Deeplinks,
    events: Events
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      //Subscribe when the Home Page has published that it is ready to receive the group UID.
      events.subscribe('deeplink:listening', () => {
        //alert('Publishing deeplink group subject');
        //Publish a Replay Subject that will contain the group uid.
        events.publish('group:join', this.deeplinkGroupSubject);
      });

      this.deeplinks.route({ '/': 1 }).subscribe(
        match => {
          this.deeplinkGroupSubject.next(match.$args.group_uid);
        },
        nomatch => {
          // nomatch.$link - the full link data
          alert(`Unmatched Route ${JSON.stringify(nomatch)}`);
        }
      );
    });
  }
}
