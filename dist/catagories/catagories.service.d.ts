import { Model } from 'mongoose';
import { Catagory } from './catagory.model';
export declare class CatagoriesService {
    private readonly catagoryModel;
    private catagories;
    constructor(catagoryModel: Model<Catagory>);
    insertCatagory(body: any): Promise<string>;
    getCatagories(): Promise<Catagory[]>;
    updateCatagory(catagoryId: string, body: any): Promise<void>;
    deleteCatagory(catagoryId: string): Promise<void>;
    private findCatagory;
}
