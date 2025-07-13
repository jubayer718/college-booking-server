"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema_1 = require("../schemas/userSchema");
const UserModel = mongoose_1.default.models.IUser || mongoose_1.default.model("User", userSchema_1.userSchema);
exports.default = UserModel;
