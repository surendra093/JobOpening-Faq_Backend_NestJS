import * as mongoose from 'mongoose';

export const OpeningSchema = new mongoose.Schema({
      
        jobtitle        : {type: String},
        location        : {type: String},
        EmployementType : {type: String},
        Eligibility     : {type: String},
        Work            : {type: String},
        Note            : {type: String},
        skills          : {type: Array},
        Date            : {type: Date },
        status          : {type: Boolean}

});

export interface Opening extends mongoose.Document {
        
    id              : string;
    jobtitle        : string;
    location        : string;
    EmployementType : string;
    Eligibility     : string;
    Work            : string;
    Note            : string;
    skills          : Array<string>;
    Date            : Date;
    status          : Boolean;
}
