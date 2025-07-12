import express, { Request, Response } from 'express';
import admission from '../models/admission';


export const admissionRouter = express.Router();

admissionRouter.post("/admission", async (req: Request, res: Response,next) => {
  try {
    const admissionInfo = req.body;
    const createAdmission = await admission.create(admissionInfo)
     res.status(201).json({
    success: true,
    message: "admission created successfully",
    data:createAdmission
  })

  } catch (error) {
    next(error)
  }
})

admissionRouter.get("/my-admission/:email", async (req: Request, res: Response,next) => {
  try {
    const email = req.params.email;
 
    const createAdmission = await admission.findOne({email:email})
     res.status(201).json({
    success: true,
    message: "admission created successfully",
    data:createAdmission
  })

  } catch (error) {
    next(error)
  }
})

