import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import { OpeningsModule } from './openings/openings.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [OpeningsModule,
            MongooseModule.forRoot('mongodb://localhost:27017/crudDB')], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
