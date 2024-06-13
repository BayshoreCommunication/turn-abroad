import React from "react";
import Link from "next/link";
import Image from "next/image";
import unskilled from "/public/images/unskilled.png";
import { FaArrowRight } from "react-icons/fa6";
import WorkerConsultationFrom from "./WorkerConsultationFrom";

const UnskilledWork = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-10">
      <div className="">
        <figure className="overflow-hidden">
          <Image
            src={unskilled}
            alt="USA Image"
            className="w-full  "
          />
        </figure>
        <h2 className="text-2xl font-bold text-secondary mt-6 mb-4">
          Our goal is to make the process of studying abroad smooth and
          rewarding.
        </h2>
        <p className="mb-4 text-justify">
          Every individual has their own unique path and we provide support and
          mentorship based on their specific interests or concerns. Are you
          thinking of studying abroad? Get ready to embark on a transformative
          academic adventure with the best study abroad mentors from TurnAbroad
          by your side.
        </p>
       
        {/* <Link href={"#"} className="btn btn-primary">
          Apply Now <FaArrowRight />
        </Link> */}
      </div>
      <WorkerConsultationFrom/>
    </div>
  );
};

export default UnskilledWork;
