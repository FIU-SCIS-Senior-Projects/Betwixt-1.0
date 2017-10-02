import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/subject';
import { Http } from '@angular/http';
import * as io from 'socket.io-client';
import 'rxjs/Rx';

export interface UserInfo {
  socketID : string;
  groupUID : string;
  username : string;
  latitude : number;
  longitude : number;

}



@Injectable()
export class GroupSocketService {
  //LOCALHOST
  socketHost: string = 'http://localhost:8080';
  //IP TO ACCESS WITH ANDROID EMULATOR. COMMENT OUT ALL OTHERS WHEN TESTING WITH ANDROID EMULATOR.
  //socketHost: string = "http://10.0.2.2:8080";
  socket: io;
  uid: Observable<string>;
  userInfos : Array<UserInfo> = [];
  userInfoSubject : Subject<UserInfo> = new Subject<UserInfo>();
  username : string;
  public userInfo : UserInfo;

  constructor(private http: Http) {
    //Initialize userInfos object.
   
    this.uid = this.getUID;
    this.socket = io(this.socketHost);
    //Add user information when a new user joins.
    this.socket.on('getNewUserInfo', (res) => {
      console.log("User info added\n" + JSON.stringify(res));
      this.userInfos.push(res)
      this.socket.emit('sendUserInfo', {socketID: res.socketID, userInfo: this.userInfo});
      this.userInfoSubject.next(res);
      
    })

    this.socket.on('getExistingUserInfo', (res) => {
      console.log("User info added\n" + JSON.stringify(res));
      this.userInfoSubject.next(res);
      this.userInfos.push(res)
      
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

  joinGroup() {
    //Add the unique socket id on join group.
    this.userInfo.socketID = this.socket.io.engine.id;
    this.socket.emit('joinGroup', this.userInfo);
  }

}
