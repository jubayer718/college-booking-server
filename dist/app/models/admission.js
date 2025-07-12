"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const admission_Schema_1 = require("../schemas/admission.Schema");
exports.default = mongoose_1.default.models.Admission ||
    mongoose_1.default.model("Admission", admission_Schema_1.admissionSchema);
