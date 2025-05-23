import React from "react";
import Image from "next/image";
import CanadaImage from "/public/images/canada.png";
import StudentConsultationFrom from "./StudentConsultationFrom";
import Motion from "../motion/Motion";
import Canada from "../StudentsPage/Countries/Canada/Canada";
import LivingCostChart from "../StudentsPage/Countries/Canada/LivingCostChart";
import { motion } from "framer-motion";

const StudyCanada = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <div className="w-full lg:max-w-[65%] ">
        <motion.div
          className="box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <div className="">
            <figure className="overflow-hidden">
              <Image src={CanadaImage} alt="USA Image" className="w-full  " />
            </figure>
            <h2 className="text-2xl font-bold text-secondary mt-6 mb-4">
              Our goal is to make the process of studying abroad smooth and
              rewarding.
            </h2>
            {/* <p className="text-justify">
            Every individual has their own unique path and we provide support
            and mentorship based on their specific interests or concerns. Are
            you thinking of studying abroad? Get ready to embark on a
            transformative academic adventure with the best study abroad mentors
            from TurnAbroad by your side.
          </p> */}

            {/* <Link href={"#"} className="btn btn-primary">Apply Now <FaArrowRight/></Link> */}
          </div>
        </motion.div>
        <Canada />
      </div>
      <div className="w-full lg:max-w-[35%]  flex flex-col-reverse lg:flex-col">
        <StudentConsultationFrom />
        <Motion effect="fade-up" easing="ease-in-out" duration="2000">
          <div className="my-6 md:my-10 lg:my-16 p-7 bg-[#F3F9FF]">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-normal mb-4 md:mb-8">
              Cost of Living in Canada
            </h2>
            <LivingCostChart />
          </div>
        </Motion>
      </div>
    </div>
  );
};

export default StudyCanada;
