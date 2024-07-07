import Link from "next/link";
import React from "react";

const ApplicationLink = () => {
  return (
    <div className="applicationBG py-10 lg:py-20">
      <div className="container text-center">
        <h1 className="text-center text-white text-3xl md:text-[40px] font-extrabold leading-normal  mb-4 md:mb-8">
          Planning to Move Abroad?
        </h1>
        <Link href="/contact" className="btn btn-primary hover:bg-white">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default ApplicationLink;
