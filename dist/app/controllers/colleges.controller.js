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
exports.collegeRouter = void 0;
const express_1 = __importDefault(require("express"));
const college_1 = __importDefault(require("../models/college"));
const college_validation_1 = require("../zodValidation/college.validation");
exports.collegeRouter = express_1.default.Router();
//create colleges into db
exports.collegeRouter.post("/colleges", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //validate request body with zod
        const collegeInfo = yield college_validation_1.collegeZodValidation.parseAsync(req.body);
        const createCollege = yield college_1.default.create(collegeInfo);
        res.status(201).json({
            success: true,
            message: "College created successfully",
            data: createCollege
        });
    }
    catch (error) {
        next(error);
    }
}));
// get all colleges from db
exports.collegeRouter.get("/colleges", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const colleges = yield college_1.default.find();
        res.status(201).json({
            success: true,
            message: "College created successfully",
            data: colleges
        });
    }
    catch (error) {
        next(error);
    }
}));
// get  college by id from db
exports.collegeRouter.get("/college/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const colleges = yield college_1.default.findById(id);
        res.status(201).json({
            success: true,
            message: "College created successfully",
            data: colleges
        });
    }
    catch (error) {
        next(error);
    }
}));
