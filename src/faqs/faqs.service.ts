import { Injectable, NotFoundException, HttpException,HttpStatus} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';

import { Faq } from './faq.model';


@Injectable()
export class FaqsService {
  private faqs: Faq[] = [];

  constructor(@InjectModel('Faq') private readonly faqModel:Model<Faq>){ }
    
    async insertFaq(body){

        try{
            const question      = body.question;
            const description   = body.description;
            const catagoryName  = body.catagoryName;
            const link          = body.link;
            const Date          = body.Date;
            const status        = body.status;
            
            const newFaq = new this.faqModel({question,description,catagoryName,link,Date,status});

            const result = await newFaq.save();
            return result.id as string;

        } catch (error) {
            throw new HttpException(
            {
                status: HttpStatus.BAD_REQUEST,
                error: error,
            },
            HttpStatus.BAD_REQUEST,
            );
        }
    }

    async getFaqs() {
        
        var mysort = { Date: -1 };
        const faqs = await this.faqModel.find().sort(mysort).exec();
        return faqs as Faq[];
    }
    
    async updateFaq(faqId : string,body){

        const updatedFaq = await this.findFaq(faqId);
        if (body.question) {
            updatedFaq.question = body.question;
        }
        if (body.description) {
            updatedFaq.description = body.description;
        }
        if (body.catagoryName) {
            updatedFaq.catagoryName= body.catagoryName;
        }
        if(body.link){
            updatedFaq.link = body.link;
        }
        if (body.Date) {
            updatedFaq.Date = body.Date;
        }
        if (body.status == false || true) {
            updatedFaq.status = body.status;
        }
        updatedFaq.save();
    }

    async deleteFaq(faqId: string) {
        const result = await this.faqModel.deleteOne({_id: faqId}).exec();
        if (result.n === 0) {
        throw new NotFoundException('Could not find faq.');
        }
    }

    private async findFaq(id: string): Promise<Faq> {
        let faq;
        try {
        faq = await this.faqModel.findById(id).exec();
        } catch (error) {
        throw new NotFoundException('Could not find faq.');
        }
        if (!faq) {
        throw new NotFoundException('Could not find faq.');
        }
        return faq;
    }
}