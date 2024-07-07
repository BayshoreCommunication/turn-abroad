import React from "react";
import Motion from "@src/components/motion/Motion";
import { FaQuoteRight } from "react-icons/fa";

const InvestorReviews = () => {
  const reviewsData = {
    reviews: [
      {
        review:
          "This platform has significantly improved my investment strategy.",
        reviewer_name: "John Smith",
        profession: "Financial Analyst",
      },
      {
        review:
          "The insights provided are invaluable provided are invaluable for making informed decisions.",
        reviewer_name: "Jane Doe",
        profession: "Portfolio Manager",
      },
      {
        review:
          "I appreciate the detailed analytics and easy-to-use interface.",
        reviewer_name: "Alice Johnson",
        profession: "Investment Banker",
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
              <h2 className="text-2xl font-bold mb-2">
                {reviewItem.reviewer_name}
              </h2>
              <h4 className="text-lg font-semibold text-primary">
                {reviewItem.profession}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InvestorReviews;
