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
exports.reviewRouter = void 0;
const express_1 = __importDefault(require("express"));
const review_1 = __importDefault(require("../models/review"));
exports.reviewRouter = express_1.default.Router();
exports.reviewRouter.post('/reviews', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = yield req.body;
        const result = yield review_1.default.create(body);
        res.json({
            success: true,
            message: 'review added',
            data: result
        });
    }
    catch (error) {
        next(error);
    }
}));
exports.reviewRouter.get('/reviews/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const review = yield review_1.default.findById(id);
        res.json({
            success: true,
            message: "review",
            data: review
        });
    }
    catch (error) {
        next(error);
    }
}));
