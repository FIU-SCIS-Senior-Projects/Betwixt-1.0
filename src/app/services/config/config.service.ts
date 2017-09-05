import { Injectable } from '@angular/core';
import urlJoin from 'url-join';

const SERVER_URL = 'https://server.betwixt.space/';
const YELP_API = 'https://api.yelp.com/v3/';

@Injectable()
export class ConfigService {

  constructor() {
    console.info('CONFIG-SERVICE');
  }

  get serverUrl(): string {
    return SERVER_URL;
  }

  get yelpUrl(): string {
    return YELP_API;
  }

  get yelpBusinessSearch(): string {
    return urlJoin(YELP_API, 'businesses', 'search');
  }
}
