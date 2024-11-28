"use client";
import Link from "next/link";
import React, { useState } from "react";

const CompleteUniversityWorkYes: React.FC = () => {
  return (
    <section className="py-10 lg:py-14  overflow-hidden  ">
      <div className="container">
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="max-w-5xl p-10 md:p-14  border lg:py-20 rounded-2xl w-full">
            <h3 className="mb-4 lg:mb-6  text-gray-900 text-xl md:text-3xl lg:text-4xl font-bold text-center md:mb-6 max-w-2xl mx-auto">
              Did you do masters/post grad?
            </h3>

            <div className=" flex gap-4 items-center justify-center">
              <div className="flex items-center px-3 py-2 border rounded-lg min-w-32 justify-center ">
                <input
                  id="completeSchoolYes-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-[#2D8FCC] bg-gray-100 border-gray-300 focus:ring-transparent   focus:ring-2 cursor-pointer  checked:bg-[#2D8FCC] "
                />
                <label
                  htmlFor="completeSchoolYes-1"
                  className="ms-2 text-lg md:text-g font-medium text-gray-900 cursor-pointer "
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center px-3 py-2 border rounded-lg min-w-32 justify-center ">
                <input
                  id="completeSchoolNo-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  defaultChecked
                  className="w-4 h-4 text-[#2D8FCC] bg-gray-100 border-gray-300 focus:ring-transparent   focus:ring-2 cursor-pointer  checked:bg-[#2D8FCC] "
                />
                <label
                  htmlFor="completeSchoolNo-2"
                  className="ms-2 text-lg md:text-g font-medium text-gray-900 cursor-pointer "
                >
                  No
                </label>
              </div>
            </div>

            <div className="flex gap-4 justify-center mt-6 md:mt-10 ">
              <Link
                href={""}
                className="btn btn-primary  w-full md:max-w-52 py-2"
              >
                Next
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompleteUniversityWorkYes;
