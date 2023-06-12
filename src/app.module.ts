import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { RequestsModule } from './requests/requests.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Requests } from "./models/request.model";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        RequestsModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USERNAME,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            entities: [Requests],
            synchronize: true,
          }),
      ],
})
export class AppModule {

}