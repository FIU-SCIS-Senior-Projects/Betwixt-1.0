import { NgModule } from '@angular/core';
import { ConfigService } from './config.service';
import { ConfigInitializer } from './config.initializer';

@NgModule({
  providers: [ConfigService, ConfigInitializer],
})
export class ConfigModule {}
