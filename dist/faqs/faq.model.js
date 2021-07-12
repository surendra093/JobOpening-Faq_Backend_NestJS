"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqSchema = void 0;
const mongoose = require("mongoose");
exports.FaqSchema = new mongoose.Schema({
    question: { type: String },
    description: { type: String },
    catagoryName: { type: String },
    link: { type: String },
    Date: { type: Date },
    status: { type: Boolean }
});
//# sourceMappingURL=faq.model.js.map