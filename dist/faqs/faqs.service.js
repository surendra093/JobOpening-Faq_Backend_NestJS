"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let FaqsService = class FaqsService {
    constructor(faqModel) {
        this.faqModel = faqModel;
        this.faqs = [];
    }
    async insertFaq(body) {
        try {
            const question = body.question;
            const description = body.description;
            const catagoryName = body.catagoryName;
            const link = body.link;
            const Date = body.Date;
            const status = body.status;
            const newFaq = new this.faqModel({ question, description, catagoryName, link, Date, status });
            const result = await newFaq.save();
            return result.id;
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: error,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getFaqs() {
        var mysort = { Date: -1 };
        const faqs = await this.faqModel.find().sort(mysort).exec();
        return faqs;
    }
    async updateFaq(faqId, body) {
        const updatedFaq = await this.findFaq(faqId);
        if (body.question) {
            updatedFaq.question = body.question;
        }
        if (body.description) {
            updatedFaq.description = body.description;
        }
        if (body.catagoryName) {
            updatedFaq.catagoryName = body.catagoryName;
        }
        if (body.link) {
            updatedFaq.link = body.link;
        }
        if (body.Date) {
            updatedFaq.Date = body.Date;
        }
        if (body.status == false || true) {
            updatedFaq.status = body.status;
        }
        updatedFaq.save();
    }
    async deleteFaq(faqId) {
        const result = await this.faqModel.deleteOne({ _id: faqId }).exec();
        if (result.n === 0) {
            throw new common_1.NotFoundException('Could not find faq.');
        }
    }
    async findFaq(id) {
        let faq;
        try {
            faq = await this.faqModel.findById(id).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find faq.');
        }
        if (!faq) {
            throw new common_1.NotFoundException('Could not find faq.');
        }
        return faq;
    }
};
FaqsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Faq')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FaqsService);
exports.FaqsService = FaqsService;
//# sourceMappingURL=faqs.service.js.map