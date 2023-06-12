import { Injectable } from '@nestjs/common';

@Injectable()
export class DBService {
  private envConfig: Record<string, string>;

  constructor() {
    this.envConfig = {
      databaseHost: process.env.POSTGRES_HOST,
      databasePort: process.env.POSTGRES_PORT, 
      databaseName: process.env.POSTGRES_DB, 
      databaseUsername: process.env.POSTGRES_USERNAME, 
      databasePassword: process.env.POSTGRES_PASSWORD 
    };
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}