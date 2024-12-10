import React from "react";

const Thanks = () => {
  return (
    <div>
      <div className="py-10 lg:py-14 overflow-hidden">
        <div className="container">
          <div className="flex justify-center items-center min-h-[50vh]">
            <div className="max-w-5xl p-10 md:p-14 border lg:py-20 rounded-2xl w-full">
              <h3 className=" text-gray-900 text-xl md:text-3xl lg:text-4xl font-bold text-center md:mb-6 max-w-3xl mx-auto">
                Thanks for your submission!
              </h3>
              <h3 className=" text-gray-700 text-lg md:text-xl lg:text-2xl font-semibold text-center md:mb-6 max-w-3xl mx-auto">
                Our Team Will Reach Out To You Shortly
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
