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
exports.CatagoriesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CatagoriesService = class CatagoriesService {
    constructor(catagoryModel) {
        this.catagoryModel = catagoryModel;
        this.catagories = [];
    }
    async insertCatagory(body) {
        try {
            const catagoryField = body.catagoryField;
            const Date = body.Date;
            const faq_count = body.faq_count;
            const newCatagory = new this.catagoryModel({ catagoryField, Date, faq_count });
            const result = await newCatagory.save();
            return result.id;
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: error,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getCatagories() {
        var mysort = { Date: -1 };
        const catagories = await this.catagoryModel.find().sort(mysort).exec();
        return catagories;
    }
    async updateCatagory(catagoryId, body) {
        const updateCatagory = await this.findCatagory(catagoryId);
        if (body.catagoryField) {
            updateCatagory.catagoryField = body.catagoryField;
        }
        if (body.Date) {
            updateCatagory.Date = body.Date;
        }
        if (body.faq_count != 0) {
            updateCatagory.faq_count = body.faq_count;
        }
        updateCatagory.save();
    }
    async deleteCatagory(catagoryId) {
        const result = await this.catagoryModel.deleteOne({ _id: catagoryId }).exec();
        if (result.n === 0) {
            throw new common_1.NotFoundException('Could not find Catagory.');
        }
    }
    async findCatagory(id) {
        let catagory;
        try {
            catagory = await this.catagoryModel.findById(id).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find catagory.');
        }
        if (!catagory) {
            throw new common_1.NotFoundException('Could not find catagory.');
        }
        return catagory;
    }
};
CatagoriesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Catagory')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CatagoriesService);
exports.CatagoriesService = CatagoriesService;
//# sourceMappingURL=catagories.service.js.map