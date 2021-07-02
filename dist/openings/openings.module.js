"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpeningsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const openings_controller_1 = require("./openings.controller");
const openings_service_1 = require("./openings.service");
const opening_model_1 = require("./opening.model");
let OpeningsModule = class OpeningsModule {
};
OpeningsModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Opening', schema: opening_model_1.OpeningSchema }])],
        controllers: [openings_controller_1.OpeningsController],
        providers: [openings_service_1.OpeningsService]
    })
], OpeningsModule);
exports.OpeningsModule = OpeningsModule;
//# sourceMappingURL=openings.module.js.map