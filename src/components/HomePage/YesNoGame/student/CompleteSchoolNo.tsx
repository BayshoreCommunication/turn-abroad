"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CompleteSchoolNo: React.FC = () => {
  return (
    <section className="py-10 lg:py-14  overflow-hidden  ">
      <div className="container">
        <div className="flex flex-col gap-4  justify-center items-center min-h-[50vh]">
          <h3 className="mb-4 lg:mb-6  text-gray-900 text-xl md:text-3xl lg:text-4xl font-bold text-center md:mb-6 max-w-2xl mx-auto">
            INTO program / community college
          </h3>

          <div className="p-10 md:py-14 border rounded-2xl flex flex-col gap-5 items-center justify-center max-w-xl w-full">
            <div className="p-3 rounded-full bg-[#CAE1FF] mx-auto inline-block">
              <Image
                src="/images/game/travel.png"
                alt=""
                width={80}
                height={80}
              ></Image>
            </div>
            <h4 className=" text-lg md:text-2xl font-semibold text-center text-gray-700">
              Your chances of TurningAbroad <br />
              with Turnabroad is{" "}
              <span className="font-bold text-[#2D8FCC]  text-center">
                100%
              </span>
            </h4>
            <div className="flex  justify-center  mt-2 ">
              <Link
                href={""}
                className="btn btn-primary  w-full md:max-w-52 py-2"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompleteSchoolNo;
