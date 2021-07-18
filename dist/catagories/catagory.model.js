"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatagorySchema = void 0;
const mongoose = require("mongoose");
exports.CatagorySchema = new mongoose.Schema({
    catagoryField: { type: String },
    Date: { type: Date },
    faq_count: { type: Number }
});
//# sourceMappingURL=catagory.model.js.map