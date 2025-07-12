
import mongoose from "mongoose";
import { Admission } from "../interfaces/admission.interface";

export const admissionSchema = new mongoose.Schema<Admission>(
  {
    name: String,
    subject: String,
    email: String,
    phone: String,
    address: String,
    dob: String,
    image: String,
    collegeId: {
      type: String,
      unique:true
    },
  },
  { timestamps: true }
);