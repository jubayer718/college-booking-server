import express, { Request, Response } from 'express';
import UserModel from '../models/user';
export const userRouter = express.Router();

userRouter.post('/users', async (req:Request,res:Response,next) => {
  try {
    const userInfo = req.body;
    const createdUser = await UserModel.create(userInfo);
    res.json({
      success: true,
      message: 'User created successfully',
      data: createdUser
    })
  } catch (error) {
   next(error) 
  }
})

userRouter.get('/users', async (req: Request, res: Response,next) => {
  try {
    const allUser = await UserModel.find();
    res.json({
      success: true,
      message: 'all user',
      data: allUser
    })
  } catch (error) {
    next(error)
  }
})


userRouter.get("/users/:id", async (req: Request, res: Response, next) => {
  try {
    
    const {id} = req.params;
    const uniqueUser = await UserModel.findById(id);
    res.json({
      success: true,
      message: "unique user retrieve successfully",
      data: uniqueUser
    })
  } catch (error) {
    next(error)
  }
})