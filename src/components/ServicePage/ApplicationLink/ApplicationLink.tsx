import Link from "next/link";
import React from "react";

const ApplicationLink = () => {
  return (
    <div className="applicationBG py-10 lg:py-20">
      <div className="container text-center">
        <h1 className="text-center text-white text-3xl md:text-[40px] font-extrabold leading-normal  mb-4 md:mb-8">
          Fly Your Dream Destination
        </h1>
        <Link href="" className="btn btn-primary hover:bg-white">
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default ApplicationLink;
