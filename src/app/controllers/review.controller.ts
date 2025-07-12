import express, { Request, Response } from 'express';
import ReviewModel from '../models/review';



export const reviewRouter = express.Router();


reviewRouter.post('/reviews', async (req: Request, res: Response, next) => {
  try {
    const body = await req.body;
    const result = await ReviewModel.create(body);
    res.json({
      success: true,
      message: 'review added',
      data: result
    })
  } catch (error) {
    next(error)
  }
})


reviewRouter.get('/reviews', async (req: Request, res: Response, next) => {

  try {
    const { collegeId } = req.query;
    const reviews = await ReviewModel.find({collegeId});
    res.json({
      success: true,
      message: "review",
      data: reviews
    })
  } catch (error) {
    next(error)
  }
})