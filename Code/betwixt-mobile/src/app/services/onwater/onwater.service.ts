import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Http } from '@angular/http';

@Injectable()
export class OnWaterService {
  constructor(private http: Http, private configService: ConfigService) {}

  get onWater(): string {
    return this.configService.onWater;
  }

  checkForWater(latitude: number, longitude: number, options?: any) {
    const onWaterUrl = `${this.onWater}${latitude},${longitude}`;
    return this.http.get(onWaterUrl);
  }
}