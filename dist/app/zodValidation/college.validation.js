"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collegeZodValidation = void 0;
// validators/college.validator.ts
const zod_1 = require("zod");
exports.collegeZodValidation = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(1, "Name cannot be empty"),
    image: zod_1.z.string().url("Image must be a valid URL").optional(),
    admissionDates: zod_1.z.string().optional(),
    events: zod_1.z.array(zod_1.z.string()).optional(),
    research: zod_1.z.array(zod_1.z.string()).optional(),
    sports: zod_1.z.array(zod_1.z.string()).optional(),
    rating: zod_1.z.number().min(0).max(5).optional(),
});
