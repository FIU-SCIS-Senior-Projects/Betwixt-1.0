import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import * as io from 'socket.io-client';
import 'rxjs/Rx';

interface userInfo {
  groupUID : string;
  username : string;
  latitude : number;
  longitude : number;
}

@Injectable()
export class GroupSocketService {
  //LOCALHOST
  //socketHost: string = 'http://localhost:8080';
  //IP TO ACCESS WITH ANDROID EMULATOR. COMMENT OUT ALL OTHERS WHEN TESTING WITH ANDROID EMULATOR.
  socketHost: string = "http://10.0.2.2:8080";
  socket: io;
  uid: Observable<string>;
  userInfos : Array<userInfo> = [];

  constructor(private http: Http) {
    this.uid = this.getUID;
    this.socket = io(this.socketHost);

    this.socket.on('serverSendInfo', (res) => {
      console.log("User info added\n" + JSON.stringify(res));
      this.userInfos.push(res);
      
    })

  }

  private get getUID(): Observable<string> {
    return this.http
      .get(`${this.socketHost}/group/create`)
      .map(res => res.json().uid)
      .catch((error: any) =>
        Observable.throw(JSON.stringify(error.json()) || 'Server error')
      );
  }

  joinGroup(group_uid) {
    this.socket.emit('group_uid', group_uid);
  }

  sendLocation(userInfo) {
    this.socket.emit('clientSendInfo', userInfo);
  }
}
