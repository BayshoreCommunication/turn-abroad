import Image from "next/image";
import Link from "next/link";
import React from "react";
import studentsImage from "/public/images/students.png";
import Motion from "@src/components/motion/Motion";

const HomeTabStudentContent = () => {
  return (
    <div className="hero-content flex-col-reverse  lg:flex-row gap-x-6 gap-y-8 p-0 lg:gap-12 xl:gap-16 items-center justify-items-center ">
      <Motion effect="fade-right" duration="1500">
        <div className="w-full lg:max-w-lg xl:max-w-xl">
          <p className="mb-3 font-medium text-lg text-start text-[#434242]">
            Our goal is to make the process of studying abroad smooth and
            rewarding. Every individual has their own unique path and we provide
            support and mentorship based on their specific interests or
            concerns. Are you thinking of studying abroad? Get ready to embark
            on a transformative academic adventure with the best study abroad
            mentors from TurnAbroad by your side.
          </p>
          <Link
            href={"/students"}
            className="btn btn-primary  lg:!text-xl  mt-2 md:mt-6 !leading-[120%] py-5"
          >
            Learn More
          </Link>
        </div>
      </Motion>
      <Motion effect="fade-left" duration="1500">
        <Image
          src={studentsImage}
          alt="About Section Image"
          className="w-full"
        />
      </Motion>
    </div>
  );
};

export default HomeTabStudentContent;
