import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RequestsController } from './requests.controller';
import { Request } from './requests.model';
import { RequestsService } from './requests.service';

@Module({
  controllers: [RequestsController],
  providers: [RequestsService],
  imports: [
    SequelizeModule.forFeature([Request])
  ]
})
export class RequestsModule {}
