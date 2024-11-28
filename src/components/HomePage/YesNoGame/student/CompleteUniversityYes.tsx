"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CompleteUniversityYes: React.FC = () => {
  return (
    <section className="py-10 lg:py-14  overflow-hidden  ">
      <div className="container">
        <div className="flex flex-col gap-4  justify-center items-center min-h-[50vh]">
          <h3 className="mb-4 lg:mb-6  text-gray-900 text-xl md:text-3xl lg:text-4xl font-bold text-center md:mb-6 max-w-2xl mx-auto">
            Masters / Post Grad
          </h3>

          <div className=" flex flex-col lg:flex-row gap-4 md:gap-6">
            <div className="p-10  border rounded-2xl flex flex-col  items-start justify-center max-w-[535px] ">
              <h4 className="text-lg md:text-2xl font-semibold mb-3">
                Your chances of Turningabroad for masters is{" "}
                <span className="text-[#2D8FCC]">25%</span>
              </h4>
              <p className="text-base md:text-lg font-medium text-[#6E767E]">
                Breakdown of average costs
              </p>
              <div className="border w-full mt-5 mb-4 "></div>
              <div className="flex flex-col gap-4">
                <p className="text-lg md:text-xl font-bold mb-1">Cost</p>
                <div className="flex items-center gap-4">
                  <div className=" flex items-center gap-3 min-w-56">
                    <div className="p-3 rounded-full bg-[#CAE1FF] ">
                      <Image
                        src="/images/game/tuition.png"
                        alt=""
                        width={24}
                        height={24}
                      ></Image>
                    </div>
                    <p className="text-lg font-medium text-start text-gray-500 ">
                      Tuition
                    </p>
                  </div>
                  <p className="text-lg font-medium text-center text-gray-900">
                    $50,000 / year
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className=" flex items-center gap-3 min-w-56">
                    <div className="p-3 rounded-full bg-[#F5ECFE] ">
                      <Image
                        src="/images/game/living-expenses.png"
                        alt=""
                        width={24}
                        height={24}
                      ></Image>
                    </div>
                    <p className="text-lg font-medium text-start text-gray-500 ">
                      Living Expenses
                    </p>
                  </div>
                  <p className="text-lg font-medium text-center text-gray-900">
                    $50,000 / year
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className=" flex items-center gap-3 min-w-56">
                    <div className="p-3 rounded-full bg-[#F9E8CC] ">
                      <Image
                        src="/images/game/books-and-supplies.png"
                        alt=""
                        width={24}
                        height={24}
                      ></Image>
                    </div>
                    <p className="text-lg font-medium text-start text-gray-500 ">
                      Books and Supplies
                    </p>
                  </div>
                  <p className="text-lg font-medium text-center text-gray-900">
                    $50,000 / year
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className=" flex items-center gap-3 min-w-56">
                    <div className="p-3 rounded-full bg-[#CBF6F5] ">
                      <Image
                        src="/images/game/health-insurance.png"
                        alt=""
                        width={24}
                        height={24}
                      ></Image>
                    </div>
                    <p className="text-lg font-medium text-start text-gray-500 ">
                      Health Insurance
                    </p>
                  </div>
                  <p className="text-lg font-medium text-center text-gray-900">
                    $50,000 / year
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <p className="text-lg md:text-xl font-semibold mb-1 min-w-56 ">
                  Total yearly cost
                </p>
                <p className="text-lg md:text-xl font-semibold mb-1">
                  $80,000 / year
                </p>
              </div>
            </div>
            <div className="p-10  border rounded-2xl flex flex-col  items-start justify-center max-w-[535px] ">
              <h4 className="text-lg md:text-2xl font-semibold mb-3">
                Your chances of Turningabroad for masters{" "}
                <span className="text-[#2D8FCC]">with Turnabroad is 60%%</span>
              </h4>
              <p className="text-base md:text-lg font-medium text-[#6E767E]">
                Actual average breakdown with Turnabroad
              </p>
              <div className="border w-full mt-5 mb-4 "></div>
              <div className="flex flex-col gap-4">
                <p className="text-lg md:text-xl font-bold mb-1">Cost</p>
                <div className="flex items-center gap-4">
                  <div className=" flex items-center gap-3 min-w-56">
                    <div className="p-3 rounded-full bg-[#CAE1FF] ">
                      <Image
                        src="/images/game/tuition.png"
                        alt=""
                        width={24}
                        height={24}
                      ></Image>
                    </div>
                    <p className="text-lg font-medium text-start text-gray-500 ">
                      Tuition
                    </p>
                  </div>
                  <p className="text-lg font-medium text-center text-gray-900">
                    up to 90% less
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className=" flex items-center gap-3 min-w-56">
                    <div className="p-3 rounded-full bg-[#F5ECFE] ">
                      <Image
                        src="/images/game/living-expenses.png"
                        alt=""
                        width={24}
                        height={24}
                      ></Image>
                    </div>
                    <p className="text-lg font-medium text-start text-gray-500 ">
                      Living Expenses
                    </p>
                  </div>
                  <p className="text-lg font-medium text-center text-gray-900">
                    up to 60% less
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className=" flex items-center gap-3 min-w-56">
                    <div className="p-3 rounded-full bg-[#F9E8CC] ">
                      <Image
                        src="/images/game/books-and-supplies.png"
                        alt=""
                        width={24}
                        height={24}
                      ></Image>
                    </div>
                    <p className="text-lg font-medium text-start text-gray-500 ">
                      Books and Supplies
                    </p>
                  </div>
                  <p className="text-lg font-medium text-center text-gray-900">
                    up to 100% less
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className=" flex items-center gap-3 min-w-56">
                    <div className="p-3 rounded-full bg-[#CBF6F5] ">
                      <Image
                        src="/images/game/health-insurance.png"
                        alt=""
                        width={24}
                        height={24}
                      ></Image>
                    </div>
                    <p className="text-lg font-medium text-start text-gray-500 ">
                      Health Insurance
                    </p>
                  </div>
                  <p className="text-lg font-medium text-center text-gray-900">
                    up to 50% less
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <p className="text-lg md:text-xl font-semibold mb-1 min-w-56 ">
                  Total yearly cost
                </p>
                <p className="text-lg md:text-xl font-semibold mb-1">
                  $15,000 / year
                </p>
              </div>
            </div>
          </div>

          <div className="flex  flex-col justify-center items-center  mt-4 md:mt-6 ">
            <h4 className="text-lg md:text-2xl font-semibold  text-center mb-4">
              What are you waiting for? <br />
              Increase your chances{" "}
              <span className="text-[#2D8FCC]">with Turnabroad today!</span>
            </h4>
            <Link
              href={""}
              className="btn btn-primary  w-full md:max-w-52 py-2"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompleteUniversityYes;
