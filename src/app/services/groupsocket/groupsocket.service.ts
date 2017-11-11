import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { ConfigService } from '../config/config.service';
import * as io from 'socket.io-client';
import 'rxjs/Rx';
import * as _ from 'lodash';
import { ReplaySubject } from 'rxjs/ReplaySubject';

export interface UserInfo {
  socketID: string;
  groupUID: string;
  username: string;
  imageUrl?: string;
  latitude?: number;
  longitude?: number;
}

export interface SelectedLocation {
  title?: string;
  groupUID?: string;
  socketId?: string;
  latitude?: number;
  longitude?: number;
}

@Injectable()
export class GroupSocketService {
  socketHost: string;
  socket: io;
  uid: Observable<string>;
  userInfos: Array<UserInfo> = [];
  userInfoSubject: ReplaySubject<UserInfo> = new ReplaySubject<UserInfo>();
  locationSubject: ReplaySubject<SelectedLocation> = new ReplaySubject<
    SelectedLocation
  >();
  public selectedLocation: SelectedLocation;
  public userInfo: UserInfo;
  socketIdSubject: ReplaySubject<string> = new ReplaySubject<string>();

  constructor(private http: Http, configService: ConfigService) {
    this.socketHost = configService.serverUrl;
    //Initialize userInfos object.
    this.uid = this.getUID;
    this.socket = io(this.socketHost);
    //Add user information when a new user joins.
    this.socket.on('getNewUserInfo', res => {
      console.log(`Got new user info ${JSON.stringify(res)}`);
      this.userInfos.push(res);
      this.socket.emit('sendUserInfo', {
        socketID: res.socketID,
        userInfo: this.userInfo,
      });
      this.userInfoSubject.next(res);
    });

    this.socket.on('error', res => {
      console.log(`${JSON.stringify(res)}`);
    });

    this.socket.on('getExistingUserInfo', res => {
      console.log(`Got existing user info ${JSON.stringify(res)}`);
      this.userInfos.push(res);
      this.userInfoSubject.next(res);
    });

    this.socket.on('getSelectedLocation', res => {
      this.socket.emit('sendSelectedLocation', {
        socketId: res.socketId,
        selectedLocation: this.selectedLocation,
      });
      this.locationSubject.next(res);
    });

    this.socket.on('getExistingSelectedLocation', res => {
      this.locationSubject.next(res);
    });

    this.socket.on('getLeavingUserInfo', res => {
      _.pull(this.userInfos, res);
    });

    //Get socket id on connect as observable.
    this.socket.on('connect', res => {
      this.socketIdSubject.next(this.socket.io.engine.id);
    });
  }

  joinGroup() {
    //Add the unique socket id on join group.
    this.socketIdSubject.subscribe(socketId => {
      this.userInfo.socketID = socketId;
      console.log(`Got socketID: ${this.userInfo.socketID}`);
      this.socket.emit('joinGroup', this.userInfo);
    });
  }

  leaveGroup() {
    this.userInfo.socketID = this.socket.io.engine.id;
    this.socket.emit('leaveGroup', this.userInfo);
  }

  selectLocation() {
    //Add the unique socket id on join group.
    this.selectedLocation.socketId = this.socket.io.engine.id;
    this.socket.emit('selectLocation', this.selectedLocation);
  }

  private get getUID(): Observable<string> {
    return this.http
      .get(`${this.socketHost}group/create`)
      .map(res => res.json().uid)
      .catch((error: any) =>
        Observable.throw(JSON.stringify(error.json()) || 'Server error')
      );
  }
}
