// validators/college.validator.ts
import { z } from "zod";

export const collegeZodValidation = z.object({
  name: z
    .string()
    .min(1, "Name cannot be empty"),
  image: z.string().url("Image must be a valid URL").optional(),
  admissionDates: z.string().optional(),
  events: z.array(z.string()).optional(),
  research: z.array(z.string()).optional(),
  sports: z.array(z.string()).optional(),
  rating: z.number().min(0).max(5).optional(),
});
