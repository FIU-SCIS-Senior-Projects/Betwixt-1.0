import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Http } from '@angular/http';

interface WorkfromOptions {
  radius?: number;
  limit?: number;
  page?: number;
}

@Injectable()
export class WorkfromService {
  constructor(private http: Http, private configService: ConfigService) {}

  get workfromPlaces(): string {
    return this.configService.workfromPlaces;
  }

  getPlaces(latitude: number, longitude: number, options?: WorkfromOptions) {
    const params = {
      latitude,
      longitude,
      ...options
    };
    return this.http.get(this.workfromPlaces, { params });
  }
}