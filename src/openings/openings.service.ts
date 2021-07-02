import { Injectable, NotFoundException, HttpException,HttpStatus} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';

import { Opening } from './opening.model';


@Injectable()
export class OpeningsService {
  private openings: Opening[] = [];

  constructor(@InjectModel('Opening') private readonly openingModel:Model<Opening>){ }
    
    async insertOpening(body){

        try{
            const jobtitle = body.jobtitle;
            const location = body.location;
            const EmployementType = body.EmployementType;
            const Eligibility = body.Eligibility;
            const Work = body.Work;
            const Note = body.Note;
            const skills = body.skills;
            const Date = body.Date;
            const status = body.status;

            const newOpening = new this.openingModel({jobtitle,location,EmployementType,
                Eligibility,Work,Note,skills,Date,status});

            const result = await newOpening.save();
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

    async getOpenings() {
        var mysort = { Date: -1 };
        const openings = await this.openingModel.find().sort(mysort).exec();
        return openings as Opening[];
    }

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
    }
    
    async updateOpening(openingId : string,body){

        const updatedOpening = await this.findOpening(openingId);
        if (body.jobtitle) {
            updatedOpening.jobtitle = body.jobtitle;
        }
        if (body.location) {
            updatedOpening.location = body.location;
        }
        if (body.EmployementType) {
            updatedOpening.EmployementType = body.EmployementType;
        }
        if (body.Eligibility) {
            updatedOpening.Eligibility = body.Eligibility;
        }
        if (body.Work) {
            updatedOpening.Work = body.Work;
        }
        if (body.Note) {
            updatedOpening.Note = body.Note;
        }
        if (body.skills) {
            updatedOpening.skills = body.skills;
        }
        if (body.Date) {
            updatedOpening.Date = body.Date;
        }
        
        if (body.status == false || true) {
            updatedOpening.status = body.status;
        }
       
        updatedOpening.save();
    }

    async deleteOpening(openId: string) {
        const result = await this.openingModel.deleteOne({_id: openId}).exec();
        if (result.n === 0) {
        throw new NotFoundException('Could not find opening.');
        }
    }

    private async findOpening(id: string): Promise<Opening> {
        let opening;
        try {
        opening = await this.openingModel.findById(id).exec();
        } catch (error) {
        throw new NotFoundException('Could not find opening.');
        }
        if (!opening) {
        throw new NotFoundException('Could not find opening.');
        }
        return opening;
    }
}