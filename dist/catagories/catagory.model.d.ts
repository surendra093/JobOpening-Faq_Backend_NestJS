import * as mongoose from 'mongoose';
export declare const CatagorySchema: mongoose.Schema<mongoose.Document<any, any>, mongoose.Model<any, any, any>, undefined>;
export interface Catagory extends mongoose.Document {
    id: string;
    catagoryField: string;
    Date: Date;
    faq_count: number;
}
