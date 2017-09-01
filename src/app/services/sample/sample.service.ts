import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

const SAMPLE_API = 'https://server.betwixt.space/';

@Injectable()
export class SampleService {
  constructor(private http: Http) {}

  getRequest(): Observable<any> {
    return this.http.get(SAMPLE_API).map(response => response);
  }
}