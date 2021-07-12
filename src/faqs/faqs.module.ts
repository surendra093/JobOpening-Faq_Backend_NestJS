import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FaqsController } from './faqs.controller';
import { FaqsService } from './faqs.service';
import { FaqSchema } from './faq.model';

@Module({
    imports : [ MongooseModule.forFeature([{ name: 'Faq', schema: FaqSchema}])],
    controllers: [FaqsController],
    providers: [FaqsService]
})

export class FaqsModule {}