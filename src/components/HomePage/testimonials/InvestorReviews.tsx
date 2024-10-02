import React from "react";
import Motion from "@src/components/motion/Motion";
import { FaQuoteRight } from "react-icons/fa";

const InvestorReviews = () => {
  const reviewsData = {
    reviews: [
      {
        review: "Helped me expand my business overseas seamlessly.",
        reviewer_name: "Abdul Karim",
        profession: "Managing Director",
      },
      {
        review:
          "TurnAbroad made international investment simple and efficient.",
        reviewer_name: "Farzana Rahman",
        profession: "CEO, Textile Industry",
      },
      {
        review: "They handled everything for my global business expansion.",
        reviewer_name: "Nizam Uddin",
        profession: "Owner, Construction Firm",
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

export default InvestorReviews;
