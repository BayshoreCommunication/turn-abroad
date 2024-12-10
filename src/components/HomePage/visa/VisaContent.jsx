"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import studentsImage from "/public/images/students.png";
import Motion from "@src/components/motion/Motion";

// import { image } from "@nextui-org/react";

// interface VisaContentProps {
//   description?: string;
//   href?: string;
//   linkTitle?: string;
//   imageSRC?: string;
//   imageALT?: string;
// }

const HomeTabStudentContent = ({
  description,
  href,
  linkTitle,
  imageSRC,
  imageALT,
  setActiveIndex,
  index,
}) => {
  return (
    // <div className="hero-content flex-col-reverse  lg:flex-row gap-x-6 gap-y-8 p-0 lg:gap-12 xl:gap-16 items-center justify-items-center ">
    <div className="hero-content grid grid-cols-1  lg:grid-cols-3 lg:grid- gap-x-6 gap-y-8 p-0 lg:gap-12 xl:gap-16 items-center justify-items-center ">
      <div className="lg:hidden">
        <Motion effect="fade-left" duration="1500">
          <Image
            onClick={
              setActiveIndex
                ? () => {
                    setActiveIndex();
                  }
                : () => {}
            }
            src={imageSRC ? imageSRC : ""}
            alt={imageALT ? imageALT : ""}
            className="w-full cursor-pointer "
          />
        </Motion>
      </div>
      <Motion effect="fade-right" duration="1500">
        <div className="w-full lg:max-w-lg xl:max-w-xl shrink-0">
          <p className="mb-3 font-medium text-lg text-start text-[#434242] w-full">
            {description ? description : ""}
          </p>
          <Link
            href={href ? href : ""}
            className="btn btn-primary  lg:!text-xl  md:mt-6 !leading-[120%] mt-2 lg:mt-6"
          >
            {linkTitle ? linkTitle : "Learn More"}
          </Link>
        </div>
      </Motion>
      <div className="col-span-2 hidden lg:block">
        <Motion effect="fade-left" duration="1500">
          <Image
            onClick={
              setActiveIndex
                ? () => {
                    setActiveIndex();
                  }
                : () => {}
            }
            src={imageSRC ? imageSRC : ""}
            alt={imageALT ? imageALT : ""}
            className="w-full cursor-pointer "
          />
        </Motion>
      </div>
    </div>
  );
};

export default HomeTabStudentContent;
