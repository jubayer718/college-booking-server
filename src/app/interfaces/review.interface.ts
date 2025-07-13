import mongoose from "mongoose";

// interfaces/review.interface.ts
export interface Review {
  _id?: string;
   collegeId: mongoose.Types.ObjectId;
  userEmail: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}
