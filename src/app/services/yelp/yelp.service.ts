import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Http } from '@angular/http';

@Injectable()
export class YelpService {
  constructor(private http: Http, private configService: ConfigService) {}

  get yelpBusinessSearch(): string {
    return this.configService.yelpBusinessSearch;
  }

  // TODO: create interface for options
  getBusinesses(latitude: number, longitude: number, options?: any) {
    const params = {
      latitude,
      longitude
    };
    return this.http.get(this.yelpBusinessSearch, { params });
  }
}