"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const collegeSchema_1 = require("../schemas/collegeSchema");
exports.default = mongoose_1.default.models.College || mongoose_1.default.model("College", collegeSchema_1.collegeSchema);
