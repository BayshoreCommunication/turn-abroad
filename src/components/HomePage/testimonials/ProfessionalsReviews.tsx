import React from "react";
import Motion from "@src/components/motion/Motion";
import { FaQuoteRight } from "react-icons/fa";

const ProfessionalsReviews = () => {
  const reviewsData = {
    reviews: [
      {
        review: "An essential tool for staying updated in the industry.",
        reviewer_name: "Carol Davis",
        profession: "Marketing Specialist",
      },
      {
        review: "Highly recommended for continuous professional development.",
        reviewer_name: "Dave Wilson",
        profession: "IT Consultant",
      },
      {
        review: "Highly recommended for continuous professional development.",
        reviewer_name: "Dave Sahak",
        profession: "IT Consultant",
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

export default ProfessionalsReviews;
