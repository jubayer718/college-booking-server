"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../models/user"));
exports.userRouter = express_1.default.Router();
exports.userRouter.post('/users', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userInfo = req.body;
        const createdUser = yield user_1.default.create(userInfo);
        res.json({
            success: true,
            message: 'User created successfully',
            data: createdUser
        });
    }
    catch (error) {
        next(error);
    }
}));
exports.userRouter.get('/users', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUser = yield user_1.default.find();
        res.json({
            success: true,
            message: 'all user',
            data: allUser
        });
    }
    catch (error) {
        next(error);
    }
}));
exports.userRouter.get("/users/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const uniqueUser = yield user_1.default.findById(id);
        res.json({
            success: true,
            message: "unique user retrieve successfully",
            data: uniqueUser
        });
    }
    catch (error) {
        next(error);
    }
}));
