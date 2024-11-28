"use client";
import Link from "next/link";
import React, { useState } from "react";

const PostGradNoWorkUSNo: React.FC = () => {
  return (
    <section className="py-10 lg:py-14  overflow-hidden  ">
      <div className="container">
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="max-w-5xl p-10 md:p-14  border lg:py-20 rounded-2xl w-full">
            <h3 className="mb-4 lg:mb-6  text-gray-900 text-xl md:text-3xl lg:text-4xl font-bold text-center md:mb-6 max-w-2xl mx-auto">
              Alternative Visa Options
            </h3>
            <p className=" text-center text-xl font-semibold">
              You may need to explore other visa options or find <br /> an
              employer willing to sponsor.
            </p>

            <div className="flex gap-4 justify-center mt-6 md:mt-10 ">
              <Link
                href={""}
                className="btn btn-primary  w-full md:max-w-52 py-2"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostGradNoWorkUSNo;
