import { Injectable } from '@angular/core';

const SERVER_URL = 'https://server.betwixt.space/';

@Injectable()
export class ConfigService {

  constructor() {
    console.info('CONFIG-SERVICE');
  }

  get serverUrl(): string {
    return SERVER_URL;
  }
}
