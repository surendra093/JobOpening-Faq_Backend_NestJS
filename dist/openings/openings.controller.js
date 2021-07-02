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
exports.OpeningsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const openings_service_1 = require("./openings.service");
let OpeningsController = class OpeningsController {
    constructor(openingsService) {
        this.openingsService = openingsService;
    }
    async addOpening(body) {
        const generatedId = await this.openingsService.insertOpening(body);
        return { id: generatedId };
    }
    async getAllOpenings() {
        const openings = await this.openingsService.getOpenings();
        return openings;
    }
    getOpening(openId) {
        return this.openingsService.getSingleOpening(openId);
    }
    async updateOpening(openId, body) {
        await this.openingsService.updateOpening(openId, body);
        return null;
    }
    async deleteOpening(openId) {
        await this.openingsService.deleteOpening(openId);
        return null;
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ summary: 'Get my openings' }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OpeningsController.prototype, "addOpening", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OpeningsController.prototype, "getAllOpenings", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OpeningsController.prototype, "getOpening", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OpeningsController.prototype, "updateOpening", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OpeningsController.prototype, "deleteOpening", null);
OpeningsController = __decorate([
    common_1.Controller('openings'),
    __metadata("design:paramtypes", [openings_service_1.OpeningsService])
], OpeningsController);
exports.OpeningsController = OpeningsController;
//# sourceMappingURL=openings.controller.js.map