import React from "react";
import Link from "next/link";
import Image from "next/image";
import skilled from "/public/images/skilled.png";
import WorkerConsultationFrom from "./WorkerConsultationFrom";
import Motion from "../motion/Motion";
import EmploymentChart from "./EmploymentChart";
import EmploymentStates from "./EmploymentStates ";
import WorkAbroadChart from "./WorkAbroadChart";

const SkilledWork = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="w-full lg:max-w-[65%] ">
        <div className="">
          <figure className="overflow-hidden">
            <Image src={skilled} alt="USA Image" className="w-full  " />
          </figure>
          <h2 className="text-2xl font-bold text-secondary mt-6 mb-4">
            Our goal is to make the process of working abroad attainable from
            the comfort of your home.
          </h2>
          <p className="mb-4 text-justify">
            Aiming to transform borders from being barriers in growth to
            gateways to success, we specialize in guiding individuals towards
            fulfilling international careers. With expertise in various career
            fields, internal resources, and unwavering commitment, we empower
            you to navigate the complexities of international employment and
            landing your dream job. Explore, experience, and excel in your
            global career ambitions with TurnAbroad.
          </p>
        </div>
        <EmploymentStates />
      </div>
      <div className="w-full lg:max-w-[35%]  flex flex-col-reverse lg:flex-col">
        <WorkerConsultationFrom />
        <div className="flex-2">
          <Motion effect="fade-up" easing="ease-in-out" duration="2000">
            <div className="my-6 md:my-10 lg:my-16 p-7 bg-[#F3F9FF]">
              <h2 className="text-2xl md:text-3xl font-extrabold leading-normal mb-4 md:mb-8">
                Total Employed Persons
              </h2>
              <WorkAbroadChart />
            </div>
          </Motion>
        </div>
      </div>
    </div>
  );
};

export default SkilledWork;
