import { Model } from 'mongoose';
import { Faq } from './faq.model';
export declare class FaqsService {
    private readonly faqModel;
    private faqs;
    constructor(faqModel: Model<Faq>);
    insertFaq(body: any): Promise<string>;
    getFaqs(): Promise<Faq[]>;
    updateFaq(faqId: string, body: any): Promise<void>;
    deleteFaq(faqId: string): Promise<void>;
    private findFaq;
}
