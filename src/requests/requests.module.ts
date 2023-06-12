import { Module } from '@nestjs/common';
import { DBService } from 'db';
import { RequestsController } from './requests.controller';
import { RequestsService } from './requests.service';

@Module({
  controllers: [RequestsController],
  providers: [RequestsService, DBService],
  imports: [

  ]
})
export class RequestsModule {}

