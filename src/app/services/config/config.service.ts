import { Injectable } from "@angular/core";
import urlJoin from "url-join";

const SERVER_URL = 'https://server.betwixt.space/';
//For browser or iOS testing
//const SERVER_URL = 'http://localhost:8080/';
//For android emulator testing
//const SERVER_URL = "http://10.0.2.2:8080/";

@Injectable()
export class ConfigService {
  constructor() {
    console.info("CONFIG-SERVICE");
  }

  get serverUrl(): string {
    return SERVER_URL;
  }

  get getServerHelloWorld(): string {
    return urlJoin(SERVER_URL, "helloworld");
  }

  get yelpBusinessSearch(): string {
    return urlJoin(SERVER_URL, "businesses", "search");
  }

  get workfromPlaces(): string {
    return urlJoin(SERVER_URL, "places");
  }

  get onWater(): string {
    return 'https://api.onwater.io/api/v1/results/';
  }
}
