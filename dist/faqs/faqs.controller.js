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
exports.FaqsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const faqs_service_1 = require("./faqs.service");
let FaqsController = class FaqsController {
    constructor(faqsService) {
        this.faqsService = faqsService;
    }
    async addFaq(body) {
        const generatedId = await this.faqsService.insertFaq(body);
        return { id: generatedId };
    }
    async getAllFaqs() {
        const faqs = await this.faqsService.getFaqs();
        return faqs;
    }
    async updateFaq(faqId, body) {
        await this.faqsService.updateFaq(faqId, body);
        return null;
    }
    async deleteFaq(faqId) {
        await this.faqsService.deleteFaq(faqId);
        return null;
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ summary: 'Get my faqs' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FaqsController.prototype, "addFaq", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FaqsController.prototype, "getAllFaqs", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FaqsController.prototype, "updateFaq", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FaqsController.prototype, "deleteFaq", null);
FaqsController = __decorate([
    common_1.Controller('faqs'),
    __metadata("design:paramtypes", [faqs_service_1.FaqsService])
], FaqsController);
exports.FaqsController = FaqsController;
//# sourceMappingURL=faqs.controller.js.map