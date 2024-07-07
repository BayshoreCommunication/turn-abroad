import React from "react";
import Link from "next/link";
import Image from "next/image";
import independent from "/public/images/independent.png";
import { FaArrowRight } from "react-icons/fa6";
import WorkerConsultationFrom from "./WorkerConsultationFrom";

const IndependentWork = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-10">
      <div className="">
        <figure className="overflow-hidden">
          <Image
            src={independent}
            alt="USA Image"
            className="w-full  "
          />
        </figure>
        <h2 className="text-2xl font-bold text-secondary mt-6 mb-4">
        Our goal is to make the process of working abroad attainable 
        from the comfort of your home. 
        </h2>
        <p className="mb-4 text-justify">
        Aiming to transform borders from being barriers in growth to gateways 
        to success, we specialize in guiding individuals towards fulfilling 
        international careers. With expertise in various career  fields, 
        internal resources, and unwavering commitment, we empower you to 
        navigate the complexities of international employment and landing 
        your dream job. Explore, experience, and excel in your global 
        career ambitions with TurnAbroad. 
        </p>
       
        {/* <Link href={"#"} className="btn btn-primary">Apply Now <FaArrowRight/></Link> */}
      </div>
      <WorkerConsultationFrom/>
      
    </div>
  );
};

export default IndependentWork;
