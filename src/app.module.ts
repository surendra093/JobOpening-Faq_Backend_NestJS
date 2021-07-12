import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import { OpeningsModule } from './openings/openings.module';
import { CatagoriesModule } from './catagories/catagories.module';
import { FaqsModule} from './faqs/faqs.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [OpeningsModule,CatagoriesModule,FaqsModule,
            MongooseModule.forRoot('mongodb://localhost:27017/crudDB')], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
