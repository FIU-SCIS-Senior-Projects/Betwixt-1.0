import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import {SpacePage} from '../pages/space/space';
import { ProfilePage } from '../pages/profile/profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ServicesModule } from './services/services.module';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Deeplinks } from '@ionic-native/deeplinks';
import { Clipboard } from '@ionic-native/clipboard';
import { NativeStorage } from '@ionic-native/native-storage';
import { GroupSocketService } from "./services/groupsocket/groupsocket.service";
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { LocationPage } from '../pages/location/location';

const components = [
  MyApp,
  HomePage,
  SpacePage,
  ProfilePage,
  LocationPage,
]

@NgModule({
  declarations: components,
  imports: [
    // Custom
    ServicesModule,
    // Angular
    BrowserModule,
    HttpModule,
    // Ionic
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: components,
  providers: [
    Deeplinks,
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    Clipboard,
    NativeStorage,
    GroupSocketService,
    LaunchNavigator,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
