"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpeningSchema = void 0;
const mongoose = require("mongoose");
exports.OpeningSchema = new mongoose.Schema({
    jobtitle: { type: String },
    location: { type: String },
    EmployementType: { type: String },
    Eligibility: { type: String },
    Work: { type: String },
    Note: { type: String },
    skills: { type: Array },
    Date: { type: Date },
    status: { type: Boolean }
});
//# sourceMappingURL=opening.model.js.map