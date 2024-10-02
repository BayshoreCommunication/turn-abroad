import React from "react";
import Motion from "@src/components/motion/Motion";
import { FaQuoteRight } from "react-icons/fa";

const StudentsReviews = () => {
  const reviewsData = {
    reviews: [
      {
        review: "Guided me through every step of my visa process.",
        reviewer_name: "Tariq Hossain",
        profession: "Computer Science Student",
      },
      {
        review: "Got my student visa without any hassle, thanks to TurnAbroad!",
        reviewer_name: "Samira Akter",
        profession: "Mechanical Engineering Student",
      },
      {
        review: "The best service for studying abroad!",
        reviewer_name: "Rafiqul Islam",
        profession: "Biology Student",
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
      {reviewsData.reviews.map((reviewItem, index) => (
        <div key={index}>
          <div className="mb-8 lg:mb-0 p-8 bg-[#F2F7FE] rounded-lg h-full flex flex-col justify-between">
            <div>
              <FaQuoteRight className="text-5xl text-primary opacity-60" />
              <p className="py-6 text-xl font-medium">{reviewItem.review}</p>
            </div>
            <div>
              <h2 className="mb-2 text-4xl font-bold">
                {reviewItem.reviewer_name}
              </h2>
              <h4 className="text-xl font-semibold text-primary">
                {reviewItem.profession}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentsReviews;
