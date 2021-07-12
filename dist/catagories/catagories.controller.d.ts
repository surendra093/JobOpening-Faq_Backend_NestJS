import { CatagoriesService } from './catagories.service';
export declare class CatagoriesController {
    private readonly catagoriesService;
    constructor(catagoriesService: CatagoriesService);
    addCatagory(body: any): Promise<{
        id: string;
    }>;
    getAllCatagories(): Promise<import("./catagory.model").Catagory[]>;
    updateCatagory(catagoryId: string, body: any): Promise<any>;
    deleteCatagory(catagoryId: string): Promise<any>;
}
