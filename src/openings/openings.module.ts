import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { OpeningsController } from './openings.controller';
import { OpeningsService } from './openings.service';
import { OpeningSchema } from './opening.model';

@Module({
    imports : [ MongooseModule.forFeature([{ name: 'Opening', schema: OpeningSchema }])],
    controllers: [OpeningsController],
    providers: [OpeningsService]
})

export class OpeningsModule {}