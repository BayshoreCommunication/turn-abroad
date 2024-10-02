import React from "react";
import Link from "next/link";
import Image from "next/image";
import UKImage from "/public/images/uk.png";
import StudentConsultationFrom from "./StudentConsultationFrom";
import UK from "../StudentsPage/Countries/UK/UK";
import Motion from "../motion/Motion";
import LivingCostChart from "../StudentsPage/Countries/UK/LivingCostChart";

const StudyUK = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="w-full lg:max-w-[65%] ">
        <div className="">
          <figure className="overflow-hidden">
            <Image src={UKImage} alt="USA Image" className="w-full" />
          </figure>
          <h2 className="text-2xl font-bold text-secondary mt-6 mb-4">
            Our goal is to make the process of studying abroad smooth and
            rewarding.
          </h2>
          {/* <p className=" text-justify">
            Every individual has their own unique path and we provide support
            and mentorship based on their specific interests or concerns. Are
            you thinking of studying abroad? Get ready to embark on a
            transformative academic adventure with the best study abroad mentors
            from TurnAbroad by your side.
          </p> */}

          {/* <Link href={"#"} className="btn btn-primary">
          Apply Now <FaArrowRight />
        </Link> */}
        </div>
        <UK />
      </div>
      <div className="w-full lg:max-w-[35%]  flex flex-col-reverse lg:flex-col">
        <StudentConsultationFrom />
        <div className="flex-2">
          <Motion effect="fade-up" easing="ease-in-out" duration="2000">
            <div className="my-6 md:my-10 lg:my-16 p-7 bg-[#F3F9FF]">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-normal mb-4 md:mb-8">
                Cost of Living in UK
              </h2>
              <LivingCostChart />
            </div>
          </Motion>
        </div>
      </div>
    </div>
  );
};

export default StudyUK;
