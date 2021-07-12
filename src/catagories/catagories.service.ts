import { Injectable, NotFoundException, HttpException,HttpStatus} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';

import { Catagory } from './catagory.model';


@Injectable()
export class CatagoriesService {
  private catagories: Catagory[] = [];

  constructor(@InjectModel('Catagory') private readonly catagoryModel:Model<Catagory>){ }
    
    async insertCatagory(body){

        try{
            const catagoryField = body.catagoryField;
            const Date          = body.Date;
            const newCatagory = new this.catagoryModel({catagoryField,Date});

            const result = await newCatagory.save();
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

    async getCatagories() {
        
        var mysort = { Date: -1 };
        const catagories = await this.catagoryModel.find().sort(mysort).exec();
       /* const catagories = await this.catagoryModel.find().exec();*/
        return catagories as Catagory[];
    }

    /*
    async getSingleOpening(openingId: string) {
        const opening = await this.findOpening(openingId);
        return {
            id: opening.id,
            jobtitle: opening.jobtitle,
            location: opening.location,
            EmployementType: opening.EmployementType,
            Eligibility: opening.Eligibility,
            Work: opening.Work,
            Note: opening.Note,
            skills: opening.skills,
            Date  : opening.Date,
            status  : opening.status
        };
    }*/
    
    async updateCatagory(catagoryId : string,body){

        const updateCatagory = await this.findCatagory(catagoryId);
        if (body.catagoryField) {
            updateCatagory.catagoryField = body.catagoryField;
        }
        if (body.Date) {
            updateCatagory.Date = body.Date;
        }
        updateCatagory.save();
    }

    async deleteCatagory(catagoryId: string) {
        const result = await this.catagoryModel.deleteOne({_id: catagoryId}).exec();
        if (result.n === 0) {
        throw new NotFoundException('Could not find Catagory.');
        }
    }

    private async findCatagory(id: string): Promise<Catagory> {
        let catagory;
        try {
        catagory = await this.catagoryModel.findById(id).exec();
        } catch (error) {
        throw new NotFoundException('Could not find catagory.');
        }
        if (!catagory) {
        throw new NotFoundException('Could not find catagory.');
        }
        return catagory;
    }
}