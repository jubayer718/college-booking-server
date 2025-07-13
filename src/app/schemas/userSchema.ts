import mongoose from "mongoose";
import { IUser } from "../interfaces/user.interface";

export const userSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    unique:true
  },
  password: {
    type: String,
  },
  role: {
    type: String,
  }

  
},{timestamps:true}) 