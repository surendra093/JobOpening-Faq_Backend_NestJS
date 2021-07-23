import * as mongoose from 'mongoose';

export const CatagorySchema = new mongoose.Schema({
      
    catagoryField : {type: String},
    Date          : {type: Date},
});

export interface Catagory extends mongoose.Document {
        
    id              : string;
    catagoryField   : string;
    Date            : Date;
}
