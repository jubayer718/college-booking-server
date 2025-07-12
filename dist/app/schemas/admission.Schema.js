"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.admissionSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.admissionSchema = new mongoose_1.default.Schema({
    name: String,
    subject: String,
    email: String,
    phone: String,
    address: String,
    dob: String,
    image: String,
    collegeId: {
        type: String,
        unique: true
    },
}, { timestamps: true });
