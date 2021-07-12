import * as mongoose from 'mongoose';

export const FaqSchema = new mongoose.Schema({
         
        question      : {type: String},
        description   : {type: String},
        catagoryName  : {type: String},
        link          : {type: String},
        Date          : {type: Date},
        status        : {type: Boolean}
});

export interface Faq extends mongoose.Document {
        
    id              : string;
    question        : string;
    description     : string;
    catagoryName    : string;
    link            : string;
    Date            : Date;
    status          : Boolean;
}
