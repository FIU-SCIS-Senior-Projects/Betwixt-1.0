import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ConfigService } from '../config/config.service';
import { GroupSocketService } from '../groupsocket/groupsocket.service';
import * as randomgeo from 'generate-random-points';

@Injectable()
export class GroupTestService {
  constructor(public http: Http, public configService: ConfigService) {}

  //Create a new instance of the GroupSocketService for testing and have it join the group.
  generateRandomGeoUser(latitude, longitude, group_uid) {
    let groupSocketService = new GroupSocketService(
      this.http,
      this.configService
    );

    //Generate a random point within a 10 mile (16094 meter) radius of the current position.
    let randomPoint = randomgeo.generateRandomPoint(
      { latitude: latitude, longitude: longitude },
      16094
    );

    //Assign lat, lng, and a random username.
    groupSocketService.userInfo = {
      socketID: '',
      groupUID: group_uid,
      username: `RandomGeoUser${Math.floor(Math.random() * 100)}`,
      imageUrl: 'http://www.freeiconspng.com/uploads/profile-icon-9.png',
      latitude: randomPoint.latitude,
      longitude: randomPoint.longitude,
    };
    //Join the space.
    groupSocketService.joinGroup();
  }
}
