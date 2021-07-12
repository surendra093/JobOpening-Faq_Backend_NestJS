import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CatagoriesController } from './catagories.controller';
import { CatagoriesService } from './catagories.service';
import { CatagorySchema } from './catagory.model';

@Module({
    imports : [ MongooseModule.forFeature([{ name: 'Catagory', schema: CatagorySchema }])],
    controllers: [CatagoriesController],
    providers: [CatagoriesService]
})

export class CatagoriesModule {}