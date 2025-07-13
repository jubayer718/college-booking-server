import mongoose from "mongoose";
import { Review } from "../interfaces/review.interface";

export const reviewSchema = new mongoose.Schema<Review>({
  collegeId: {
     type: mongoose.Schema.Types.ObjectId,
    ref: "College",
  },
  userEmail: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});


