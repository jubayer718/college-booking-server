
import mongoose from "mongoose";
import { college } from "../interfaces/college.interface";

export const collegeSchema = new mongoose.Schema<college>({
  name: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  image: String,
  admissionDates: String,
  events: [String],
  research: [String],
  sports: [String],
  rating: Number,
},{timestamps: true})