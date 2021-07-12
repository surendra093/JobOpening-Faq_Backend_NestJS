import { FaqsService } from './faqs.service';
export declare class FaqsController {
    private readonly faqsService;
    constructor(faqsService: FaqsService);
    addFaq(body: any): Promise<{
        id: string;
    }>;
    getAllFaqs(): Promise<import("./faq.model").Faq[]>;
    updateFaq(faqId: string, body: any): Promise<any>;
    deleteFaq(faqId: string): Promise<any>;
}
