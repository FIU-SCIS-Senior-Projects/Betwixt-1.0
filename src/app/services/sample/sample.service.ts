import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../config/config.service';
import { Http } from '@angular/http';

@Injectable()
export class SampleService {
  constructor(private http: Http, private configService: ConfigService) {}

  get getServerHelloWorld(): string {
    return this.configService.getServerHelloWorld;
  }

  getRequest(): Observable<any> {
    return this.http.get(this.getServerHelloWorld);
  }
}