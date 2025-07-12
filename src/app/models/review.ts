import mongoose from "mongoose";
import { reviewSchema } from "../schemas/reviewSchema";
import { Review } from "../interfaces/review.interface";
const ReviewModel = mongoose.models.Review || mongoose.model<Review>("Review", reviewSchema);
export default ReviewModel;