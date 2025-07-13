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
const mongodb_1 = require("mongodb");
const review_1 = __importDefault(require("../models/review"));
const review_2 = require("../service/review");
exports.reviewRouter = express_1.default.Router();
exports.reviewRouter.post('/reviews', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = yield req.body;
        const newReview = new review_1.default({
            collegeId: new mongodb_1.ObjectId(body.collegeId),
            comment: body.comment,
            rating: body.rating,
            userEmail: body.userEmail,
            userName: body.userName,
            date: body.date,
        });
        const result = yield review_1.default.create(newReview);
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
exports.reviewRouter.get('/reviews', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { collegeId } = req.query;
        const reviews = yield review_1.default.find({ collegeId });
        res.json({
            success: true,
            message: "review",
            data: reviews
        });
    }
    catch (error) {
        next(error);
    }
}));
exports.reviewRouter.get('/collegeReview', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, review_2.getCollegeDetailsByReview)();
    res.status(201).json({
        success: true,
        message: "reviews retrieve successfully",
        data: result,
    });
}));
