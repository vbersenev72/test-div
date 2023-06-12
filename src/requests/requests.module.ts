import { Module } from '@nestjs/common';
import { DBService } from 'db';
import { RequestsController } from './requests.controller';
import { RequestsService } from './requests.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Requests } from 'src/models/request.model';

@Module({
  controllers: [RequestsController],
  providers: [RequestsService, DBService],
  imports: [
    TypeOrmModule.forFeature([Requests])
  ],
  exports: [
    TypeOrmModule
  ]
})
export class RequestsModule {}

