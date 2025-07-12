
import mongoose from "mongoose";
import { college } from "../interfaces/college.interface";

export const collegeSchema = new mongoose.Schema<college>({
  name: String,
  image: String,
  admissionDates: String,
  events: [String],
  research: [String],
  sports: [String],
  rating: Number,
},{timestamps: true})