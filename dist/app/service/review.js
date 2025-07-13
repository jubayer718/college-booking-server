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
exports.getCollegeDetailsByReview = void 0;
const review_1 = __importDefault(require("../models/review"));
const getCollegeDetailsByReview = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield review_1.default.aggregate([
        {
            $group: {
                _id: "$collegeId",
            }
        },
        {
            $lookup: {
                from: "colleges",
                localField: "_id",
                foreignField: "_id",
                as: "collegeDetails",
            },
        },
        { $unwind: "$collegeDetails" },
        {
            $project: {
                _id: 0,
                reviewer: "$userName",
                comment: 1,
                rating: 1,
                college: {
                    name: "$collegeDetails.name",
                    image: "$collegeDetails.image",
                    admissionDates: "$collegeDetails.admissionDates",
                },
            },
        },
    ]);
    return result;
});
exports.getCollegeDetailsByReview = getCollegeDetailsByReview;
