"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.collegeSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.collegeSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    image: String,
    admissionDates: String,
    events: [String],
    research: [String],
    sports: [String],
    rating: Number,
}, { timestamps: true });
