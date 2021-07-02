import * as mongoose from 'mongoose';
export declare const OpeningSchema: mongoose.Schema<mongoose.Document<any, any>, mongoose.Model<any, any, any>, undefined>;
export interface Opening extends mongoose.Document {
    id: string;
    jobtitle: string;
    location: string;
    EmployementType: string;
    Eligibility: string;
    Work: string;
    Note: string;
    skills: Array<string>;
    Date: Date;
    status: Boolean;
}
