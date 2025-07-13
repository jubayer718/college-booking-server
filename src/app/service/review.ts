
import ReviewModel from "../models/review";

export const getCollegeDetailsByReview = async () => {
  const result = await ReviewModel.aggregate([
    {
      $group: {
        _id: "$collegeId",
      }
    },
    {
      $lookup: {
        from: "colleges",
        localField: "_id",
        foreignField: "_id",
        as: "collegeDetails",
      },
    },
    { $unwind: "$collegeDetails" },
    {
      $project: {
        _id: 0,
        reviewer: "$userName",
        comment: 1,
        rating: 1,
        college: {
          name: "$collegeDetails.name",
          image: "$collegeDetails.image",
          admissionDates: "$collegeDetails.admissionDates",
        },
      },
    },
  ]);

  return result;
};
