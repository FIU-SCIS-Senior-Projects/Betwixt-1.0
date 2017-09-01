import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../config/config.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SampleService {
  constructor(private http: HttpClient, private configService: ConfigService) {}

  get serverUrl(): string {
    return this.configService.serverUrl;
  }

  getRequest(): Observable<any> {
    return this.http.get<any>(this.serverUrl);
  }
}