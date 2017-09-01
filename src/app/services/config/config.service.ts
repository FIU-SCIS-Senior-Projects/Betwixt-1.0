import { Injectable } from '@angular/core';

export interface ConfigFile {
  serverUrl: string;
}

export interface Config {
  serverUrl: string;
}

@Injectable()
export class ConfigService implements Config {
  private config: Config;

  constructor() {
    console.info('CONFIG-SERVICE');
  }

  get serverUrl(): string {
    return this.getConfig().serverUrl;
  }

  init(config: ConfigFile) {
    if (!config) {
      throw new Error(`No configuration passed`);
    }

    if (this.config) {
      throw new Error(`Attempt to initialize configuration more than once`);
    }

    const { serverUrl } = config;

    this.config = {
      serverUrl
    };
    console.info(`Application configured!`, this.config);
  }

  private getConfig(): Config {
    if (!this.config) {
      throw new Error(`Configuration is not initialized`);
    }

    return this.config;
  }
}
