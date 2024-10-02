import React from "react";
import Motion from "@src/components/motion/Motion";
import { FaQuoteRight } from "react-icons/fa";

const ProfessionalsReviews = () => {
  const reviewsData = {
    reviews: [
      {
        review: "Made my professional move abroad smooth and stress-free.",
        reviewer_name: "Nazmul Haque",
        profession: "Software Engineer",
      },
      {
        review: "They helped me secure my dream job overseas!",
        reviewer_name: "Sabrina Sultana",
        profession: "Electrical Engineer",
      },
      {
        review: "Highly recommend TurnAbroad for professional relocation.",
        reviewer_name: "Imran Chowdhury",
        profession: "Business Analyst",
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {reviewsData.reviews.map((reviewItem, index) => (
        <div key={index}>
          <div className="mb-8 lg:mb-0 p-8 bg-[#F2F7FE] rounded-lg h-full flex flex-col justify-center">
            <div>
              <FaQuoteRight className="text-5xl text-primary opacity-60" />
              <p className="py-6 text-xl font-medium">{reviewItem.review}</p>
            </div>
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
