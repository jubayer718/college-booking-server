"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const colleges_controller_1 = require("./app/controllers/colleges.controller");
const admission_controller_1 = require("./app/controllers/admission.controller");
const review_controller_1 = require("./app/controllers/review.controller");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', colleges_controller_1.collegeRouter);
app.use('/api', admission_controller_1.admissionRouter);
app.use('/api', review_controller_1.reviewRouter);
app.use('/', (req, res) => {
    res.send("College booking app");
});
exports.default = app;
