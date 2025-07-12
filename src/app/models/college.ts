import mongoose from "mongoose";
import { college } from "../interfaces/college.interface";
import { collegeSchema } from "../schemas/collegeSchema";

export default mongoose.models.College || mongoose.model<college>("College", collegeSchema);