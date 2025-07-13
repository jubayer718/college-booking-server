import express, { Request, Response } from 'express';
import cors from 'cors';
import { collegeRouter } from './app/controllers/colleges.controller';
import { admissionRouter } from './app/controllers/admission.controller';
import { reviewRouter } from './app/controllers/review.controller';
import { userRouter } from './app/controllers/user.controller';



const app = express();


app.use(cors());
app.use(express.json());

app.use('/api', collegeRouter);
app.use('/api', admissionRouter);
app.use('/api', reviewRouter);
app.use('/api', userRouter);


app.use('/', (req:Request,res:Response) => {
  res.send("College booking app")
})

export default app;