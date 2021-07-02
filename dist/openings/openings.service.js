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
exports.OpeningsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let OpeningsService = class OpeningsService {
    constructor(openingModel) {
        this.openingModel = openingModel;
        this.openings = [];
    }
    async insertOpening(body) {
        try {
            const jobtitle = body.jobtitle;
            const location = body.location;
            const EmployementType = body.EmployementType;
            const Eligibility = body.Eligibility;
            const Work = body.Work;
            const Note = body.Note;
            const skills = body.skills;
            const Date = body.Date;
            const status = body.status;
            const newOpening = new this.openingModel({ jobtitle, location, EmployementType,
                Eligibility, Work, Note, skills, Date, status });
            const result = await newOpening.save();
            return result.id;
        }
        catch (error) {
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: error,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async getOpenings() {
        var mysort = { Date: -1 };
        const openings = await this.openingModel.find().sort(mysort).exec();
        return openings;
    }
    async getSingleOpening(openingId) {
        const opening = await this.findOpening(openingId);
        return {
            id: opening.id,
            jobtitle: opening.jobtitle,
            location: opening.location,
            EmployementType: opening.EmployementType,
            Eligibility: opening.Eligibility,
            Work: opening.Work,
            Note: opening.Note,
            skills: opening.skills,
            Date: opening.Date,
            status: opening.status
        };
    }
    async updateOpening(openingId, body) {
        const updatedOpening = await this.findOpening(openingId);
        if (body.jobtitle) {
            updatedOpening.jobtitle = body.jobtitle;
        }
        if (body.location) {
            updatedOpening.location = body.location;
        }
        if (body.EmployementType) {
            updatedOpening.EmployementType = body.EmployementType;
        }
        if (body.Eligibility) {
            updatedOpening.Eligibility = body.Eligibility;
        }
        if (body.Work) {
            updatedOpening.Work = body.Work;
        }
        if (body.Note) {
            updatedOpening.Note = body.Note;
        }
        if (body.skills) {
            updatedOpening.skills = body.skills;
        }
        if (body.Date) {
            updatedOpening.Date = body.Date;
        }
        if (body.status == false || true) {
            updatedOpening.status = body.status;
        }
        updatedOpening.save();
    }
    async deleteOpening(openId) {
        const result = await this.openingModel.deleteOne({ _id: openId }).exec();
        if (result.n === 0) {
            throw new common_1.NotFoundException('Could not find opening.');
        }
    }
    async findOpening(id) {
        let opening;
        try {
            opening = await this.openingModel.findById(id).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find opening.');
        }
        if (!opening) {
            throw new common_1.NotFoundException('Could not find opening.');
        }
        return opening;
    }
};
OpeningsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Opening')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OpeningsService);
exports.OpeningsService = OpeningsService;
//# sourceMappingURL=openings.service.js.map