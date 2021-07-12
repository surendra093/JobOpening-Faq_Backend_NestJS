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
exports.CatagoriesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const catagories_service_1 = require("./catagories.service");
let CatagoriesController = class CatagoriesController {
    constructor(catagoriesService) {
        this.catagoriesService = catagoriesService;
    }
    async addCatagory(body) {
        const generatedId = await this.catagoriesService.insertCatagory(body);
        return { id: generatedId };
    }
    async getAllCatagories() {
        const catagories = await this.catagoriesService.getCatagories();
        return catagories;
    }
    async updateCatagory(catagoryId, body) {
        await this.catagoriesService.updateCatagory(catagoryId, body);
        return null;
    }
    async deleteCatagory(catagoryId) {
        await this.catagoriesService.deleteCatagory(catagoryId);
        return null;
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ summary: 'Get my catagories' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CatagoriesController.prototype, "addCatagory", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatagoriesController.prototype, "getAllCatagories", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CatagoriesController.prototype, "updateCatagory", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CatagoriesController.prototype, "deleteCatagory", null);
CatagoriesController = __decorate([
    common_1.Controller('catagories'),
    __metadata("design:paramtypes", [catagories_service_1.CatagoriesService])
], CatagoriesController);
exports.CatagoriesController = CatagoriesController;
//# sourceMappingURL=catagories.controller.js.map