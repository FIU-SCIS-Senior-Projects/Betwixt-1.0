import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SampleService } from './sample/sample.service';
import { ConfigModule } from './config/config.module';
import { YelpService } from './yelp/yelp.service';
import { WorkfromService } from './workfrom/workfrom.service';
import { GroupSocketService } from './groupsocket/groupsocket.service';

const serviceModules = [ConfigModule];
const serviceProviders = [
  SampleService,
  YelpService,
  WorkfromService,
  GroupSocketService];

@NgModule({
  imports: serviceModules,
  exports: serviceModules,
  providers: serviceProviders
})
export class ServicesModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: ServicesModule
  ) {
    if (parentModule) {
      // ServicesModule includes singleton services that shouldn't be created more than once.
      // Throwing if we're a child prevents that.
      throw new Error('ServicesModule is already loaded. Import from AppModule only.');
    }
  }
}