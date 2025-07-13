import mongoose from "mongoose";
import { userSchema } from "../schemas/userSchema";
import { IUser } from "../interfaces/user.interface";
const UserModel = mongoose.models.IUser || mongoose.model<IUser>("User", userSchema);
 
export default UserModel;