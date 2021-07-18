import * as mongoose from 'mongoose';

export const CatagorySchema = new mongoose.Schema({
      
        catagoryField : {type: String},
        Date          : {type: Date},
        faq_count     : {type: Number}
});

export interface Catagory extends mongoose.Document {
        
    id              : string;
    catagoryField   : string;
    Date            : Date;
    faq_count       : number;
}
