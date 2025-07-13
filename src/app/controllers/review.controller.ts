import express, { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import ReviewModel from '../models/review';
import { getCollegeDetailsByReview } from '../service/review';



export const reviewRouter = express.Router();


reviewRouter.post('/reviews', async (req: Request, res: Response, next) => {
  try {
    const body = await req.body;
     const newReview = new ReviewModel({
      collegeId: new ObjectId(body.collegeId), 
      comment: body.comment,
      rating: body.rating,
      userEmail: body.userEmail,
      userName: body.userName,
      date: body.date,
    });
    const result = await ReviewModel.create(newReview);
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

reviewRouter.get('/collegeReview', async (req: Request, res: Response) => {
   const result = await getCollegeDetailsByReview();

  res.status(201).json({
    success: true,
    message: "reviews retrieve successfully",
    data: result,

  })

})
