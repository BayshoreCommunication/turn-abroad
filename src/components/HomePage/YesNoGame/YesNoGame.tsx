"use client";

import React, { useState } from "react";
import CompleteSchool from "./student/CompleteSchool";
import CompleteSchoolWork from "./work/CompleteSchoolWork";
import Investment from "./investment/Investment";

const YesNoGame: React.FC = () => {
  const [stepCount, setStepCount] = useState<string>("");
  const [nextStep, setNextStep] = useState<boolean>(false);

  const handleSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStepCount(e.target.id);
  };

  const nextHandleSelection = () => {
    setNextStep(true);
  };

  return (
    <div>
      {nextStep ? (
        // Conditionally render components based on the selected category
        stepCount === "student" ? (
          <CompleteSchool setNextStep={setNextStep} />
        ) : stepCount === "work" ? (
          <CompleteSchoolWork />
        ) : stepCount === "investment" ? (
          <Investment setNextStep={setNextStep} />
        ) : (
          ""
        )
      ) : (
        <div className="py-10 lg:py-14 overflow-hidden">
          <div className="container">
            <div className="flex justify-center items-center min-h-[50vh]">
              <div className="max-w-5xl p-10 md:p-14 border lg:py-20 rounded-2xl w-full">
                <h3 className="mb-4 lg:mb-6 text-gray-900 text-xl md:text-3xl lg:text-4xl font-bold text-center md:mb-6 max-w-2xl mx-auto">
                  Why do you want to go abroad?
                </h3>

                <div className="flex gap-4 items-center justify-center">
                  <div className="flex items-center px-3 py-2 border rounded-lg min-w-32 justify-center">
                    <input
                      id="student"
                      type="radio"
                      name="choice"
                      className="w-4 h-4 text-[#2D8FCC] bg-gray-100 border-gray-300 focus:ring-transparent focus:ring-2 cursor-pointer checked:bg-[#2D8FCC]"
                      onChange={handleSelection}
                    />
                    <label
                      htmlFor="student"
                      className="ms-2 text-lg md:text-g font-medium text-gray-900 cursor-pointer"
                    >
                      Study
                    </label>
                  </div>
                  <div className="flex items-center px-3 py-2 border rounded-lg min-w-32 justify-center">
                    <input
                      id="work"
                      type="radio"
                      name="choice"
                      className="w-4 h-4 text-[#2D8FCC] bg-gray-100 border-gray-300 focus:ring-transparent focus:ring-2 cursor-pointer checked:bg-[#2D8FCC]"
                      onChange={handleSelection}
                    />
                    <label
                      htmlFor="work"
                      className="ms-2 text-lg md:text-g font-medium text-gray-900 cursor-pointer"
                    >
                      Work
                    </label>
                  </div>
                  <div className="flex items-center px-3 py-2 border rounded-lg min-w-32 justify-center">
                    <input
                      id="investment"
                      type="radio"
                      name="choice"
                      className="w-4 h-4 text-[#2D8FCC] bg-gray-100 border-gray-300 focus:ring-transparent focus:ring-2 cursor-pointer checked:bg-[#2D8FCC]"
                      onChange={handleSelection}
                    />
                    <label
                      htmlFor="investment"
                      className="ms-2 text-lg md:text-g font-medium text-gray-900 cursor-pointer"
                    >
                      Investment
                    </label>
                  </div>
                </div>

                <div className="flex gap-4 justify-center mt-6 md:mt-10">
                  <button
                    onClick={nextHandleSelection}
                    disabled={!stepCount} // Disable until a selection is made
                    className={`btn btn-primary w-full md:max-w-52 py-2  ${
                      !stepCount
                        ? "opacity-50 cursor-not-allowed !bg-[#2d8fcc] !text-white !border-opacity-100"
                        : ""
                    }`}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YesNoGame;
