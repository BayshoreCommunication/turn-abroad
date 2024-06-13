import Image from "next/image";
import Link from "next/link";
import React from "react";
import employeeImage from "/public/images/employee.png";
import Motion from "@src/components/motion/Motion";
const HomeTabEmploymentContent = () => {
  return (
    <div className="hero-content flex-col-reverse lg:flex-row gap-x-6 gap-y-8 p-0  lg:gap-12 xl:gap-16 items-center justify-items-center">
      <Motion effect="fade-right" duration="1500">
        <div className="w-full lg:max-w-lg xl:max-w-xl">
          <p className="mb-3 font-semibold text-xl text-justify text-[#434242]">
            Aiming to transform borders from being barriers in growth to
            gateways to success, we specialize in guiding individuals towards
            fulfilling international careers. With expertise in various career
            fields, internal resources, and unwavering commitment, we empower
            you to navigate the complexities of international employment and
            landing your dream job. Explore, experience, and excel in your
            global career ambitions with TurnAbroad.
          </p>
          <Link href={"#"} className="btn btn-primary mt-6">
            Learn More
          </Link>
        </div>
      </Motion>
      <Motion effect="fade-left" duration="1500">
        <div className="">
          <Image
            src={employeeImage}
            alt="About Section Image"
            className="w-full"
          />
        </div>
      </Motion>
    </div>
  );
};

export default HomeTabEmploymentContent;
