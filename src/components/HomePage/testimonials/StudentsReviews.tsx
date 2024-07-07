import React from "react";
import Motion from "@src/components/motion/Motion";
import { FaQuoteRight } from "react-icons/fa";

const StudentsReviews = () => {
  const reviewsData = {
    reviews: [
      {
        review: "A great resource for understanding complex concepts.",
        reviewer_name: "Alice Johnson",
        profession: "Economics Student",
      },
      {
        review: "The material is well-organized and easy to follow.",
        reviewer_name: "Bob Brown",
        profession: "Business Student",
      },
      {
        review: "The material is well-organized and easy to follow.",
        reviewer_name: "Bob Abu",
        profession: "Business Student",
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {reviewsData.reviews.map((reviewItem, index) => (
        <div key={index}>
          <div className="mb-8 lg:mb-0 p-8 bg-[#F2F7FE] rounded-lg h-full">
            <FaQuoteRight className="text-5xl text-primary opacity-60" />
            <p className="py-6 text-xl font-medium">{reviewItem.review}</p>
            <div>
              <h2 className="text-4xl font-bold mb-2">
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
