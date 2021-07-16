import * as mongoose from 'mongoose';
export declare const FaqSchema: mongoose.Schema<mongoose.Document<any, any>, mongoose.Model<any, any, any>, undefined>;
export interface Faq extends mongoose.Document {
    id: string;
    question: string;
    description: any;
    catagoryName: string;
    link: string;
    Date: Date;
    status: Boolean;
}
