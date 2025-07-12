import express, { Request, Response } from 'express';
import college from '../models/college';
import { collegeZodValidation } from '../zodValidation/college.validation';

export const collegeRouter = express.Router();


//create colleges into db
collegeRouter.post("/colleges", async (req: Request, res: Response,next) => {
  try {
     //validate request body with zod
    const collegeInfo = await collegeZodValidation.parseAsync(req.body);
    const createCollege = await college.create(collegeInfo);
     res.status(201).json({
    success: true,
    message: "College created successfully",
    data:createCollege
  })

  } catch (error) {
    next(error)
  }
})


// get all colleges from db

collegeRouter.get("/colleges", async (req: Request, res: Response,next) => {
  try {
    
    const colleges = await college.find();
     res.status(201).json({
    success: true,
    message: "College created successfully",
    data:colleges
  })

  } catch (error) {
    next(error)
  }
})

// get  college by id from db

collegeRouter.get("/college/:id", async (req: Request, res: Response,next) => {
  try {
    const { id } = req.params;
    const colleges = await college.findById(id);
     res.status(201).json({
    success: true,
    message: "College created successfully",
    data:colleges
  })

  } catch (error) {
    next(error)
  }
})

